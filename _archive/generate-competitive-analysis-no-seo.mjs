import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, HeadingLevel, BorderStyle, ShadingType,
  TableLayoutType, VerticalAlign, PageBreak, Tab
} from "docx";
import { writeFileSync } from "fs";

// ============================================================
// HELPERS
// ============================================================

const BRAND_BLUE = "1B3A5C";
const BRAND_GOLD = "C4943B";
const ACCENT_GRAY = "F2F2F2";
const LIGHT_BLUE = "E8EEF4";

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    children: [new TextRun({ text, bold: true, size: 32, color: BRAND_BLUE, font: "Calibri" })],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
    children: [new TextRun({ text, bold: true, size: 26, color: BRAND_BLUE, font: "Calibri" })],
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, bold: true, size: 22, color: BRAND_GOLD, font: "Calibri" })],
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 21, font: "Calibri", ...opts })],
  });
}

function boldPara(label, text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: label, bold: true, size: 21, font: "Calibri" }),
      new TextRun({ text, size: 21, font: "Calibri" }),
    ],
  });
}

function bullet(text, opts = {}) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, size: 21, font: "Calibri", ...opts })],
  });
}

function bulletBold(label, text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 60 },
    children: [
      new TextRun({ text: label, bold: true, size: 21, font: "Calibri" }),
      new TextRun({ text, size: 21, font: "Calibri" }),
    ],
  });
}

function emptyLine() {
  return new Paragraph({ spacing: { after: 60 }, children: [] });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// Table helper
function makeTable(headers, rows, opts = {}) {
  const { headerColor = BRAND_BLUE, stripeColor = ACCENT_GRAY } = opts;
  const colCount = headers.length;

  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map(h =>
      new TableCell({
        shading: { type: ShadingType.CLEAR, fill: headerColor },
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: h, bold: true, size: 19, color: "FFFFFF", font: "Calibri" })],
        })],
      })
    ),
  });

  const dataRows = rows.map((row, i) =>
    new TableRow({
      children: row.map((cell, j) =>
        new TableCell({
          shading: i % 2 === 1 ? { type: ShadingType.CLEAR, fill: stripeColor } : undefined,
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({
            spacing: { before: 40, after: 40 },
            children: [new TextRun({ text: String(cell), size: 19, font: "Calibri", bold: j === 0 })],
          })],
        })
      ),
    })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.AUTOFIT,
    rows: [headerRow, ...dataRows],
  });
}

// ============================================================
// DOCUMENT CONTENT
// ============================================================

const sections = [];

// ---- TITLE PAGE ----
sections.push(
  emptyLine(), emptyLine(), emptyLine(), emptyLine(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
    children: [new TextRun({ text: "COMPETITIVE ANALYSIS", bold: true, size: 40, color: BRAND_BLUE, font: "Calibri" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [new TextRun({ text: "Privacy Incorporation & Asset Protection Space", size: 28, color: BRAND_GOLD, font: "Calibri" })],
  }),
  emptyLine(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Prepared for: Incorporate123", size: 22, font: "Calibri" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Prepared by: BIT Studios", size: 22, font: "Calibri" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Date: March 2026", size: 22, font: "Calibri" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Classification: Confidential", size: 22, font: "Calibri", italics: true })],
  }),
  emptyLine(), emptyLine(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Synthesized from 15 research documents across site architecture,\npricing/conversion analysis, and individual competitor deep-dives.", size: 20, font: "Calibri", italics: true, color: "666666" })],
  }),
  pageBreak(),
);

// ---- TABLE OF CONTENTS ----
sections.push(
  heading1("Table of Contents"),
  para("1. Executive Summary"),
  para("2. Competitive Landscape Overview"),
  para("3. Individual Competitor Profiles"),
  para("   3.1 NCH Inc"),
  para("   3.2 Anderson Advisors"),
  para("   3.3 Wyoming Corporate Services"),
  para("   3.4 ZenBusiness"),
  para("   3.5 ShieldCorp"),
  para("   3.6 Budget/Mainstream Competitors"),
  para("   3.7 Niche Competitors"),
  para("4. Pricing & Value Comparison"),
  para("5. Site Architecture & UX Patterns"),
  para("6. Trust Signals & Conversion Analysis"),
  para("7. Spider/Radar Chart Scores"),
  para("8. Strategic Recommendations"),
  para("9. Appendices"),
  pageBreak(),
);

// ============================================================
// 1. EXECUTIVE SUMMARY
// ============================================================
sections.push(
  heading1("1. Executive Summary"),

  heading2("Market Landscape"),
  para("The privacy incorporation and asset protection market splits into two distinct tiers operating in near-total isolation:"),
  bulletBold("Budget/Mainstream Providers: ", "$0 formation + state fees, all 50 states, 25,000+ reviews, self-service automation, focused on volume, speed, and ease. Key players: ZenBusiness, LegalZoom, Bizee, Northwest Registered Agent, Inc Authority, Swyft Filings."),
  bulletBold("Privacy Specialists: ", "$500\u2013$3,200+ packages, specialized states (NV, WY), limited reviews, consultant-guided or self-service, focused on privacy, protection, and compliance. Key players: NCH Inc, Anderson Advisors, Wyoming Corporate Services, ShieldCorp, Corporate Direct/Sutton Law, Companies Incorporated."),
  para("No single competitor successfully combines modern UX, privacy-first architecture, transparent pricing, and genuine year-round nominee services. This is Incorporate123\u2019s whitespace opportunity."),

  heading2("The Whitespace Opportunity"),
  para("When competitors are mapped on a 2\u00d72 matrix of Privacy Expertise (x-axis) vs. Digital Experience Quality (y-axis), the upper-right quadrant\u2014high privacy expertise combined with a modern digital experience\u2014is entirely unoccupied:"),
  bulletBold("ZenBusiness ", "(upper-left): Best-in-class UX, zero privacy features."),
  bulletBold("Anderson Advisors ", "(lower-right): Deep expertise, consultation-gated, no self-service."),
  bulletBold("Wyoming Corporate Services ", "(lower-right): Strong privacy tiers, dated 2010s UX."),
  bulletBold("NCH Inc ", "(lower-left): Strong authority, no nominees, hidden pricing."),
  bulletBold("ShieldCorp ", "(lower-right floor): Low-cost nominees, zero trust signals, dormant site."),
  para("Incorporate123\u2019s target score of 68/80 would make it the first competitor to score above 7 on every dimension\u2014combining ZenBusiness-level digital quality with genuine privacy-specialist depth."),

  heading2("3 Critical Strategic Takeaways"),
  bullet("1. Privacy-first positioning is unoccupied. No competitor organizes its site around privacy as a primary architectural pillar. Anderson buries it, NCH ignores it, Wyoming Corp doesn\u2019t lead with it."),
  bullet("2. Pricing white space is real. The $500\u2013$1,200 range for transparent privacy-focused formation with year-round nominees is occupied by no one with a modern website."),
  bullet("3. The $525 annual renewal is a competitive weapon. Incorporate123\u2019s all-inclusive renewal undercuts Wyoming Corporate Services ($545+), dramatically beats Anderson ($930+ CAP), and includes nominees that NCH and ZenBusiness don\u2019t offer at all."),
  pageBreak(),
);

