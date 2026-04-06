import type { ClusterContent } from "@/lib/types";

export const clusterPages: ClusterContent[] = [
  // ==================== PRIVACY PILLAR ====================
  {
    slug: "anonymous-llc",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Anonymous LLC Formation",
    description:
      "Form an LLC with no public ties to your name. Wyoming and Nevada allow formation without disclosing members — combined with our nominee services, your identity is fully protected.",
    readingTime: "8 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is an Anonymous LLC?",
        content:
          "An anonymous LLC is a limited liability company formed in a state that does not require public disclosure of its members or managers. Wyoming and Nevada are the two states with the strongest anonymity protections — neither requires member names on any publicly filed document. When combined with our year-round nominee services, your personal information never appears on any state filing, at formation or any time afterward. This is fundamentally different from states like California, New York, or Texas, which require disclosure of members, managers, or organizers on public filings.",
      },
      {
        id: "how-it-works",
        type: "text",
        title: "How Anonymous LLC Formation Works",
        content:
          "We file your Articles of Organization with the state using our nominee directors and officers — their names appear on the public record, not yours. Your operating agreement (a private document) identifies you as the actual member/owner. Combined with offshore record storage, even the operating agreement is held outside U.S. jurisdiction. The result: no public database, state filing, or domestic document connects your name to the entity.",
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
              "Protect property ownership information from public records. Tenants and opposing parties can't discover your personal assets.",
          },
          {
            title: "High-Net-Worth Individuals",
            description:
              "Shield business activities from public scrutiny. Prevent competitors, litigants, or bad actors from mapping your holdings.",
          },
          {
            title: "Business Owners Seeking Privacy",
            description:
              "Keep your name off state databases that data brokers and public records sites scrape and publish.",
          },
          {
            title: "International Clients",
            description:
              "Form U.S. entities without personal information appearing in American public records.",
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
              "Wyoming protects single-member LLCs — the only state to do so explicitly.",
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
          "Yes. The IRS knows who owns the LLC through tax filings. Anonymous LLCs protect you from public records searches — state filings, data brokers, and casual inquiries — not from lawful government inquiry.",
        category: "privacy",
      },
      {
        id: "anon-faq-3",
        question:
          "Do I need to live in Wyoming to form an anonymous LLC there?",
        answer:
          "No. You can form a Wyoming LLC regardless of where you live. If your LLC does business in your home state, you may need to foreign register there.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "Offshore Privacy", href: "/offshore-privacy" },
      { title: "Gold Package", href: "/gold?state=wyoming" },
      { title: "WY vs NV Comparison", href: "/wyoming-vs-nevada-llc" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    crossPillarCTA: {
      pillar: "asset",
      title: "Also Interested in Asset Protection?",
      description:
        "Anonymous LLCs are often the first step in an asset protection strategy. Learn how charging order protection adds another layer.",
      href: "/asset-protection",
    },
  },
  {
    slug: "nominee-services",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Year-Round Nominee Services",
    description:
      "Our Gold packages include nominee directors and officers listed on ALL public filings year-round — not just at formation. Your name never appears on any state record.",
    readingTime: "7 min read",
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
    ],
    sidebarLinks: [
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Offshore Privacy", href: "/offshore-privacy" },
      { title: "Gold Package", href: "/gold?state=wyoming" },
      { title: "Gold vs Silver", href: "/gold-vs-silver-wyoming" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
  },
  {
    slug: "private-incorporation",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Private Incorporation",
    description:
      "Privacy-first business formation in Wyoming, Nevada, California, and Florida. Our nominee structure ensures your personal information stays off public filings in every state.",
    readingTime: "6 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Private Incorporation?",
        content:
          "Private incorporation is the process of forming a business entity — LLC or Corporation — with maximum privacy protections. This means choosing a formation state with strong privacy statutes, using nominee services to keep your name off public filings, and storing corporate records outside U.S. jurisdiction. Our private incorporation service is available in Wyoming, Nevada, California, and Florida.",
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
              "Our #1 recommendation. Strongest privacy statutes, lowest costs, best asset protection. Direct formation with nominees.",
          },
          {
            title: "Nevada",
            description:
              "Strong privacy, established business court, no state income tax. Ideal if operating physically in Nevada.",
          },
          {
            title: "California",
            description:
              "WY/NV nominee formation + California foreign registration. Full privacy with California compliance.",
          },
          {
            title: "Florida",
            description:
              "WY/NV nominee formation + Florida foreign registration. Privacy-first approach for Florida businesses.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "pi-faq-1",
        question: "Can I incorporate privately in any state?",
        answer:
          "We offer private incorporation in Wyoming, Nevada, California, and Florida. For CA and FL, we use a WY/NV nominee structure with foreign registration in the target state.",
        category: "privacy",
      },
    ],
    sidebarLinks: [
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "State Comparison", href: "/wyoming-vs-nevada-llc" },
    ],
    relatedPackages: ["wyoming-gold", "california-private", "florida-private"],
  },
  {
    slug: "offshore-privacy",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Offshore Record Storage",
    description:
      "Corporate documents stored outside U.S. jurisdiction. Domestic subpoenas and court orders typically cannot compel production of documents held in foreign jurisdictions.",
    readingTime: "6 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Offshore Record Storage?",
        content:
          "Offshore record storage means your corporate documents — operating agreement, meeting minutes, member registry, and other sensitive records — are physically stored in a jurisdiction outside the United States. This adds a significant layer of privacy protection because domestic subpoenas and court orders typically do not have the authority to compel production of documents held in foreign jurisdictions.",
      },
      {
        id: "what-is-stored",
        type: "text",
        title: "What Documents Are Stored Offshore?",
        content:
          "We store all non-public corporate records offshore: your operating agreement (which names the true members), meeting minutes, member/officer registry, financial records authorization, and any other documents that could reveal beneficial ownership. Only the bare minimum required by the formation state remains domestic — and those documents use nominee names, not yours.",
      },
    ],
    faqs: [
      {
        id: "off-faq-1",
        question: "Is offshore record storage legal?",
        answer:
          "Yes. There is no U.S. law requiring corporate records to be stored domestically. Offshore storage is a legitimate privacy strategy used by businesses and individuals worldwide.",
        category: "privacy",
      },
    ],
    sidebarLinks: [
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Gold Package", href: "/gold?state=wyoming" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
  },
  {
    slug: "anonymous-corporation",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Anonymous Corporation Formation",
    description:
      "Form a corporation with full privacy protections — nominee directors and officers, offshore record storage, and no public disclosure of beneficial owners. Ideal for entrepreneurs who need corporate structure without personal exposure.",
    readingTime: "6 min read",
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
    ],
    sidebarLinks: [
      { title: "Anonymous LLC", href: "/anonymous-llc" },
      { title: "Nominee Services", href: "/nominee-services" },
      { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
      { title: "Gold Package", href: "/gold?state=wyoming" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    crossPillarCTA: {
      pillar: "formation",
      title: "Exploring Company Formation Options?",
      description:
        "Not sure whether an LLC or corporation is the right structure? Our formation guides break down the differences in liability, taxation, and management.",
      href: "/formation",
    },
  },

  // ==================== ASSET PROTECTION PILLAR ====================
  {
    slug: "charging-order-protection",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Charging Order Protection",
    description:
      "The strongest domestic shield for LLC assets. A charging order limits creditors to a lien on distributions — they cannot seize LLC assets, force distributions, or take over management.",
    readingTime: "7 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Charging Order Protection?",
        content:
          "A charging order is a court order that entitles a creditor to receive distributions from an LLC, IF and WHEN those distributions are made. Critically, a charging order does NOT give the creditor the ability to seize LLC assets, force the LLC to make distributions, participate in LLC management, or access LLC bank accounts. In states with strong charging order protection (like Wyoming), this is the exclusive remedy available to a creditor — meaning they have no other legal avenue to reach your LLC's assets.",
      },
      {
        id: "wyoming-strongest",
        type: "differentiator",
        title: "Wyoming: The Gold Standard",
        content:
          "Wyoming offers the strongest charging order protection in the United States for several reasons:",
        items: [
          {
            title: "Single-Member LLC Protection",
            description:
              "Wyoming is the only state that explicitly extends charging order protection to single-member LLCs. Most states weaken or eliminate this protection for single-member entities.",
            icon: "ShieldCheck",
          },
          {
            title: "Exclusive Remedy",
            description:
              "Wyoming statute makes the charging order the exclusive remedy — creditors have no alternative legal path to your LLC assets.",
            icon: "Gavel",
          },
          {
            title: "No Foreclosure on Membership Interest",
            description:
              "Unlike some states, Wyoming does not allow creditors to foreclose on your membership interest in the LLC.",
            icon: "Lock",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "cop-faq-1",
        question: "Does charging order protection work for single-member LLCs?",
        answer:
          "In Wyoming, yes — it's the only state that explicitly protects single-member LLCs. In most other states, courts have weakened or eliminated charging order protection for single-member entities.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming Asset Protection", href: "/wyoming-asset-protection" },
      {
        title: "Investment Holding LLC",
        href: "/investment-holding-llc",
      },
      { title: "Gold Package", href: "/gold?state=wyoming" },
    ],
    relatedPackages: ["wyoming-gold"],
    crossPillarCTA: {
      pillar: "privacy",
      title: "Add Privacy to Your Protection",
      description:
        "Combine asset protection with anonymous LLC formation and year-round nominees for complete shielding.",
      href: "/privacy",
    },
  },
  {
    slug: "wyoming-asset-protection",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Wyoming Asset Protection",
    description:
      "Wyoming offers the strongest domestic asset protection for LLC owners. Charging order protection, no state income tax, and the most business-friendly statutes in the country.",
    readingTime: "6 min read",
    sections: [
      {
        id: "why-wyoming",
        type: "text",
        title: "Why Wyoming for Asset Protection?",
        content:
          "Wyoming has established itself as the premier state for LLC-based asset protection. The combination of the strongest charging order protection (including single-member LLCs), no state income tax, no franchise tax, minimal annual fees, and strong privacy statutes makes it the top choice for individuals with $500K+ in assets who want domestic protection.",
      },
      {
        id: "strategies",
        type: "audience",
        title: "Wyoming Asset Protection Strategies",
        content:
          "Common structures our clients use for Wyoming-based asset protection:",
        items: [
          {
            title: "Single Wyoming LLC",
            description:
              "Ideal for individual asset protection. Wyoming's single-member charging order protection makes this viable.",
          },
          {
            title: "Parent-Subsidiary Structure",
            description:
              "Wyoming parent LLC owns subsidiaries in operating states. Parent provides umbrella protection.",
          },
          {
            title: "Investment Holding LLC",
            description:
              "Separate investment assets (stocks, crypto, real estate) from operational business risk.",
          },
          {
            title: "Real Estate Series LLC",
            description:
              "Each property in its own series cell, isolated from other properties' liabilities.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "wyap-faq-1",
        question:
          "How much should I have in assets before considering protection?",
        answer:
          "We recommend formal asset protection structures for individuals with $500,000 or more in personal or business assets. But the right time to set up protection is BEFORE you need it.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
      {
        title: "Investment Holding LLC",
        href: "/investment-holding-llc",
      },
      { title: "Wyoming State Hub", href: "/wyoming" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },
  {
    slug: "nevada-asset-protection",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Nevada Asset Protection",
    description:
      "Nevada's strong charging order statutes and dedicated business court make it a solid choice for asset protection, especially for those operating in Nevada.",
    readingTime: "5 min read",
    sections: [
      {
        id: "nevada-overview",
        type: "text",
        title: "Nevada Asset Protection Overview",
        content:
          "Nevada has long been recognized as a business-friendly state with strong asset protection statutes. While Wyoming has surpassed Nevada for single-member LLC protection, Nevada remains an excellent choice for multi-member LLCs, clients who physically operate in Nevada, and those who value Nevada's established business court system and decades of favorable case law.",
      },
      {
        id: "vs-wyoming",
        type: "comparison",
        title: "Nevada vs. Wyoming for Asset Protection",
        content:
          "Both states offer strong charging order protection, but they differ in important ways. Wyoming explicitly protects single-member LLCs, while Nevada's protection is stronger for multi-member entities. Wyoming has lower annual costs ($60 vs $350+). Nevada offers a more established business court system. For most clients, we recommend Wyoming — but Nevada is the better choice if you plan to physically operate there.",
      },
    ],
    faqs: [
      {
        id: "nvap-faq-1",
        question: "Is Nevada or Wyoming better for asset protection?",
        answer:
          "Wyoming is generally better due to single-member LLC protection and lower costs. Nevada is better if you physically operate there or prefer its established business court.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
      { title: "Wyoming vs Nevada", href: "/wyoming-vs-nevada-llc" },
      { title: "Nevada State Hub", href: "/nevada" },
    ],
    relatedPackages: ["nevada-gold", "nevada-silver"],
  },
  {
    slug: "investment-holding-llc",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Investment Holding LLC",
    description:
      "Separate your investment assets — stocks, real estate, cryptocurrency — from operational business risk using a dedicated holding LLC.",
    readingTime: "6 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is an Investment Holding LLC?",
        content:
          "An investment holding LLC is an entity whose sole purpose is to hold investment assets — stocks, bonds, real estate, cryptocurrency, or other investments. By separating investment assets from operational business activities, you create a legal barrier between the two. If your operating business faces a lawsuit or creditor claim, your investment assets held in a separate LLC are shielded by charging order protection.",
      },
      {
        id: "how-it-works",
        type: "text",
        title: "How the Structure Works",
        content:
          "You form a Wyoming LLC specifically to hold investment assets. This LLC has no operational activities — it doesn't sell products, provide services, or hire employees. It simply owns assets. Combined with Wyoming's charging order protection, creditors of your operating business or personal creditors cannot reach the assets held within this LLC.",
      },
    ],
    faqs: [
      {
        id: "ihlc-faq-1",
        question: "Can I use one LLC for both operations and investments?",
        answer:
          "You can, but it defeats the purpose of asset separation. Having a dedicated holding LLC creates a legal barrier between your operational risk and your investment assets.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
      {
        title: "Real Estate Protection",
        href: "/real-estate",
      },
      { title: "Gold Package", href: "/gold?state=wyoming" },
    ],
    relatedPackages: ["wyoming-gold"],
  },
  {
    slug: "real-estate",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Real Estate Asset Protection",
    description:
      "Protect rental properties and real estate investments with LLC structures that isolate each property's liability and keep ownership private.",
    readingTime: "6 min read",
    sections: [
      {
        id: "why-protect",
        type: "text",
        title: "Why Protect Real Estate with an LLC?",
        content:
          "Real estate investors face unique liability risks: tenant lawsuits, slip-and-fall claims, property damage disputes, and more. Without proper entity structuring, a single lawsuit from one property could put all of your personal assets and other properties at risk. An LLC creates a legal barrier between each property and your personal assets.",
      },
      {
        id: "strategies",
        type: "audience",
        title: "Real Estate LLC Strategies",
        content:
          "Common approaches our clients use for real estate protection:",
        items: [
          {
            title: "One LLC Per Property",
            description:
              "Each property in its own LLC. Maximum isolation — a lawsuit on one property can't reach others.",
          },
          {
            title: "Series LLC",
            description:
              "Wyoming Series LLC with each property in a separate 'series cell.' Similar isolation with simpler administration.",
          },
          {
            title: "Parent-Subsidiary",
            description:
              "Wyoming parent LLC owns subsidiary LLCs in each state where properties are located.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "re-faq-1",
        question: "Do I need a separate LLC for each property?",
        answer:
          "It depends on your risk tolerance. Each property in its own LLC provides maximum isolation. A Series LLC offers similar protection with simpler administration. We can help you decide.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Investment Holding LLC",
        href: "/investment-holding-llc",
      },
      { title: "Wyoming Asset Protection", href: "/wyoming-asset-protection" },
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },

  // ==================== FORMATION PILLAR ====================
  {
    slug: "wyoming-llc",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Wyoming LLC Formation",
    description:
      "America's most business-friendly state for LLC formation. All-inclusive packages include state filing fees, registered agent, corporate minutes, and annual report filing.",
    readingTime: "7 min read",
    sections: [
      {
        id: "why-wyoming",
        type: "text",
        title: "Why Form a Wyoming LLC?",
        content:
          "Wyoming is consistently ranked as the #1 state for LLC formation. It offers no state income tax, the strongest charging order protection (including single-member LLCs), no public member disclosure, the lowest annual fees ($60 annual report), and fast formation (2-3 business days). Whether you're forming for privacy, asset protection, or simply to start a business, Wyoming delivers the best combination of benefits at the lowest cost.",
      },
      {
        id: "whats-included",
        type: "text",
        title: "What's Included in Every Wyoming LLC Package",
        content:
          "Every Wyoming LLC package includes state filing fees, registered agent for one year, corporate minutes maintenance, annual report filing, Certificate of Good Standing, and corporate seal. Gold packages add year-round nominee directors and officers, offshore record storage, and a custom operating agreement. There are no hidden fees — the price you see is the price you pay.",
      },
    ],
    faqs: [
      {
        id: "wyllc-faq-1",
        question: "How long does Wyoming LLC formation take?",
        answer:
          "Standard formation takes 2-3 business days after we submit your filing. Rush filing (24-hour processing) is available as an add-on for $199.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming Corporation", href: "/wyoming-corporation" },
      { title: "Wyoming State Hub", href: "/wyoming" },
      { title: "WY vs NV Comparison", href: "/wyoming-vs-nevada-llc" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },
  {
    slug: "nevada-llc",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Nevada LLC Formation",
    description:
      "Strong privacy statutes, no state income tax, and a dedicated business court. All-inclusive Nevada LLC formation with every fee included.",
    readingTime: "6 min read",
    sections: [
      {
        id: "why-nevada",
        type: "text",
        title: "Why Form a Nevada LLC?",
        content:
          "Nevada has been a premier state for business formation for decades. It offers no state income tax, strong privacy statutes (no public member disclosure), a dedicated business court, and well-established business law precedents. We provide a real Nevada business address for your entity. Nevada LLC packages include all state filing fees, business license, registered agent, and compliance services.",
      },
      {
        id: "costs",
        type: "text",
        title: "Understanding Nevada Costs",
        content:
          "Nevada has higher state fees than Wyoming: $425 initial filing fee, $200/year business license, and $150+ annual list filing. All of these are included in our package prices — no surprises. While more expensive than Wyoming, Nevada offers a more established business court system and decades of favorable business law precedents.",
      },
    ],
    faqs: [
      {
        id: "nvllc-faq-1",
        question: "Is Nevada or Wyoming better for an LLC?",
        answer:
          "Wyoming is better for most clients due to lower costs and stronger single-member protection. Nevada is better if you operate physically in Nevada or prefer its established business court.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Nevada Corporation", href: "/nevada-corporation" },
      { title: "Nevada State Hub", href: "/nevada" },
      { title: "WY vs NV Comparison", href: "/wyoming-vs-nevada-llc" },
    ],
    relatedPackages: ["nevada-gold", "nevada-silver", "nevada-bronze"],
  },
  {
    slug: "wyoming-corporation",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Wyoming Corporation",
    description:
      "Corporate formation in Wyoming with close-knit statutes. Ideal for businesses planning to raise capital, issue stock, or establish a formal board structure.",
    readingTime: "5 min read",
    sections: [
      {
        id: "overview",
        type: "text",
        title: "Wyoming Corporation Formation",
        content:
          "A Wyoming corporation (C-Corp or S-Corp election) is the right choice if you plan to raise capital through stock issuance, go public, or need a formal board of directors structure. Wyoming's corporate statutes are close-knit and business-friendly, with strong director/officer liability protections and no state income tax. All our corporate packages include nominee directors and officers (Gold), registered agent, and full compliance services.",
      },
    ],
    faqs: [
      {
        id: "wycorp-faq-1",
        question: "LLC or Corporation — which should I choose?",
        answer:
          "Most small business owners benefit from an LLC. Corporations are better for raising capital, going public, or needing a formal board. See our LLC vs. Corporation comparison for details.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming LLC", href: "/wyoming-llc" },
      { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
      { title: "Wyoming State Hub", href: "/wyoming" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },
  {
    slug: "nevada-corporation",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Nevada Corporation",
    description:
      "Nevada corporate formation with dedicated business court and strong liability protections for directors and officers.",
    readingTime: "5 min read",
    sections: [
      {
        id: "overview",
        type: "text",
        title: "Nevada Corporation Formation",
        content:
          "Nevada corporations benefit from the state's dedicated business court, strong director/officer liability protections, no state income tax, and decades of established corporate law precedents. Our Nevada corporate packages include all state filing fees, business license, registered agent, and compliance services. Gold packages add nominee directors and officers and offshore record storage.",
      },
    ],
    faqs: [
      {
        id: "nvcorp-faq-1",
        question: "Why choose Nevada over Delaware for a corporation?",
        answer:
          "Delaware is the gold standard for VC-backed C-Corps. Nevada is better for closely held corporations, small businesses, and companies that value privacy. Nevada also has no state income tax.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Nevada LLC", href: "/nevada-llc" },
      { title: "LLC vs Corporation", href: "/llc-vs-corporation" },
      { title: "Nevada State Hub", href: "/nevada" },
    ],
    relatedPackages: ["nevada-gold", "nevada-silver"],
  },
  {
    slug: "shelf-companies",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Shelf Companies",
    description:
      "Pre-aged entities with established formation dates. Clean histories, no prior liabilities. Immediate availability for business needs requiring entity age.",
    readingTime: "5 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is a Shelf Company?",
        content:
          "A shelf company (also called an 'aged company' or 'shelf corporation') is a business entity that was formed at some point in the past but has never conducted any business activity. These entities have been maintained in good standing and are available for immediate purchase. The primary benefit: an established formation date without the wait.",
      },
      {
        id: "why-use",
        type: "audience",
        title: "Why Use a Shelf Company?",
        content: "Shelf companies serve several legitimate business purposes:",
        items: [
          {
            title: "Contract Requirements",
            description:
              "Some contracts require vendors to have been in business for a minimum number of years.",
          },
          {
            title: "Business Credit",
            description:
              "Entity age can be a factor in establishing business credit profiles.",
          },
          {
            title: "Licensing",
            description:
              "Certain licenses or permits may require an entity to have existed for a specified period.",
          },
          {
            title: "Immediate Availability",
            description:
              "No waiting for state formation processing — the entity is already formed and in good standing.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "shelf-faq-1",
        question: "Do shelf companies have any prior liabilities?",
        answer:
          "No. All our shelf companies come with clean histories — no prior business activity, no debts, no liens, and no liabilities. We guarantee a clean slate.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming LLC", href: "/wyoming-llc" },
      { title: "Gold Package", href: "/gold?state=wyoming" },
    ],
    relatedPackages: ["shelf-companies"],
  },
  {
    slug: "series-llc",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Series LLC Formation",
    description:
      "A Wyoming Series LLC creates isolated liability cells within a single entity — ideal for real estate investors and multi-asset protection. Each series operates independently with its own assets, members, and liability shield.",
    readingTime: "7 min read",
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
        question:
          "Is a Series LLC cheaper than forming multiple separate LLCs?",
        answer:
          "Significantly cheaper. Forming five separate Wyoming LLCs would cost five times the formation fee plus five annual reports ($300/year). A Series LLC with five series costs one formation fee and one $60 annual report. The savings increase with every additional series you create. The tradeoff: Series LLCs require disciplined record-keeping to maintain the liability separation between series.",
        category: "formation",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming LLC", href: "/wyoming-llc" },
      { title: "Real Estate AP", href: "/real-estate" },
      { title: "Investment Holding LLC", href: "/investment-holding-llc" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },

  // ==================== COMPLIANCE PILLAR ====================
  {
    slug: "registered-agent",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Registered Agent Service",
    description:
      "Professional registered agent service in Wyoming and Nevada. Receive legal documents and state correspondence — included in every package.",
    readingTime: "5 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is a Registered Agent?",
        content:
          "Every LLC and corporation in every U.S. state must designate a registered agent — a person or company authorized to receive legal documents (service of process), state correspondence, and official notices on behalf of your entity. The registered agent must have a physical address in the state of formation (PO boxes are not accepted) and be available during business hours. Our registered agent service is included in every package for the first year.",
      },
    ],
    faqs: [
      {
        id: "ra-faq-1",
        question: "Can I be my own registered agent?",
        answer:
          "Technically yes, but it's not recommended. You'd need a physical address in the formation state and be available during business hours. Using a professional registered agent protects your privacy and ensures you never miss important legal documents.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Annual Reports", href: "/annual-reports" },
      { title: "Corporate Minutes", href: "/corporate-minutes" },
      { title: "Virtual Office", href: "/virtual-office" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },
  {
    slug: "annual-reports",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Annual Report Filing",
    description:
      "Timely preparation and filing of state annual reports. Avoid penalties, late fees, and administrative dissolution — included in Silver and Gold packages.",
    readingTime: "4 min read",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are Annual Reports?",
        content:
          "Annual reports (called 'Annual List' in Nevada) are required state filings that confirm your entity's current information — registered agent, officers, directors, and business address. Both Wyoming and Nevada require annual filings. Failure to file results in penalties, late fees, and eventually administrative dissolution of your entity. We prepare and file your annual report as part of our Silver and Gold packages.",
      },
    ],
    faqs: [
      {
        id: "ar-faq-1",
        question: "What happens if I miss my annual report?",
        answer:
          "You'll face late fees and penalties. If you continue to miss filings, the state will administratively dissolve your entity, meaning it loses its legal status. We make sure this never happens.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "Corporate Minutes", href: "/corporate-minutes" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },
  {
    slug: "corporate-minutes",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Corporate Minutes Maintenance",
    description:
      "Professional minute book preparation and maintenance. Protect your corporate veil with proper documentation — included in Silver and Gold packages.",
    readingTime: "5 min read",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are Corporate Minutes?",
        content:
          "Corporate minutes are formal records of decisions made by your LLC's members (or corporation's board of directors). They document meetings, resolutions, and significant business decisions. Maintaining proper minutes is essential for preserving your limited liability protection — without them, a court might 'pierce the corporate veil' and hold you personally liable for business debts. Other formation companies charge $400-500/year extra for this service. We include it in every Silver and Gold package.",
      },
    ],
    faqs: [
      {
        id: "cm-faq-1",
        question: "What happens if I don't maintain corporate minutes?",
        answer:
          "Without proper minutes, you risk 'piercing the corporate veil' — a court ruling that treats your LLC as a personal alter ego, eliminating your liability protection. We maintain your minutes to prevent this.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "Annual Reports", href: "/annual-reports" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },
  {
    slug: "virtual-office",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Virtual Office & Mail Forwarding",
    description:
      "Professional Reno, NV business address with mail forwarding. Separate from your registered agent address — used for business correspondence.",
    readingTime: "4 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is a Virtual Office?",
        content:
          "A virtual office provides a professional business address without the cost of physical office space. Our Nevada address gives your business a real street address (not a PO box) that can be used for business cards, website, correspondence, and state filings. Mail is received and forwarded to your designated address.",
      },
    ],
    faqs: [
      {
        id: "vo-faq-1",
        question: "Is the virtual office the same as the registered agent?",
        answer:
          "No. Registered agent is a legal requirement for receiving legal documents. A virtual office is an optional business address for correspondence, marketing, and operations. They serve different purposes.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      {
        title: "Foreign Registration",
        href: "/foreign-registration",
      },
    ],
    relatedPackages: ["wyoming-gold"],
  },
  {
    slug: "foreign-registration",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Foreign Registration",
    description:
      "Register your entity to do business in another state. Required when your LLC operates outside its formation state. Available as an add-on for $149.",
    readingTime: "4 min read",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Foreign Registration?",
        content:
          "Foreign registration (or 'qualification to do business') is the process of registering your LLC or corporation in a state where it was NOT formed but where it conducts business. For example, if you form a Wyoming LLC but operate in California, you need to foreign register in California. This gives your entity legal authority to do business in that state while maintaining the benefits of your formation state.",
      },
      {
        id: "when-needed",
        type: "text",
        title: "When Is Foreign Registration Needed?",
        content:
          "You generally need foreign registration if your LLC has a physical presence in another state (office, employees, warehouse), regularly conducts business transactions in that state, or solicits business from residents of that state. Passively holding assets (like real estate) may also trigger requirements. Rules vary by state — we can advise on your specific situation.",
      },
    ],
    faqs: [
      {
        id: "fr-faq-1",
        question: "Does foreign registration affect my privacy?",
        answer:
          "Foreign registration shows your entity name in the registering state, but uses your formation state's filing details. With our nominee structure in Wyoming/Nevada, your personal information stays off all filings — both in the formation state and the foreign registration state.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "California State Hub", href: "/california" },
      { title: "Florida State Hub", href: "/florida" },
    ],
    relatedPackages: ["california-private", "florida-private"],
  },
  {
    slug: "second-tier-state-filings",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "2nd-Tier State Filings",
    description:
      "Formation and compliance services for secondary states beyond Wyoming and Nevada. We handle filings in all 50 states when your business structure requires additional state registrations.",
    readingTime: "5 min read",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are 2nd-Tier State Filings?",
        content:
          "While Wyoming and Nevada are our specialty states for privacy-focused formation, many business structures require entities in additional states. 2nd-tier state filings cover formation, annual reports, and compliance maintenance for entities in states beyond our core two. Whether you need a holding company in Delaware, a foreign registration in Texas, or an operating entity in any other state, we handle the filings so you can focus on your business.",
      },
      {
        id: "when-needed",
        type: "text",
        title: "When Do You Need Multi-State Filings?",
        content:
          "Multi-state structures are common for real estate investors with properties in multiple states, businesses operating across state lines, holding company arrangements where different entities serve different purposes, and asset protection strategies that benefit from jurisdictional diversification. We coordinate filings across all states to ensure your entire structure stays in good standing.",
      },
    ],
    faqs: [
      {
        id: "stf-faq-1",
        question: "Do you handle filings in all 50 states?",
        answer:
          "Yes. While we specialize in Wyoming and Nevada formation, we coordinate filings in all 50 states for clients who need multi-state structures. This includes formation, annual reports, registered agent service, and compliance maintenance.",
        category: "compliance",
      },
      {
        id: "stf-faq-2",
        question:
          "Does filing in another state affect my Wyoming/Nevada privacy?",
        answer:
          "Your Wyoming or Nevada formation filings remain private regardless of what you file in other states. We use nominee structures on your formation filings and can advise on minimizing disclosure in states that require more information.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      {
        title: "Foreign Registration",
        href: "/foreign-registration",
      },
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "Annual Reports", href: "/annual-reports" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
  },
  {
    slug: "shares-corporate-records",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Shares & Corporate Records",
    description:
      "Professional management of share certificates, stock ledgers, corporate record books, and ownership documentation. Essential for corporations and multi-member LLCs.",
    readingTime: "4 min read",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are Corporate Records Services?",
        content:
          "Every corporation and many LLCs need proper documentation of ownership — share certificates, stock ledgers, membership interest records, and corporate record books. These documents establish who owns what, track transfers, and provide the legal foundation for your entity's governance. We prepare, maintain, and store these records as part of our compliance services, ensuring they are accurate, up to date, and properly organized.",
      },
      {
        id: "what-we-maintain",
        type: "text",
        title: "What We Maintain",
        content:
          "Our corporate records service covers share certificates and stock ledger maintenance, membership interest documentation for LLCs, corporate record book organization and updates, ownership transfer documentation, and meeting minutes reflecting corporate actions. For Gold package clients, these records are maintained by our offshore records custodian for additional privacy protection.",
      },
    ],
    faqs: [
      {
        id: "scr-faq-1",
        question: "Do I need share certificates for an LLC?",
        answer:
          "LLCs don't issue share certificates — they have membership interests documented in the operating agreement. However, proper documentation of ownership percentages and any transfers is equally important. We handle both LLC membership documentation and corporate share certificates.",
        category: "compliance",
      },
      {
        id: "scr-faq-2",
        question: "Where are my corporate records stored?",
        answer:
          "For Gold package clients, corporate records are stored by our offshore records custodian outside U.S. jurisdiction. For Silver and Bronze packages, records are maintained securely in our domestic files. Either way, you have access to your records at any time.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Corporate Minutes", href: "/corporate-minutes" },
      { title: "Annual Reports", href: "/annual-reports" },
      { title: "Offshore Privacy", href: "/offshore-privacy" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
  },

  // ==================== NEW ENTRIES ====================
  {
    slug: "wyoming-privacy",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Wyoming Privacy Protections",
    description:
      "Wyoming leads the nation in business privacy. No public member disclosure, full nominee compatibility, and offshore storage support make it the top choice for privacy-conscious business owners.",
    readingTime: "6 min read",
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
  },
  {
    slug: "nevada-privacy",
    pillar: "privacy",
    pillarLabel: "Business Privacy",
    title: "Nevada Privacy Protections",
    description:
      "Nevada offers strong business privacy with no public member disclosure, established business court protections, and 25+ years of favorable privacy precedent. Ideal for businesses operating in Nevada.",
    readingTime: "6 min read",
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
  },
  {
    slug: "wyoming-registered-agent",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Wyoming Registered Agent Service",
    description:
      "Professional registered agent service at our Cheyenne, Wyoming address. Receive legal documents and state correspondence reliably — included in every Wyoming package.",
    readingTime: "5 min read",
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
    ],
    sidebarLinks: [
      {
        title: "Registered Agent Overview",
        href: "/registered-agent",
      },
      { title: "Annual Reports", href: "/annual-reports" },
      { title: "Wyoming State Hub", href: "/wyoming" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
  },
  {
    slug: "nevada-registered-agent",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Nevada Registered Agent Service",
    description:
      "Professional registered agent service with a Nevada street address. In-state presence, reliable legal document handling, and compliance support — included in every Nevada package.",
    readingTime: "5 min read",
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
    ],
    sidebarLinks: [
      {
        title: "Registered Agent Overview",
        href: "/registered-agent",
      },
      { title: "Annual Reports", href: "/annual-reports" },
      { title: "Nevada State Hub", href: "/nevada" },
    ],
    relatedPackages: ["nevada-gold", "nevada-silver", "nevada-bronze"],
  },
  {
    slug: "domestication",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Entity Domestication",
    description:
      "Move your LLC or corporation from one state to another without dissolving and reforming. Preserve your entity's history, EIN, contracts, and bank accounts while gaining a new state's protections.",
    readingTime: "6 min read",
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
    ],
    sidebarLinks: [
      {
        title: "Foreign Registration",
        href: "/foreign-registration",
      },
      { title: "Wyoming LLC", href: "/wyoming-llc" },
      { title: "Nevada LLC", href: "/nevada-llc" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
  },

  // ==================== FORMATION PILLAR (TAX) ====================
  {
    slug: "entity-tax-guide",
    pillar: "formation",
    pillarLabel: "Company Formation",
    title: "Entity Tax Guide",
    description:
      "How entity type affects your taxes — understand before you choose. This educational overview helps you make informed formation decisions. Not tax advice — consult a CPA for your specific situation.",
    readingTime: "9 min read",
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
      {
        title: "Tax Filing & Obligations",
        href: "/tax-obligations",
      },
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
  },

  // ==================== COMPLIANCE PILLAR (TAX) ====================
  {
    slug: "tax-obligations",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Tax Filing & Obligations",
    description:
      "Ongoing tax requirements after forming your entity. Understand federal and state filing obligations, deadlines, and what Incorporate123 handles vs. what requires a CPA.",
    readingTime: "7 min read",
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
            icon: "Calculator",
          },
          {
            title: "We Coordinate",
            description:
              "We provide your CPA with all formation documents, EIN confirmation, and entity details they need to prepare accurate returns.",
            icon: "Users",
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
      {
        title: "Foreign Registration",
        href: "/foreign-registration",
      },
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
  },
];
