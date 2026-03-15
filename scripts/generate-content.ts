/**
 * generate-content.ts
 *
 * Reads the 13 prototype data files and generates markdown content files
 * for all ~84 pages into DOCS/Phase 2 - UX & Design/content/
 *
 * Usage:
 *   npx tsx scripts/generate-content.ts
 *   npx tsx scripts/generate-content.ts --dry-run
 */

import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// We can't use TS path aliases outside the Next.js project, so we read and
// eval each data file by stripping imports and using Function() constructors.
// Instead, we'll just import using relative paths with tsx which supports
// tsconfig paths when run from the project root.
// ---------------------------------------------------------------------------

// Since tsx doesn't resolve @/ aliases from outside the prototype dir,
// we'll load the data files by dynamically importing them.

const PROTO_DIR = path.resolve(__dirname, "../inc123-prototype");
const OUT_DIR = path.resolve(
  __dirname,
  "../DOCS/Phase 2 - UX & Design/content"
);

const DRY_RUN = process.argv.includes("--dry-run");

// ---------------------------------------------------------------------------
// Types (duplicated minimally to avoid import issues)
// ---------------------------------------------------------------------------
type PillarName = "privacy" | "asset" | "formation" | "compliance";

interface ClusterSection {
  id: string;
  type: "text" | "comparison" | "audience" | "differentiator";
  title: string;
  content: string;
  items?: Array<{ title: string; description: string; icon?: string }>;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface ClusterContent {
  slug: string;
  pillar: PillarName;
  pillarLabel: string;
  title: string;
  description: string;
  readingTime: string;
  sections: ClusterSection[];
  faqs: FAQItem[];
  sidebarLinks: Array<{ title: string; href: string }>;
  relatedPackages: string[];
  crossPillarCTA?: {
    pillar: PillarName;
    title: string;
    description: string;
    href: string;
  };
}

interface ComparisonColumn {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

interface ComparisonRow {
  label: string;
  tooltip?: string;
  values: Record<string, string>;
}

interface ComparisonPage {
  slug: string;
  pillar: PillarName;
  title: string;
  description: string;
  verdict: { winner: string; summary: string };
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  decisionGuide: {
    chooseA: { title: string; reasons: string[] };
    chooseB: { title: string; reasons: string[] };
    identical: string[];
  };
  relatedPackages: string[];
  faqs: FAQItem[];
}

type EntityType = "llc" | "corp";

interface PackageFeature {
  name: string;
  tooltip?: string;
  status: "included" | "not-included" | "add-on";
}

interface PackageAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  tooltip?: string;
}

interface PackageTier {
  id: string;
  name: string;
  tier: string;
  state: string;
  prices: Record<EntityType, { formation: number; renewal: number }>;
  description: string;
  features: PackageFeature[];
  badge?: string;
  highlighted?: boolean;
  addOns: PackageAddOn[];
}

interface StateFact {
  label: string;
  value: string;
}

interface StateAdvantage {
  icon: string;
  title: string;
  description: string;
}

interface IntentRoute {
  pillar: PillarName;
  title: string;
  description: string;
  links: Array<{ label: string; href: string }>;
  cta: { label: string; href: string };
  packageLink?: { label: string; href: string };
}

interface StateHub {
  slug: string;
  name: string;
  abbreviation: string;
  subtitle: string;
  facts: StateFact[];
  advantages: StateAdvantage[];
  intentRoutes: IntentRoute[];
  contentMap: Record<PillarName, Array<{ title: string; href: string }>>;
  packages: string[];
  faqs: FAQItem[];
}

interface Pillar {
  id: PillarName;
  label: string;
  tagline: string;
  description: string;
  icon: string;
  cta: { label: string; href: string };
  trustElement: string;
  clusters: Array<{ title: string; href: string; description?: string }>;
  services: string[];
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
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  wrote: ${path.relative(OUT_DIR, filePath)}`);
}

function frontmatter(fields: Record<string, unknown>): string {
  const lines: string[] = ["---"];
  for (const [key, val] of Object.entries(fields)) {
    if (val === null || val === undefined) continue;
    if (typeof val === "object" && !Array.isArray(val)) {
      lines.push(`${key}:`);
      for (const [k2, v2] of Object.entries(val as Record<string, unknown>)) {
        lines.push(`  ${k2}: ${yamlValue(v2)}`);
      }
    } else if (Array.isArray(val)) {
      lines.push(`${key}: [${val.map((v) => `"${v}"`).join(", ")}]`);
    } else {
      lines.push(`${key}: ${yamlValue(val)}`);
    }
  }
  lines.push("---");
  return lines.join("\n");
}

function yamlValue(v: unknown): string {
  if (typeof v === "string") return `"${v.replace(/"/g, '\\"')}"`;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  return `"${v}"`;
}

