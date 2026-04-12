import type { ClusterContent } from "@/lib/types";

/**
 * Cluster entries that were NOT modified by the expansion agents.
 * These already met the 3-sections/3-FAQs minimum and didn't need expansion.
 *
 * Kept out of the expansion files so the diff for this pass stays focused
 * on new and expanded content.
 */

export const NOMINEE_SERVICES: ClusterContent = {
  slug: "nominee-services",
  pillar: "privacy",
  pillarLabel: "Business Privacy",
  title: "Year-Round Nominee Services",
  description:
    "Our Gold packages include nominee directors and officers listed on ALL public filings year-round — not just at formation. Your name never appears on any state record.",
  sections: [
    {
      id: "what-are-nominees",
      type: "text",
      title: "What Are Nominee Services?",
      content:
        "A nominee is a person who appears on your company's public filings in place of your personal information. Nominee directors and nominee officers are listed on state records as the company's leadership, while you maintain full control through private legal agreements. The key distinction: our year-round nominee service keeps nominees listed on ALL filings — initial formation, annual reports, amendments, and any other state filings — for continuous privacy throughout the year.",
    },
    {
      id: "year-round-vs-day",
      type: "comparison",
      title: "'Year-Round' vs. 'Nominee for a Day'",
      content:
        "Many formation companies advertise nominee services but only provide them at the moment of filing. After the initial formation, the nominee is removed and your personal information appears on subsequent filings. This is called 'nominee for a day' — it provides a false sense of security. Our year-round nominee service is fundamentally different: nominees remain on every filing, every report, and every amendment throughout the entire year.",
    },
    {
      id: "how-nominees-work",
      type: "text",
      title: "How Our Nominee Services Work",
      content:
        "When you choose a Gold package, we assign professional nominees who are listed as directors and officers on your entity's formation documents and all subsequent state filings. You execute a private nominee agreement that establishes you as the true beneficial owner with full control. The nominee has no actual authority over your business — they serve solely as a privacy shield on public records. All control, decision-making, and financial authority remain with you.",
    },
  ],
  faqs: [
    {
      id: "nom-faq-1",
      question: "Do nominees have any control over my business?",
      answer:
        "No. Nominees have no actual authority. A private nominee agreement establishes that they serve solely as a privacy shield on public records. All control, decision-making, and financial authority remain with you.",
      category: "privacy",
    },
    {
      id: "nom-faq-2",
      question:
        "What's the difference between nominee directors and nominee officers?",
      answer:
        "Nominee directors appear on corporate governance filings. Nominee officers (president, secretary, treasurer) appear on operational filings. Our Gold packages include both for complete coverage.",
      category: "privacy",
    },
    {
      id: "nom-faq-3",
      question: "Are nominees the same as a registered agent?",
      answer:
        "No. A registered agent receives legal documents on behalf of your company — that role is a compliance requirement, not a privacy shield. Nominees replace your name on public filings. Most Gold packages include both.",
      category: "privacy",
    },
  ],
  sidebarLinks: [
    { title: "Anonymous LLC", href: "/anonymous-llc" },
    { title: "Offshore Privacy", href: "/offshore-privacy" },
    { title: "Wyoming Privacy", href: "/wyoming-privacy" },
    { title: "Gold vs Silver", href: "/gold-vs-silver-wyoming" },
  ],
  relatedPackages: ["wyoming-gold", "nevada-gold"],
};

