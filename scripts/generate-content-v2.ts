/**
 * generate-content-v2.ts
 *
 * Generates ~75 content markdown files from REAL content sources:
 * 1. Scraped content from current site (319 .md files) — PRIMARY
 * 2. XLSX content migration map — URL mapping + dispositions
 * 3. Package pricing from prototype data — AUXILIARY only
 *
 * Usage:
 *   npx tsx scripts/generate-content-v2.ts
 *   npx tsx scripts/generate-content-v2.ts --dry-run
 */

import * as fs from "fs";
import * as path from "path";
import XLSX from "xlsx";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ROOT = path.resolve(__dirname, "..");
const SCRAPED_DIR = path.join(
  ROOT,
  "DOCS/Phase 1 - Discovery & Site Architecture/2- Content Inventory and Audit/scraped-content"
);
const XLSX_PATH = path.join(
  ROOT,
  "DOCS/Phase 1 - Discovery & Site Architecture/7 - Deliverables/v3-content-audit/Incorporate123_Content_Migration_Map_and_Redirect_Plan.xlsx"
);
const PROTO_DIR = path.join(ROOT, "inc123-prototype");
const OUT_DIR = path.join(ROOT, "DOCS/Phase 2 - UX & Design/content");

const DRY_RUN = process.argv.includes("--dry-run");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ScrapedPage {
  sourceUrl: string;
  title: string;
  body: string;
  wordCount: number;
}

interface MigrationRow {
  currentUrl: string;
  currentTitle: string;
  words: number;
  inlinks: number;
  disposition: "Preserve" | "Enhance" | "Consolidate" | "Retire";
  newUrl: string;
  newPageName: string;
  targetPillar: string;
  contentAction: string;
  notes: string;
}

interface GapPage {
  newUrl: string;
  pageName: string;
  pageType: string;
  targetPillar: string;
  priority: string;
  contentSource: string;
  notes: string;
}

interface FAQItemRow {
  itemId: number;
  itemTitle: string;
  categoryId: number;
  categoryName: string;
  wordCount: number;
  duplicate: string;
  appearances: number;
  destination: string;
}

interface PageManifest {
  filePath: string; // relative to OUT_DIR e.g. "privacy/anonymous-llc.md"
  title: string;
  slug: string;
  pillar: string | null;
  type: string;
  priority: string;
  disposition: string;
  sourceUrls: string[];
  scrapedContent: string[]; // Array of scraped body texts
  faqItems: { question: string; answer: string }[];
  notes: string;
  seoKeyword: string;
  relatedPackages: string[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir: string) {
  if (DRY_RUN) return;
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath: string, content: string) {
  if (DRY_RUN) {
    console.log(`[dry-run] Would write: ${path.relative(OUT_DIR, filePath)}`);
    return;
  }
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf-8");
}

function normalizeUrl(url: string): string {
  if (!url) return "";
  return url.toLowerCase().replace(/\/+$/, "").replace(/^\//, "/");
}

function countWords(text: string): number {
  return text
    .replace(/[#*\-|>_`~\[\](){}]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

function yamlEscape(s: string): string {
  if (!s) return '""';
  if (
    s.includes(":") ||
    s.includes("#") ||
    s.includes('"') ||
    s.includes("'") ||
    s.includes("\n")
  ) {
    return `"${s.replace(/"/g, '\\"')}"`;
  }
  return `"${s}"`;
}

// ---------------------------------------------------------------------------
// 1. Load Scraped Content
// ---------------------------------------------------------------------------

function loadScrapedContent(): Map<string, ScrapedPage> {
  const map = new Map<string, ScrapedPage>();

  function walkDir(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(fullPath, "utf-8");
        const page = parseScrapedFile(raw);
        if (page) {
          const key = normalizeUrl(page.sourceUrl);
          map.set(key, page);
        }
      }
    }
  }

  walkDir(SCRAPED_DIR);
  return map;
}

function parseScrapedFile(raw: string): ScrapedPage | null {
  // Parse frontmatter
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) {
    // No frontmatter — treat entire file as body
    return null;
  }

  const fmBlock = fmMatch[1];
  const body = fmMatch[2].trim();

  // Extract source_url
  const urlMatch = fmBlock.match(/source_url:\s*"([^"]+)"/);
  const titleMatch = fmBlock.match(/title:\s*"([^"]+)"/);

  if (!urlMatch) return null;

  const sourceUrl = urlMatch[1].replace(/^https?:\/\/[^/]+/, "");

  return {
    sourceUrl,
    title: titleMatch ? titleMatch[1] : "",
    body: stripLCBoilerplate(body),
    wordCount: countWords(body),
  };
}