function slugToWords(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Pillar name → folder mapping
const PILLAR_FOLDER: Record<PillarName, string> = {
  privacy: "privacy",
  asset: "asset-protection",
  formation: "formation",
  compliance: "compliance",
};

const PILLAR_LABEL: Record<PillarName, string> = {
  privacy: "privacy",
  asset: "asset-protection",
  formation: "formation",
  compliance: "compliance",
};

// Slug mapping: prototype slug → IA flat URL slug
const CLUSTER_SLUG_MAP: Record<string, string> = {
  // Asset protection clusters with ambiguous names
  wyoming: "wyoming-asset-protection",
  nevada: "nevada-asset-protection",
  "real-estate": "real-estate-asset-protection",
  // Privacy state clusters
  "wyoming-privacy": "wyoming-privacy",
  "nevada-privacy": "nevada-privacy",
  "california-private-incorporation": "california-private-incorporation",
  "florida-private-incorporation": "florida-private-incorporation",
};

// IA v4 comparison slugs (P1)
const IA_COMPARISON_SLUGS = [
  "best-state-for-privacy",
  "wyoming-vs-nevada-privacy",
  "best-state-for-asset-protection",
  "wyoming-vs-nevada-asset-protection",
  "wyoming-vs-nevada-llc", // maps to wyoming-vs-nevada in IA
  "shelf-company-vs-new-formation",
  "llc-vs-scorp-vs-ccorp-tax",
];

// Prototype-only bonus clusters not in IA v4
const BONUS_CLUSTERS = ["corporate-minutes", "virtual-office"];

// SEO keyword maps (best-effort defaults)
function clusterSeoKeyword(slug: string): string {
  const map: Record<string, string> = {
    "anonymous-llc": "anonymous llc",
    "nominee-services": "nominee services",
    "private-incorporation": "private incorporation",
    "offshore-privacy": "offshore privacy",
    "wyoming-privacy": "wyoming privacy llc",
    "nevada-privacy": "nevada privacy llc",
    "charging-order-protection": "charging order protection",
    "wyoming-asset-protection": "wyoming asset protection",
    "nevada-asset-protection": "nevada asset protection",
    "investment-holding-llc": "investment holding llc",
    "real-estate-asset-protection": "real estate asset protection",
    "wyoming-llc": "wyoming llc formation",
    "nevada-llc": "nevada llc formation",
    "wyoming-corporation": "wyoming corporation",
    "nevada-corporation": "nevada corporation",
    "shelf-companies": "shelf companies for sale",
    "entity-tax-guide": "llc vs s corp vs c corp tax",
    "registered-agent": "registered agent service",
    "wyoming-registered-agent": "wyoming registered agent",
    "nevada-registered-agent": "nevada registered agent",
    "annual-reports": "annual report filing service",
    "corporate-minutes": "corporate minutes service",
    "virtual-office": "virtual office address",
    "foreign-registration": "foreign state registration",
    "second-tier-state-filings": "multi-state filing",
    "shares-corporate-records": "corporate records service",
    "domestication": "llc domestication",
    "tax-obligations": "llc tax obligations",
  };
  return map[slug] || slug.replace(/-/g, " ");
}

// ---------------------------------------------------------------------------
// Data loading — read .ts files, strip type imports, eval to get data
// ---------------------------------------------------------------------------

function loadDataFile(relativePath: string): string {
  const filePath = path.join(PROTO_DIR, "src", relativePath);
  let content = fs.readFileSync(filePath, "utf-8");
  // Strip import lines (type imports from @/lib/types, etc.)
  content = content.replace(/^import\s+.*$/gm, "");
  // Strip export keyword: 'export const' → 'const'
  content = content.replace(/^export\s+/gm, "");
  // Strip TypeScript type annotations on variable declarations:
  //   const foo: Type[] = [...] → const foo = [...]
  //   const foo: Record<...> = {...} → const foo = {...}
  content = content.replace(
    /^(const\s+\w+)\s*:\s*[^=]+=\s*/gm,
    "$1 = "
  );
  return content;
}

function evalData<T>(code: string, varName: string): T {
  // Wrap in a function that returns the variable
  const fn = new Function(`${code}\nreturn ${varName};`);
  return fn() as T;
}

function loadData() {
  const clusters = evalData<ClusterContent[]>(
    loadDataFile("data/clusters.ts"),
    "clusterPages"
  );
  const comparisons = evalData<ComparisonPage[]>(
    loadDataFile("data/comparisons.ts"),
    "comparisonPages"
  );

  // packages.ts has a local sharedAddOns variable referenced by packages
  const packages = evalData<PackageTier[]>(
    loadDataFile("data/packages.ts"),
    "packages"
  );

  const states = evalData<StateHub[]>(
    loadDataFile("data/states.ts"),
    "stateHubs"
  );
  const pillars = evalData<Pillar[]>(
    loadDataFile("data/pillars.ts"),
    "pillars"
  );

  // Homepage has multiple exports
  const homepageCode = loadDataFile("data/homepage.ts");
  const homepage = evalData<any>(homepageCode, "homepageData");
  const homepageTestimonials = evalData<any[]>(
    homepageCode,
    "homepageTestimonials"
  );
  const pillarCardOverrides = evalData<any>(
    homepageCode,
    "pillarCardOverrides"
  );

  const about = evalData<any>(loadDataFile("data/about.ts"), "aboutData");
  const contact = evalData<any>(
    loadDataFile("data/contact.ts"),
    "contactData"
  );
  const faq = evalData<FAQItem[]>(loadDataFile("data/faq.ts"), "faqItems");

  // blog.ts has an interface before the data
  const blogCode = loadDataFile("data/blog.ts");
  // Strip interface declarations for eval
  const blogCodeClean = blogCode.replace(
    /interface\s+\w+\s*\{[^}]*\}/g,
    ""
  );
  const blog = evalData<any[]>(blogCodeClean, "blogPosts");

  const testimonials = evalData<any[]>(
    loadDataFile("data/testimonials.ts"),
    "testimonials"
  );

  return {
    clusters,
    comparisons,
    packages,
    states,
    pillars,
    homepage,
    homepageTestimonials,
    pillarCardOverrides,
    about,
    contact,
    faq,
    blog,
    testimonials,
  };
}

// ---------------------------------------------------------------------------
// Generator: Clusters
// ---------------------------------------------------------------------------

function generateClusters(clusters: ClusterContent[]) {
  console.log("\n--- Generating Cluster Pages ---");

  for (const cluster of clusters) {
    const resolvedSlug =
      CLUSTER_SLUG_MAP[cluster.slug] || cluster.slug;
    const folder = PILLAR_FOLDER[cluster.pillar];
    const dir = path.join(OUT_DIR, folder);
    ensureDir(dir);

    const isBonus = BONUS_CLUSTERS.includes(cluster.slug);
    const priority = isBonus ? "P2" : "P1";

    const fm = frontmatter({
      title: cluster.title,
      description: cluster.description,
      slug: `/${resolvedSlug}/`,
      pillar: PILLAR_LABEL[cluster.pillar],
      type: "cluster",
      priority,
      status: "draft",
      seo: {
        primary_keyword: clusterSeoKeyword(resolvedSlug),
        secondary_keywords: "[]",
      },
      related_packages: cluster.relatedPackages,
      reading_time: cluster.readingTime,
    });

    // Build body
    const body: string[] = [];
    body.push(`# ${cluster.title}\n`);
    body.push(`${cluster.description}\n`);

    for (const section of cluster.sections) {
      body.push(`## ${section.title}\n`);
      body.push(`${section.content}\n`);

      if (section.items && section.items.length > 0) {
        if (section.type === "audience") {
          for (const item of section.items) {
            body.push(`- **${item.title}:** ${item.description}`);
          }
          body.push("");
        } else if (section.type === "differentiator") {
          for (const item of section.items) {
            body.push(`- **${item.title}:** ${item.description}`);
          }
          body.push("");
        }
      }
    }

    // FAQs
    if (cluster.faqs.length > 0) {
      body.push(`## Frequently Asked Questions\n`);
      for (const faq of cluster.faqs) {
        body.push(`### ${faq.question}\n`);
        body.push(`${faq.answer}\n`);
      }
    }

    // Cross-pillar CTA
    if (cluster.crossPillarCTA) {
      body.push(`---\n`);
      body.push(`**${cluster.crossPillarCTA.title}**\n`);
      body.push(
        `${cluster.crossPillarCTA.description} [Learn more →](${cluster.crossPillarCTA.href})\n`
      );
    }

    // Related packages
    if (cluster.relatedPackages.length > 0) {
      body.push(`---\n`);
      body.push(`**Related Packages:** ${cluster.relatedPackages.map((p) => `[${slugToWords(p)}](/packages/${p}/)`).join(", ")}\n`);
    }

    const content = fm + "\n\n" + body.join("\n");
    writeFile(path.join(dir, `${resolvedSlug}.md`), content);
  }
}

// ---------------------------------------------------------------------------
// Generator: Comparisons
// ---------------------------------------------------------------------------

