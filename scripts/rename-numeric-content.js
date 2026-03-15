#!/usr/bin/env node

/**
 * Renames numeric scraped content files/folders to descriptive names.
 *
 * Default: dry-run (logs what would be renamed)
 * --execute: actually performs renames
 */

const fs = require("fs");
const path = require("path");

const CAT_DIR = path.resolve(
  __dirname,
  "../DOCS/Phase 1 - Discovery & Site Architecture/2- Content Inventory and Audit/scraped-content/learning-center/cat"
);

const execute = process.argv.includes("--execute");

function slugify(text, maxLen = 50) {
  return text
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, maxLen)
    .replace(/-$/, "");
}

/**
 * Extract a descriptive title from a file's content by finding the
 * self-referencing markdown link — a link whose URL path matches the
 * file's own source path.
 */
function extractTitle(content, selfPath) {
  // selfPath like /learning-center/cat/12 or /learning-center/cat/12/item/47
  // Find [Title Text](selfPath) — exact match
  const escaped = selfPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`\\[([^\\]]+)\\]\\(${escaped}\\)`);
  const match = content.match(re);
  if (match) return match[1].trim();

  // Fallback: first line that isn't frontmatter, breadcrumb, search nav, or a list item
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("---")) continue;
    if (trimmed.startsWith("[Home]")) continue;
    if (trimmed.startsWith("Search:")) continue;
    if (trimmed.startsWith("-")) continue;
    if (trimmed.startsWith("source_url:")) continue;
    if (trimmed.startsWith("title:")) continue;
    if (trimmed.startsWith("scraped_at:")) continue;
    // Skip very short lines (likely noise)
    if (trimmed.length < 3) continue;
    return trimmed;
  }
  return null;
}

function isNumeric(name) {
  return /^\d+$/.test(name);
}

const renames = [];

// --- Phase 1: Item files (deepest first) ---
const catEntries = fs.readdirSync(CAT_DIR, { withFileTypes: true });
for (const catEntry of catEntries) {
  if (!catEntry.isDirectory() || !isNumeric(catEntry.name)) continue;
  const catNum = catEntry.name;
  const itemDir = path.join(CAT_DIR, catNum, "item");
  if (!fs.existsSync(itemDir)) continue;

  const itemFiles = fs.readdirSync(itemDir).filter((f) => f.endsWith(".md"));
  for (const itemFile of itemFiles) {
    const itemNum = itemFile.replace(".md", "");
    if (!isNumeric(itemNum)) continue;

    const filePath = path.join(itemDir, itemFile);
    const content = fs.readFileSync(filePath, "utf-8");
    const selfPath = `/learning-center/cat/${catNum}/item/${itemNum}`;
    const title = extractTitle(content, selfPath);

    if (title) {
      const newName = `${itemNum}-${slugify(title)}.md`;
      renames.push({ from: filePath, to: path.join(itemDir, newName), label: `item ${catNum}/${itemNum}` });
    } else {
      console.warn(`  SKIP (no title): cat/${catNum}/item/${itemFile}`);
    }
  }
}

// --- Phase 2: Category .md files ---
for (const catEntry of catEntries) {
  if (!catEntry.isFile() || !catEntry.name.endsWith(".md")) continue;
  const catNum = catEntry.name.replace(".md", "");
  if (!isNumeric(catNum)) continue;

  const filePath = path.join(CAT_DIR, catEntry.name);
  const content = fs.readFileSync(filePath, "utf-8");
  const selfPath = `/learning-center/cat/${catNum}`;
  const title = extractTitle(content, selfPath);

  if (title) {
    const newName = `${catNum}-${slugify(title)}.md`;
    renames.push({ from: filePath, to: path.join(CAT_DIR, newName), label: `cat/${catNum}.md` });
  } else {
    console.warn(`  SKIP (no title): cat/${catEntry.name}`);
  }
}

// --- Phase 3: Category folders (last — path changes affect children) ---
// We need to update the "from" paths of already-queued item renames
// if we renamed the parent folder. Since we apply in order and items
// are already renamed by this point, we just rename the folder.
for (const catEntry of catEntries) {
  if (!catEntry.isDirectory() || !isNumeric(catEntry.name)) continue;
  const catNum = catEntry.name;

  // Derive folder name from the corresponding .md file's title
  const mdPath = path.join(CAT_DIR, `${catNum}.md`);
  let title = null;
  if (fs.existsSync(mdPath)) {
    const content = fs.readFileSync(mdPath, "utf-8");
    const selfPath = `/learning-center/cat/${catNum}`;
    title = extractTitle(content, selfPath);
  }

  if (title) {
    const newName = `${catNum}-${slugify(title)}`;
    renames.push({
      from: path.join(CAT_DIR, catNum),
      to: path.join(CAT_DIR, newName),
      label: `cat/${catNum}/`,
    });
  } else {
    console.warn(`  SKIP (no title): cat/${catNum}/`);
  }
}

// --- Execute or dry-run ---
console.log(`\n${execute ? "EXECUTING" : "DRY RUN"} — ${renames.length} renames\n`);

let success = 0;
let errors = 0;
for (const r of renames) {
  const fromRel = path.relative(CAT_DIR, r.from);
  const toRel = path.relative(CAT_DIR, r.to);
  if (r.from === r.to) continue; // no-op

  if (execute) {
    try {
      fs.renameSync(r.from, r.to);
      console.log(`  ✓ ${fromRel}  →  ${toRel}`);
      success++;
    } catch (err) {
      console.error(`  ✗ ${fromRel}: ${err.message}`);
      errors++;
    }
  } else {
    console.log(`  ${fromRel}  →  ${toRel}`);
    success++;
  }
}

console.log(`\nDone: ${success} renamed, ${errors} errors.`);
if (!execute) {
  console.log("Run with --execute to apply renames.");
}
