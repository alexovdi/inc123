import type { ClusterContent } from "@/lib/types";

/**
 * FORMATION pillar cluster expansions.
 *
 * Expands 5 existing formation clusters to meet the 3+ sections / 3+ FAQs
 * minimum and adds 1 new flagship tax-comparison cluster.
 *
 * New clusters: llc-vs-scorp-vs-ccorp-tax
 */
export const FORMATION_EXPANSIONS: ClusterContent[] = [
  // ================================================================
  // 1. WYOMING LLC (flagship — most polished)
  // ================================================================
  {
    slug: "wyoming-llc",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Wyoming LLC Formation",
    description:
      "America's most business-friendly state for LLC formation. All-inclusive packages include state filing fees, registered agent, corporate minutes, and annual report filing.",
    sections: [
      {
        id: "why-wyoming",
        type: "text",
        title: "Why Form a Wyoming LLC?",
        content:
          "Wyoming has been ranked the #1 state for LLC formation by virtually every legal and tax publication for over a decade. It combines zero state income tax, the strongest charging order protection in the country (including for single-member LLCs), no public member or manager disclosure, a $60 annual report — the lowest in the nation — and 2-3 day formation. For most privacy-focused owners, Wyoming is simply the default. You get the strongest statutory protections at the lowest recurring cost, with no tradeoffs on speed or flexibility.",
        bullets: [
          "Zero state income tax on individuals and entities",
          "$60 annual report — lowest in the United States",
          "2-3 business day formation (or 24 hours with rush)",
          "Members and managers never disclosed to the public",
          "Exclusive charging order remedy for single-member LLCs",
        ],
        keyPoints: [
          {
            title: "Sole Remedy Statute",
            description:
              "Wyoming law makes the charging order the only remedy a creditor can pursue — even against single-member LLCs.",
            icon: "ShieldCheck",
          },
          {
            title: "Nominee-Friendly",
            description:
              "Wyoming explicitly permits nominee managers, a structure we include in every Gold package.",
            icon: "Lock",
          },
          {
            title: "No Information Sharing",
            description:
              "Wyoming does not share entity information with the IRS or other states except under federal subpoena.",
            icon: "Shield",
          },
        ],
      },
      {
        id: "whats-included",
        type: "text",
        title: "What's Included in Every Wyoming LLC Package",
        content:
          "Every Wyoming LLC package is all-inclusive — the price you see covers everything required to form and maintain the entity in its first year. Bronze includes the $100 state filing fee, one full year of registered agent service, Articles of Organization preparation and filing, a custom operating agreement, corporate records & minutes, a bank account opening document package, and offshore records storage. Silver adds EIN obtainment, a Wyoming virtual office address, and weekly mail forwarding. Gold adds year-round nominee director/manager and nominee officers — your name never appears on public filings.",
        bullets: [
          "State filing fee ($100) included in every tier",
          "Registered agent for 12 months — no first-year upsell",
          "Articles of Organization filed within 24 hours of payment",
          "Silver adds virtual office + mail forwarding (defines the tier)",
          "Gold adds nominee managers — the privacy differentiator",
        ],
      },
      {
        id: "wyoming-pricing",
        type: "pricing",
        title: "Wyoming LLC Cost Breakdown",
        content:
          "Every Wyoming LLC package is quoted as a single flat price. Here is exactly what it covers and what recurs annually. No hidden fees, no surprise invoices, no upsells at renewal.",
        pricingRows: [
          {
            label: "State filing fee (Articles of Organization)",
            price: "$100",
            note: "Paid directly to Wyoming Secretary of State — included",
          },
          {
            label: "Registered agent (year 1)",
            price: "Included",
            note: "$99/year at renewal",
          },
          {
            label: "Annual report filing",
            price: "$60",
            note: "Paid to the state each year — included in first year",
          },
          {
            label: "Wyoming Bronze package",
            price: "$425",
            note: "Formation + registered agent + compliance essentials",
          },
          {
            label: "Wyoming Silver package",
            price: "$695",
            note: "Bronze + virtual office + mail forwarding",
            highlight: true,
          },
          {
            label: "Wyoming Gold package",
            price: "$995",
            note: "Silver + nominee manager privacy service",
            highlight: true,
          },
          {
            label: "24-hour rush filing (optional)",
            price: "$199",
            note: "Add-on for same-day Secretary of State processing",
          },
        ],
        pricingNote:
          "Renewal pricing is flat and predictable — Silver renews at $395/year, Gold at $595/year. State fees are always passed through at cost.",
      },
    ],
    faqs: [
      {
        id: "wyllc-faq-1",
        question: "How long does Wyoming LLC formation take?",
        answer:
          "Standard formation takes 2-3 business days after we submit your filing. Rush filing (24-hour processing) is available as an add-on for $199. Gold package orders are prioritized and typically filed the same business day.",
        category: "formation",
      },
      {
        id: "wyllc-faq-2",
        question: "Do I need to live in Wyoming to form a Wyoming LLC?",
        answer:
          "No. You do not need to live, work, or have any physical presence in Wyoming to form a Wyoming LLC. The vast majority of our clients are out-of-state — Wyoming actively welcomes non-resident formation. Your registered agent (included in every package) satisfies the only in-state requirement.",
        category: "formation",
      },
      {
        id: "wyllc-faq-3",
        question: "Will my name appear on Wyoming public records?",
        answer:
          "Not if you use our service. Wyoming does not require member or manager names on the public Articles of Organization. On Bronze and Silver, our organizer signs the filing. On Gold, nominee managers are listed — your name appears nowhere in the public record at formation or on annual reports.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming Corporation", href: "/wyoming-corporation" },
      { title: "Wyoming State Hub", href: "/wyoming" },
      { title: "WY vs NV Comparison", href: "/wyoming-vs-nevada-llc" },
      { title: "Entity Tax Guide", href: "/entity-tax-guide" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "Wyoming is not cheap because it's inferior. It's cheap because the legislature decided competitive fees were strategy — and they were right.",
      attribution: "Incorporate123 Formation Team",
      bgText: "Wyoming",
    },
    suggestions: [
      {
        title: "Wyoming vs Nevada LLC",
        description:
          "Side-by-side comparison of filing fees, annual costs, and privacy statutes.",
        href: "/wyoming-vs-nevada-llc",
      },
      {
        title: "Wyoming Gold Package",
        description:
          "The flagship tier with nominee managers and offshore record storage.",
        href: "/wyoming-gold",
      },
      {
        title: "Charging Order Protection",
        description:
          "Why Wyoming's single-remedy rule is the strongest in the country.",
        href: "/charging-order-protection",
      },
    ],
  },

  // ================================================================
  // 2. NEVADA LLC
  // ================================================================
  {
    slug: "nevada-llc",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Nevada LLC Formation",
    description:
      "Strong privacy statutes, no state income tax, and a dedicated business court. All-inclusive Nevada LLC formation with every fee included.",
    sections: [
      {
        id: "why-nevada",
        type: "text",
        title: "Why Form a Nevada LLC?",
        content:
          "Nevada has been a premier business formation state since the 1990s. It combines zero state income tax, strong statutory privacy (no public member disclosure), a dedicated business court that resolves commercial disputes in months rather than years, and decades of favorable precedent. Nevada is the right choice when you need an established case-law environment, when you have an actual physical presence in the state, or when your business depends on the Nevada business court's reputation for fast, commercially-literate rulings.",
        keyPoints: [
          {
            title: "Dedicated Business Court",
            description:
              "Nevada's business court hears only commercial cases — judges specialize in contracts, governance, and fiduciary disputes.",
            icon: "Gavel",
          },
          {
            title: "Director Indemnification",
            description:
              "NRS 78.138 gives directors and officers the strongest statutory indemnification in the country.",
            icon: "ShieldCheck",
          },
          {
            title: "Case-Law Depth",
            description:
              "Thirty years of published business court opinions — far more precedent than Wyoming.",
            icon: "BookOpen",
          },
        ],
      },
      {
        id: "costs",
        type: "text",
        title: "Understanding Nevada Costs",
        content:
          "Nevada is the more expensive of the two. The state charges a $75 filing fee, a $150 initial list of managers, and a $200 state business license, all due at formation — that's $425 before anything else. Annually, you owe another $150 list filing plus the $200 business license renewal. All of these state fees are bundled into our package price — no surprise invoices. Nevada costs roughly 4x what Wyoming does in annual state fees, which is why we only recommend it when the business court, precedent, or actual Nevada presence justifies the premium.",
        bullets: [
          "Initial filing: $75 Articles + $150 Initial List + $200 business license",
          "Annual state fees: $350 ($150 Annual List + $200 business license)",
          "All state fees included in every package price — no markup",
          "Roughly 4x Wyoming's ongoing state cost",
          "Business license renewal required every year — no exceptions",
        ],
      },
      {
        id: "nevada-pricing",
        type: "pricing",
        title: "Nevada LLC Cost Breakdown",
        content:
          "Nevada's higher state costs are fully absorbed into our package pricing. Here is the line-by-line breakdown so you can see exactly where your money goes.",
        pricingRows: [
          {
            label: "Articles of Organization",
            price: "$75",
            note: "Paid to Nevada Secretary of State — included",
          },
          {
            label: "Initial List of Managers",
            price: "$150",
            note: "Required at formation — included",
          },
          {
            label: "State Business License",
            price: "$200",
            note: "Required to do business in NV — included",
          },
          {
            label: "Registered agent (year 1)",
            price: "Included",
            note: "$125/year at renewal",
          },
          {
            label: "Nevada Bronze package",
            price: "$725",
            note: "Formation + all state fees + registered agent",
          },
          {
            label: "Nevada Silver package",
            price: "$995",
            note: "Bronze + real Nevada office address + mail forwarding",
            highlight: true,
          },
          {
            label: "Nevada Gold package",
            price: "$1,395",
            note: "Silver + nominee managers + offshore records",
            highlight: true,
          },
        ],
        pricingNote:
          "Annual renewal: Silver $695/year, Gold $995/year. State fees pass through at cost; we never mark up Secretary of State charges.",
      },
      {
        id: "who-chooses-nevada",
        type: "audience",
        title: "Who Benefits From Nevada Over Wyoming?",
        content:
          "Roughly 70% of our clients form in Wyoming by default. Nevada is the right call for a specific and smaller set of situations — usually tied to physical presence, precedent, or professional licensing.",
        items: [
          {
            title: "Nevada Residents and Operators",
            description:
              "If you live in Nevada, operate a physical business there, or hold a Nevada professional license, form where you operate.",
            icon: "MapPin",
          },
          {
            title: "Complex Governance Disputes",
            description:
              "Businesses that anticipate shareholder or director disputes benefit from Nevada's specialized business court.",
            icon: "Gavel",
          },
          {
            title: "Licensed Professions",
            description:
              "Certain Nevada-licensed industries — gaming, cannabis, real estate brokerage — require a Nevada entity.",
            icon: "Briefcase",
          },
          {
            title: "Precedent-Driven Industries",
            description:
              "Private equity, fund structures, and holding companies that rely on published case law prefer Nevada's deeper record.",
            icon: "Scale",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "nvllc-faq-1",
        question: "Is Nevada or Wyoming better for an LLC?",
        answer:
          "Wyoming is better for most clients — lower costs, stronger single-member charging order protection, and simpler compliance. Nevada is better if you live or operate in Nevada, need its business court, or work in a Nevada-licensed industry. For a pure privacy shell, Wyoming wins almost every time.",
        category: "formation",
      },
      {
        id: "nvllc-faq-2",
        question: "Do I need a real Nevada address to form a Nevada LLC?",
        answer:
          "You need a registered agent with a Nevada street address — included in every package. You do not need your own physical address. Silver and Gold packages include a real Nevada office address and mail forwarding service, which is required if you want genuine business-location credibility for banking or contracts.",
        category: "formation",
      },
      {
        id: "nvllc-faq-3",
        question: "What is the Nevada Commerce Tax and does my LLC owe it?",
        answer:
          "Nevada's Commerce Tax applies only to businesses with Nevada gross revenue over $4 million per year. Most small LLCs never pay it. If your entity exceeds the threshold, the tax is tiered by industry and typically runs 0.05% to 0.33% of Nevada-sourced revenue. There is no broad income or franchise tax below $4M.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Nevada Corporation", href: "/nevada-corporation" },
      { title: "Nevada State Hub", href: "/nevada" },
      { title: "WY vs NV Comparison", href: "/wyoming-vs-nevada-llc" },
      { title: "Nevada Business Court", href: "/nevada-business-court" },
    ],
    relatedPackages: ["nevada-gold", "nevada-silver", "nevada-bronze"],
    pullQuote: {
      quote:
        "Nevada is not where you form by default. It's where you form when Wyoming isn't enough — when you need a courtroom, not just a statute.",
      bgText: "Nevada",
    },
    suggestions: [
      {
        title: "Nevada vs Wyoming Comparison",
        description:
          "Fee tables, statutes, and case-law depth across both states.",
        href: "/wyoming-vs-nevada-llc",
      },
      {
        title: "Nevada Gold Package",
        description:
          "Full-service Nevada formation with nominee managers and office address.",
        href: "/nevada-gold",
      },
      {
        title: "Business Court Advantage",
        description:
          "Why specialized commercial courts change the risk profile of disputes.",
        href: "/nevada-business-court",
      },
    ],
  },

  // ================================================================
  // 3. WYOMING CORPORATION
  // ================================================================
  {
    slug: "wyoming-corporation",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Wyoming Corporation",
    description:
      "Corporate formation in Wyoming with close-knit statutes. Ideal for businesses planning to raise capital, issue stock, or establish a formal board structure.",
    sections: [
      {
        id: "overview",
        type: "text",
        title: "Wyoming Corporation Formation",
        content:
          "A Wyoming corporation is the right choice when you need formal corporate governance — a board of directors, officers, shareholders, and issued stock. Wyoming's Business Corporation Act is modeled on the Model Business Corporation Act but hardened with Wyoming's signature director indemnification and privacy provisions. You get close-knit statutes, zero state income tax, and the same $60 annual report the LLC enjoys. Corporations are preferred when you plan to raise capital, issue equity to employees or advisors, or elect S-Corp treatment for tax purposes while maintaining corporate formality.",
        bullets: [
          "Board of directors and officer structure required",
          "Authorized stock issuance — common, preferred, classes",
          "Same $60 annual report as Wyoming LLCs",
          "No state income tax, no franchise tax",
          "Full S-Corp or C-Corp election flexibility",
        ],
      },
      {
        id: "who-should-form",
        type: "audience",
        title: "Who Should Form a Wyoming Corporation?",
        content:
          "Corporations are not the right structure for most solo operators — an LLC usually delivers the same protection with less paperwork. Corporations earn their complexity when governance or equity structure matters.",
        items: [
          {
            title: "VC-Backed Startups",
            description:
              "Priced equity rounds, preferred stock, board seats, and option pools require a real corporation with share classes.",
            icon: "TrendingUp",
          },
          {
            title: "Closely-Held C-Corps",
            description:
              "Family businesses with multiple shareholders benefit from statutory governance, fiduciary duties, and share transfer restrictions.",
            icon: "Building",
          },
          {
            title: "S-Corp-Electing Operators",
            description:
              "Owners earning above $80K net who want S-Corp tax treatment with full corporate formality instead of an LLC election.",
            icon: "Percent",
          },
          {
            title: "Equity-Compensating Teams",
            description:
              "Businesses issuing ISOs, NSOs, or restricted stock to employees and advisors need real corporate shares.",
            icon: "Award",
          },
        ],
      },
      {
        id: "wyoming-corporate-statutes",
        type: "text",
        title: "Wyoming Corporate Statutes",
        content:
          "Wyoming's Business Corporation Act (Title 17, Chapter 16) is designed around the same philosophy that drives its LLC law — minimal public disclosure, maximum protection for owners and directors, and low recurring fees. Director indemnification is mandatory unless the corporation opts out, stock class flexibility is wide open, and there is no public disclosure of shareholders. When combined with nominee officers (available in Gold), a Wyoming corporation can be structured for near-total anonymity while remaining fully compliant with federal tax and reporting obligations.",
        keyPoints: [
          {
            title: "Mandatory Indemnification",
            description:
              "Wyoming's default rule indemnifies directors acting in good faith — stronger than most states which make indemnification optional.",
            icon: "ShieldCheck",
          },
          {
            title: "Stock Class Flexibility",
            description:
              "Common, preferred, voting, non-voting, and convertible classes are all permitted — VC term sheets map cleanly onto Wyoming shares.",
            icon: "Layers",
          },
          {
            title: "No Shareholder Disclosure",
            description:
              "Shareholders are never listed in public filings. Only the registered agent and one contact person appear on state records.",
            icon: "Lock",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "wycorp-faq-1",
        question: "LLC or Corporation — which should I choose?",
        answer:
          "Most small business owners benefit from an LLC — simpler, cheaper, and equally protective. Corporations are better when you plan to raise venture capital, issue stock to employees, or need a formal board structure. If you are unsure, start with an LLC and elect S-Corp tax treatment if income warrants it.",
        category: "formation",
      },
      {
        id: "wycorp-faq-2",
        question: "Can a Wyoming corporation issue stock to non-US investors?",
        answer:
          "Yes. Wyoming places no restrictions on foreign shareholders for corporations (with one exception: S-Corp election requires all shareholders to be US persons). C-Corps are fully open to international investment. Wyoming's non-disclosure of shareholders is attractive to investors from jurisdictions with different privacy expectations.",
        category: "formation",
      },
      {
        id: "wycorp-faq-3",
        question: "What's the difference between C-Corp and S-Corp in Wyoming?",
        answer:
          "C-Corp and S-Corp are federal tax elections, not Wyoming entity types. Every Wyoming corporation is a C-Corp by default. Filing IRS Form 2553 converts it to an S-Corp for pass-through taxation. The state formation, governance, and fees are identical — the difference is purely federal tax treatment.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming LLC", href: "/wyoming-llc" },
      { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
      { title: "Wyoming State Hub", href: "/wyoming" },
      { title: "Entity Tax Guide", href: "/entity-tax-guide" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "Choose a corporation when the cap table matters. Choose an LLC when it doesn't. Almost everything else is tax optimization.",
      bgText: "Shares",
    },
    suggestions: [
      {
        title: "LLC vs Corporation",
        description:
          "Detailed comparison of governance, taxation, and protection.",
        href: "/llc-vs-corporation",
      },
      {
        title: "S-Corp Election Guide",
        description:
          "When and how to elect S-Corp tax treatment for a corporation.",
        href: "/entity-tax-guide",
      },
      {
        title: "Wyoming Gold Package",
        description: "Full-service corporate formation with nominee officers.",
        href: "/wyoming-gold",
      },
    ],
  },

  // ================================================================
  // 4. NEVADA CORPORATION
  // ================================================================
  {
    slug: "nevada-corporation",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Nevada Corporation",
    description:
      "Nevada corporate formation with dedicated business court and strong liability protections for directors and officers.",
    sections: [
      {
        id: "overview",
        type: "text",
        title: "Nevada Corporation Formation",
        content:
          "Nevada corporations have been the workhorse of closely-held West Coast businesses for four decades. The state combines formal corporate governance with NRS 78.138 — the strongest statutory protection for directors and officers in the country. There is no state income tax, no personal income tax on dividends, and a dedicated business court to resolve governance disputes quickly. Nevada corporations are particularly attractive to businesses that value director protection, privacy of shareholder identity, and the commercial literacy of Nevada's business court.",
        bullets: [
          "NRS 78.138 — strongest director/officer indemnification in the US",
          "Zero state income tax on corporate profits",
          "Dedicated business court resolves disputes in 6-12 months",
          "No public shareholder disclosure",
          "Full C-Corp or S-Corp election flexibility",
        ],
      },
      {
        id: "business-court-advantages",
        type: "differentiator",
        title: "Nevada Business Court Advantages",
        content:
          "The Nevada Business Court was established in 2000 specifically to handle complex commercial litigation. Judges are specialists, dockets are faster, and the body of published decisions gives attorneys real precedent to work with. For closely-held corporations, this is often the decisive reason to choose Nevada over Wyoming.",
        keyPoints: [
          {
            title: "Specialized Judges",
            description:
              "Business court judges handle only commercial cases — contracts, fiduciary duties, M&A, and shareholder disputes.",
            icon: "Gavel",
          },
          {
            title: "Faster Resolution",
            description:
              "Typical business court cases resolve in 6-12 months versus 2-3 years in general civil court.",
            icon: "Clock",
          },
          {
            title: "Published Precedent",
            description:
              "Twenty-five years of business court opinions give counsel real case law for predicting outcomes and drafting agreements.",
            icon: "BookOpen",
          },
          {
            title: "Mandatory Indemnification",
            description:
              "NRS 78.138 automatically indemnifies directors against personal liability unless actual fraud is proven.",
            icon: "ShieldCheck",
          },
        ],
      },
      {
        id: "nevada-over-delaware",
        type: "audience",
        title: "Who Chooses Nevada Over Delaware?",
        content:
          "Delaware remains the default for venture-backed C-Corps. Nevada wins in a specific set of scenarios where Delaware's assumptions don't fit — usually involving closely-held governance, privacy, or cost.",
        items: [
          {
            title: "Closely-Held Operators",
            description:
              "Family businesses and founder-controlled companies that will never take venture capital gain more from Nevada's director protection than Delaware's flexibility.",
            icon: "Users",
          },
          {
            title: "Privacy-First Owners",
            description:
              "Nevada does not require public disclosure of shareholders. Delaware requires more exposure in certain filings and under Chancery practice.",
            icon: "Lock",
          },
          {
            title: "Cost-Conscious Businesses",
            description:
              "Delaware's franchise tax can reach $200,000+ for high-authorized-share corporations. Nevada has no franchise tax at all.",
            icon: "DollarSign",
          },
          {
            title: "Real Nevada Operations",
            description:
              "If the business physically operates in Nevada, forming there avoids the foreign qualification burden of a Delaware entity.",
            icon: "MapPin",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "nvcorp-faq-1",
        question: "Why choose Nevada over Delaware for a corporation?",
        answer:
          "Delaware is the gold standard for VC-backed C-Corps — investors expect it. Nevada is better for closely-held corporations, companies that value privacy, and businesses that will never raise institutional capital. Nevada also has no franchise tax, while Delaware's can reach six figures for corporations with large authorized share counts.",
        category: "formation",
      },
      {
        id: "nvcorp-faq-2",
        question: "Does NRS 78.138 really protect directors?",
        answer:
          "Yes — NRS 78.138 provides the strongest statutory protection for directors in the country. Directors are shielded from personal liability except in cases of intentional misconduct, fraud, or knowing violations of law. Mere negligence or bad business judgment is not enough. It is one of the main reasons Nevada corporations remain popular with experienced board members.",
        category: "formation",
      },
      {
        id: "nvcorp-faq-3",
        question: "Can a Nevada corporation operate entirely out of state?",
        answer:
          "Yes. A Nevada corporation can conduct business anywhere — you only need to foreign-qualify in states where you maintain a physical presence, employees, or significant operations. The registered agent requirement (included in every package) is the only mandatory in-state tie. Many Nevada corporations operate 100% online with zero Nevada activity.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Nevada LLC", href: "/nevada-llc" },
      { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
      { title: "Nevada State Hub", href: "/nevada" },
      { title: "Nevada Business Court", href: "/nevada-business-court" },
    ],
    relatedPackages: ["nevada-gold", "nevada-silver"],
    pullQuote: {
      quote:
        "Delaware writes the textbook. Nevada writes the statute that protects the director the textbook forgot.",
      bgText: "Court",
    },
    suggestions: [
      {
        title: "Nevada vs Delaware",
        description:
          "Fee, governance, and precedent comparison for closely-held corporations.",
        href: "/nevada-vs-delaware",
      },
      {
        title: "Nevada Gold Package",
        description:
          "Full-service corporate formation with nominee officers and office address.",
        href: "/nevada-gold",
      },
      {
        title: "Director Indemnification",
        description: "How NRS 78.138 differs from standard state protections.",
        href: "/director-indemnification",
      },
    ],
  },

  // ================================================================
  // 5. SHELF COMPANIES
  // ================================================================
  {
    slug: "shelf-companies",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Shelf Companies",
    description:
      "Pre-aged entities with established formation dates. Clean histories, no prior liabilities. Immediate availability for business needs requiring entity age.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is a Shelf Company?",
        content:
          "A shelf company — also called an aged company or shelf corporation — is a business entity that was formed at some point in the past and has never conducted any business activity. The entity has been kept on the 'shelf' in good standing, paying its annual reports and maintaining its registered agent, waiting for a buyer. When you purchase one, you acquire an entity with an established formation date without having to wait years for it to age. The primary product is time — the entity age itself — not the entity's operating history.",
        bullets: [
          "Entity was formed years ago but never used for business",
          "Maintained in good standing with the state throughout",
          "No employees, contracts, bank accounts, or prior activity",
          "Ownership transfers to you via member or share transfer",
          "State formation date stays the same — that is the whole point",
        ],
      },
      {
        id: "why-use",
        type: "audience",
        title: "Why Use a Shelf Company?",
        content:
          "Shelf companies serve several legitimate business purposes — all of them tied to situations where entity age is a functional requirement, not a marketing claim.",
        items: [
          {
            title: "Contract Requirements",
            description:
              "Some contracts and RFPs require vendors to have been in business for a minimum number of years.",
            icon: "FileText",
          },
          {
            title: "Business Credit",
            description:
              "Entity age is a factor in establishing business credit profiles with Dun & Bradstreet and commercial lenders.",
            icon: "BarChart2",
          },
          {
            title: "Licensing",
            description:
              "Certain licenses and permits require an entity to have existed for a specified minimum period.",
            icon: "Award",
          },
          {
            title: "Immediate Availability",
            description:
              "No waiting for state formation processing — the entity is already formed and in good standing.",
            icon: "Zap",
          },
        ],
      },
      {
        id: "shelf-pricing",
        type: "pricing",
        title: "Shelf Company Tiers by Age",
        content:
          "Shelf company pricing is driven almost entirely by age. Older entities are rarer and cost more to carry, so the curve is exponential, not linear. Each tier below includes the entity transfer plus your chosen Silver or Gold package pricing layered on top.",
        pricingRows: [
          {
            label: "2-year shelf entity",
            price: "$1,295",
            note: "Formed 2 years ago — entry tier, widest selection",
          },
          {
            label: "3-year shelf entity",
            price: "$1,795",
            note: "Meets most contract and licensing thresholds",
            highlight: true,
          },
          {
            label: "5-year shelf entity",
            price: "$2,995",
            note: "Strong for credit applications and RFPs",
            highlight: true,
          },
          {
            label: "7-year shelf entity",
            price: "$4,495",
            note: "Rare — limited inventory",
          },
          {
            label: "10+ year shelf entity",
            price: "$6,995+",
            note: "Museum pieces — price varies by age and state",
          },
          {
            label: "Add package tier (required)",
            price: "+$425-$1,395",
            note: "Bronze / Silver / Gold applied on top of shelf purchase",
          },
        ],
        pricingNote:
          "Shelf pricing is two-step: you pay for the aged entity plus a standard Silver or Gold package for current-year compliance, virtual office, and optional nominee services.",
      },
      {
        id: "clean-history",
        type: "text",
        title: "How We Verify a Clean History",
        content:
          "Every shelf company we sell is guaranteed clean — no prior business activity, no debts, no liens, no lawsuits, no tax liabilities. Before any shelf entity is listed for sale, we run a full verification: Secretary of State filings review, UCC lien search, state and federal tax compliance check, and a review of any DBAs or assumed names. We provide a written good-standing certificate and a clean-history affidavit at closing. If anything is ever discovered that predates your purchase, we indemnify the buyer in full.",
        keyPoints: [
          {
            title: "UCC Lien Search",
            description:
              "We pull a full UCC-11 search on every shelf entity before listing — nothing with active secured interests is sold.",
            icon: "Shield",
          },
          {
            title: "Good Standing Certificate",
            description:
              "Every shelf sale closes with a current-dated state-issued good-standing certificate in the buyer's name.",
            icon: "CheckCircle",
          },
          {
            title: "Written Indemnification",
            description:
              "Our purchase agreement indemnifies you against any pre-existing liability ever discovered after closing.",
            icon: "ShieldCheck",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "shelf-faq-1",
        question: "Do shelf companies have any prior liabilities?",
        answer:
          "No. All our shelf companies come with clean histories — no prior business activity, no debts, no liens, no contracts, and no tax liabilities. We verify via UCC search, tax compliance check, and state filings before every sale, and we indemnify buyers in writing against anything discovered afterward.",
        category: "formation",
      },
      {
        id: "shelf-faq-2",
        question: "Will banks or lenders treat a shelf company as legitimate?",
        answer:
          "The entity is legally identical to any other LLC or corporation of the same age. Most banks accept shelf companies once a new owner has an EIN, operating agreement, and active bank account. Credit bureaus treat them normally. Lenders sometimes ask for operating history in addition to age — an aged shell alone does not guarantee financing approval.",
        category: "formation",
      },
      {
        id: "shelf-faq-3",
        question: "Is buying a shelf company legal?",
        answer:
          "Yes — shelf companies are entirely legal in the US when used for legitimate business purposes. They become a problem only when used to misrepresent operating history, commit fraud, or evade regulations that require actual business tenure. Every sale we make requires the buyer to certify lawful intent, and we refuse sales when the purpose is unclear.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming LLC", href: "/wyoming-llc" },
      { title: "Gold Package", href: "/wyoming-gold" },
      { title: "Business Credit Guide", href: "/business-credit" },
    ],
    relatedPackages: ["shelf-companies"],
    pullQuote: {
      quote:
        "A shelf company sells one thing: time you cannot manufacture. Everything else — the address, the agent, the package — you can add later.",
      bgText: "Aged",
    },
    suggestions: [
      {
        title: "How Business Credit Works",
        description:
          "Why entity age matters for D&B, Experian Business, and commercial credit.",
        href: "/business-credit",
      },
      {
        title: "Wyoming Gold Package",
        description:
          "Layer Gold-tier privacy on top of any shelf entity purchase.",
        href: "/wyoming-gold",
      },
      {
        title: "Shelf Company Inventory",
        description: "Current aged entities available for immediate transfer.",
        href: "/shelf-companies/inventory",
      },
    ],
  },

  // ================================================================
  // 6. NEW CLUSTER — LLC vs S-Corp vs C-Corp Tax Comparison
  // ================================================================
  {
    slug: "llc-vs-scorp-vs-ccorp-tax",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "LLC vs S-Corp vs C-Corp: Tax Comparison",
    description:
      "The definitive tax-focused comparison. LLC is a legal structure; S-Corp and C-Corp are tax elections. Understand how each is taxed, when self-employment tax kicks in, and which combination minimizes total tax at your income level.",
    sections: [
      {
        id: "the-category-error",
        type: "text",
        title: "First, Fix the Category Error",
        content:
          "Half of the 'LLC vs S-Corp' arguments on the internet are wrong because they compare two different things. LLC is a state-law entity — a legal container that gives you liability protection and charging order remedies. S-Corp and C-Corp are federal tax elections — labels the IRS puts on your entity for tax treatment. An LLC can elect to be taxed as a sole proprietorship (default), a partnership, an S-Corp, or even a C-Corp. A corporation can elect S-Corp or stay C-Corp. Once you separate the legal container from the tax hat, the decision becomes much simpler.",
        keyPoints: [
          {
            title: "LLC = legal container",
            description:
              "State-law entity. Provides liability protection, privacy, and charging order remedies. Tax treatment is separate.",
            icon: "Package",
          },
          {
            title: "S-Corp = tax election",
            description:
              "IRS Form 2553. Pass-through income, reasonable salary rules, self-employment tax savings over ~$80K net.",
            icon: "Percent",
          },
          {
            title: "C-Corp = tax election",
            description:
              "Default for corporations, optional for LLCs. Double taxation, but best for retained earnings and VC equity.",
            icon: "Building",
          },
        ],
      },
      {
        id: "three-options",
        type: "audience",
        title: "The Three Tax Paths — When Each Makes Sense",
        content:
          "Every LLC and corporation ultimately runs on one of three federal tax paths. Here is when each is the right answer.",
        items: [
          {
            title: "Default LLC (Sole Prop / Partnership)",
            description:
              "Simplest option. All profit flows through to your personal return. Pays 15.3% self-employment tax on all net income up to the SS wage base. Best for net income under $80K or when simplicity matters more than tax optimization.",
            icon: "FileText",
          },
          {
            title: "LLC or Corp with S-Corp Election",
            description:
              "Pay yourself a 'reasonable salary' subject to payroll tax, take remaining profits as distributions free of self-employment tax. Best for net income between $80K and ~$400K where SE tax savings exceed payroll and accounting costs.",
            icon: "TrendingUp",
          },
          {
            title: "C-Corp",
            description:
              "Profits taxed at 21% federal corporate rate. Dividends taxed again at the individual level (double taxation). Best for businesses retaining earnings, raising venture capital, or planning QSBS exclusion under Section 1202.",
            icon: "Landmark",
          },
        ],
      },
      {
        id: "tax-scenarios",
        type: "pricing",
        title: "Real Tax Scenarios by Income Level",
        content:
          "The right entity and election depends almost entirely on net income, number of owners, and whether you plan to retain earnings or distribute everything. Here are four common client profiles with the recommended structure and estimated federal tax cost. All numbers are 2024 federal only — state and local taxes are separate.",
        pricingRows: [
          {
            label: "Solo operator, $60K net income",
            price: "~$11,200",
            note: "Default LLC. S-Corp savings don't cover payroll/accounting overhead below ~$80K.",
          },
          {
            label: "Solo operator, $120K net income",
            price: "~$24,800",
            note: "LLC with S-Corp election. $60K salary + $60K distribution saves ~$4,200 in SE tax.",
            highlight: true,
          },
          {
            label: "Two partners, $300K total net",
            price: "~$58,500",
            note: "LLC taxed as partnership with S-Corp election for each partner. Saves ~$10K vs default.",
            highlight: true,
          },
          {
            label: "Raising $2M VC round",
            price: "21% corp rate",
            note: "Delaware C-Corp. Required by institutional investors. QSBS exclusion preserves future exit value.",
          },
          {
            label: "Retaining $200K for growth",
            price: "~$42,000 (21%)",
            note: "C-Corp. Retained earnings taxed once at 21% vs ~32% pass-through at individual level.",
          },
          {
            label: "Real estate holding LLC",
            price: "Pass-through",
            note: "Default LLC. Never elect S-Corp for real estate — loses Section 1031 and basis step-up benefits.",
          },
        ],
        pricingNote:
          "These are federal estimates only. Wyoming and Nevada add zero state income tax; high-tax states like California add 1-13.3% on top. Always consult a CPA before electing S-Corp — the election is hard to reverse for 5 years.",
      },
      {
        id: "wyoming-vs-nevada-tax",
        type: "comparison",
        title: "State Tax Treatment: Wyoming vs Nevada",
        content:
          "Once you pick your federal tax election, your state formation determines what state-level taxes layer on top. Both Wyoming and Nevada impose zero state income tax — but the fees and pass-through treatment differ in ways that matter for high-revenue operators.",
        comparisonRows: [
          {
            label: "State income tax",
            wyoming: "$0 — none",
            nevada: "$0 — none",
          },
          {
            label: "Franchise tax",
            wyoming: "None",
            nevada: "None (Commerce Tax only above $4M gross)",
          },
          {
            label: "Annual state fees",
            wyoming: "$60 annual report",
            nevada: "$350 ($150 list + $200 license)",
          },
          {
            label: "S-Corp election compatible",
            wyoming: "Yes — full pass-through",
            nevada: "Yes — full pass-through",
          },
          {
            label: "C-Corp taxation",
            wyoming: "Federal only — 21%",
            nevada: "Federal only — 21%",
            highlight: true,
          },
          {
            label: "Commerce tax threshold",
            wyoming: "N/A — no gross receipts tax",
            nevada: "$4M+ gross NV revenue",
          },
          {
            label: "Pass-through audit risk",
            wyoming: "Low — no state audits",
            nevada: "Low — no state income audits",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "tax-faq-1",
        question: "If I form an LLC, can I still be taxed as an S-Corp?",
        answer:
          "Yes. Any LLC can elect S-Corp tax treatment by filing IRS Form 2553 within 75 days of formation (or 75 days before the start of a tax year). The LLC remains an LLC for state-law and liability purposes — only federal tax treatment changes. This is the most common structure for small business owners earning $80K+ net.",
        category: "formation",
      },
      {
        id: "tax-faq-2",
        question: "At what income does the S-Corp election start saving money?",
        answer:
          "The rough break-even is around $80K of net business income. Below that, additional payroll, accounting, and state payroll filing costs typically exceed the self-employment tax savings. Between $80K and $400K, S-Corp usually saves $3K-$15K per year. Above $400K, savings plateau because SE tax caps at the Social Security wage base.",
        category: "formation",
      },
      {
        id: "tax-faq-3",
        question: "Why would anyone choose a C-Corp with double taxation?",
        answer:
          "Three reasons: venture capital (investors require C-Corp stock), QSBS exclusion (Section 1202 lets founders exclude up to $10M in gain on sale after 5 years), and retained earnings (21% corporate rate beats ~32% pass-through for profits reinvested rather than distributed). Outside those three cases, C-Corp rarely wins.",
        category: "formation",
      },
      {
        id: "tax-faq-4",
        question: "Can I change my tax election later if circumstances change?",
        answer:
          "Yes, but with limits. You can elect S-Corp at any time by filing Form 2553. Revoking an S-Corp election locks you out of re-electing for 5 tax years, so the decision is not casual. Switching from C-Corp to S-Corp is straightforward. Switching an LLC back to default partnership/sole-prop taxation is allowed but triggers the same 5-year lockout.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
      { title: "Wyoming LLC", href: "/wyoming-llc" },
      { title: "Tax Filing & Obligations", href: "/tax-obligations" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "The LLC is the container. The S-Corp election is just a tax hat. Stop comparing entity types — start comparing tax paths.",
      bgText: "Taxes",
    },
    suggestions: [
      {
        title: "Entity Tax Guide",
        description:
          "Deep dive on how each tax path is computed, filed, and audited.",
        href: "/entity-tax-guide",
      },
      {
        title: "LLC vs Corporation",
        description:
          "The legal-structure comparison — governance, protection, and flexibility.",
        href: "/llc-vs-corporation",
      },
      {
        title: "Tax Filing & Obligations",
        description: "Annual filing calendar for LLCs, S-Corps, and C-Corps.",
        href: "/tax-obligations",
      },
    ],
    crossPillarCTA: {
      pillar: "compliance",
      title: "Stay Compliant After You Elect",
      description:
        "Tax elections create new compliance obligations — payroll, quarterly estimates, corporate minutes. See the full annual calendar.",
      href: "/tax-obligations",
    },
  },
];
