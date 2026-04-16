/* Build the pricing questions tracker Excel file for David.
   Run: node 07_Pricing_Questions_For_David_builder.js
*/
const ExcelJS = require("C:/Users/alexo/AppData/Local/Temp/pricing-doc/node_modules/exceljs");
const path = require("path");

const outputPath = path.join(__dirname, "07_Pricing_Questions_For_David.xlsx");

const rows = [
  // ---------- Offshore — Nevis (from spec) ----------
  {
    id: "OFF-01",
    category: "Offshore — Nevis",
    item: "Nevis LLC formation fee",
    current: "(not set)",
    spec: "$2,060",
    priority: "HIGH",
    source: "Incorporate123_Nevis_Offshore_Jurisdiction_Page_Specification.md",
    notes:
      "Spec confirms — David needs to confirm accuracy. Used on Nevis page.",
  },
  {
    id: "OFF-02",
    category: "Offshore — Nevis",
    item: "Nevis LLC annual renewal",
    current: "(not set)",
    spec: "$1,535",
    priority: "HIGH",
    source: "Incorporate123_Nevis_Offshore_Jurisdiction_Page_Specification.md",
    notes: "Spec confirms — confirm for Nevis renewal column.",
  },
  {
    id: "OFF-03",
    category: "Offshore — Nevis",
    item: "Nevis Corporation formation fee",
    current: "(not set)",
    spec: "$2,290",
    priority: "HIGH",
    source: "Incorporate123_Nevis_Offshore_Jurisdiction_Page_Specification.md",
    notes: "Alternative to LLC entity.",
  },
  {
    id: "OFF-04",
    category: "Offshore — Nevis",
    item: "Nevis Corporation annual renewal",
    current: "(not set)",
    spec: "$1,535",
    priority: "HIGH",
    source: "Incorporate123_Nevis_Offshore_Jurisdiction_Page_Specification.md",
    notes: "Same as LLC renewal per spec.",
  },
  {
    id: "OFF-05",
    category: "Offshore — Nevis",
    item: "Nevis banking assistance (optional add-on)",
    current: "(not set)",
    spec: "$500",
    priority: "MEDIUM",
    source: "Incorporate123_Nevis_Offshore_Jurisdiction_Page_Specification.md",
    notes: "Optional add-on; not required for formation.",
  },
  {
    id: "OFF-06",
    category: "Offshore — Nevis",
    item: "Nevis KYC fee (per owner)",
    current: "(not set)",
    spec: "$150",
    priority: "MEDIUM",
    source: "Incorporate123_Nevis_Offshore_Jurisdiction_Page_Specification.md",
    notes: "Per-owner administration fee.",
  },

  // ---------- Offshore — Other Jurisdictions (TBD) ----------
  {
    id: "OFF-07",
    category: "Offshore — BVI",
    item: "BVI formation fee",
    current: "(not set)",
    spec: "TBD",
    priority: "HIGH",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "Spec leaves this blank for David to fill.",
  },
  {
    id: "OFF-08",
    category: "Offshore — BVI",
    item: "BVI annual renewal",
    current: "(not set)",
    spec: "TBD",
    priority: "HIGH",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "",
  },
  {
    id: "OFF-09",
    category: "Offshore — Cook Islands",
    item: "Cook Islands formation fee",
    current: "(not set)",
    spec: "TBD",
    priority: "MEDIUM",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "",
  },
  {
    id: "OFF-10",
    category: "Offshore — Cook Islands",
    item: "Cook Islands annual renewal",
    current: "(not set)",
    spec: "TBD",
    priority: "MEDIUM",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "",
  },
  {
    id: "OFF-11",
    category: "Offshore — Panama",
    item: "Panama formation fee",
    current: "(not set)",
    spec: "TBD",
    priority: "HIGH",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "Spec explicitly flags as TBD.",
  },
  {
    id: "OFF-12",
    category: "Offshore — Panama",
    item: "Panama annual renewal",
    current: "(not set)",
    spec: "TBD",
    priority: "HIGH",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "",
  },
  {
    id: "OFF-13",
    category: "Offshore — Hong Kong",
    item: "Hong Kong formation fee",
    current: "(not set)",
    spec: "TBD",
    priority: "HIGH",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "New jurisdiction per spec — not in current prototype.",
  },
  {
    id: "OFF-14",
    category: "Offshore — Hong Kong",
    item: "Hong Kong annual renewal",
    current: "(not set)",
    spec: "TBD",
    priority: "HIGH",
    source: "Offshore_Hub spec — pricing TBD",
    notes: "",
  },

  // ---------- Offshore — Offering Decisions ----------
  {
    id: "OFF-15",
    category: "Offshore — Offering Decision",
    item: "Is Belize still offered?",
    current: "Yes (in prototype)",
    spec: "Not listed (spec has only Nevis/BVI/Panama/HK)",
    priority: "HIGH",
    source: "Offshore_Hub spec vs current prototype",
    notes: "Prototype has Belize, spec does not. Confirm keep or remove.",
  },
  {
    id: "OFF-16",
    category: "Offshore — Offering Decision",
    item: "Belize formation + renewal pricing (if kept)",
    current: "(not set)",
    spec: "N/A (not in spec)",
    priority: "MEDIUM",
    source: "Current prototype",
    notes: "Only needed if OFF-15 = kept.",
  },
  {
    id: "OFF-17",
    category: "Offshore — Offering Decision",
    item: "Is Bahamas Dynasty Trust offered?",
    current: "Referenced in Nevis combined structures",
    spec: "Mentioned in Nevis spec; no standalone page",
    priority: "MEDIUM",
    source: "Nevis spec cross-reference",
    notes:
      "If offered, needs a standalone jurisdiction page. If not, remove references.",
  },
  {
    id: "OFF-18",
    category: "Offshore — Parent Company",
    item: "Mention Fidelity Solutions Limited (Hong Kong) as parent?",
    current: "Not mentioned",
    spec: "Spec asks David to decide",
    priority: "LOW",
    source: "About + Offshore Hub specs",
    notes:
      "Could reinforce international credibility, but conflicts with no-office-info positioning.",
  },

  // ---------- State Hubs (from prior PENDING DAVID markers) ----------
  {
    id: "STATE-01",
    category: "State Hub — Wyoming",
    item: "WY annual report fee",
    current: "$62 (prototype)",
    spec: "$50 (Enhanced State Hub spec)",
    priority: "HIGH",
    source: "Wyoming State Hub spec vs states.ts",
    notes: "Conflict. Prior data uses $62. Spec says $50. Confirm actual fee.",
  },
  {
    id: "STATE-02",
    category: "State Hub — Nevada",
    item: "NV annual cost (commerce tax + filing)",
    current: "$350 (prototype)",
    spec: "$500+ (Enhanced State Hub spec)",
    priority: "HIGH",
    source: "Nevada State Hub spec vs states.ts",
    notes: "Conflict. Confirm actual combined cost.",
  },
  {
    id: "STATE-03",
    category: "State Hub — Wyoming",
    item: "WY filing fee",
    current: "$100 (prototype)",
    spec: "$100 (spec agrees)",
    priority: "LOW",
    source: "Wyoming State Hub spec",
    notes: "Both sources agree. Sanity confirm.",
  },
  {
    id: "STATE-04",
    category: "State Hub — Wyoming",
    item: "WY formation timeline",
    current: "3–5 days",
    spec: "5–7 days",
    priority: "MEDIUM",
    source: "Wyoming State Hub spec",
    notes: "Conflict on timeline advertised.",
  },
  {
    id: "STATE-05",
    category: "State Hub — Nevada",
    item: "NV Gold annual renewal",
    current: "$525",
    spec: "$725",
    priority: "HIGH",
    source: "Nevada Gold Package spec vs packages.ts",
    notes: "Significant gap. Confirm.",
  },

  // ---------- Package-Level (from earlier sessions' todos) ----------
  {
    id: "PKG-01",
    category: "Package — Wyoming",
    item: "WY Bronze positioning: standalone tier or sub-tier of Silver?",
    current: "Standalone tier",
    spec: "Depends on David's direction",
    priority: "MEDIUM",
    source: "Apr 1 meeting notes",
    notes: "Affects tier comparison grid and navigation.",
  },
  {
    id: "PKG-02",
    category: "Package — All",
    item: "EIN procurement: included or add-on?",
    current: "Unclear",
    spec: "",
    priority: "MEDIUM",
    source: "Apr 1 meeting notes",
    notes: "$75 add-on or free? Same across all tiers?",
  },
  {
    id: "PKG-03",
    category: "Package — All",
    item: "Operating Agreement: all tiers or Gold-only?",
    current: "Unclear",
    spec: "",
    priority: "MEDIUM",
    source: "Apr 1 meeting notes",
    notes: "",
  },
  {
    id: "PKG-04",
    category: "Package — All",
    item: "Renewal pricing range",
    current: "$225–$625 (prototype)",
    spec: "$575–$2,025 (redline)",
    priority: "HIGH",
    source: "David's Phase 1 redline",
    notes: "Major gap. Need David to confirm actual renewal band.",
  },
  {
    id: "PKG-05",
    category: "Package — Silver/Gold",
    item: "Mail forwarding: included in Silver/Gold or add-on?",
    current: "Included (prototype)",
    spec: "Add-on (redline) vs included (Apr 1 meeting)",
    priority: "MEDIUM",
    source: "Apr 1 meeting vs redline",
    notes: "Conflict between sources. Confirm.",
  },
  {
    id: "PKG-06",
    category: "Package — All",
    item: "Annual renewal — auto-renew or manual confirmation?",
    current: "Unclear",
    spec: "Brand promise: 'no surprise auto-renewals'",
    priority: "HIGH",
    source: "About philosophy vs ToS",
    notes: "ToS currently says manual confirmation — needs David sign-off.",
  },

  // ---------- Content / Statistics ----------
  {
    id: "STAT-01",
    category: "Company Stats",
    item: "Total entities formed",
    current: "12,847 (prototype placeholder)",
    spec: "Must be verified and defensible",
    priority: "HIGH",
    source: "About page + brand guide",
    notes:
      "Brand guide explicitly warns against inflated claims. Need verified number.",
  },
  {
    id: "STAT-02",
    category: "Company Stats",
    item: "Chancery Court operational status in WY",
    current: "Referenced as active",
    spec: "Unclear status",
    priority: "MEDIUM",
    source: "WY State Hub facts questions",
    notes: "Is it actually operational? How to frame?",
  },
  {
    id: "STAT-03",
    category: "Company Stats",
    item: "Tax Foundation ranking year count",
    current: "11 years (prototype)",
    spec: "Needs verification",
    priority: "LOW",
    source: "WY State Hub spec",
    notes: "Confirm actual consecutive years.",
  },

  // ---------- Crypto ----------
  {
    id: "CRYPTO-01",
    category: "Cryptocurrency",
    item: "Crypto KYC data collection",
    current: "Generic reference",
    spec: "",
    priority: "MEDIUM",
    source: "Privacy Policy",
    notes:
      "What specific KYC data is collected for crypto? How long retained? Wallet addresses stored?",
  },
  {
    id: "CRYPTO-02",
    category: "Cryptocurrency",
    item: "Crypto refund handling",
    current: "Default: crypto or USD equivalent",
    spec: "",
    priority: "MEDIUM",
    source: "Terms of Service",
    notes:
      "Refund in original crypto at current value, or in USD equivalent at purchase time?",
  },

  // ---------- Legal ----------
  {
    id: "LEGAL-01",
    category: "Legal Pages",
    item: "Registered office address for Privacy Policy / Terms",
    current: "Removed (per no-office-info rule)",
    spec: "",
    priority: "HIGH",
    source: "Privacy Policy + Terms",
    notes:
      "Does legal counsel require an address on legal pages for GDPR/liability compliance? Default: email+phone only.",
  },
  {
    id: "LEGAL-02",
    category: "Legal Pages",
    item: "GDPR applicability",
    current: "Not addressed",
    spec: "",
    priority: "MEDIUM",
    source: "Privacy Policy",
    notes:
      "Does Incorporate123 actively serve EU residents? If yes, add DPO contact + right-to-erasure language.",
  },
  {
    id: "LEGAL-03",
    category: "Legal Pages",
    item: "Tax disclaimer on llc-vs-scorp-vs-ccorp-tax page",
    current: "Not present",
    spec: "Spec requires prominent disclaimer",
    priority: "MEDIUM",
    source: "Comparison Pages spec",
    notes: "Any specific language legal counsel wants?",
  },
];

