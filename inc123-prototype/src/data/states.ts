import type { StateHub } from "@/lib/types";

export const stateHubs: StateHub[] = [
  {
    slug: "wyoming",
    name: "Wyoming",
    abbreviation: "WY",
    subtitle:
      "America's #1 state for business privacy and asset protection. No state income tax, strongest charging order protection, and the most business-friendly statutes in the country.",
    facts: [
      { label: "State Income Tax", value: "None" },
      { label: "Annual Report Fee", value: "$62" },
      { label: "Charging Order Protection", value: "Strongest in U.S." },
      { label: "Privacy Statutes", value: "No Public Member Disclosure" },
      { label: "Business Court", value: "Chancery Court (2023)" },
    ],
    advantages: [
      {
        icon: "EyeOff",
        title: "Strongest Privacy Statutes",
        description:
          "No public member or manager disclosure required by statute. Combined with year-round nominees, your name never appears on any searchable state filing.",
      },
      {
        icon: "DollarSign",
        title: "Lowest Filing Costs",
        description:
          "~$100 formation fee. $62/year annual report. No income tax. No franchise tax. One of the lowest-cost states to form and maintain an entity.",
      },
      {
        icon: "ShieldCheck",
        title: "Superior Asset Protection",
        description:
          "Wyoming is the only state that applies charging order protection to single-member LLCs — the gold standard for asset protection.",
      },
      {
        icon: "Clock",
        title: "Fast Filing",
        description:
          "5–7 business days standard formation. 24-hour expedited available for urgent filings.",
      },
      {
        icon: "Globe",
        title: "No Residency Requirement",
        description:
          "Form and maintain your entity entirely remotely. No visit to Wyoming needed — everything handled from anywhere.",
      },
      {
        icon: "Scale",
        title: "25 Years of WY Expertise",
        description:
          "Incorporate123 has been forming Wyoming entities since 2003. Deep relationships with the Wyoming Secretary of State office.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "Wyoming Privacy",
        description:
          "Form an anonymous LLC with no public ties to your name. Year-round nominees keep your identity off all state filings.",
        links: [
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
          { label: "Offshore Privacy", href: "/offshore-privacy" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "Gold Package — from $1,275",
          href: "/gold?state=wyoming",
        },
      },
      {
        pillar: "asset",
        title: "Wyoming Asset Protection",
        description:
          "Leverage the strongest charging order protection in the U.S. Wyoming protects single-member LLCs — unique among all states.",
        links: [
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          {
            label: "Wyoming Asset Protection",
            href: "/wyoming-asset-protection",
          },
          { label: "Investment Holding LLC", href: "/investment-holding-llc" },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "Gold Package — from $1,275",
          href: "/gold?state=wyoming",
        },
      },
      {
        pillar: "formation",
        title: "Wyoming Formation",
        description:
          "Expert LLC and corporation formation with all state fees, registered agent, and compliance included in every package.",
        links: [
          { label: "Wyoming LLC", href: "/wyoming-llc" },
          { label: "Wyoming Corporation", href: "/wyoming-corporation" },
          { label: "Shelf Companies", href: "/shelf-companies" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "Silver Package — from $875",
          href: "/silver?state=wyoming",
        },
      },
      {
        pillar: "compliance",
        title: "Wyoming Compliance",
        description:
          "Keep your Wyoming entity in good standing with registered agent, annual reports, and corporate minutes maintenance.",
        links: [
          { label: "Registered Agent", href: "/registered-agent" },
          { label: "Annual Reports", href: "/annual-reports" },
          { label: "Corporate Minutes", href: "/corporate-minutes" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Anonymous Corporation", href: "/anonymous-corporation" },
        { title: "Wyoming Privacy", href: "/wyoming-privacy" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Private Incorporation", href: "/private-incorporation" },
        { title: "Offshore Privacy", href: "/offshore-privacy" },
      ],
      asset: [
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        { title: "Wyoming AP", href: "/wyoming-asset-protection" },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
        { title: "Real Estate AP", href: "/real-estate-asset-protection" },
      ],
      formation: [
        { title: "Wyoming LLC", href: "/wyoming-llc" },
        { title: "Wyoming Corporation", href: "/wyoming-corporation" },
        { title: "Shelf Companies", href: "/shelf-companies" },
        { title: "Series LLC", href: "/series-llc" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        { title: "WY Registered Agent", href: "/wyoming-registered-agent" },
        { title: "Registered Agent", href: "/registered-agent" },
        { title: "Annual Reports", href: "/annual-reports" },
        { title: "Corporate Minutes", href: "/corporate-minutes" },
        { title: "Virtual Office", href: "/virtual-office" },
        { title: "Domestication", href: "/domestication" },
      ],
    },
    packages: ["wyoming-gold", "wyoming-silver"],
    faqs: [
      {
        id: "wy-faq-1",
        question: "Why is Wyoming the best state for LLCs?",
        answer:
          "Wyoming offers the strongest charging order protection (including single-member LLCs), no state income tax, no public member disclosure, minimal annual fees ($62), and fast formation. It's the #1 recommendation for privacy and asset protection.",
        category: "formation",
      },
      {
        id: "wy-faq-2",
        question: "How much does it cost to form a Wyoming LLC?",
        answer:
          "Our Wyoming Gold LLC is $1,275 all-inclusive (formation + first year). Wyoming Silver is $875. Both include state filing fees, registered agent, and compliance services. Gold adds nominees and offshore storage.",
        category: "formation",
      },
      {
        id: "wy-faq-3",
        question: "Do I need to live in Wyoming?",
        answer:
          "No. You can form a Wyoming LLC regardless of where you live. If your LLC does business in your home state, you may need to foreign register there ($149 add-on).",
        category: "formation",
      },
      {
        id: "wy-faq-4",
        question: "What are Wyoming's annual requirements?",
        answer:
          "Wyoming requires an annual report filing ($62 for LLCs, $62 for corporations) and maintenance of a registered agent with a physical Wyoming address. Both are included in our package renewals. There is no franchise tax or state income tax.",
        category: "compliance",
      },
      {
        id: "wy-faq-5",
        question: "How long does Wyoming LLC formation take?",
        answer:
          "Standard formation takes 5-7 business days. Expedited 24-hour filing is available as an add-on ($150). Once filed, you receive your Articles of Organization, EIN, operating agreement, and corporate record book.",
        category: "formation",
      },
      {
        id: "wy-faq-6",
        question: "Can I operate in other states with a Wyoming LLC?",
        answer:
          "Yes. You can operate nationwide. If your LLC conducts business in another state, you may need to foreign register there. We offer foreign state registration as an add-on and handle all the filings.",
        category: "formation",
      },
    ],
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbreviation: "NV",
    subtitle:
      "Strong privacy statutes, no state income tax, and a dedicated business court system. Nevada has been a top choice for business formation for decades.",
    facts: [
      { label: "State Income Tax", value: "None" },
      { label: "Annual Report Fee", value: "$150+" },
      { label: "Business License", value: "$200/year" },
      { label: "Privacy Statutes", value: "Strong" },
      { label: "Business Court", value: "Dedicated" },
    ],
    advantages: [
      {
        icon: "EyeOff",
        title: "Nominee-Friendly Statutes",
        description:
          "Nevada has strong statutory support for nominee officers and directors on all filings. Our year-round nominees keep your name off every public record.",
      },
      {
        icon: "Building2",
        title: "Same-Day Filing in Nevada",
        description:
          "We are located near the Nevada Secretary of State and can hand-deliver filing documents for same-day processing — an advantage no remote-only company can match.",
      },
      {
        icon: "DollarSign",
        title: "No State Income Tax",
        description:
          "Nevada has no corporate income tax, no franchise tax, and no personal income tax. Favorable for business owners who live and operate in Nevada.",
      },
      {
        icon: "Scale",
        title: "Director Liability Protections",
        description:
          "Nevada's corporate statutes offer unique director and officer protections not available in most other states.",
      },
      {
        icon: "ShieldCheck",
        title: "Largest Shelf Company Inventory",
        description:
          "More aged Nevada entities available than any other state. Shelf companies from year 2000+ with clean histories and no prior liabilities.",
      },
      {
        icon: "Clock",
        title: "25 Years of NV Expertise",
        description:
          "Nevada-based since 2000. Local experts with direct relationships at the Nevada Secretary of State office.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "Nevada Privacy",
        description:
          "Nevada's strong confidentiality statutes combined with our nominee services provide robust business privacy.",
        links: [
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
          { label: "Private Incorporation", href: "/private-incorporation" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "Gold Package — from $1,800",
          href: "/gold?state=nevada",
        },
      },
      {
        pillar: "asset",
        title: "Nevada Asset Protection",
        description:
          "Leverage Nevada's strong charging order protection and established business court system for asset protection.",
        links: [
          {
            label: "Nevada Asset Protection",
            href: "/nevada-asset-protection",
          },
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          { label: "Real Estate AP", href: "/real-estate-asset-protection" },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "Gold Package — from $1,800",
          href: "/gold?state=nevada",
        },
      },
      {
        pillar: "formation",
        title: "Nevada Formation",
        description:
          "Full-service Nevada LLC and corporation formation. All state filing fees, business license, and registered agent included.",
        links: [
          { label: "Nevada LLC", href: "/nevada-llc" },
          { label: "Nevada Corporation", href: "/nevada-corporation" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "Silver Package — from $1,275",
          href: "/silver?state=nevada",
        },
      },
      {
        pillar: "compliance",
        title: "Nevada Compliance",
        description:
          "Registered agent, annual report filing, business license renewal, and corporate minutes for your Nevada entity.",
        links: [
          { label: "Registered Agent", href: "/registered-agent" },
          { label: "Annual Reports", href: "/annual-reports" },
          { label: "Virtual Office", href: "/virtual-office" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Anonymous Corporation", href: "/anonymous-corporation" },
        { title: "Nevada Privacy", href: "/nevada-privacy" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Private Incorporation", href: "/private-incorporation" },
        { title: "Offshore Privacy", href: "/offshore-privacy" },
      ],
      asset: [
        { title: "Nevada AP", href: "/nevada-asset-protection" },
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
        { title: "Real Estate AP", href: "/real-estate-asset-protection" },
      ],
      formation: [
        { title: "Nevada LLC", href: "/nevada-llc" },
        { title: "Nevada Corporation", href: "/nevada-corporation" },
        { title: "Shelf Companies", href: "/shelf-companies" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        { title: "NV Registered Agent", href: "/nevada-registered-agent" },
        { title: "Registered Agent", href: "/registered-agent" },
        { title: "Annual Reports", href: "/annual-reports" },
        { title: "Corporate Minutes", href: "/corporate-minutes" },
        { title: "Virtual Office", href: "/virtual-office" },
        { title: "Domestication", href: "/domestication" },
      ],
    },
    packages: ["nevada-gold", "nevada-silver", "nevada-bronze"],
    faqs: [
      {
        id: "nv-faq-1",
        question: "Why choose Nevada over Wyoming?",
        answer:
          "Nevada is ideal if you plan to physically operate in Nevada, value the dedicated business court, or prefer an established incorporation jurisdiction. Wyoming offers lower annual fees and stronger single-member LLC protection.",
        category: "formation",
      },
      {
        id: "nv-faq-2",
        question: "What are Nevada's annual costs?",
        answer:
          "Nevada has higher annual maintenance costs than Wyoming: $150+ for the annual list filing plus $200 for the business license. Our packages include these fees.",
        category: "compliance",
      },
      {
        id: "nv-faq-3",
        question: "Does Nevada have a business license requirement?",
        answer:
          "Yes. All Nevada entities must obtain and maintain a state business license ($200/year). This is included in all our Nevada packages.",
        category: "compliance",
      },
      {
        id: "nv-faq-4",
        question: "How long does Nevada LLC formation take?",
        answer:
          "Standard formation takes 5-10 business days. Same-day expedited filing is available because our office is near the Nevada Secretary of State — we hand-deliver documents. Expedited filing is $150.",
        category: "formation",
      },
      {
        id: "nv-faq-5",
        question: "Do I need to live in Nevada to form an entity there?",
        answer:
          "No. You can form a Nevada entity from anywhere. If you operate in your home state, you may need to foreign register there. Nevada is most cost-effective if you actually have a physical presence in the state.",
        category: "formation",
      },
      {
        id: "nv-faq-6",
        question: "Does Nevada have a franchise tax?",
        answer:
          "Nevada has no corporate income tax and no franchise tax. However, there is a Commerce Tax for businesses with over $4 million in Nevada gross revenue. Most small businesses fall well below this threshold.",
        category: "compliance",
      },
    ],
  },
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    subtitle:
      "Operating in California? Our privacy-first formation structure uses a Wyoming or Nevada nominee LLC with California foreign registration — maximum privacy with full California compliance.",
    facts: [
      { label: "Franchise Tax", value: "$800/year min" },
      { label: "Privacy Natively", value: "Limited" },
      { label: "Our Approach", value: "WY/NV Nominee + CA Foreign Reg" },
      { label: "Business Court", value: "Superior Court" },
    ],
    advantages: [
      {
        icon: "ShieldCheck",
        title: "Privacy Through Structure",
        description:
          "We form your entity in Wyoming or Nevada with full nominee services, then foreign register in California — your name stays off public filings.",
      },
      {
        icon: "Building2",
        title: "Full California Compliance",
        description:
          "Foreign registration ensures your entity can legally conduct business in California while maintaining privacy at the formation state level.",
      },
      {
        icon: "Users",
        title: "Year-Round Nominees",
        description:
          "Nominees are listed on the Wyoming/Nevada filing. California foreign registration shows only the entity name — not your personal information.",
      },
      {
        icon: "FileText",
        title: "All Filings Handled",
        description:
          "We manage both the formation state filings AND your California Statement of Information and franchise tax compliance.",
      },
      {
        icon: "Globe",
        title: "Offshore Record Storage",
        description:
          "Your corporate documents are stored outside U.S. jurisdiction, adding privacy protection beyond what California alone can offer.",
      },
      {
        icon: "DollarSign",
        title: "Transparent Pricing",
        description:
          "California Private LLC is $1,475 all-inclusive: formation, foreign registration, nominees, registered agent, and compliance.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "California Privacy",
        description:
          "California has limited native privacy protections. Our structure routes your formation through Wyoming or Nevada for full nominee coverage.",
        links: [
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
          { label: "Private Incorporation", href: "/private-incorporation" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "Gold Package — from $1,475",
          href: "/gold?state=california",
        },
      },
      {
        pillar: "asset",
        title: "California Asset Protection",
        description:
          "Protect California-based assets with a Wyoming LLC holding structure and proper foreign registration.",
        links: [
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          { label: "Real Estate AP", href: "/real-estate-asset-protection" },
          { label: "Investment Holding LLC", href: "/investment-holding-llc" },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "Gold Package — from $1,475",
          href: "/gold?state=california",
        },
      },
      {
        pillar: "formation",
        title: "California Formation",
        description:
          "Our California package handles both the out-of-state formation and the California foreign registration.",
        links: [
          { label: "Wyoming LLC", href: "/wyoming-llc" },
          { label: "Nevada LLC", href: "/nevada-llc" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "Gold Package — from $1,475",
          href: "/gold?state=california",
        },
      },
      {
        pillar: "compliance",
        title: "California Compliance",
        description:
          "Ongoing compliance for California-registered foreign entities: Statement of Information, franchise tax, and registered agent.",
        links: [
          { label: "Registered Agent", href: "/registered-agent" },
          { label: "Foreign Registration", href: "/foreign-registration" },
          { label: "Annual Reports", href: "/annual-reports" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Private Incorporation", href: "/private-incorporation" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Wyoming Privacy", href: "/wyoming-privacy" },
        { title: "Offshore Privacy", href: "/offshore-privacy" },
      ],
      asset: [
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        { title: "Real Estate AP", href: "/real-estate-asset-protection" },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
      ],
      formation: [
        { title: "Wyoming LLC", href: "/wyoming-llc" },
        { title: "Nevada LLC", href: "/nevada-llc" },
        { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        { title: "Registered Agent", href: "/registered-agent" },
        { title: "Foreign Registration", href: "/foreign-registration" },
        { title: "Annual Reports", href: "/annual-reports" },
        { title: "Tax Obligations", href: "/tax-obligations" },
      ],
    },
    packages: ["california-private"],
    faqs: [
      {
        id: "ca-faq-1",
        question: "Can I form a California LLC privately?",
        answer:
          "California itself requires public disclosure on the Statement of Information. Our solution: form in Wyoming or Nevada with full nominees, then foreign register in California. Your name stays off public filings.",
        category: "privacy",
      },
      {
        id: "ca-faq-2",
        question: "What is the $800 California franchise tax?",
        answer:
          "All LLCs doing business in California (including foreign-registered LLCs) must pay an $800/year minimum franchise tax to the California Franchise Tax Board. This is a state requirement we help you comply with.",
        category: "compliance",
      },
      {
        id: "ca-faq-3",
        question: "Why not just form a California LLC directly?",
        answer:
          "California requires public disclosure of managers and members on the Statement of Information. By forming in Wyoming with nominees and then foreign registering in California, your personal identity stays off all public filings while remaining fully compliant in California.",
        category: "privacy",
      },
      {
        id: "ca-faq-4",
        question: "What is California foreign registration and do I need it?",
        answer:
          "If your business operates in California (has employees, an office, or regularly transacts business there), you must file a foreign registration with the California Secretary of State. This lets your Wyoming or Nevada entity legally operate in California. We handle the entire filing.",
        category: "compliance",
      },
      {
        id: "ca-faq-5",
        question: "What does the California Private LLC package include?",
        answer:
          "Our California Private LLC ($1,475) includes: Wyoming formation with nominees, California foreign registration, registered agent in both states, EIN, operating agreement, corporate records, offshore record storage, and first-year compliance in both states.",
        category: "packages",
      },
      {
        id: "ca-faq-6",
        question: "What are the annual costs for a California Private LLC?",
        answer:
          "Annual renewal is $525 for the Wyoming entity (includes nominees and registered agent) plus the $800 California franchise tax. We handle both renewals. Total ongoing cost is approximately $1,325/year all-inclusive.",
        category: "compliance",
      },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    subtitle:
      "Doing business in Florida? Our privacy structure uses Wyoming or Nevada nominees with Florida foreign registration — maintaining anonymity while fully compliant in Florida.",
    facts: [
      { label: "State Income Tax", value: "None (personal)" },
      { label: "Annual Report Fee", value: "$138.75" },
      { label: "Privacy Natively", value: "Moderate" },
      { label: "Our Approach", value: "WY/NV Nominee + FL Foreign Reg" },
    ],
    advantages: [
      {
        icon: "ShieldCheck",
        title: "Privacy Through Structure",
        description:
          "Form in Wyoming or Nevada with nominees, then foreign register in Florida. Your personal information stays off all public filings.",
      },
      {
        icon: "DollarSign",
        title: "No Personal Income Tax",
        description:
          "Florida has no personal income tax, making it attractive for business owners who live and operate there.",
      },
      {
        icon: "Building2",
        title: "Full Florida Compliance",
        description:
          "Foreign registration with the Florida Division of Corporations ensures your entity can legally operate in Florida.",
      },
      {
        icon: "Users",
        title: "Year-Round Nominees",
        description:
          "Nominees remain on your Wyoming/Nevada filings year-round. Florida foreign registration does not expose your personal details.",
      },
      {
        icon: "Globe",
        title: "Offshore Record Storage",
        description:
          "Corporate documents stored outside U.S. jurisdiction for maximum privacy protection.",
      },
      {
        icon: "FileText",
        title: "All Filings Managed",
        description:
          "We handle both the formation state compliance and your Florida annual report filings.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "Florida Privacy",
        description:
          "Florida has moderate native privacy. Our nominee structure through Wyoming or Nevada ensures complete anonymity.",
        links: [
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
          { label: "Private Incorporation", href: "/private-incorporation" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "Gold Package — from $1,475",
          href: "/gold?state=florida",
        },
      },
      {
        pillar: "asset",
        title: "Florida Asset Protection",
        description:
          "Protect Florida-based business assets and real estate with a Wyoming LLC holding structure.",
        links: [
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          { label: "Real Estate AP", href: "/real-estate-asset-protection" },
          { label: "Investment Holding LLC", href: "/investment-holding-llc" },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "Gold Package — from $1,475",
          href: "/gold?state=florida",
        },
      },
      {
        pillar: "formation",
        title: "Florida Formation",
        description:
          "Our Florida package handles out-of-state formation plus Florida foreign registration — everything in one package.",
        links: [
          { label: "Wyoming LLC", href: "/wyoming-llc" },
          { label: "Nevada LLC", href: "/nevada-llc" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "Gold Package — from $1,475",
          href: "/gold?state=florida",
        },
      },
      {
        pillar: "compliance",
        title: "Florida Compliance",
        description:
          "Annual report filing, registered agent, and ongoing compliance for your Florida-registered foreign entity.",
        links: [
          { label: "Registered Agent", href: "/registered-agent" },
          { label: "Foreign Registration", href: "/foreign-registration" },
          { label: "Annual Reports", href: "/annual-reports" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Private Incorporation", href: "/private-incorporation" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Wyoming Privacy", href: "/wyoming-privacy" },
        { title: "Offshore Privacy", href: "/offshore-privacy" },
      ],
      asset: [
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        { title: "Real Estate AP", href: "/real-estate-asset-protection" },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
      ],
      formation: [
        { title: "Wyoming LLC", href: "/wyoming-llc" },
        { title: "Nevada LLC", href: "/nevada-llc" },
        { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        { title: "Registered Agent", href: "/registered-agent" },
        { title: "Foreign Registration", href: "/foreign-registration" },
        { title: "Annual Reports", href: "/annual-reports" },
        { title: "Tax Obligations", href: "/tax-obligations" },
      ],
    },
    packages: ["florida-private"],
    faqs: [
      {
        id: "fl-faq-1",
        question: "Can I form a private LLC in Florida?",
        answer:
          "Florida requires public disclosure of managers/members on its filings. Our solution: form in Wyoming or Nevada with full nominees, then foreign register in Florida. Your name stays off all public records.",
        category: "privacy",
      },
      {
        id: "fl-faq-2",
        question: "What are Florida's annual costs?",
        answer:
          "Florida charges $138.75 for the annual report filing. Combined with your formation state's annual fees, our Florida Private LLC renewal is $525/year all-inclusive.",
        category: "compliance",
      },
      {
        id: "fl-faq-3",
        question: "Why not just form directly in Florida?",
        answer:
          "Florida requires public disclosure of managers and members on annual report filings. By forming in Wyoming with nominees and then foreign registering in Florida, your personal identity stays off all public records while remaining fully compliant.",
        category: "privacy",
      },
      {
        id: "fl-faq-4",
        question: "What does the Florida Private LLC package include?",
        answer:
          "Our Florida Private LLC ($1,475) includes: Wyoming formation with year-round nominees, Florida foreign registration, registered agent in both states, EIN, operating agreement, corporate records, offshore record storage, and first-year compliance.",
        category: "packages",
      },
      {
        id: "fl-faq-5",
        question: "Do I need Florida foreign registration?",
        answer:
          "If your business operates in Florida (has employees, an office, or regularly transacts business there), yes. We handle the entire foreign registration filing. If you only hold assets in Florida without active business operations, foreign registration may not be required — contact us to discuss your situation.",
        category: "compliance",
      },
      {
        id: "fl-faq-6",
        question: "Is there a Florida franchise tax?",
        answer:
          "Florida imposes a corporate income tax (5.5%) on C-Corporations with income over $50,000, but LLCs taxed as partnerships or sole proprietorships are not subject to it. Florida has no personal income tax. Our team helps you understand the tax implications for your specific entity type.",
        category: "compliance",
      },
    ],
  },
];