function generateComparisons(comparisons: ComparisonPage[]) {
  console.log("\n--- Generating Comparison Pages ---");

  const dir = path.join(OUT_DIR, "compare");
  ensureDir(dir);

  // Slug mapping for comparisons (prototype → IA)
  const compSlugMap: Record<string, string> = {
    "wyoming-vs-nevada-llc": "wyoming-vs-nevada",
  };

  for (const comp of comparisons) {
    const iaSlug = compSlugMap[comp.slug] || comp.slug;
    const isIA = IA_COMPARISON_SLUGS.includes(comp.slug);
    const priority = isIA ? "P1" : "P2";

    const fm = frontmatter({
      title: comp.title,
      description: comp.description,
      slug: `/${iaSlug}/`,
      pillar: PILLAR_LABEL[comp.pillar] || comp.pillar,
      type: "comparison",
      priority,
      status: "draft",
      seo: {
        primary_keyword: comp.title.toLowerCase(),
        secondary_keywords: "[]",
      },
      related_packages: comp.relatedPackages,
    });

    const body: string[] = [];
    body.push(`# ${comp.title}\n`);
    body.push(`${comp.description}\n`);

    // Verdict
    body.push(`## Our Verdict\n`);
    body.push(
      `**Winner: ${comp.verdict.winner}** — ${comp.verdict.summary}\n`
    );

    // Comparison table
    body.push(`## Comparison\n`);
    const colIds = comp.columns.map((c) => c.id);
    const colTitles = comp.columns.map((c) => c.title);

    // Table header
    body.push(
      `| Feature | ${colTitles.join(" | ")} |`
    );
    body.push(
      `| --- | ${colTitles.map(() => "---").join(" | ")} |`
    );

    // Table rows
    for (const row of comp.rows) {
      const vals = colIds.map((id) => {
        const v = row.values[id];
        return typeof v === "string" ? v : String(v || "—");
      });
      body.push(`| ${row.label} | ${vals.join(" | ")} |`);
    }
    body.push("");

    // Decision guide
    body.push(`## Decision Guide\n`);
    body.push(`### ${comp.decisionGuide.chooseA.title}\n`);
    for (const r of comp.decisionGuide.chooseA.reasons) {
      body.push(`- ${r}`);
    }
    body.push("");

    body.push(`### ${comp.decisionGuide.chooseB.title}\n`);
    for (const r of comp.decisionGuide.chooseB.reasons) {
      body.push(`- ${r}`);
    }
    body.push("");

    if (comp.decisionGuide.identical.length > 0) {
      body.push(`### Both Options Include\n`);
      for (const item of comp.decisionGuide.identical) {
        body.push(`- ${item}`);
      }
      body.push("");
    }

    // FAQs
    if (comp.faqs.length > 0) {
      body.push(`## Frequently Asked Questions\n`);
      for (const faq of comp.faqs) {
        body.push(`### ${faq.question}\n`);
        body.push(`${faq.answer}\n`);
      }
    }

    // Related packages
    if (comp.relatedPackages.length > 0) {
      body.push(`---\n`);
      body.push(`**Related Packages:** ${comp.relatedPackages.map((p) => `[${slugToWords(p)}](/packages/${p}/)`).join(", ")}\n`);
    }

    const content = fm + "\n\n" + body.join("\n");
    writeFile(path.join(dir, `${iaSlug}.md`), content);
  }
}

// ---------------------------------------------------------------------------
// Generator: Packages
// ---------------------------------------------------------------------------

function generatePackages(packages: PackageTier[]) {
  console.log("\n--- Generating Package Pages ---");

  const dir = path.join(OUT_DIR, "packages");
  ensureDir(dir);

  for (const pkg of packages) {
    const fm = frontmatter({
      title: pkg.name,
      description: pkg.description,
      slug: `/packages/${pkg.id}/`,
      pillar: null,
      type: "package",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: pkg.name.toLowerCase(),
        secondary_keywords: "[]",
      },
    });

    const body: string[] = [];
    body.push(`# ${pkg.name}\n`);
    body.push(`${pkg.description}\n`);

    if (pkg.badge) {
      body.push(`**${pkg.badge}**\n`);
    }

    // Pricing table
    body.push(`## Pricing\n`);
    body.push(`| | LLC | Corporation |`);
    body.push(`| --- | --- | --- |`);
    body.push(
      `| Formation | $${pkg.prices.llc.formation.toLocaleString()} | $${pkg.prices.corp.formation.toLocaleString()} |`
    );
    body.push(
      `| Annual Renewal | $${pkg.prices.llc.renewal.toLocaleString()} | $${pkg.prices.corp.renewal.toLocaleString()} |`
    );
    body.push("");

    // Features
    body.push(`## What's Included\n`);
    for (const f of pkg.features) {
      const icon =
        f.status === "included"
          ? "Included"
          : f.status === "add-on"
          ? "Add-On"
          : "Not Included";
      body.push(`- **${f.name}:** ${icon}${f.tooltip ? ` — ${f.tooltip}` : ""}`);
    }
    body.push("");

    // Add-ons
    if (pkg.addOns.length > 0) {
      body.push(`## Available Add-Ons\n`);
      for (const addon of pkg.addOns) {
        const price =
          addon.price === 0 ? "Free" : `$${addon.price}`;
        body.push(`- **${addon.name}** (${price}): ${addon.description}`);
      }
      body.push("");
    }

    const content = fm + "\n\n" + body.join("\n");
    writeFile(path.join(dir, `${pkg.id}.md`), content);
  }
}

// ---------------------------------------------------------------------------
// Generator: State Hubs
// ---------------------------------------------------------------------------

function generateStates(states: StateHub[]) {
  console.log("\n--- Generating State Hub Pages ---");

  const dir = path.join(OUT_DIR, "states");
  ensureDir(dir);

  for (const state of states) {
    const fm = frontmatter({
      title: `${state.name} Business Formation & Privacy`,
      description: state.subtitle,
      slug: `/${state.slug}/`,
      pillar: null,
      type: "state-hub",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: `${state.slug} llc formation`,
        secondary_keywords: `["${state.slug} business formation", "${state.slug} privacy"]`,
      },
    });

    const body: string[] = [];
    body.push(`# ${state.name} Business Formation & Privacy\n`);
    body.push(`${state.subtitle}\n`);

    // Quick facts
    body.push(`## Quick Facts\n`);
    for (const fact of state.facts) {
      body.push(`- **${fact.label}:** ${fact.value}`);
    }
    body.push("");

    // Advantages
    body.push(`## Why ${state.name}?\n`);
    for (const adv of state.advantages) {
      body.push(`### ${adv.title}\n`);
      body.push(`${adv.description}\n`);
    }

    // Intent routes
    body.push(`## Services by Category\n`);
    for (const route of state.intentRoutes) {
      body.push(`### ${route.title}\n`);
      body.push(`${route.description}\n`);

      for (const link of route.links) {
        body.push(`- [${link.label}](${link.href})`);
      }
      if (route.packageLink) {
        body.push(`- [${route.packageLink.label}](${route.packageLink.href})`);
      }
      body.push("");
    }

    // Content map
    body.push(`## Content Map\n`);
    for (const [pillar, links] of Object.entries(state.contentMap)) {
      body.push(`### ${slugToWords(pillar)}\n`);
      for (const link of links as Array<{ title: string; href: string }>) {
        body.push(`- [${link.title}](${link.href})`);
      }
      body.push("");
    }

    // Packages
    body.push(`## Available Packages\n`);
    for (const pkgId of state.packages) {
      body.push(`- [${slugToWords(pkgId)}](/packages/${pkgId}/)`);
    }
    body.push("");

    // FAQs
    if (state.faqs.length > 0) {
      body.push(`## Frequently Asked Questions\n`);
      for (const faq of state.faqs) {
        body.push(`### ${faq.question}\n`);
        body.push(`${faq.answer}\n`);
      }
    }

    const content = fm + "\n\n" + body.join("\n");
    writeFile(path.join(dir, `${state.slug}.md`), content);
  }
}

// ---------------------------------------------------------------------------
// Generator: Pillar Hubs
// ---------------------------------------------------------------------------

function generatePillarHubs(pillars: Pillar[]) {
  console.log("\n--- Generating Pillar Hub Pages ---");

  for (const pillar of pillars) {
    const folder = PILLAR_FOLDER[pillar.id];
    const dir = path.join(OUT_DIR, folder);
    ensureDir(dir);

    const fm = frontmatter({
      title: pillar.label,
      description: pillar.description,
      slug: `/${folder}/`,
      pillar: PILLAR_LABEL[pillar.id],
      type: "pillar-hub",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: pillar.label.toLowerCase(),
        secondary_keywords: "[]",
      },
    });

    const body: string[] = [];
    body.push(`# ${pillar.label}\n`);
    body.push(`*${pillar.tagline}*\n`);
    body.push(`${pillar.description}\n`);

    body.push(`## Our Services\n`);
    for (const svc of pillar.services) {
      body.push(`- ${svc}`);
    }
    body.push("");

    body.push(`## Explore ${pillar.label}\n`);
    for (const cluster of pillar.clusters) {
      body.push(
        `- [${cluster.title}](${cluster.href})${cluster.description ? ` — ${cluster.description}` : ""}`
      );
    }
    body.push("");

    body.push(`${pillar.trustElement}\n`);

    body.push(`---\n`);
    body.push(
      `[${pillar.cta.label}](${pillar.cta.href})\n`
    );

    // Note for content enhancement
    body.push(`<!-- CONTENT NOTE: This pillar hub page needs enhanced content for SEO. Currently has minimal copy from prototype data. -->\n`);

    const content = fm + "\n\n" + body.join("\n");
    writeFile(path.join(dir, "_index.md"), content);
  }
}