// ============================================================
// 2. COMPETITIVE LANDSCAPE OVERVIEW
// ============================================================
sections.push(
  heading1("2. Competitive Landscape Overview"),

  heading2("2.1 Market Segmentation"),
  para("The market segments into three distinct models:"),
  bulletBold("Loss-Leader Volume Plays: ", "ZenBusiness ($0), LegalZoom ($0), Bizee ($0), Inc Authority ($0). Monetize through upsells, auto-renewals, and registered agent fees. Zero privacy capability."),
  bulletBold("Hidden-Price Consultative Sales: ", "Anderson Advisors ($2,750+ for LLC, everything consultation-gated), NCH Inc (~$1,300, price hidden on site). Premium positioning with opaque economics."),
  bulletBold("Transparent Flat-Rate Specialists: ", "Wyoming Corporate Services ($515\u2013$6,235, all prices published), ShieldCorp ($49 base, \u00e0 la carte). Self-service with visible pricing. Incorporate123\u2019s planned model aligns here with modern UX."),

  heading2("2.2 Positioning Map"),
  para("The 2\u00d72 competitive positioning map plots Privacy/Asset Protection Expertise (horizontal) against Digital Experience Quality (vertical):"),
  emptyLine(),
  makeTable(
    ["Quadrant", "Position", "Occupants"],
    [
      ["Upper-Left", "High UX + Low Privacy", "ZenBusiness (74/100)"],
      ["Upper-Right", "High UX + High Privacy", "EMPTY \u2014 Incorporate123 Target (82/100)"],
      ["Lower-Left", "Low UX + Low Privacy", "NCH Inc (56/100)"],
      ["Lower-Right", "Low UX + High Privacy", "Anderson (54/100), WY Corp Svcs (49/100), ShieldCorp (25/100)"],
    ]
  ),
  emptyLine(),
  para("The upper-right quadrant represents Incorporate123\u2019s strategic target: the first privacy formation service with a genuinely modern digital experience."),

  heading2("2.3 Competitor Tier Classification"),
  makeTable(
    ["Tier", "Competitors", "Analysis Depth", "Time Investment"],
    [
      ["Tier 1: Full Teardown", "NCH Inc, Wyoming Corporate Services, ZenBusiness, Anderson Advisors, Corporate Direct/Sutton Law", "All dimensions (architecture, pricing/conversion)", "45\u201360 min each"],
      ["Tier 2: Targeted Scan", "Northwest Registered Agent, Corporate Capital, Companies Incorporated", "Specific elements (privacy messaging, nominee pages, trust)", "20\u201330 min each"],
      ["Tier 3: Skip", "ShieldCorp, Laughlin Associates, IncParadise, LegalZoom, Bizee, doola", "Already represented or insufficient insight", "0 hours"],
    ]
  ),
  para("Note: ShieldCorp was included in the full analysis despite Tier 3 classification because it serves as the market floor baseline and was client-identified."),
  pageBreak(),
);