export const ANONYMOUS_CORPORATION: ClusterContent = {
  slug: "anonymous-corporation",
  pillar: "privacy",
  pillarLabel: "Business Privacy",
  title: "Anonymous Corporation Formation",
  description:
    "Form a corporation with full privacy protections — nominee directors and officers, offshore record storage, and no public disclosure of beneficial owners. Ideal for entrepreneurs who need corporate structure without personal exposure.",
  sections: [
    {
      id: "what-is",
      type: "text",
      title: "How Anonymous Corporations Work",
      content:
        "An anonymous corporation is formed using nominee directors and officers whose names appear on all public filings — Articles of Incorporation, annual reports, and officer/director lists. Your identity as the beneficial owner is documented only in private agreements and corporate records stored offshore. Wyoming and Nevada are the two strongest states for anonymous corporate formation because neither requires disclosure of shareholders on any public filing. Combined with our year-round nominee services, your personal information never appears on any state record.",
    },
    {
      id: "who-benefits",
      type: "audience",
      title: "Who Benefits from Anonymous Corporations?",
      content:
        "Anonymous corporations serve business owners who need corporate structure with privacy:",
      items: [
        {
          title: "Privacy-Conscious Entrepreneurs",
          description:
            "Business owners who want the formal structure of a corporation — board of directors, stock issuance, corporate governance — without their names appearing on public filings.",
        },
        {
          title: "Capital Raising with Privacy",
          description:
            "Founders who plan to raise investment capital or issue stock while keeping beneficial ownership information out of public databases and state records.",
        },
        {
          title: "High-Profile Individuals",
          description:
            "Public figures, executives, and professionals who need a corporate entity but want to avoid personal information appearing in state business registries.",
        },
      ],
    },
    {
      id: "wyoming-vs-nevada",
      type: "comparison",
      title: "Wyoming vs. Nevada for Anonymous Corporations",
      content:
        "Both states allow anonymous corporate formation, but they differ in cost and features. Wyoming offers lower annual fees ($60 annual report vs. $350+ in Nevada), no state income tax, and strong director liability protections. Nevada provides a dedicated business court, decades of corporate law precedents, and a well-established legal infrastructure for corporate disputes. For most clients, Wyoming is the better value — but Nevada is preferred if you plan to operate physically in the state or anticipate complex corporate litigation.",
      comparisonRows: [
        {
          label: "Annual Report Fee",
          wyoming: "$60",
          nevada: "$350+",
          highlight: true,
        },
        {
          label: "State Income Tax",
          wyoming: "None",
          nevada: "None",
        },
        {
          label: "Public Shareholder Disclosure",
          wyoming: "Not required",
          nevada: "Not required",
        },
        {
          label: "Business Court",
          wyoming: "No dedicated court",
          nevada: "Dedicated business court",
        },
        {
          label: "Corporate Case Law Depth",
          wyoming: "Growing",
          nevada: "Extensive (decades)",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "anoncorp-faq-1",
      question: "Should I use an LLC or a Corporation for privacy?",
      answer:
        "Both can be formed anonymously in Wyoming and Nevada. LLCs are simpler and offer better charging order protection for asset shielding. Corporations are better if you need to issue stock, establish a board of directors, or raise outside capital. Most privacy-focused clients choose an LLC unless they have a specific corporate need.",
      category: "privacy",
    },
    {
      id: "anoncorp-faq-2",
      question: "Can you go public with an anonymous corporation?",
      answer:
        "If you take a corporation public through an IPO, SEC disclosure requirements will override state-level privacy protections. Beneficial ownership of publicly traded companies must be disclosed in SEC filings. However, anonymous corporations work well for private companies that issue stock to a limited number of investors without triggering public reporting requirements.",
      category: "privacy",
    },
    {
      id: "anoncorp-faq-3",
      question: "Can nominees serve on the board of directors?",
      answer:
        "Yes. Our professional nominees can serve as directors on your corporation's board and sign official corporate documents — all while a private agreement establishes that you retain actual control. This satisfies both the public filing requirement and the corporate governance formality.",
      category: "privacy",
    },
  ],
  sidebarLinks: [
    { title: "Anonymous LLC", href: "/anonymous-llc" },
    { title: "Nominee Services", href: "/nominee-services" },
    { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
    { title: "Wyoming Corporation", href: "/wyoming-corporation" },
  ],
  relatedPackages: ["wyoming-gold", "nevada-gold"],
  crossPillarCTA: {
    pillar: "formation",
    title: "Exploring Company Formation Options?",
    description:
      "Not sure whether an LLC or corporation is the right structure? Our formation guides break down the differences in liability, taxation, and management.",
    href: "/formation",
  },
};

export const SERIES_LLC: ClusterContent = {
  slug: "series-llc",
  pillar: "formation",
  pillarLabel: "Company Formation",
  title: "Series LLC Formation",
  description:
    "A Wyoming Series LLC creates isolated liability cells within a single entity — ideal for real estate investors and multi-asset protection. Each series operates independently with its own assets, members, and liability shield.",
  sections: [
    {
      id: "what-is",
      type: "text",
      title: "What Is a Series LLC?",
      content:
        "A Series LLC is a special form of limited liability company that allows you to create multiple internal 'series' or 'cells' within a single legal entity. Each series functions as its own compartment with separate assets, separate members (if desired), and — critically — separate liability. A lawsuit or debt against one series cannot reach the assets held in another series or in the parent LLC. Think of it as a filing cabinet: the cabinet is the parent LLC, and each drawer is an independent series with its own liability protection.",
    },
    {
      id: "how-it-works",
      type: "text",
      title: "How Series LLCs Work",
      content:
        "The parent LLC is formed with the state and includes a 'series' provision in its Articles of Organization. From there, you create individual series through internal operating agreements — no additional state filings are required for each new series. Each series maintains its own books, bank accounts, and records. The key legal requirement is maintaining separation: each series must have clearly identified assets, separate accounting, and distinct records. When properly maintained, the liability shield between series is as strong as the shield between entirely separate LLCs.",
    },
    {
      id: "use-cases",
      type: "audience",
      title: "Who Uses Series LLCs?",
      content:
        "Series LLCs are particularly valuable for owners of multiple assets who want liability isolation without the cost of forming separate entities:",
      items: [
        {
          title: "Real Estate Investors",
          description:
            "Place each rental property in its own series. A slip-and-fall lawsuit at one property can't reach the equity in your other properties or personal assets.",
        },
        {
          title: "Investment Holding Companies",
          description:
            "Separate investment portfolios, business interests, or intellectual property into individual series for clean liability boundaries.",
        },
        {
          title: "Multi-Asset Owners",
          description:
            "Vehicles, equipment, real estate, and business operations can each sit in their own series — isolating risk across your entire portfolio.",
        },
      ],
    },
    {
      id: "wyoming-advantage",
      type: "differentiator",
      title: "The Wyoming Advantage for Series LLCs",
      content:
        "Wyoming was one of the first states to adopt Series LLC legislation and has the most developed statutory framework. Wyoming Series LLCs benefit from the state's overall business-friendly environment: no state income tax, $60 annual report for the entire series structure (not per series), strongest charging order protection, and no public member disclosure. Creating new series costs nothing at the state level — you simply update your internal operating agreement.",
      items: [
        {
          title: "One Annual Fee",
          description:
            "Wyoming charges a single $60 annual report fee for the parent LLC — individual series don't require separate annual filings.",
          icon: "DollarSign",
        },
        {
          title: "No Per-Series Filing",
          description:
            "New series are created through internal agreements, not state filings. Add series anytime without additional state fees or paperwork.",
          icon: "FileText",
        },
        {
          title: "Full Liability Isolation",
          description:
            "Wyoming's Series LLC statute explicitly provides that debts and obligations of one series are enforceable only against that series' assets.",
          icon: "ShieldCheck",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "series-faq-1",
      question: "Are Series LLCs recognized in all states?",
      answer:
        "No. Not all states have Series LLC legislation, and recognition varies. However, a Wyoming Series LLC is a valid legal entity that can do business in other states through foreign registration. The key risk is that courts in states without Series LLC statutes have not yet tested whether they will honor the internal liability shields. For assets located in states that recognize Series LLCs (like Wyoming, Delaware, Illinois, Texas, and Nevada), the protection is well established.",
      category: "formation",
    },
    {
      id: "series-faq-2",
      question: "Is a Series LLC cheaper than forming multiple separate LLCs?",
      answer:
        "Significantly cheaper. Forming five separate Wyoming LLCs would cost five times the formation fee plus five annual reports ($300/year). A Series LLC with five series costs one formation fee and one $60 annual report. The savings increase with every additional series you create. The tradeoff: Series LLCs require disciplined record-keeping to maintain the liability separation between series.",
      category: "formation",
    },
    {
      id: "series-faq-3",
      question: "What happens if I fail to maintain series separation?",
      answer:
        "If accounting, records, or assets between series become commingled, a court may 'collapse' the series and treat them as a single LLC. All the liability isolation you engineered would disappear. This is why we strongly recommend dedicated bank accounts, separate books, and documented internal resolutions for each series.",
      category: "formation",
    },
  ],
  sidebarLinks: [
    { title: "Wyoming LLC", href: "/wyoming-llc" },
    { title: "Real Estate AP", href: "/real-estate-asset-protection" },
    { title: "Investment Holding LLC", href: "/investment-holding-llc" },
  ],
  relatedPackages: ["wyoming-gold", "wyoming-silver"],
};

export const WYOMING_PRIVACY: ClusterContent = {
  slug: "wyoming-privacy",
  pillar: "privacy",
  pillarLabel: "Business Privacy",
  title: "Wyoming Privacy Protections",
  description:
    "Wyoming leads the nation in business privacy. No public member disclosure, full nominee compatibility, and offshore storage support make it the top choice for privacy-conscious business owners.",
  sections: [
    {
      id: "why-wyoming-leads",
      type: "text",
      title: "Why Wyoming Leads in Privacy",
      content:
        "Wyoming's privacy advantage begins with its statutes: the state does not require LLCs or corporations to disclose members, managers, or beneficial owners on any publicly filed document. This isn't a loophole — it's deliberate legislative design. Wyoming has consistently updated its business statutes to prioritize owner privacy while maintaining compliance with federal requirements. Combined with the lowest annual fees in the country ($60/year), Wyoming delivers the most privacy per dollar of any U.S. state.",
    },
    {
      id: "privacy-features",
      type: "differentiator",
      title: "Privacy Features",
      content:
        "Wyoming's privacy protections work at multiple levels to keep your personal information off public records:",
      items: [
        {
          title: "No Public Disclosure",
          description:
            "Wyoming does not require member or manager names on Articles of Organization, annual reports, or any other publicly filed document. Your identity is private from day one.",
          icon: "EyeOff",
        },
        {
          title: "Nominee Compatibility",
          description:
            "Wyoming's statutes fully support nominee directors and officers. Our Gold package places professional nominees on all filings year-round — not just at formation.",
          icon: "UserCheck",
        },
        {
          title: "Offshore Storage Compatible",
          description:
            "Wyoming imposes no requirement to store corporate records domestically. Your operating agreement, member registry, and meeting minutes can be held outside U.S. jurisdiction.",
          icon: "Globe",
        },
      ],
    },
    {
      id: "wy-vs-others",
      type: "comparison",
      title: "Wyoming Privacy vs Other States",
      content:
        "Most states require some form of public disclosure — California mandates a Statement of Information listing managers, Florida publishes annual report details, and even Nevada (while strong on privacy) charges significantly more for equivalent protections. Wyoming is unique in combining the strongest privacy statutes with the lowest costs. For clients who don't need a physical presence in another state, Wyoming is the clear choice.",
    },
  ],
  faqs: [
    {
      id: "wyp-faq-1",
      question: "Does Wyoming report my information to any public database?",
      answer:
        "No. Wyoming does not require LLC member or manager names on any publicly filed document. With our nominee services, the only names on public filings are our professional nominees — never yours.",
      category: "privacy",
    },
    {
      id: "wyp-faq-2",
      question: "Can someone find out I own a Wyoming LLC?",
      answer:
        "Not through public state filings. With a Gold package (nominees + offshore storage), no public record or domestic document connects your name to the entity. Your ownership information stays off state databases, data broker sites, and public records searches.",
      category: "privacy",
    },
    {
      id: "wyp-faq-3",
      question:
        "Do I need to live in Wyoming to benefit from its privacy laws?",
      answer:
        "No. You can form a Wyoming LLC regardless of where you live. If you conduct business in your home state, you may need to foreign register there, but your Wyoming formation filings remain private.",
      category: "privacy",
    },
  ],
  sidebarLinks: [
    { title: "Anonymous LLC", href: "/anonymous-llc" },
    { title: "Nominee Services", href: "/nominee-services" },
    { title: "WY vs NV Privacy", href: "/wyoming-vs-nevada-privacy" },
    { title: "Gold Package", href: "/gold?state=wyoming" },
  ],
  relatedPackages: ["wyoming-gold"],
  crossPillarCTA: {
    pillar: "asset",
    title: "Combine Privacy with Asset Protection",
    description:
      "Wyoming's privacy statutes pair perfectly with the strongest charging order protection in the country. Protect your identity and your assets.",
    href: "/asset-protection",
  },
};

export const NEVADA_PRIVACY: ClusterContent = {
  slug: "nevada-privacy",
  pillar: "privacy",
  pillarLabel: "Business Privacy",
  title: "Nevada Privacy Protections",
  description:
    "Nevada offers strong business privacy with no public member disclosure, established business court protections, and 25+ years of favorable privacy precedent. Ideal for businesses operating in Nevada.",
  sections: [
    {
      id: "nv-privacy-overview",
      type: "text",
      title: "Nevada Privacy Overview",
      content:
        "Nevada has been a privacy-friendly state for business formation for over two decades. Like Wyoming, Nevada does not require public disclosure of LLC members or managers on formation documents or annual filings. The state's long history of business-friendly legislation means decades of favorable court precedent supporting entity privacy. We provide a real Nevada business address for clients who want a local presence.",
    },
    {
      id: "nv-business-court",
      type: "text",
      title: "Business Court Privacy Benefits",
      content:
        "Nevada's dedicated business court provides privacy-related advantages beyond formation. Business disputes handled in the business court benefit from judges experienced in entity law, efficient case resolution that limits public exposure, and precedent that respects entity privacy structures. For clients who anticipate potential business disputes, Nevada's established court system offers a layer of procedural privacy that newer courts in other states have not yet developed.",
    },
    {
      id: "nv-vs-wy",
      type: "comparison",
      title: "Nevada vs. Wyoming for Privacy",
      content:
        "Both Nevada and Wyoming offer equivalent privacy statutes — neither requires public member disclosure, both support nominee services, and both are compatible with offshore record storage. The primary differences are cost and physical presence. Wyoming's annual fees are $60/year vs. Nevada's $350+/year. However, Nevada is the better choice if you physically operate in the state, want a Reno business address, or prefer the credibility of Nevada's long-established business reputation. See our detailed comparison for a full breakdown.",
    },
  ],
  faqs: [
    {
      id: "nvp-faq-1",
      question: "Is Nevada as private as Wyoming?",
      answer:
        "For public filings, yes — both states offer equivalent privacy protections with no member disclosure required. The difference is cost: Nevada's annual state fees are significantly higher ($350+/year vs. Wyoming's $60/year).",
      category: "privacy",
    },
    {
      id: "nvp-faq-2",
      question: "Does having a Nevada business address help with privacy?",
      answer:
        "Yes. Our Nevada address provides a real business address separate from your personal address. Combined with nominee services, all public-facing information points to our address, not to you.",
      category: "privacy",
    },
    {
      id: "nvp-faq-3",
      question: "Should I choose Nevada over Wyoming for privacy?",
      answer:
        "Choose Nevada if you physically operate there or want a local presence. Otherwise, Wyoming provides equivalent privacy at lower cost. Both states are excellent for privacy-first formation.",
      category: "privacy",
    },
  ],
  sidebarLinks: [
    { title: "Anonymous LLC", href: "/anonymous-llc" },
    { title: "WY vs NV Privacy", href: "/wyoming-vs-nevada-privacy" },
    { title: "Gold Package", href: "/gold?state=nevada" },
  ],
  relatedPackages: ["nevada-gold"],
};

export const WYOMING_REGISTERED_AGENT: ClusterContent = {
  slug: "wyoming-registered-agent",
  pillar: "compliance",
  pillarLabel: "Compliance",
  title: "Wyoming Registered Agent Service",
  description:
    "Professional registered agent service at our Cheyenne, Wyoming address. Receive legal documents and state correspondence reliably — included in every Wyoming package.",
  sections: [
    {
      id: "what-is-wy-ra",
      type: "text",
      title: "What Is a Wyoming Registered Agent?",
      content:
        "Every Wyoming LLC and corporation must designate a registered agent with a physical address in Wyoming. The registered agent receives service of process (legal documents), state correspondence, annual report notices, and other official communications on behalf of your entity. Wyoming law requires the registered agent to be available at a physical street address during normal business hours — PO boxes are not permitted. Our Cheyenne office fulfills this requirement for all Wyoming-formed entities.",
    },
    {
      id: "cheyenne-matters",
      type: "text",
      title: "Why a Cheyenne Presence Matters",
      content:
        "Having a registered agent physically located in Cheyenne — Wyoming's capital — provides direct proximity to the Secretary of State's office. This means faster processing of filed documents, immediate response to state inquiries, and reliable receipt of time-sensitive legal notices. Many online services use third-party agents with no real presence in the state. Our office is staffed and operational, ensuring your entity stays in good standing and never misses a critical filing or legal notice.",
    },
    {
      id: "included-in-all",
      type: "differentiator",
      title: "Included in All Wyoming Packages",
      content:
        "Wyoming registered agent service is included in every formation package — Silver, Gold, and Shelf Companies. There is no additional charge for the first year.",
      items: [
        {
          title: "Legal Document Handling",
          description:
            "We receive service of process and forward it to you immediately via email and physical mail. You never miss a critical legal deadline.",
          icon: "FileText",
        },
        {
          title: "State Correspondence",
          description:
            "Annual report notices, compliance reminders, and state communications are received at our office and forwarded to you promptly.",
          icon: "Mail",
        },
        {
          title: "Privacy Shield",
          description:
            "Our Cheyenne address appears on public filings as the registered agent address — not your home or personal office address.",
          icon: "ShieldCheck",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "wyra-faq-1",
      question:
        "What happens after the first year of registered agent service?",
      answer:
        "Registered agent service renews annually as part of your package renewal. Silver renewals are $325/year and Gold renewals are $525/year — registered agent is included in both.",
      category: "compliance",
    },
    {
      id: "wyra-faq-2",
      question: "Can I use my own Wyoming address as registered agent?",
      answer:
        "If you have a physical Wyoming address and are available during business hours, technically yes. But using a professional registered agent protects your privacy (your home address won't appear on public filings) and ensures reliability.",
      category: "compliance",
    },
    {
      id: "wyra-faq-3",
      question: "How quickly do you forward legal documents?",
      answer:
        "Same-day forwarding in almost all cases. Service of process is scanned and emailed immediately upon receipt, with the physical document shipped the next business day. Our Cheyenne office checks for deliveries throughout the business day.",
      category: "compliance",
    },
  ],
  sidebarLinks: [
    { title: "Registered Agent Overview", href: "/registered-agent" },
    { title: "Annual Reports", href: "/annual-reports" },
    { title: "Wyoming State Hub", href: "/wyoming" },
  ],
  relatedPackages: ["wyoming-gold", "wyoming-silver"],
};

export const NEVADA_REGISTERED_AGENT: ClusterContent = {
  slug: "nevada-registered-agent",
  pillar: "compliance",
  pillarLabel: "Compliance",
  title: "Nevada Registered Agent Service",
  description:
    "Professional registered agent service with a Nevada street address. In-state presence, reliable legal document handling, and compliance support — included in every Nevada package.",
  sections: [
    {
      id: "what-is-nv-ra",
      type: "text",
      title: "What Is a Nevada Registered Agent?",
      content:
        "Every Nevada LLC and corporation is required by state law to maintain a registered agent with a physical street address in Nevada. The registered agent receives service of process, state correspondence from the Nevada Secretary of State, and official notices including annual list reminders and business license renewals. Nevada is strict about this requirement — failure to maintain a registered agent results in revocation of your entity's right to transact business in the state.",
    },
    {
      id: "reno-advantage",
      type: "text",
      title: "The Nevada Address Advantage",
      content:
        "Our registered agent service operates from our own Nevada office — not contracted through third parties. This means reliable document receipt with immediate digital forwarding, a real business address that clients can also use for correspondence (with our Virtual Office add-on), deep knowledge of Nevada compliance requirements, and established relationships with the Nevada Secretary of State's office.",
    },
    {
      id: "nv-requirements",
      type: "text",
      title: "Nevada Registered Agent Requirements",
      content:
        "Nevada requires all business entities to list a registered agent on their initial formation filing and annual list. The registered agent must have a physical Nevada address (no PO boxes), be available during normal business hours, and consent to serve in the role. If your registered agent resigns or becomes unavailable, you have 30 days to appoint a replacement or risk administrative dissolution. Our service handles all of this automatically — you never need to worry about compliance gaps.",
    },
  ],
  faqs: [
    {
      id: "nvra-faq-1",
      question: "Is this a real physical address?",
      answer:
        "Yes. Our Nevada location is a real street address, not a PO box. We have been operating in Nevada for over 25 years.",
      category: "compliance",
    },
    {
      id: "nvra-faq-2",
      question: "Can I use your address for my business correspondence too?",
      answer:
        "Yes — with our Virtual Office add-on ($149/year). This gives you a professional Nevada business address for business cards, websites, and correspondence, separate from the registered agent function.",
      category: "compliance",
    },
    {
      id: "nvra-faq-3",
      question: "What happens if I miss the Nevada annual list filing?",
      answer:
        "Nevada assesses a $75 late fee plus a $100 penalty, and if unfiled for long enough your entity is administratively dissolved. Our service tracks the deadline and files on your behalf — this is included in every Nevada package.",
      category: "compliance",
    },
  ],
  sidebarLinks: [
    { title: "Registered Agent Overview", href: "/registered-agent" },
    { title: "Annual Reports", href: "/annual-reports" },
    { title: "Nevada State Hub", href: "/nevada" },
  ],
  relatedPackages: ["nevada-gold", "nevada-silver", "nevada-bronze"],
};

export const DOMESTICATION: ClusterContent = {
  slug: "domestication",
  pillar: "compliance",
  pillarLabel: "Compliance",
  title: "Entity Domestication",
  description:
    "Move your LLC or corporation from one state to another without dissolving and reforming. Preserve your entity's history, EIN, contracts, and bank accounts while gaining a new state's protections.",
  sections: [
    {
      id: "what-is-domestication",
      type: "text",
      title: "What Is Domestication?",
      content:
        "Domestication is the legal process of moving an existing LLC or corporation from one state to another. Unlike dissolving in the old state and reforming in the new one, domestication preserves your entity's formation date, EIN, contracts, bank accounts, and operating history. The entity is treated as if it had always been formed in the new state. This is the preferred method for moving to Wyoming or Nevada to take advantage of stronger privacy statutes, better asset protection, or lower annual costs.",
    },
    {
      id: "when-needed",
      type: "audience",
      title: "When You Need Domestication",
      content:
        "Domestication is the right move when your current formation state no longer serves your needs:",
      items: [
        {
          title: "Seeking Stronger Privacy",
          description:
            "Moving from a disclosure state (like California or New York) to Wyoming or Nevada for anonymous LLC protection and nominee compatibility.",
        },
        {
          title: "Better Asset Protection",
          description:
            "Moving to Wyoming for single-member LLC charging order protection that your current state doesn't provide.",
        },
        {
          title: "Reducing Annual Costs",
          description:
            "Entities formed in high-fee states (Nevada, Delaware, California) can save hundreds per year by domesticating to Wyoming.",
        },
        {
          title: "Changing Business Strategy",
          description:
            "Your business has evolved and a different formation state better aligns with your operational needs, client base, or growth plans.",
        },
      ],
    },
    {
      id: "the-process",
      type: "text",
      title: "The Domestication Process",
      content:
        "The domestication process typically takes 2-4 weeks and involves several steps: filing a Plan of Domestication with both the departing and receiving states, updating your operating agreement or bylaws to comply with the new state's laws, filing Articles of Domestication in the new state, filing a Certificate of Transfer or withdrawal in the old state, and updating your registered agent to one located in the new state. We handle the entire process — you provide authorization and we manage all filings, agent appointments, and compliance updates. Your entity's EIN, bank accounts, and contracts remain unaffected.",
    },
  ],
  faqs: [
    {
      id: "dom-faq-1",
      question:
        "Does domestication change my EIN or require new bank accounts?",
      answer:
        "No. Domestication preserves your entity's EIN, bank accounts, contracts, and operating history. The IRS treats the domesticated entity as the same legal entity — just in a new state.",
      category: "compliance",
    },
    {
      id: "dom-faq-2",
      question: "Can any state domesticate to Wyoming?",
      answer:
        "Most states allow outbound domestication, and Wyoming accepts inbound domestication from all states. A few states have restrictions or additional requirements. Contact us with your specific state and we'll confirm the process.",
      category: "compliance",
    },
    {
      id: "dom-faq-3",
      question: "How much does domestication cost?",
      answer:
        "Our domestication service starts at $695 and includes both the outbound and inbound filings, plus registered agent transfer. State filing fees vary ($100–$400 depending on jurisdictions). We quote total cost up front based on your departing and receiving states.",
      category: "compliance",
    },
  ],
  sidebarLinks: [
    { title: "Foreign Registration", href: "/foreign-registration" },
    { title: "Wyoming LLC", href: "/wyoming-llc" },
    { title: "Nevada LLC", href: "/nevada-llc" },
  ],
  relatedPackages: ["wyoming-gold", "nevada-gold"],
};

export const ENTITY_TAX_GUIDE: ClusterContent = {
  slug: "entity-tax-guide",
  pillar: "formation",
  pillarLabel: "Company Formation",
  title: "Entity Tax Guide",
  description:
    "How entity type affects your taxes — understand before you choose. This educational overview helps you make informed formation decisions. Not tax advice — consult a CPA for your specific situation.",
  sections: [
    {
      id: "how-entities-taxed",
      type: "text",
      title: "How Business Entities Are Taxed",
      content:
        "Your choice of entity type determines how your business income is taxed at both federal and state levels. Single-member LLCs are taxed as sole proprietorships by default — all income passes through to your personal return on Schedule C. Multi-member LLCs are taxed as partnerships, filing Form 1065 with each member reporting their share on Schedule K-1. Corporations face 'double taxation' as C-Corps (corporate tax on profits, then personal tax on dividends) unless they elect S-Corp status. Understanding these defaults is critical because the entity you form today determines your tax obligations for years to come.",
    },
    {
      id: "scorp-election",
      type: "text",
      title: "The S-Corp Election: When It Makes Sense",
      content:
        "Any LLC or Corporation can elect S-Corp tax treatment by filing IRS Form 2553. As an S-Corp, you pay yourself a 'reasonable salary' (subject to payroll taxes) and take remaining profits as distributions (not subject to self-employment tax). The general rule: if your net business income exceeds $80,000 per year, the S-Corp election may save you significant self-employment taxes. Below that threshold, the additional payroll and accounting costs typically outweigh the savings. This election doesn't change your state formation — a Wyoming LLC with an S-Corp election is still a Wyoming LLC for privacy and asset protection purposes.",
    },
    {
      id: "self-employment-tax",
      type: "text",
      title: "Self-Employment Tax and Entity Choice",
      content:
        "Self-employment tax (15.3% on the first $168,600 of net income in 2024) is one of the largest tax burdens for small business owners. Single-member LLCs and partnerships pay SE tax on all net business income. S-Corps pay SE tax only on the owner's salary — distributions are exempt. C-Corps don't pay SE tax but face double taxation instead. For many Inc123 clients, the entity structure that minimizes total tax burden depends on income level, whether you have employees, and how you plan to extract profits from the business.",
    },
    {
      id: "state-tax-advantages",
      type: "differentiator",
      title: "Wyoming and Nevada Tax Advantages",
      content:
        "Both Wyoming and Nevada impose no state income tax — on individuals or businesses. This is a significant advantage for business owners in high-tax states who can legitimately establish their entity in a no-income-tax state.",
      items: [
        {
          title: "No State Income Tax",
          description:
            "Wyoming and Nevada impose zero state income tax on individuals and businesses.",
          icon: "DollarSign",
        },
        {
          title: "No Franchise Tax",
          description:
            "Wyoming charges no franchise tax. Nevada charges no franchise tax on LLCs (corporations pay a Commerce Tax only if gross revenue exceeds $4M).",
          icon: "ShieldCheck",
        },
        {
          title: "Low Annual Fees",
          description:
            "Wyoming's annual report is $60. Nevada's annual list and business license total $350+. Both are far below states like California ($800 franchise tax minimum).",
          icon: "Receipt",
        },
      ],
    },
    {
      id: "decision-framework",
      type: "audience",
      title: "Tax-Informed Entity Decision Framework",
      content:
        "Use these profiles to identify which entity structure aligns with your tax situation:",
      items: [
        {
          title: "Solo Operator Under $80K Net Income",
          description:
            "Single-member LLC is simplest. Pass-through taxation, minimal paperwork, no payroll required. The S-Corp election likely costs more in accounting fees than it saves.",
        },
        {
          title: "Solo Operator Over $80K Net Income",
          description:
            "Single-member LLC with S-Corp election. Pay yourself a reasonable salary and take remaining profits as distributions to reduce self-employment tax.",
        },
        {
          title: "Multi-Owner Business",
          description:
            "Multi-member LLC taxed as a partnership. Each member reports their share on Schedule K-1. S-Corp election available if payroll tax savings justify the added complexity.",
        },
        {
          title: "Raising Capital or Going Public",
          description:
            "C-Corporation. Required for venture capital, stock issuance, and IPO. Accept double taxation in exchange for capital-raising flexibility.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "tax-faq-1",
      question: "When should I make the S-Corp election?",
      answer:
        "Generally when your net business income consistently exceeds $80,000 per year. Below that, the added payroll processing and accounting costs typically outweigh the self-employment tax savings. File Form 2553 with the IRS — the election must be made within 75 days of formation or by March 15 for the current tax year.",
      category: "formation",
    },
    {
      id: "tax-faq-2",
      question: "Does forming in Wyoming mean I avoid all state taxes?",
      answer:
        "Wyoming has no state income tax, but if you physically operate in another state, that state may still tax your business income. Forming in Wyoming provides privacy and asset protection benefits regardless — but state income tax depends on where you conduct business, not just where you're formed.",
      category: "formation",
    },
    {
      id: "tax-faq-3",
      question: "Can I change my tax classification after formation?",
      answer:
        "Yes. LLCs can elect S-Corp or C-Corp taxation at any time by filing the appropriate IRS forms. You can also revoke an S-Corp election (with restrictions). Your state formation doesn't change — only the federal tax treatment.",
      category: "formation",
    },
    {
      id: "tax-faq-4",
      question: "When do I need a CPA vs. when is this guide enough?",
      answer:
        "This guide helps you understand the landscape and make informed formation decisions. You should consult a CPA before making the S-Corp election, if you have multi-state tax obligations, if you have complex ownership structures, or if your annual income exceeds $150,000. We're formation specialists, not tax advisors — we'll help you form the right entity, and your CPA ensures the tax strategy is optimized.",
      category: "formation",
    },
  ],
  sidebarLinks: [
    { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
    {
      title: "LLC vs S-Corp vs C-Corp Tax",
      href: "/llc-vs-scorp-vs-ccorp-tax",
    },
    { title: "Tax Filing & Obligations", href: "/tax-obligations" },
    { title: "Wyoming LLC", href: "/wyoming-llc" },
  ],
  relatedPackages: ["wyoming-gold", "wyoming-silver"],
  crossPillarCTA: {
    pillar: "compliance",
    title: "Formed Your Entity? Know Your Tax Obligations.",
    description:
      "After formation, ongoing tax filings and state compliance requirements begin. Understand what's required and what Incorporate123 handles for you.",
    href: "/tax-obligations",
  },
};

export const TAX_OBLIGATIONS: ClusterContent = {
  slug: "tax-obligations",
  pillar: "compliance",
  pillarLabel: "Compliance",
  title: "Tax Filing & Obligations",
  description:
    "Ongoing tax requirements after forming your entity. Understand federal and state filing obligations, deadlines, and what Incorporate123 handles vs. what requires a CPA.",
  sections: [
    {
      id: "post-formation-filing",
      type: "text",
      title: "Post-Formation Tax Filing Requirements",
      content:
        "Once your entity is formed, federal and state tax obligations begin immediately. Single-member LLCs report income on Schedule C (attached to your personal Form 1040). Multi-member LLCs file Form 1065 and issue K-1s to each member. S-Corps file Form 1120-S with K-1s. C-Corps file Form 1120. All entities need an EIN (Employer Identification Number) from the IRS — included in every Incorporate123 package. Missing filing deadlines results in penalties, so understanding your obligations from day one is essential.",
    },
    {
      id: "federal-forms",
      type: "audience",
      title: "Federal Tax Forms by Entity Type",
      content: "Each entity type has specific federal filing requirements:",
      items: [
        {
          title: "Single-Member LLC",
          description:
            "Schedule C on your personal Form 1040. Due April 15. No separate business return required unless you elect S-Corp or C-Corp taxation.",
        },
        {
          title: "Multi-Member LLC (Partnership)",
          description:
            "Form 1065 due March 15. Issues Schedule K-1 to each member, who reports their share on personal returns.",
        },
        {
          title: "S-Corporation (or LLC with S-Corp Election)",
          description:
            "Form 1120-S due March 15. Issues K-1s to shareholders. Requires payroll tax filings (Forms 941/940) if paying salaries.",
        },
        {
          title: "C-Corporation",
          description:
            "Form 1120 due April 15. Corporate income taxed at 21% flat rate. Dividends taxed again on shareholders' personal returns.",
        },
      ],
    },
    {
      id: "state-obligations",
      type: "text",
      title: "State-Level Tax Obligations",
      content:
        "Wyoming and Nevada impose no state income tax — a major advantage. However, if you operate in a state with income tax, you may owe taxes there regardless of where your entity is formed. California is notable: any LLC registered or doing business in California owes an $800 annual franchise tax minimum, even if the LLC earns no California income. This applies to both California-formed LLCs and out-of-state LLCs registered to do business in California. Florida has no personal income tax but imposes a 5.5% corporate income tax on C-Corps. Understanding your state obligations prevents costly surprises.",
    },
    {
      id: "quarterly-estimates",
      type: "text",
      title: "Quarterly Estimated Tax Payments",
      content:
        "If you expect to owe $1,000 or more in federal taxes, the IRS requires quarterly estimated tax payments (Form 1040-ES). Due dates are April 15, June 15, September 15, and January 15 of the following year. Underpayment results in penalties. Most LLC and S-Corp owners need to make quarterly estimates because no employer is withholding taxes from their business income. Your CPA can help calculate the correct quarterly amounts based on projected income.",
    },
    {
      id: "what-we-handle",
      type: "differentiator",
      title: "What Incorporate123 Handles vs. What Requires a CPA",
      content:
        "We're formation and compliance specialists — not tax advisors. Here's the clear division of responsibilities:",
      items: [
        {
          title: "We Handle",
          description:
            "Entity formation, EIN obtainment, annual report filing, registered agent service, corporate minutes, good standing certificates, and state compliance filings.",
          icon: "CheckCircle",
        },
        {
          title: "Your CPA Handles",
          description:
            "Federal and state tax return preparation, S-Corp election filing, quarterly estimated tax calculations, payroll tax compliance, and tax planning strategy.",
          icon: "Users",
        },
        {
          title: "We Coordinate",
          description:
            "We provide your CPA with all formation documents, EIN confirmation, and entity details they need to prepare accurate returns.",
          icon: "Mail",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "taxobl-faq-1",
      question: "Does my Wyoming LLC owe any Wyoming business taxes?",
      answer:
        "No. Wyoming imposes no state income tax, no franchise tax on LLCs, and no gross receipts tax. Your only Wyoming obligation is the $60 annual report fee (which we file for you). However, if you operate in another state, that state's tax laws apply to your business income.",
      category: "compliance",
    },
    {
      id: "taxobl-faq-2",
      question: "What is California's $800 franchise tax?",
      answer:
        "California imposes a minimum $800 annual franchise tax on every LLC registered or doing business in California — regardless of income. This applies even if your LLC is formed in Wyoming and foreign registered in California. It's due by the 15th day of the 4th month after formation, then annually. Our California Private Package ($1,475) includes the formation and registration — but the $800 state tax is owed directly to California.",
      category: "compliance",
    },
    {
      id: "taxobl-faq-3",
      question: "Do I need to make quarterly estimated tax payments?",
      answer:
        "If you expect to owe $1,000+ in federal taxes for the year, yes. Quarterly estimates are due April 15, June 15, September 15, and January 15. Your CPA calculates the amounts based on projected income. Missing payments results in underpayment penalties from the IRS.",
      category: "compliance",
    },
  ],
  sidebarLinks: [
    { title: "Entity Tax Guide", href: "/entity-tax-guide" },
    { title: "Annual Reports", href: "/annual-reports" },
    { title: "Foreign Registration", href: "/foreign-registration" },
    { title: "Registered Agent", href: "/registered-agent" },
  ],
  relatedPackages: ["wyoming-gold", "wyoming-silver"],
  crossPillarCTA: {
    pillar: "formation",
    title: "Haven't Formed Yet? Start with the Tax Guide.",
    description:
      "Understanding tax implications before you choose an entity type saves time and money. Our Entity Tax Guide helps you make an informed decision.",
    href: "/entity-tax-guide",
  },
};