async function build() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "Ash / BIT Studios";
  wb.created = new Date();
  wb.title = "Pricing & Decisions Tracker — Incorporate123";

  const sheet = wb.addWorksheet("Pricing Questions", {
    views: [{ state: "frozen", ySplit: 1 }],
  });

  // Column definitions
  sheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Category", key: "category", width: 28 },
    { header: "Item", key: "item", width: 52 },
    { header: "Current (Prototype)", key: "current", width: 26 },
    { header: "Spec / Proposed", key: "spec", width: 26 },
    { header: "David's Answer", key: "answer", width: 22 },
    { header: "Status", key: "status", width: 14 },
    { header: "Priority", key: "priority", width: 12 },
    { header: "Source", key: "source", width: 42 },
    { header: "Notes", key: "notes", width: 60 },
  ];

  // Header row styling
  const headerRow = sheet.getRow(1);
  headerRow.font = { name: "Arial", bold: true, color: { argb: "FFFFFFFF" } };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF1E3A5F" }, // brand navy
  };
  headerRow.alignment = {
    vertical: "middle",
    horizontal: "left",
    wrapText: true,
  };
  headerRow.height = 28;

  // Data rows
  rows.forEach((row) => {
    sheet.addRow({
      id: row.id,
      category: row.category,
      item: row.item,
      current: row.current,
      spec: row.spec,
      answer: "",
      status: "Pending",
      priority: row.priority,
      source: row.source,
      notes: row.notes,
    });
  });

  // Apply styling to data rows
  const priorityFill = {
    HIGH: { argb: "FFFEF2F2" },
    MEDIUM: { argb: "FFFEF3C7" },
    LOW: { argb: "FFF1F5F9" },
  };

  for (let r = 2; r <= rows.length + 1; r++) {
    const row = sheet.getRow(r);
    const priority = row.getCell(8).value;
    row.font = { name: "Arial", size: 11 };
    row.alignment = { vertical: "top", wrapText: true };
    row.height = 42;

    // Priority color
    const fill = priorityFill[priority];
    if (fill) {
      row.getCell(8).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: fill,
      };
      row.getCell(8).font = { name: "Arial", bold: true, size: 11 };
      row.getCell(8).alignment = { horizontal: "center", vertical: "middle" };
    }

    // Status cell — light highlight
    row.getCell(7).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFF8FAFC" },
    };
    row.getCell(7).alignment = { horizontal: "center", vertical: "middle" };

    // David's Answer cell — yellow highlight (needs input)
    row.getCell(6).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFFFFE0" },
    };

    // ID cell — bold, centered
    row.getCell(1).font = { name: "Arial", bold: true, size: 11 };
    row.getCell(1).alignment = { horizontal: "center", vertical: "middle" };

    // Borders
    for (let c = 1; c <= 10; c++) {
      row.getCell(c).border = {
        top: { style: "thin", color: { argb: "FFE2E8F0" } },
        left: { style: "thin", color: { argb: "FFE2E8F0" } },
        bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
        right: { style: "thin", color: { argb: "FFE2E8F0" } },
      };
    }
  }

  // Data validation for Status column (dropdown)
  for (let r = 2; r <= rows.length + 1; r++) {
    sheet.getCell(`G${r}`).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"Pending,Confirmed,Needs follow-up,Skip,N/A"'],
    };
  }

  // Add a summary / instructions sheet
  const intro = wb.addWorksheet("How to Use", {
    properties: { tabColor: { argb: "FF1E3A5F" } },
  });
  intro.columns = [{ width: 100 }];
  const introLines = [
    "Pricing & Decisions Tracker — Incorporate123",
    "",
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    "Owner: BIT Studios (Ash / Alex)",
    "Audience: David — April 20 meeting walkthrough",
    "",
    "HOW TO USE",
    "",
    "1. Open the 'Pricing Questions' tab.",
    "2. Walk row-by-row. For each row, fill in the 'David's Answer' column (yellow highlight).",
    "3. Set the 'Status' dropdown to one of:",
    "   • Pending — not yet discussed",
    "   • Confirmed — David gave the final answer",
    "   • Needs follow-up — needs more research before David can answer",
    "   • Skip — not applicable or descoped",
    "   • N/A — not relevant to current launch",
    "",
    "4. Priority column shows HIGH / MEDIUM / LOW — start with HIGH rows if meeting time is short.",
    "",
    "WHAT EACH COLUMN MEANS",
    "",
    "• ID — stable identifier; reference these in meeting notes (e.g., 'OFF-01')",
    "• Category — groups items by topic area",
    "• Item — the specific decision or price point needed",
    "• Current (Prototype) — what the prototype currently shows",
    "• Spec / Proposed — what the enhanced spec suggests (when available)",
    "• David's Answer — empty until David confirms",
    "• Status — workflow state",
    "• Priority — HIGH / MEDIUM / LOW",
    "• Source — spec file or prior meeting where the question surfaced",
    "• Notes — rationale, context, links to other docs",
    "",
    "CATEGORIES COVERED",
    "",
    "• Offshore — Nevis (confirmed spec pricing)",
    "• Offshore — BVI, Cook Islands, Panama, Hong Kong (all TBD per spec)",
    "• Offshore — Offering decisions (Belize, Bahamas trust, parent company)",
    "• State Hub — Wyoming & Nevada fee conflicts",
    "• Package-level — Bronze positioning, EIN, Operating Agreement, renewal bands, mail forwarding, auto-renewal",
    "• Company stats — entity count, Chancery Court, rankings",
    "• Cryptocurrency — KYC handling, refund policy",
    "• Legal pages — registered office, GDPR, tax disclaimers",
    "",
    "AFTER THE MEETING",
    "",
    "Confirmed rows get translated into prototype updates by searching for the matching PENDING DAVID markers in the codebase (grep 'PENDING DAVID'). Each marker corresponds to one row here — the ID column is the canonical reference.",
  ];
  introLines.forEach((line, i) => {
    const row = intro.getRow(i + 1);
    row.getCell(1).value = line;
    if (i === 0) {
      row.getCell(1).font = {
        name: "Arial",
        bold: true,
        size: 16,
        color: { argb: "FF1E3A5F" },
      };
    } else if (
      line === "HOW TO USE" ||
      line === "WHAT EACH COLUMN MEANS" ||
      line === "CATEGORIES COVERED" ||
      line === "AFTER THE MEETING"
    ) {
      row.getCell(1).font = {
        name: "Arial",
        bold: true,
        size: 12,
        color: { argb: "FF1E3A5F" },
      };
    } else {
      row.getCell(1).font = { name: "Arial", size: 11 };
    }
    row.getCell(1).alignment = { vertical: "top", wrapText: true };
  });

  await wb.xlsx.writeFile(outputPath);
  console.log(`Wrote ${outputPath}`);
  console.log(`Rows: ${rows.length}`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