// ============================================================
// 3. INDIVIDUAL COMPETITOR PROFILES
// ============================================================
sections.push(
  heading1("3. Individual Competitor Profiles"),

  // ---- 3.1 NCH Inc ----
  heading2("3.1 NCH Inc (nchinc.com)"),
  boldPara("Overall Score: ", "56/100"),
  boldPara("Founded: ", "1989  |  Location: Las Vegas, NV  |  Entities formed: 250,000+"),
  boldPara("Trustpilot: ", "5.0\u2605 (12,340 reviews)  |  BBB: Accredited (28 years)"),
  para("NCH is the largest Nevada-focused formation company\u2014a 37-year operation with formidable trust signals and substantial content (Wealthy and Wise Academy). They sell a single all-inclusive Premier LLC Package at approximately $1,300 for Nevada formation with hidden pricing and a phone-first conversion model. Critically, NCH offers zero nominee services and zero offshore capability."),

  heading3("Grades"),
  makeTable(
    ["Dimension", "Grade", "Rationale"],
    [
      ["Site Structure", "B\u2212", "650\u2013750 pages, strong volume but flat architecture, 4\u20135 click depth."],
      ["Pricing/Conversion", "C+", "Single $1,300 package, price hidden. Ultra-low-friction name-checker entry. \u201cAll sales final\u201d contradicts 24-hour guarantee."],
    ]
  ),

  heading3("SWOT Analysis"),
  boldPara("Strengths: ", "12,340 Trustpilot reviews at 5.0\u2605; 37-year track record, 250K+ formations; $100K Corporate Veil Guarantee; Wealthy and Wise Academy (4 free courses)."),
  boldPara("Weaknesses: ", "Zero nominee services of any kind; pricing completely hidden; \u201cAll sales final\u201d contradicts guarantee messaging; Nevada-centric positioning."),
  boldPara("Opportunities: ", "Hidden pricing creates opening for transparent competitors; no nominees = direct opening for Incorporate123; zero offshore content."),
  boldPara("Threats: ", "Massive review volume creates social proof moat; 30+ years of domain equity; could add nominee services relatively easily."),

  heading3("Key Vulnerability"),
  para("NCH charges ~$1,300 for Nevada without nominees and without showing the price. Incorporate123 can position transparent pricing with actual nominee services as a clearly superior value proposition. Their \u201call sales final\u201d policy creates a direct opening for a genuine 60\u201390 day money-back guarantee."),
  emptyLine(),

  // ---- 3.2 Anderson Advisors ----
  heading2("3.2 Anderson Advisors (andersonadvisors.com)"),
  boldPara("Overall Score: ", "54/100 (updated March 2026, up from 52/100)"),
  boldPara("Founded: ", "1993  |  Location: Las Vegas, NV  |  Clients claimed: 157,000+ (investor docs show ~17,000)"),
  boldPara("Trustpilot: ", "4.7\u2605 (583 reviews)  |  BBB: A+ accredited"),
  para("Anderson is the content heavyweight and premium authority\u2014an attorney-led firm with the most sophisticated content ecosystem analyzed (645 blog posts, 360+ podcast episodes, 2 YouTube channels). Every service routes through a mandatory \u201cFree Strategy Session\u201d (45-minute sales call positioned as a $750 value) with zero public pricing. Primarily targets real estate investors. Acquired by Sun Capital Partners in March 2023."),

  heading3("Grades"),
  makeTable(
    ["Dimension", "Grade", "Rationale"],
    [
      ["Site Structure", "B", "Largest library (1,000\u20131,500 pages). 7 mega-menu items. 645 blog posts flat-filed without topic silos."],
      ["Pricing/Conversion", "C\u2212", "Zero public pricing. Consultation-mandatory. 5+ touchpoints over days/weeks. No live chat."],
    ]
  ),

  heading3("SWOT Analysis"),
  boldPara("Strengths: ", "Strongest content machine (645 blogs + 360+ podcasts + 2 YouTube channels); exceptional E-E-A-T credentials; Fortune/Forbes/Inc media authority."),
  boldPara("Weaknesses: ", "Zero self-service purchasing; no nominee services despite $2,750+ pricing; 90% real estate focus alienates other audiences; mixed Trustpilot (4.0\u2605 noted earlier, 4.7\u2605 current); no live chat or tools."),
  boldPara("Opportunities: ", "Consultation model alienates self-service buyers; real estate focus leaves tech/crypto/public figure audiences unserved; no offshore content; no profession-specific privacy pages."),
  boldPara("Threats: ", "Authority content ecosystem expensive to replicate; attorney-led positioning is structural trust advantage; could launch self-service path; could double privacy content investment."),

  heading3("Critical Finding: Client Count Inflation"),
  para("Sun Capital Partners\u2019 March 2023 investor press release disclosed ~17,000 actual customers, while Anderson\u2019s marketing claims \u201c157,000+ satisfied clients\u201d and \u201c180,000+ attendees.\u201d The homepage shows yet another number (50K+). Three different figures across the site create a credibility vulnerability that transparent, verifiable numbers from Incorporate123 can exploit."),

  heading3("Post-Acquisition Quality Cracks"),
  para("Glassdoor shows 3.6/5 from 219 reviews with 64% recommendation rate. Employees describe deterioration since the March 2023 PE acquisition: aggressive webinar sales tactics, rushed onboarding, quality decline. BBB complaints cite wrong tax returns filed and refund denials."),
  emptyLine(),

  // ---- 3.3 Wyoming Corporate Services ----
  heading2("3.3 Wyoming Corporate Services (wyomingcompany.com)"),
  boldPara("Overall Score: ", "49/100"),
  boldPara("Founded: ", "2003  |  Location: Cheyenne, WY  |  Entities formed: 40,000+"),
  boldPara("Trustpilot: ", "5.0\u2605 (1,268 reviews)  |  BBB: A+ (claimed)"),
  para("Wyoming Corporate Services is Incorporate123\u2019s closest direct competitor: a 23-year privacy-focused formation service offering 5 tiered privacy packages from $1,140 to $6,235, with transparent pricing, nominee director services ($365\u2013$400/year), attorney-privilege privacy architecture, 6,000+ aged shelf companies, and Bitcoin acceptance. The site runs on a dated 2010s WordPress theme with a 23-item flat navigation."),

  heading3("Privacy Package Tiers"),
  makeTable(
    ["Package", "Price", "Key Feature"],
    [
      ["Basic Privacy & AP", "$1,140", "LLC + nominee director + mail forwarding + WY address"],
      ["Attorney Privilege Privacy", "$1,765", "Above + attorney as go-between (attorney-client privilege)"],
      ["Attorney Privilege + Federal Number", "$2,075", "Above + attorney-obtained EIN"],
      ["Full Executive Privacy Office", "$2,700", "Everything + live-operator phone in company name"],
      ["Ultra Asset Protection Trust", "$6,235", "1,000-year WY Spendthrift Trust + 3 LLCs + attorney hours"],
    ]
  ),

  heading3("Grades"),
  makeTable(
    ["Dimension", "Grade", "Rationale"],
    [
      ["Site Structure", "D+", "30\u201345 pages, 23-item flat nav, no blog, inconsistent URLs, duplicate privacy pages."],
      ["Pricing/Conversion", "B\u2212", "Most transparent pricing. 3-step checkout wizard. Bitcoin accepted. But no comparison tables, text-link CTAs, dated design."],
    ]
  ),

  heading3("SWOT Analysis"),
  boldPara("Strengths: ", "Most transparent pricing in the competitive set; 5 graduated privacy tiers validate premium market; attorney-privilege architecture (unique, defensible); 1,268 reviews at 5.0\u2605; 6,000+ shelf companies; Bitcoin acceptance."),
  boldPara("Weaknesses: ", "Dated 2010s design with 23-item flat nav; only 30\u201345 pages, no blog; nominee renewal ($400) + RA ($145) = $545+ before state fees; no comparison tables; duplicate pages, URL typos."),
  boldPara("Opportunities: ", "Dated UX makes strong pricing vulnerable to better presentation; $545+ renewal vs. Inc123\u2019s $525 all-in; anti-Nevada messaging alienates NV buyers."),
  boldPara("Threats: ", "Strongest direct competitor for privacy buyers; attorney-privilege model hard to replicate; could modernize site; 25-year track record."),

  heading3("Key Vulnerability"),
  para("Wyoming Corporate Services\u2019 nominee renewal at $400/yr + registered agent $145/yr + state fees $62/yr totals $607+ in Year 2 for basics\u2014versus Incorporate123\u2019s $525 all-inclusive annual renewal with nominees. Build a comparison calculator showing total Year 1 and Year 2 costs side by side."),
  emptyLine(),

  // ---- 3.4 ZenBusiness ----
  heading2("3.4 ZenBusiness (zenbusiness.com)"),
  boldPara("Overall Score: ", "74/100"),
  boldPara("Founded: ", "2017  |  Location: Austin, TX  |  Businesses formed: 850,000+  |  Valuation: $1.7B"),
  boldPara("Trustpilot: ", "4.8\u2605 (27,340 reviews)  |  BBB: A+ accredited"),
  para("ZenBusiness is the UX benchmark\u2014a VC-funded unicorn ($275M+ raised) with the most polished digital experience and industrial-scale content machine. However, they explicitly disclaim offering anonymous LLC formation and provide zero privacy/nominee/offshore capabilities. The dominant budget player acknowledges the demand but refuses to serve it."),

  heading3("Pricing Tiers"),
  makeTable(
    ["", "Starter", "Pro (\"Most Popular\")", "Premium (\"Best Value\")"],
    [
      ["Price", "$0 + state fees", "$199 + state fees", "$399 + state fees"],
      ["Renewal", "Does not renew", "$199/yr", "$399/yr"],
      ["Key additions", "Formation only", "+ EIN + Operating Agreement + Rush + Compliance", "+ Registered agent + Advanced compliance + Business docs"],
    ]
  ),
  para("Critical insight: All three tiers converge to approximately $497\u2013$499 in Year 1 when essential add-ons are included. The $0 Starter is purely a lead-generation funnel."),

  heading3("SWOT Analysis"),
  boldPara("Strengths: ", "Best pricing page UX (3-tier cards, comparison tables, badges); 27,340 reviews; custom headless tech stack; AI assistant (Velo\u2122)."),
  boldPara("Weaknesses: ", "Zero privacy features; aggressive upsell gauntlet (6\u20137 screens with pre-selected opt-ins); $0 headline masks ~$499 true cost; phone-only cancellation with fee."),
  boldPara("Opportunities: ", "Their explicit disclaimer confirms demand while abandoning market; aggressive upselling generates resentment; true cost comparison content would be devastating."),
  boldPara("Threats: ", "Could enter privacy market with massive resources; affiliate partnerships dominate review rankings."),
  emptyLine(),

  // ---- 3.5 ShieldCorp ----
  heading2("3.5 ShieldCorp (shieldcorp.net)"),
  boldPara("Overall Score: ", "25/100"),
  boldPara("Founded: ", "~2016  |  Location: Silver Springs, NV  |  Employees: 1\u201310"),
  boldPara("Reviews: ", "1-star Yelp (1 review)  |  BBB: Not accredited, cannot rate"),
  para("ShieldCorp (legally Silver Shield Services, Inc.) represents the absolute floor of digital experience. A circa-2016 WordPress site with ~35\u201340 indexed pages, 11 dormant blog posts (all from 2017), PayPal-only payments, manual math CAPTCHA, and virtually zero trust signals. They offer the lowest-cost entry ($49 + $300 nominees) using an \u00e0 la carte model. The site serves primarily as a cautionary baseline."),

  heading3("SWOT Analysis"),
  boldPara("Strengths: ", "Lowest nominee pricing ($300 Yr 1, $250/yr renewal); transparent \u00e0 la carte pricing; Headquarters Office Package concept ($600/yr); physical local presence."),
  boldPara("Weaknesses: ", "Zero trust signals; dormant site (2016 copyright, 2017 blogs); PayPal-only; 30+ field form with manual CAPTCHA; no offshore, no educational content."),
  boldPara("Opportunities: ", "Demonstrates what NOT to do\u2014useful baseline; HQ Office Package model adaptable as add-on; low pricing validates affordable nominee market."),
  boldPara("Threats: ", "Negligible competitive threat; any Incorporate123 page immediately outranks."),
  emptyLine(),

  // ---- 3.6 Budget/Mainstream Summary ----
  heading2("3.6 Budget/Mainstream Competitors"),
  para("None of these offer nominee directors, offshore nominees, or true anonymity. They serve a fundamentally different customer than Incorporate123."),
  makeTable(
    ["Company", "Formation", "RA Cost", "Trustpilot", "BBB", "Key Feature"],
    [
      ["LegalZoom", "$0", "$249/yr", "4.4\u2605 (25,859)", "A+", "20+ yrs, 4M+ formations, attorney access"],
      ["Bizee (Incfile)", "$0", "Free Yr1, $119/yr", "4.7\u2605 (23,128)", "5\u2605 reviews", "1-day processing, lowest RA renewal"],
      ["Northwest RA", "$39", "Free Yr1, $125/yr", "3.7\u2605 (165)", "A", "\"Privacy by Default\" \u2014 closest to privacy"],
      ["Inc Authority", "$0", "Free Yr1, $179/yr", "4.9\u2605 (44,181)", "F rating", "Red flag: Trustpilot/BBB disconnect"],
      ["Swyft Filings", "N/A", "N/A", "4.7\u2605 (7,359)", "F rating", "Same Trustpilot/BBB disconnect"],
      ["doola", "$297/yr", "Included", "N/A", "N/A", "International founders, bookkeeping included"],
    ]
  ),
  para("Northwest Registered Agent is the closest mainstream alternative to privacy services\u2014they use their business address on all public filings (\u201cPrivacy by Default\u201d). However, they don\u2019t offer true nominee services, asset protection, or offshore formation."),
  emptyLine(),

  // ---- 3.7 Niche Competitors ----
  heading2("3.7 Niche Competitors"),
  makeTable(
    ["Company", "URL", "Key Differentiator", "vs. Incorporate123"],
    [
      ["Corporate Direct / Sutton Law", "corporatedirect.com", "Garrett Sutton (Rich Dad Advisor), $695 flat fee, attorney-led", "Lower formation price but less privacy depth, no offshore"],
      ["Corporate Capital", "corporatecapitalinc.com", "\"Financial Privacy Corporation\" package, full biz services", "Broader services but smaller web presence, no offshore"],
      ["Companies Incorporated", "companiesinc.com", "$99 formation, $500/yr nominees, all 50 states + offshore", "Lower entry price, standalone nominees, but less privacy-focused"],
      ["Laughlin Associates", "laughlinusa.com", "53 years in business (est. 1972), $13.1M revenue, A+ BBB", "Longest track record but less privacy/nominee emphasis, no offshore"],
    ]
  ),
  pageBreak(),
);

