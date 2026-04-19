/* ═══════════════════════════════════════════════════════════════════════════
   Tier Content
   All the hand-written copy that makes each package page distinct.
   Structured so `TierPageClient` reads one record per (tierSlug, state) combo
   and never falls back to auto-generated placeholder strings.
   ═══════════════════════════════════════════════════════════════════════════ */

export type { MetallicAccent, HeroVisualVariant } from "@/lib/types";
import type { MetallicAccent, HeroVisualVariant } from "@/lib/types";

export interface TierDeliverable {
  icon: string;
  label: string;
  description: string;
}

export interface TierSoftExclusion {
  label: string;
  note: string;
}

export interface TierCrossLink {
  kind: "pillar" | "cluster" | "comparison";
  title: string;
  description: string;
  href: string;
}

export interface TierFaq {
  id: string;
  question: string;
  answer: string;
}

export interface TierContentCore {
  metallic: MetallicAccent;
  eyebrow: string;
  heroTagline: string;
  promiseHeading: string;
  promiseBody: string;
  audience: string[];
  decisionGuide: {
    bronze: string;
    silver: string;
    gold: string;
  };
  deliverables: TierDeliverable[];
  softExclusions: TierSoftExclusion[];
  finalCtaHeading: string;
  finalCtaDescription: string;
}

export interface StateContextCopy {
  headline: string;
  body: string;
  heroVisualVariant: HeroVisualVariant;
  faqs: TierFaq[];
  crossLinks: TierCrossLink[];
}

/* ------------------------------------------------
   Tier-level copy (shared across states)
   ------------------------------------------------ */

