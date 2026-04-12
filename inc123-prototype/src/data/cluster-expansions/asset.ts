import type { ClusterContent } from "@/lib/types";

/**
 * Expanded asset-protection pillar clusters.
 *
 * Each object below is a complete replacement for the corresponding
 * entry in src/data/clusters.ts. Content has been expanded to meet the
 * 3+ sections / 3+ FAQs quality bar and uses the full ClusterSection
 * feature set: bullets, keyPoints, comparisonRows, pricingRows,
 * extendedContent, and pullQuote.
 *
 * NOTE: The "real-estate" cluster has been renamed to
 * "real-estate-asset-protection". Update sidebarLinks in other files
 * where "/real-estate" still appears (see report at bottom of task).
 */
export const ASSET_EXPANSIONS: ClusterContent[] = [
  // ============================================================
  // 1. CHARGING ORDER PROTECTION
  // ============================================================
  {
    slug: "charging-order-protection",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Charging Order Protection",
    description:
      "The strongest domestic shield for LLC assets. A charging order limits creditors to a lien on distributions — they cannot seize LLC assets, force distributions, or take over management.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Charging Order Protection?",
        content:
          "A charging order is a court order that entitles a creditor to receive distributions from an LLC, IF and WHEN those distributions are made. Critically, a charging order does NOT give the creditor the ability to seize LLC assets, force the LLC to make distributions, participate in LLC management, or access LLC bank accounts. In states with strong charging order protection (like Wyoming), this is the exclusive remedy available to a creditor — meaning they have no other legal avenue to reach your LLC's assets.",
        extendedContent:
          "The charging order was originally created in English partnership law (Partnership Act 1890) to prevent a single partner's personal creditor from dismantling a business that belonged to multiple partners. U.S. LLC statutes imported the concept wholesale. The key legal question every state has answered differently is what happens when the charging order proves useless — typically because the LLC never distributes — and whether the creditor then has any secondary remedy like foreclosure. Wyoming closed that door by statute. Most other states left it open by judicial interpretation.",
        bullets: [
          "Creditor cannot force the LLC to distribute cash or assets",
          "Creditor cannot vote, manage, or access company books",
          "Creditor pays tax on 'phantom' income they never actually receive",
          "LLC assets remain fully under the member's operational control",
          "The lien expires when the underlying judgment expires",
        ],
        keyPoints: [
          {
            title: "Exclusive Remedy",
            description:
              "In Wyoming, the charging order is the sole legal tool available to an outside creditor — no foreclosure, no auction.",
            icon: "Gavel",
          },
          {
            title: "Phantom Income Trap",
            description:
              "Under Rev. Rul. 77-137, the creditor may owe income tax on their share of LLC profits even without receiving a dime.",
            icon: "DollarSign",
          },
        ],
      },
      {
        id: "wyoming-strongest",
        type: "differentiator",
        title: "Wyoming: The Gold Standard",
        content:
          "Wyoming offers the strongest charging order protection in the United States. The combination of statutory exclusivity, explicit single-member coverage, and a mature body of case law makes it the first state most asset protection attorneys consider for a domestic LLC shield.",
        items: [
          {
            title: "Single-Member LLC Protection",
            description:
              "Wyoming is the only state that explicitly extends charging order protection to single-member LLCs. Most states weaken or eliminate this protection for single-member entities.",
            icon: "ShieldCheck",
          },
          {
            title: "Exclusive Remedy by Statute",
            description:
              "Wyoming statute W.S. 17-29-503 makes the charging order the exclusive remedy — creditors have no alternative legal path to your LLC assets.",
            icon: "Gavel",
          },
          {
            title: "No Foreclosure on Membership Interest",
            description:
              "Unlike some states, Wyoming does not allow creditors to foreclose on your membership interest in the LLC.",
            icon: "Lock",
          },
          {
            title: "No Judicial Dissolution",
            description:
              "A charging order creditor in Wyoming cannot petition the court to dissolve the LLC to reach its assets.",
            icon: "Shield",
          },
        ],
      },
      {
        id: "state-comparison",
        type: "comparison",
        title: "Wyoming vs. Other States",
        content:
          "Most states allow charging orders, but the protection varies dramatically. Here is how Wyoming and Nevada — the two strongest — compare to typical states, and what happens when a creditor actually tries to collect.",
        comparisonRows: [
          {
            label: "Single-member LLC protection",
            wyoming: "Explicit by statute",
            nevada: "Strong, via case law",
            highlight: true,
          },
          {
            label: "Exclusive remedy",
            wyoming: "Yes — W.S. 17-29-503",
            nevada: "Yes — NRS 86.401",
          },
          {
            label: "Foreclosure allowed",
            wyoming: "No",
            nevada: "No",
          },
          {
            label: "Judicial dissolution",
            wyoming: "Not available to creditors",
            nevada: "Not available to creditors",
          },
          {
            label: "Annual cost",
            wyoming: "$60",
            nevada: "$350+",
          },
          {
            label: "Privacy of members",
            wyoming: "No public disclosure",
            nevada: "No public disclosure",
          },
        ],
        extendedContent:
          "Compare this to California, where courts have allowed foreclosure on single-member LLC interests (see In re Ashley Albright, 291 B.R. 538). Or Florida, where the Olmstead decision (2010) effectively stripped charging order protection from single-member LLCs for judgment creditors. Texas allows charging orders but not as an exclusive remedy. The practical result: a domesticated LLC in a weak state offers far less protection than most owners believe until the day they actually get sued.",
      },
    ],
    faqs: [
      {
        id: "cop-faq-1",
        question: "Does charging order protection work for single-member LLCs?",
        answer:
          "In Wyoming, yes — it's the only state that explicitly protects single-member LLCs by statute. In most other states, courts have weakened or eliminated charging order protection for single-member entities. California and Florida courts have allowed creditors to foreclose outright on single-member interests.",
        category: "asset",
      },
      {
        id: "cop-faq-2",
        question: "Can a creditor force the LLC to distribute money to them?",
        answer:
          "No. A charging order is a passive lien. The creditor waits for the manager to declare a distribution and has no authority to force one. A properly managed LLC can simply retain earnings, leaving the creditor with a worthless lien that may generate phantom taxable income for them.",
        category: "asset",
      },
      {
        id: "cop-faq-3",
        question:
          "Does charging order protection apply to my home state's LLC?",
        answer:
          "Only the state where the LLC is formed controls the remedy, regardless of where you live. A Wyoming LLC owned by a California resident is governed by Wyoming's charging order statute. That said, courts in your home state may apply their own procedural rules, which is why the entity should be paired with proper operating-state registration and privacy layering.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      { title: "Wyoming Asset Protection", href: "/wyoming-asset-protection" },
      { title: "Investment Holding LLC", href: "/investment-holding-llc" },
      { title: "LLC vs Living Trust", href: "/llc-vs-living-trust" },
      { title: "Gold Package", href: "/gold?state=wyoming" },
    ],
    relatedPackages: ["wyoming-gold"],
    pullQuote: {
      quote:
        "A charging order is a lien on something that may never exist — it is the legal equivalent of garnishing wages from a job the debtor will never work.",
      attribution: "Asset Protection Fundamentals",
      bgText: "Wyoming",
    },
    suggestions: [
      {
        title: "Wyoming Asset Protection",
        description:
          "See the full Wyoming shield stack — charging order, privacy, tax, and the statutes behind each piece.",
        href: "/wyoming-asset-protection",
      },
      {
        title: "Investment Holding LLC",
        description:
          "Move stocks, crypto, and savings behind the charging order wall before a lawsuit appears on the horizon.",
        href: "/investment-holding-llc",
      },
      {
        title: "LLC vs Living Trust",
        description:
          "Why a trust will not stop a plaintiff's attorney — and where it still belongs in your structure.",
        href: "/llc-vs-living-trust",
      },
    ],
    crossPillarCTA: {
      pillar: "privacy",
      title: "Add Privacy to Your Protection",
      description:
        "Combine charging order protection with anonymous LLC formation and year-round nominees for complete shielding.",
      href: "/anonymous-llc",
    },
  },

  // ============================================================
  // 2. WYOMING ASSET PROTECTION
  // ============================================================
  {
    slug: "wyoming-asset-protection",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Wyoming Asset Protection",
    description:
      "Wyoming offers the strongest domestic asset protection for LLC owners. Charging order protection, no state income tax, and the most business-friendly statutes in the country.",
    sections: [
      {
        id: "why-wyoming",
        type: "text",
        title: "Why Wyoming for Asset Protection?",
        content:
          "Wyoming has established itself as the premier state for LLC-based asset protection. The combination of the strongest charging order protection (including single-member LLCs), no state income tax, no franchise tax, minimal annual fees, and strong privacy statutes makes it the top choice for individuals with $500K+ in assets who want a domestic shield without the cost, complexity, or reporting burden of an offshore structure.",
        bullets: [
          "Charging order is the exclusive creditor remedy — including single-member LLCs",
          "No state income tax on LLC or personal earnings",
          "No franchise, inventory, gross receipts, or intangible taxes",
          "Annual report fee is $60 — the lowest in the country",
          "Member and manager names are never required on public filings",
        ],
        keyPoints: [
          {
            title: "$500K+ Threshold",
            description:
              "We recommend formal Wyoming protection for clients whose protectable assets cross the half-million mark.",
            icon: "TrendingUp",
          },
          {
            title: "Set Up Early",
            description:
              "Wyoming protection must be established before a claim is foreseeable — transfers after that point can be unwound as fraudulent.",
            icon: "Clock",
          },
        ],
      },
      {
        id: "strategies",
        type: "audience",
        title: "Wyoming Asset Protection Strategies",
        content:
          "Four structures account for the large majority of client engagements. The right one depends on whether you are protecting a single nest egg, isolating an operating business, or separating investment assets from liability exposure.",
        items: [
          {
            title: "Single Wyoming LLC",
            description:
              "Ideal for individual asset protection. Wyoming's single-member charging order protection makes this a viable standalone shield.",
            icon: "Shield",
          },
          {
            title: "Parent-Subsidiary Structure",
            description:
              "Wyoming parent LLC owns subsidiaries in operating states. The parent provides umbrella protection while subsidiaries handle state-specific business.",
            icon: "Layers",
          },
          {
            title: "Investment Holding LLC",
            description:
              "Separate investment assets — stocks, crypto, real estate — from operational business risk. Lawsuits against the operating company cannot reach holdings.",
            icon: "Landmark",
          },
          {
            title: "Real Estate Series LLC",
            description:
              "Each property in its own series cell, isolated from other properties' liabilities. One filing fee, one annual report.",
            icon: "Home",
          },
        ],
      },
      {
        id: "pricing",
        type: "pricing",
        title: "What's Included in Wyoming Gold",
        content:
          "Gold is the package designed for asset protection. It bundles every element required for a fully private, fully shielded Wyoming LLC — no hidden add-ons, no surprise annual invoices.",
        pricingRows: [
          {
            label: "Wyoming LLC formation + state fee",
            price: "Included",
            note: "Articles filed within 24 business hours",
          },
          {
            label: "Registered agent (year 1)",
            price: "Included",
            note: "Physical Wyoming address, SOP forwarding",
          },
          {
            label: "Nominee manager / organizer",
            price: "Included",
            note: "Year-round privacy layer on public filings",
            highlight: true,
          },
          {
            label: "Virtual office + mail forwarding",
            price: "Included",
            note: "Real Wyoming business address",
          },
          {
            label: "Custom operating agreement",
            price: "Included",
            note: "Drafted for charging order optimization",
          },
          {
            label: "EIN acquisition",
            price: "Included",
            note: "Filed directly with the IRS",
          },
          {
            label: "Annual report + compliance monitoring",
            price: "Included",
            note: "Never miss a Wyoming deadline",
          },
        ],
        pricingNote:
          "Wyoming Gold is flat-rate and renews annually. No per-document fees, no surprise charges for routine correspondence.",
        extendedContent:
          "Compare this to assembling the same stack piece by piece: typical standalone registered agent service runs $125-200/year, nominee services $400-800/year, virtual office $600-1,200/year, attorney-drafted operating agreement $500-1,500 one-time, and EIN filing services $75-150. The unbundled cost exceeds the Gold package by a significant multiple — and leaves you coordinating multiple vendors.",
      },
    ],
    faqs: [
      {
        id: "wyap-faq-1",
        question:
          "How much should I have in assets before considering protection?",
        answer:
          "We recommend formal asset protection structures for individuals with $500,000 or more in personal or business assets. But the right time to set up protection is BEFORE you need it — transfers made once a claim is foreseeable can be reversed under fraudulent transfer statutes.",
        category: "asset",
      },
      {
        id: "wyap-faq-2",
        question: "Do I have to live in Wyoming to form a Wyoming LLC?",
        answer:
          "No. Residency has no bearing on formation. Most of our clients never set foot in Wyoming. You do need a Wyoming registered agent and a Wyoming business address — both provided as part of the Gold package — and if your LLC conducts business in another state, you register as a foreign entity there.",
        category: "asset",
      },
      {
        id: "wyap-faq-3",
        question:
          "Will my Wyoming LLC protect me from lawsuits filed in my home state?",
        answer:
          "A home-state court must still respect Wyoming's charging order statute because internal affairs of the LLC are governed by the state of formation. Where home-state courts sometimes push back is on procedural questions — service, jurisdiction, discovery. Layering in proper registration, privacy, and operating agreement terms is how you keep those procedural battles from eroding the substantive Wyoming shield.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
      { title: "Investment Holding LLC", href: "/investment-holding-llc" },
      { title: "LLC vs Living Trust", href: "/llc-vs-living-trust" },
      { title: "Wyoming State Hub", href: "/wyoming" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "Wyoming is not an offshore haven — it is a U.S. state with statutes written to protect owners, enforced by courts that mean it.",
      attribution: "Incorporate123",
      bgText: "Wyoming",
    },
    suggestions: [
      {
        title: "Charging Order Protection",
        description:
          "The statute behind the shield — what it does, what it does not, and why single-member protection matters.",
        href: "/charging-order-protection",
      },
      {
        title: "Wyoming Gold Package",
        description:
          "Flat-rate asset protection package with nominee privacy, virtual office, and custom operating agreement.",
        href: "/gold?state=wyoming",
      },
      {
        title: "Investment Holding LLC",
        description:
          "Put your investment portfolio behind the Wyoming charging order wall — separate from operational risk.",
        href: "/investment-holding-llc",
      },
    ],
  },

  // ============================================================
  // 3. NEVADA ASSET PROTECTION
  // ============================================================
  {
    slug: "nevada-asset-protection",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Nevada Asset Protection",
    description:
      "Nevada's strong charging order statutes and dedicated business court make it a solid choice for asset protection, especially for those operating in Nevada.",
    sections: [
      {
        id: "nevada-overview",
        type: "text",
        title: "Nevada Asset Protection Overview",
        content:
          "Nevada has long been recognized as a business-friendly state with strong asset protection statutes. While Wyoming has surpassed Nevada for single-member LLC protection, Nevada remains an excellent choice for multi-member LLCs, clients who physically operate in Nevada, and those who value Nevada's established business court system and decades of favorable case law. Nevada also offers certain structures — notably spendthrift trusts and series LLCs — that some clients find easier to administer than their Wyoming equivalents.",
        bullets: [
          "Charging order is the exclusive creditor remedy under NRS 86.401",
          "No state income tax on LLCs or members",
          "Dedicated Business Court handles complex commercial disputes",
          "Strong privacy — no member or manager names required publicly",
          "Established case law reaching back to the 1980s",
        ],
        keyPoints: [
          {
            title: "Business Court Advantage",
            description:
              "Nevada's Business Court hears commercial matters on a dedicated docket — faster, more predictable rulings from judges who specialize in LLC disputes.",
            icon: "Scale",
          },
          {
            title: "Best for NV Operators",
            description:
              "If you physically run a business in Nevada, forming there avoids foreign registration costs and simplifies tax compliance.",
            icon: "MapPin",
          },
        ],
      },
      {
        id: "vs-wyoming",
        type: "comparison",
        title: "Nevada vs. Wyoming for Asset Protection",
        content:
          "Both states offer strong charging order protection, but they differ in cost, single-member coverage, and operational fit. For most clients with no Nevada nexus, Wyoming wins on economics. For clients operating in Nevada or running multi-member structures, Nevada often wins on fit.",
        comparisonRows: [
          {
            label: "Charging order — single-member LLC",
            wyoming: "Explicit statutory protection",
            nevada: "Protected via case law",
            highlight: true,
          },
          {
            label: "Charging order — multi-member LLC",
            wyoming: "Exclusive remedy",
            nevada: "Exclusive remedy",
          },
          {
            label: "Annual state fees",
            wyoming: "$60 annual report",
            nevada: "$350 list + $200 license",
            highlight: true,
          },
          {
            label: "State income tax",
            wyoming: "None",
            nevada: "None",
          },
          {
            label: "Business court",
            wyoming: "General civil docket",
            nevada: "Dedicated Business Court",
          },
          {
            label: "Case law depth",
            wyoming: "Strong, growing",
            nevada: "Deep — 40+ years",
          },
          {
            label: "Privacy of members",
            wyoming: "Not public",
            nevada: "Not public",
          },
          {
            label: "Best fit",
            wyoming: "Remote owner, any state",
            nevada: "Physical NV operator",
          },
        ],
      },
      {
        id: "when-nevada",
        type: "differentiator",
        title: "When Nevada Is the Right Call",
        content:
          "Nevada is rarely the default, but it is sometimes the correct answer. Four scenarios cover almost every case where a client is better served by forming there instead of Wyoming.",
        items: [
          {
            title: "Physical Nevada Presence",
            description:
              "You live in Nevada, run a business from a Nevada office, or own Nevada real estate. A Nevada LLC avoids foreign registration.",
            icon: "Building",
          },
          {
            title: "Multi-Member Family LLC",
            description:
              "When charging order protection is needed for an entity with two or more members, Nevada's multi-member case law is as strong as Wyoming's.",
            icon: "Users",
          },
          {
            title: "Business Court Access",
            description:
              "High-value commercial disputes benefit from Nevada's dedicated Business Court, which resolves complex LLC litigation faster than general civil courts.",
            icon: "Gavel",
          },
          {
            title: "Spendthrift Trust Pairing",
            description:
              "Nevada permits self-settled spendthrift trusts (NV Asset Protection Trusts) with only a 2-year look-back — often paired with a Nevada LLC as the funding vehicle.",
            icon: "Shield",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "nvap-faq-1",
        question: "Is Nevada or Wyoming better for asset protection?",
        answer:
          "For most clients, Wyoming wins on cost and single-member protection. Nevada is better if you physically operate there, want a multi-member structure with deep case law support, or plan to pair the LLC with a Nevada Asset Protection Trust. We run the decision matrix with you during onboarding.",
        category: "asset",
      },
      {
        id: "nvap-faq-2",
        question: "What is the Nevada Asset Protection Trust (NVAPT)?",
        answer:
          "The NVAPT is a self-settled spendthrift trust permitted under NRS 166. It allows you to be both the grantor and a discretionary beneficiary while still receiving creditor protection after a 2-year look-back period — the shortest in the country. It is often paired with a Nevada LLC that holds the underlying assets.",
        category: "asset",
      },
      {
        id: "nvap-faq-3",
        question: "Why are Nevada's annual fees so much higher than Wyoming's?",
        answer:
          "Nevada charges an annual list filing fee ($150 for LLCs) plus a mandatory state business license ($200), totaling roughly $350+ per year. Wyoming charges a single $60 annual report fee. Over a decade, the difference adds up to nearly $3,000 per entity — which is why remote owners with no Nevada nexus usually form in Wyoming instead.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
      { title: "Wyoming vs Nevada", href: "/wyoming-vs-nevada-llc" },
      { title: "Wyoming Asset Protection", href: "/wyoming-asset-protection" },
      { title: "Nevada State Hub", href: "/nevada" },
    ],
    relatedPackages: ["nevada-gold", "nevada-silver"],
    pullQuote: {
      quote:
        "Nevada built its asset protection reputation in courtrooms, not marketing brochures — forty years of case law is harder to argue with than a new statute.",
      attribution: "Incorporate123",
      bgText: "Nevada",
    },
    suggestions: [
      {
        title: "Wyoming vs Nevada Comparison",
        description:
          "Side-by-side breakdown of costs, statutes, and practical fit — built to help you pick the right state in 5 minutes.",
        href: "/wyoming-vs-nevada-llc",
      },
      {
        title: "Nevada Gold Package",
        description:
          "Full-stack Nevada LLC with nominee privacy, registered agent, and business license handling — one flat rate.",
        href: "/gold?state=nevada",
      },
      {
        title: "Charging Order Protection",
        description:
          "Understand the underlying shield both states rely on — and why the statute text matters more than the marketing.",
        href: "/charging-order-protection",
      },
    ],
  },

  // ============================================================
  // 4. INVESTMENT HOLDING LLC
  // ============================================================
  {
    slug: "investment-holding-llc",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Investment Holding LLC",
    description:
      "Separate your investment assets — stocks, real estate, cryptocurrency — from operational business risk using a dedicated holding LLC.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is an Investment Holding LLC?",
        content:
          "An investment holding LLC is an entity whose sole purpose is to hold investment assets — stocks, bonds, real estate, cryptocurrency, or other investments. By separating investment assets from operational business activities, you create a legal barrier between the two. If your operating business faces a lawsuit or creditor claim, your investment assets held in a separate LLC are shielded by charging order protection. The structure is conceptually simple but requires discipline to implement correctly — co-mingling funds between operating and holding entities can collapse the separation a court would otherwise respect.",
        bullets: [
          "Holds passive assets only — no products, services, or employees",
          "Separate bank account, separate books, separate tax filings",
          "Funded via documented capital contributions, not informal transfers",
          "Wyoming charging order protection applies to the holding entity",
          "Typically treated as a disregarded entity for tax purposes",
        ],
        keyPoints: [
          {
            title: "No Operational Activity",
            description:
              "The holding LLC must not run a business. Any operational activity weakens the separation between personal and investment risk.",
            icon: "EyeOff",
          },
          {
            title: "Paper Trail Matters",
            description:
              "Capital contributions, distributions, and inter-entity transactions must be documented in writing. Courts unwind sloppy structures.",
            icon: "FileText",
          },
        ],
      },
      {
        id: "how-it-works",
        type: "text",
        title: "How the Structure Works",
        content:
          "You form a Wyoming LLC specifically to hold investment assets. This LLC has no operational activities — it doesn't sell products, provide services, or hire employees. It simply owns assets. You contribute capital by transferring cash, securities, or property in exchange for membership interest, documented in the operating agreement. Combined with Wyoming's charging order protection, creditors of your operating business or personal creditors cannot reach the assets held within this LLC. If a personal judgment hits, the creditor gets a charging order against distributions — and the manager simply does not distribute.",
        extendedContent:
          "For taxable brokerage accounts, the holding LLC opens an account in its own name and EIN. For real estate, title is transferred via deed (recorded in the county) from your name to the LLC. For cryptocurrency, the LLC sets up wallets and any exchange accounts directly. The one asset class that does not play well with this structure is a retirement account (IRA, 401k) — those are held in trust under ERISA and cannot simply be re-titled into an LLC without triggering a taxable distribution. A self-directed IRA using a specially structured LLC is possible but requires separate planning.",
      },
      {
        id: "who-benefits",
        type: "audience",
        title: "Who Benefits From an Investment Holding LLC?",
        content:
          "The investment holding LLC is not for everyone — it adds a layer of administration and annual cost. But for five distinct investor profiles, it is one of the highest-leverage structures in domestic asset protection.",
        items: [
          {
            title: "Active Business Owners",
            description:
              "You run an operating business with employees, contracts, or customers. Separate your liquid investments so one lawsuit cannot take both.",
            icon: "Briefcase",
          },
          {
            title: "Licensed Professionals",
            description:
              "Doctors, attorneys, engineers, and financial advisors face personal liability. A holding LLC isolates your investment nest egg from malpractice risk.",
            icon: "UserCheck",
          },
          {
            title: "High-Net-Worth Investors",
            description:
              "$500K+ portfolio with concentrated positions. Charging order protection is cheaper and simpler than an offshore trust for most clients at this level.",
            icon: "TrendingUp",
          },
          {
            title: "Crypto Holders",
            description:
              "Self-custodied wallets are attractive targets. Moving holdings into an LLC creates a recorded, defensible ownership structure.",
            icon: "Key",
          },
          {
            title: "Real Estate Investors",
            description:
              "Hold passive investment properties (not active flipping or development) where tenant and contractor risk is real.",
            icon: "Home",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "ihlc-faq-1",
        question: "Can I use one LLC for both operations and investments?",
        answer:
          "You can, but it defeats the purpose of asset separation. Having a dedicated holding LLC creates a legal barrier between your operational risk and your investment assets. Co-mingled entities are also easier for creditors to attack as alter egos — courts are more willing to pierce the veil when there is no clean line between personal, operational, and investment activity.",
        category: "asset",
      },
      {
        id: "ihlc-faq-2",
        question: "How are investment holding LLCs taxed?",
        answer:
          "A single-member holding LLC is a disregarded entity by default — all income and gains flow to your personal return exactly as if the LLC did not exist. No entity-level tax, no separate return, no change to how dividends or capital gains are treated. Multi-member LLCs file a partnership return (Form 1065) but still pass everything through to members.",
        category: "asset",
      },
      {
        id: "ihlc-faq-3",
        question: "Can I hold my IRA or 401(k) in an investment holding LLC?",
        answer:
          "Not directly. Retirement accounts are held in trust under ERISA and IRC rules — transferring them into an LLC would trigger a taxable distribution. What is possible is a self-directed IRA that invests in a specially structured LLC (often called an IRA-LLC or checkbook control LLC), but that is a distinct structure with its own prohibited transaction rules. Talk to us before attempting it.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
      {
        title: "Real Estate Asset Protection",
        href: "/real-estate-asset-protection",
      },
      { title: "LLC vs Living Trust", href: "/llc-vs-living-trust" },
      { title: "Gold Package", href: "/gold?state=wyoming" },
    ],
    relatedPackages: ["wyoming-gold"],
    pullQuote: {
      quote:
        "If you run a business, your operating entity is the lightning rod. Your savings should not be standing next to it.",
      attribution: "Incorporate123",
      bgText: "Holding",
    },
    suggestions: [
      {
        title: "Wyoming Asset Protection",
        description:
          "Why Wyoming is the default state for holding structures — statute text, annual costs, and privacy features.",
        href: "/wyoming-asset-protection",
      },
      {
        title: "LLC vs Living Trust",
        description:
          "Which vehicle actually stops a lawsuit, which one just skips probate, and why many clients need both.",
        href: "/llc-vs-living-trust",
      },
      {
        title: "Charging Order Protection",
        description:
          "The legal mechanism that makes a holding LLC an actual shield rather than just another bank account.",
        href: "/charging-order-protection",
      },
    ],
  },

  // ============================================================
  // 5. REAL ESTATE ASSET PROTECTION (renamed from "real-estate")
  // ============================================================
  {
    slug: "real-estate-asset-protection",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "Real Estate Asset Protection",
    description:
      "Protect rental properties and real estate investments with LLC structures that isolate each property's liability and keep ownership private.",
    sections: [
      {
        id: "why-protect",
        type: "text",
        title: "Why Protect Real Estate with an LLC?",
        content:
          "Real estate investors face unique liability risks: tenant lawsuits, slip-and-fall claims, property damage disputes, lead paint and mold claims, construction defects, and contractor disputes. Without proper entity structuring, a single lawsuit from one property could put all of your personal assets and other properties at risk. An LLC creates a legal barrier between each property and your personal assets — and, when structured correctly, between each property and every other property in your portfolio.",
        bullets: [
          "Tenant and slip-and-fall claims are the #1 real estate lawsuit category",
          "Umbrella insurance pays until it does not — LLCs do not have limits",
          "Mortgage due-on-sale clauses rarely trigger on LLC transfers you own",
          "LLC title appears in the public record — privacy requires nominee layering",
          "Depreciation and pass-through treatment are unchanged by LLC ownership",
        ],
        keyPoints: [
          {
            title: "Insurance Is Not Enough",
            description:
              "Policy limits, exclusions, and coverage denials leave gaps. An LLC is a second line of defense, not a replacement for insurance.",
            icon: "Shield",
          },
          {
            title: "Form Before the Deed",
            description:
              "Transferring existing properties triggers title work, lender notices, and possible transfer tax. Plan the structure before the next purchase.",
            icon: "FileText",
          },
        ],
      },
      {
        id: "strategy-comparison",
        type: "comparison",
        title: "Single LLC vs. Series LLC vs. Per-Property",
        content:
          "There are three legitimate ways to structure a multi-property real estate portfolio. They trade off isolation, cost, and administrative complexity. Here is how they compare in a Wyoming-Nevada context — both states recognize all three.",
        comparisonRows: [
          {
            label: "Liability isolation",
            wyoming: "Series cells: per-property",
            nevada: "Series cells: per-property",
            highlight: true,
          },
          {
            label: "Single LLC with 5 properties",
            wyoming: "All 5 exposed per claim",
            nevada: "All 5 exposed per claim",
          },
          {
            label: "Per-property LLC strategy",
            wyoming: "$60/yr per entity",
            nevada: "$350+/yr per entity",
            highlight: true,
          },
          {
            label: "Series LLC — total annual cost",
            wyoming: "$60 total",
            nevada: "$350+ total",
          },
          {
            label: "Series LLC out-of-state recognition",
            wyoming: "Untested in ~30 states",
            nevada: "Untested in ~30 states",
          },
          {
            label: "Administrative burden",
            wyoming: "Low (series) to high (per-LLC)",
            nevada: "Low (series) to high (per-LLC)",
          },
          {
            label: "Best fit",
            wyoming: "2+ properties, cost-sensitive",
            nevada: "NV situs properties only",
          },
        ],
        extendedContent:
          "A crucial nuance: Series LLC protection is rock-solid when the property sits in a state that recognizes series (Wyoming, Delaware, Illinois, Texas, Nevada, Iowa, and a handful more). When the underlying property is in a state without series legislation — say, a Wyoming series owning a rental in Georgia — it is unclear whether Georgia courts will honor the internal shield between cells. For multi-state portfolios, many clients fall back on per-property LLCs despite the higher annual cost, or use a Wyoming parent owning state-specific subsidiary LLCs in each operating state.",
      },
      {
        id: "strategies",
        type: "audience",
        title: "Real Estate LLC Strategies",
        content:
          "Different portfolios call for different structures. Here is how we typically match strategy to investor profile.",
        items: [
          {
            title: "One LLC Per Property",
            description:
              "Each property in its own LLC. Maximum isolation — a lawsuit on one property cannot reach others. Highest annual cost but strongest case law.",
            icon: "Home",
          },
          {
            title: "Wyoming Series LLC",
            description:
              "Each property in a separate series cell. Similar isolation with simpler administration and a single annual report. Best when properties are in series-friendly states.",
            icon: "Layers",
          },
          {
            title: "Parent-Subsidiary",
            description:
              "Wyoming parent LLC owns subsidiary LLCs in each state where properties are located. Combines Wyoming charging order protection with in-state operating entities.",
            icon: "Building",
          },
          {
            title: "Holding + Operating Split",
            description:
              "One LLC owns real estate, a separate LLC acts as property manager. Isolates management liability from title.",
            icon: "Briefcase",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "re-faq-1",
        question: "Do I need a separate LLC for each property?",
        answer:
          "It depends on your risk tolerance and the states involved. Each property in its own LLC provides maximum isolation. A Wyoming Series LLC offers similar protection for properties located in series-friendly states, with much simpler administration. A single LLC with all properties offers the weakest protection — one claim can reach every property.",
        category: "asset",
      },
      {
        id: "re-faq-2",
        question:
          "Will transferring my property to an LLC trigger the mortgage due-on-sale clause?",
        answer:
          "In practice, rarely. The Garn-St. Germain Act protects transfers to a trust; transfers to an LLC you own are a grey area lenders almost never enforce on performing loans. That said, we recommend notifying the lender in writing before the transfer. For brand-new purchases, buying in the LLC name from day one avoids the question entirely.",
        category: "asset",
      },
      {
        id: "re-faq-3",
        question: "Does holding rental property in an LLC affect my taxes?",
        answer:
          "No. A single-member LLC is a disregarded entity by default — rental income, depreciation, and expenses flow through to Schedule E exactly as they would in your personal name. Multi-member LLCs file a Form 1065 partnership return but still pass everything through. There is no entity-level tax and no change to 1031 exchange eligibility or cost basis treatment.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      { title: "Investment Holding LLC", href: "/investment-holding-llc" },
      { title: "Wyoming Asset Protection", href: "/wyoming-asset-protection" },
      { title: "Series LLC", href: "/series-llc" },
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "Every rental unit is a liability waiting for a plaintiff. The question is not whether to isolate them — it is how.",
      attribution: "Incorporate123",
      bgText: "Property",
    },
    suggestions: [
      {
        title: "Series LLC",
        description:
          "One filing, multiple liability-isolated cells — the cheapest way to protect a multi-property portfolio in Wyoming.",
        href: "/series-llc",
      },
      {
        title: "Investment Holding LLC",
        description:
          "Keep passive investment real estate separated from active operating businesses and personal assets.",
        href: "/investment-holding-llc",
      },
      {
        title: "Wyoming Gold Package",
        description:
          "Full privacy and protection stack for your first (or next) rental property — flat annual rate, no surprise fees.",
        href: "/gold?state=wyoming",
      },
    ],
  },

  // ============================================================
  // 6. LLC VS LIVING TRUST (NEW)
  // ============================================================
  {
    slug: "llc-vs-living-trust",
    pillar: "asset",
    pillarLabel: "Asset Protection",
    title: "LLC vs Living Trust for Asset Protection",
    description:
      "A living trust skips probate. An LLC stops lawsuits. They solve different problems — and many clients need both. Here is exactly when to use each.",
    sections: [
      {
        id: "the-confusion",
        type: "text",
        title: "The Most Common Asset Protection Mistake",
        content:
          "At least once a week a new client tells us their attorney set up a living trust for asset protection. A revocable living trust is an estate planning tool that avoids probate — it does not protect assets from lawsuits during your lifetime. Because you retain the power to revoke and amend the trust, creditors can reach every asset inside it exactly as if it were titled in your personal name. An LLC works the opposite way: it offers weak estate planning benefits but strong lawsuit protection through charging order statutes. Confusing the two can cost you your life savings.",
        bullets: [
          "Revocable trusts offer ZERO lawsuit protection during your lifetime",
          "LLCs offer strong lawsuit protection but no automatic probate avoidance",
          "Irrevocable trusts can protect assets but are rigid and hard to unwind",
          "Many sophisticated plans use both in complementary roles",
          "The marketing language 'asset protection trust' almost always means something specific",
        ],
        keyPoints: [
          {
            title: "Revocable Means Reachable",
            description:
              "If you can revoke the trust, so can a court. A judgment creditor steps into your shoes the moment the judgment is final.",
            icon: "Eye",
          },
          {
            title: "The Trust Is Not You",
            description:
              "For probate and tax purposes this matters. For creditors in a revocable trust, you and the trust are legally identical.",
            icon: "FileText",
          },
        ],
      },
      {
        id: "comparison",
        type: "comparison",
        title: "LLC vs. Living Trust — Side by Side",
        content:
          "The two vehicles overlap in almost nothing. Here is how they compare across the dimensions that matter for a $500K+ household. The 'wyoming' column represents the LLC answer; the 'nevada' column represents the living trust answer.",
        comparisonRows: [
          {
            label: "Lawsuit protection (lifetime)",
            wyoming: "Strong — charging order",
            nevada: "None for revocable trusts",
            highlight: true,
          },
          {
            label: "Privacy on public records",
            wyoming: "Strong — no member names",
            nevada: "Strong — trusts not recorded",
          },
          {
            label: "Tax treatment",
            wyoming: "Pass-through (disregarded)",
            nevada: "Pass-through (grantor trust)",
          },
          {
            label: "Typical setup cost",
            wyoming: "$500 – $2,000",
            nevada: "$1,500 – $5,000",
          },
          {
            label: "Annual maintenance",
            wyoming: "$60 (WY) + registered agent",
            nevada: "None after setup",
          },
          {
            label: "Administrative complexity",
            wyoming: "Moderate — books, account",
            nevada: "Low — funding is the main task",
          },
          {
            label: "Estate transfer at death",
            wyoming: "Requires operating agreement terms",
            nevada: "Automatic — skips probate",
            highlight: true,
          },
          {
            label: "Revocable during lifetime",
            wyoming: "Yes — dissolve or amend",
            nevada: "Yes — fully revocable",
          },
          {
            label: "Protects against your creditors",
            wyoming: "Yes — charging order exclusive",
            nevada: "No — creditors reach trust assets",
            highlight: true,
          },
        ],
        extendedContent:
          "An important clarification on terminology: there is a category called 'Domestic Asset Protection Trust' (DAPT) — used in Nevada, Wyoming, Delaware, South Dakota, and about 15 other states — which IS irrevocable (or effectively so) and DOES provide creditor protection after a statutory look-back period. DAPTs are a separate product from the revocable living trusts most estate planning attorneys sell, and they cost significantly more to establish and maintain. When someone says 'asset protection trust,' always ask which kind — the difference is the entire point.",
      },
      {
        id: "who-benefits",
        type: "audience",
        title: "Who Benefits From Each Tool",
        content:
          "Different household profiles call for different combinations. Here is the matchmaking we use in client consultations.",
        items: [
          {
            title: "LLC Only",
            description:
              "Single owner, no heirs, primary concern is lawsuit risk during lifetime. Charging order protection is the entire point.",
            icon: "Shield",
          },
          {
            title: "Living Trust Only",
            description:
              "Passive owner with low liability exposure (retiree, salary-only professional) whose main goal is probate avoidance for heirs.",
            icon: "FileText",
          },
          {
            title: "LLC + Revocable Trust (Most Common)",
            description:
              "Business owner or landlord with family. The LLC handles lawsuits; the trust owns the LLC membership interest to avoid probate.",
            icon: "Layers",
          },
          {
            title: "LLC + DAPT",
            description:
              "High-net-worth client ($2M+) with significant liability exposure. The DAPT adds a second creditor barrier after the LLC shield.",
            icon: "ShieldCheck",
          },
          {
            title: "Series LLC + Trust",
            description:
              "Multi-property landlord who wants both per-property isolation AND seamless estate transfer. The trust holds the series LLC.",
            icon: "Home",
          },
        ],
      },
      {
        id: "use-both",
        type: "differentiator",
        title: "When to Use Both — The Stacking Strategy",
        content:
          "For most of our clients, the answer is not LLC OR trust. It is LLC inside trust. The LLC handles the lawsuit problem; the trust handles the probate problem. Here is how the structure stacks in practice, and what each piece does.",
        items: [
          {
            title: "LLC Owns the Assets",
            description:
              "Real estate, investments, operating business — all titled to the LLC. Charging order protection applies at this layer.",
            icon: "Building",
          },
          {
            title: "Trust Owns the LLC Membership",
            description:
              "The trust is the member of record in the LLC operating agreement. During lifetime, the trust is revocable and you are the trustee.",
            icon: "Key",
          },
          {
            title: "At Death, the Trust Takes Over",
            description:
              "The successor trustee steps in. Because the trust — not you personally — owns the LLC, there is no probate proceeding for the LLC interest.",
            icon: "Sparkles",
          },
          {
            title: "Privacy Layers Compound",
            description:
              "The trust is private (not recorded). The LLC is private (no public members). Combined, there is no public trail from you to the assets.",
            icon: "EyeOff",
          },
        ],
        extendedContent:
          "The one wrinkle: revocable trust ownership can, in some states, weaken the single-member charging order argument — the trust is technically a separate member but is fully controlled by the grantor. Wyoming's statute handles this cleanly because it protects single-member LLCs regardless of how the interest is held. In weaker-protection states, the operating agreement needs explicit language addressing trust ownership. This is exactly the kind of detail that separates a boilerplate LLC filing from an actual asset protection structure.",
      },
    ],
    faqs: [
      {
        id: "lvt-faq-1",
        question: "Will a living trust protect me from a lawsuit?",
        answer:
          "No. A revocable living trust offers no creditor protection during your lifetime. Because you retain the power to revoke or amend the trust, creditors can reach every asset inside it as if you owned it directly. Living trusts are estate planning tools — they exist to avoid probate, not to stop lawsuits.",
        category: "asset",
      },
      {
        id: "lvt-faq-2",
        question: "Do I need a trust if I have an LLC?",
        answer:
          "Often, yes. An LLC protects assets from lawsuits but does not automatically pass to your heirs without court involvement. Putting the LLC membership interest inside a revocable trust gives you lawsuit protection AND probate avoidance — the best of both. For many clients this stacking is the default plan.",
        category: "asset",
      },
      {
        id: "lvt-faq-3",
        question: "What is a Domestic Asset Protection Trust (DAPT)?",
        answer:
          "A DAPT is a self-settled irrevocable trust permitted in certain states (Nevada, Wyoming, Delaware, South Dakota, and others). Unlike a revocable trust, a DAPT does provide creditor protection — but only after a statutory look-back period (2 years in Nevada, longer elsewhere) and only if the transfer was not fraudulent. DAPTs are a separate product from the living trusts most estate attorneys sell.",
        category: "asset",
      },
      {
        id: "lvt-faq-4",
        question: "Can I fund the LLC from my trust or vice versa?",
        answer:
          "Yes — and this is typically how the stacking structure is built. The trust contributes cash or assets to the LLC as its capital contribution, becoming the sole member. All contributions should be documented in the operating agreement and on the trust's books. Retroactive transfers made after a lawsuit becomes foreseeable can be unwound under fraudulent transfer statutes, so the time to do this is before anything is wrong.",
        category: "asset",
      },
    ],
    sidebarLinks: [
      {
        title: "Charging Order Protection",
        href: "/charging-order-protection",
      },
      { title: "Investment Holding LLC", href: "/investment-holding-llc" },
      {
        title: "Real Estate Asset Protection",
        href: "/real-estate-asset-protection",
      },
      { title: "Wyoming Asset Protection", href: "/wyoming-asset-protection" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "A living trust is a will that skips probate. It is not a lawsuit shield. Never has been, never will be.",
      attribution: "Incorporate123",
      bgText: "Clarity",
    },
    suggestions: [
      {
        title: "Charging Order Protection",
        description:
          "The actual mechanism that makes an LLC — not a revocable trust — the shield you want when a plaintiff calls.",
        href: "/charging-order-protection",
      },
      {
        title: "Wyoming Asset Protection",
        description:
          "Why Wyoming handles trust-owned LLCs more cleanly than any other state and still costs $60 a year.",
        href: "/wyoming-asset-protection",
      },
      {
        title: "Investment Holding LLC",
        description:
          "Put the LLC + trust stacking strategy into practice for investment assets you want protected and transferable.",
        href: "/investment-holding-llc",
      },
    ],
    crossPillarCTA: {
      pillar: "privacy",
      title: "Stack Privacy on Top",
      description:
        "An LLC inside a trust protects you from lawsuits and probate. Add anonymous formation to remove your name from public records entirely.",
      href: "/anonymous-llc",
    },
  },
];