// ============================================================
// 4. PRICING & VALUE COMPARISON
// ============================================================
sections.push(
  heading1("4. Pricing & Value Comparison"),

  heading2("4.1 Year 1 Formation Costs (LLC with Nominees Where Available)"),
  makeTable(
    ["Feature", "NCH Inc", "Anderson", "ShieldCorp", "WY Corp Svcs", "ZenBusiness", "Incorporate123"],
    [
      ["Base LLC formation", "~$1,300", "~$2,750 (list)", "$49 + fees", "$515", "$0\u2013$399", "~$1,300 (Gold)"],
      ["State fees included?", "\u2705 Yes", "Unclear", "\u274c Separate", "\u2705 Yes", "\u274c Separate", "\u2705 Yes"],
      ["Registered agent Yr 1", "\u2705 Included", "$135\u2013150", "$85\u201390", "\u2705 Included", "$0\u2013199", "\u2705 Included"],
      ["Nominee services", "\u274c None", "\u274c None", "$300", "$365\u2013400", "\u274c None", "\u2705 Included"],
      ["EIN", "\u2705 Included", "Separate", "$25", "Not mentioned", "$0\u201399", "\u2705 Included"],
      ["Operating agreement", "\u2705 Included", "Included w/ formation", "$25", "\u2705 Included", "$0\u201399", "\u2705 Included"],
      ["True Year 1 (w/ nominees)", "N/A (no nominees)", "~$3,000+", "~$859+ (NV)", "$1,140 (WY)", "N/A (no nominees)", "~$1,300"],
    ]
  ),
  emptyLine(),

  heading2("4.2 Annual Renewal Comparison (Year 2+, Excluding State Fees)"),
  makeTable(
    ["Component", "NCH Inc", "Anderson", "ShieldCorp", "WY Corp Svcs", "ZenBusiness", "Incorporate123"],
    [
      ["Registered agent", "~$227", "$135", "$85\u201390", "$145", "$199", "Included"],
      ["Nominee renewal", "N/A", "N/A", "$250", "$400", "N/A", "Included"],
      ["Compliance/maintenance", "Unknown", "$795 (CAP)", "Unknown", "Unknown", "$0\u2013199", "Included"],
      ["Annual total (excl. state fees)", "~$227+", "~$930+", "~$340+", "~$545+", "~$199\u2013398", "$525 all-in"],
    ]
  ),
  emptyLine(),
  para("Incorporate123\u2019s $525 annual renewal including nominees undercuts Wyoming Corporate Services\u2019 ~$545+ (nominee + registered agent alone, before mail forwarding) and dramatically undercuts Anderson\u2019s ~$930+ CAP renewal. This is the single strongest competitive pricing advantage.", { bold: true }),

  heading2("4.3 Comprehensive Provider Comparison"),
  makeTable(
    ["Provider", "Base LLC", "RA", "Nominees", "All-In Yr 1", "Annual Renewal"],
    [
      ["Incorporate123 (WY Gold)", "$1,275", "Included", "Included (year-round)", "$1,275", "$525"],
      ["Incorporate123 (NV Gold)", "$1,800", "Included", "Included (year-round)", "$1,800", "$525+"],
      ["Wyoming Corporate Svcs", "$515\u2013$1,140", "$145/yr", "$400/yr add-on", "$940\u2013$1,540", "$545+"],
      ["NCH Inc (Nevada)", "~$1,300", "Included", "\u274c None", "~$1,300", "~$350"],
      ["Corporate Direct", "$695 + state fees", "$125/yr", "Available", "~$820+", "$125+"],
      ["Companies Inc.", "$99+", "N/A", "$500/yr", "$599+", "$500+"],
      ["ZenBusiness", "$0", "$199/yr", "\u274c None", "$199", "$199"],
      ["LegalZoom", "$0", "$249/yr", "\u274c None", "$249", "$249"],
      ["Bizee", "$0", "Free Yr1/$119", "\u274c None", "$0", "$119"],
      ["Northwest RA", "$39", "Free Yr1/$125", "\u274c None", "$39", "$125"],
    ]
  ),
  emptyLine(),

  heading2("4.4 Recommended 3-Tier Pricing Restructure"),
  para("Based on the decoy effect research (14.3% gross profit lift with a middle tier) and the \u201cthree charms, four alarms\u201d principle:"),
  makeTable(
    ["Tier", "Target Price", "Includes", "Purpose"],
    [
      ["Foundation", "$399\u2013$549 (state-dependent)", "Basic LLC formation, no nominees, registered agent, EIN, operating agreement", "Price anchor; demonstrates entry-level vs. upgrade value"],
      ["Privacy (\"Most Popular\")", "$899\u2013$1,399 (state-dependent)", "Formation + nominee services + RA + operating agreement + EIN", "Hero package; larger card, accent border, badge"],
      ["Complete", "$1,499\u2013$1,899", "Everything in Privacy + offshore nominee, corporate minute maintenance, mail forwarding, virtual office", "Anchors price high so Privacy tier feels smart"],
    ]
  ),
  emptyLine(),

  heading2("4.5 Pricing Psychology Patterns"),
  bullet("$0 anchor (ZenBusiness): Makes $199\u2013$399 feel reasonable. All tiers converge to ~$499 true cost."),
  bullet("Price hiding (NCH, Anderson): Forces phone contact. 48% of shoppers abandon due to unexpected costs (Baymard Institute)."),
  bullet("Transparent graduated tiers (WY Corp Svcs): Proves market accepts $1,140\u2013$6,235 for privacy. But presentation is dated."),
  bullet("\"Most Popular\" nudge: ZenBusiness\u2019s middle-tier badge drives selection. Apply to Incorporate123\u2019s Privacy tier."),
  bullet("Monthly framing: $525/yr = $43.75/mo. Present renewal with value breakdown ($400 nominee + $150 RA + $200 minutes = $750 value for $525)."),
  pageBreak(),
);