// ---------------------------------------------------------------------------
// Generator: Utility Pages
// ---------------------------------------------------------------------------

function generateUtilityPages(data: {
  homepage: any;
  homepageTestimonials: any[];
  pillarCardOverrides: any;
  about: any;
  contact: any;
  faq: FAQItem[];
  blog: any[];
  testimonials: any[];
}) {
  console.log("\n--- Generating Utility Pages ---");

  ensureDir(OUT_DIR);

  // --- Homepage ---
  {
    const hp = data.homepage;
    const fm = frontmatter({
      title: "Incorporate123 — Privacy, Asset Protection & Business Formation",
      description: hp.hero.subheadline,
      slug: "/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "anonymous llc formation",
        secondary_keywords: '["wyoming llc", "business privacy", "asset protection"]',
      },
    });

    const body: string[] = [];
    body.push(`# ${hp.hero.headline}\n`);
    body.push(`${hp.hero.subheadline}\n`);

    if (hp.hero.eyebrow) {
      body.push(`*${hp.hero.eyebrow}*\n`);
    }

    body.push(`- [${hp.hero.primaryCTA.label}](${hp.hero.primaryCTA.href})`);
    body.push(`- [${hp.hero.secondaryCTA.label}](${hp.hero.secondaryCTA.href})\n`);

    // Trust snippets
    body.push(`## Trust Signals\n`);
    for (const snippet of hp.hero.trustSnippets) {
      body.push(`- ${snippet}`);
    }
    body.push("");

    // Differentiators
    body.push(`## Why Incorporate123?\n`);
    for (const diff of hp.differentiators) {
      body.push(`### ${diff.title}\n`);
      body.push(`${diff.description}\n`);
    }

    // How it works
    body.push(`## How It Works\n`);
    for (let i = 0; i < hp.howItWorks.length; i++) {
      const step = hp.howItWorks[i];
      body.push(`### Step ${i + 1}: ${step.label}\n`);
      body.push(`${step.description}\n`);
    }

    // Compliance callout
    body.push(`## ${hp.complianceCallout.headline}\n`);
    body.push(`${hp.complianceCallout.description}\n`);
    body.push(`[${hp.complianceCallout.cta.label}](${hp.complianceCallout.cta.href})\n`);

    // Testimonials
    body.push(`## What Our Clients Say\n`);
    for (const t of data.homepageTestimonials) {
      body.push(`> "${t.quote}"\n> — ${t.name}, ${t.businessType} (${t.state})\n`);
    }

    writeFile(path.join(OUT_DIR, "_index.md"), fm + "\n\n" + body.join("\n"));
  }

  // --- About ---
  {
    const about = data.about;
    const fm = frontmatter({
      title: "About Incorporate123",
      description: about.hero.subheadline,
      slug: "/about/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "about incorporate123",
        secondary_keywords: "[]",
      },
    });

    const body: string[] = [];
    body.push(`# ${about.hero.headline}\n`);
    body.push(`*${about.hero.eyebrow}*\n`);
    body.push(`${about.hero.subheadline}\n`);

    // Founder / team
    body.push(`## ${about.founder.name}\n`);
    body.push(`*${about.founder.title} · ${about.founder.location}*\n`);
    for (const para of about.founder.bio) {
      body.push(`${para}\n`);
    }

    // Timeline
    body.push(`## Our Journey\n`);
    for (const milestone of about.timeline) {
      body.push(`### ${milestone.year}: ${milestone.title}\n`);
      body.push(`${milestone.description}\n`);
    }

    // Philosophy
    body.push(`## Our Philosophy\n`);
    for (const item of about.philosophy) {
      body.push(`### ${item.title}\n`);
      body.push(`${item.description}\n`);
    }

    // Stats
    body.push(`## By the Numbers\n`);
    for (const stat of about.stats) {
      body.push(`- **${stat.value}** ${stat.label}`);
    }
    body.push("");

    // Office
    body.push(`## Our Office\n`);
    if (about.office.leadLine) body.push(`${about.office.leadLine}\n`);
    body.push(`- **Address:** ${about.office.address}`);
    body.push(`- **Phone:** ${about.office.phone}`);
    body.push(`- **Email:** ${about.office.email}`);
    body.push(`- **Hours:** ${about.office.hours}`);
    body.push("");

    writeFile(path.join(OUT_DIR, "about.md"), fm + "\n\n" + body.join("\n"));
  }

  // --- Contact ---
  {
    const contact = data.contact;
    const fm = frontmatter({
      title: "Contact Incorporate123",
      description: contact.hero.subheadline,
      slug: "/contact/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "contact incorporate123",
        secondary_keywords: "[]",
      },
    });

    const body: string[] = [];
    body.push(`# ${contact.hero.headline}\n`);
    body.push(`*${contact.hero.eyebrow}*\n`);
    body.push(`${contact.hero.subheadline}\n`);

    // Contact methods
    body.push(`## How to Reach Us\n`);
    for (const method of contact.methods) {
      body.push(`### ${method.title}\n`);
      body.push(`${method.description}\n`);
      if (method.action) {
        body.push(`[${method.action.label}](${method.action.href})\n`);
      }
    }

    // Form fields
    body.push(`## Contact Form Fields\n`);
    for (const field of contact.formFields) {
      const req = field.required ? " *(required)*" : "";
      body.push(`- **${field.label}**${req} — ${field.type}${field.options ? `: ${field.options.join(", ")}` : ""}`);
    }
    body.push("");

    // Quick links
    body.push(`## Quick Links\n`);
    for (const link of contact.quickLinks) {
      body.push(`- [${link.title}](${link.href}) — ${link.description}`);
    }
    body.push("");

    writeFile(path.join(OUT_DIR, "contact.md"), fm + "\n\n" + body.join("\n"));
  }

  // --- FAQ ---
  {
    const fm = frontmatter({
      title: "Frequently Asked Questions",
      description: "Answers to common questions about business privacy, asset protection, LLC formation, compliance, and our packages.",
      slug: "/faq/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "llc formation faq",
        secondary_keywords: '["anonymous llc faq", "business formation questions"]',
      },
    });

    // Group FAQs by category
    const categories: Record<string, FAQItem[]> = {};
    for (const faq of data.faq) {
      const cat = faq.category;
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(faq);
    }

    const categoryLabels: Record<string, string> = {
      privacy: "Business Privacy",
      asset: "Asset Protection",
      formation: "Company Formation",
      compliance: "Compliance",
      packages: "Packages & Pricing",
      general: "General",
    };

    const body: string[] = [];
    body.push(`# Frequently Asked Questions\n`);
    body.push(`Answers to common questions about business privacy, asset protection, LLC formation, compliance, and our packages.\n`);

    for (const [cat, items] of Object.entries(categories)) {
      body.push(`## ${categoryLabels[cat] || slugToWords(cat)}\n`);
      for (const faq of items) {
        body.push(`### ${faq.question}\n`);
        body.push(`${faq.answer}\n`);
      }
    }

    writeFile(path.join(OUT_DIR, "faq.md"), fm + "\n\n" + body.join("\n"));
  }

  // --- Blog ---
  {
    const fm = frontmatter({
      title: "Blog — Privacy, Protection & Formation Insights",
      description: "Expert insights on business privacy, asset protection, LLC formation, and compliance from the Incorporate123 team.",
      slug: "/blog/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "business formation blog",
        secondary_keywords: "[]",
      },
    });

    const body: string[] = [];
    body.push(`# Blog\n`);
    body.push(`Expert insights on business privacy, asset protection, LLC formation, and compliance from the Incorporate123 team.\n`);

    for (const post of data.blog) {
      body.push(`## [${post.title}](${post.href})\n`);
      body.push(`*${post.categoryLabel} · ${post.date} · ${post.readTime}*\n`);
      body.push(`${post.excerpt}\n`);
    }

    writeFile(path.join(OUT_DIR, "blog.md"), fm + "\n\n" + body.join("\n"));
  }

  // --- Testimonials ---
  {
    const fm = frontmatter({
      title: "Client Testimonials",
      description: "Read what our clients say about Incorporate123's privacy formation, asset protection, and compliance services.",
      slug: "/testimonials/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "incorporate123 reviews",
        secondary_keywords: "[]",
      },
    });

    const body: string[] = [];
    body.push(`# Client Testimonials\n`);
    body.push(`Read what our clients say about our services.\n`);

    for (const t of data.testimonials) {
      body.push(`> "${t.quote}"\n`);
      body.push(`> — **${t.name}**, ${t.businessType} (${t.state}) · ${t.serviceUsed}${t.rating ? ` · ${"★".repeat(t.rating)}` : ""}\n`);
    }

    writeFile(
      path.join(OUT_DIR, "testimonials.md"),
      fm + "\n\n" + body.join("\n")
    );
  }

  // --- Compare Packages ---
  {
    const fm = frontmatter({
      title: "Compare Packages & Pricing",
      description: "Compare all Incorporate123 formation packages side by side. Transparent, all-inclusive pricing with no hidden fees.",
      slug: "/compare-packages/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "llc formation packages comparison",
        secondary_keywords: "[]",
      },
    });

    const body: string[] = [];
    body.push(`# Compare Packages & Pricing\n`);
    body.push(`Transparent, all-inclusive pricing with no hidden fees. Every package includes state filing fees, registered agent, and compliance services.\n`);
    body.push(`See individual package pages for full details.\n`);

    body.push(`| Package | LLC Formation | LLC Renewal | Corp Formation | Corp Renewal |`);
    body.push(`| --- | --- | --- | --- | --- |`);

    // We'll reference the packages from the main generator
    body.push(`<!-- Package comparison table is populated from package data -->\n`);
    body.push(`Visit individual package pages for full feature lists and add-on options.\n`);

    writeFile(
      path.join(OUT_DIR, "compare-packages.md"),
      fm + "\n\n" + body.join("\n")
    );
  }

  // --- Privacy Policy (placeholder) ---
  {
    const fm = frontmatter({
      title: "Privacy Policy",
      description: "Incorporate123 privacy policy.",
      slug: "/privacy-policy/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
    });

    const body = `# Privacy Policy\n\n<!-- PLACEHOLDER: Needs attorney review. This page should contain Incorporate123's privacy policy covering data collection, storage, usage, and disclosure practices. -->\n\nThis page is under review by legal counsel.\n`;

    writeFile(path.join(OUT_DIR, "privacy-policy.md"), fm + "\n\n" + body);
  }

  // --- Terms (placeholder) ---
  {
    const fm = frontmatter({
      title: "Terms of Service",
      description: "Incorporate123 terms of service.",
      slug: "/terms/",
      pillar: null,
      type: "utility",
      priority: "P1",
      status: "draft",
    });

    const body = `# Terms of Service\n\n<!-- PLACEHOLDER: Needs attorney review. This page should contain Incorporate123's terms of service, liability limitations, refund policy, and service agreements. -->\n\nThis page is under review by legal counsel.\n`;

    writeFile(path.join(OUT_DIR, "terms.md"), fm + "\n\n" + body);
  }
}

