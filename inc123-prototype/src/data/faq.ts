import type { FAQItem } from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";
import type { RelatedGuide } from "@/design-system/components/RelatedGuides";

/* ------------------------------------------------
   Category configuration
   ------------------------------------------------ */
export type FAQCategory = PillarName | "packages" | "general";

export const categoryDisplayLabels: Record<FAQCategory, string> = {
  privacy: "Business Privacy",
  asset: "Asset Protection",
  formation: "Company Formation",
  compliance: "Compliance",
  packages: "Packages & Pricing",
  general: "General",
};

export const categoryOrder: FAQCategory[] = [
  "privacy",
  "asset",
  "formation",
  "compliance",
  "packages",
  "general",
];

export const categoryPillarMap: Partial<Record<FAQCategory, PillarName>> = {
  privacy: "privacy",
  asset: "asset",
  formation: "formation",
  compliance: "compliance",
};

/* Pillar accent colors for category headings */
export const categoryBorderBottomColors: Record<FAQCategory, string> = {
  privacy: "border-b-pillar-privacy",
  asset: "border-b-pillar-asset",
  formation: "border-b-pillar-formation",
  compliance: "border-b-pillar-compliance",
  packages: "border-b-secondary",
  general: "border-b-muted",
};

/* ------------------------------------------------
   Related guides per category
   ------------------------------------------------ */
export const relatedGuidesMap: Record<FAQCategory, RelatedGuide[]> = {
  privacy: [
    {
      title: "Read the Full Anonymous LLC Guide",
      description:
        "Everything you need to know about forming an anonymous LLC for maximum privacy.",
      href: "/anonymous-llc",
    },
    {
      title: "Nominee Services Explained",
      description:
        "How year-round nominee officers and directors protect your identity.",
      href: "/nominee-services",
    },
    {
      title: "Compare Gold vs Silver Packages",
      description:
        "See what privacy features are included in each package tier.",
      href: "/compare-packages",
    },
  ],
  asset: [
    {
      title: "Charging Order Protection Guide",
      description:
        "Understand how Wyoming's charging order protection shields your assets.",
      href: "/charging-order-protection",
    },
    {
      title: "Wyoming Asset Protection Overview",
      description:
        "Why Wyoming is the top state for domestic asset protection structures.",
      href: "/asset-protection",
    },
    {
      title: "Investment Holding LLC",
      description: "How to use an LLC to hold and protect investment assets.",
      href: "/investment-holding-llc",
    },
  ],
  formation: [
    {
      title: "Wyoming LLC Formation",
      description:
        "Step-by-step guide to forming your Wyoming LLC with all-inclusive pricing.",
      href: "/wyoming",
    },
    {
      title: "Nevada LLC Formation",
      description:
        "Everything included in Nevada formation packages and state-specific details.",
      href: "/nevada",
    },
    {
      title: "LLC vs Corporation Comparison",
      description:
        "Full side-by-side comparison to help you choose the right entity type.",
      href: "/llc-vs-corporation",
    },
  ],
  compliance: [
    {
      title: "Registered Agent Services",
      description:
        "Professional registered agent service included in every package.",
      href: "/registered-agent",
    },
    {
      title: "Annual Reports Guide",
      description:
        "Filing requirements, deadlines, and what happens if you miss them.",
      href: "/annual-reports",
    },
    {
      title: "Corporate Minutes Maintenance",
      description:
        "Why corporate minutes matter and how we maintain them for you.",
      href: "/corporate-minutes",
    },
  ],
  packages: [
    {
      title: "Compare All Packages",
      description:
        "Side-by-side comparison of Gold, Silver, and Bronze packages.",
      href: "/compare-packages",
    },
    {
      title: "Gold Package \u2014 from $1,275",
      description:
        "Our most popular package with full privacy and asset protection.",
      href: "/gold?state=wyoming",
    },
  ],
  general: [
    {
      title: "About Incorporate123",
      description:
        "25 years of business formation and privacy expertise. Nevada-based specialists.",
      href: "/about",
    },
    {
      title: "Contact Us",
      description:
        "Call, email, or visit our office. Real people, real answers.",
      href: "/contact",
    },
  ],
};

/* ------------------------------------------------
   FAQ items
   ------------------------------------------------ */