export const tierContent: Record<string, TierContentCore> = {
  bronze: {
    metallic: "bronze",
    eyebrow: "Entry tier — Formation + Compliance",
    heroTagline: "Formed right. Filed on time. No frills.",
    promiseHeading: "Bronze is the straight-line formation package.",
    promiseBody:
      "Bronze gives you a properly formed entity and the compliance machinery to keep it in good standing — articles, operating agreement, registered agent, corporate records, and bank-ready documents. It doesn't include virtual office, EIN, or nominee privacy. That's the point: pay only for what you need if you already have an address and plan to handle your own EIN.",
    audience: [
      "Solo operators who already work from a commercial address",
      "Second or third entities where privacy isn't the driver",
      "Cost-conscious founders who want a real formation, not a DIY kit",
      "Holding companies that won't list nominees publicly anyway",
    ],
    decisionGuide: {
      bronze:
        "Fits if you already have a commercial address and you'll pull your own EIN. Formation, compliance, registered agent — nothing you don't need.",
      silver:
        "If the virtual office in Silver is more than you need — you already work from a real commercial address — Bronze strips back to formation and compliance and saves the Silver premium.",
      gold: "If year-round nominees are overkill — a holding entity you won't list publicly, or a second LLC where privacy isn't the driver — Bronze handles formation and compliance without the Gold premium.",
    },
    deliverables: [
      {
        icon: "FileText",
        label: "Articles of Organization",
        description:
          "Prepared, filed with the state, and returned with a stamped copy.",
      },
      {
        icon: "ScrollText",
        label: "Custom Operating Agreement",
        description:
          "Drafted around your entity type and member structure — not a generic template.",
      },
      {
        icon: "Landmark",
        label: "Bank Account Opening Kit",
        description:
          "Complete document package so you can walk into any bank and open a business account.",
      },
      {
        icon: "ShieldCheck",
        label: "Registered Agent, 1 Year",
        description:
          "Professional registered agent service in your formation state for the first year.",
      },
      {
        icon: "BookOpen",
        label: "Corporate Records & Minutes",
        description:
          "Minute book, member/shareholder ledger, and first-year resolutions.",
      },
      {
        icon: "CalendarCheck",
        label: "Initial State Filings & Fees",
        description:
          "Every mandatory first-year filing handled and paid for — no surprise invoices.",
      },
    ],
    softExclusions: [
      {
        label: "EIN Obtainment",
        note: "Not included in Bronze — you can pull your own free at IRS.gov in about ten minutes, or upgrade to Silver and we'll handle it.",
      },
      {
        label: "Virtual Office Address",
        note: "Not included in Bronze — your registered agent address goes on public filings. If that matters, Silver adds a real business address.",
      },
      {
        label: "Year-Round Nominees",
        note: "Not included in Bronze — your own name appears on public filings. Gold is the only tier that adds nominee director, manager, and officers.",
      },
      {
        label: "Tax preparation & bookkeeping",
        note: "We don't do ongoing tax work. We'll hand you a clean entity and point you to a CPA for ongoing filings.",
      },
    ],
    finalCtaHeading: "Formed in a week. Compliant for a year.",
    finalCtaDescription:
      "Everything you need to hang your own shingle — state fees, registered agent, operating agreement, bank kit. No upsell for the basics.",
  },

  silver: {
    metallic: "silver",
    eyebrow: "Mainstream — Bronze + Virtual Presence",
    heroTagline: "Your business, with a real address that isn't your kitchen.",
    promiseHeading: "Silver is Bronze with a real place to put your business.",
    promiseBody:
      "Silver includes everything in Bronze and adds three things: we obtain your EIN, you get a real virtual office address, and we forward your mail weekly. That's it. No nominee privacy — your name still appears on filings. But you get a business address that isn't your home, and that alone solves the problem for most online operators.",
    audience: [
      "Online businesses running out of a home address they'd rather not list",
      "Consultants, coaches, agencies, SaaS founders — anyone who fills out forms",
      "Ecommerce operators that need a real mailing address for marketplaces",
      "Anyone whose insurance or LLC bank wants a non-residential address",
    ],
    decisionGuide: {
      bronze:
        "If Bronze feels too bare — most online operators don't have a commercial address to use — Silver adds a real virtual office, mail forwarding, and EIN. That's the usual next step up.",
      silver:
        "The mainstream pick. Virtual office, EIN, weekly mail forwarding — everything an online business needs to stop using a home address, without paying for nominees you may not need.",
      gold: "If nominees aren't the reason you're here — you just want a professional address and don't mind your name on filings — Silver covers that for considerably less than Gold.",
    },
    deliverables: [
      {
        icon: "FileText",
        label: "Articles of Organization",
        description:
          "Prepared, filed with the state, and returned with a stamped copy.",
      },
      {
        icon: "Building",
        label: "Virtual Office Address",
        description:
          "Professional commercial address separate from your registered agent — use it on invoices, marketplaces, and public filings.",
      },
      {
        icon: "Mail",
        label: "Weekly Mail Forwarding",
        description:
          "Mail scanned or forwarded weekly so nothing gets stuck at an address you don't visit.",
      },
      {
        icon: "BadgeCheck",
        label: "EIN Obtainment",
        description:
          "We pull your Federal EIN from the IRS as part of the package — one less form to file.",
      },
      {
        icon: "ScrollText",
        label: "Custom Operating Agreement",
        description:
          "Drafted around your entity type and member structure — not a generic template.",
      },
      {
        icon: "Landmark",
        label: "Bank Account Opening Kit",
        description:
          "Complete document package so you can walk into any bank and open a business account.",
      },
      {
        icon: "ShieldCheck",
        label: "Registered Agent, 1 Year",
        description:
          "Professional registered agent service in your formation state for the first year.",
      },
      {
        icon: "BookOpen",
        label: "Compliance Records",
        description:
          "Minute book, ledger, initial state filings, and corporate records — all handled.",
      },
    ],
    softExclusions: [
      {
        label: "Year-Round Nominees",
        note: "Not included in Silver — your name still appears on public filings. Gold is the only tier that adds nominee director, manager, and officers.",
      },
      {
        label: "Offshore banking & payment accounts",
        note: "We don't open bank accounts for you — we prepare a complete bank kit so any US bank can. Offshore banking is a separate service.",
      },
      {
        label: "Tax preparation & bookkeeping",
        note: "We don't do ongoing tax work. We'll hand you a clean entity and point you to a CPA for ongoing filings.",
      },
    ],
    finalCtaHeading: "A real business, at a real address that isn't yours.",
    finalCtaDescription:
      "Silver is the mainstream pick for online operators: virtual office, EIN, mail forwarding, and every formation essential in one bundle.",
  },

  gold: {
    metallic: "gold",
    eyebrow: "Privacy tier — Silver + Year-Round Nominees",
    heroTagline: "Your name, off the public record. Year round.",
    promiseHeading:
      "Gold is the package where your name stops appearing on filings.",
    promiseBody:
      "Gold includes everything in Silver — EIN, virtual office, mail forwarding, the whole compliance stack — and adds the one thing that actually delivers privacy: year-round nominee directors, managers, and officers. Your name comes off the public record at formation and stays off for every annual report and state filing after that. That's the difference — not a marketing word, a specific legal mechanic.",
    audience: [
      "Owners with meaningful personal assets they'd rather not publicly tie to a business",
      "Real estate operators, practicing professionals, anyone whose name googles too well",
      "Founders of politically sensitive, high-profile, or controversial businesses",
      "Anyone who doesn't want a disgruntled person looking up their business registration",
    ],
    decisionGuide: {
      bronze:
        "Bronze files the entity but your name still appears on public records. If privacy is even part of why you're forming, Gold is the only tier that actually hides it — year-round, not just day one.",
      silver:
        "Silver hides your home address. Gold hides your name entirely — a real-person nominee signs every annual report and amendment, not just the articles. That's the actual privacy mechanism.",
      gold: "Privacy is the reason you're here. Gold is the only tier that puts a nominee on public filings year-round — not just at formation. If keeping your name off the record matters, Gold is the only answer.",
    },
    deliverables: [
      {
        icon: "UserX",
        label: "Year-Round Nominee Director / Manager",
        description:
          "A nominee appears on every public filing — not just the articles. Annual reports, state filings, amendments. Your name stays off.",
      },
      {
        icon: "UserCheck",
        label: "Year-Round Nominee Officers",
        description:
          "Nominee officers sign filings and appear in public records so your own officer names don't.",
      },
      {
        icon: "Building",
        label: "Virtual Office Address",
        description:
          "Professional commercial address separate from your registered agent — use it on invoices, marketplaces, and public filings.",
      },
      {
        icon: "Mail",
        label: "Weekly Mail Forwarding",
        description:
          "Mail scanned or forwarded weekly so nothing gets stuck at an address you don't visit.",
      },
      {
        icon: "BadgeCheck",
        label: "EIN Obtainment",
        description:
          "We pull your Federal EIN from the IRS as part of the package — one less form to file.",
      },
      {
        icon: "FileText",
        label: "Articles + Operating Agreement",
        description:
          "Filed with nominees in place from day one. Operating agreement names you internally as the real owner.",
      },
      {
        icon: "Landmark",
        label: "Bank Account Opening Kit",
        description:
          "Complete bank kit so your business account opens cleanly — with an owner-disclosure strategy that respects banking regulations.",
      },
      {
        icon: "Archive",
        label: "Offshore Records Storage",
        description:
          "Corporate records stored outside US jurisdiction — because domestic storage is one subpoena away from being public.",
      },
    ],
    softExclusions: [
      {
        label: "Anonymity from the IRS",
        note: "Gold hides you from public records, not from the federal government. You're still the beneficial owner; IRS, banks, and courts with proper orders will still see your name. Privacy ≠ invisibility.",
      },
      {
        label: "Shell companies for illicit purposes",
        note: "We form real, operating entities. We won't set up shells to hide taxable income, skirt sanctions, or defraud creditors. We've been at this 25 years and we'd like another 25.",
      },
      {
        label: "Offshore entities",
        note: "Gold forms you in a US privacy state (Wyoming or Nevada). If you need an actual offshore entity (BVI, Nevis, Belize), that's a separate offshore service.",
      },
      {
        label: "Ongoing tax or bookkeeping",
        note: "We don't do ongoing tax work. Gold hands you a clean, privacy-protected entity; your CPA takes it from there.",
      },
    ],
    finalCtaHeading: "Your name. Off the record. Year round.",
    finalCtaDescription:
      "Gold is the only tier that keeps nominees on public filings continuously — the specific legal mechanic that delivers actual privacy, not marketing privacy.",
  },
};