// ============================================================
// 5. SITE ARCHITECTURE & UX PATTERNS (was Section 6)
// ============================================================
sections.push(
  heading1("5. Site Architecture & UX Patterns"),

  heading2("5.1 Site Size and Content Comparison"),
  makeTable(
    ["Dimension", "NCH Inc", "Anderson", "ShieldCorp", "WY Corp Svcs", "ZenBusiness"],
    [
      ["Max click depth", "4\u20135 clicks", "3\u20134 clicks", "3 clicks", "2 clicks", "4\u20135 clicks"],
      ["CMS", "Custom + WP", "WordPress", "WordPress", "WordPress", "Custom headless (GCP)"],
    ]
  ),

  heading2("5.2 Navigation Patterns"),
  makeTable(
    ["Competitor", "Nav Items", "Organization Model", "Key Pattern"],
    [
      ["NCH Inc", "6 (mega menus)", "Entity type + service category", "Content-heavy but flat architecture"],
      ["Anderson", "7 (mega menus)", "Use case + audience segment", "Events first, consultation everywhere"],
      ["ShieldCorp", "7 (basic dropdowns)", "By state, then service", "Minimal, no strategy"],
      ["WY Corp Svcs", "23 (flat list)", "Entity type + use case", "Decision paralysis from too many items"],
      ["ZenBusiness", "3 (mega menus)", "Business lifecycle stage", "Most user-centric approach"],
    ]
  ),
  para("ZenBusiness\u2019s lifecycle-stage navigation (\"Make it Official \u2192 Stay Compliant \u2192 Manage Finances \u2192 Get Customers\") is the gold standard. WY Corp Svcs\u2019 23-item flat list is the anti-pattern."),

  heading2("5.3 Conversion Path Analysis"),
  makeTable(
    ["Competitor", "Steps to Purchase", "Primary CTA", "Self-Service?", "Live Chat?"],
    [
      ["NCH Inc", "3\u20134 pages + phone likely", "\"Start Your LLC\"", "Partial", "Yes (LiveChat)"],
      ["Anderson", "5+ touchpoints over days/weeks", "\"Request Free Strategy Session\"", "No", "No"],
      ["ShieldCorp", "2 pages + PayPal redirect", "\"Incorporate Online Now!\"", "Yes (barely)", "No"],
      ["WY Corp Svcs", "4 pages, 3-step wizard", "\"Order Here\"", "Yes", "No"],
      ["ZenBusiness", "8\u201310 screens", "\"Start an LLC\"", "Yes (aggressively)", "No"],
    ]
  ),
  para("Recommended for Incorporate123: 4 pages, 5 minutes, fully self-service with optional human support. Homepage \u2192 Service selector \u2192 Package page (3 tiers) \u2192 Add-ons (checkboxes + running total) \u2192 Checkout."),

  heading2("5.4 Technology Stack Comparison"),
  makeTable(
    ["Competitor", "CMS", "Hosting/CDN", "Payments", "Notable Tech"],
    [
      ["NCH Inc", "Custom + WordPress", "Cloudflare", "Custom order flow", "WisePops, Facebook/LinkedIn Pixel"],
      ["Anderson", "WordPress", "BigScoots", "WooCommerce (books only)", "Next.js portal, Formstack, DocuSign"],
      ["ShieldCorp", "WordPress", "Unknown", "PayPal only", "Formidable Forms, math CAPTCHA"],
      ["WY Corp Svcs", "WordPress (0.3.1)", "Cloudflare", "Bitcoin/PayPal/wire", "Facebook Pixel, Google Ads"],
      ["ZenBusiness", "Custom headless (GCP)", "Cloudinary CDN", "Integrated checkout", "Mobile apps, Mixpanel, Velo AI"],
    ]
  ),
  para("WordPress dominates the niche (4 of 5). Only ZenBusiness runs custom headless architecture."),

  heading2("5.5 UX Patterns to Adopt"),
  bulletBold("From ZenBusiness: ", "3-column pricing card layout with \u201cMost Popular\u201d/\u201cBest Value\u201d badges, expandable comparison table."),
  bulletBold("From NCH: ", "Ultra-low-friction first step (single name field before anything else)."),
  bulletBold("From WY Corp Svcs: ", "Transparent all-inclusive pricing with \u201c$515 is the total \u2014 NO OTHER FEES\u201d messaging."),
  bulletBold("From Anderson: ", "Authority content ecosystem (YouTube, books, webinars) for top-of-funnel education."),
  bulletBold("From ZenBusiness: ", "Competitor comparison pages (\u201cZenBusiness vs. LegalZoom\u201d pattern)."),
  bulletBold("From NCH: ", "Trustpilot widget in sticky header for continuous social proof."),
  bulletBold("From WY Corp Svcs: ", "Cryptocurrency acceptance displayed prominently as a privacy-alignment signal."),

  heading2("5.6 UX Patterns to Avoid"),
  bulletBold("ZenBusiness: ", "Aggressive upsell gauntlet (6\u20137 screens with pre-selected opt-in boxes). Toxic for trust-dependent service."),
  bulletBold("NCH: ", "Price hiding. \u201cAll-Inclusive, Honest Pricing\u201d while never displaying the price. 48% abandon rate for unexpected costs."),
  bulletBold("ShieldCorp: ", "Entire UX \u2014 dated theme, plain-text CTAs, 30+ field form, PayPal redirect, manual CAPTCHA, zero trust signals."),
  bulletBold("WY Corp Svcs: ", "23-item flat navigation causing decision paralysis."),
  bulletBold("Anderson: ", "Consultation-mandatory purchasing alienating research-ready buyers."),
  bulletBold("NCH: ", "Contradictory guarantee (\u201c24-hour guarantee\u201d + \u201cAll sales final\u201d)."),

  heading2("5.7 Blue Ocean Opportunities (9 Items No Competitor Does Well)"),
  makeTable(
    ["Opportunity", "Current State"],
    [
      ["Privacy-first information architecture", "No competitor organizes around privacy as primary pillar"],
      ["Privacy assessment/recommendation tool", "No interactive tool for privacy needs self-identification"],
      ["Privacy-focused state comparisons", "No \u201cNevada vs. Wyoming for privacy\u201d pages exist"],
      ["Offshore content vertical", "Every competitor has zero written offshore content"],
      ["Profession-specific privacy pages", "No content for doctors, tech founders, crypto holders, DV survivors"],
      ["Privacy pillar/cluster content model", "Nobody has privacy topic clusters"],
      ["Modern UX + privacy depth combined", "Sticky CTAs, chatbots, configurators absent from all niche competitors"],
      ["Educational \u201cwhy\u201d journey narrative", "No site explains: Why privacy matters \u2192 threats \u2192 structures \u2192 fit \u2192 start"],
      ["Transparent pricing + year-round nominees", "No competitor combines all three: transparent pricing, self-service, genuine nominees"],
    ]
  ),
  pageBreak(),
);