function stripLCBoilerplate(body: string): string {
  const lines = body.split("\n");
  const cleaned: string[] = [];
  let inNavBlock = false;

  for (const line of lines) {
    // Skip breadcrumb lines
    if (line.match(/^\[Home\]\(\//)) continue;
    // Skip "Search: Category jump:" blocks
    if (line.match(/^Search:/i) || line.match(/^Category jump:/i)) {
      inNavBlock = true;
      continue;
    }
    // Skip LC category sidebar links
    if (line.match(/^\s*-\s*\[.*\]\(\/learning-center\/cat\//)) continue;
    // Skip prev/next navigation
    if (line.match(/^(<<\s*Previous|Next\s*>>)/)) continue;
    if (line.match(/^\[<<\s*Previous/)) continue;
    if (line.match(/^\[Next\s*>>/)) continue;
    // Skip "Related items" section
    if (line.match(/^Related items/i)) {
      inNavBlock = true;
      continue;
    }
    // Skip order buttons
    if (line.match(/ordernowbutton/i)) continue;
    if (line.match(/^\[!\[incorporate123/i)) continue;

    if (inNavBlock && line.trim() === "") {
      inNavBlock = false;
      continue;
    }
    if (inNavBlock) continue;

    cleaned.push(line);
  }

  return cleaned.join("\n").trim();
}

// ---------------------------------------------------------------------------
// 2. Load XLSX Migration Data
// ---------------------------------------------------------------------------

interface MigrationData {
  migrationRows: MigrationRow[];
  gapPages: GapPage[];
  faqItems: FAQItemRow[];
  consolidateMap: Map<string, MigrationRow[]>; // newUrl → source rows
}

function loadMigrationData(): MigrationData {
  const wb = XLSX.readFile(XLSX_PATH);

  // Migration Map sheet
  const migSheet = wb.Sheets["Migration Map"];
  const migRaw = XLSX.utils.sheet_to_json(migSheet, {
    header: 1,
  }) as any[][];
  const migrationRows: MigrationRow[] = [];
  for (let i = 1; i < migRaw.length; i++) {
    const r = migRaw[i];
    if (!r[0]) continue;
    migrationRows.push({
      currentUrl: r[0] || "",
      currentTitle: r[1] || "",
      words: r[2] || 0,
      inlinks: r[3] || 0,
      disposition: r[4] || "",
      newUrl: r[5] || "",
      newPageName: r[6] || "",
      targetPillar: r[7] || "",
      contentAction: r[8] || "",
      notes: r[9] || "",
    });
  }

  // Gap Analysis sheet
  const gapSheet = wb.Sheets["Gap Analysis"];
  const gapRaw = XLSX.utils.sheet_to_json(gapSheet, {
    header: 1,
  }) as any[][];
  const gapPages: GapPage[] = [];
  for (let i = 1; i < gapRaw.length; i++) {
    const r = gapRaw[i];
    if (!r[0] || !r[0].startsWith("/")) continue;
    gapPages.push({
      newUrl: r[0],
      pageName: r[1] || "",
      pageType: r[2] || "",
      targetPillar: r[3] || "",
      priority: r[4] || "",
      contentSource: r[5] || "",
      notes: r[6] || "",
    });
  }

  // FAQ Items sheet
  const faqSheet = wb.Sheets["FAQ Items"];
  const faqRaw = XLSX.utils.sheet_to_json(faqSheet, {
    header: 1,
  }) as any[][];
  const faqItems: FAQItemRow[] = [];
  for (let i = 1; i < faqRaw.length; i++) {
    const r = faqRaw[i];
    if (typeof r[0] !== "number") continue;
    faqItems.push({
      itemId: r[0],
      itemTitle: r[1] || "",
      categoryId: r[2] || 0,
      categoryName: r[3] || "",
      wordCount: r[4] || 0,
      duplicate: r[5] || "",
      appearances: r[6] || 0,
      destination: r[7] || "",
    });
  }

  // Build consolidation map
  const consolidateMap = new Map<string, MigrationRow[]>();
  for (const row of migrationRows) {
    if (
      row.disposition === "Consolidate" &&
      row.newUrl &&
      row.newUrl.startsWith("/")
    ) {
      const key = normalizeUrl(row.newUrl);
      if (!consolidateMap.has(key)) consolidateMap.set(key, []);
      consolidateMap.get(key)!.push(row);
    }
  }

  return { migrationRows, gapPages, faqItems, consolidateMap };
}

// ---------------------------------------------------------------------------
// 3. Load Package Pricing (auxiliary)
// ---------------------------------------------------------------------------

interface PackagePricing {
  id: string;
  name: string;
  tier: string;
  state: string;
  llcFormation: number;
  llcRenewal: number;
  corpFormation: number;
  corpRenewal: number;
  description: string;
  badge?: string;
  features: { name: string; status: string; tooltip?: string }[];
  addOns: { name: string; price: number; description: string }[];
}

function loadPackagePricing(): Map<string, PackagePricing> {
  const filePath = path.join(PROTO_DIR, "src/data/packages.ts");
  let code = fs.readFileSync(filePath, "utf-8");
  // Strip imports and type annotations
  code = code.replace(/^import\s+.*$/gm, "");
  code = code.replace(/^export\s+/gm, "");
  code = code.replace(/^(const\s+\w+)\s*:\s*[^=]+=\s*/gm, "$1 = ");

  const fn = new Function(`${code}\nreturn packages;`);
  const packages = fn() as any[];

  const map = new Map<string, PackagePricing>();
  for (const pkg of packages) {
    map.set(pkg.id, {
      id: pkg.id,
      name: pkg.name,
      tier: pkg.tier,
      state: pkg.state,
      llcFormation: pkg.prices.llc.formation,
      llcRenewal: pkg.prices.llc.renewal,
      corpFormation: pkg.prices.corp.formation,
      corpRenewal: pkg.prices.corp.renewal,
      description: pkg.description,
      badge: pkg.badge,
      features: pkg.features,
      addOns: pkg.addOns,
    });
  }
  return map;
}

// ---------------------------------------------------------------------------
// 4. Build Page Manifest
// ---------------------------------------------------------------------------

// The canonical page list from IA v4, manually specified
interface PageDef {
  filePath: string;
  slug: string;
  title: string;
  pillar: string | null;
  type: string;
  priority: string;
  seoKeyword: string;
  relatedPackages: string[];
}

function getPageDefs(): PageDef[] {
  return [
    // Utility pages
    { filePath: "_index.md", slug: "/", title: "Incorporate123 — Privacy, Asset Protection & Business Formation", pillar: null, type: "utility", priority: "P1", seoKeyword: "anonymous llc formation", relatedPackages: [] },
    { filePath: "about.md", slug: "/about/", title: "About Incorporate123", pillar: null, type: "utility", priority: "P1", seoKeyword: "about incorporate123", relatedPackages: [] },
    { filePath: "contact.md", slug: "/contact/", title: "Contact Incorporate123", pillar: null, type: "utility", priority: "P1", seoKeyword: "contact incorporate123", relatedPackages: [] },
    { filePath: "faq.md", slug: "/faq/", title: "Frequently Asked Questions", pillar: null, type: "utility", priority: "P1", seoKeyword: "llc formation faq", relatedPackages: [] },
    { filePath: "blog.md", slug: "/blog/", title: "Blog", pillar: null, type: "utility", priority: "P2", seoKeyword: "business formation blog", relatedPackages: [] },
    { filePath: "testimonials.md", slug: "/testimonials/", title: "Client Testimonials", pillar: null, type: "utility", priority: "P1", seoKeyword: "incorporate123 reviews", relatedPackages: [] },
    { filePath: "compare-packages.md", slug: "/compare-packages/", title: "Compare Packages & Pricing", pillar: null, type: "utility", priority: "P1", seoKeyword: "llc formation packages comparison", relatedPackages: [] },
    { filePath: "privacy-policy.md", slug: "/privacy-policy/", title: "Privacy Policy", pillar: null, type: "utility", priority: "P1", seoKeyword: "", relatedPackages: [] },
    { filePath: "terms.md", slug: "/terms/", title: "Terms of Service", pillar: null, type: "utility", priority: "P1", seoKeyword: "", relatedPackages: [] },

    // Privacy pillar (10 pages)
    { filePath: "privacy/_index.md", slug: "/privacy/", title: "Business Privacy", pillar: "privacy", type: "pillar-hub", priority: "P1", seoKeyword: "business privacy", relatedPackages: ["wyoming-gold", "nevada-gold"] },
    { filePath: "privacy/anonymous-llc.md", slug: "/anonymous-llc/", title: "Anonymous LLC Formation", pillar: "privacy", type: "cluster", priority: "P1", seoKeyword: "anonymous llc", relatedPackages: ["wyoming-gold", "nevada-gold"] },
    { filePath: "privacy/anonymous-corporation.md", slug: "/anonymous-corporation/", title: "Anonymous Corporation Formation", pillar: "privacy", type: "cluster", priority: "P2", seoKeyword: "anonymous corporation", relatedPackages: ["wyoming-gold", "nevada-gold"] },
    { filePath: "privacy/nominee-services.md", slug: "/nominee-services/", title: "Year-Round Nominee Services", pillar: "privacy", type: "cluster", priority: "P1", seoKeyword: "nominee services", relatedPackages: ["wyoming-gold", "nevada-gold"] },
    { filePath: "privacy/wyoming-privacy.md", slug: "/wyoming-privacy/", title: "Wyoming Privacy", pillar: "privacy", type: "cluster", priority: "P1", seoKeyword: "wyoming privacy llc", relatedPackages: ["wyoming-gold"] },
    { filePath: "privacy/nevada-privacy.md", slug: "/nevada-privacy/", title: "Nevada Privacy", pillar: "privacy", type: "cluster", priority: "P1", seoKeyword: "nevada privacy llc", relatedPackages: ["nevada-gold"] },
    { filePath: "privacy/california-private-incorporation.md", slug: "/california-private-incorporation/", title: "California Private Incorporation", pillar: "privacy", type: "cluster", priority: "P1", seoKeyword: "california anonymous llc", relatedPackages: ["california-private"] },
    { filePath: "privacy/florida-private-incorporation.md", slug: "/florida-private-incorporation/", title: "Florida Private Incorporation", pillar: "privacy", type: "cluster", priority: "P1", seoKeyword: "florida anonymous llc", relatedPackages: ["florida-private"] },

    // Privacy comparisons
    { filePath: "compare/best-state-for-privacy.md", slug: "/best-state-for-privacy/", title: "Best State for Privacy", pillar: "privacy", type: "comparison", priority: "P1", seoKeyword: "best state for llc privacy", relatedPackages: ["wyoming-gold", "nevada-gold"] },
    { filePath: "compare/wyoming-vs-nevada-privacy.md", slug: "/wyoming-vs-nevada-privacy/", title: "Wyoming vs Nevada for Privacy", pillar: "privacy", type: "comparison", priority: "P2", seoKeyword: "wyoming vs nevada privacy", relatedPackages: ["wyoming-gold", "nevada-gold"] },

    // Asset Protection pillar (9 pages)
    { filePath: "asset-protection/_index.md", slug: "/asset-protection/", title: "Asset Protection", pillar: "asset-protection", type: "pillar-hub", priority: "P1", seoKeyword: "asset protection llc", relatedPackages: ["wyoming-gold"] },
    { filePath: "asset-protection/nevada-asset-protection.md", slug: "/nevada-asset-protection/", title: "Nevada Asset Protection", pillar: "asset-protection", type: "cluster", priority: "P1", seoKeyword: "nevada asset protection", relatedPackages: ["nevada-gold"] },
    { filePath: "asset-protection/wyoming-asset-protection.md", slug: "/wyoming-asset-protection/", title: "Wyoming Asset Protection", pillar: "asset-protection", type: "cluster", priority: "P1", seoKeyword: "wyoming asset protection", relatedPackages: ["wyoming-gold"] },
    { filePath: "asset-protection/investment-holding-llc.md", slug: "/investment-holding-llc/", title: "Investment Holding LLC", pillar: "asset-protection", type: "cluster", priority: "P2", seoKeyword: "investment holding llc", relatedPackages: ["wyoming-gold"] },
    { filePath: "asset-protection/charging-order-protection.md", slug: "/charging-order-protection/", title: "Charging Order Protection", pillar: "asset-protection", type: "cluster", priority: "P1", seoKeyword: "charging order protection", relatedPackages: ["wyoming-gold"] },
    { filePath: "asset-protection/real-estate-asset-protection.md", slug: "/real-estate-asset-protection/", title: "Real Estate Asset Protection", pillar: "asset-protection", type: "cluster", priority: "P2", seoKeyword: "real estate asset protection llc", relatedPackages: ["wyoming-gold"] },
    { filePath: "asset-protection/llc-vs-living-trust.md", slug: "/llc-vs-living-trust/", title: "LLC vs Living Trust", pillar: "asset-protection", type: "cluster", priority: "P2", seoKeyword: "llc vs living trust", relatedPackages: ["wyoming-gold"] },

    // AP comparisons
    { filePath: "compare/best-state-for-asset-protection.md", slug: "/best-state-asset-protection/", title: "Best State for Asset Protection", pillar: "asset-protection", type: "comparison", priority: "P2", seoKeyword: "best state for asset protection", relatedPackages: ["wyoming-gold"] },
    { filePath: "compare/wyoming-vs-nevada-asset-protection.md", slug: "/wyoming-vs-nevada-asset-protection/", title: "Wyoming vs Nevada for Asset Protection", pillar: "asset-protection", type: "comparison", priority: "P2", seoKeyword: "wyoming vs nevada asset protection", relatedPackages: ["wyoming-gold", "nevada-gold"] },

    // Formation pillar (11 pages)
    { filePath: "formation/_index.md", slug: "/formation/", title: "Company Formation", pillar: "formation", type: "pillar-hub", priority: "P1", seoKeyword: "llc formation service", relatedPackages: ["wyoming-silver", "nevada-silver"] },
    { filePath: "formation/wyoming-llc.md", slug: "/wyoming-llc/", title: "Wyoming LLC Formation", pillar: "formation", type: "cluster", priority: "P1", seoKeyword: "wyoming llc formation", relatedPackages: ["wyoming-gold", "wyoming-silver"] },
    { filePath: "formation/wyoming-corporation.md", slug: "/wyoming-corporation/", title: "Wyoming Corporation", pillar: "formation", type: "cluster", priority: "P2", seoKeyword: "wyoming corporation", relatedPackages: ["wyoming-gold", "wyoming-silver"] },
    { filePath: "formation/nevada-llc.md", slug: "/nevada-llc/", title: "Nevada LLC Formation", pillar: "formation", type: "cluster", priority: "P1", seoKeyword: "nevada llc formation", relatedPackages: ["nevada-gold", "nevada-silver"] },
    { filePath: "formation/nevada-corporation.md", slug: "/nevada-corporation/", title: "Nevada Corporation", pillar: "formation", type: "cluster", priority: "P2", seoKeyword: "nevada corporation formation", relatedPackages: ["nevada-gold", "nevada-silver"] },
    { filePath: "formation/shelf-companies.md", slug: "/shelf-companies/", title: "Shelf Companies", pillar: "formation", type: "cluster", priority: "P1", seoKeyword: "shelf companies for sale", relatedPackages: ["shelf-companies"] },
    { filePath: "formation/entity-tax-guide.md", slug: "/entity-tax-guide/", title: "Entity Tax Guide", pillar: "formation", type: "cluster", priority: "P2", seoKeyword: "llc vs s corp vs c corp tax", relatedPackages: [] },

    // Formation comparisons
    { filePath: "compare/wyoming-vs-nevada.md", slug: "/wyoming-vs-nevada/", title: "Wyoming vs Nevada LLC", pillar: "formation", type: "comparison", priority: "P1", seoKeyword: "wyoming vs nevada llc", relatedPackages: ["wyoming-gold", "nevada-gold"] },
    { filePath: "compare/shelf-company-vs-new-formation.md", slug: "/shelf-company-vs-new-formation/", title: "Shelf Company vs New Formation", pillar: "formation", type: "comparison", priority: "P2", seoKeyword: "shelf company vs new llc", relatedPackages: ["shelf-companies"] },
    { filePath: "compare/llc-vs-corporation.md", slug: "/llc-vs-corporation/", title: "LLC vs Corporation", pillar: "formation", type: "comparison", priority: "P1", seoKeyword: "llc vs corporation", relatedPackages: [] },
    { filePath: "compare/llc-vs-scorp-vs-ccorp-tax.md", slug: "/llc-vs-scorp-vs-ccorp-tax/", title: "LLC vs S-Corp vs C-Corp Tax Comparison", pillar: "formation", type: "comparison", priority: "P2", seoKeyword: "llc vs s corp vs c corp", relatedPackages: [] },

    // Compliance pillar (10 pages)
    { filePath: "compliance/_index.md", slug: "/compliance/", title: "Compliance Services", pillar: "compliance", type: "pillar-hub", priority: "P1", seoKeyword: "llc compliance services", relatedPackages: [] },
    { filePath: "compliance/registered-agent.md", slug: "/registered-agent/", title: "Registered Agent Services", pillar: "compliance", type: "cluster", priority: "P1", seoKeyword: "registered agent service", relatedPackages: [] },
    { filePath: "compliance/wyoming-registered-agent.md", slug: "/wyoming-registered-agent/", title: "Wyoming Registered Agent", pillar: "compliance", type: "cluster", priority: "P2", seoKeyword: "wyoming registered agent", relatedPackages: ["wyoming-gold", "wyoming-silver"] },
    { filePath: "compliance/nevada-registered-agent.md", slug: "/nevada-registered-agent/", title: "Nevada Registered Agent", pillar: "compliance", type: "cluster", priority: "P2", seoKeyword: "nevada registered agent", relatedPackages: ["nevada-gold", "nevada-silver"] },
    { filePath: "compliance/annual-reports.md", slug: "/annual-reports/", title: "Annual Reports & Renewal", pillar: "compliance", type: "cluster", priority: "P1", seoKeyword: "annual report filing service", relatedPackages: [] },
    { filePath: "compliance/foreign-registration.md", slug: "/foreign-state-registration/", title: "Foreign State Registration", pillar: "compliance", type: "cluster", priority: "P2", seoKeyword: "foreign state registration", relatedPackages: ["california-private", "florida-private"] },
    { filePath: "compliance/domestication.md", slug: "/domestication/", title: "Entity Domestication", pillar: "compliance", type: "cluster", priority: "P2", seoKeyword: "llc domestication", relatedPackages: [] },
    { filePath: "compliance/second-tier-state-filings.md", slug: "/second-tier-state-filings/", title: "Second-Tier State Filings", pillar: "compliance", type: "cluster", priority: "P2", seoKeyword: "multi-state filing", relatedPackages: [] },
    { filePath: "compliance/shares-corporate-records.md", slug: "/shares-corporate-records/", title: "Shares & Corporate Records", pillar: "compliance", type: "cluster", priority: "P2", seoKeyword: "corporate records service", relatedPackages: [] },
    { filePath: "compliance/tax-obligations.md", slug: "/tax-obligations/", title: "Tax Filing & Obligations", pillar: "compliance", type: "cluster", priority: "P2", seoKeyword: "llc tax obligations", relatedPackages: [] },

    // Package pages (8)
    { filePath: "packages/wyoming-gold.md", slug: "/wyoming-private-incorporation/", title: "Wyoming Gold LLC", pillar: null, type: "package", priority: "P1", seoKeyword: "wyoming gold llc package", relatedPackages: ["wyoming-gold"] },
    { filePath: "packages/wyoming-silver.md", slug: "/wyoming-incorporation/", title: "Wyoming Silver LLC", pillar: null, type: "package", priority: "P1", seoKeyword: "wyoming llc package", relatedPackages: ["wyoming-silver"] },
    { filePath: "packages/nevada-gold.md", slug: "/nevada-private-incorporation/", title: "Nevada Gold LLC", pillar: null, type: "package", priority: "P1", seoKeyword: "nevada gold llc package", relatedPackages: ["nevada-gold"] },
    { filePath: "packages/nevada-silver.md", slug: "/nevada-incorporation/", title: "Nevada Silver LLC", pillar: null, type: "package", priority: "P1", seoKeyword: "nevada llc package", relatedPackages: ["nevada-silver"] },
    { filePath: "packages/nevada-bronze.md", slug: "/nevada-basic-incorporation/", title: "Nevada Bronze LLC", pillar: null, type: "package", priority: "P1", seoKeyword: "nevada basic llc", relatedPackages: ["nevada-bronze"] },
    { filePath: "packages/california-private.md", slug: "/california-private-incorporation/", title: "California Private LLC", pillar: null, type: "package", priority: "P1", seoKeyword: "california private llc", relatedPackages: ["california-private"] },
    { filePath: "packages/florida-private.md", slug: "/florida-private-incorporation/", title: "Florida Private LLC", pillar: null, type: "package", priority: "P1", seoKeyword: "florida private llc", relatedPackages: ["florida-private"] },
    { filePath: "packages/shelf-companies.md", slug: "/packages/shelf-companies/", title: "Shelf Company Packages", pillar: null, type: "package", priority: "P1", seoKeyword: "shelf company for sale", relatedPackages: ["shelf-companies"] },

    // State hubs (4)
    { filePath: "states/wyoming.md", slug: "/wyoming/", title: "Wyoming Business Formation & Privacy", pillar: null, type: "state-hub", priority: "P1", seoKeyword: "wyoming llc formation", relatedPackages: ["wyoming-gold", "wyoming-silver"] },
    { filePath: "states/nevada.md", slug: "/nevada/", title: "Nevada Business Formation & Privacy", pillar: null, type: "state-hub", priority: "P1", seoKeyword: "nevada llc formation", relatedPackages: ["nevada-gold", "nevada-silver", "nevada-bronze"] },
    { filePath: "states/california.md", slug: "/california/", title: "California Business Formation", pillar: null, type: "state-hub", priority: "P2", seoKeyword: "california llc formation", relatedPackages: ["california-private"] },
    { filePath: "states/florida.md", slug: "/florida/", title: "Florida Business Formation", pillar: null, type: "state-hub", priority: "P2", seoKeyword: "florida llc formation", relatedPackages: ["florida-private"] },

    // Offshore (6)
    { filePath: "offshore/_index.md", slug: "/offshore/", title: "International & Offshore Services", pillar: null, type: "offshore", priority: "P1", seoKeyword: "offshore company formation", relatedPackages: [] },
    { filePath: "offshore/nevis.md", slug: "/offshore/nevis/", title: "Nevis International Corporation/LLC", pillar: null, type: "offshore", priority: "P1", seoKeyword: "nevis llc formation", relatedPackages: [] },
    { filePath: "offshore/bvi.md", slug: "/offshore/bvi/", title: "BVI Business Company", pillar: null, type: "offshore", priority: "P1", seoKeyword: "bvi company formation", relatedPackages: [] },
    { filePath: "offshore/panama.md", slug: "/offshore/panama/", title: "Panama Corporation", pillar: null, type: "offshore", priority: "P1", seoKeyword: "panama corporation formation", relatedPackages: [] },
    { filePath: "offshore/hong-kong.md", slug: "/offshore/hong-kong/", title: "Hong Kong Limited Company", pillar: null, type: "offshore", priority: "P1", seoKeyword: "hong kong company formation", relatedPackages: [] },
    { filePath: "offshore/irs-compliance.md", slug: "/offshore/irs-compliance/", title: "IRS Compliance for Offshore Structures", pillar: null, type: "offshore", priority: "P1", seoKeyword: "irs offshore reporting requirements", relatedPackages: [] },

    // Bonus comparisons from prototype (P2)
    { filePath: "compare/gold-vs-silver-wyoming.md", slug: "/gold-vs-silver-wyoming/", title: "Gold vs Silver Wyoming", pillar: "formation", type: "comparison", priority: "P2", seoKeyword: "wyoming gold vs silver llc", relatedPackages: ["wyoming-gold", "wyoming-silver"] },
    { filePath: "compare/gold-vs-silver-nevada.md", slug: "/gold-vs-silver-nevada/", title: "Gold vs Silver Nevada", pillar: "formation", type: "comparison", priority: "P2", seoKeyword: "nevada gold vs silver llc", relatedPackages: ["nevada-gold", "nevada-silver"] },
    { filePath: "compare/wyoming-vs-delaware.md", slug: "/wyoming-vs-delaware/", title: "Wyoming vs Delaware", pillar: "formation", type: "comparison", priority: "P2", seoKeyword: "wyoming vs delaware llc", relatedPackages: ["wyoming-gold"] },
    { filePath: "compare/incorporate123-vs-competitors.md", slug: "/incorporate123-vs-competitors/", title: "Incorporate123 vs Competitors", pillar: null, type: "comparison", priority: "P2", seoKeyword: "incorporate123 review", relatedPackages: ["wyoming-gold"] },
  ];
}

// Map slug → scraped source URLs (from migration map)
function buildSourceMap(
  migrationRows: MigrationRow[],
  consolidateMap: Map<string, MigrationRow[]>
): Map<string, string[]> {
  const sourceMap = new Map<string, string[]>();

  // Preserve and Enhance rows: direct mapping
  for (const row of migrationRows) {
    if (
      (row.disposition === "Preserve" || row.disposition === "Enhance") &&
      row.newUrl
    ) {
      const key = normalizeUrl(row.newUrl);
      if (!sourceMap.has(key)) sourceMap.set(key, []);
      sourceMap.get(key)!.push(normalizeUrl(row.currentUrl));
    }
  }

  // Consolidate rows targeting specific pages
  for (const [newUrl, rows] of consolidateMap) {
    if (!sourceMap.has(newUrl)) sourceMap.set(newUrl, []);
    for (const row of rows) {
      sourceMap.get(newUrl)!.push(normalizeUrl(row.currentUrl));
    }
  }

  return sourceMap;
}

// ---------------------------------------------------------------------------
// 5. Build & Generate
// ---------------------------------------------------------------------------

function buildManifest(
  pageDefs: PageDef[],
  scrapedContent: Map<string, ScrapedPage>,
  sourceMap: Map<string, string[]>,
  faqItems: FAQItemRow[],
  migrationRows: MigrationRow[],
  gapPages: GapPage[]
): PageManifest[] {
  const manifests: PageManifest[] = [];

  // Build FAQ destination map: destination → unique FAQ items
  const faqByDest = new Map<string, { question: string; answer: string }[]>();
  const seenFaqIds = new Map<string, Set<number>>();

  for (const faqItem of faqItems) {
    if (!faqItem.destination) continue;
    const dest = normalizeUrl(faqItem.destination);
    if (!faqByDest.has(dest)) {
      faqByDest.set(dest, []);
      seenFaqIds.set(dest, new Set());
    }
    // Deduplicate by item ID
    if (seenFaqIds.get(dest)!.has(faqItem.itemId)) continue;
    seenFaqIds.get(dest)!.add(faqItem.itemId);

    // Try to find the actual content from scraped LC items
    const faqContent = findFaqContent(
      faqItem.itemId,
      faqItem.itemTitle,
      faqItem.categoryId,
      scrapedContent
    );

    faqByDest.get(dest)!.push({
      question: faqItem.itemTitle,
      answer: faqContent || `<!-- TODO: Write answer for "${faqItem.itemTitle}" -->`,
    });
  }

  for (const def of pageDefs) {
    const slugKey = normalizeUrl(def.slug);
    const sources = sourceMap.get(slugKey) || [];

    // Collect scraped content
    const scrapedBodies: string[] = [];
    const actualSourceUrls: string[] = [];
    for (const srcUrl of sources) {
      const scraped = scrapedContent.get(srcUrl);
      if (scraped && scraped.body.length > 50) {
        scrapedBodies.push(scraped.body);
        actualSourceUrls.push(scraped.sourceUrl);
      }
    }

    // Determine disposition
    let disposition = "New";
    const migRow = migrationRows.find(
      (r) => normalizeUrl(r.newUrl) === slugKey
    );
    if (migRow) {
      disposition = migRow.disposition;
    }
    const gapRow = gapPages.find((g) => normalizeUrl(g.newUrl) === slugKey);
    if (gapRow) {
      disposition = "New";
    }

    // Get notes
    const notes = migRow?.notes || gapRow?.notes || "";

    // Collect FAQ items for this page
    const faqs = faqByDest.get(slugKey) || [];

    manifests.push({
      filePath: def.filePath,
      title: def.title,
      slug: def.slug,
      pillar: def.pillar,
      type: def.type,
      priority: def.priority,
      disposition,
      sourceUrls: actualSourceUrls,
      scrapedContent: scrapedBodies,
      faqItems: faqs,
      notes,
      seoKeyword: def.seoKeyword,
      relatedPackages: def.relatedPackages,
    });
  }

  return manifests;
}

function findFaqContent(
  itemId: number,
  itemTitle: string,
  categoryId: number,
  scrapedContent: Map<string, ScrapedPage>
): string | null {
  // Try to find the LC item in scraped content
  // LC items have URLs like /learning-center/cat/{catId}/item/{itemId}-{slug}
  for (const [url, page] of scrapedContent) {
    if (
      url.includes(`/item/${itemId}-`) ||
      url.includes(`/item/${itemId}/`)
    ) {
      return page.body;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// 6. Generate Files
// ---------------------------------------------------------------------------

function generateFile(
  manifest: PageManifest,
  packagePricing: Map<string, PackagePricing>
): string {
  const hasContent = manifest.scrapedContent.length > 0;
  const status = hasContent ? "scraped" : "scaffold";

  // Build frontmatter
  const totalWords = manifest.scrapedContent.reduce(
    (s, c) => s + countWords(c),
    0
  );

  const fm: string[] = ["---"];
  fm.push(`title: ${yamlEscape(manifest.title)}`);
  fm.push(`description: "<!-- TODO: Write 150-160 char meta description -->"`);
  fm.push(`slug: ${yamlEscape(manifest.slug)}`);
  fm.push(
    `pillar: ${manifest.pillar ? yamlEscape(manifest.pillar) : "null"}`
  );
  fm.push(`type: ${yamlEscape(manifest.type)}`);
  fm.push(`priority: ${yamlEscape(manifest.priority)}`);
  fm.push(`status: ${yamlEscape(status)}`);
  fm.push(`disposition: ${yamlEscape(manifest.disposition)}`);
  if (manifest.sourceUrls.length > 0) {
    fm.push(
      `source_urls: [${manifest.sourceUrls.map((u) => `"${u}"`).join(", ")}]`
    );
  }
  if (manifest.seoKeyword) {
    fm.push(`seo:`);
    fm.push(`  primary_keyword: ${yamlEscape(manifest.seoKeyword)}`);
    fm.push(`  secondary_keywords: []`);
  }
  if (manifest.relatedPackages.length > 0) {
    fm.push(
      `related_packages: [${manifest.relatedPackages.map((p) => `"${p}"`).join(", ")}]`
    );
  }
  fm.push(`faq_count: ${manifest.faqItems.length}`);
  fm.push(`word_count: ${totalWords}`);
  fm.push("---");

  const body: string[] = [];

  // For package pages, add pricing from prototype
  if (manifest.type === "package") {
    const pkgId = manifest.relatedPackages[0];
    const pricing = pkgId ? packagePricing.get(pkgId) : null;
    if (pricing) {
      body.push(
        buildPackageContent(manifest, pricing)
      );
    }
  }

  // Add scraped content
  if (manifest.scrapedContent.length > 0) {
    body.push(`# ${manifest.title}\n`);

    if (manifest.scrapedContent.length === 1) {
      body.push(manifest.scrapedContent[0]);
    } else {
      // Multiple sources — separate with dividers
      for (let i = 0; i < manifest.scrapedContent.length; i++) {
        if (i > 0) {
          body.push(
            `\n<!-- SOURCE ${i + 1}: ${manifest.sourceUrls[i] || "unknown"} -->\n`
          );
        }
        body.push(manifest.scrapedContent[i]);
      }
    }
  } else {
    // Scaffold page — no scraped content
    body.push(`# ${manifest.title}\n`);
    body.push(
      `<!-- TODO: This page needs content written from scratch. -->`
    );
    body.push(`<!-- Source guidance: ${manifest.notes || "New creation per IA v4"} -->\n`);

    // Add page-type-specific scaffold
    body.push(getScaffold(manifest.type, manifest.title));
  }

  // Add FAQ section
  if (manifest.faqItems.length > 0) {
    body.push(`\n## Frequently Asked Questions\n`);
    for (const faq of manifest.faqItems) {
      body.push(`### ${faq.question}\n`);
      body.push(`${faq.answer}\n`);
    }
  }

  // Migration notes comment
  if (manifest.notes) {
    body.push(
      `\n<!-- MIGRATION NOTE: ${manifest.notes} -->\n`
    );
  }

  return fm.join("\n") + "\n\n" + body.join("\n");
}

function buildPackageContent(
  manifest: PageManifest,
  pricing: PackagePricing
): string {
  const lines: string[] = [];
  lines.push(`# ${pricing.name} — $${pricing.llcFormation.toLocaleString()} All-Inclusive\n`);
  lines.push(`${pricing.description}\n`);

  if (pricing.badge) {
    lines.push(`**${pricing.badge}**\n`);
  }

  lines.push(`## Pricing\n`);
  lines.push(`| | LLC | Corporation |`);
  lines.push(`| --- | --- | --- |`);
  lines.push(
    `| Formation | $${pricing.llcFormation.toLocaleString()} | $${pricing.corpFormation.toLocaleString()} |`
  );
  lines.push(
    `| Annual Renewal | $${pricing.llcRenewal}/yr | $${pricing.corpRenewal}/yr |`
  );
  lines.push("");

  lines.push(`## What's Included\n`);
  for (const f of pricing.features) {
    const icon =
      f.status === "included"
        ? "Included"
        : f.status === "add-on"
        ? "Add-On"
        : "Not Included";
    lines.push(
      `- **${f.name}:** ${icon}${f.tooltip ? ` — ${f.tooltip}` : ""}`
    );
  }
  lines.push("");

  if (pricing.addOns.length > 0) {
    lines.push(`## Available Add-Ons\n`);
    for (const addon of pricing.addOns) {
      const price = addon.price === 0 ? "Free" : `$${addon.price}`;
      lines.push(`- **${addon.name}** (${price}): ${addon.description}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function getScaffold(pageType: string, title: string): string {
  switch (pageType) {
    case "pillar-hub":
      return `## Why ${title} Matters

<!-- TODO: 2-3 paragraphs explaining the problem this pillar solves -->

## Our Services

<!-- TODO: List of services with brief descriptions -->

## Explore ${title}

<!-- TODO: Links to all cluster pages under this pillar -->

## Frequently Asked Questions

<!-- TODO: Top 5 FAQ items for this pillar -->

---

<!-- TODO: Primary CTA -->
`;

    case "cluster":
      return `## What Is ${title}?

<!-- TODO: Educational explanation of the concept -->

## How It Works

<!-- TODO: Step-by-step process -->

## Why Incorporate123

<!-- TODO: 2-3 specific differentiators -->

## Who This Is For

<!-- TODO: Audience targeting -->

## Frequently Asked Questions

<!-- TODO: 10-15 FAQ items -->

---

<!-- TODO: Primary and secondary CTAs -->
`;

    case "comparison":
      return `## Quick Comparison

<!-- TODO: Comparison table -->

## Detailed Analysis

<!-- TODO: Prose comparison of each option -->

## Cost Breakdown

<!-- TODO: Specific pricing -->

## Our Recommendation

<!-- TODO: Clear recommendation with reasoning -->

---

<!-- TODO: Per-option CTAs -->
`;

    case "state-hub":
      return `## Why ${title.replace(" Business Formation & Privacy", "").replace(" Business Formation", "")}?

<!-- TODO: State advantages -->

## Quick Facts

<!-- TODO: Key state stats -->

## Services by Category

<!-- TODO: Organized by pillar -->

## Available Packages

<!-- TODO: Package links -->

---

<!-- TODO: Package CTA -->
`;

    default:
      return `<!-- TODO: Write content for this ${pageType} page -->\n`;
  }
}

// ---------------------------------------------------------------------------
// 7. Report
// ---------------------------------------------------------------------------

function generateReport(manifests: PageManifest[]): string {
  const lines: string[] = [];
  lines.push("# Content Generation Report\n");
  lines.push(`Generated: ${new Date().toISOString()}\n`);

  const total = manifests.length;
  const scraped = manifests.filter(
    (m) => m.scrapedContent.length > 0
  ).length;
  const scaffold = total - scraped;

  lines.push(`## Summary\n`);
  lines.push(`- **Total pages:** ${total}`);
  lines.push(`- **Pages with scraped content:** ${scraped}`);
  lines.push(`- **Pages needing writing (scaffold):** ${scaffold}`);

  const totalWords = manifests.reduce(
    (s, m) =>
      s + m.scrapedContent.reduce((ws, c) => ws + countWords(c), 0),
    0
  );
  lines.push(`- **Total word count:** ${totalWords.toLocaleString()}`);
  lines.push(
    `- **Total FAQ items placed:** ${manifests.reduce((s, m) => s + m.faqItems.length, 0)}`
  );

  // By type
  lines.push(`\n## By Page Type\n`);
  lines.push(`| Type | Count | With Content | Scaffold | Avg Words |`);
  lines.push(`| --- | --- | --- | --- | --- |`);
  const types = [...new Set(manifests.map((m) => m.type))];
  for (const t of types) {
    const pages = manifests.filter((m) => m.type === t);
    const withContent = pages.filter(
      (m) => m.scrapedContent.length > 0
    ).length;
    const avgWords = Math.round(
      pages.reduce(
        (s, m) =>
          s + m.scrapedContent.reduce((ws, c) => ws + countWords(c), 0),
        0
      ) / pages.length
    );
    lines.push(
      `| ${t} | ${pages.length} | ${withContent} | ${pages.length - withContent} | ${avgWords} |`
    );
  }

  // Scaffold pages (needing writing)
  lines.push(`\n## Pages Needing Content (scaffold)\n`);
  for (const m of manifests.filter((m) => m.scrapedContent.length === 0)) {
    lines.push(`- **${m.filePath}** (${m.type}, ${m.priority}) — ${m.notes || "No source content"}`);
  }

  // Low word count pages
  lines.push(`\n## Low Word Count Pages (<500 words)\n`);
  for (const m of manifests) {
    const words = m.scrapedContent.reduce(
      (s, c) => s + countWords(c),
      0
    );
    if (words > 0 && words < 500) {
      lines.push(`- **${m.filePath}** — ${words} words`);
    }
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log(
    DRY_RUN
      ? "=== DRY RUN — no files will be written ==="
      : `=== Generating content v2 to ${OUT_DIR} ===`
  );

  // Load all data
  console.log("Loading scraped content...");
  const scrapedContent = loadScrapedContent();
  console.log(`  Loaded ${scrapedContent.size} scraped pages`);

  console.log("Loading migration data...");
  const migData = loadMigrationData();
  console.log(
    `  ${migData.migrationRows.length} migration rows, ${migData.gapPages.length} gap pages, ${migData.faqItems.length} FAQ items`
  );

  console.log("Loading package pricing...");
  const packagePricing = loadPackagePricing();
  console.log(`  ${packagePricing.size} packages`);

  // Build source map
  const sourceMap = buildSourceMap(
    migData.migrationRows,
    migData.consolidateMap
  );
  console.log(`  ${sourceMap.size} page → source URL mappings`);

  // Get page definitions
  const pageDefs = getPageDefs();
  console.log(`  ${pageDefs.length} target pages defined`);

  // Build manifest
  const manifests = buildManifest(
    pageDefs,
    scrapedContent,
    sourceMap,
    migData.faqItems,
    migData.migrationRows,
    migData.gapPages
  );

  // Clean output directory
  if (!DRY_RUN && fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true });
  }
  ensureDir(OUT_DIR);

  // Generate files
  console.log("\nGenerating files...");
  for (const manifest of manifests) {
    const content = generateFile(manifest, packagePricing);
    const fullPath = path.join(OUT_DIR, manifest.filePath);
    writeFile(fullPath, content);
  }

  // Generate report
  const report = generateReport(manifests);
  if (!DRY_RUN) {
    fs.writeFileSync(
      path.join(OUT_DIR, "_generation-report.md"),
      report,
      "utf-8"
    );
    console.log("  wrote: _generation-report.md");
  }

  console.log(report);
  console.log(`\n=== Done! ===`);
}

try {
  main();
} catch (err) {
  console.error("Error:", err);
  process.exit(1);
}