/* ------------------------------------------------
   State-level copy (per tier × state)
   ------------------------------------------------ */

export const tierStateContext: Record<
  string,
  Record<string, StateContextCopy>
> = {
  bronze: {
    Wyoming: {
      headline: "Why Wyoming for Bronze",
      body: "Wyoming has the lowest annual fees in the country — $50/year for the Secretary of State report — the strongest charging-order protection for LLCs, and no state income tax on the entity. For a stripped-down Bronze formation, Wyoming gives you the most protection per dollar.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "bronze-wy-address",
          question: "Can I use my home address with Bronze?",
          answer:
            "You can, but it will appear on public state filings. Bronze doesn't include a virtual office, so your registered agent's address is the only non-personal address on the formation. If keeping your home off public records matters, Silver is the tier that solves it.",
        },
        {
          id: "bronze-wy-ein",
          question: "How do I get an EIN if Bronze doesn't include it?",
          answer:
            "Go to irs.gov/ein. It's free, it takes about ten minutes, and you'll have the letter in your inbox. We left EIN out of Bronze precisely because the IRS doesn't charge for it and we don't want to mark it up unnecessarily.",
        },
        {
          id: "bronze-wy-upgrade",
          question: "Can I upgrade to Silver or Gold later?",
          answer:
            "Yes. You can add virtual office, EIN assistance, or nominees after formation. Upgrading is cheaper than re-forming — call us and we'll quote the delta.",
        },
      ],
      crossLinks: [
        {
          kind: "cluster",
          title: "Wyoming formation guide",
          description:
            "Annual fees, charging-order protection, when Wyoming is actually the right choice.",
          href: "/company-formation-in-wyoming",
        },
        {
          kind: "comparison",
          title: "Wyoming vs Nevada LLC",
          description:
            "Side-by-side: fees, privacy, protection, business court. When each state wins.",
          href: "/wyoming-vs-nevada-llc",
        },
        {
          kind: "pillar",
          title: "Business Privacy explained",
          description:
            "What privacy actually means in US business formation — and what it doesn't.",
          href: "/privacy",
        },
      ],
    },
    Nevada: {
      headline: "Why Nevada for Bronze",
      body: "Nevada has no state income tax, a dedicated business court system (fastest commercial litigation in the country), and strong director liability protection. Bronze includes the Nevada state business license that's required by law — a line item that surprises most first-time NV operators.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "bronze-nv-license",
          question: "Is the Nevada state business license included?",
          answer:
            "Yes — and it's $500/year. We include the initial year in Bronze because Nevada law requires every entity to hold one. Skip it and the Secretary of State will dissolve your entity.",
        },
        {
          id: "bronze-nv-vs-wy",
          question: "Is Nevada worth the extra cost over Wyoming?",
          answer:
            "Only if you actually operate in Nevada or you need the business court system. For pure privacy or cost, Wyoming wins by a wide margin. Nevada shines when litigation risk is real.",
        },
      ],
      crossLinks: [
        {
          kind: "cluster",
          title: "Nevada formation guide",
          description:
            "Business license, state fees, when Nevada actually makes sense over Wyoming.",
          href: "/company-formation-in-nevada",
        },
        {
          kind: "comparison",
          title: "Wyoming vs Nevada LLC",
          description:
            "Side-by-side: fees, privacy, protection, business court. When each state wins.",
          href: "/wyoming-vs-nevada-llc",
        },
        {
          kind: "pillar",
          title: "Compliance obligations",
          description:
            "Annual report schedules, business license renewals, what 'good standing' actually requires.",
          href: "/compliance",
        },
      ],
    },
  },

  silver: {
    Wyoming: {
      headline: "Why Wyoming for Silver",
      body: "Silver is our most recommended tier, and Wyoming is the state it's most recommended in. $50/year in state fees, strongest LLC protection in the country, and a virtual office that's actually in Wyoming — not a mail drop in another state pretending to be Wyoming. The numbers and the protection both line up.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "silver-wy-vs-bronze",
          question: "What's the real difference between Silver and Bronze?",
          answer:
            "Three things: we pull your EIN, you get a virtual office address, and your mail is forwarded weekly. That's it. Bronze is the raw formation; Silver is the formation plus a non-residential business presence.",
        },
        {
          id: "silver-wy-vo",
          question: "What's the virtual office address actually?",
          answer:
            "A commercial address in Wyoming that you can use on public filings, bank accounts, marketplaces (Stripe, Amazon, Etsy), and invoices. It's staffed — mail that comes in gets scanned or forwarded weekly.",
        },
        {
          id: "silver-wy-vs-gold",
          question: "When should I upgrade from Silver to Gold?",
          answer:
            "Only if privacy is a driver. Silver gives you a different mailing address; Gold adds nominees who sign and appear on your public filings so your name comes off entirely. If your name showing up on the annual report is a problem, Gold solves it. If not, Silver is the right tier.",
        },
      ],
      crossLinks: [
        {
          kind: "comparison",
          title: "Silver vs Gold — what nominees actually get you",
          description:
            "The nominee mechanic explained. When it matters, when it's overkill.",
          href: "/silver-vs-gold",
        },
        {
          kind: "cluster",
          title: "Wyoming formation guide",
          description:
            "Annual fees, protection, when Wyoming is the right state.",
          href: "/company-formation-in-wyoming",
        },
        {
          kind: "pillar",
          title: "Business Privacy explained",
          description:
            "What privacy actually means in US business formation — and what it doesn't.",
          href: "/privacy",
        },
      ],
    },
    Nevada: {
      headline: "Why Nevada for Silver",
      body: "If you operate in Nevada, Silver includes the mandatory business license and a virtual office in the state itself — not a forwarding address in another state. Better for litigation-prone industries that want access to Nevada's business court system.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "silver-nv-license",
          question: "Is the Nevada state business license included?",
          answer:
            "Yes. Nevada requires every entity to hold a state business license — $500/year. We include the initial year in Silver so your formation lands compliant.",
        },
        {
          id: "silver-nv-vo",
          question: "Is the virtual office address actually in Nevada?",
          answer:
            "Yes — it's a Nevada commercial address. Some providers will sell you a 'Nevada package' with a forwarding address based somewhere else. Ours is in the state.",
        },
      ],
      crossLinks: [
        {
          kind: "cluster",
          title: "Nevada formation guide",
          description: "Business license, state fees, business court system.",
          href: "/company-formation-in-nevada",
        },
        {
          kind: "comparison",
          title: "Wyoming vs Nevada LLC",
          description:
            "Side-by-side: fees, privacy, protection, business court. When each state wins.",
          href: "/wyoming-vs-nevada-llc",
        },
        {
          kind: "pillar",
          title: "Asset Protection explained",
          description:
            "How charging order protection actually works — and why it matters in a lawsuit.",
          href: "/asset-protection",
        },
      ],
    },
  },

  gold: {
    Wyoming: {
      headline: "Why Wyoming for Gold",
      body: "Wyoming doesn't require LLC members, managers, or officers to be listed on public formation documents, and its charging-order protection is the strongest in the country. Combined with year-round nominees, a Wyoming Gold package is the most private legal US structure available — there's no tier above it domestically.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "gold-wy-nominee",
          question: "How does the year-round nominee actually work?",
          answer:
            "At formation, your articles list a nominee as the manager/member. Every annual report, every state filing, every amendment is signed by and listed under the nominee — year round, not just at formation. Your name stays off public filings. Internally, your operating agreement names you as the real owner so you control the entity completely.",
        },
        {
          id: "gold-wy-bank",
          question: "Can I still open a bank account with nominees in place?",
          answer:
            "Yes. US banks require beneficial ownership disclosure under FinCEN rules — you'll disclose to the bank, but the bank's records aren't public. Our bank kit walks through exactly how to structure the disclosure so the account opens cleanly.",
        },
        {
          id: "gold-wy-irs",
          question: "Am I hidden from the IRS?",
          answer:
            "No. Gold hides you from public records, not from the federal government. You're still the beneficial owner for tax purposes; the IRS, FinCEN, and courts with proper orders will still see your name. Privacy ≠ invisibility — anyone promising otherwise is lying to you.",
        },
        {
          id: "gold-wy-cost",
          question: "Why is Gold more than Silver?",
          answer:
            "Nominees are real people, and they sign real legal documents every time your entity files. That's an ongoing human service, not a one-time product. The ongoing cost is why Gold has a higher formation fee and a higher annual renewal than Silver.",
        },
      ],
      crossLinks: [
        {
          kind: "pillar",
          title: "Business Privacy explained",
          description:
            "What the nominee mechanic actually delivers — and what it doesn't.",
          href: "/privacy",
        },
        {
          kind: "pillar",
          title: "Asset Protection explained",
          description:
            "Charging orders, domestication, and why Wyoming leads the country on LLC protection.",
          href: "/asset-protection",
        },
        {
          kind: "comparison",
          title: "Silver vs Gold — what nominees actually get you",
          description:
            "The nominee mechanic explained. When it matters, when it's overkill.",
          href: "/silver-vs-gold",
        },
      ],
    },
    Nevada: {
      headline: "Why Nevada for Gold",
      body: "Nevada Gold combines nominee privacy with Nevada's business court system — the fastest commercial litigation in the country. If litigation risk is part of the reason you want privacy in the first place, Nevada gives you both the privacy mechanic and a faster court if things go sideways.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "gold-nv-vs-wy",
          question: "Is Nevada Gold better than Wyoming Gold?",
          answer:
            "They're different. Wyoming Gold is cheaper, has stronger charging-order protection, and lower annual fees. Nevada Gold adds business court access and no state income tax on corporations. For most privacy-first clients, Wyoming Gold wins on cost and protection.",
        },
        {
          id: "gold-nv-license",
          question: "Is the Nevada business license included?",
          answer:
            "Yes. Nevada law requires it, so we include the initial year in Gold. It renews annually at $500.",
        },
      ],
      crossLinks: [
        {
          kind: "comparison",
          title: "Wyoming vs Nevada LLC",
          description:
            "Side-by-side: fees, privacy, protection, business court. When each state wins.",
          href: "/wyoming-vs-nevada-llc",
        },
        {
          kind: "pillar",
          title: "Business Privacy explained",
          description:
            "What the nominee mechanic actually delivers — and what it doesn't.",
          href: "/privacy",
        },
        {
          kind: "cluster",
          title: "Nevada formation guide",
          description:
            "Business license, court system, when Nevada is the right state.",
          href: "/company-formation-in-nevada",
        },
      ],
    },
    California: {
      headline: "How California Private works",
      body: "California Private is a Wyoming Gold formation bundled with California foreign registration and a California registered agent. You get nominee privacy on the Wyoming side — where the entity actually exists — and the California filing that makes it legal to operate in-state. It's the structure high-asset Californians use to avoid having their name on a CA Statement of Information.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "gold-ca-structure",
          question: "Why not just form directly in California?",
          answer:
            "California publishes your name on the Statement of Information. There's no legal way to keep your name off a CA direct formation. Wyoming Gold + CA foreign registration is the workaround: the WY entity is the real one, and only the foreign registration touches California.",
        },
        {
          id: "gold-ca-llc-tax",
          question: "Do I still owe the $800 California LLC tax?",
          answer:
            "Yes. If you do business in California, you owe the minimum $800 franchise tax regardless of where the entity was formed. Privacy is about name disclosure, not tax residency.",
        },
        {
          id: "gold-ca-foreign-reg",
          question: "What's included in the California foreign registration?",
          answer:
            "The Application to Register a Foreign LLC or Corporation, the first-year CA registered agent, and the Statement of Information filed with the nominee. Your annual renewal covers the CA side indefinitely.",
        },
      ],
      crossLinks: [
        {
          kind: "cluster",
          title: "California private formation guide",
          description:
            "Why Californians use Wyoming, the $800 franchise tax, and how foreign registration works.",
          href: "/california-private-formation",
        },
        {
          kind: "pillar",
          title: "Business Privacy explained",
          description:
            "What the nominee mechanic delivers — and what it doesn't.",
          href: "/privacy",
        },
        {
          kind: "pillar",
          title: "Asset Protection explained",
          description:
            "Charging orders, domestication, and why Wyoming leads the country.",
          href: "/asset-protection",
        },
      ],
    },
    Florida: {
      headline: "How Florida Private works",
      body: "Florida Private is a Wyoming Gold formation bundled with Florida foreign registration and a Florida registered agent. Florida has no state income tax but publishes owner and officer names on sunbiz.org. The WY Gold entity stays off public records; only the FL foreign registration touches the state.",
      heroVisualVariant: "docs",
      faqs: [
        {
          id: "gold-fl-sunbiz",
          question: "Won't my name show up on sunbiz.org?",
          answer:
            "Only the nominee's. The Florida foreign registration lists the WY entity and its managers — which are nominees on Gold. Your name isn't published on sunbiz because the entity was formed in Wyoming, where disclosure isn't required.",
        },
        {
          id: "gold-fl-tax",
          question: "Does Florida Private help with taxes?",
          answer:
            "Florida already has no state income tax, so there's no tax arbitrage. The reason for Florida Private is privacy, not taxes.",
        },
        {
          id: "gold-fl-included",
          question: "What's included in the Florida foreign registration?",
          answer:
            "The foreign qualification filing with the Florida Secretary of State, the first-year FL registered agent, and your annual reports filed with nominees in place.",
        },
      ],
      crossLinks: [
        {
          kind: "cluster",
          title: "Florida private formation guide",
          description:
            "Sunbiz.org disclosure, foreign registration, when Wyoming + Florida is the right setup.",
          href: "/florida-private-formation",
        },
        {
          kind: "pillar",
          title: "Business Privacy explained",
          description:
            "What the nominee mechanic delivers — and what it doesn't.",
          href: "/privacy",
        },
        {
          kind: "pillar",
          title: "Asset Protection explained",
          description:
            "Charging orders, domestication, and why Wyoming leads the country.",
          href: "/asset-protection",
        },
      ],
    },
  },
};