// ---------------------------------------------------------------------------
// Generator: Compare Packages (with actual data)
// ---------------------------------------------------------------------------

function generateComparePackagesWithData(packages: PackageTier[]) {
  // Re-generate compare-packages.md with actual pricing table
  const fm = frontmatter({
    title: "Compare Packages & Pricing",
    description: "Compare all Incorporate123 formation packages side by side. Transparent, all-inclusive pricing with no hidden fees.",
    slug: "/compare-packages/",
    pillar: null,
    type: "utility",
    priority: "P1",
    status: "draft",
    seo: {
      primary_keyword: "llc formation packages comparison",
      secondary_keywords: "[]",
    },
  });

  const body: string[] = [];
  body.push(`# Compare Packages & Pricing\n`);
  body.push(`Transparent, all-inclusive pricing with no hidden fees. Every package includes state filing fees, registered agent, and compliance services.\n`);

  body.push(`## Package Pricing Overview\n`);
  body.push(`| Package | LLC Formation | LLC Renewal | Corp Formation | Corp Renewal |`);
  body.push(`| --- | --- | --- | --- | --- |`);

  for (const pkg of packages) {
    body.push(
      `| [${pkg.name}](/packages/${pkg.id}/) | $${pkg.prices.llc.formation.toLocaleString()} | $${pkg.prices.llc.renewal}/yr | $${pkg.prices.corp.formation.toLocaleString()} | $${pkg.prices.corp.renewal}/yr |`
    );
  }
  body.push("");

  // Feature comparison
  body.push(`## Feature Comparison\n`);

  // Collect all unique feature names
  const featureNames = new Set<string>();
  for (const pkg of packages) {
    for (const f of pkg.features) {
      featureNames.add(f.name);
    }
  }

  body.push(`| Feature | ${packages.map((p) => p.name).join(" | ")} |`);
  body.push(`| --- | ${packages.map(() => "---").join(" | ")} |`);

  for (const fname of featureNames) {
    const vals = packages.map((pkg) => {
      const feature = pkg.features.find((f) => f.name === fname);
      if (!feature) return "—";
      if (feature.status === "included") return "Included";
      if (feature.status === "add-on") return "Add-On";
      return "—";
    });
    body.push(`| ${fname} | ${vals.join(" | ")} |`);
  }
  body.push("");

  body.push(`## Available Add-Ons (All Packages)\n`);
  // Use first package's add-ons as representative
  if (packages[0]?.addOns) {
    for (const addon of packages[0].addOns) {
      const price = addon.price === 0 ? "Free" : `$${addon.price}`;
      body.push(`- **${addon.name}** (${price}): ${addon.description}`);
    }
  }
  body.push("");

  writeFile(
    path.join(OUT_DIR, "compare-packages.md"),
    fm + "\n\n" + body.join("\n")
  );
}

// ---------------------------------------------------------------------------
// Generator: Manual / Offshore Pages
// ---------------------------------------------------------------------------

