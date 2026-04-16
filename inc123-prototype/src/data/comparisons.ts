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
          "You can domesticate (move) your LLC from one state to another, but it involves additional filing fees, paperwork, and sometimes tax consequences. It's generally better to choose the right state from the start. If you do need to move, both Wyoming and Nevada support domestication from most other states.",
        category: "formation",
      },
      {
        id: "comp-1-2",
        question: "Which state is cheaper overall?",
        answer:
          "Wyoming is significantly cheaper. Wyoming's filing fee is $100 and annual report is $60. Nevada's filing fee is $425 with a $200 annual business license plus a $150+ annual list fee — roughly $775 first-year cost and $350+/year after that. Over 5 years, Wyoming saves roughly $1,500 in state fees.",
        category: "formation",
      },
      {
        id: "comp-1-3",
        question:
          "Do I need to live in Wyoming or Nevada to form an LLC there?",
        answer:
          "No. Neither state requires members, managers, or directors to be residents. You can live anywhere in the U.S. (or internationally) and form a Wyoming or Nevada LLC. A registered agent with a physical in-state address is required — we provide that in every package.",
        category: "formation",
      },
      {
        id: "comp-1-4",
        question:
          "If my business operates in another state, do I still need to register there?",
        answer:
          "Usually yes. If you physically operate or transact business in another state (have employees, offices, inventory, or significant sales there), you typically need to register as a foreign entity in that state. The Wyoming or Nevada LLC remains your home entity, and foreign registration is a secondary filing in the operating state.",
        category: "formation",
      },
      {
        id: "comp-1-5",
        question:
          "Does Nevada's established case law give it an advantage over Wyoming?",
        answer:
          "For corporations, yes — Nevada has more developed corporate case law from decades of corporate litigation. For LLCs, the practical difference is minimal. Both states have strong statutory frameworks; most LLC disputes are resolved under statute, not case law. Wyoming's newer Chancery Court (established 2023) is expanding its body of LLC case law.",
        category: "formation",
      },
      {
        id: "comp-1-6",
        question: "Is there any situation where Nevada is the better choice?",
        answer:
          "Yes. Choose Nevada if you plan to physically operate in Nevada, have employees there, or need access to Nevada's established business court for potential disputes. Nevada also suits multi-member LLCs with complex ownership structures that benefit from Nevada's longer case-law history.",
        category: "formation",
      },
      {
        id: "comp-1-7",
        question: "Can I get the same privacy in both states?",
        answer:
          "Yes. Both Wyoming and Nevada allow private LLC ownership with nominee services. Neither state requires public disclosure of members or managers on formation filings. The privacy protection is equivalent — the difference is cost, not privacy strength.",
        category: "privacy",
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
          "Yes, you can upgrade at any time. Contact us for current upgrade pricing — it's typically less than the full price difference since your entity is already formed. The upgrade adds nominee services to your existing entity's filings and is usually processed within a week.",
        category: "packages",
      },
      {
        id: "comp-2-2",
        question: "What do nominees actually do?",
        answer:
          "Nominees appear on your entity's public filings in place of your personal information. Gold includes year-round nominees — they stay on ALL filings, not just the initial formation. This means when the annual report is filed each year, the nominee's name appears, not yours. You retain full control, ownership, and management authority through the operating agreement.",
        category: "privacy",
      },
      {
        id: "comp-2-3",
        question:
          "Do Silver nominees stay on filings after formation, like Gold nominees?",
        answer:
          "No — this is the central difference. Silver nominees appear on the formation filings only. After formation, the annual report filed each year will show your personal information unless you upgrade. Gold includes year-round coverage: nominees are maintained on every annual filing for as long as you renew.",
        category: "privacy",
      },
      {
        id: "comp-2-4",
        question: "Is Gold worth the extra cost over Silver?",
        answer:
          "Yes, if privacy matters to you beyond formation day. Many clients assume their nominee coverage is permanent after Silver formation and discover a year later that their name has been published on the annual report. Gold is specifically designed to prevent that outcome. If you don't need ongoing privacy, Silver is sufficient.",
        category: "packages",
      },
      {
        id: "comp-2-5",
        question:
          "What is offshore record storage and is it included in Silver?",
        answer:
          "Offshore record storage means your entity's corporate records (operating agreement, minutes, membership certificates) are maintained by our offshore custodian outside U.S. jurisdiction. Silver does not include this — Gold does. Offshore storage is an additional privacy and asset protection layer, not a replacement for domestic formation.",
        category: "privacy",
      },
      {
        id: "comp-2-6",
        question: "Can I add nominees to a Silver package later?",
        answer:
          "You can add nominee services as an individual add-on, but the combined price is typically higher than starting with Gold. If you know you'll want nominees later, Gold is the more economical choice. Upgrades are always available if your needs change.",
        category: "packages",
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
          "Nevada has higher state fees: $425 filing fee, $200/year business license, and $150+ annual list fee. Our pricing reflects these actual state costs. If you don't have a specific reason to form in Nevada, Wyoming is typically the better-value choice.",
        category: "packages",
      },
      {
        id: "comp-3-2",
        question:
          "Does Nevada Gold include the same nominee coverage as Wyoming Gold?",
        answer:
          "Yes. Gold tier is consistent across states — it includes year-round nominees on all filings, offshore record storage, and full privacy coverage. The only difference between Wyoming Gold and Nevada Gold is the underlying state's fees, laws, and business environment, not what's included in the package itself.",
        category: "privacy",
      },
      {
        id: "comp-3-3",
        question: "When should I choose Nevada Gold over Wyoming Gold?",
        answer:
          "Choose Nevada Gold if you physically operate in Nevada, need access to Nevada's established business court, have multi-member ownership that benefits from Nevada's corporate case law, or have a specific business reason to be domiciled in Nevada. Otherwise, Wyoming Gold provides equivalent privacy at a lower annual cost.",
        category: "packages",
      },
      {
        id: "comp-3-4",
        question: "Can I upgrade from Silver to Gold in Nevada?",
        answer:
          "Yes, you can upgrade at any time. Upgrade pricing is typically less than the full price difference since your entity is already formed. Contact us for current pricing and to coordinate the nominee role update with the next Nevada annual list filing.",
        category: "packages",
      },
      {
        id: "comp-3-5",
        question: "Does Nevada Silver cover nominees on the annual list?",
        answer:
          "No. Silver includes nominees on the initial formation filing only. The annual list filed each year with the Nevada Secretary of State will reflect your personal information unless you upgrade to Gold or add year-round nominee coverage as a separate service.",
        category: "privacy",
      },
      {
        id: "comp-3-6",
        question: "Are nominees legal in Nevada?",
        answer:
          "Yes. Nevada law permits the use of nominee managers, directors, and officers. Nominee services are widely used by privacy-conscious business owners and are a legitimate tool for keeping personal information off public state filings. The nominee has no beneficial ownership or control over the entity — that remains entirely with the client.",
        category: "privacy",
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
          "Yes, through a process called conversion. Most states allow LLC-to-Corporation conversion, but it involves additional filing fees and potential tax implications. Consult a tax advisor before converting, especially for tax elections that may trigger recognition of gains.",
        category: "formation",
      },
      {
        id: "comp-4-2",
        question: "Can an LLC elect to be taxed as a corporation?",
        answer:
          "Yes. An LLC can elect S-Corporation tax treatment (Form 2553) or C-Corporation tax treatment (Form 8832) without changing its underlying legal structure. This gives you the flexibility of LLC governance with corporate tax treatment. The entity remains an LLC for state law, privacy, and asset protection purposes.",
        category: "formation",
      },
      {
        id: "comp-4-3",
        question: "Which entity type is better for asset protection?",
        answer:
          "LLCs are generally better for asset protection because of charging order protection. In Wyoming and Nevada, a charging order is the exclusive creditor remedy against an LLC member's interest — creditors cannot seize LLC assets or force distribution. Corporations do not offer equivalent charging order protection; creditors can pursue corporate shares directly.",
        category: "asset",
      },
      {
        id: "comp-4-4",
        question: "Do I need a board of directors for an LLC?",
        answer:
          "No. LLCs do not require a board of directors. They can be member-managed (owners manage directly) or manager-managed (owners appoint a manager — which can be a nominee). Corporations require a board, officers, and annual meetings by statute. LLCs have significantly less corporate formality.",
        category: "formation",
      },
      {
        id: "comp-4-5",
        question:
          "If I'm raising venture capital, should I form a corporation?",
        answer:
          "For most VC-funded startups, yes — typically a Delaware C-Corporation. Venture capital firms overwhelmingly invest in Delaware C-Corps for tax and legal standardization reasons. If you're raising institutional capital, consult a corporate attorney. If you're bootstrapping or raising from friends/family, an LLC is typically the better starting point.",
        category: "formation",
      },
      {
        id: "comp-4-6",
        question:
          "Can I maintain privacy with a corporation the same way as an LLC?",
        answer:
          "Partially. Wyoming and Nevada corporations allow nominee directors and officers on public filings, which provides privacy similar to an LLC. However, corporate shareholder records must be maintained (though they're not publicly filed), and corporate formalities like meeting minutes are legally required. LLCs offer cleaner privacy with less formality.",
        category: "privacy",
      },
      {
        id: "comp-4-7",
        question: "Which is cheaper to maintain annually?",
        answer:
          "LLCs are typically cheaper. In Wyoming, an LLC pays $60/year in annual report fees. A Wyoming corporation pays similar annual fees but has additional compliance requirements (annual meetings, corporate minutes, formal resolutions) that increase administrative cost. The underlying state fees are similar, but the ongoing compliance burden is higher for corporations.",
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
          "We specialize in Wyoming and Nevada where our privacy and asset protection services are strongest. For Delaware C-Corps for VC funding, we recommend consulting a corporate attorney. Delaware's advantages are primarily corporate-law focused — they benefit large corporations with institutional investors more than LLC owners.",
        category: "formation",
      },
      {
        id: "comp-5-2",
        question: "Isn't Delaware known as 'the' state for business formation?",
        answer:
          "For corporations, yes — Delaware has decades of corporate case law and is home to most Fortune 500 companies. For LLCs, Delaware's advantages are much weaker. Wyoming has stronger charging order protection, lower annual costs, no franchise tax, and equivalent privacy. The Delaware reputation comes from corporate litigation, not LLC formation.",
        category: "formation",
      },
      {
        id: "comp-5-3",
        question: "Does Delaware charge a franchise tax on LLCs?",
        answer:
          "Yes. Delaware imposes an annual franchise tax of $300 on all LLCs, regardless of revenue or activity. Wyoming charges a $60 annual report fee. Over 5 years, the difference is $1,200 — and Delaware also has higher filing fees and registered agent costs.",
        category: "formation",
      },
      {
        id: "comp-5-4",
        question: "Do Delaware LLCs have stronger charging order protection?",
        answer:
          "No. Wyoming's charging order protection is stronger and more explicit, particularly for single-member LLCs. Wyoming's statute explicitly makes the charging order the exclusive remedy against an LLC member's interest. Delaware's LLC statute is less explicit, and case law in Delaware has permitted creditors to pursue alternative remedies in some scenarios.",
        category: "asset",
      },
      {
        id: "comp-5-5",
        question: "Can Delaware's Chancery Court be used for LLC disputes?",
        answer:
          "Yes, but this is rarely relevant for most LLC owners. Delaware's Chancery Court specializes in complex corporate litigation — the kind of disputes that arise in multi-million-dollar corporate transactions. For a typical small-business LLC, the Chancery Court advantage provides little practical benefit over Wyoming's state courts.",
        category: "formation",
      },
      {
        id: "comp-5-6",
        question: "Is Delaware better for privacy?",
        answer:
          "No. Wyoming and Delaware have similar public-filing requirements — neither requires member disclosure on formation filings. However, Wyoming's annual report is minimal, while Delaware requires more detailed annual disclosures. For privacy-focused owners, Wyoming is the cleaner choice.",
        category: "privacy",
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
          "Budget services charge $0–49 to get you in the door, then upsell every service individually. When you add registered agent, compliance, and any privacy features, you're paying comparable or more — without year-round nominees or offshore storage, which they don't offer at any price. Our all-inclusive pricing is transparent from the start.",
        category: "packages",
      },
      {
        id: "comp-6-2",
        question: "Do budget services offer nominee services?",
        answer:
          "No. Budget formation services do not offer true nominee services. Some offer 'privacy packages' that remove your name from the initial filing but leave you on the annual report and other public records. None offer year-round nominees that cover every filing for the life of the entity — that capability requires genuine infrastructure and relationships with state registrar offices.",
        category: "privacy",
      },
      {
        id: "comp-6-3",
        question:
          "Can't I just buy the registered agent separately and save money?",
        answer:
          "You can, but the total often exceeds our bundled price. Registered agent services from competitors run $99–199/year. Add compliance monitoring ($100+/year), operating agreement preparation ($50–200), and any privacy features, and the total is typically higher than our all-inclusive packages — with more vendors to coordinate.",
        category: "packages",
      },
      {
        id: "comp-6-4",
        question:
          "What happens with budget services when I have a question or problem?",
        answer:
          "Budget services route you to a call center, chatbot, or ticket system. Complex privacy or asset protection questions don't get meaningful answers. When you call Incorporate123, a privacy specialist answers — someone who understands your situation and has 25 years of experience in Wyoming and Nevada formation.",
        category: "packages",
      },
      {
        id: "comp-6-5",
        question: "Do budget services accept cryptocurrency?",
        answer:
          "Generally no. Budget formation services require credit card or bank payment. We accept cryptocurrency (Bitcoin, Ethereum, and others) because privacy-conscious clients deserve private payment options. This aligns with the broader privacy positioning.",
        category: "packages",
      },
      {
        id: "comp-6-6",
        question: "How do budget services actually make money on $0 formation?",
        answer:
          "Through upsells. State filing fees are added at checkout. Registered agent service is optional and charged separately. Operating agreements, EIN procurement, compliance monitoring, and privacy features are individual add-ons. The $0 headline is a loss leader — by the time you check out with a functional LLC, you've typically paid $300–800 and still don't have privacy coverage.",
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
          "Yes. For states like California and Florida that require public disclosure, we form your entity in Wyoming or Nevada (with nominees) and then foreign register in the operating state. Your personal information stays off formation filings. The private parent entity is public-facing; the operating-state registration is where business activity happens.",
        category: "privacy",
      },
      {
        id: "comp-7-2",
        question:
          "Does any federal regulation eliminate the privacy advantage of Wyoming?",
        answer:
          "No. Wyoming's advantage is about public state filings: no member disclosure, strong statutes, and nominee compatibility. Federal reporting requirements are separate from state-level public records. Your privacy from public searches, competitors, and casual inquiries remains fully intact regardless of federal disclosure requirements.",
        category: "privacy",
      },
      {
        id: "comp-7-3",
        question:
          "How does Wyoming compare to Nevada for privacy specifically?",
        answer:
          "Privacy protections are equivalent. Neither state requires public disclosure of members or managers on formation filings. Both support nominee services. The real differences are cost (Wyoming is cheaper), reputation (Nevada has longer corporate history), and physical presence (Nevada suits businesses operating there). For pure privacy, Wyoming offers the same protection at lower cost.",
        category: "privacy",
      },
      {
        id: "comp-7-4",
        question:
          "Why are California and Florida worse for privacy than Wyoming?",
        answer:
          "California and Florida both require the names and addresses of LLC members or managers on formation filings, which become publicly searchable. To preserve privacy in those states, owners typically use a Wyoming or Nevada parent entity as the public-facing member, with nominees on the parent's filings. The operating state still sees the parent entity's name — not the beneficial owner's.",
        category: "privacy",
      },
      {
        id: "comp-7-5",
        question: "What about Delaware? It's known for business formation.",
        answer:
          "Delaware is known for corporate formation — not LLC privacy. Delaware LLCs do not require member disclosure, but Delaware has higher annual costs (franchise tax of $300), more public filing requirements on the corporate side, and no meaningful privacy advantage over Wyoming. Delaware's reputation comes from corporate case law, not LLC privacy.",
        category: "privacy",
      },
      {
        id: "comp-7-6",
        question: "What does a nominee actually do to protect my privacy?",
        answer:
          "A nominee appears on public state filings in your place. When someone searches the Secretary of State database for your LLC, they see the nominee's name — not yours. The nominee has no ownership or control over the entity; beneficial ownership and management authority remain entirely with you through the operating agreement. Gold-tier service includes year-round nominee coverage across all filings.",
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
          "Most small business LLCs have a single owner. In states without explicit single-member protection, courts have allowed creditors to bypass the charging order and seize LLC assets directly — reasoning that without multiple members, the LLC is essentially a sole proprietorship. Wyoming's statute closes this loophole explicitly, making charging order the exclusive remedy even for single-member LLCs.",
        category: "asset",
      },
      {
        id: "comp-8-2",
        question:
          "Can I move my existing LLC to Wyoming for better protection?",
        answer:
          "Yes, through a process called domestication. You can move your LLC from any state to Wyoming without dissolving and reforming — the entity keeps its EIN, history, and continuity. Contact us for details on the domestication process and costs. Most states permit domestication out; a few require dissolution and re-formation instead.",
        category: "asset",
      },
      {
        id: "comp-8-3",
        question: "What is a charging order, exactly?",
        answer:
          "A charging order is a legal instrument that allows a creditor to intercept distributions from an LLC to its member, but does not give the creditor ownership, control, or the ability to force distributions. In states with strong charging order protection (Wyoming, Nevada, Delaware), this is the creditor's only remedy. The creditor cannot seize LLC assets, force liquidation, or vote on company decisions.",
        category: "asset",
      },
      {
        id: "comp-8-4",
        question: "Does asset protection work if I'm already being sued?",
        answer:
          "Pre-lawsuit planning is far more effective than post-lawsuit planning. Transferring assets to an LLC after a claim arises can be challenged as a fraudulent transfer, allowing creditors to void the transfer. The strongest asset protection happens when the entity is formed and assets are transferred before any threat of litigation. Consult an attorney immediately if you're facing active claims.",
        category: "asset",
      },
      {
        id: "comp-8-5",
        question: "Do I need an offshore structure for real asset protection?",
        answer:
          "Most clients don't. A Wyoming LLC with charging order protection handles the vast majority of asset protection needs at a fraction of the cost of offshore structures. Offshore (Nevis, Cook Islands) makes sense when you need jurisdictional separation from U.S. courts — usually for high-net-worth individuals with specific exposure. Start domestic; add offshore only if the specific situation demands it.",
        category: "asset",
      },
      {
        id: "comp-8-6",
        question: "Does Delaware offer the same protection as Wyoming?",
        answer:
          "No. Delaware's LLC statute is less explicit on charging order exclusivity, and case law has permitted creditors to pursue alternative remedies in some scenarios. Delaware's reputation is built on corporate case law, not LLC asset protection. For LLC-based asset protection, Wyoming is the stronger choice.",
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
          "Nevada charges higher state fees: $425 filing fee, $200/year business license, and $150+ annual list. Wyoming charges $100 to file and $60/year for annual reports. The privacy protections are equivalent, but Wyoming's government fees are substantially lower. Over 5 years, the difference is roughly $1,500 in state fees alone.",
        category: "privacy",
      },
      {
        id: "comp-9-2",
        question:
          "Does choosing Wyoming over Nevada reduce my privacy in any way?",
        answer:
          "No. Wyoming and Nevada have equivalent privacy statutes. Neither requires public disclosure of members or managers. Both support nominee services and offshore storage. The difference is cost and physical presence, not privacy strength. A Wyoming LLC with Gold-tier nominees offers identical public-record privacy to a Nevada LLC with Gold-tier nominees.",
        category: "privacy",
      },
      {
        id: "comp-9-3",
        question: "How do nominee services work in Wyoming versus Nevada?",
        answer:
          "Identically. In both states, a nominee appears on public filings in place of the beneficial owner. The nominee has no ownership or control over the entity — that remains with you through the operating agreement. Gold-tier service includes year-round nominee coverage: the nominee stays on every annual filing for as long as you renew, not just the initial formation.",
        category: "privacy",
      },
      {
        id: "comp-9-4",
        question: "Can I get even more privacy by forming in both states?",
        answer:
          "Rarely worth it. Forming in multiple states adds cost and administrative overhead without meaningful privacy gain. If you need jurisdictional separation beyond what a single state provides, the next step is usually an offshore component (Nevis LLC for asset protection) rather than a second domestic state. Consult us about the right structure for your specific situation.",
        category: "privacy",
      },
      {
        id: "comp-9-5",
        question: "Is Nevada's reputation better than Wyoming's for business?",
        answer:
          "Nevada has longer history — its corporate framework dates to the 1970s, while Wyoming's LLC innovation started in the 1990s. For pure reputation with banks, investors, and counterparties, Nevada is slightly more recognized. In practice, this matters less than most people think: both states are accepted everywhere, and Wyoming LLCs are widely used by sophisticated business owners.",
        category: "privacy",
      },
      {
        id: "comp-9-6",
        question:
          "Can I move between the two states later if I change my mind?",
        answer:
          "Yes. Both Wyoming and Nevada permit domestication in and out. You can move a Wyoming LLC to Nevada (or vice versa) without dissolving the entity. The process involves filing fees in both states and updated operating documents, but the entity keeps its EIN, history, and nominee relationships.",
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
          "Exclusive remedy means the charging order is the ONLY legal tool a creditor can use against your LLC interest. Without an exclusive remedy statute, creditors might pursue alternative legal theories to reach your LLC assets — foreclosure, piercing the veil, or equitable remedies. Both Wyoming and Nevada have exclusive remedy statutes, but Wyoming's is more explicit and applies to single-member LLCs without ambiguity.",
        category: "asset",
      },
      {
        id: "comp-10-2",
        question: "Is Nevada's asset protection weak?",
        answer:
          "No — Nevada has strong asset protection overall. The key difference is single-member LLCs: Wyoming explicitly protects them by statute, while Nevada lacks that specific provision. For multi-member LLCs, both states offer excellent protection. If your LLC has two or more members, Nevada is equally strong. If it's a single-member LLC, Wyoming is the safer choice.",
        category: "asset",
      },
      {
        id: "comp-10-3",
        question:
          "What happens if a court 'pierces the corporate veil' on my LLC?",
        answer:
          "Veil piercing is when a court disregards the LLC's separate legal existence and holds the owner personally liable. It happens when owners fail to maintain corporate formalities, commingle personal and business funds, or use the LLC to commit fraud. To prevent veil piercing: keep separate bank accounts, maintain operating agreement and records, document major decisions, and never use the LLC as a personal piggy bank.",
        category: "asset",
      },
      {
        id: "comp-10-4",
        question: "How does Wyoming's Chancery Court affect asset protection?",
        answer:
          "Wyoming established a dedicated Chancery Court in 2023 to handle complex business disputes, including LLC litigation. It brings specialized judges and streamlined procedures to business cases. Over time, this is expected to produce more predictable case law for LLC disputes, further strengthening Wyoming's asset protection reputation. It's a new court, so the body of case law is still developing.",
        category: "asset",
      },
      {
        id: "comp-10-5",
        question:
          "Does asset protection still work if I already have creditors?",
        answer:
          "Only partially. Transfers to an LLC after a claim arises can be challenged as fraudulent transfers, allowing creditors to void them and reach the assets. The strongest protection comes from pre-lawsuit planning — forming the LLC and transferring assets before any threat of litigation. If you have active claims, consult an attorney about timing and the fraudulent transfer implications.",
        category: "asset",
      },
      {
        id: "comp-10-6",
        question:
          "Should I pair a Wyoming LLC with an offshore entity for maximum protection?",
        answer:
          "For most clients, no — Wyoming alone is sufficient. Offshore structures (Nevis LLC in particular) make sense when you need jurisdictional separation from U.S. courts, have high-value assets exposed to litigation, or face specific threats that warrant the complexity. Offshore adds significant cost and ongoing compliance burden. Start domestic; add offshore only if the situation specifically demands it.",
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
          "From Incorporate123, yes. All our shelf companies come with guaranteed clean histories — no prior business activity, no debts, no liens, and no liabilities. We maintain them in good standing from formation through sale. Buying a shelf company from an unverified seller is risky because you may inherit liabilities that only surface later.",
        category: "formation",
      },
      {
        id: "comp-11-2",
        question: "Can I add Gold package features to a shelf company?",
        answer:
          "Yes. You can add nominee services, offshore record storage, and all other Gold features to any shelf company purchase. Contact us for shelf company pricing with privacy add-ons. The nominee coverage begins from the date of purchase forward — the prior clean history is preserved, and your beneficial ownership is private from day one.",
        category: "formation",
      },
      {
        id: "comp-11-3",
        question: "Why would I want an aged entity in the first place?",
        answer:
          "Three common reasons: (1) contracts that require counterparties with operating history, (2) business credit applications that benefit from an established entity, and (3) licensing or permitting that looks favorably on age. Most clients don't need these advantages. If you're starting a new business without these specific requirements, a new formation is simpler and significantly cheaper.",
        category: "formation",
      },
      {
        id: "comp-11-4",
        question:
          "How much more does a shelf company cost than a new formation?",
        answer:
          "Shelf company pricing scales with age. A 1–2 year entity typically runs 2–3× a new formation. Entities aged 5+ years can be 5–10× the new formation price. The cost reflects the years of maintenance, state fees, and administrative work required to keep the entity in good standing from creation through sale.",
        category: "formation",
      },
      {
        id: "comp-11-5",
        question: "Can I customize a shelf company's name?",
        answer:
          "Yes, but it involves a name change filing with the state, which creates a public record of the name change. For true anonymity with a new name, a new formation may be cleaner. If the shelf company's existing name works for you, no name change is needed — you take over the entity with its original name.",
        category: "formation",
      },
      {
        id: "comp-11-6",
        question: "Will lenders or partners treat a shelf company as 'aged'?",
        answer:
          "It depends on the counterparty. Some lenders look at incorporation date and treat older entities favorably for credit applications. Others look at actual business history and ignore incorporation date. Research your specific use case before paying a premium for age — for many applications, the benefit is less than advertised.",
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
      {
        id: "comp-tax-4",
        question:
          "At what income level does the S-Corp election typically save money?",
        answer:
          "S-Corp tax savings usually start to make sense when net self-employment income exceeds roughly $60,000–80,000 per year. Below that level, the payroll infrastructure cost (separate payroll processing, additional tax returns, reasonable-salary documentation) often outweighs the self-employment tax savings. Your CPA can run the math for your specific situation before you make the election.",
        category: "formation",
      },
      {
        id: "comp-tax-5",
        question: "What is double taxation and how does it affect a C-Corp?",
        answer:
          "C-Corporations pay federal corporate income tax on profits. When those profits are distributed to shareholders as dividends, shareholders pay individual income tax on the dividends — the same dollars are taxed twice. LLCs and S-Corps avoid this through pass-through taxation: profits flow directly to the owner's personal return and are taxed once.",
        category: "formation",
      },
      {
        id: "comp-tax-6",
        question:
          "Why would anyone choose C-Corp taxation despite double taxation?",
        answer:
          "Venture capital investors typically require C-Corp structure for their investments. C-Corps also enable Section 1202 qualified small business stock (QSBS) treatment, which can provide up to $10 million of capital gains tax exclusion on sale. For founders planning a major exit with institutional capital, C-Corp taxation is usually the right long-term structure despite the double-taxation downside.",
        category: "formation",
      },
      {
        id: "comp-tax-7",
        question:
          "Do Wyoming's privacy features change how these tax structures work?",
        answer:
          "No. Tax treatment is a federal matter and operates independently of state-level privacy. Your Wyoming LLC with nominee services can elect any of the three tax treatments (default LLC, S-Corp, C-Corp) without affecting the privacy of the entity. The nominee appears on state filings; your personal information appears on the federal tax return regardless of tax election.",
        category: "privacy",
      },
    ],
    disclaimer:
      "This page provides general educational information about tax structures. It is not tax advice. Tax consequences depend on your specific situation, income level, state, and long-term plans. Before making any tax election, consult a qualified CPA or tax attorney. Incorporate123 forms entities; your CPA handles tax treatment.",
  },
];