/* ------------------------------------------------
   Package identity overrides
   Some packages (CA Private, FL Private) use the Gold tier mechanically
   but brand themselves as "Private" — they are bundled Gold + foreign
   registration convenience products, not raw Gold. These overrides let
   the hero, H1, eyebrow, promise, and final CTA speak in Private voice
   instead of inheriting Gold copy verbatim.
   ------------------------------------------------ */

export interface PackageIdentity {
  /** Replaces `${tier.name} ${entityLabel}` — e.g. "California Private LLC" */
  displayTierName: string;
  eyebrow: string;
  heroTagline: string;
  promiseHeading: string;
  promiseBody: string;
  audience?: string[];
  finalCtaHeading: string;
  finalCtaDescription: string;
}

/** Keyed by `${tierSlug}:${state}` — e.g. "gold:California". */
export const packageIdentity: Record<string, PackageIdentity> = {
  "gold:California": {
    displayTierName: "California Private",
    eyebrow: "Private package — Wyoming Gold + California foreign registration",
    heroTagline: "Run your business in California without your name on sunbiz.",
    promiseHeading:
      "California Private is Gold where it counts, California where it has to be.",
    promiseBody:
      "California publishes owner and officer names on the Statement of Information — there is no legal way to keep your name off a CA direct formation. California Private forms your entity in Wyoming (where disclosure isn't required), adds year-round nominees on every Wyoming filing, and bundles the California foreign registration + CA registered agent so you can legally operate in-state. The WY entity is the real one; only the foreign registration touches California.",
    audience: [
      "California residents who want privacy and still owe the $800 franchise tax",
      "Real estate and investment operators tired of their name on CA public records",
      "Professionals whose business name is searchable on sunbiz and regrettable",
      "Founders of politically or reputationally sensitive ventures",
    ],
    finalCtaHeading: "California residency, Wyoming privacy.",
    finalCtaDescription:
      "Wyoming Gold on the entity side, California foreign registration on the operating side — all in one package, all with nominees.",
  },
  "gold:Florida": {
    displayTierName: "Florida Private",
    eyebrow: "Private package — Wyoming Gold + Florida foreign registration",
    heroTagline: "Operate in Florida without your name on sunbiz.org.",
    promiseHeading:
      "Florida Private keeps your name off sunbiz the only way that actually works.",
    promiseBody:
      "Florida publishes owner and officer names on sunbiz.org — there's no switch to turn off. Florida Private forms the entity in Wyoming (where disclosure isn't required), keeps year-round nominees on every Wyoming filing, and adds the Florida foreign registration + FL registered agent so you can operate in-state legally. Only the foreign registration touches Florida, and it lists the WY entity — which is itself anchored on nominees.",
    audience: [
      "Florida-based operators who want privacy and don't need tax arbitrage",
      "Real estate investors and syndicators whose LLCs get searched on sunbiz",
      "Professionals whose business registration shouldn't match their personal brand",
      "Founders of reputationally sensitive or politically visible ventures",
    ],
    finalCtaHeading: "Florida operations, Wyoming privacy.",
    finalCtaDescription:
      "Wyoming Gold where the entity lives, Florida foreign registration where it operates — one package, nominees on every filing.",
  },
};

/* ------------------------------------------------
   Selectors
   ------------------------------------------------ */

export function getTierContent(tierSlug: string): TierContentCore | undefined {
  return tierContent[tierSlug];
}

export function getTierStateContext(
  tierSlug: string,
  state: string,
): StateContextCopy | undefined {
  return tierStateContext[tierSlug]?.[state];
}

export function getPackageIdentity(
  tierSlug: string,
  state: string,
): PackageIdentity | undefined {
  return packageIdentity[`${tierSlug}:${state}`];
}
