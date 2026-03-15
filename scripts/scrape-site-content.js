#!/usr/bin/env node

/**
 * Scrape live site content from incorporate123.co to markdown files.
 * Reads URLs from internal_html.xlsx, fetches each page, extracts main content,
 * converts to markdown, and saves with URL hierarchy preserved.
 *
 * Usage: node scripts/scrape-site-content.js
 */

import { readFile, mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";
import * as cheerio from "cheerio";
import TurndownService from "turndown";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");

const XLSX_PATH = join(
  PROJECT_ROOT,
  "DOCS/Phase 1 - Discovery & Site Architecture/2- Content Inventory and Audit/internal_html.xlsx"
);
const OUTPUT_DIR = join(
  PROJECT_ROOT,
  "DOCS/Phase 1 - Discovery & Site Architecture/2- Content Inventory and Audit/scraped-content"
);

const DELAY_MS = 500;
const CONCURRENCY = 3; // parallel fetches

// ── Step 1: Read URLs from xlsx ──────────────────────────────────────────────

function readUrls() {
  const workbook = XLSX.readFile(XLSX_PATH);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet);

  // Extract URLs from "Address" column
  const allUrls = rows
    .map((row) => row["Address"] || row["address"] || row["URL"] || row["url"])
    .filter((url) => url && url.startsWith("http"));

  // Deduplicate: normalize trailing slashes, keep first occurrence
  const seen = new Set();
  const urls = [];
  for (const url of allUrls) {
    const normalized = url.replace(/\/+$/, "") || url; // keep root as-is
    if (!seen.has(normalized)) {
      seen.add(normalized);
      urls.push(url);
    }
  }

  console.log(
    `Found ${allUrls.length} URLs in xlsx, ${urls.length} unique (after dedup)`
  );
  return urls;
}

// ── Step 2: Fetch and extract content ────────────────────────────────────────

// Layout image patterns to strip (spacer GIFs, decorative images)
const LAYOUT_IMG_PATTERNS = [
  /\/i\//i, // /i/ directory — layout images
  /item_bg/i,
  /menuitem_bg/i,
  /block_decor/i,
  /spacer/i,
  /craft\d/i,
  /Nevada_Top_/i,
  /corporate_name_search/i,
  /faqs\.gif/i,
  /text_logo_incorporate/i,
];

function extractContent(html, url) {
  const $ = cheerio.load(html);

  // Remove script, style, noscript, iframes
  $("script, style, noscript, iframe").remove();

  // This site uses a table-based layout. The structure is:
  // - Outer table > TD.D contains everything
  // - Several nested tables: logo, nav bar, spacers, then the main 2-col layout, then footer tables
  //
  // Strategy: Find the TD with width="516" (main content column) inside the
  // 2-column layout table that also has a TD width="210" (sidebar).
  // If that fails, fall back to the largest text block in the body.

  let contentEl = null;

  // Strategy 1: Find the 516px-wide content cell (most pages)
  $('td[width="516"]').each((_, el) => {
    const td = $(el);
    const text = td.text().trim();
    if (text.length > 100) {
      contentEl = td;
      return false; // break
    }
  });

  // Strategy 2: Look for wider content cells (some pages use different widths)
  if (!contentEl) {
    const candidates = [];
    $("td").each((_, el) => {
      const td = $(el);
      const width = parseInt(td.attr("width") || "0", 10);
      const text = td.text().trim();
      // Content cells are typically 400-700px wide with substantial text
      if (width >= 400 && text.length > 200) {
        candidates.push({ el: td, textLen: text.length, width });
      }
    });
    if (candidates.length) {
      // Pick the one with the most text
      candidates.sort((a, b) => b.textLen - a.textLen);
      contentEl = candidates[0].el;
    }
  }

  // Strategy 3: Try semantic selectors (in case some pages are different)
  if (!contentEl) {
    for (const sel of ["main", "#content", ".content", "article", '[role="main"]']) {
      const el = $(sel);
      if (el.length && el.text().trim().length > 100) {
        contentEl = el;
        break;
      }
    }
  }

  // Strategy 4: Fallback — get body but strip known chrome
  if (!contentEl) {
    // Remove elements that look like nav/footer by content heuristics
    contentEl = $("body");
  }

  // Clean up the content: remove layout images, sidebar nav lists, breadcrumbs
  const contentHtml = contentEl.html() || "";
  const $content = cheerio.load(contentHtml);

  // Remove images that match layout patterns
  $content("img").each((_, el) => {
    const src = $content(el).attr("src") || "";
    if (LAYOUT_IMG_PATTERNS.some((pat) => pat.test(src))) {
      $content(el).remove();
    }
  });

  // Remove empty table cells and rows that were just layout spacers
  $content("td").each((_, el) => {
    const td = $content(el);
    if (!td.text().trim() && !td.find("img").length) {
      td.remove();
    }
  });

  // Remove breadcrumb-style "Home > Section > Page" patterns
  // These are typically in small tables at the top of content
  $content("td").each((_, el) => {
    const td = $content(el);
    const text = td.text().trim();
    if (/^Home\s*>\s*/.test(text) && text.length < 200) {
      td.closest("tr").remove();
    }
  });

  return $content.html();
}

