import type { ComparisonPage } from "@/lib/types";

export const comparisonPages: ComparisonPage[] = [
  {
    slug: "wyoming-vs-nevada-llc",
    pillar: "formation",
    title: "Wyoming LLC vs. Nevada LLC",
    description:
      "A comprehensive comparison of the two most popular states for privacy-focused LLC formation. Which state is right for your business?",
    verdict: {
      winner: "Wyoming",
      summary:
        "Wyoming wins for most clients: lower annual costs, strongest charging order protection (including single-member LLCs), and equivalent privacy statutes. Nevada is better if you plan to physically operate in Nevada or prefer its established business court.",
    },
    columns: [
      {
        id: "wyoming",
        title: "Wyoming LLC",
        subtitle: "From $875",
        badge: "Recommended",
      },
      { id: "nevada", title: "Nevada LLC", subtitle: "From $1,275" },
    ],
    rows: [
      {
        label: "State Filing Fee",
        values: { wyoming: "$100", nevada: "$425" },
      },
      {
        label: "Annual Report Fee",
        values: { wyoming: "$60", nevada: "$150+" },
      },
      {
        label: "Business License",
        values: { wyoming: "Not Required", nevada: "$200/year" },
      },
      {
        label: "State Income Tax",
        values: { wyoming: "None", nevada: "None" },
      },
      { label: "Franchise Tax", values: { wyoming: "None", nevada: "None" } },
      {
        label: "Charging Order Protection",
        tooltip:
          "Legal protection preventing creditors from seizing LLC assets",
        values: { wyoming: "Strongest in U.S.", nevada: "Strong" },
      },
      {
        label: "Single-Member LLC Protection",
        tooltip:
          "Some states weaken charging order protection for single-member LLCs",
        values: { wyoming: "Yes — Protected", nevada: "Less Clear" },
      },
      {
        label: "Public Member Disclosure",
        values: { wyoming: "Not Required", nevada: "Not Required" },
      },
      {
        label: "Formation Speed",
        values: { wyoming: "2-3 Business Days", nevada: "3-5 Business Days" },
      },
      {
        label: "Business Court",
        values: {
          wyoming: "Chancery Court (2023)",
          nevada: "Established Business Court",
        },
      },
      {
        label: "Operating Agreement Required",
        values: { wyoming: "Recommended", nevada: "Recommended" },
      },
      {
        label: "Series LLC Available",
        values: { wyoming: "Yes", nevada: "Yes" },
      },
      {
        label: "Nominee Services Available",
        values: { wyoming: "Yes (Gold)", nevada: "Yes (Gold)" },
      },
      {
        label: "Offshore Storage Available",
        values: { wyoming: "Yes (Gold)", nevada: "Yes (Gold)" },
      },
      {
        label: "Gold Package Price (LLC)",
        values: { wyoming: "$1,275", nevada: "$1,800" },
      },
      {
        label: "Annual Renewal (Gold LLC)",
        values: { wyoming: "$525", nevada: "$525" },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Wyoming If...",
        reasons: [
          "You want the lowest annual maintenance costs",
          "You're a single-member LLC and need charging order protection",
          "You don't plan to physically operate in Nevada",
          "You want the strongest domestic asset protection",
          "You prefer the lowest state filing fees",
        ],
      },
      chooseB: {
        title: "Choose Nevada If...",
        reasons: [
          "You plan to physically operate in Nevada",
          "You value an established business court system",
          "You want a Nevada business address",
          "Your business partners prefer Nevada's reputation",
          "You plan to use Nevada's business court for disputes",
        ],
      },
      identical: [
        "No state income tax",
        "No public member disclosure",
        "Year-round nominee services available",
        "Offshore record storage available",
        "Cryptocurrency payments accepted",
      ],
    },
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    faqs: [
      {
        id: "comp-1-1",
        question: "Can I change states later?",
        answer:
          "You can domesticate (move) your LLC from one state to another, but it involves additional filing fees and paperwork. It's generally better to choose the right state from the start.",
        category: "formation",
      },
      {
        id: "comp-1-2",
        question: "Which state is cheaper overall?",
        answer:
          "Wyoming is significantly cheaper: $60/year annual report vs. $350+/year for Nevada's annual list and business license combined.",
        category: "formation",
      },
    ],
  },
  {
    slug: "gold-vs-silver-wyoming",
    pillar: "privacy",
    title: "Wyoming Gold vs. Silver LLC",
    description:
      "Compare Wyoming's premium privacy package with the essential formation package. What do you get with Gold that Silver doesn't include?",
    verdict: {
      winner: "Gold",
      summary:
        "Year-round nominees are the only feature-level difference between Silver and Gold. Pick Gold if you want your name completely off public records. Pick Silver if you're fine being on state records and don't need nominee privacy.",
    },
    columns: [
      {
        id: "gold",
        title: "Wyoming Gold LLC",
        subtitle: "$1,275",
        badge: "Recommended",
      },
      { id: "silver", title: "Wyoming Silver LLC", subtitle: "$875" },
    ],
    rows: [
      {
        label: "State Filing Fees Included",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Document Preparation",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Custom Operating Agreement",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Bank Account Opening Document Package",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "EIN Obtainment",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Initial State Filings and Fees",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Corporate Records & Minutes",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Registered Agent (1 Year)",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Offshore Records Storage",
        tooltip: "Corporate records stored outside U.S. jurisdiction",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Virtual Office Address",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Weekly Mail Forwarding",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Year-Round Nominee Director / Manager",
        tooltip: "Nominees listed on ALL public filings year-round",
        values: { gold: "Included", silver: "Not Included" },
      },
      {
        label: "Year-Round Nominee Officers",
        values: { gold: "Included", silver: "Not Included" },
      },
      {
        label: "Formation Price (LLC)",
        values: { gold: "$1,275", silver: "$875" },
      },
      {
        label: "Formation Price (Corp)",
        values: { gold: "$1,575", silver: "$1,175" },
      },
      {
        label: "Annual Renewal (LLC)",
        values: { gold: "$525", silver: "$325" },
      },
      {
        label: "Annual Renewal (Corp)",
        values: { gold: "$625", silver: "$425" },
      },
      {
        label: "Privacy Level",
        values: {
          gold: "Maximum (nominees)",
          silver: "Standard (no nominees)",
        },
      },
      {
        label: "Best For",
        values: {
          gold: "Privacy-first clients",
          silver: "Online businesses who don't need nominees",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Gold If...",
        reasons: [
          "Privacy is your top priority",
          "You want your name off ALL public filings",
          "You have $500K+ in assets to protect",
          "You want year-round nominee director/manager and officers",
          "You want the complete single-SKU privacy bundle",
        ],
      },
      chooseB: {
        title: "Choose Silver If...",
        reasons: [
          "You're fine being on state records",
          "You want virtual office + mail forwarding + EIN without nominees",
          "You want a lower price point",
          "You may add the Privacy Services Upgrade later",
          "You're running an online business and just need a real business address",
        ],
      },
      identical: [
        "State filing fees included",
        "EIN obtainment included",
        "Custom operating agreement included",
        "Bank account opening document package",
        "Registered agent for one year",
        "Corporate records & minutes",
        "Offshore records storage",
        "Virtual office address",
        "Weekly mail forwarding",
      ],
    },
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    faqs: [
      {
        id: "comp-2-1",
        question: "Can I upgrade from Silver to Gold?",
        answer:
          "Yes, you can upgrade at any time. Contact us for current upgrade pricing — it's typically less than the full price difference since your entity is already formed.",
        category: "packages",
      },
      {
        id: "comp-2-2",
        question: "What do nominees actually do?",
        answer:
          "Nominees appear on your entity's public filings in place of your personal information. Gold includes year-round nominees — they stay on ALL filings, not just the initial formation.",
        category: "privacy",
      },
    ],
  },
  {
    slug: "gold-vs-silver-nevada",
    pillar: "privacy",
    title: "Nevada Gold vs. Silver LLC",
    description:
      "Compare Nevada's premium privacy package with the essential formation tier. See exactly what each package includes.",
    verdict: {
      winner: "Gold",
      summary:
        "Year-round nominees are the only feature-level difference between Nevada Silver and Nevada Gold. Pick Gold for maximum privacy with your name off all public filings. Pick Silver if you don't need nominees.",
    },
    columns: [
      {
        id: "gold",
        title: "Nevada Gold LLC",
        subtitle: "$1,800",
        badge: "Premium",
      },
      { id: "silver", title: "Nevada Silver LLC", subtitle: "$1,275" },
    ],
    rows: [
      {
        label: "State Filing Fees Included",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Document Preparation",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "NV Business License",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Custom Operating Agreement",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Bank Account Opening Document Package",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "EIN Obtainment",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Initial State Filings and Fees",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Corporate Records & Minutes",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Registered Agent (1 Year)",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Offshore Records Storage",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Virtual Office Address",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Weekly Mail Forwarding",
        values: { gold: "Included", silver: "Included" },
      },
      {
        label: "Year-Round Nominee Director / Manager",
        values: { gold: "Included", silver: "Not Included" },
      },
      {
        label: "Year-Round Nominee Officers",
        values: { gold: "Included", silver: "Not Included" },
      },
      {
        label: "Formation Price (LLC)",
        values: { gold: "$1,800", silver: "$1,275" },
      },
      {
        label: "Annual Renewal (LLC)",
        values: { gold: "$525", silver: "$325" },
      },
      {
        label: "Privacy Level",
        values: {
          gold: "Maximum (nominees)",
          silver: "Standard (no nominees)",
        },
      },
      {
        label: "Best For",
        values: {
          gold: "Privacy-first Nevada operators",
          silver: "NV operators who don't need nominees",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Gold If...",
        reasons: [
          "Privacy is your top priority",
          "You want year-round nominees on all filings",
          "You want offshore record storage",
          "You're operating in Nevada and want maximum protection",
        ],
      },
      chooseB: {
        title: "Choose Silver If...",
        reasons: [
          "You're fine being on state records",
          "You want virtual office + EIN + NV business license without nominees",
          "You may add the Privacy Services Upgrade later",
          "You want a lower price point while keeping NV compliance",
        ],
      },
      identical: [
        "State filing fees included",
        "EIN obtainment included",
        "Custom operating agreement included",
        "Bank account opening document package",
        "Registered agent for one year",
        "Corporate records & minutes",
        "Offshore records storage",
        "Virtual office address",
        "Weekly mail forwarding",
        "Nevada business license",
      ],
    },
    relatedPackages: ["nevada-gold", "nevada-silver"],
    faqs: [
      {
        id: "comp-3-1",
        question: "Why is Nevada more expensive than Wyoming?",
        answer:
          "Nevada has higher state fees: $425 filing fee, $200/year business license, and $150+ annual list fee. Our pricing reflects these actual state costs.",
        category: "packages",
      },
    ],
  },
  {
    slug: "llc-vs-corporation",
    pillar: "formation",
    title: "LLC vs. Corporation",
    description:
      "Should you form an LLC or a Corporation? Compare the two most common entity types for privacy, taxes, management, and asset protection.",
    verdict: {
      winner: "LLC",
      summary:
        "LLCs are recommended for most small business owners and investors. Simpler management, flexible taxation, and equivalent privacy/asset protection. Corporations are better for raising capital or going public.",
    },
    columns: [
      {
        id: "llc",
        title: "LLC",
        subtitle: "Most Popular",
        badge: "Recommended",
      },
      { id: "corp", title: "Corporation", subtitle: "For Capital Raising" },
    ],
    rows: [
      {
        label: "Default Taxation",
        values: { llc: "Pass-Through", corp: "Double Taxation (C-Corp)" },
      },
      {
        label: "Management Structure",
        values: {
          llc: "Flexible (Members/Managers)",
          corp: "Formal (Board + Officers)",
        },
      },
      {
        label: "Ownership",
        values: { llc: "Membership Interests", corp: "Stock Shares" },
      },
      {
        label: "Annual Formalities",
        values: { llc: "Minimal", corp: "Board meetings, minutes required" },
      },
      {
        label: "Charging Order Protection",
        values: { llc: "Yes (WY is strongest)", corp: "Limited" },
      },
      {
        label: "Privacy (with Nominees)",
        values: { llc: "Excellent", corp: "Excellent" },
      },
      {
        label: "Raising Capital",
        values: { llc: "Limited", corp: "Easier (stock issuance)" },
      },
      {
        label: "Going Public (IPO)",
        values: { llc: "Not Typical", corp: "Yes" },
      },
      {
        label: "S-Corp Election Available",
        values: { llc: "Yes", corp: "Yes" },
      },
      {
        label: "Operating Agreement / Bylaws",
        values: { llc: "Operating Agreement", corp: "Bylaws + Articles" },
      },
      {
        label: "Nominee Services",
        values: { llc: "Directors & Officers", corp: "Directors & Officers" },
      },
      {
        label: "Best For",
        values: {
          llc: "Small businesses, investors, privacy",
          corp: "Capital raising, public companies",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose LLC If...",
        reasons: [
          "You're a small business owner or investor",
          "You want simpler management and fewer formalities",
          "You prefer pass-through taxation",
          "Asset protection (charging order) is important",
          "You don't plan to raise capital through stock",
        ],
      },
      chooseB: {
        title: "Choose Corporation If...",
        reasons: [
          "You plan to raise capital from investors",
          "You want to go public eventually",
          "You need a formal board structure",
          "Your industry requires corporate status",
        ],
      },
      identical: [
        "Limited liability protection",
        "Nominee services available",
        "Offshore record storage available",
        "Privacy through formation state statutes",
        "Registered agent required",
      ],
    },
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    faqs: [
      {
        id: "comp-4-1",
        question: "Can I switch from LLC to Corporation later?",
        answer:
          "Yes, through a process called 'conversion.' Most states allow LLC-to-Corporation conversion, but it involves additional filing fees and potential tax implications. Consult a tax advisor.",
        category: "formation",
      },
    ],
  },
  {
    slug: "wyoming-vs-delaware",
    pillar: "formation",
    title: "Wyoming vs. Delaware for LLCs",
    description:
      "Delaware is famous for corporations, but Wyoming is the better choice for LLCs. Here's why.",
    verdict: {
      winner: "Wyoming",
      summary:
        "Wyoming is superior for LLCs: stronger charging order protection, lower costs, no franchise tax, and equivalent privacy. Delaware's advantages (Chancery Court, corporate law) mainly benefit large corporations, not LLC owners.",
    },
    columns: [
      {
        id: "wyoming",
        title: "Wyoming LLC",
        subtitle: "Best for LLCs",
        badge: "Recommended",
      },
      {
        id: "delaware",
        title: "Delaware LLC",
        subtitle: "Best for Large Corps",
      },
    ],
    rows: [
      { label: "Annual Fee", values: { wyoming: "$60", delaware: "$300" } },
      {
        label: "Franchise Tax (LLC)",
        values: { wyoming: "None", delaware: "$300/year" },
      },
      {
        label: "State Income Tax",
        values: { wyoming: "None", delaware: "8.7% Corporate" },
      },
      {
        label: "Charging Order Protection",
        values: {
          wyoming: "Strongest (single-member)",
          delaware: "Weaker (single-member)",
        },
      },
      {
        label: "Public Member Disclosure",
        values: { wyoming: "Not Required", delaware: "Not Required" },
      },
      {
        label: "Business Court",
        values: {
          wyoming: "Chancery Court (2023)",
          delaware: "Court of Chancery (1792)",
        },
      },
      {
        label: "Corporate Law Reputation",
        values: { wyoming: "Growing", delaware: "Gold Standard (for Corps)" },
      },
      {
        label: "LLC Statutes",
        values: {
          wyoming: "Modern, LLC-Focused",
          delaware: "Corporate-Adapted",
        },
      },
      {
        label: "Formation Speed",
        values: { wyoming: "2-3 Days", delaware: "3-5 Days" },
      },
      {
        label: "Privacy Statutes",
        values: { wyoming: "Strong", delaware: "Moderate" },
      },
      {
        label: "Best For",
        values: {
          wyoming: "LLCs, privacy, asset protection",
          delaware: "Large corporations, VC-backed",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Wyoming If...",
        reasons: [
          "You're forming an LLC (not a C-Corp for VC funding)",
          "You want the strongest asset protection",
          "You want the lowest ongoing costs",
          "Privacy is a priority",
          "You're a small business or investor",
        ],
      },
      chooseB: {
        title: "Choose Delaware If...",
        reasons: [
          "You're forming a C-Corporation for venture capital",
          "You plan to go public (IPO)",
          "Your investors require Delaware incorporation",
          "You need Delaware's established corporate case law",
        ],
      },
      identical: [
        "No public member disclosure for LLCs",
        "Series LLC available",
        "Established legal frameworks",
      ],
    },
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    faqs: [
      {
        id: "comp-5-1",
        question: "Do you offer Delaware formations?",
        answer:
          "We specialize in Wyoming and Nevada where our privacy and asset protection services are strongest. For Delaware C-Corps for VC funding, we recommend consulting a corporate attorney.",
        category: "formation",
      },
    ],
  },
  {
    slug: "incorporate123-vs-competitors",
    pillar: "privacy",
    title: "Incorporate123 vs. Budget Formation Services",
    description:
      "How does Incorporate123 compare to ZenBusiness, LegalZoom, and other budget formation companies? The all-inclusive difference.",
    verdict: {
      winner: "Incorporate123",
      summary:
        "When you add up comparable services, Incorporate123's all-inclusive pricing is actually less expensive than competitors — and includes year-round nominees and offshore storage that competitors simply don't offer.",
    },
    columns: [
      {
        id: "inc123",
        title: "Incorporate123",
        subtitle: "All-Inclusive",
        badge: "Best Value",
      },
      { id: "budget", title: "Budget Services", subtitle: "Hidden Fees" },
    ],
    rows: [
      {
        label: "Base Formation Price",
        values: { inc123: "From $875", budget: "From $0-49" },
      },
      {
        label: "State Filing Fees",
        values: { inc123: "Included", budget: "Extra ($50-425)" },
      },
      {
        label: "Registered Agent",
        values: { inc123: "Included (1 Year)", budget: "Extra ($99-299/year)" },
      },
      {
        label: "Year-Round Nominees",
        tooltip: "Nominees on ALL filings, not just formation",
        values: { inc123: "Included (Gold)", budget: "Not Available" },
      },
      {
        label: "Offshore Record Storage",
        values: { inc123: "Included (Gold)", budget: "Not Available" },
      },
      {
        label: "Corporate Records & Minutes",
        values: { inc123: "Included", budget: "Extra ($100-500/year)" },
      },
      {
        label: "Initial State Filings & Fees",
        values: { inc123: "Included", budget: "Extra ($100-200/year)" },
      },
      {
        label: "Custom Operating Agreement",
        values: { inc123: "Included (All Tiers)", budget: "Extra ($99-199)" },
      },
      {
        label: "EIN Obtainment",
        values: {
          inc123: "Included (Silver & Gold)",
          budget: "Extra ($70-150)",
        },
      },
      {
        label: "Bank Account Opening Docs",
        values: { inc123: "Included (All Tiers)", budget: "Not Offered" },
      },
      {
        label: "Virtual Office Address",
        values: {
          inc123: "Included (Silver & Gold)",
          budget: "Extra ($50-200/mo)",
        },
      },
      {
        label: "Privacy Expertise",
        values: { inc123: "25+ Years Specialist", budget: "Generalist" },
      },
      {
        label: "Phone Support",
        values: {
          inc123: "Real People, Direct Access",
          budget: "Call Center / Chatbot",
        },
      },
      {
        label: "Cryptocurrency Payments",
        values: { inc123: "Yes (No Fee)", budget: "No" },
      },
      {
        label: "True All-In Cost (1st Year)",
        tooltip: "Total cost including all comparable services",
        values: { inc123: "$1,275 (Gold)", budget: "$800-2,500+" },
      },
      {
        label: "Annual Renewal (Comparable)",
        values: { inc123: "$525 (Gold)", budget: "$500-1,500+" },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Incorporate123 If...",
        reasons: [
          "Privacy is important to you",
          "You want everything included — no surprise fees",
          "You value year-round nominees (not 'for a day')",
          "You want offshore record storage",
          "You prefer talking to real people, not chatbots",
          "You want 25+ years of specialized expertise",
        ],
      },
      chooseB: {
        title: "Consider Budget Services If...",
        reasons: [
          "You just need basic filing at the lowest possible price",
          "Privacy features are not important",
          "You don't mind paying extra for each individual service",
          "You're comfortable with automated/chatbot support",
        ],
      },
      identical: [
        "Online ordering process",
        "LLC and Corporation formation",
        "Multiple state options",
      ],
    },
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    faqs: [
      {
        id: "comp-6-1",
        question: "Why not just use ZenBusiness or LegalZoom?",
        answer:
          "Budget services charge $0-49 to get you in the door, then upsell every service individually. When you add registered agent, compliance, and any privacy features, you're paying comparable or more — without year-round nominees or offshore storage, which they don't offer at any price.",
        category: "packages",
      },
    ],
  },
  {
    slug: "best-state-for-privacy",
    pillar: "privacy",
    title: "Best State for Business Privacy",
    description:
      "A four-state comparison of business privacy protections. Which state keeps your personal information off public records most effectively?",
    verdict: {
      winner: "Wyoming",
      summary:
        "Wyoming offers the strongest privacy statutes, lowest annual costs, and no public disclosure requirement. Combined with nominee services, it provides the most comprehensive business privacy available domestically.",
    },
    columns: [
      {
        id: "wyoming",
        title: "Wyoming",
        subtitle: "From $875",
        badge: "Recommended",
      },
      { id: "nevada", title: "Nevada", subtitle: "From $1,275" },
      {
        id: "california",
        title: "California",
        subtitle: "Via WY/NV Formation",
      },
      { id: "florida", title: "Florida", subtitle: "Via WY/NV Formation" },
    ],
    rows: [
      {
        label: "Public Disclosure Required",
        values: {
          wyoming: "None",
          nevada: "None",
          california: "Yes (Statement of Info)",
          florida: "Yes (Annual Report)",
        },
      },
      {
        label: "Nominee Services Available",
        values: {
          wyoming: "Yes (Gold)",
          nevada: "Yes (Gold)",
          california: "Via WY/NV Formation",
          florida: "Via WY/NV Formation",
        },
      },
      {
        label: "Offshore Storage Compatible",
        values: {
          wyoming: "Yes",
          nevada: "Yes",
          california: "Via WY/NV Entity",
          florida: "Via WY/NV Entity",
        },
      },
      {
        label: "State-Level Disclosure",
        tooltip:
          "Whether the state requires public disclosure of ownership information",
        values: {
          wyoming: "None Required",
          nevada: "None Required",
          california: "Statement of Info (Public)",
          florida: "Annual Report (Public)",
        },
      },
      {
        label: "Annual Privacy Costs",
        values: {
          wyoming: "$60/year",
          nevada: "$350+/year",
          california: "$800+/year",
          florida: "$138+/year",
        },
      },
      {
        label: "Privacy Statutes Strength",
        values: {
          wyoming: "Strongest",
          nevada: "Strong",
          california: "Weak",
          florida: "Moderate",
        },
      },
      {
        label: "Formation Speed",
        values: {
          wyoming: "2-3 Days",
          nevada: "3-5 Days",
          california: "5-7 Days",
          florida: "3-5 Days",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Wyoming If...",
        reasons: [
          "Privacy is your #1 priority",
          "You want the lowest annual costs",
          "You don't physically operate in another state",
          "You want the strongest privacy statutes in the country",
        ],
      },
      chooseB: {
        title: "Choose Nevada, California, or Florida If...",
        reasons: [
          "You physically operate in Nevada and want a local presence",
          "You do business in California and need foreign registration there anyway",
          "You're based in Florida and prefer local state compliance",
          "Your business partners or clients expect a specific state presence",
        ],
      },
      identical: [
        "Nominee services available through Incorporate123",
        "Offshore record storage compatible",
        "Cryptocurrency payments accepted",
      ],
    },
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    faqs: [
      {
        id: "comp-7-1",
        question: "Can I get privacy in a state that requires disclosure?",
        answer:
          "Yes. For states like California and Florida that require public disclosure, we form your entity in Wyoming or Nevada (with nominees) and then foreign register in the operating state. Your personal information stays off formation filings.",
        category: "privacy",
      },
      {
        id: "comp-7-2",
        question:
          "Does any federal regulation eliminate the privacy advantage of Wyoming?",
        answer:
          "No. Wyoming's advantage is about public state filings: no member disclosure, strong statutes, and nominee compatibility. Federal reporting requirements are separate from state-level public records. Your privacy from public searches remains fully intact.",
        category: "privacy",
      },
    ],
  },
  {
    slug: "best-state-for-asset-protection",
    pillar: "asset",
    title: "Best State for Asset Protection",
    description:
      "Compare Wyoming, Nevada, and Delaware for LLC-based asset protection. Which state provides the strongest shield for your personal and business assets?",
    verdict: {
      winner: "Wyoming",
      summary:
        "Wyoming is the clear winner for LLC asset protection. It is the only state with explicit single-member LLC charging order protection and makes the charging order the exclusive creditor remedy — no foreclosure, no alternative legal path.",
    },
    columns: [
      {
        id: "wyoming",
        title: "Wyoming",
        subtitle: "Best for LLCs",
        badge: "Recommended",
      },
      { id: "nevada", title: "Nevada", subtitle: "Strong Alternative" },
      { id: "delaware", title: "Delaware", subtitle: "Best for Corps" },
    ],
    rows: [
      {
        label: "Charging Order Protection",
        values: {
          wyoming: "Strongest in U.S.",
          nevada: "Strong",
          delaware: "Moderate",
        },
      },
      {
        label: "Single-Member LLC Protected",
        tooltip:
          "Whether charging order protection extends to LLCs with only one member",
        values: {
          wyoming: "Yes — Explicit Statute",
          nevada: "Less Clear",
          delaware: "No — Court Precedent Against",
        },
      },
      {
        label: "Exclusive Remedy Statute",
        tooltip:
          "Whether the charging order is the ONLY remedy available to creditors",
        values: { wyoming: "Yes", nevada: "Yes", delaware: "No" },
      },
      {
        label: "Business Court",
        values: {
          wyoming: "Chancery Court (2023)",
          nevada: "Established Business Court",
          delaware: "Court of Chancery (1792)",
        },
      },
      {
        label: "Annual Costs",
        values: {
          wyoming: "$60/year",
          nevada: "$350+/year",
          delaware: "$300+/year",
        },
      },
      {
        label: "Foreclosure on Membership Interest",
        values: {
          wyoming: "Not Permitted",
          nevada: "Limited",
          delaware: "Permitted",
        },
      },
      {
        label: "Case Law Depth",
        values: {
          wyoming: "Growing Rapidly",
          nevada: "Well Established",
          delaware: "Extensive (Corporate)",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Wyoming If...",
        reasons: [
          "You are a single-member LLC (decisive advantage)",
          "You want the strongest charging order protection available",
          "You want the lowest annual maintenance costs",
          "You prefer the exclusive remedy statute",
        ],
      },
      chooseB: {
        title: "Choose Nevada or Delaware If...",
        reasons: [
          "You operate a multi-member LLC in Nevada",
          "You need Nevada's established business court for disputes",
          "You're forming a C-Corp for venture capital (Delaware)",
          "Your investors or attorneys require Delaware incorporation",
        ],
      },
      identical: [
        "No state income tax (WY and NV)",
        "Charging order protection available",
        "Series LLC option (WY and NV)",
        "Nominee services available through Incorporate123",
      ],
    },
    relatedPackages: ["wyoming-gold"],
    faqs: [
      {
        id: "comp-8-1",
        question: "Why does single-member LLC protection matter so much?",
        answer:
          "Most small business LLCs have a single owner. In states without explicit single-member protection, courts have allowed creditors to bypass the charging order and seize LLC assets directly. Wyoming's statute closes this loophole explicitly.",
        category: "asset",
      },
      {
        id: "comp-8-2",
        question:
          "Can I move my existing LLC to Wyoming for better protection?",
        answer:
          "Yes, through a process called domestication. You can move your LLC from any state to Wyoming without dissolving and reforming. Contact us for details on the domestication process and costs.",
        category: "asset",
      },
    ],
  },
  {
    slug: "wyoming-vs-nevada-privacy",
    pillar: "privacy",
    title: "Wyoming vs. Nevada for Privacy",
    description:
      "A deep-dive comparison of Wyoming and Nevada's privacy protections. Both are top-tier — but which state gives you more privacy per dollar?",
    verdict: {
      winner: "Wyoming",
      summary:
        "Wyoming and Nevada offer equivalent privacy statutes, but Wyoming wins on cost. Annual privacy maintenance is $60/year in Wyoming vs. $350+/year in Nevada, with identical nominee and offshore storage availability.",
    },
    columns: [
      {
        id: "wyoming",
        title: "Wyoming",
        subtitle: "From $875",
        badge: "Best Value",
      },
      { id: "nevada", title: "Nevada", subtitle: "From $1,275" },
    ],
    rows: [
      {
        label: "Public Member Disclosure",
        values: { wyoming: "Not Required", nevada: "Not Required" },
      },
      {
        label: "Nominee Availability",
        values: { wyoming: "Year-Round (Gold)", nevada: "Year-Round (Gold)" },
      },
      {
        label: "Offshore Storage Compatible",
        values: { wyoming: "Yes (Gold)", nevada: "Yes (Gold)" },
      },
      {
        label: "State Disclosure Requirements",
        tooltip:
          "Neither state requires public disclosure of LLC members or managers",
        values: { wyoming: "None", nevada: "None" },
      },
      {
        label: "Annual Privacy Costs",
        values: { wyoming: "$60", nevada: "$350+" },
      },
      {
        label: "Data Broker Exposure",
        tooltip:
          "How easily data brokers can scrape your information from state filings",
        values: { wyoming: "Minimal", nevada: "Minimal" },
      },
      {
        label: "Privacy Statute Strength",
        values: { wyoming: "Strongest", nevada: "Strong" },
      },
      {
        label: "Formation-Day Privacy",
        tooltip: "Whether your identity is protected from day one of formation",
        values: {
          wyoming: "Full (with Nominees)",
          nevada: "Full (with Nominees)",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Wyoming If...",
        reasons: [
          "You want maximum privacy at the lowest annual cost",
          "You don't need a physical Nevada presence",
          "You also want strong asset protection (single-member LLC)",
          "You prefer Wyoming's newer, LLC-specific statutes",
        ],
      },
      chooseB: {
        title: "Choose Nevada If...",
        reasons: [
          "You physically operate in Nevada",
          "You want a Nevada business address",
          "You prefer Nevada's established business court",
          "Your business partners are familiar with Nevada entities",
        ],
      },
      identical: [
        "No public member disclosure",
        "Year-round nominee services (Gold)",
        "Offshore record storage (Gold)",
        "No state income tax",
        "No state-level ownership disclosure",
      ],
    },
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    faqs: [
      {
        id: "comp-9-1",
        question:
          "If both states offer the same privacy features, why is Wyoming cheaper?",
        answer:
          "Nevada charges higher state fees: $425 filing fee, $200/year business license, and $150+ annual list. Wyoming charges $100 to file and $60/year for annual reports. The privacy protections are equivalent, but Wyoming's government fees are substantially lower.",
        category: "privacy",
      },
      {
        id: "comp-9-2",
        question:
          "Does choosing Wyoming over Nevada reduce my privacy in any way?",
        answer:
          "No. Wyoming and Nevada have equivalent privacy statutes. Neither requires public disclosure of members or managers. Both support nominee services and offshore storage. The difference is cost and physical presence, not privacy strength.",
        category: "privacy",
      },
    ],
  },
  {
    slug: "wyoming-vs-nevada-asset-protection",
    pillar: "asset",
    title: "Wyoming vs. Nevada for Asset Protection",
    description:
      "Both states offer strong charging order protection, but they differ in critical ways. This comparison breaks down which state protects your assets more effectively.",
    verdict: {
      winner: "Wyoming",
      summary:
        "Wyoming wins for asset protection because of its explicit single-member LLC charging order protection. For the majority of small business owners operating single-member LLCs, this is the decisive factor.",
    },
    columns: [
      {
        id: "wyoming",
        title: "Wyoming",
        subtitle: "Best for Single-Member",
        badge: "Recommended",
      },
      { id: "nevada", title: "Nevada", subtitle: "Strong for Multi-Member" },
    ],
    rows: [
      {
        label: "Charging Order Strength",
        values: { wyoming: "Strongest in U.S.", nevada: "Strong" },
      },
      {
        label: "Single-Member LLC Protected",
        tooltip:
          "Whether a one-owner LLC receives full charging order protection",
        values: {
          wyoming: "Yes — Explicit Statute",
          nevada: "Unclear — No Explicit Statute",
        },
      },
      {
        label: "Exclusive Remedy Statute",
        values: { wyoming: "Yes", nevada: "Yes" },
      },
      {
        label: "Foreclosure on Membership Interest",
        values: { wyoming: "Not Permitted", nevada: "Limited Circumstances" },
      },
      {
        label: "Business Court",
        values: {
          wyoming: "Chancery Court (2023)",
          nevada: "Established Business Court",
        },
      },
      {
        label: "Annual Costs",
        values: { wyoming: "$60/year", nevada: "$350+/year" },
      },
      {
        label: "Case Law Volume",
        values: { wyoming: "Growing", nevada: "Extensive" },
      },
      {
        label: "Series LLC Available",
        values: { wyoming: "Yes", nevada: "Yes" },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose Wyoming If...",
        reasons: [
          "You have a single-member LLC (this is the decisive factor)",
          "You want the lowest annual maintenance costs",
          "You want explicit statutory protection against foreclosure",
          "You prioritize the strongest possible charging order",
        ],
      },
      chooseB: {
        title: "Choose Nevada If...",
        reasons: [
          "You operate a multi-member LLC in Nevada",
          "You value Nevada's extensive case law history",
          "You need the established business court for potential disputes",
          "You plan to physically operate in Nevada",
        ],
      },
      identical: [
        "Exclusive remedy statute",
        "Series LLC available",
        "No state income tax",
        "Nominee services available (Gold)",
        "Offshore record storage available (Gold)",
      ],
    },
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    faqs: [
      {
        id: "comp-10-1",
        question: "What exactly is 'exclusive remedy' and why does it matter?",
        answer:
          "Exclusive remedy means the charging order is the ONLY legal tool a creditor can use against your LLC interest. Without an exclusive remedy statute, creditors might pursue alternative legal theories to reach your LLC assets. Both Wyoming and Nevada have this protection.",
        category: "asset",
      },
      {
        id: "comp-10-2",
        question: "Is Nevada's asset protection weak?",
        answer:
          "No — Nevada has strong asset protection overall. The key difference is single-member LLCs: Wyoming explicitly protects them by statute, while Nevada lacks that specific provision. For multi-member LLCs, both states offer excellent protection.",
        category: "asset",
      },
    ],
  },
  {
    slug: "shelf-company-vs-new-formation",
    pillar: "formation",
    title: "Shelf Company vs. New Formation",
    description:
      "Should you buy a pre-aged shelf company or form a brand-new entity? Compare costs, speed, risks, and benefits of each approach.",
    verdict: {
      winner: "New Formation",
      summary:
        "New formation is the right choice for most clients — lower cost, full customization, and zero risk of prior liabilities. Shelf companies make sense only when entity age is specifically required for contracts, licensing, or business credit purposes.",
    },
    columns: [
      { id: "shelf", title: "Shelf Company", subtitle: "Pre-Aged Entity" },
      {
        id: "new",
        title: "New Formation",
        subtitle: "From $875",
        badge: "Recommended",
      },
    ],
    rows: [
      {
        label: "Entity Age",
        values: { shelf: "1-20+ Years", new: "Newly Formed" },
      },
      {
        label: "Formation Cost",
        values: { shelf: "$3,000-15,000+", new: "From $875" },
      },
      {
        label: "Speed to Use",
        values: { shelf: "Immediate", new: "2-5 Business Days" },
      },
      {
        label: "Prior Liabilities",
        tooltip:
          "Risk of undisclosed debts or obligations from previous ownership",
        values: { shelf: "Guaranteed Clean (Inc123)", new: "None — Brand New" },
      },
      {
        label: "Customization",
        values: {
          shelf: "Limited (Name Change Available)",
          new: "Full — Choose Everything",
        },
      },
      {
        label: "Business Credit Impact",
        tooltip: "How entity age affects ability to establish business credit",
        values: {
          shelf: "Positive — Established Age",
          new: "Neutral — Must Build",
        },
      },
      {
        label: "Contract Eligibility",
        tooltip: "Some contracts require a minimum number of years in business",
        values: {
          shelf: "May Satisfy Age Requirements",
          new: "Starts at Zero",
        },
      },
      {
        label: "Annual Renewal",
        values: { shelf: "Same as New Entity", new: "From $325/year" },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose a Shelf Company If...",
        reasons: [
          "You need an entity with an established formation date",
          "Contract or licensing requirements specify minimum entity age",
          "You want to accelerate business credit building",
          "Immediate availability is critical and you can't wait 2-5 days",
        ],
      },
      chooseB: {
        title: "Choose New Formation If...",
        reasons: [
          "You want the lowest possible cost",
          "Entity age is not a factor for your business",
          "You want full control over entity name and structure",
          "You prefer zero risk of any prior associations",
        ],
      },
      identical: [
        "Same privacy features available (nominees, offshore storage)",
        "Same annual compliance requirements",
        "Same charging order protection",
        "Registered agent included",
      ],
    },
    relatedPackages: ["shelf-companies", "wyoming-gold"],
    faqs: [
      {
        id: "comp-11-1",
        question: "Are shelf companies safe to buy?",
        answer:
          "From Incorporate123, yes. All our shelf companies come with guaranteed clean histories — no prior business activity, no debts, no liens, and no liabilities. We maintain them in good standing from formation through sale.",
        category: "formation",
      },
      {
        id: "comp-11-2",
        question: "Can I add Gold package features to a shelf company?",
        answer:
          "Yes. You can add nominee services, offshore record storage, and all other Gold features to any shelf company purchase. Contact us for shelf company pricing with privacy add-ons.",
        category: "formation",
      },
    ],
  },
  {
    slug: "llc-vs-scorp-vs-ccorp-tax",
    pillar: "formation",
    title: "LLC vs. S-Corp vs. C-Corp: Tax Comparison",
    description:
      "Compare the tax treatment of the three most common entity structures. Understand pass-through taxation, self-employment tax savings, and when each structure makes sense.",
    verdict: {
      winner: "LLC (with S-Corp Election at $80K+)",
      summary:
        "For most small business owners, a standard LLC is simplest. Once net income consistently exceeds $80,000, the S-Corp election can save thousands in self-employment taxes. C-Corps are best reserved for businesses raising venture capital or planning to go public.",
    },
    columns: [
      {
        id: "llc",
        title: "LLC (Pass-Through)",
        subtitle: "Default",
        badge: "Simplest",
      },
      { id: "scorp", title: "S-Corp Election", subtitle: "Tax Savings" },
      { id: "ccorp", title: "C-Corporation", subtitle: "Capital Raising" },
    ],
    rows: [
      {
        label: "Federal Tax Treatment",
        values: {
          llc: "Pass-through to personal return",
          scorp: "Pass-through with salary/distribution split",
          ccorp: "Corporate tax (21%) + dividend tax",
        },
      },
      {
        label: "Self-Employment Tax",
        tooltip: "15.3% on net income up to $168,600 (2024)",
        values: {
          llc: "On all net income",
          scorp: "On salary only (not distributions)",
          ccorp: "None (but double taxation)",
        },
      },
      {
        label: "Salary Requirement",
        values: {
          llc: "None",
          scorp: "Must pay 'reasonable salary'",
          ccorp: "If officers receive compensation",
        },
      },
      {
        label: "Qualification Requirements",
        values: {
          llc: "None",
          scorp: "≤100 shareholders, U.S. residents, one class of stock",
          ccorp: "None",
        },
      },
      {
        label: "Filing Complexity",
        values: {
          llc: "Schedule C (simplest)",
          scorp: "Form 1120-S + payroll returns",
          ccorp: "Form 1120 + corporate records",
        },
      },
      {
        label: "Payroll Required",
        values: {
          llc: "No",
          scorp: "Yes (owner salary)",
          ccorp: "If paying employees/officers",
        },
      },
      {
        label: "State Income Tax (WY/NV)",
        values: { llc: "None", scorp: "None", ccorp: "None" },
      },
      {
        label: "Estimated Annual Accounting Cost",
        tooltip: "Additional CPA/bookkeeping costs beyond a standard LLC",
        values: {
          llc: "$500-1,500",
          scorp: "$2,000-4,000",
          ccorp: "$3,000-6,000+",
        },
      },
      {
        label: "Best For",
        values: {
          llc: "Most small businesses under $80K net",
          scorp: "Businesses with $80K+ net income",
          ccorp: "VC-funded startups, IPO track",
        },
      },
    ],
    decisionGuide: {
      chooseA: {
        title: "Choose LLC (Pass-Through) If...",
        reasons: [
          "Your net business income is under $80,000/year",
          "You want the simplest tax filing and lowest accounting costs",
          "You're just starting out and want flexibility",
          "You prefer minimal payroll and compliance overhead",
          "You may elect S-Corp taxation later as income grows",
        ],
      },
      chooseB: {
        title: "Choose S-Corp or C-Corp If...",
        reasons: [
          "Your net income consistently exceeds $80,000 (S-Corp)",
          "Self-employment tax savings justify added accounting costs (S-Corp)",
          "You're raising venture capital or planning an IPO (C-Corp)",
          "You need to issue multiple classes of stock (C-Corp)",
          "Your investors require C-Corp structure (C-Corp)",
        ],
      },
      identical: [
        "All three provide limited liability protection",
        "All three can be formed in Wyoming or Nevada",
        "Nominee services available for all entity types",
        "Offshore record storage compatible with all structures",
        "Privacy protections are independent of tax classification",
      ],
    },
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    faqs: [
      {
        id: "comp-tax-1",
        question: "Does the S-Corp election change my Wyoming LLC formation?",
        answer:
          "No. The S-Corp election is a federal tax classification only. Your entity remains a Wyoming LLC for state law purposes — all privacy protections, charging order protection, and nominee services work exactly the same. You simply file Form 2553 with the IRS to change how the LLC is taxed.",
        category: "formation",
      },
      {
        id: "comp-tax-2",
        question: "Can I switch between these tax structures?",
        answer:
          "Yes, with some limitations. An LLC can elect S-Corp or C-Corp taxation at any time. An S-Corp can revoke its election (with a 5-year waiting period to re-elect). Converting from C-Corp to S-Corp is possible but may trigger built-in gains tax. Consult your CPA before changing tax elections.",
        category: "formation",
      },
      {
        id: "comp-tax-3",
        question: "What is 'reasonable salary' for S-Corp owners?",
        answer:
          "The IRS requires S-Corp owner-employees to pay themselves a salary that is reasonable for their role and industry. Setting your salary too low to avoid payroll taxes is a common audit trigger. Your CPA can benchmark the appropriate salary based on your industry, location, and job responsibilities.",
        category: "formation",
      },
    ],
  },
];