function generateManualPages() {
  console.log("\n--- Generating Manual Pages ---");

  // --- Anonymous Corporation (manual) ---
  {
    const dir = path.join(OUT_DIR, "privacy");
    ensureDir(dir);

    const fm = frontmatter({
      title: "Anonymous Corporation Formation",
      description: "Form a corporation with no public ties to your name. Wyoming and Nevada allow corporate formation with full nominee coverage — directors, officers, and shareholders kept private.",
      slug: "/anonymous-corporation/",
      pillar: "privacy",
      type: "cluster",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "anonymous corporation",
        secondary_keywords: '["anonymous corp formation", "private corporation"]',
      },
      related_packages: ["wyoming-gold", "nevada-gold"],
      reading_time: "7 min read",
    });

    const body = `# Anonymous Corporation Formation

Form a corporation with no public ties to your name. Wyoming and Nevada allow corporate formation with full nominee coverage — directors, officers, and shareholders kept private.

## What Is an Anonymous Corporation?

An anonymous corporation is formed in a state that allows nominee directors and officers to appear on all public filings in place of the actual owner's information. Combined with nominee shareholder services, your ownership remains completely private from public record searches.

## Why Choose a Corporation Over an LLC?

Most privacy-conscious clients choose LLCs for their flexibility and simplicity. However, corporations are the better choice when:

- You plan to raise capital through stock issuance
- You need a formal board structure for investor confidence
- Your industry requires corporate status (banking, insurance)
- You plan to go public (IPO) eventually

## How Anonymous Corporate Formation Works

1. We file your Articles of Incorporation using nominee directors and officers
2. Nominee shareholders hold shares on your behalf (private agreement)
3. You maintain full control through private shareholder agreements and bylaws
4. All ongoing filings (annual reports, amendments) use nominees year-round

## Wyoming vs. Nevada for Anonymous Corporations

Both states support anonymous corporations. Wyoming offers lower annual costs ($60 vs $350+) and stronger privacy statutes. Nevada offers a dedicated business court and is preferred if you operate physically in Nevada.

## Corporation Pricing

Corporate formation is available in all our packages at a slightly higher price point than LLCs:

- **Wyoming Gold Corp:** $1,575 (formation) / $625 (renewal)
- **Wyoming Silver Corp:** $1,175 (formation) / $425 (renewal)
- **Nevada Gold Corp:** $2,100 (formation) / $625 (renewal)

## Frequently Asked Questions

### Can a corporation be truly anonymous?

Yes, in Wyoming and Nevada. Both states allow nominee directors, officers, and (through private agreements) shareholders. Our Gold packages include year-round nominees on all corporate filings.

### What are the ongoing compliance requirements?

Corporations require annual meetings, board minutes, annual report filings, and maintenance of corporate records. All of these are included in our compliance services.

---

**Related Packages:** [Wyoming Gold](/packages/wyoming-gold/), [Nevada Gold](/packages/nevada-gold/)
`;

    writeFile(path.join(dir, "anonymous-corporation.md"), fm + "\n\n" + body);
  }

  // --- LLC vs Living Trust (manual) ---
  {
    const dir = path.join(OUT_DIR, "asset-protection");
    ensureDir(dir);

    const fm = frontmatter({
      title: "LLC vs. Living Trust for Asset Protection",
      description: "Understand the key differences between LLCs and living trusts for asset protection. Different tools for different purposes — most clients benefit from both.",
      slug: "/llc-vs-living-trust/",
      pillar: "asset-protection",
      type: "cluster",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "llc vs living trust",
        secondary_keywords: '["llc vs trust asset protection", "living trust vs llc"]',
      },
      related_packages: ["wyoming-gold"],
      reading_time: "6 min read",
    });

    const body = `# LLC vs. Living Trust for Asset Protection

Understand the key differences between LLCs and living trusts for asset protection. These are different tools for different purposes — most clients benefit from both.

## LLCs: Business Asset Protection

LLCs protect business and investment assets through:

- **Charging order protection** — creditors cannot seize LLC assets, only receive distributions (if any are made)
- **Liability compartmentalization** — each LLC isolates its assets from claims against other entities or you personally
- **Operational flexibility** — LLCs can hold real estate, investments, businesses, and intellectual property
- **Privacy** — combined with nominees, your ownership stays off public records

Wyoming LLCs offer the strongest charging order protection in the U.S., including explicit single-member LLC protection.

## Living Trusts: Estate Planning & Personal Assets

Living trusts handle personal asset management and transfer:

- **Probate avoidance** — assets transfer to beneficiaries without going through probate court
- **Incapacity planning** — a successor trustee can manage your assets if you become incapacitated
- **Privacy** — trust documents are private (unlike wills, which become public during probate)
- **No asset protection** — a revocable living trust does NOT protect assets from creditors

## Key Differences

| Feature | LLC | Living Trust |
| --- | --- | --- |
| Primary Purpose | Asset protection & liability | Estate planning & transfer |
| Creditor Protection | Yes (charging order) | No (revocable trusts) |
| Probate Avoidance | No | Yes |
| Incapacity Planning | Limited | Yes |
| Privacy from Public Records | Yes (with nominees) | Yes (no probate) |
| Business Operations | Yes | Not designed for this |
| Real Estate Holding | Excellent | Good for personal residence |
| Tax Treatment | Pass-through | Grantor trust (transparent) |

## The Recommended Approach: Use Both

Most clients with $500K+ in assets benefit from both structures:

1. **LLCs** for business assets, investment properties, and operational businesses — providing charging order protection and liability isolation
2. **Living trust** for personal assets, primary residence, and estate planning — providing probate avoidance and incapacity planning
3. **The LLC membership interests** can be held by the living trust, combining both protections

## What We Handle

Incorporate123 specializes in the LLC side of this equation. We form and maintain Wyoming and Nevada LLCs with full privacy features (nominees, offshore storage) and charging order protection. For living trust creation, we recommend consulting an estate planning attorney in your state.

## Frequently Asked Questions

### Can I put my LLC inside a living trust?

Yes. The living trust can hold the LLC membership interests. This gives you charging order protection (from the LLC) plus probate avoidance (from the trust). This is a common structure for high-net-worth individuals.

### Does a living trust protect my assets from lawsuits?

A revocable living trust does NOT protect assets from creditors. You need an LLC for creditor protection. An irrevocable trust can provide some asset protection, but that's a specialized estate planning tool — consult an attorney.

---

**Related Packages:** [Wyoming Gold](/packages/wyoming-gold/)
`;

    writeFile(path.join(dir, "llc-vs-living-trust.md"), fm + "\n\n" + body);
  }

  // --- Offshore Pages ---
  generateOffshorePages();
}