export const faqItems: FAQItem[] = [
  // Privacy (12)
  {
    id: "faq-1",
    question: "What is an anonymous LLC?",
    answer:
      "An anonymous LLC is formed in a state (like Wyoming or Nevada) that does not require public disclosure of the LLC's members or managers. Combined with our nominee services, your name never appears on any publicly accessible state filing — at formation or any time afterward.",
    category: "privacy",
  },
  {
    id: "faq-2",
    question: "What states allow anonymous LLCs?",
    answer:
      "Wyoming offers the strongest anonymous LLC protections — no public member or manager disclosure is required by statute. Nevada also provides strong privacy with nominee-friendly laws. New Mexico allows anonymous formation but lacks Wyoming's charging order protection and other advantages.",
    category: "privacy",
  },
  {
    id: "faq-3",
    question: "What is a nominee officer?",
    answer:
      "A nominee is a person who appears on your company's public filings in place of your personal information. Unlike competitors who only provide nominees at the moment of formation ('nominee for a day'), our Gold packages include year-round nominee directors and officers who remain listed on all filings throughout the year.",
    category: "privacy",
  },
  {
    id: "faq-4",
    question:
      "What's the difference between year-round nominees and 'nominee for a day'?",
    answer:
      "Year-round nominees stay on every filing, every year — initial formation, annual reports, amendments, and any other state filings. 'Nominee for a day' means a competitor lists a nominee only at formation, then removes it. Your personal information appears on every subsequent filing. Most competitors offer the latter; we include year-round nominees in every Gold package.",
    category: "privacy",
  },
  {
    id: "faq-6",
    question: "What is an offshore records custodian?",
    answer:
      "An offshore records custodian maintains your corporate documents (operating agreement, meeting minutes, member registry) in a jurisdiction outside the United States. Domestic subpoenas and court orders typically cannot compel production of documents held in foreign jurisdictions. This service is unique to Incorporate123 and included free in every Gold package.",
    category: "privacy",
  },
  {
    id: "faq-7",
    question: "Can someone find out who owns my anonymous LLC?",
    answer:
      "With proper nominee services, your name does not appear in any publicly searchable state database. IRS records are not public. The only way your ownership could be discovered is through a court order compelling disclosure — and offshore record storage adds an additional layer of protection against even that.",
    category: "privacy",
  },
  {
    id: "faq-8",
    question: "Is forming an anonymous LLC legal?",
    answer:
      "Yes, completely legal. Privacy is not secrecy — you still file taxes, obtain an EIN, and comply with federal reporting requirements. An anonymous LLC simply keeps your name off publicly searchable state filings. This is a legitimate privacy strategy used by business owners, real estate investors, and public figures nationwide.",
    category: "privacy",
  },
  {
    id: "faq-10",
    question: "How do offshore nominee directors work?",
    answer:
      "Offshore nominee directors are based outside U.S. jurisdiction, providing an additional privacy layer beyond domestic nominees. They appear on your public filings in place of your information. Incorporate123 has included offshore nominee directors free in every Gold package since 2012 — no other domestic formation company offers this at no extra cost.",
    category: "privacy",
  },
  {
    id: "faq-11",
    question: "Can I use an anonymous LLC for real estate?",
    answer:
      "Yes — this is one of the most common uses. Anonymous LLC ownership prevents public property records from linking real estate assets to your personal name. This is especially valuable for investors with multiple properties who want to prevent tenants, litigants, or competitors from discovering their full portfolio.",
    category: "privacy",
  },
  {
    id: "faq-12",
    question: "What's the difference between privacy and asset protection?",
    answer:
      "Privacy hides your name from public records. Asset protection shields your assets from lawsuits and creditors. They're complementary — privacy prevents targeting (nobody can sue what they can't find), and asset protection prevents recovery (even if they find it, they can't take it). Most clients need both.",
    category: "privacy",
  },

  // Asset Protection (8)
  {
    id: "faq-13",
    question: "What is charging order protection?",
    answer:
      "Charging order protection is a legal mechanism in certain states (most notably Wyoming) that limits a creditor's remedy against an LLC member to a 'charging order' — essentially a lien on distributions. The creditor cannot seize LLC assets, force distributions, or take over management of the LLC. Wyoming offers the strongest charging order protection of any U.S. state.",
    category: "asset",
  },
  {
    id: "faq-14",
    question: "Does Wyoming protect single-member LLCs?",
    answer:
      "Yes — Wyoming extends charging order protection to single-member LLCs. Most states do not, which means a creditor in those states can potentially seize the entire LLC. This single-member protection is one of the key reasons Wyoming is the #1 recommendation for asset protection.",
    category: "asset",
  },
  {
    id: "faq-15",
    question: "LLC vs living trust for asset protection?",
    answer:
      "Different tools for different purposes. LLCs protect business assets and provide charging order protection against creditors. Living trusts handle estate planning and personal asset transfer. Many clients use both — an LLC for business operations and asset protection, and a trust for estate planning. We handle the LLC side; consult an estate attorney for trust planning.",
    category: "asset",
  },
  {
    id: "faq-16",
    question: "How much in assets before asset protection makes sense?",
    answer:
      "We generally recommend formal asset protection structures for individuals with $500,000 or more in personal or business assets. At this level, the cost of proper structuring is justified by litigation risk reduction. However, the right time to set up asset protection is BEFORE you need it — not after a lawsuit or claim has been filed.",
    category: "asset",
  },
  {
    id: "faq-17",
    question: "Can creditors pierce the veil?",
    answer:
      "Possible, but preventable. Courts may 'pierce the corporate veil' if an LLC is improperly maintained — commingled personal and business funds, no corporate minutes, missed annual reports. Proper compliance prevents this. Our Silver and Gold packages include the ongoing compliance services that keep your veil intact.",
    category: "asset",
  },
  {
    id: "faq-18",
    question: "What is a holding LLC?",
    answer:
      "A holding LLC owns other LLCs or valuable assets (real estate, investments, intellectual property). It creates separation between operating businesses and valuable assets — if the operating business gets sued, the holding LLC's assets are protected. This is one of the most common multi-entity strategies we help clients implement.",
    category: "asset",
  },
  {
    id: "faq-19",
    question: "Wyoming or Nevada for asset protection?",
    answer:
      "Both offer strong protection. Wyoming protects single-member LLCs (most states don't) and has lower annual fees ($62 vs. $350+). Nevada offers additional director liability protections for corporations and a dedicated business court. We recommend Wyoming for most clients; Nevada if you plan to physically operate there.",
    category: "asset",
  },
  {
    id: "faq-20",
    question: "Do I need both privacy AND asset protection?",
    answer:
      "Usually yes. Privacy prevents targeting — if nobody can find your assets, they're less likely to sue. Asset protection prevents recovery — even if they find your assets, charging order protection limits what creditors can take. Together, they provide comprehensive protection. Our Gold packages include both.",
    category: "asset",
  },

  // Formation (10)
  {
    id: "faq-21",
    question: "Should I form an LLC or a Corporation?",
    answer:
      "Most small business owners benefit from an LLC due to simpler management requirements, flexible tax treatment (pass-through taxation by default), and strong liability protection. Corporations are better suited for businesses planning to raise capital through stock offerings, go public, or need a formal board structure. We offer both entity types in our packages.",
    category: "formation",
  },
  {
    id: "faq-22",
    question: "How long does it take to form an LLC?",
    answer:
      "Standard formation takes 5-10 business days once we submit your filing to the state. We offer expedited 24-hour processing as an add-on for clients who need their entity formed urgently.",
    category: "formation",
  },
  {
    id: "faq-23",
    question: "Wyoming LLC vs. Nevada LLC — which should I choose?",
    answer:
      "Wyoming is our recommendation for most clients. It has the strongest charging order protection, lowest annual fees ($62 state fee vs. Nevada's $350+), no state income tax, and excellent privacy statutes. Nevada is better if you plan to physically operate in Nevada, value Nevada's dedicated business court, or need access to our larger shelf company inventory.",
    category: "formation",
  },
  {
    id: "faq-24",
    question: "What's included in Incorporate123's packages?",
    answer:
      "Silver packages include registered agent, EIN filing, operating agreement, state filing fees, and compliance support. Gold packages include everything in Silver plus year-round nominee officers and directors, offshore record storage, and offshore nominee directors. All pricing is all-inclusive — no hidden fees or surprise charges.",
    category: "formation",
  },
  {
    id: "faq-25",
    question: "Do I need to live in Wyoming to form there?",
    answer:
      "No. There is no residency requirement. You can form a Wyoming LLC regardless of where you live, and everything is handled remotely. If your LLC does business in your home state, you may need to foreign register there — we offer this as an add-on service.",
    category: "formation",
  },
  {
    id: "faq-26",
    question: "What is a shelf company?",
    answer:
      "A shelf company is a pre-formed entity that has existed for a period of time but has never conducted any business. Some situations — such as securing contracts, obtaining certain licenses, or establishing business credit — benefit from having an entity with an established formation date. We have shelf companies available from year 2000 onward, all with clean histories and no prior liabilities.",
    category: "formation",
  },
  {
    id: "faq-27",
    question: "What is foreign state registration?",
    answer:
      "Foreign registration is the process of registering your LLC or corporation in a state where it was NOT formed but where it conducts business. For example, if you form a Wyoming LLC but operate in California, you need to foreign register in California. Required if you have physical operations in another state. Our CA/FL Private Packages include this.",
    category: "formation",
  },
  {
    id: "faq-28",
    question: "What is domestication?",
    answer:
      "Domestication is the process of moving an existing entity from one state to another without dissolving and re-forming. It preserves your entity's history, EIN, contracts, and bank accounts. This is ideal for business owners who want to move their existing entity to Wyoming or Nevada for better privacy and asset protection.",
    category: "formation",
  },
  {
    id: "faq-29",
    question: "Can I form in Wyoming and operate in California?",
    answer:
      "Yes. Form in Wyoming for privacy and asset protection, then foreign register in California to operate legally. Our California Private LLC package ($1,475) handles both the Wyoming formation and California foreign registration — nominees, registered agent, and all fees included.",
    category: "formation",
  },
  {
    id: "faq-30",
    question: "What is an EIN?",
    answer:
      "An Employer Identification Number (EIN) is issued by the IRS and is required for opening a business bank account, filing taxes, and hiring employees. Think of it as a Social Security number for your business. EIN filing is included in all our packages at no extra cost.",
    category: "formation",
  },

  // Formation — Tax (4)
  {
    id: "faq-30a",
    question: "How does entity type affect my taxes?",
    answer:
      "Your entity type determines your default tax treatment. Single-member LLCs are taxed as sole proprietorships (pass-through). Multi-member LLCs are taxed as partnerships. Corporations are taxed as C-Corps (double taxation) unless they elect S-Corp status. Any LLC can elect S-Corp or C-Corp taxation without changing its state formation — the election is federal only.",
    category: "formation",
  },
  {
    id: "faq-30b",
    question: "When should I elect S-Corp taxation for my LLC?",
    answer:
      "Generally when your net business income consistently exceeds $80,000 per year. The S-Corp election lets you split income between salary (subject to payroll taxes) and distributions (exempt from self-employment tax). Below $80K, the added payroll processing and accounting costs typically outweigh the savings.",
    category: "formation",
  },
  {
    id: "faq-30c",
    question: "Does forming in Wyoming or Nevada eliminate my state taxes?",
    answer:
      "Wyoming and Nevada have no state income tax — but if you physically operate in another state, that state may still tax your business income. For example, a Wyoming LLC doing business in California owes California's $800 annual franchise tax. Formation state affects privacy and asset protection; operating state determines state tax obligations.",
    category: "formation",
  },
  {
    id: "faq-30d",
    question:
      "What's the difference between pass-through taxation and double taxation?",
    answer:
      "Pass-through taxation (LLCs, S-Corps) means business income is taxed once on the owner's personal return. Double taxation (C-Corps) means profits are taxed at the corporate level (21%), then dividends are taxed again on shareholders' personal returns. Most small businesses prefer pass-through to avoid double taxation.",
    category: "formation",
  },

  // Compliance (6)
  {
    id: "faq-31",
    question: "What is a registered agent, and do I need one?",
    answer:
      "Every LLC and corporation must designate a registered agent — a person or company authorized to receive legal documents and state correspondence on behalf of your entity. Yes, it's required by law. Our packages include registered agent service in your formation state.",
    category: "compliance",
  },
  {
    id: "faq-32",
    question: "What are Wyoming's annual filing requirements?",
    answer:
      "Wyoming requires an annual report filed with the Secretary of State. The fee is $62. It's a simple online filing. Failure to file results in late fees and potential administrative dissolution. Our Silver and Gold packages include annual report preparation and filing — you never have to think about it.",
    category: "compliance",
  },
  {
    id: "faq-33",
    question: "What are Nevada's annual filing requirements?",
    answer:
      "Nevada requires an Initial List and Annual List of Officers, with a combined annual fee of $350+. More complex than Wyoming. Our Nevada packages include all annual filing preparation and submission.",
    category: "compliance",
  },
  {
    id: "faq-34",
    question: "What if I miss my annual report deadline?",
    answer:
      "Late fees and potential administrative dissolution of your entity. Incorporate123 handles annual report filings for all renewal clients — you never have to worry about missing a deadline. We track all due dates and file on your behalf.",
    category: "compliance",
  },
  {
    id: "faq-35",
    question: "What is corporate minute maintenance?",
    answer:
      "Corporate minutes are formal records of decisions made by your LLC's members (or corporation's board of directors). Maintaining proper minutes helps preserve your limited liability protection — without them, a court might 'pierce the corporate veil' and hold you personally liable for business debts. Included in our compliance services.",
    category: "compliance",
  },
  {
    id: "faq-36",
    question: "Can I change my registered agent to Incorporate123?",
    answer:
      "Yes. We handle the transfer filing with the state. Contact us for details — the process is straightforward and we can usually complete the changeover within a few business days.",
    category: "compliance",
  },

  // Compliance — Tax (3)
  {
    id: "faq-36a",
    question: "Does my Wyoming LLC owe any Wyoming business taxes?",
    answer:
      "No. Wyoming imposes no state income tax, no franchise tax on LLCs, and no gross receipts tax. Your only Wyoming obligation is the $60 annual report fee (which we file for you). If you operate in another state, that state's tax laws apply to your business income earned there.",
    category: "compliance",
  },
  {
    id: "faq-36b",
    question:
      "What is California's $800 franchise tax and does it apply to me?",
    answer:
      "California imposes a minimum $800 annual franchise tax on every LLC formed in or registered to do business in California — regardless of income. If you have a Wyoming LLC foreign registered in California, you owe this tax. It's due by the 15th day of the 4th month after formation, then annually.",
    category: "compliance",
  },
  {
    id: "faq-36c",
    question: "Do I need to make quarterly estimated tax payments?",
    answer:
      "If you expect to owe $1,000 or more in federal taxes for the year, the IRS requires quarterly estimated payments (Form 1040-ES). Due dates: April 15, June 15, September 15, and January 15. Underpayment triggers penalties. Your CPA can calculate appropriate quarterly amounts based on projected business income.",
    category: "compliance",
  },

  // Packages (5)
  {
    id: "faq-37",
    question: "Gold vs Silver — what's the difference?",
    answer:
      "Silver includes expert formation, all state fees, registered agent, EIN, operating agreement, and compliance support. Gold includes everything in Silver plus year-round nominee officers and directors, offshore record storage, and offshore nominee directors. Gold is recommended for anyone prioritizing privacy; Silver for straightforward formation needs.",
    category: "packages",
  },
  {
    id: "faq-38",
    question: "How much is the annual renewal?",
    answer:
      "Gold: $525/year (includes nominees, registered agent, and compliance support). Silver: $325/year. Both include registered agent renewal, annual report filing, and applicable package services. We always show renewal rates alongside formation prices — no surprises.",
    category: "packages",
  },
  {
    id: "faq-39",
    question: "Do you accept cryptocurrency?",
    answer:
      "Yes. We accept Bitcoin, Ethereum, XRP, Litecoin, and Monero for both formation and annual renewal payments. There is no additional fee for cryptocurrency payments. Crypto payments align with our privacy commitment — no credit card records linking you to your entity formation.",
    category: "packages",
  },
  {
    id: "faq-40",
    question: "Is there a money-back guarantee?",
    answer:
      "Yes. We offer a 30-day money-back guarantee on all packages. If you're not satisfied with our services for any reason within 30 days of your order, we'll refund your formation fee in full. State filing fees already submitted cannot be refunded as they are paid directly to the state.",
    category: "packages",
  },
  {
    id: "faq-41",
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and cryptocurrency (Bitcoin, Ethereum, XRP, Litecoin, Monero). There is no additional fee for any payment method.",
    category: "packages",
  },

  // General (4)
  {
    id: "faq-42",
    question: "How long has Incorporate123 been in business?",
    answer:
      "Since approximately 2000 — over 25 years of specialized experience in business formation and privacy services. We're a Nevada-based company with real people and decades of experience, not a faceless online service.",
    category: "general",
  },
  {
    id: "faq-43",
    question: "Where are you based?",
    answer:
      "We're based in Nevada, with close working relationships with the Nevada Secretary of State's office. Contact us by phone at 1-800-553-0615 or email during business hours, Monday–Friday, 9:00 AM – 5:00 PM Pacific.",
    category: "general",
  },
  {
    id: "faq-44",
    question: "Can I call and speak to someone?",
    answer:
      "Yes. Call 1-800-553-0615. A real person answers — no phone tree, no chatbot. We're happy to discuss your needs and recommend the right package before you commit. No pressure, no obligation.",
    category: "general",
  },
  {
    id: "faq-45",
    question: "Do you offer consultations?",
    answer:
      "Yes, free of charge. Call us or use the contact form. We'll discuss your situation, answer your questions, and recommend the right approach. No obligation, no sales pressure — we believe in earning your business through expertise, not tactics.",
    category: "general",
  },
];
