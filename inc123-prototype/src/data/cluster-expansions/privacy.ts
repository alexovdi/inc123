import type { ClusterContent } from "@/lib/types";

/**
 * PRIVACY pillar cluster expansions.
 *
 * - anonymous-llc: enriched with bullets, keyPoints, pullQuote, suggestions
 * - private-incorporation: expanded to 3 sections, 3 FAQs
 * - offshore-privacy: expanded to 3 sections, 3 FAQs
 * - california-private-incorporation: NEW
 * - florida-private-incorporation: NEW
 */

export const PRIVACY_EXPANSIONS: ClusterContent[] = [
  // ==================== 1. ANONYMOUS LLC (enriched) ====================
  {
    slug: "anonymous-llc",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Anonymous LLC Formation",
    description:
      "Form an LLC with no public ties to your name. Wyoming and Nevada allow formation without disclosing members — combined with our nominee services, your identity is fully protected.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is an Anonymous LLC?",
        content:
          "An anonymous LLC is a limited liability company formed in a state that does not require public disclosure of its members or managers. Wyoming and Nevada are the two states with the strongest anonymity protections — neither requires member names on any publicly filed document. When combined with our year-round nominee services, your personal information never appears on any state filing, at formation or any time afterward.",
        extendedContent:
          "This is fundamentally different from states like California, New York, or Texas, which require disclosure of members, managers, or organizers on public filings. In those states, even a carefully structured entity will eventually expose beneficial ownership — the annual report, statement of information, or franchise tax filing demands names that become public record. Wyoming and Nevada were both designed from the statute level to prevent this forced disclosure.",
        bullets: [
          "No member names on Articles of Organization",
          "No manager names on annual reports",
          "No beneficial owner disclosure to the state",
          "Nominee services extend privacy to every public filing",
          "Offshore records store the operating agreement outside U.S. reach",
        ],
      },
      {
        id: "how-it-works",
        type: "text",
        title: "How Anonymous LLC Formation Works",
        content:
          "We file your Articles of Organization with the state using our nominee directors and officers — their names appear on the public record, not yours. Your operating agreement (a private document) identifies you as the actual member/owner. Combined with offshore record storage, even the operating agreement is held outside U.S. jurisdiction. The result: no public database, state filing, or domestic document connects your name to the entity.",
        keyPoints: [
          {
            title: "Nominee Formation",
            description:
              "Professional nominees sign the Articles of Organization. Their names are what the state publishes.",
            icon: "UserCheck",
          },
          {
            title: "Private Operating Agreement",
            description:
              "A separate private document names you as the beneficial owner with full authority over the entity.",
            icon: "FileText",
          },
          {
            title: "Offshore Storage",
            description:
              "The operating agreement is maintained by our offshore records custodian, outside U.S. subpoena reach.",
            icon: "Globe",
          },
        ],
      },
      {
        id: "who-benefits",
        type: "audience",
        title: "Who Benefits from Anonymous LLCs?",
        content:
          "Anonymous LLCs serve a wide range of legitimate business purposes:",
        items: [
          {
            title: "Real Estate Investors",
            description:
              "Protect property ownership information from public records. Tenants and opposing parties cannot discover your personal assets or other holdings.",
            icon: "Home",
          },
          {
            title: "High-Net-Worth Individuals",
            description:
              "Shield business activities from public scrutiny. Prevent competitors, litigants, or bad actors from mapping your holdings.",
            icon: "ShieldCheck",
          },
          {
            title: "Business Owners Seeking Privacy",
            description:
              "Keep your name off state databases that data brokers and public records sites scrape and publish online.",
            icon: "EyeOff",
          },
          {
            title: "International Clients",
            description:
              "Form U.S. entities without personal information appearing in American public records or commercial databases.",
            icon: "Globe",
          },
        ],
      },
      {
        id: "wyoming-advantage",
        type: "differentiator",
        title: "The Wyoming Advantage",
        content:
          "Wyoming is our top recommendation for anonymous LLCs. The state offers the strongest combination of privacy statutes, charging order protection (including single-member LLCs), and the lowest annual maintenance costs. Nevada is a solid alternative, especially if you plan to physically operate there.",
        items: [
          {
            title: "No Public Member Disclosure",
            description:
              "Wyoming does not require member or manager names on any publicly filed document.",
            icon: "EyeOff",
          },
          {
            title: "Strongest Charging Order Protection",
            description:
              "Wyoming protects single-member LLCs — the only state to do so explicitly by statute.",
            icon: "ShieldCheck",
          },
          {
            title: "Lowest Annual Costs",
            description:
              "Wyoming's annual report fee is just $60, compared to $350+ in Nevada.",
            icon: "DollarSign",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "anon-faq-1",
        question: "Is an anonymous LLC legal?",
        answer:
          "Yes. Anonymous LLCs are completely legal. They simply take advantage of state laws (like Wyoming's) that don't require public disclosure of LLC members or managers. There's nothing illegal about forming a business entity that protects your personal information from public records.",
        category: "privacy",
      },
      {
        id: "anon-faq-2",
        question: "Can the government still find out who owns the LLC?",
        answer:
          "Yes. The IRS knows who owns the LLC through tax filings, and federal beneficial ownership reporting (FinCEN) requires disclosure to the Treasury. Anonymous LLCs protect you from public records searches — state filings, data brokers, and casual inquiries — not from lawful government inquiry.",
        category: "privacy",
      },
      {
        id: "anon-faq-3",
        question:
          "Do I need to live in Wyoming to form an anonymous LLC there?",
        answer:
          "No. You can form a Wyoming LLC regardless of where you live. If your LLC does business in your home state, you may need to foreign register there — but your Wyoming formation filings remain private.",
        category: "formation",
      },
      {
        id: "anon-faq-4",
        question: "How does this differ from a 'normal' Wyoming LLC?",
        answer:
          "A self-filed Wyoming LLC hides members from the Articles of Organization but still requires an organizer and registered agent on public record. Our anonymous LLC uses professional nominees for those roles, too — so no name tied to you appears anywhere.",
        category: "privacy",
      },
    ],
    sidebarLinks: [
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "Offshore Privacy", href: "/offshore-privacy" },
      { title: "Wyoming Privacy", href: "/wyoming-privacy" },
      { title: "WY vs NV Comparison", href: "/wyoming-vs-nevada-llc" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    pullQuote: {
      quote:
        "Privacy is not about hiding wrongdoing. It is about making sure the people who hate you cannot find you first.",
      attribution: "Incorporate123 Privacy Team",
      bgText: "ANONYMOUS",
    },
    suggestions: [
      {
        title: "Nominee Services",
        description:
          "Year-round nominee directors and officers — the core mechanism that keeps your name off every filing, not just the first one.",
        href: "/nominee-services",
      },
      {
        title: "Offshore Record Storage",
        description:
          "How we keep your operating agreement and beneficial owner records outside U.S. subpoena reach.",
        href: "/offshore-privacy",
      },
      {
        title: "Wyoming Privacy Protections",
        description:
          "Why Wyoming's statutes are designed from the ground up to protect LLC member identity.",
        href: "/wyoming-privacy",
      },
    ],
    crossPillarCTA: {
      pillar: "asset",
      title: "Also Interested in Asset Protection?",
      description:
        "Anonymous LLCs are often the first step in an asset protection strategy. Learn how charging order protection adds another layer.",
      href: "/asset-protection",
    },
  },

  // ==================== 2. PRIVATE INCORPORATION (expanded) ====================
  {
    slug: "private-incorporation",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Private Incorporation",
    description:
      "Privacy-first business formation in Wyoming, Nevada, California, and Florida. Our nominee structure ensures your personal information stays off public filings in every state.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Private Incorporation?",
        content:
          "Private incorporation is the process of forming a business entity — LLC or Corporation — with maximum privacy protections. This means choosing a formation state with strong privacy statutes, using nominee services to keep your name off public filings, and storing corporate records outside U.S. jurisdiction. Our private incorporation service is available in Wyoming, Nevada, California, and Florida.",
        extendedContent:
          "The approach differs by state. Wyoming and Nevada allow direct private formation: the entity is formed in-state with nominees, and no member or manager names ever appear on public filings. California and Florida require public disclosure at the state level, so we use a two-step structure: form the entity in Wyoming or Nevada with nominees, then foreign-register it into California or Florida for legal operating authority. The foreign registration references the WY/NV entity, not you.",
      },
      {
        id: "state-options",
        type: "audience",
        title: "Available States",
        content:
          "We offer private incorporation in four states, each with a tailored approach:",
        items: [
          {
            title: "Wyoming",
            description:
              "Our #1 recommendation. Strongest privacy statutes, lowest costs ($60/yr annual report), best asset protection. Direct formation with nominees.",
            icon: "Star",
          },
          {
            title: "Nevada",
            description:
              "Strong privacy, established business court, no state income tax. Ideal if operating physically in Nevada.",
            icon: "Building",
          },
          {
            title: "California",
            description:
              "WY/NV nominee formation + California foreign registration. Full privacy with California compliance. Subject to CA's $800 franchise tax.",
            icon: "MapPin",
          },
          {
            title: "Florida",
            description:
              "WY/NV nominee formation + Florida foreign registration. Privacy-first approach for Florida businesses. No state income tax.",
            icon: "MapPin",
          },
        ],
      },
      {
        id: "two-step-structure",
        type: "differentiator",
        title: "How the Two-Step Structure Works for CA/FL",
        content:
          "Forming directly in California or Florida exposes you on state filings. We work around this by using Wyoming or Nevada as the formation layer and the target state as the operating layer. Your name never reaches the public filing stage in either jurisdiction.",
        items: [
          {
            title: "Step 1: Form in WY or NV",
            description:
              "Your LLC is formed in Wyoming or Nevada with professional nominees on all state filings. This is your entity's legal home.",
            icon: "Layers",
          },
          {
            title: "Step 2: Foreign Register",
            description:
              "The WY/NV entity is then registered to transact business in California or Florida. The foreign registration references the out-of-state entity, not a new CA/FL LLC.",
            icon: "MapPin",
          },
          {
            title: "Result: No Public Trail",
            description:
              "Your name appears nowhere on WY/NV filings (nominees) or CA/FL filings (just the foreign entity reference). Public records lead to a dead-end.",
            icon: "EyeOff",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "pi-faq-1",
        question: "Can I incorporate privately in any state?",
        answer:
          "We offer private incorporation in Wyoming, Nevada, California, and Florida. For CA and FL, we use a WY/NV nominee structure with foreign registration. Privacy is strongest in Wyoming and Nevada where direct formation is possible — the two-step approach is a workaround for states with mandatory disclosure.",
        category: "privacy",
      },
      {
        id: "pi-faq-2",
        question:
          "Does foreign registration in California expose my personal information?",
        answer:
          "No — not if the WY/NV entity uses nominees. The California Statement of Information asks for managers/members of the registering entity, which are our nominees (public record in WY/NV). Your name remains off both the formation state and the foreign registration.",
        category: "privacy",
      },
      {
        id: "pi-faq-3",
        question:
          "Is private incorporation more expensive than direct formation?",
        answer:
          "For Wyoming and Nevada, the cost is similar — private formation just adds nominee services to a standard Gold package. For California and Florida, the two-step structure costs more because you pay formation fees in WY/NV plus foreign registration fees in the target state. Total: roughly $1,475 for our California Private package.",
        category: "privacy",
      },
    ],
    sidebarLinks: [
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "CA Private Inc.", href: "/california-private-incorporation" },
      { title: "FL Private Inc.", href: "/florida-private-incorporation" },
      { title: "State Comparison", href: "/wyoming-vs-nevada-llc" },
    ],
    relatedPackages: ["wyoming-gold", "california-private", "florida-private"],
    pullQuote: {
      quote:
        "Privacy is a design decision made at formation — not a setting you toggle on later.",
      attribution: "The Incorporate123 Approach",
      bgText: "PRIVATE",
    },
    suggestions: [
      {
        title: "Anonymous LLC Formation",
        description:
          "The simplest path to private formation — Wyoming or Nevada with nominees. Best for clients without a California or Florida presence.",
        href: "/anonymous-llc",
      },
      {
        title: "California Private LLC",
        description:
          "How to maintain Wyoming-grade privacy while legally operating in California — and how the $800 franchise tax works.",
        href: "/california-private-incorporation",
      },
      {
        title: "Florida Private LLC",
        description:
          "The Wyoming + Florida foreign registration structure — no state income tax and full nominee privacy.",
        href: "/florida-private-incorporation",
      },
    ],
    crossPillarCTA: {
      pillar: "compliance",
      title: "Understand the Ongoing Obligations",
      description:
        "Private incorporation simplifies formation, but state taxes and annual filings still apply. Know what's owed where before you decide.",
      href: "/tax-obligations",
    },
  },

  // ==================== 3. OFFSHORE PRIVACY (expanded) ====================
  {
    slug: "offshore-privacy",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Offshore Record Storage",
    description:
      "Corporate documents stored outside U.S. jurisdiction. Domestic subpoenas and court orders typically cannot compel production of documents held in foreign jurisdictions.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Offshore Record Storage?",
        content:
          "Offshore record storage means your corporate documents — operating agreement, meeting minutes, member registry, and other sensitive records — are physically stored in a jurisdiction outside the United States. This adds a significant layer of privacy protection because domestic subpoenas and court orders typically do not have the authority to compel production of documents held in foreign jurisdictions.",
        extendedContent:
          "Domestic discovery orders (subpoenas duces tecum, court production orders) have territorial limits. A U.S. court can compel you to produce documents in your possession, but it cannot directly order a foreign custodian to release documents held abroad. The U.S. does have Mutual Legal Assistance Treaties (MLATs) with some countries that allow cross-border evidence requests, but these are slow, narrow, and only apply to criminal matters — not civil discovery. For most business privacy scenarios, offshore storage is an effective barrier.",
      },
      {
        id: "what-is-stored",
        type: "text",
        title: "What Documents Are Stored Offshore?",
        content:
          "We store all non-public corporate records offshore: your operating agreement (which names the true members), meeting minutes, member/officer registry, financial records authorization, and any other documents that could reveal beneficial ownership. Only the bare minimum required by the formation state remains domestic — and those documents use nominee names, not yours.",
        bullets: [
          "Operating Agreement — names the beneficial owner",
          "Member/Manager Registry — internal ownership record",
          "Meeting Minutes — resolutions, elections, significant actions",
          "Share/Membership Transfer Records — historical ownership chain",
          "Authorization Resolutions — banking, contracts, and signatory authority",
        ],
      },
      {
        id: "jurisdictional-protection",
        type: "differentiator",
        title: "Jurisdictional Protection Explained",
        content:
          "Offshore storage works because it places records beyond the reach of domestic legal process. The protection is procedural, not magical — and understanding its limits matters.",
        items: [
          {
            title: "Subpoena Limits",
            description:
              "U.S. civil subpoenas cannot directly compel a foreign records custodian to produce documents. The custodian is outside the court's personal jurisdiction.",
            icon: "Gavel",
          },
          {
            title: "Custodian Independence",
            description:
              "Our offshore records custodian is a separate legal entity under foreign law. They are not your agent for discovery purposes.",
            icon: "Landmark",
          },
          {
            title: "MLAT Exception",
            description:
              "Mutual Legal Assistance Treaties allow cross-border evidence requests in criminal matters only. Civil lawsuits, creditor claims, and business disputes do not qualify.",
            icon: "Scale",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "off-faq-1",
        question: "Is offshore record storage legal?",
        answer:
          "Yes. There is no U.S. law requiring corporate records to be stored domestically. Offshore storage is a legitimate privacy strategy used by businesses and individuals worldwide. The records exist, you can access them, and they document your ownership — they just are not sitting in a U.S. filing cabinet waiting for a subpoena.",
        category: "privacy",
      },
      {
        id: "off-faq-2",
        question: "Can I still access my records when I need them?",
        answer:
          "Yes. You have unrestricted access to your records at any time. Offshore storage is about who can compel production of the documents, not about restricting your access to them. We provide secure digital access and expedited delivery whenever you need a document.",
        category: "privacy",
      },
      {
        id: "off-faq-3",
        question: "What happens if I am personally subpoenaed for the records?",
        answer:
          "You can only be compelled to produce documents in your 'possession, custody, or control.' Because the offshore custodian is an independent entity, the records are not in your direct control — you have contractual access, not ownership. Your attorney can explain the jurisdictional limits during a discovery dispute.",
        category: "privacy",
      },
    ],
    sidebarLinks: [
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Wyoming Privacy", href: "/wyoming-privacy" },
      { title: "Gold Package", href: "/wyoming-gold" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    pullQuote: {
      quote:
        "The strongest lock on a door is the one the process server cannot find the door to.",
      attribution: "The Offshore Principle",
      bgText: "SHIELDED",
    },
    suggestions: [
      {
        title: "Nominee Services",
        description:
          "Nominees keep your name off state filings. Offshore storage keeps your name off discoverable records. Both are in Gold.",
        href: "/nominee-services",
      },
      {
        title: "Anonymous LLC Formation",
        description:
          "How offshore storage completes the anonymous LLC structure — public records, private records, and jurisdictional buffer all aligned.",
        href: "/anonymous-llc",
      },
      {
        title: "Wyoming Privacy Protections",
        description:
          "Wyoming's statutes are designed to be compatible with offshore storage. Learn which U.S. states allow it and which quietly discourage it.",
        href: "/wyoming-privacy",
      },
    ],
    crossPillarCTA: {
      pillar: "asset",
      title: "Pair with Charging Order Protection",
      description:
        "Offshore records block discovery. Charging order protection blocks collection. Together they form the strongest domestic shield available.",
      href: "/charging-order-protection",
    },
  },

  // ==================== 4. CALIFORNIA PRIVATE INCORPORATION (NEW) ====================
  {
    slug: "california-private-incorporation",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "California Private LLC Formation",
    description:
      "Operate in California with Wyoming-grade privacy. We form your LLC in Wyoming with nominees, then foreign-register it in California — your name never reaches the CA Statement of Information.",
    sections: [
      {
        id: "the-problem",
        type: "text",
        title: "The California Disclosure Problem",
        content:
          "California requires every LLC operating in the state to file a Statement of Information within 90 days of formation (and every two years after). The Statement names all managers, and for member-managed LLCs, all members. This document is published in the public database of the California Secretary of State. For privacy-conscious clients, direct California formation is a non-starter — within three months of filing, your name is indexed in the state's public records and scraped by data brokers.",
        extendedContent:
          "California also imposes an $800 annual minimum franchise tax on every LLC registered or doing business in the state, regardless of income. This is separate from the formation fee. Any LLC — whether formed in California or foreign-registered from another state — owes the $800 tax as long as it transacts business in California. Clients sometimes hope to avoid this by forming in Wyoming and not foreign-registering, but if the LLC has a physical presence, employees, or significant revenue from California, the state considers it 'doing business' and the tax applies anyway.",
      },
      {
        id: "our-approach",
        type: "differentiator",
        title: "Our Two-Step Private Structure",
        content:
          "We solve the disclosure problem by inserting a Wyoming entity between you and the California public record. California still sees an LLC operating in the state — it just sees the Wyoming entity, not a California-formed entity with your name on it.",
        items: [
          {
            title: "Step 1: Wyoming Formation",
            description:
              "We form a Wyoming LLC with professional nominees on all state filings. Your name appears nowhere on the Wyoming formation documents.",
            icon: "Layers",
          },
          {
            title: "Step 2: California Foreign Registration",
            description:
              "The Wyoming LLC is then foreign-registered to transact business in California. The CA filing references the Wyoming entity, not new members.",
            icon: "MapPin",
          },
          {
            title: "Result",
            description:
              "California's public record shows a Wyoming LLC operating in California. Wyoming's public record shows nominees. Your name is on neither.",
            icon: "EyeOff",
          },
        ],
      },
      {
        id: "comparison",
        type: "comparison",
        title: "Direct CA Formation vs. Private Structure",
        content:
          "Direct California formation is faster and cheaper up front but exposes you permanently on the Statement of Information. The private structure adds Wyoming formation fees but keeps your name out of every California public filing.",
        comparisonColumnLabels: {
          left: "Private Structure (WY)",
          right: "Direct CA Formation",
        },
        comparisonRows: [
          {
            label: "Public Member Disclosure",
            wyoming: "None — nominees only",
            nevada: "Required on Statement of Information",
          },
          {
            label: "Formation State",
            wyoming: "Wyoming (private)",
            nevada: "California (public)",
            highlight: true,
          },
          {
            label: "Formation Cost",
            wyoming: "~$1,475 (WY Gold + CA foreign)",
            nevada: "~$70 state fee + direct filing",
          },
          {
            label: "Annual WY Fee",
            wyoming: "$60",
            nevada: "N/A",
          },
          {
            label: "CA Franchise Tax",
            wyoming: "$800/yr (owed regardless)",
            nevada: "$800/yr",
          },
          {
            label: "CA Statement of Info",
            wyoming: "Names Wyoming entity only",
            nevada: "Names all members/managers publicly",
            highlight: true,
          },
        ],
      },
      {
        id: "pricing",
        type: "pricing",
        title: "What It Costs",
        content:
          "Our California Private package bundles the Wyoming formation, California foreign registration, nominee services, and all state filing fees into one price. The annual California franchise tax is owed directly to the state and is not included.",
        pricingRows: [
          {
            label: "California Private Package",
            price: "$1,475",
            note: "One-time formation fee",
            highlight: true,
          },
          {
            label: "Wyoming Formation (WY Gold)",
            price: "Included",
            note: "State filing + registered agent + nominees",
          },
          {
            label: "CA Foreign Registration",
            price: "Included",
            note: "Statement & Designation fee and filing",
          },
          {
            label: "CA Franchise Tax",
            price: "$800/yr",
            note: "Paid directly to CA Franchise Tax Board",
          },
          {
            label: "Wyoming Annual Report",
            price: "$60/yr",
            note: "Filed by us each year",
          },
        ],
        pricingNote:
          "California's $800 annual franchise tax is a state obligation separate from our services. It is due by the 15th day of the 4th month after formation and annually thereafter.",
      },
    ],
    faqs: [
      {
        id: "capriv-faq-1",
        question:
          "Can I avoid the $800 California franchise tax by forming in Wyoming only?",
        answer:
          "Only if your business does not transact business in California. If you have a California office, California employees, or significant sales to California customers, the state considers it 'doing business' and you owe the $800 tax regardless of formation state. The private structure keeps your name off the record — it does not exempt you from California tax.",
        category: "privacy",
      },
      {
        id: "capriv-faq-2",
        question: "Who is listed on the California Statement of Information?",
        answer:
          "For a foreign-registered Wyoming LLC, the CA Statement of Information asks for the LLC's managers. Since your Wyoming LLC has nominee managers (publicly listed on Wyoming filings), those nominee names are what appear on the CA filing. Your name is not required.",
        category: "privacy",
      },
      {
        id: "capriv-faq-3",
        question: "How long does California private formation take?",
        answer:
          "Wyoming formation takes 2–3 business days. California foreign registration takes an additional 1–2 weeks depending on Secretary of State processing. Expect the full structure to be operational within 2–3 weeks of ordering.",
        category: "privacy",
      },
      {
        id: "capriv-faq-4",
        question:
          "Does this structure affect California state taxes on income?",
        answer:
          "No. California taxes the income of any LLC doing business in California, regardless of where it is formed. The private structure changes disclosure, not tax liability. Your CPA should handle California state income tax filings as part of your annual returns.",
        category: "privacy",
      },
    ],
    sidebarLinks: [
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "Florida Private LLC", href: "/florida-private-incorporation" },
      { title: "Foreign Registration", href: "/foreign-registration" },
      { title: "Private Incorporation", href: "/private-incorporation" },
    ],
    relatedPackages: ["california-private", "wyoming-gold"],
    pullQuote: {
      quote:
        "California taxes your income. The Statement of Information taxes your privacy. Only one of those can be engineered around.",
      attribution: "California Private Structure",
      bgText: "PRIVATE",
    },
    suggestions: [
      {
        title: "Florida Private LLC",
        description:
          "Same two-step approach for Florida — with no $800 franchise tax. Compare the two structures before committing.",
        href: "/florida-private-incorporation",
      },
      {
        title: "Foreign Registration Explained",
        description:
          "How foreign registration works, what triggers it, and what it costs in each state.",
        href: "/foreign-registration",
      },
      {
        title: "Tax Obligations",
        description:
          "Deep dive on the $800 California franchise tax, quarterly estimates, and what our service handles vs. what your CPA handles.",
        href: "/tax-obligations",
      },
    ],
    crossPillarCTA: {
      pillar: "compliance",
      title: "The $800 Tax Deserves a Closer Look",
      description:
        "California's franchise tax applies to both domestic and foreign-registered LLCs. Understand the full compliance picture before committing.",
      href: "/tax-obligations",
    },
  },

  // ==================== 5. FLORIDA PRIVATE INCORPORATION (NEW) ====================
  {
    slug: "florida-private-incorporation",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Florida Private LLC Formation",
    description:
      "Operate in Florida with full privacy protection. We form your LLC in Wyoming with nominees, then foreign-register it in Florida — no state income tax and no personal disclosure.",
    sections: [
      {
        id: "the-problem",
        type: "text",
        title: "Florida's Public Disclosure",
        content:
          "Florida requires every LLC to file an annual report with the Division of Corporations by May 1 each year. The report lists all managers and authorized representatives, and is published in the state's public Sunbiz database — one of the most widely searched business databases in the country. Direct Florida formation means your name is indexed and searchable within weeks of filing, and refreshed annually.",
        extendedContent:
          "Unlike California, Florida has no state income tax on individuals — making it attractive for business owners relocating for tax reasons. But the public disclosure requirement is a problem for privacy-conscious clients who also want to benefit from Florida's tax structure. Our solution mirrors the California approach: Wyoming formation with nominees, then foreign registration into Florida. You get the business presence without the identity exposure.",
      },
      {
        id: "our-approach",
        type: "differentiator",
        title: "The Wyoming + Florida Structure",
        content:
          "By forming in Wyoming first and foreign-registering into Florida, we place nominees on every public filing and keep your name out of both states' records. Florida sees a Wyoming LLC operating in the state. Wyoming sees nominees. Nobody sees you.",
        items: [
          {
            title: "Wyoming Formation First",
            description:
              "Your LLC is formed in Wyoming with professional nominees on the Articles of Organization and annual report.",
            icon: "Layers",
          },
          {
            title: "Foreign Registration Second",
            description:
              "The Wyoming LLC is registered to transact business in Florida via an Application by Foreign Limited Liability Company.",
            icon: "MapPin",
          },
          {
            title: "Sunbiz Shows Nothing",
            description:
              "Florida's public Sunbiz database lists the Wyoming entity and its registered agent — not you, not your home address, not your role.",
            icon: "EyeOff",
          },
        ],
      },
      {
        id: "comparison",
        type: "comparison",
        title: "Florida Private vs. California Private",
        content:
          "Both states use the same two-step structure, but the economics differ significantly. Florida has no state income tax and no $800 annual franchise tax — making it the cheaper ongoing option for clients who can physically operate from either state.",
        comparisonColumnLabels: {
          left: "Florida Private",
          right: "California Private",
        },
        comparisonRows: [
          {
            label: "Formation Cost",
            wyoming: "~$1,475 (FL package)",
            nevada: "~$1,475 (CA package)",
          },
          {
            label: "Annual State Tax",
            wyoming: "$0 (FL) + $60 (WY)",
            nevada: "$800 (CA) + $60 (WY)",
            highlight: true,
          },
          {
            label: "State Income Tax",
            wyoming: "None",
            nevada: "Up to 13.3%",
            highlight: true,
          },
          {
            label: "Annual Report Fee",
            wyoming: "$138.75 (FL)",
            nevada: "$800+ (CA franchise tax)",
          },
          {
            label: "Public Disclosure",
            wyoming: "None (nominees only)",
            nevada: "None (nominees only)",
          },
          {
            label: "Best For",
            wyoming: "FL-based owners, tax-sensitive",
            nevada: "CA-based operations, no choice",
          },
        ],
      },
      {
        id: "pricing",
        type: "pricing",
        title: "What It Costs",
        content:
          "The Florida Private package bundles Wyoming formation, Florida foreign registration, nominee services, and all state filing fees. Unlike California, there is no $800 franchise tax — only Florida's $138.75 annual report fee.",
        pricingRows: [
          {
            label: "Florida Private Package",
            price: "$1,475",
            note: "One-time formation fee",
            highlight: true,
          },
          {
            label: "Wyoming Formation (WY Gold)",
            price: "Included",
            note: "State filing + registered agent + nominees",
          },
          {
            label: "FL Foreign Registration",
            price: "Included",
            note: "Application fee and state filing",
          },
          {
            label: "Florida Annual Report",
            price: "$138.75/yr",
            note: "Due by May 1 each year — filed by us",
          },
          {
            label: "Wyoming Annual Report",
            price: "$60/yr",
            note: "Filed by us each year",
          },
        ],
        pricingNote:
          "Florida has no state income tax and no franchise tax — the annual report fee is the only recurring state obligation beyond Wyoming's $60.",
      },
    ],
    faqs: [
      {
        id: "flpriv-faq-1",
        question: "Why not just form directly in Florida to save money?",
        answer:
          "Direct Florida formation requires your name on the annual report, which is indexed in the public Sunbiz database. The two-step structure costs more up front but keeps your name off every public filing — permanently. If privacy isn't a concern, direct formation works. If it is, the structure pays for itself in peace of mind.",
        category: "privacy",
      },
      {
        id: "flpriv-faq-2",
        question: "Does Florida have a franchise tax like California?",
        answer:
          "No. Florida has no state income tax and no franchise tax on LLCs. The only recurring state obligation is the $138.75 annual report fee, due by May 1 each year. This is one of the cheapest ongoing cost structures in the country for an out-of-state-operating LLC.",
        category: "privacy",
      },
      {
        id: "flpriv-faq-3",
        question: "How fast is Florida foreign registration?",
        answer:
          "Wyoming formation takes 2–3 business days. Florida foreign registration processing takes another 5–10 business days in most cases. Expect the full structure to be operational within 10–15 business days of ordering.",
        category: "privacy",
      },
      {
        id: "flpriv-faq-4",
        question: "Can I use this structure for real estate in Florida?",
        answer:
          "Yes — and this is a common use case. Florida has a thriving investment property market, and the private structure keeps your name off deed records if you hold properties through the LLC. Combine with Wyoming's charging order protection for both privacy and asset protection.",
        category: "privacy",
      },
    ],
    sidebarLinks: [
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Nominee Services", href: "/nominee-services" },
      {
        title: "California Private LLC",
        href: "/california-private-incorporation",
      },
      { title: "Foreign Registration", href: "/foreign-registration" },
      { title: "Private Incorporation", href: "/private-incorporation" },
    ],
    relatedPackages: ["florida-private", "wyoming-gold"],
    pullQuote: {
      quote:
        "Florida gives you no income tax. Wyoming gives you no disclosure. Combining them is not a loophole — it is the point.",
      attribution: "Florida Private Structure",
      bgText: "SUNSHINE",
    },
    suggestions: [
      {
        title: "California Private LLC",
        description:
          "Same structure for California — but with the $800 franchise tax. Compare if you have a choice of operating state.",
        href: "/california-private-incorporation",
      },
      {
        title: "Wyoming LLC Formation",
        description:
          "Want full privacy without California's $800 tax? Wyoming delivers both when your business doesn't require a local Florida or California presence.",
        href: "/wyoming-llc",
      },
      {
        title: "Real Estate Asset Protection",
        description:
          "Florida real estate holdings pair well with the private structure — keep property ownership off public deed records.",
        href: "/real-estate-asset-protection",
      },
    ],
    crossPillarCTA: {
      pillar: "formation",
      title: "Want Full Privacy Without State Tax?",
      description:
        "Wyoming formation with no foreign registration is the cheapest path to privacy — if your business doesn't require a local Florida presence.",
      href: "/wyoming-llc",
    },
  },
];