// ============================================================
// 6. TRUST SIGNALS & CONVERSION ANALYSIS (was Section 7)
// ============================================================
sections.push(
  heading1("6. Trust Signals & Conversion Analysis"),

  heading2("6.1 Trust Signal Rankings by Conversion Impact"),
  para("Research shows for purchases above $500, trust signals rank by conversion lift:"),
  makeTable(
    ["Rank", "Trust Signal", "Conversion Lift", "Who Does It", "Incorporate123 Opportunity"],
    [
      ["1", "Money-back guarantee", "21\u201349%", "ZenBusiness (60-day), NCH (conditional)", "60\u201390 day guarantee \u2014 no premium privacy competitor offers one"],
      ["2", "Payment security badges", "20\u201332%", "None near checkout", "Norton/McAfee badges near payment fields \u2014 wide open"],
      ["3", "Specific outcome metrics", "High", "Anderson ($150M savings), NCH (250K formations)", "\"X,XXX+ entities formed since 2012\" + verified counters"],
      ["4", "Process transparency", "High for blind purchases", "None do well", "\"Here\u2019s what happens in 48 hours\" visual timeline"],
      ["5", "Anonymized case studies", "Medium-High", "None in privacy space", "3\u20135 outcome narratives without identifying clients"],
    ]
  ),

  heading2("6.2 Review Platform Comparison"),
  makeTable(
    ["Provider", "Trustpilot Rating", "Review Count", "BBB Rating", "BBB Accredited"],
    [
      ["Incorporate123", "\u274c None", "0", "\u274c Not listed", "No"],
      ["NCH Inc", "5.0\u2605", "12,340", "Listed", "No"],
      ["Anderson Advisors", "4.7\u2605", "583", "A+", "Yes"],
      ["WY Corporate Svcs", "5.0\u2605", "1,268", "A+ (claimed)", "Yes"],
      ["ZenBusiness", "4.8\u2605", "27,340", "A+", "Yes"],
      ["LegalZoom", "4.4\u2605", "25,859", "A+", "Yes"],
      ["Bizee", "4.7\u2605", "23,128", "5\u2605 reviews", "No"],
      ["Inc Authority", "4.9\u2605", "44,181", "F", "No"],
      ["Swyft Filings", "4.7\u2605", "7,359", "F", "No"],
    ]
  ),
  para("Key concern: Incorporate123\u2019s complete absence from review platforms is a major transparency gap, especially since the closest direct competitor (WY Corp Svcs) has 1,268 verified positive reviews.", { bold: true }),

  heading2("6.3 Money-Back Guarantee Landscape"),
  makeTable(
    ["Competitor", "Guarantee", "Notes"],
    [
      ["ZenBusiness", "60-day money-back", "Strongest guarantee in space"],
      ["NCH Inc", "24-hour or free", "Conditional; contradicted by \u201cAll sales final\u201d policy"],
      ["Anderson Advisors", "None", "Consultation model; refund complaints on BBB"],
      ["WY Corp Svcs", "None", "No stated guarantee"],
      ["ShieldCorp", "None", "No stated guarantee"],
      ["Incorporate123 (recommended)", "60\u201390 day", "Exclude state fees already submitted; cover all service fees"],
    ]
  ),

  heading2("6.4 Recommended Trust Signal Stack (Priority Order)"),
  bullet("1. Money-back guarantee (60\u201390 day) \u2014 highest-impact single trust signal available (21\u201349% lift)"),
  bullet("2. Specific formation metrics \u2014 \"X,XXX+ entities formed since 2012\" and \"Free offshore nominees since 2012\""),
  bullet("3. Payment + crypto badges \u2014 Visa, Mastercard, PayPal, Bitcoin, Ethereum, XRP, Litecoin, Monero near checkout"),
  bullet("4. Process transparency timeline \u2014 visual \"What happens after you order\" section"),
  bullet("5. Anonymized case studies \u2014 3\u20135 outcome-focused narratives (problem \u2192 solution \u2192 outcome)"),
  bullet("6. \"Year-round nominees, not nominee-for-a-day\" messaging \u2014 most distinctive differentiator"),
  bullet("7. BBB accreditation \u2014 pursue immediately"),
  bullet("8. Trustpilot review collection \u2014 automated from day one"),
  pageBreak(),
);