// ── Step 3: Convert to Markdown ──────────────────────────────────────────────

function createTurndown() {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  // For this table-based site, unwrap layout tables and just emit their text content.
  // Only preserve tables that look like actual data tables (multiple rows with content).
  td.addRule("layoutTable", {
    filter: "table",
    replacement: (content) => `\n${content}\n`,
  });
  td.addRule("tableRow", {
    filter: "tr",
    replacement: (content) => {
      const trimmed = content.trim();
      return trimmed ? `${trimmed}\n\n` : "";
    },
  });
  td.addRule("tableCell", {
    filter: ["td", "th"],
    replacement: (content) => {
      const trimmed = content.trim();
      return trimmed ? `${trimmed} ` : "";
    },
  });

  // Remove empty links and images with no meaningful content
  td.addRule("emptyLinks", {
    filter: (node) =>
      node.nodeName === "A" && !node.textContent.trim() && !node.querySelector("img"),
    replacement: () => "",
  });

  // Remove layout images that slipped through
  td.addRule("layoutImages", {
    filter: (node) => {
      if (node.nodeName !== "IMG") return false;
      const src = node.getAttribute("src") || "";
      return LAYOUT_IMG_PATTERNS.some((pat) => pat.test(src));
    },
    replacement: () => "",
  });

  return td;
}

// ── Step 4: Save with hierarchy ──────────────────────────────────────────────

function urlToFilePath(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/") {
    return "index.md";
  }

  // Remove leading slash
  pathname = pathname.replace(/^\//, "");

  // If path ends with a segment (no extension), make it a .md file
  // e.g., /services/privacy-services → services/privacy-services.md
  // e.g., /learning-center/cat/62 → learning-center/cat/62.md
  return `${pathname}.md`;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function scrapeUrl(url, turndown, scrapeDate) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Incorporate123-Scraper/1.0; content-migration)",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      return { url, error: `HTTP ${response.status}` };
    }

    const html = await response.text();
    const contentHtml = extractContent(html, url);
    const markdown = turndown.turndown(contentHtml);

    // Get page title
    const $ = cheerio.load(html);
    const title = $("title").text().trim() || $("h1").first().text().trim() || "";

    // Build frontmatter
    const frontmatter = [
      "---",
      `source_url: "${url}"`,
      `title: "${title.replace(/"/g, '\\"')}"`,
      `scraped_at: "${scrapeDate}"`,
      "---",
    ].join("\n");

    const filePath = join(OUTPUT_DIR, urlToFilePath(url));
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, `${frontmatter}\n\n${markdown}`, "utf-8");

    return { url, filePath, success: true };
  } catch (err) {
    return { url, error: err.message };
  }
}

async function main() {
  console.log("Scraping incorporate123.co content to markdown...\n");

  const urls = readUrls();
  const turndown = createTurndown();
  const scrapeDate = new Date().toISOString().split("T")[0];

  await mkdir(OUTPUT_DIR, { recursive: true });

  let completed = 0;
  let errors = 0;
  const errorList = [];

  // Process in batches for controlled concurrency
  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      batch.map((url) => scrapeUrl(url, turndown, scrapeDate))
    );

    for (const result of results) {
      completed++;
      if (result.success) {
        // Progress indicator every 10 pages
        if (completed % 10 === 0 || completed === urls.length) {
          process.stdout.write(
            `\r  Progress: ${completed}/${urls.length} pages scraped`
          );
        }
      } else {
        errors++;
        errorList.push(`  ${result.url}: ${result.error}`);
      }
    }

    // Polite delay between batches
    if (i + CONCURRENCY < urls.length) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  console.log(`\n\nDone!`);
  console.log(`  Scraped: ${completed - errors}/${urls.length} pages`);
  console.log(`  Output:  ${OUTPUT_DIR}`);

  if (errors > 0) {
    console.log(`  Errors:  ${errors}`);
    console.log(errorList.join("\n"));
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
