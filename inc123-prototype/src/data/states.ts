import type { StateHub } from "@/lib/types";

/* ═══════════════════════════════════════════════════════════════════════════
   STATE HUB CONTENT — Source of truth for /wyoming, /nevada, /california, /florida

   Content aligned with "Enchanced New Specs / Incorporate123_Wyoming_State_Hub_Page_Specification.md"
   and extrapolated to NV/CA/FL using the same 8-section structure.

   PENDING DAVID'S CONFIRMATION (Apr 20 meeting) — see
   DOCS/Meeting Preps/Meeting Prep Apr 20/06_State_Hub_Facts_Questions.md
     1. WY annual report fee: $50 (new spec) vs $62 (reality) → using $62
     2. NV annual cost: $500+/yr (new spec) vs $350 (reality) → using $350
     3. WY filing fee: $100 (confirmed)
     4. Tax Foundation ranking year count → citing generically without year count
     5. Chancery Court framing → "established 2023"
     6. WY formation timeline → 5–7 business days (preserving current data)
     7. NV Gold renewal → $525/yr (per packages.ts canonical source)

   After the Apr 20 meeting, search this file for "PENDING DAVID" comments
   and reconcile with David's confirmed numbers.
   ═══════════════════════════════════════════════════════════════════════════ */

export const stateHubs: StateHub[] = [
  /* ═══════════════════════════════════════════════════════════════════════
     WYOMING — Lead state hub. 70% of clients. Full spec compliance.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    slug: "wyoming",
    name: "Wyoming",
    abbreviation: "WY",
    subtitle:
      "The #1 state for LLC privacy, the lowest annual costs in the country, and the strongest single-member charging order protection. Trusted in Wyoming since 2000.",
    facts: [
      { label: "State Income Tax", value: "$0" },
      { label: "Annual Report", value: "$62/yr" }, // PENDING DAVID: spec says $50
      { label: "LLC Filing Fee", value: "$100" },
      { label: "Charging Order", value: "Sole Remedy" },
      { label: "Member Disclosure", value: "Not Required" },
    ],
    advantages: [
      {
        icon: "DollarSign",
        title: "No State Income Tax",
        description:
          "Wyoming imposes no personal or corporate income tax. Your entity's profits are not taxed at the state level — period. No franchise tax, no business license fee.",
      },
      {
        icon: "Wallet",
        title: "Lowest Annual Costs in the U.S.",
        description:
          "Wyoming's annual report fee is $62. Compare to Nevada's $350+/yr, Delaware's $300+/yr, or California's $800/yr minimum franchise tax. The math is straightforward.",
      },
      {
        icon: "ShieldCheck",
        title: "Strongest Single-Member LLC Protection",
        description:
          "Wyoming is the only state that extends sole-remedy charging order protection to single-member LLCs. Most states allow courts to order complete seizure of single-member LLCs.",
      },
      {
        icon: "EyeOff",
        title: "No Public Ownership Disclosure",
        description:
          "Wyoming does not require disclosure of LLC members or managers in Articles of Organization or annual reports. Your ownership is private at the state level from day one.",
      },
      {
        icon: "Scale",
        title: "Business-Friendly Chancery Court",
        description:
          "Wyoming's Chancery Court, established in 2023, handles complex business disputes with specialized expertise — similar to Delaware's Court of Chancery but without the franchise tax.",
      },
      {
        icon: "Trophy",
        title: "Tax Foundation #1 State",
        description:
          "The Tax Foundation consistently ranks Wyoming as the #1 state business tax climate in the United States — a position it has held year after year.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "Wyoming Privacy",
        description:
          "Keep your ownership off Wyoming public records with year-round nominee services and offshore records storage.",
        links: [
          { label: "Wyoming Privacy Guide", href: "/wyoming-privacy" },
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "Wyoming Gold — from $1,275",
          href: "/wyoming-gold",
        },
      },
      {
        pillar: "asset",
        title: "Wyoming Asset Protection",
        description:
          "Wyoming's sole-remedy charging order protection — the strongest single-member LLC protection in the country.",
        links: [
          {
            label: "Wyoming Asset Protection",
            href: "/wyoming-asset-protection",
          },
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          { label: "Investment Holding LLC", href: "/investment-holding-llc" },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "Wyoming Gold — from $1,275",
          href: "/wyoming-gold",
        },
      },
      {
        pillar: "formation",
        title: "Wyoming Formation",
        description:
          "Form a Wyoming LLC or Corporation with registered agent, EIN, operating agreement, and state fees included.",
        links: [
          { label: "Wyoming LLC", href: "/wyoming-llc" },
          { label: "Wyoming Corporation", href: "/wyoming-corporation" },
          { label: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "Wyoming Silver — from $875",
          href: "/wyoming-silver",
        },
      },
      {
        pillar: "compliance",
        title: "Wyoming Compliance",
        description:
          "Ongoing compliance for existing Wyoming entities: registered agent, annual reports, and corporate records maintenance.",
        links: [
          {
            label: "Wyoming Registered Agent",
            href: "/wyoming-registered-agent",
          },
          { label: "Annual Reports", href: "/annual-reports" },
          { label: "Domestication", href: "/domestication" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Wyoming Privacy", href: "/wyoming-privacy" },
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Anonymous Corporation", href: "/anonymous-corporation" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Best State for Privacy", href: "/best-state-for-privacy" },
        { title: "WY vs NV for Privacy", href: "/wyoming-vs-nevada-privacy" },
      ],
      asset: [
        {
          title: "Wyoming Asset Protection",
          href: "/wyoming-asset-protection",
        },
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
        {
          title: "Real Estate Asset Protection",
          href: "/real-estate-asset-protection",
        },
        { title: "Best State for AP", href: "/best-state-asset-protection" },
        {
          title: "WY vs NV for AP",
          href: "/wyoming-vs-nevada-asset-protection",
        },
      ],
      formation: [
        { title: "Wyoming LLC", href: "/wyoming-llc" },
        { title: "Wyoming Corporation", href: "/wyoming-corporation" },
        { title: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        { title: "Wyoming vs. Nevada", href: "/wyoming-vs-nevada" },
        { title: "Shelf Companies", href: "/shelf-companies" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        {
          title: "Wyoming Registered Agent",
          href: "/wyoming-registered-agent",
        },
        { title: "Annual Reports", href: "/annual-reports" },
        {
          title: "Foreign State Registration",
          href: "/foreign-state-registration",
        },
        { title: "Domestication", href: "/domestication" },
        { title: "Corporate Minutes", href: "/corporate-minutes" },
      ],
    },
    packages: ["wyoming-bronze", "wyoming-silver", "wyoming-gold"],
    comparison: {
      eyebrow: "Compare States",
      title: "Wyoming vs. Nevada — Quick Comparison",
      columns: [
        {
          id: "wyoming",
          title: "Wyoming",
          subtitle: "Recommended for most",
          badge: "★",
        },
        {
          id: "nevada",
          title: "Nevada",
          subtitle: "Strong alternative",
        },
      ],
      rows: [
        {
          label: "State income tax",
          values: { wyoming: "None", nevada: "None" },
        },
        {
          label: "Annual costs",
          values: { wyoming: "$62/yr", nevada: "$350+/yr" },
        },
        {
          label: "LLC member disclosure",
          values: { wyoming: "Not required", nevada: "Not required" },
        },
        {
          label: "Single-member LLC protection",
          values: { wyoming: "Sole remedy", nevada: "Court discretion" },
        },
        {
          label: "Corporate veil strength",
          values: { wyoming: "Standard", nevada: "NRS 86.401 (strong)" },
        },
        {
          label: "Gold package (formation)",
          values: { wyoming: "$1,275", nevada: "$1,800" },
        },
      ],
      highlightColumnId: "wyoming",
      summary:
        "Wyoming is the better choice for most clients — lower annual costs, stronger single-member protection, and the same tax benefits. Nevada excels for multi-member entities, corporations, and clients who value the deepest case law history.",
      ctas: [
        {
          label: "Full WY vs NV for Privacy",
          href: "/wyoming-vs-nevada-privacy",
        },
        { label: "Full WY vs NV for Formation", href: "/wyoming-vs-nevada" },
        {
          label: "Full WY vs NV for Asset Protection",
          href: "/wyoming-vs-nevada-asset-protection",
        },
        { label: "Explore the Nevada Hub", href: "/nevada" },
      ],
    },
    faqs: [
      {
        id: "wy-faq-cost",
        question: "How much does it cost to form an LLC in Wyoming?",
        answer:
          "Wyoming's state filing fee is $100 for both LLCs and corporations. Our all-inclusive packages start at $625 (Bronze) and include the state fee, registered agent, operating agreement, and document preparation. Silver at $875 adds EIN, virtual office, and mail forwarding. Gold at $1,275 adds year-round nominees and offshore records storage. No hidden fees — what you see is what you pay.",
        category: "formation",
      },
      {
        id: "wy-faq-residency",
        question: "Do I need to live in Wyoming to form an entity there?",
        answer:
          "No. Any U.S. or international resident can form a business entity in Wyoming. Your registered agent (included in every package) provides the required in-state address. You do not need to visit Wyoming, maintain an office there, or have any physical presence in the state.",
        category: "formation",
      },
      {
        id: "wy-faq-annual",
        question:
          "What are the ongoing annual requirements for a Wyoming entity?",
        answer:
          "Wyoming requires an annual report filing and a $62 state fee. Gold renewal ($525/yr) covers the annual report, state fee, registered agent, nominee maintenance, and offshore records — all-inclusive. Silver renewal ($325/yr) covers the report, state fee, and registered agent. Bronze renewal is $225/yr. There is no business license fee and no state income tax filing.",
        category: "compliance",
      },
      {
        id: "wy-faq-timeline",
        question: "How long does Wyoming formation take?",
        answer:
          "Standard filing with the Wyoming Secretary of State takes 5–7 business days. Your complete document package (filed articles, operating agreement, EIN, banking resolutions) is delivered within 5–7 business days of your order. Expedited 24-hour filing is available as an add-on ($150).",
        category: "formation",
      },
      {
        id: "wy-faq-vs-nevada",
        question: "Why do so many people choose Wyoming over Nevada?",
        answer:
          "Three primary reasons. First, annual costs: Wyoming is $62/yr vs. Nevada's $350+/yr (annual list + business license). Second, single-member LLC protection: Wyoming is the only state with sole-remedy charging order protection for single-member LLCs. Third, member privacy: Wyoming does not require disclosure of LLC members or managers in any state filing.",
        category: "formation",
      },
      {
        id: "wy-faq-chancery",
        question: "What is the Wyoming Chancery Court?",
        answer:
          "Established in 2023, the Wyoming Chancery Court is a specialized business court that handles complex commercial disputes — similar to Delaware's well-known Court of Chancery. It provides expert judicial attention to business matters without the delays of general-jurisdiction courts, further strengthening Wyoming's position as a premier business formation state.",
        category: "formation",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════════════
     NEVADA — Strong alternative to Wyoming. Full 3-tier lineup.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    slug: "nevada",
    name: "Nevada",
    abbreviation: "NV",
    subtitle:
      "Strong privacy statutes, no state income tax, and a dedicated business court system. Nevada has been a top choice for business formation for decades — especially for multi-member entities and corporations.",
    facts: [
      { label: "State Income Tax", value: "$0" },
      { label: "Annual List", value: "$150" },
      { label: "Business License", value: "$200/yr" }, // PENDING DAVID: spec says $500 combined
      { label: "Corporate Veil", value: "NRS 86.401" },
      { label: "Member Disclosure", value: "Not Required" },
    ],
    advantages: [
      {
        icon: "DollarSign",
        title: "No State Income Tax",
        description:
          "Nevada has no corporate income tax, no franchise tax, and no personal income tax. Favorable for business owners who live and operate in Nevada.",
      },
      {
        icon: "Scale",
        title: "NRS 86.401 Corporate Veil Strength",
        description:
          "Nevada's corporate statutes offer unique director and officer liability protections and one of the strongest corporate veils in the country — backed by decades of case law.",
      },
      {
        icon: "EyeOff",
        title: "Nominee-Friendly Statutes",
        description:
          "Nevada has strong statutory support for nominee officers and directors on all filings. Your name can stay off every public record with year-round nominees.",
      },
      {
        icon: "Building2",
        title: "Dedicated Business Court",
        description:
          "Nevada's Eighth Judicial District Business Court handles complex commercial disputes with specialized expertise — decades of case law establish predictable outcomes.",
      },
      {
        icon: "Users",
        title: "Strongest for Multi-Member LLCs",
        description:
          "Nevada's LLC statutes have robust charging order protection for multi-member entities and established case law supporting corporate formalities.",
      },
      {
        icon: "Trophy",
        title: "Largest Shelf Company Inventory",
        description:
          "More aged Nevada entities available than any other state. Shelf companies from year 2000+ with clean histories — for clients who need established entity age.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "Nevada Privacy",
        description:
          "Nevada's confidentiality statutes combined with our nominee services provide robust business privacy for formed entities.",
        links: [
          { label: "Nevada Privacy Guide", href: "/nevada-privacy" },
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "Nevada Gold — from $1,800",
          href: "/nevada-gold",
        },
      },
      {
        pillar: "asset",
        title: "Nevada Asset Protection",
        description:
          "Leverage Nevada's NRS 86.401 corporate veil and strong multi-member LLC charging order protection.",
        links: [
          {
            label: "Nevada Asset Protection",
            href: "/nevada-asset-protection",
          },
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          {
            label: "Real Estate Asset Protection",
            href: "/real-estate-asset-protection",
          },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "Nevada Gold — from $1,800",
          href: "/nevada-gold",
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
          { label: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "Nevada Silver — from $1,275",
          href: "/nevada-silver",
        },
      },
      {
        pillar: "compliance",
        title: "Nevada Compliance",
        description:
          "Registered agent, annual list, business license renewal, and corporate records for your Nevada entity.",
        links: [
          {
            label: "Nevada Registered Agent",
            href: "/nevada-registered-agent",
          },
          { label: "Annual Reports", href: "/annual-reports" },
          { label: "Domestication", href: "/domestication" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Nevada Privacy", href: "/nevada-privacy" },
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Anonymous Corporation", href: "/anonymous-corporation" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Best State for Privacy", href: "/best-state-for-privacy" },
        { title: "WY vs NV for Privacy", href: "/wyoming-vs-nevada-privacy" },
      ],
      asset: [
        { title: "Nevada Asset Protection", href: "/nevada-asset-protection" },
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
        {
          title: "Real Estate Asset Protection",
          href: "/real-estate-asset-protection",
        },
        { title: "Best State for AP", href: "/best-state-asset-protection" },
        {
          title: "WY vs NV for AP",
          href: "/wyoming-vs-nevada-asset-protection",
        },
      ],
      formation: [
        { title: "Nevada LLC", href: "/nevada-llc" },
        { title: "Nevada Corporation", href: "/nevada-corporation" },
        { title: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        { title: "Wyoming vs. Nevada", href: "/wyoming-vs-nevada" },
        { title: "Shelf Companies", href: "/shelf-companies" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        { title: "Nevada Registered Agent", href: "/nevada-registered-agent" },
        { title: "Annual Reports", href: "/annual-reports" },
        {
          title: "Foreign State Registration",
          href: "/foreign-state-registration",
        },
        { title: "Domestication", href: "/domestication" },
        { title: "Corporate Minutes", href: "/corporate-minutes" },
      ],
    },
    packages: ["nevada-bronze", "nevada-silver", "nevada-gold"],
    comparison: {
      eyebrow: "Compare States",
      title: "Nevada vs. Wyoming — Quick Comparison",
      columns: [
        {
          id: "nevada",
          title: "Nevada",
          subtitle: "Strong for multi-member",
          badge: "★",
        },
        {
          id: "wyoming",
          title: "Wyoming",
          subtitle: "Lower annual cost",
        },
      ],
      rows: [
        {
          label: "State income tax",
          values: { nevada: "None", wyoming: "None" },
        },
        {
          label: "Annual costs",
          values: { nevada: "$350+/yr", wyoming: "$62/yr" },
        },
        {
          label: "Business license required",
          values: { nevada: "Yes ($200/yr)", wyoming: "No" },
        },
        {
          label: "Single-member LLC protection",
          values: { nevada: "Court discretion", wyoming: "Sole remedy" },
        },
        {
          label: "Corporate veil strength",
          values: { nevada: "NRS 86.401 (strong)", wyoming: "Standard" },
        },
        {
          label: "Gold package (formation)",
          values: { nevada: "$1,800", wyoming: "$1,275" },
        },
      ],
      highlightColumnId: "nevada",
      summary:
        "Nevada is the better choice when you need the strongest corporate veil, a dedicated business court, or have an actual Nevada presence. Wyoming wins on annual cost and single-member LLC protection. For most small businesses forming remotely, Wyoming is the cost-effective default.",
      ctas: [
        {
          label: "Full WY vs NV for Privacy",
          href: "/wyoming-vs-nevada-privacy",
        },
        { label: "Full WY vs NV for Formation", href: "/wyoming-vs-nevada" },
        {
          label: "Full WY vs NV for Asset Protection",
          href: "/wyoming-vs-nevada-asset-protection",
        },
        { label: "Explore the Wyoming Hub", href: "/wyoming" },
      ],
    },
    faqs: [
      {
        id: "nv-faq-vs-wy",
        question: "Why choose Nevada over Wyoming?",
        answer:
          "Nevada is the right choice when you plan to physically operate in Nevada, value the dedicated business court, have multi-member entities, or need the strongest corporate veil (NRS 86.401). Wyoming offers lower annual fees and stronger single-member LLC protection. For most remote-formed small businesses, Wyoming is more cost-effective.",
        category: "formation",
      },
      {
        id: "nv-faq-annual",
        question: "What are Nevada's annual costs?",
        answer:
          "Nevada has higher annual maintenance costs than Wyoming: $150 for the annual list filing plus $200 for the state business license. Our Nevada packages include these fees in the renewal. Gold renewal is $525/yr, Silver is $325/yr, Bronze is $225/yr — all fees bundled.",
        category: "compliance",
      },
      {
        id: "nv-faq-license",
        question: "Does Nevada have a business license requirement?",
        answer:
          "Yes. All Nevada entities must obtain and maintain a state business license ($200/year). This is included in all our Nevada packages. LLCs and corporations both pay the same license fee, and there is no separate county business license required at the state level.",
        category: "compliance",
      },
      {
        id: "nv-faq-timeline",
        question: "How long does Nevada LLC formation take?",
        answer:
          "Standard formation takes 5–10 business days. Same-day expedited filing is available because our office is near the Nevada Secretary of State — we hand-deliver documents. Expedited filing is $150.",
        category: "formation",
      },
      {
        id: "nv-faq-commerce",
        question: "Does Nevada have a franchise tax or Commerce Tax?",
        answer:
          "Nevada has no corporate income tax and no franchise tax. There is a Commerce Tax for businesses with over $4 million in Nevada gross revenue, but most small businesses fall well below this threshold. LLCs, corporations, and sole proprietorships below $4M gross revenue have no Commerce Tax filing obligation.",
        category: "compliance",
      },
      {
        id: "nv-faq-veil",
        question: "What is NRS 86.401 and why does it matter?",
        answer:
          "NRS 86.401 is Nevada's statute establishing the corporate veil standard for LLCs. Combined with NRS 78.138 for corporations, Nevada has some of the strongest statutory protections against personal liability in the country. Courts are limited in when they can pierce the corporate veil, backed by decades of case law — a key reason Nevada remains a top choice for high-liability businesses.",
        category: "asset-protection",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════════════
     CALIFORNIA — Problem + solution framing. WY Gold + CA foreign reg.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    subtitle:
      "Operating in California? Our privacy-first structure uses a Wyoming LLC with year-round nominees, then foreign registers in California — maximum privacy with full California compliance.",
    facts: [
      { label: "Franchise Tax", value: "$800/yr min" },
      { label: "Native Privacy", value: "None" },
      { label: "Our Approach", value: "WY Gold + Foreign Reg" },
      { label: "CA Private Package", value: "$1,475" },
      { label: "Annual Renewal", value: "$525 + $800 tax" },
    ],
    advantages: [
      {
        icon: "AlertTriangle",
        title: "The California Privacy Problem",
        description:
          "California's Statement of Information publicly discloses managers and members. Direct formation in California means your name appears on searchable state records — with no way to opt out.",
      },
      {
        icon: "ShieldCheck",
        title: "Privacy Through Structure",
        description:
          "We form your entity in Wyoming with full year-round nominees, then foreign register in California. Nominees are listed on Wyoming filings; California foreign registration shows only the entity name — not your personal information.",
      },
      {
        icon: "Building2",
        title: "Full California Compliance",
        description:
          "Foreign registration with the California Secretary of State ensures your entity can legally conduct business in California while maintaining privacy at the formation state level. All Statement of Information filings handled.",
      },
      {
        icon: "FileText",
        title: "Both States Managed",
        description:
          "We manage both the Wyoming filings AND your California Statement of Information and franchise tax compliance. One package, one annual renewal, two states fully handled.",
      },
      {
        icon: "Globe",
        title: "Offshore Record Storage",
        description:
          "Your corporate documents are stored outside U.S. jurisdiction, adding a privacy layer beyond what California alone can offer. Records accessible to you, shielded from California discovery.",
      },
      {
        icon: "DollarSign",
        title: "All-Inclusive Pricing",
        description:
          "California Private LLC is $1,475 all-inclusive: Wyoming formation, California foreign registration, year-round nominees, registered agents in both states, EIN, and first-year compliance everywhere.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "California Privacy",
        description:
          "California has zero native privacy protections. Our structure routes formation through Wyoming for full nominee coverage, then foreign registers in California.",
        links: [
          { label: "Wyoming Privacy Guide", href: "/wyoming-privacy" },
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "California Private — $1,475",
          href: "/california-private",
        },
      },
      {
        pillar: "asset",
        title: "California Asset Protection",
        description:
          "Protect California-based assets with a Wyoming LLC holding structure and proper foreign registration — separating the formation state from the operating state.",
        links: [
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          {
            label: "Real Estate Asset Protection",
            href: "/real-estate-asset-protection",
          },
          { label: "Investment Holding LLC", href: "/investment-holding-llc" },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "California Private — $1,475",
          href: "/california-private",
        },
      },
      {
        pillar: "formation",
        title: "California Formation",
        description:
          "Our California Private package handles both Wyoming formation and California foreign registration in a single package.",
        links: [
          { label: "Wyoming LLC", href: "/wyoming-llc" },
          {
            label: "Foreign State Registration",
            href: "/foreign-state-registration",
          },
          { label: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "California Private — $1,475",
          href: "/california-private",
        },
      },
      {
        pillar: "compliance",
        title: "California Compliance",
        description:
          "Ongoing compliance for California-registered foreign entities: Statement of Information, $800 franchise tax, and registered agent.",
        links: [
          {
            label: "California Registered Agent",
            href: "/california-registered-agent",
          },
          {
            label: "Foreign State Registration",
            href: "/foreign-state-registration",
          },
          { label: "Annual Reports", href: "/annual-reports" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Wyoming Privacy", href: "/wyoming-privacy" },
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Best State for Privacy", href: "/best-state-for-privacy" },
      ],
      asset: [
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        {
          title: "Real Estate Asset Protection",
          href: "/real-estate-asset-protection",
        },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
        {
          title: "Wyoming Asset Protection",
          href: "/wyoming-asset-protection",
        },
      ],
      formation: [
        { title: "Wyoming LLC", href: "/wyoming-llc" },
        {
          title: "Foreign State Registration",
          href: "/foreign-state-registration",
        },
        { title: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        {
          title: "California Registered Agent",
          href: "/california-registered-agent",
        },
        {
          title: "Foreign State Registration",
          href: "/foreign-state-registration",
        },
        { title: "Annual Reports", href: "/annual-reports" },
        { title: "Corporate Minutes", href: "/corporate-minutes" },
      ],
    },
    packages: ["california-private"],
    comparison: {
      eyebrow: "Direct vs. Private Structure",
      title: "Direct California LLC vs. Our California Private Structure",
      columns: [
        {
          id: "direct",
          title: "Direct CA LLC",
          subtitle: "File directly with CA",
        },
        {
          id: "private",
          title: "CA Private Structure",
          subtitle: "WY Gold + CA foreign reg",
          badge: "Recommended",
        },
      ],
      rows: [
        {
          label: "Member/manager disclosed publicly",
          values: {
            direct: "Yes — searchable",
            private: "No — nominees listed",
          },
        },
        {
          label: "Home address on public record",
          values: { direct: "Yes", private: "No" },
        },
        {
          label: "California franchise tax",
          values: { direct: "$800/yr", private: "$800/yr" },
        },
        {
          label: "Annual renewal cost",
          values: { direct: "$820 + agent", private: "$525 + $800 tax" },
        },
        {
          label: "Charging order protection",
          values: {
            direct: "Weak (CA standard)",
            private: "Sole remedy (WY law)",
          },
        },
        {
          label: "Offshore records storage",
          values: { direct: "Not available", private: "Included" },
        },
      ],
      highlightColumnId: "private",
      summary:
        "California's public disclosure requirements mean direct formation exposes your identity. The CA Private Structure — Wyoming formation with nominees, then California foreign registration — delivers the same California compliance at the same franchise tax cost, with full privacy and stronger asset protection.",
      ctas: [
        { label: "Why Wyoming for Privacy", href: "/wyoming-privacy" },
        {
          label: "How Foreign Registration Works",
          href: "/foreign-state-registration",
        },
        { label: "Explore the Wyoming Hub", href: "/wyoming" },
      ],
    },
    faqs: [
      {
        id: "ca-faq-private",
        question: "Can I form a California LLC privately?",
        answer:
          "Not directly. California's Statement of Information requires public disclosure of managers and members. Our solution: form in Wyoming with full year-round nominees, then foreign register in California. Your name stays off all public filings at both the Wyoming and California levels.",
        category: "privacy",
      },
      {
        id: "ca-faq-franchise-tax",
        question: "What is the $800 California franchise tax?",
        answer:
          "All LLCs doing business in California (including foreign-registered LLCs from Wyoming or Nevada) must pay an $800/year minimum franchise tax to the California Franchise Tax Board. This is unavoidable if you operate in California — our package handles the filings and keeps you compliant.",
        category: "compliance",
      },
      {
        id: "ca-faq-why-not-direct",
        question: "Why not just form a California LLC directly?",
        answer:
          "California requires public disclosure of managers and members on the Statement of Information. There is no way to form a private LLC directly in California. By forming in Wyoming with nominees and then foreign registering in California, your personal identity stays off all public filings while you remain fully compliant in California.",
        category: "privacy",
      },
      {
        id: "ca-faq-foreign-reg",
        question: "What is California foreign registration and do I need it?",
        answer:
          "If your business operates in California (has employees, an office, or regularly transacts business there), you must file a foreign registration with the California Secretary of State. This lets your Wyoming entity legally operate in California. We handle the entire filing — it's included in the California Private package.",
        category: "compliance",
      },
      {
        id: "ca-faq-package",
        question: "What does the California Private LLC package include?",
        answer:
          "California Private ($1,475) includes: Wyoming formation with year-round nominees, California foreign registration, registered agent in both Wyoming and California, EIN, operating agreement, corporate records, offshore record storage, and first-year compliance in both states.",
        category: "packages",
      },
      {
        id: "ca-faq-annual",
        question: "What are the annual costs for a California Private LLC?",
        answer:
          "Annual renewal is $525 for the Wyoming entity (includes nominees and registered agent in both states) plus the $800 California franchise tax paid to the California FTB. Total ongoing cost is approximately $1,325/year, all managed by us.",
        category: "compliance",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════════════
     FLORIDA — Problem + solution framing. WY Gold + FL foreign reg.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    subtitle:
      "Doing business in Florida? Our privacy structure uses a Wyoming LLC with year-round nominees, then foreign registers in Florida — maintaining anonymity while fully compliant in Florida.",
    facts: [
      { label: "Personal Income Tax", value: "None" },
      { label: "Annual Report", value: "$138.75" },
      { label: "Native Privacy", value: "Limited" },
      { label: "Our Approach", value: "WY Gold + Foreign Reg" },
      { label: "FL Private Package", value: "$1,475" },
    ],
    advantages: [
      {
        icon: "AlertTriangle",
        title: "The Florida Privacy Problem",
        description:
          "Florida's annual report publicly discloses officers, directors, and managers. Direct Florida formation means your name appears on searchable state records — annually, every renewal.",
      },
      {
        icon: "ShieldCheck",
        title: "Privacy Through Structure",
        description:
          "Form in Wyoming with year-round nominees, then foreign register in Florida. Your personal information stays off all public filings while your entity remains legally compliant in Florida.",
      },
      {
        icon: "DollarSign",
        title: "No Personal Income Tax",
        description:
          "Florida has no personal income tax, making it attractive for business owners who live and operate there. Our structure preserves this benefit while shielding your identity.",
      },
      {
        icon: "Building2",
        title: "Full Florida Compliance",
        description:
          "Foreign registration with the Florida Division of Corporations ensures your Wyoming entity can legally operate in Florida. We handle the annual report filing and all compliance.",
      },
      {
        icon: "Globe",
        title: "Offshore Record Storage",
        description:
          "Corporate documents stored outside U.S. jurisdiction for maximum privacy protection — an additional layer Florida alone cannot offer.",
      },
      {
        icon: "FileText",
        title: "All Filings Managed",
        description:
          "Florida Private LLC is $1,475 all-inclusive: Wyoming formation with nominees, Florida foreign registration, registered agents in both states, EIN, and first-year compliance.",
      },
    ],
    intentRoutes: [
      {
        pillar: "privacy",
        title: "Florida Privacy",
        description:
          "Florida has limited native privacy. Our nominee structure through Wyoming ensures complete anonymity on all public filings.",
        links: [
          { label: "Wyoming Privacy Guide", href: "/wyoming-privacy" },
          { label: "Anonymous LLC", href: "/anonymous-llc" },
          { label: "Nominee Services", href: "/nominee-services" },
        ],
        cta: { label: "Explore Privacy", href: "/privacy" },
        packageLink: {
          label: "Florida Private — $1,475",
          href: "/florida-private",
        },
      },
      {
        pillar: "asset",
        title: "Florida Asset Protection",
        description:
          "Protect Florida-based business assets and real estate with a Wyoming LLC holding structure — separating the operating state from the asset-holding state.",
        links: [
          {
            label: "Charging Order Protection",
            href: "/charging-order-protection",
          },
          {
            label: "Real Estate Asset Protection",
            href: "/real-estate-asset-protection",
          },
          { label: "Investment Holding LLC", href: "/investment-holding-llc" },
        ],
        cta: { label: "Explore Asset Protection", href: "/asset-protection" },
        packageLink: {
          label: "Florida Private — $1,475",
          href: "/florida-private",
        },
      },
      {
        pillar: "formation",
        title: "Florida Formation",
        description:
          "Our Florida Private package handles Wyoming formation plus Florida foreign registration — everything in one package.",
        links: [
          { label: "Wyoming LLC", href: "/wyoming-llc" },
          {
            label: "Foreign State Registration",
            href: "/foreign-state-registration",
          },
          { label: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        ],
        cta: { label: "Explore Formation", href: "/formation" },
        packageLink: {
          label: "Florida Private — $1,475",
          href: "/florida-private",
        },
      },
      {
        pillar: "compliance",
        title: "Florida Compliance",
        description:
          "Annual report filing, registered agent, and ongoing compliance for your Florida-registered foreign entity.",
        links: [
          {
            label: "Florida Registered Agent",
            href: "/florida-registered-agent",
          },
          {
            label: "Foreign State Registration",
            href: "/foreign-state-registration",
          },
          { label: "Annual Reports", href: "/annual-reports" },
        ],
        cta: { label: "Explore Compliance", href: "/compliance" },
      },
    ],
    contentMap: {
      privacy: [
        { title: "Wyoming Privacy", href: "/wyoming-privacy" },
        { title: "Anonymous LLC", href: "/anonymous-llc" },
        { title: "Nominee Services", href: "/nominee-services" },
        { title: "Best State for Privacy", href: "/best-state-for-privacy" },
      ],
      asset: [
        {
          title: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        {
          title: "Real Estate Asset Protection",
          href: "/real-estate-asset-protection",
        },
        { title: "Investment Holding LLC", href: "/investment-holding-llc" },
        {
          title: "Wyoming Asset Protection",
          href: "/wyoming-asset-protection",
        },
      ],
      formation: [
        { title: "Wyoming LLC", href: "/wyoming-llc" },
        {
          title: "Foreign State Registration",
          href: "/foreign-state-registration",
        },
        { title: "LLC vs. Corporation", href: "/llc-vs-corporation" },
        { title: "Entity Tax Guide", href: "/entity-tax-guide" },
      ],
      compliance: [
        {
          title: "Florida Registered Agent",
          href: "/florida-registered-agent",
        },
        {
          title: "Foreign State Registration",
          href: "/foreign-state-registration",
        },
        { title: "Annual Reports", href: "/annual-reports" },
        { title: "Corporate Minutes", href: "/corporate-minutes" },
      ],
    },
    packages: ["florida-private"],
    comparison: {
      eyebrow: "Direct vs. Private Structure",
      title: "Direct Florida LLC vs. Our Florida Private Structure",
      columns: [
        {
          id: "direct",
          title: "Direct FL LLC",
          subtitle: "File directly with FL",
        },
        {
          id: "private",
          title: "FL Private Structure",
          subtitle: "WY Gold + FL foreign reg",
          badge: "Recommended",
        },
      ],
      rows: [
        {
          label: "Officers/managers disclosed publicly",
          values: { direct: "Yes — annually", private: "No — nominees listed" },
        },
        {
          label: "Home address on public record",
          values: { direct: "Yes", private: "No" },
        },
        {
          label: "Annual report filing",
          values: { direct: "$138.75/yr", private: "$138.75/yr" },
        },
        {
          label: "Annual renewal cost",
          values: { direct: "$138.75 + agent", private: "$525 all-inclusive" },
        },
        {
          label: "Charging order protection",
          values: {
            direct: "Standard (FL law)",
            private: "Sole remedy (WY law)",
          },
        },
        {
          label: "Offshore records storage",
          values: { direct: "Not available", private: "Included" },
        },
      ],
      highlightColumnId: "private",
      summary:
        "Florida's annual reports expose officers and managers publicly every year. The FL Private Structure — Wyoming formation with nominees, then Florida foreign registration — keeps you compliant in Florida while your identity stays off public records, with stronger charging order protection under Wyoming law.",
      ctas: [
        { label: "Why Wyoming for Privacy", href: "/wyoming-privacy" },
        {
          label: "How Foreign Registration Works",
          href: "/foreign-state-registration",
        },
        { label: "Explore the Wyoming Hub", href: "/wyoming" },
      ],
    },
    faqs: [
      {
        id: "fl-faq-private",
        question: "Can I form a private LLC in Florida?",
        answer:
          "Not directly. Florida requires public disclosure of officers, directors, and managers on annual report filings — updated every year. Our solution: form in Wyoming with full year-round nominees, then foreign register in Florida. Your name stays off all public records at both state levels.",
        category: "privacy",
      },
      {
        id: "fl-faq-annual",
        question: "What are Florida's annual costs?",
        answer:
          "Florida charges $138.75 for the annual report filing. Combined with Wyoming's $62 annual fee, our Florida Private LLC renewal is $525/year all-inclusive — covering both state filings, nominees, registered agents, and offshore records.",
        category: "compliance",
      },
      {
        id: "fl-faq-why-not-direct",
        question: "Why not just form directly in Florida?",
        answer:
          "Florida's annual report filings publicly disclose managers, officers, and directors every year. Direct formation means your identity is refreshed on public records annually. By forming in Wyoming with nominees and then foreign registering in Florida, your personal identity stays off all public records while remaining fully compliant.",
        category: "privacy",
      },
      {
        id: "fl-faq-package",
        question: "What does the Florida Private LLC package include?",
        answer:
          "Florida Private ($1,475) includes: Wyoming formation with year-round nominees, Florida foreign registration, registered agent in both Wyoming and Florida, EIN, operating agreement, corporate records, offshore record storage, and first-year compliance in both states.",
        category: "packages",
      },
      {
        id: "fl-faq-foreign-reg",
        question: "Do I need Florida foreign registration?",
        answer:
          "If your business operates in Florida (has employees, an office, or regularly transacts business there), yes. We handle the entire foreign registration filing — it's included in the Florida Private package. If you only hold passive assets in Florida without active business operations, foreign registration may not be required — contact us to discuss your situation.",
        category: "compliance",
      },
      {
        id: "fl-faq-franchise",
        question: "Is there a Florida franchise tax?",
        answer:
          "Florida imposes a corporate income tax (5.5%) on C-Corporations with income over $50,000, but LLCs taxed as partnerships or sole proprietorships are not subject to it. Florida has no personal income tax. Our team helps you understand the tax implications for your specific entity type during onboarding.",
        category: "compliance",
      },
    ],
  },
];