function generateOffshorePages() {
  const dir = path.join(OUT_DIR, "offshore");
  ensureDir(dir);

  // Offshore hub _index.md
  {
    const fm = frontmatter({
      title: "International & Offshore Services",
      description: "International corporation formation, offshore asset protection, and IRS compliance services. Nevis, BVI, Panama, and Hong Kong company packages with bank account opening.",
      slug: "/offshore/",
      pillar: null,
      type: "offshore",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "offshore company formation",
        secondary_keywords: '["international asset protection", "offshore llc"]',
      },
    });

    const body = `# International & Offshore Services

Incorporate123 offers international corporation and LLC formation in select jurisdictions for asset protection, international business operations, and financial diversification.

## Why Consider International Structures?

International diversification places a portion of your wealth outside the jurisdiction of any single country's court system. Key benefits include:

- **Asset protection** — assets held in foreign entities are significantly harder for domestic creditors to reach
- **Jurisdictional diversification** — reduce dependence on a single government's policies
- **International banking** — access to multi-currency accounts and global financial services
- **Business operations** — establish presence in international financial centers

## Our International Packages

- [Nevis International Corporation/LLC](/offshore/nevis/) — ideal first step into international asset protection
- [BVI Business Company](/offshore/bvi/) — one of the most established and reputable offshore jurisdictions
- [Panama Corporation](/offshore/panama/) — excellent for international operating businesses
- [Hong Kong Limited Company](/offshore/hong-kong/) — access Asia's premier financial center

## IRS Compliance

We believe in full IRS compliance for all offshore structures. Forming international entities without understanding reporting requirements is irresponsible. We include:

- Full disclosure of all IRS reporting requirements before you become a client
- Reminder notices in advance of filing deadlines
- Referrals to CPAs specializing in international tax compliance
- [IRS Compliance Guide](/offshore/irs-compliance/)

## Know Your Client (KYC) Requirements

International formation requires thorough due diligence. You will need to provide:

- Certified copies of passport and driver's license
- Proof of residential address
- Professional or banking reference
- Detailed information on purpose of incorporation and source of funds

All client due diligence is held confidentially outside of the United States.

## Contact Us

International structures are more complex than domestic formations. We recommend calling us to discuss your specific situation before ordering: **(775) 313-4155**.
`;

    writeFile(path.join(dir, "_index.md"), fm + "\n\n" + body);
  }

  // Nevis
  {
    const fm = frontmatter({
      title: "Nevis International Corporation/LLC Package",
      description: "Form a Nevis corporation or LLC with bank account opening, nominee director, and IRS pass-through election. Comprehensive offshore asset protection starting at $2,060.",
      slug: "/offshore/nevis/",
      pillar: null,
      type: "offshore",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "nevis llc formation",
        secondary_keywords: '["nevis corporation", "nevis asset protection"]',
      },
    });

    const body = `# Nevis International Corporation/LLC Package

The Nevis LLC Ordinance of 1995 is a modern statute modeled on Nevada's LLC laws, making Nevis an ideal jurisdiction for international asset protection.

## Why Nevis?

- **Charging order protection** — similar to Nevada LLC protections
- **Non-cooperation with foreign courts** — Nevis will not respond to subpoenas from non-Nevis courts
- **Single-member capability** — one member/shareholder is sufficient
- **Tax-efficient** — pass-through taxation available for U.S. persons
- **English common law** — familiar legal framework

## Package Includes

- Certificate of Incorporation (Corp) or Certificate of Formation (LLC)
- Memorandum & Articles of Association (Corp) / Operating Agreement (LLC)
- 1,000 no par value shares (Corp)
- Nevis Government Registration Fee
- Nevis Registered Office/Agent Service
- Offshore Secretary — bylaws, operating agreement, minutes & records custodian
- Offshore Nominee Director/Manager
- IRS "Pass-through" election (if requested by U.S. person) — FREE
- Offshore Regulatory KYC Administration
- Offshore bank account opening

## Pricing

- **Corporation:** $2,290 (renewal: $1,535/yr)
- **LLC:** $2,060 (renewal: $1,535/yr)

## Ideal Use Cases

- First step into international asset protection
- Holding liquid assets, commodities, or securities outside U.S. jurisdiction
- International operating business for clients with global customer base
- Combined with a Bahamas Asset Protection Trust for comprehensive protection

## IRS Compliance for U.S. Persons

Nevis corporations and LLCs can elect "pass-through" taxation (Foreign Disregarded Entity or Foreign Partnership status), which simplifies IRS reporting significantly. Required forms include:

- Form 8858 (FDE status) or Form 8865 (Foreign Partnership)
- Form 8938 — Statement of Specified Foreign Financial Assets
- FinCEN Form 114 (FBAR) — Foreign Financial Accounts

We provide filing deadline reminders and can refer you to a CPA specializing in international tax compliance.
`;

    writeFile(path.join(dir, "nevis.md"), fm + "\n\n" + body);
  }

  // BVI
  {
    const fm = frontmatter({
      title: "BVI Business Company Package",
      description: "Form a British Virgin Islands business company with bank account opening, nominee director, and comprehensive offshore services. Zero-tax jurisdiction starting at $3,200.",
      slug: "/offshore/bvi/",
      pillar: null,
      type: "offshore",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "bvi company formation",
        secondary_keywords: '["bvi business company", "british virgin islands llc"]',
      },
    });

    const body = `# BVI Business Company Package

The British Virgin Islands is one of the most established and reputable offshore jurisdictions in the world, particularly well-regarded in Asian and European financial centers.

## Why BVI?

- **Zero tax jurisdiction** — no corporate tax, capital gains tax, dividend tax, or withholding tax
- **Global reputation** — one of the most widely accepted offshore entities for banking
- **Asset flexibility** — directors can transfer assets, merge, consolidate, or re-domicile the company
- **FATF/OECD compliant** — never been blacklisted
- **Widely accepted** — especially for banking in Hong Kong, Singapore, and Switzerland

## Package Includes

- Certificate of Incorporation/Formation
- Memorandum & Articles of Association
- Filing Register of Directors
- BVI Government License Fee
- BVI Registered Agent Service
- Offshore Company Secretary
- Offshore Nominee Director
- IRS "Pass-through" election (if requested by U.S. person) — FREE
- Offshore Regulatory KYC Administration
- Offshore bank account opening

## Pricing

- **BVI Business Company:** $3,200 (renewal: $1,950/yr)

## Ideal Use Cases

- Holding assets outside U.S. jurisdiction
- International operating business
- Banking in Asian and European financial centers
- Combined with asset protection trust for comprehensive protection

## Economic Substance Requirements

BVI has adopted economic substance regulations for certain business activities including banking, insurance, fund management, and IP holding. Companies conducting these activities must demonstrate adequate economic substance in the BVI. Consult with us about whether your intended business model is affected.

## IRS Compliance for U.S. Persons

BVI companies can elect pass-through taxation, simplifying reporting. See our [IRS Compliance Guide](/offshore/irs-compliance/) for details on required forms and filing deadlines.
`;

    writeFile(path.join(dir, "bvi.md"), fm + "\n\n" + body);
  }

  // Panama
  {
    const fm = frontmatter({
      title: "Panama International Corporation Package",
      description: "Form a Panama corporation with bank account opening, three nominee directors, and comprehensive offshore services. Territorial taxation starting at $2,450.",
      slug: "/offshore/panama/",
      pillar: null,
      type: "offshore",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "panama corporation formation",
        secondary_keywords: '["panama offshore company", "panama international corporation"]',
      },
    });

    const body = `# Panama International Corporation Package

Panama is a well-developed offshore financial center with over 100 international financial institutions, a territorial tax system, and the U.S. Dollar as its primary currency.

## Why Panama?

- **Territorial taxation** — no income, dividend, or capital gains tax on revenue generated outside Panama
- **U.S. Dollar economy** — local currency (Balboa) is at par with USD; U.S. dollar bills are the paper currency
- **Major financial center** — 100+ international financial institutions
- **No exchange controls** — free flow of capital
- **Strong nominee privacy** — three nominee directors/officers keep your name off public filings

## Package Includes

- Registered Public Deed / Articles of Incorporation (Spanish)
- English Translation of Public Deed
- 500 no par value shares
- Panama Government Registration Fee
- Panama Registered Office/Agent Service
- Panama Registered Business Mailing Address
- Nominee 1st Director/President
- Nominee 2nd Director/Secretary
- Nominee 3rd Director
- Offshore Regulatory KYC Administration
- Offshore bank account opening

## Pricing

- **Panama Corporation:** $2,450 (renewal: $1,385/yr)

## Important: CFC Filing Required

Panama corporations **cannot** elect pass-through taxation with the IRS. U.S. shareholders must file Form 5471 (Annual Information Return of Foreign Controlled Corporation) annually. Additional required forms:

- Form 926 — Transfer of Property to a Foreign Corporation
- Form 5471 — Annual Info Return of Foreign Controlled Corporation
- Form 8938 — Statement of Specified Foreign Financial Assets
- FinCEN Form 114 (FBAR) — Foreign Financial Accounts

## Ideal Use Cases

- International operating business with non-U.S. revenue
- Clients who prefer Latin American jurisdiction
- Business operations requiring USD-denominated banking
- Asset diversification outside the United States
`;

    writeFile(path.join(dir, "panama.md"), fm + "\n\n" + body);
  }

  // Hong Kong
  {
    const fm = frontmatter({
      title: "Hong Kong Limited Company Package",
      description: "Form a Hong Kong limited company with bank account opening, nominee director, and access to Asia's premier financial center. Territorial taxation starting at $3,950.",
      slug: "/offshore/hong-kong/",
      pillar: null,
      type: "offshore",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "hong kong company formation",
        secondary_keywords: '["hong kong limited company", "hong kong offshore company"]',
      },
    });

    const body = `# Hong Kong Limited Company Package

Hong Kong has consistently ranked as one of the world's freest economies, offering access to Asia's premier financial center with territorial taxation and minimal regulatory burden.

## Why Hong Kong?

- **Territorial taxation** — zero profits tax on revenue generated outside Hong Kong
- **Low local tax rate** — only 16.5% profits tax on Hong Kong-sourced income
- **No sales tax, VAT, capital gains tax, dividend tax, or withholding tax**
- **World-class financial center** — access to Asian banking, investment, and trade networks
- **Clean reputation** — not widely recognized as a tax haven; legitimate business hub
- **Free flow of capital** — no exchange controls

## Package Includes

- Certificate of Incorporation (Companies Registry)
- Hong Kong Official Registration Fees (includes Business Registration)
- Memorandum of Articles of Association — preparation & minutes
- Hong Kong Registered Office
- Hong Kong Company Secretary (required by law)
- Nominee Shareholder (shareholders are public record)
- Offshore Nominee (Individual) Director
- IRS "Pass-through" election (if requested by U.S. person) — FREE
- Offshore Regulatory KYC Administration
- Offshore bank account opening
- IRS reporting requirement notifications

## Pricing

- **Hong Kong Limited Company:** $3,950

## Important: Annual Compliance Costs

Hong Kong is NOT inexpensive to maintain. The company must prepare audited accounts and file a Profits Tax Return (PTR) annually. Expect approximately US$2,000/year for CPA services. Directors are held personally responsible for failure to file timely tax returns.

## Ideal Use Cases

- eCommerce businesses serving Asian markets
- International trade and investment activities
- Clients who want access to Asian banking and financial services
- Asset diversification through a reputable financial center

## IRS Compliance for U.S. Persons

Hong Kong companies can elect pass-through taxation, simplifying reporting. See our [IRS Compliance Guide](/offshore/irs-compliance/) for details.
`;

    writeFile(path.join(dir, "hong-kong.md"), fm + "\n\n" + body);
  }

  // IRS Compliance
  {
    const fm = frontmatter({
      title: "IRS Compliance for Offshore Structures",
      description: "Complete guide to IRS reporting requirements for U.S. persons with offshore trusts, companies, assets, and financial accounts. Stay compliant, stay protected.",
      slug: "/offshore/irs-compliance/",
      pillar: null,
      type: "offshore",
      priority: "P1",
      status: "draft",
      seo: {
        primary_keyword: "irs offshore reporting requirements",
        secondary_keywords: '["fbar filing", "form 8938", "offshore tax compliance"]',
      },
    });

    const body = `# IRS Compliance for Offshore Structures

Full compliance with IRS reporting requirements is essential for any U.S. person with offshore structures. We believe that marketing offshore entities without full disclosure of tax reporting requirements is grossly unethical.

## Our Compliance Philosophy

- **Full transparency** — all reporting requirements are disclosed before you become a client
- **Filing reminders** — we send reminder notices in advance of all filing deadlines
- **CPA referrals** — we can refer you to accountants specializing in international tax compliance
- **Compliance does not mean vulnerability** — disclosing assets to the IRS does not give the IRS the ability to seize them

## Offshore Corporation/LLC — Pass-Through Filing

Electing pass-through taxation (Foreign Disregarded Entity or Foreign Partnership status) greatly simplifies offshore tax reporting. This eliminates the complex CFC filing (Form 5471).

**Initial IRS filings:**
- Form SS-4 — obtain EIN for the company
- Form 8832 — elect FDE or Foreign Partnership status

**Ongoing annual filings:**
- Form 8858 (single-member FDE) or Form 8865 (Foreign Partnership)
- Form 8938 — Statement of Specified Foreign Financial Assets
- FinCEN Form 114 (FBAR) — Foreign Financial Accounts (online filing)

## Controlled Foreign Corporation (CFC) Filing

If your international corporation does not elect pass-through taxation (or is ineligible, such as Panama corporations), you must file as a CFC:

- Form 926 — Transfer of Property to a Foreign Corporation
- Form 5471 — Annual Information Return of Foreign Controlled Corporation
- Form 8938 — Statement of Specified Foreign Financial Assets
- FinCEN Form 114 (FBAR) — Foreign Financial Accounts

## Offshore Trust Compliance

Our Bahamas Asset Protection Trust is designed to be TAX NEUTRAL under the "Grantor Trust" rules (U.S. Code 671):

- The trust's income passes through to your personal return (Form 1040)
- Transfers to/from the trust have zero tax consequences while the settlor is alive
- The trustee prepares Form 3520-A annually
- You file Form 3520 — Transactions with Foreign Trusts

**After the settlor's death:** The trust becomes a true foreign trust. The trust fund may grow tax-free for generations with no U.S. tax due and no reporting requirements except reporting distributions to U.S. beneficiaries.

## Important Reminder

Offshore tax reporting has gotten complicated, but with the right help, it is really no more complicated than preparing a tax return for a U.S. corporation. The penalties for non-reporting are severe — stay compliant.

Just because assets are disclosed to the IRS does not mean the IRS can seize them. Once outside the U.S., the IRS becomes a creditor like any other and must go through a complex legal procedure to attempt collection.

## Get Help

Contact us at **(775) 313-4155** to discuss your specific offshore compliance needs, or ask for a referral to a CPA specializing in international tax reporting.
`;

    writeFile(path.join(dir, "irs-compliance.md"), fm + "\n\n" + body);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log(
    DRY_RUN
      ? "=== DRY RUN — no files will be written ==="
      : `=== Generating content to ${OUT_DIR} ===`
  );

  // Create output directory
  ensureDir(OUT_DIR);

  // Load all data
  const data = loadData();

  // 1. Pillar hubs (4 _index.md files)
  generatePillarHubs(data.pillars);

  // 2. Cluster pages (~28 files)
  generateClusters(data.clusters);

  // 3. Comparison pages (~12 files)
  generateComparisons(data.comparisons);

  // 4. Package pages (8 files)
  generatePackages(data.packages);

  // 5. State hubs (4 files)
  generateStates(data.states);

  // 6. Utility pages (~9 files)
  generateUtilityPages({
    homepage: data.homepage,
    homepageTestimonials: data.homepageTestimonials,
    pillarCardOverrides: data.pillarCardOverrides,
    about: data.about,
    contact: data.contact,
    faq: data.faq,
    blog: data.blog,
    testimonials: data.testimonials,
  });

  // 7. Re-generate compare-packages with actual data
  generateComparePackagesWithData(data.packages);

  // 8. Manual pages (~9 files)
  generateManualPages();

  // Count files
  if (!DRY_RUN) {
    let count = 0;
    function countFiles(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          countFiles(path.join(dir, entry.name));
        } else if (entry.name.endsWith(".md")) {
          count++;
        }
      }
    }
    countFiles(OUT_DIR);
    console.log(`\n=== Done! Generated ${count} markdown files ===`);
  }
}

try {
  main();
} catch (err) {
  console.error("Error:", err);
  process.exit(1);
}