// ============================================================
// 7. SPIDER/RADAR CHART SCORES (was Section 8)
// ============================================================
sections.push(
  heading1("7. Spider/Radar Chart Scores"),
  para("Each competitor scored 1\u201310 across 8 dimensions based on evidence gathered across all research dimensions."),

  makeTable(
    ["Dimension", "NCH (43)", "Anderson (37)", "ShieldCorp (23)", "WY Corp (42)", "ZenBiz (58)", "Inc123 Target (68)"],
    [
      ["UX & Navigation", "5", "5", "2", "3", "9", "9"],
      ["Pricing Transparency", "3", "1", "7", "9", "6", "9"],
      ["Trust Signals", "9", "8", "1", "7", "9", "7"],
      ["Conversion Optimization", "5", "4", "1", "3", "7", "8"],
      ["Mobile Experience", "5", "5", "2", "3", "8", "9"],
      ["Visual Design / Modernity", "5", "5", "1", "2", "9", "9"],
      ["Privacy/AP Expertise Depth", "5", "6", "4", "8", "1", "9"],
      ["Self-Service Capability", "6", "1", "5", "7", "9", "8"],
    ]
  ),
  emptyLine(),

  heading2("Scoring Rationale"),
  boldPara("NCH Inc (43/80): ", "Strong trust signals, hamstrung by hidden pricing and lack of nominees. Good generalist, weak privacy specialist."),
  boldPara("Anderson Advisors (37/80): ", "Best content fundamentals, but consultation-mandatory model and zero self-service severely limit overall effectiveness. Authority without accessibility."),
  boldPara("ShieldCorp (23/80): ", "Only scores above 1 on pricing transparency and privacy depth (low-cost nominees) and self-service. Everything else at or near the floor. Negligible threat."),
  boldPara("Wyoming Corporate Services (42/80): ", "Highest privacy expertise and strong pricing transparency, but dated UX, minimal content, and limited conversion optimization. The right services in the wrong wrapper."),
  boldPara("ZenBusiness (58/80): ", "Dominates on UX, trust, and conversion but scores 1 on privacy expertise because they explicitly disclaim it. Digital standard-bearer that abandons the target market."),
  boldPara("Incorporate123 Target (68/80): ", "The redesign targets 9/10 on privacy expertise, UX, design, mobile, and pricing transparency. First competitor to score above 7 on every dimension\u2014combining ZenBusiness-level digital quality with genuine privacy-specialist depth."),
  pageBreak(),
);

// ============================================================
// 8. STRATEGIC RECOMMENDATIONS (was Section 9)
// ============================================================
sections.push(
  heading1("8. Strategic Recommendations"),

  heading2("8.1 Redesign Recommendations"),

  heading3("Information Architecture (1\u20133)"),
  bulletBold("#1 Privacy-first 4-pillar architecture: ", "No competitor organizes around privacy intent. Business Privacy, Asset Protection, Company Formation, Compliance pillars would be the first intent-first architecture in the space."),
  bulletBold("#2 Clean 5\u20137 item primary navigation: ", "WCS\u2019s 23-item flat nav creates decision paralysis. ZenBusiness\u2019s 3-item lifecycle menus are most user-centric. Use 5\u20137 items with dropdowns."),
  bulletBold("#3 Dual conversion paths: ", "Both self-service (\"Form a Company\") and consultation (\"Protect Your Privacy\") always available."),

  heading3("Content Strategy (4\u20138)"),
  bulletBold("#4 Interactive Privacy Assessment Tool: ", "No competitor offers one. 8\u201310 question quiz \u2192 package recommendation. Tools earn 2\u20135\u00d7 more backlinks."),
  bulletBold("#5 Profession-specific privacy pages: ", "4 pages: doctors, RE investors, tech/crypto, public figures/DV survivors. Uncontested topics."),
  bulletBold("#6 Offshore content vertical: ", "Every competitor has zero written offshore content. Cook Islands trusts, Nevis LLCs, Belize IBCs."),
  bulletBold("#7 \"Nominee for a Day\" educational content: ", "Only on incorporate123.co. Definitive content on the practice vs. genuine ongoing nominee services."),
  bulletBold("#8 Educational journey narrative: ", "Why privacy matters \u2192 What threatens it \u2192 How structures protect \u2192 Which fits \u2192 Get started."),

  heading3("Pricing & Packages (9\u201311)"),
  bulletBold("#9 3-tier pricing with ZenBusiness-style presentation: ", "Combine WCS\u2019s privacy-tier logic with ZenBusiness\u2019s modern cards. Foundation \u2192 Privacy (highlighted) \u2192 Complete."),
  bulletBold("#10 Full pricing transparency on-site: ", "Display every tier, add-on, and renewal cost. State fee selector with dynamic total."),
  bulletBold("#11 $525 renewal as centerpiece weapon: ", "Comparison callout, monthly framing ($43.75/mo), value breakdown ($750 value for $525)."),

  heading3("Conversion Optimization (12\u201313)"),
  bulletBold("#12 4-page self-service funnel with running total: ", "Homepage \u2192 selector \u2192 packages \u2192 add-ons \u2192 checkout. Never use sequential upsell gates."),
  bulletBold("#13 Sticky contextual CTAs on every page: ", "No competitor uses persistent sticky CTAs. Privacy pages \u2192 \"Get a Privacy Assessment\"; formation pages \u2192 \"Start Your LLC.\""),
  emptyLine(),

  heading2("8.2 Three Critical Success Factors"),
  heading3("1. Speed Is the Critical Imperative"),
  para("Anderson\u2019s consultation-gated model is both their moat and vulnerability. Launch with complete pricing, full Privacy pillar content, and functional self-service purchasing before Anderson adapts. Every month of delay increases the risk of Anderson closing these gaps."),
  heading3("2. Content Depth Must Match Positioning"),
  para("The Privacy pillar must be comprehensive enough to establish authority against Anderson\u2019s scattered but extensive privacy content. Each cluster page needs 1,500\u20132,000 words of expert-level content with attorney review. Plan for post-launch content calendar: 2\u20133 high-quality posts per week."),
  heading3("3. Trust Signals from Day One"),
  para("Anderson\u2019s trust infrastructure (BBB A+, Trustpilot 4.7, media logos) took decades. Incorporate123 should pursue BBB accreditation immediately, implement automated review collection (Trustpilot + Google), and feature David\u2019s 25 years of experience prominently on every page."),
  emptyLine(),

  heading2("8.3 Industry Patterns & Table Stakes"),
  para("These patterns appear across all competitors and represent minimum expectations:"),
  bullet("Prominent phone number in header (all 5 competitors)"),
  bullet("Entity-type categorization (LLC, Corp, Trust)"),
  bullet("Nevada and/or Wyoming as primary states"),
  bullet("1\u20132 click path to order/consultation from homepage"),
  bullet("Third-party trust signals (Trustpilot, BBB, media logos)"),
  bullet("Self-service ordering option (4 of 5 offer it)"),
  emptyLine(),

  heading2("8.4 Potential Differentiators"),
  para("Unique patterns where only 1\u20132 competitors execute:"),
  bullet("Attorney-privilege privacy architecture (WY Corp Svcs only)"),
  bullet("Lifecycle-stage navigation (ZenBusiness only)"),
  bullet("Free educational academy (NCH only)"),
  bullet("Event-driven lead funnels: Tax Tuesdays, workshops (Anderson only)"),
  bullet("6,000+ aged shelf companies (WY Corp Svcs only)"),
  bullet("Cryptocurrency payments (WY Corp Svcs only)"),
  bullet("AI-powered customer tools (ZenBusiness Velo\u2122 only)"),
  bullet("Interactive assessment tools (NCH + ZenBusiness)"),
  bullet("Money-back guarantee (ZenBusiness + NCH)"),
  pageBreak(),
);

// ============================================================
// 9. APPENDICES (was Section 10)
// ============================================================
sections.push(
  heading1("9. Appendices"),

  heading2("Appendix A: Complete Competitor List with Tier Assignments"),
  makeTable(
    ["#", "Competitor", "URL", "Tier", "Type"],
    [
      ["1", "NCH Inc", "nchinc.com", "Tier 1", "Direct niche"],
      ["2", "Wyoming Corporate Services", "wyomingcompany.com", "Tier 1", "Closest direct"],
      ["3", "ZenBusiness", "zenbusiness.com", "Tier 1", "UX benchmark"],
      ["4", "Anderson Advisors", "andersonadvisors.com", "Tier 1", "Premium niche"],
      ["5", "Corporate Direct / Sutton Law", "corporatedirect.com", "Tier 1", "Education-to-service"],
      ["6", "Northwest Registered Agent", "northwestregisteredagent.com", "Tier 2", "Privacy-adjacent"],
      ["7", "Corporate Capital", "corporatecapitalinc.com", "Tier 2", "Financial privacy"],
      ["8", "Companies Incorporated", "companiesinc.com", "Tier 2", "Nominee services"],
      ["9", "ShieldCorp", "shieldcorp.net", "Tier 3*", "Bottom of market"],
      ["10", "Laughlin Associates", "laughlinusa.com", "Tier 3", "Traditional NV firm"],
      ["11", "IncParadise", "incparadise.net", "Tier 3", "NV volume-based"],
      ["12", "LegalZoom", "legalzoom.com", "Tier 3", "Mass-market"],
      ["13", "Bizee (Incfile)", "bizee.com", "Tier 3", "Mass-market"],
      ["14", "doola", "doola.com", "Tier 3", "International"],
      ["15", "Inc Authority", "incauthority.com", "\u2014", "Mass-market"],
      ["16", "Swyft Filings", "swyftfilings.com", "\u2014", "Mass-market"],
      ["17", "Harvard Business Svcs", "delawareinc.com", "\u2014", "Delaware only"],
    ]
  ),
  para("*ShieldCorp included in full analysis as market floor baseline despite Tier 3 classification."),
  emptyLine(),

  heading2("Appendix B: Anderson Advisors Risk Scenario Matrix"),
  makeTable(
    ["Risk Scenario", "Probability", "Threat", "Mitigation"],
    [
      ["Adds self-service purchasing", "Medium", "WooCommerce infrastructure already exists", "Move fast. Launch with complete pricing/purchasing day one."],
      ["Launches \"Privacy\" pillar", "Medium\u2013High", "Has 10+ articles, nominee page, eBook. Repackaging takes weeks.", "Establish privacy-first brand before they reorganize."],
      ["Improves pricing transparency", "Low\u2013Medium", "PE firm could push for published pricing", "Go beyond visible numbers: comparison tools, calculators, guarantees."],
      ["Acquires formation competitor", "Low\u2013Medium", "Bolt-on acquisition strategy possible", "Build brand loyalty and niche differentiation."],
      ["Deploys AI chatbot/tools", "Medium\u2013High", "Easy WordPress upgrade", "Deploy superior digital support tools from launch."],
      ["Doubles privacy content", "Medium", "Could produce 5\u201310 privacy pieces/month", "Publish full Privacy pillar at launch. Target long-tail first."],
    ]
  ),
  emptyLine(),

  heading2("Appendix C: Services Feature Comparison"),
  makeTable(
    ["Feature", "Inc123", "WY Corp Svcs", "NCH Inc", "ZenBusiness", "NW RA", "Bizee"],
    [
      ["Nominee Director/Manager", "\u2705 Year-round", "\u2705 $400/yr", "\u274c", "\u274c", "\u274c", "\u274c"],
      ["Offshore Nominees", "\u2705 FREE included", "\u274c", "\u274c", "\u274c", "\u274c", "\u274c"],
      ["All States Coverage", "NV, WY (+foreign)", "WY only", "NV, WY", "\u2705 All 50", "\u2705 All 50", "\u2705 All 50"],
      ["Privacy Address", "\u2705 Virtual office", "\u2705 Available", "\u2705", "\u274c", "\u2705 Default", "\u274c"],
      ["Attorney Privilege", "\u274c", "\u2705 $1,765\u2013$2,700", "\u274c", "\u274c", "\u274c", "\u274c"],
      ["Offshore Formation", "\u2705 Panama, HK, St. Kitts", "\u274c", "\u274c", "\u274c", "\u274c", "\u274c"],
      ["Operating Agreement", "\u2705 Included", "\u2705 Included", "\u2705", "$199+ tier", "\u2705 Free", "$199+ tier"],
      ["EIN Filing", "\u2705 Included", "$30 add-on", "\u2705", "$99 add-on", "$50 add-on", "$199+ tier"],
      ["Cryptocurrency", "\u2705 BTC/ETH/XRP/LTC/XMR", "\u2705 Bitcoin", "\u274c", "\u274c", "\u274c", "\u274c"],
    ]
  ),
  emptyLine(),

  heading2("Appendix D: Offshore Formation Competitive Comparison"),
  makeTable(
    ["Jurisdiction", "Incorporate123", "Offshore Company Corp", "Mundo", "Nomad Capitalist"],
    [
      ["Panama Corp", "Contact for pricing", "$999", "$2,000+", "Part of $30K+ package"],
      ["Nevis LLC", "\u2705 Available", "~$1,500", "$2,000\u2013$2,500", "Part of package"],
      ["Hong Kong", "\u2705 Available", "~$1,600", "$2,000+", "Part of package"],
      ["BVI IBC", "Contact", "~$1,500", "$4,500", "Part of package"],
      ["Nominee Director", "\u2705 FREE included", "$200\u2013$300/yr", "Included", "Coordinated"],
      ["Bank Account Help", "Contact", "\u2705", "\u2705 Strong network", "\u2705 Premium intros"],
    ]
  ),
  para("Incorporate123\u2019s free offshore nominee inclusion differentiates it from budget offshore providers that charge $200\u2013$600/year per nominee."),
  emptyLine(), emptyLine(),

  // ---- CLOSING ----
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 400 },
    children: [new TextRun({ text: "\u2014 End of Document \u2014", size: 22, color: "999999", font: "Calibri", italics: true })],
  }),
  emptyLine(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "BIT Studios \u00b7 Incorporate123 Website Redesign \u00b7 Phase 1 Discovery", size: 20, color: "999999", font: "Calibri" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Confidential \u2014 March 2026", size: 20, color: "999999", font: "Calibri" })],
  }),
);

// ============================================================
// BUILD & SAVE DOCUMENT
// ============================================================

const doc = new Document({
  creator: "BIT Studios",
  title: "Incorporate123 Competitive Analysis (No SEO)",
  description: "Competitive analysis for the Incorporate123 website redesign, excluding SEO-specific content.",
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 21 },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 }, // ~0.8 inches
      },
    },
    children: sections,
  }],
});

const outputPath = "C:/Users/alexo/Projects/inc123/DOCS/Phase 1 - Discovery & Site Architecture/4 - Competitors Analysis/Incorporate123_Competitive_Analysis_No_SEO.docx";

const buffer = await Packer.toBuffer(doc);
writeFileSync(outputPath, buffer);
console.log(`\u2705 Document generated successfully at:\n${outputPath}`);
console.log(`File size: ${(buffer.length / 1024).toFixed(1)} KB`);
