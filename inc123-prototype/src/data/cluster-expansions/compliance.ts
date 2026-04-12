import type { ClusterContent } from "@/lib/types";

export const COMPLIANCE_EXPANSIONS: ClusterContent[] = [
  // ==================== 1. REGISTERED AGENT ====================
  {
    slug: "registered-agent",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Registered Agent Service",
    description:
      "Professional registered agent service in Wyoming and Nevada. Receive legal documents and state correspondence — included in every package.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is a Registered Agent?",
        content:
          "Every LLC and corporation in every U.S. state must designate a registered agent — a person or company authorized to receive legal documents (service of process), state correspondence, and official notices on behalf of your entity. The registered agent must have a physical address in the state of formation (PO boxes are not accepted) and be available during standard business hours, every business day of the year. Our registered agent service is included in every package for the first year and renews at a flat rate thereafter.",
        extendedContent:
          "The role is not ceremonial. A missed service of process can result in a default judgment against your company — meaning a court ruling with no opportunity to defend yourself. State agencies also send tax notices, annual report reminders, and franchise tax correspondence to the registered agent. Missing any of these can trigger late fees, penalties, or administrative dissolution.",
      },
      {
        id: "what-they-do",
        type: "differentiator",
        title: "What Registered Agents Actually Do",
        content:
          "Beyond the legal requirement, a professional registered agent performs three critical functions that protect your entity and your privacy. The value is not in the address — it is in the reliability and judgment of the person receiving documents on your behalf.",
        keyPoints: [
          {
            title: "Service of Process",
            description:
              "Receive lawsuits, subpoenas, and court orders during business hours, then forward immediately so you never miss a filing deadline.",
            icon: "Gavel",
          },
          {
            title: "State Correspondence",
            description:
              "Receive annual report notices, tax forms, franchise tax bills, and compliance letters from the Secretary of State.",
            icon: "FileText",
          },
          {
            title: "Privacy Buffer",
            description:
              "Keep your personal home address off the public record. The registered agent address appears on all state filings instead of yours.",
            icon: "Shield",
          },
        ],
      },
      {
        id: "professional-vs-self",
        type: "text",
        title: "Why Professional Over Self-Serve",
        content:
          "Technically, you can serve as your own registered agent if you have a physical address in the formation state and can be present during business hours. In practice, it is a bad trade. You expose your home address on the public record, you must be physically present every business day, and a single missed delivery can cost you a default judgment.",
        bullets: [
          "Your home address becomes public record on every state filing",
          "You must be present during business hours, every business day, year-round",
          "Travel, vacation, or a day off becomes a compliance risk",
          "Process servers visit your home — in front of family, neighbors, clients",
          "A missed service can result in default judgments with no defense",
        ],
      },
    ],
    faqs: [
      {
        id: "ra-faq-1",
        question: "Can I be my own registered agent?",
        answer:
          "Technically yes, but it is not recommended. You would need a physical address in the formation state and must be available during business hours every business day. Using a professional registered agent protects your privacy, ensures you never miss legal documents, and keeps your home address off the public record.",
        category: "compliance",
      },
      {
        id: "ra-faq-2",
        question: "What happens if my registered agent misses a document?",
        answer:
          "A missed service of process can result in a default judgment — a court ruling against your company without any opportunity to defend yourself. Missed state correspondence can trigger late fees, penalties, and eventually administrative dissolution. Professional agents carry errors-and-omissions insurance and maintain systems to ensure nothing is missed.",
        category: "compliance",
      },
      {
        id: "ra-faq-3",
        question: "Can I change my registered agent after formation?",
        answer:
          "Yes. You can change your registered agent at any time by filing a Statement of Change with the Secretary of State. The filing fee is $10 in Wyoming and $60 in Nevada. If you are transferring service to us, we handle the paperwork and filing as part of the onboarding process.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Annual Reports", href: "/annual-reports" },
      { title: "Corporate Minutes", href: "/corporate-minutes" },
      { title: "Virtual Office", href: "/virtual-office" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "A registered agent is the first line of defense between your business and a default judgment. It is not a box to check.",
      attribution: "Incorporate123 Compliance Team",
      bgText: "PROTECTED",
    },
    suggestions: [
      {
        title: "Compare Registered Agent vs Virtual Office",
        description:
          "Understand why you need both services and what each one actually does for your entity.",
        href: "/virtual-office",
      },
      {
        title: "See What Happens When Filings Are Missed",
        description:
          "Annual report deadlines, consequences, and how we make sure your entity never gets administratively dissolved.",
        href: "/annual-reports",
      },
      {
        title: "View Wyoming Gold Package",
        description:
          "Registered agent service plus nominee privacy, annual reports, and corporate minutes in one all-inclusive package.",
        href: "/packages/wyoming-gold",
      },
    ],
  },

  // ==================== 2. ANNUAL REPORTS ====================
  {
    slug: "annual-reports",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Annual Report Filing",
    description:
      "Timely preparation and filing of state annual reports. Avoid penalties, late fees, and administrative dissolution — included in Silver and Gold packages.",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are Annual Reports?",
        content:
          "Annual reports (called the 'Annual List' in Nevada) are required state filings that confirm your entity's current information — registered agent, officers, managers, members, and business address. Both Wyoming and Nevada require annual filings, though the fees, due dates, and consequences of missing them differ significantly. Failure to file triggers late fees and penalties, and continued non-compliance results in administrative dissolution, which strips your entity of its legal status and liability protection.",
        extendedContent:
          "Reinstating an administratively dissolved entity is possible but expensive: you pay all back fees, penalties, a reinstatement fee, and file catch-up annual reports. In Nevada, the total cost of reinstatement commonly exceeds $500. More importantly, any gap in good standing creates a window of personal liability exposure — during the dissolved period, courts can disregard the entity and hold owners personally responsible for business debts.",
      },
      {
        id: "wy-vs-nv",
        type: "comparison",
        title: "Wyoming vs Nevada Annual Filing",
        content:
          "Both states require annual filings, but the economics and consequences are very different. Wyoming is dramatically cheaper and more forgiving; Nevada costs more and penalizes missed deadlines harder.",
        comparisonRows: [
          {
            label: "Due Date",
            wyoming: "First day of anniversary month",
            nevada: "Last day of anniversary month",
            highlight: true,
          },
          {
            label: "Annual Fee (LLC)",
            wyoming: "$60 minimum",
            nevada: "$350 (List + Business License)",
            highlight: true,
          },
          {
            label: "Required Information",
            wyoming: "Registered agent, principal office",
            nevada: "Managers, members, officers disclosed",
          },
          {
            label: "Late Fee",
            wyoming: "$50 penalty",
            nevada: "$75 penalty + $100 reinstatement",
          },
          {
            label: "Dissolution Timeline",
            wyoming: "After 60 days delinquent",
            nevada: "Immediate loss of good standing",
            highlight: true,
          },
          {
            label: "Reinstatement Cost",
            wyoming: "~$110 plus back fees",
            nevada: "~$500+ plus back fees and penalties",
          },
        ],
      },
      {
        id: "what-we-file",
        type: "differentiator",
        title: "What We File For You",
        content:
          "Our annual report service is not a calendar reminder — we prepare and file the actual document with the state. Clients in Silver and Gold packages never touch the filing themselves. We handle four things automatically each year.",
        items: [
          {
            title: "Deadline Tracking",
            description:
              "We monitor your anniversary month and begin preparing the filing 45 days ahead of the deadline, eliminating any risk of oversight.",
            icon: "Calendar",
          },
          {
            title: "Information Verification",
            description:
              "We confirm registered agent, addresses, and officer information with you, then reconcile against the prior year's filing for accuracy.",
            icon: "CheckCircle",
          },
          {
            title: "State Submission",
            description:
              "We file electronically with the Secretary of State, pay state fees from your billing profile, and receive the confirmation directly.",
            icon: "FileText",
          },
          {
            title: "Filed Document Delivery",
            description:
              "You receive the stamped, state-confirmed filing for your records within 48 hours of submission, stored in your secure client portal.",
            icon: "BookOpen",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "ar-faq-1",
        question: "What happens if I miss my annual report?",
        answer:
          "In Wyoming, you face a $50 late fee and have 60 days before the state begins dissolution proceedings. In Nevada, you immediately lose good standing and face $75 in penalties plus a $100 reinstatement fee. Continued non-compliance results in administrative dissolution, stripping your entity of legal status and opening personal liability exposure.",
        category: "compliance",
      },
      {
        id: "ar-faq-2",
        question: "When is my annual report due?",
        answer:
          "In Wyoming, it is due on the first day of your anniversary month — the month you originally formed the entity. In Nevada, it is due on the last day of your anniversary month. We track these dates automatically for every client and begin preparing the filing 45 days in advance.",
        category: "compliance",
      },
      {
        id: "ar-faq-3",
        question:
          "Does filing an annual report expose my personal information?",
        answer:
          "In Wyoming, no. Annual reports require only the registered agent and principal office — neither of which needs to be you. In Nevada, managers and officers must be disclosed, which is why our Gold package includes a nominee manager to keep your name off the annual list. You remain the beneficial owner, but not the public-facing one.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "Corporate Minutes", href: "/corporate-minutes" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "A missed annual report is not a paperwork problem. It is a liability problem — because during the gap, your corporate veil does not exist.",
      bgText: "FILED",
    },
    suggestions: [
      {
        title: "See Our Complete Compliance Calendar",
        description:
          "Every deadline we track for you — annual reports, tax filings, license renewals, registered agent renewals, and more.",
        href: "/compliance",
      },
      {
        title: "Understand Nevada Nominee Services",
        description:
          "Why Nevada's disclosure requirements make nominee managers a practical necessity for privacy-focused owners.",
        href: "/nominee-services",
      },
      {
        title: "Compare Wyoming vs Nevada",
        description:
          "Annual fees are one of several reasons Wyoming is our default recommendation for 70% of clients.",
        href: "/wyoming-vs-nevada",
      },
    ],
  },

  // ==================== 3. CORPORATE MINUTES ====================
  {
    slug: "corporate-minutes",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Corporate Minutes Maintenance",
    description:
      "Professional minute book preparation and maintenance. Protect your corporate veil with proper documentation — included in Silver and Gold packages.",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are Corporate Minutes?",
        content:
          "Corporate minutes are formal written records of decisions made by your LLC's members or managers (or a corporation's board of directors). They document meetings, resolutions, major business decisions, and any actions that change the entity's structure or operations. Proper minutes are not optional window dressing — they are the documentary evidence courts look at when deciding whether to pierce the corporate veil. Other formation companies charge $400-500/year extra for this service. We include it in every Silver and Gold package.",
        extendedContent:
          "The standard is not 'did you keep a binder somewhere.' The standard is 'did the entity behave like a separate legal person.' Courts look at whether decisions were documented contemporaneously, whether meetings (even of a single-member LLC) were recorded, and whether the entity maintained formalities distinct from its owners' personal affairs.",
      },
      {
        id: "minute-book",
        type: "text",
        title: "What Goes in the Minute Book",
        content:
          "A proper minute book is more than a stack of meeting notes. It is the complete documentary history of the entity's legal existence. We prepare and maintain each of the following records, updated continuously as your business evolves.",
        bullets: [
          "Formation documents (Articles of Organization, Operating Agreement, EIN letter)",
          "Initial organizational resolutions authorizing bank accounts and officers",
          "Annual member or manager meeting minutes (required even for single-member LLCs)",
          "Resolutions for major decisions (loans, real estate, hiring, contracts over a threshold)",
          "Ownership transfer records and membership interest certificates",
          "Amendments to the operating agreement or articles of organization",
          "Documentation of any changes to registered agent, address, or officers",
        ],
      },
      {
        id: "piercing-veil",
        type: "differentiator",
        title: "Piercing the Corporate Veil",
        content:
          "When a court 'pierces the corporate veil,' it sets aside the entity's separate legal status and holds the owners personally liable for business debts and judgments. This is the single biggest threat to an LLC owner who thought they were protected. Courts consider several factors — and missing minutes is one of the easiest for a plaintiff's attorney to exploit.",
        keyPoints: [
          {
            title: "Alter Ego Doctrine",
            description:
              "If the court finds the LLC is merely a personal alter ego — with commingled funds, no minutes, no formalities — it treats owner and entity as one.",
            icon: "AlertTriangle",
          },
          {
            title: "Documentary Evidence",
            description:
              "Minutes prove the entity made independent decisions. Without them, plaintiffs argue the entity was just a facade for personal business.",
            icon: "FileText",
          },
          {
            title: "Undercapitalization Defense",
            description:
              "Proper documentation of capital contributions, loans, and distributions defends against claims that the LLC was never a real business.",
            icon: "ShieldCheck",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "cm-faq-1",
        question: "What happens if I don't maintain corporate minutes?",
        answer:
          "Without proper minutes, you risk 'piercing the corporate veil' — a court ruling that treats your LLC as your personal alter ego and eliminates your liability protection. Plaintiffs' attorneys specifically look for missing minutes as evidence the entity was a facade. We maintain contemporaneous minutes to prevent this defense from succeeding.",
        category: "compliance",
      },
      {
        id: "cm-faq-2",
        question: "Do single-member LLCs really need meeting minutes?",
        answer:
          "Yes, and they need them more than multi-member LLCs. Single-member LLCs face the highest piercing risk because courts can easily see them as personal alter egos. Annual minutes documenting the sole member's decisions, distributions, and formal acknowledgment of the entity's separate existence are essential to the liability protection.",
        category: "compliance",
      },
      {
        id: "cm-faq-3",
        question: "How often do you update our minute book?",
        answer:
          "We prepare annual meeting minutes automatically each year as part of your Silver or Gold package. We also prepare resolutions on-demand whenever major decisions occur — opening a bank account, signing a lease, taking on debt, adding a member, or any transaction above your agreed threshold. Everything is stored in your secure client portal.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "Annual Reports", href: "/annual-reports" },
    ],
    relatedPackages: ["wyoming-gold", "wyoming-silver"],
    pullQuote: {
      quote:
        "Courts do not pierce the veil because of bad intent. They pierce it because of missing paperwork.",
      bgText: "RECORDS",
    },
    suggestions: [
      {
        title: "Read: Corporate Veil Protection Checklist",
        description:
          "The seven habits of LLC owners whose entities survive litigation — and the four habits that get them pierced.",
        href: "/corporate-veil",
      },
      {
        title: "See Sample Minute Book Contents",
        description:
          "Walk through an example minute book so you understand exactly what we maintain on your behalf each year.",
        href: "/sample-minute-book",
      },
      {
        title: "Wyoming Silver Package",
        description:
          "Registered agent, annual reports, and corporate minutes maintenance in one flat-rate package. Start here.",
        href: "/packages/wyoming-silver",
      },
    ],
  },

  // ==================== 4. VIRTUAL OFFICE ====================
  {
    slug: "virtual-office",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Virtual Office & Mail Forwarding",
    description:
      "Professional Reno, NV business address with mail forwarding. A real street address (not a PO box) for business cards, websites, state filings, and bank accounts.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is a Virtual Office?",
        content:
          "A virtual office provides a professional business address without the cost of physical office space. Our Reno, Nevada address is a real street address — not a PO box or CMRA — which means it is accepted by banks, state agencies, payment processors, and anywhere a legitimate business address is required. Mail is received at the address, scanned or forwarded based on your preference, and you get the privacy benefit of keeping your home address off every public and commercial record.",
        extendedContent:
          "The distinction between a real street address and a PO box matters more than most owners realize. Banks reject PO boxes when opening business accounts. State filings reject PO boxes as principal office addresses. Stripe, PayPal, and merchant processors flag PO boxes during underwriting. A real virtual office address clears all of these hurdles while providing the same privacy benefit.",
      },
      {
        id: "vo-vs-ra",
        type: "text",
        title: "Virtual Office vs Registered Agent",
        content:
          "Clients frequently ask whether the virtual office replaces the registered agent service, or vice versa. They serve different legal purposes and you generally need both. The registered agent receives legal documents and state correspondence. The virtual office receives business mail, acts as your commercial address, and appears on your public-facing materials. Conflating them creates compliance gaps.",
        bullets: [
          "Registered agent: receives lawsuits, subpoenas, and official state correspondence",
          "Virtual office: receives vendor mail, bank statements, client correspondence, general business mail",
          "Registered agent address: private, used only on state formation filings",
          "Virtual office address: public, used on business cards, websites, contracts, bank accounts",
          "Both are needed: the registered agent is a legal requirement; the virtual office is a privacy and operational layer",
        ],
      },
      {
        id: "address-uses",
        type: "audience",
        title: "What the Address Can Be Used For",
        content:
          "Our virtual office address is accepted everywhere a legitimate commercial business address is required. These are the most common uses for clients on our Silver and Gold packages.",
        items: [
          {
            title: "Business Cards & Websites",
            description:
              "List our Reno address as your company headquarters on all marketing collateral, business cards, email signatures, and your website footer.",
            icon: "Briefcase",
          },
          {
            title: "State Filings",
            description:
              "Use the address as your principal office address on Wyoming and Nevada annual reports, foreign registrations, and amendments.",
            icon: "FileText",
          },
          {
            title: "Business Bank Accounts",
            description:
              "Banks accept our real street address when opening LLC bank accounts — unlike PO boxes, which are routinely rejected.",
            icon: "Landmark",
          },
          {
            title: "Payment Processors",
            description:
              "Stripe, PayPal, Square, and merchant processors accept the address during underwriting, clearing the business-address verification step.",
            icon: "DollarSign",
          },
          {
            title: "Vendor & Client Mail",
            description:
              "Receive invoices, contracts, checks, and client correspondence. Mail is scanned or forwarded based on your preference.",
            icon: "Mail",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "vo-faq-1",
        question: "Is the virtual office the same as the registered agent?",
        answer:
          "No. The registered agent is a legal requirement for receiving lawsuits and official state correspondence. The virtual office is an operational business address for commercial mail, business cards, websites, state filings, and bank accounts. They serve different purposes — you generally need both, and our Silver and Gold packages include both.",
        category: "compliance",
      },
      {
        id: "vo-faq-2",
        question: "Can I use this address to open a business bank account?",
        answer:
          "Yes. Our Reno address is a real commercial street address — not a PO box or CMRA — which means banks accept it during account opening. This is one of the most common reasons clients upgrade from Bronze to Silver: banks routinely reject PO boxes on LLC account applications, and a real address eliminates the friction.",
        category: "compliance",
      },
      {
        id: "vo-faq-3",
        question: "How is mail handled when it arrives?",
        answer:
          "Mail is received at our Reno facility, logged, and scanned on arrival. You receive a digital notification with the envelope image. From there, you choose: scan the contents and deliver them to your inbox, forward the physical mail to any address worldwide, hold for pickup, or shred. Forwarding frequency is configurable — daily, weekly, or on-demand.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "Foreign Registration", href: "/foreign-registration" },
    ],
    relatedPackages: ["wyoming-gold"],
    pullQuote: {
      quote:
        "A PO box says 'hobbyist.' A real commercial address says 'real business.' Banks, processors, and state agencies treat them differently.",
      bgText: "ADDRESS",
    },
    suggestions: [
      {
        title: "Compare Silver vs Gold Packages",
        description:
          "Virtual office is the defining feature of Silver. See exactly what you get at each tier and which one matches your needs.",
        href: "/packages",
      },
      {
        title: "Why Banks Reject PO Boxes",
        description:
          "The underwriting logic behind bank address requirements, and how a real commercial address clears the friction.",
        href: "/business-bank-account",
      },
      {
        title: "Mail Forwarding Details",
        description:
          "Frequency options, scanning, international forwarding, and how to configure delivery preferences in your client portal.",
        href: "/mail-forwarding",
      },
    ],
  },

  // ==================== 5. FOREIGN REGISTRATION ====================
  {
    slug: "foreign-registration",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Foreign Registration",
    description:
      "Register your entity to do business in another state. Required when your LLC operates outside its formation state. Available as an add-on starting at $149 plus state fees.",
    sections: [
      {
        id: "what-is",
        type: "text",
        title: "What Is Foreign Registration?",
        content:
          "Foreign registration (or 'qualification to do business') is the process of registering your LLC or corporation in a state where it was NOT formed but where it conducts business. For example, if you form a Wyoming LLC but operate in California, you must foreign register in California. This gives your entity legal authority to transact business in that state while preserving the privacy, tax, and asset protection benefits of your formation state. Without it, you can face fines, back taxes, loss of court access, and personal liability exposure.",
      },
      {
        id: "when-needed",
        type: "text",
        title: "When Is Foreign Registration Needed?",
        content:
          "You generally need foreign registration if your LLC has a physical presence in another state (office, employees, warehouse), regularly conducts business transactions in that state, or solicits business from residents of that state. Passively holding assets — like rental real estate — typically triggers the requirement. Rules vary significantly by state: California is aggressive, Texas is moderate, and some states have safe harbors for minimal activity. We advise on your specific situation before filing.",
      },
      {
        id: "pricing",
        type: "pricing",
        title: "Common Foreign Registration Costs",
        content:
          "Foreign registration costs vary dramatically by state. Our service fee is flat at $149 per filing. State fees and franchise taxes are separate and passed through at cost. Below are the most common destinations for Wyoming and Nevada-based clients.",
        pricingRows: [
          {
            label: "California",
            price: "$70 filing + $800/yr",
            note: "$800 minimum franchise tax is non-negotiable",
            highlight: true,
          },
          {
            label: "Texas",
            price: "$750 filing",
            note: "No annual franchise tax under $2.47M revenue",
          },
          {
            label: "Florida",
            price: "$125 filing + $138.75/yr",
            note: "Annual report required each May 1",
          },
          {
            label: "New York",
            price: "$250 filing + publication",
            note: "NY requires expensive newspaper publication (~$1,500+)",
            highlight: true,
          },
          {
            label: "Arizona",
            price: "$150 filing",
            note: "No annual report or franchise tax",
          },
          {
            label: "Colorado",
            price: "$100 filing + $10/yr",
            note: "Among the cheapest foreign registration states",
          },
        ],
        pricingNote:
          "All state fees above are in addition to our flat $149 service fee. Franchise taxes and publication costs (where required) are passed through at cost. We quote all fees upfront before you commit.",
      },
    ],
    faqs: [
      {
        id: "fr-faq-1",
        question: "Does foreign registration affect my privacy?",
        answer:
          "Foreign registration discloses your entity name in the registering state but uses your formation state's filing details as the basis. With our Wyoming or Nevada nominee structure, your personal information stays off both filings — the formation filing and the foreign registration. Some states require more disclosure than others; we advise on the trade-offs before you commit.",
        category: "compliance",
      },
      {
        id: "fr-faq-2",
        question: "What happens if I don't foreign register when I should?",
        answer:
          "Consequences include back franchise taxes, penalties, and interest; inability to sue in that state's courts (you can be sued, but you cannot initiate a lawsuit); personal liability exposure for owners; and voided contracts in some states. California is particularly aggressive — they retroactively assess the $800 minimum franchise tax for every year you operated without registering.",
        category: "compliance",
      },
      {
        id: "fr-faq-3",
        question: "How long does foreign registration take?",
        answer:
          "Processing times vary by state. Most states complete foreign registration in 2-3 weeks for standard filings. Expedited processing is available in most states for an additional fee (typically $50-$200) and reduces the timeline to 1-3 business days. California, Texas, and Florida all offer expedited service; New York does not reliably offer it.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "California State Hub", href: "/california" },
      { title: "Florida State Hub", href: "/florida" },
    ],
    relatedPackages: ["california-private", "florida-private"],
    pullQuote: {
      quote:
        "Skipping foreign registration is a bet that nobody will sue you in that state — and if they do, you won't be able to defend yourself in their courts.",
      bgText: "REGISTERED",
    },
    suggestions: [
      {
        title: "California Private Package",
        description:
          "Wyoming LLC plus California foreign registration in one package. The cleanest way to operate in California with out-of-state privacy.",
        href: "/packages/california-private",
      },
      {
        title: "Florida Private Package",
        description:
          "Wyoming LLC plus Florida foreign registration. Ideal for Florida-based operators and real estate investors.",
        href: "/packages/florida-private",
      },
      {
        title: "Multi-State Structures Explained",
        description:
          "How holding companies, operating companies, and foreign registrations fit together for multi-jurisdiction businesses.",
        href: "/second-tier-state-filings",
      },
    ],
  },

  // ==================== 6. SECOND-TIER STATE FILINGS ====================
  {
    slug: "second-tier-state-filings",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "2nd-Tier State Filings",
    description:
      "Formation and compliance services for secondary states beyond Wyoming and Nevada. We handle filings in all 50 states when your business structure requires additional state registrations.",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are 2nd-Tier State Filings?",
        content:
          "While Wyoming and Nevada are our specialty states for privacy-focused formation, many business structures require entities in additional states. 2nd-tier state filings cover formation, annual reports, and compliance maintenance for entities in states beyond our core two. Whether you need a holding company in Delaware, a foreign registration in Texas, or an operating entity in any other state, we handle the filings so you can focus on your business — while keeping your Wyoming or Nevada structure as the privacy anchor.",
      },
      {
        id: "when-needed",
        type: "text",
        title: "When Do You Need Multi-State Filings?",
        content:
          "Multi-state structures are common for real estate investors with properties in multiple states, businesses operating across state lines, holding company arrangements where different entities serve different purposes, and asset protection strategies that benefit from jurisdictional diversification. We coordinate filings across all states to ensure your entire structure stays in good standing — and we track every deadline across every jurisdiction from a single client dashboard.",
      },
      {
        id: "audience",
        type: "audience",
        title: "Example Multi-State Structures",
        content:
          "Below are four common multi-state structures we build and maintain. Each has different tax, privacy, and asset protection characteristics. Most of our multi-state clients fall into one of these patterns.",
        items: [
          {
            title: "Real Estate Investor — Property-Per-State",
            description:
              "Wyoming holding LLC owns separate state-level LLCs for each state where property is held. Each property LLC foreign-registers where needed. Isolates liability per property and state.",
            icon: "Building",
          },
          {
            title: "E-Commerce Operator — WY Holding + Delaware C-Corp",
            description:
              "Wyoming LLC holds equity in a Delaware C-Corp operating company. Used by founders who expect venture financing but want privacy on the ownership side.",
            icon: "Package",
          },
          {
            title: "Multi-State Services Business — WY + Foreign Registrations",
            description:
              "Single Wyoming LLC foreign-registers in every state with an office or employee. Simplest structure for consultants, agencies, and service businesses operating regionally.",
            icon: "Briefcase",
          },
          {
            title: "Asset Protection Triangle — WY + NV + Offshore",
            description:
              "Wyoming operating LLC owned by a Nevada holding LLC owned by an offshore trust. Maximum jurisdictional diversification for high-net-worth clients with significant assets.",
            icon: "Shield",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "stf-faq-1",
        question: "Do you handle filings in all 50 states?",
        answer:
          "Yes. While we specialize in Wyoming and Nevada formation, we coordinate filings in all 50 states for clients who need multi-state structures. This includes formation, annual reports, registered agent service, and compliance maintenance. Pricing varies by state — we quote all state fees upfront, and our service fee remains flat per filing type.",
        category: "compliance",
      },
      {
        id: "stf-faq-2",
        question:
          "Does filing in another state affect my Wyoming/Nevada privacy?",
        answer:
          "Your Wyoming or Nevada formation filings remain private regardless of what you file in other states. We use nominee structures on your formation filings and advise on minimizing disclosure in states that require more information. Some states (California, New York) require more disclosure than others; we walk through the trade-offs before you commit to any structure.",
        category: "compliance",
      },
      {
        id: "stf-faq-3",
        question: "How do you track compliance across multiple states?",
        answer:
          "Every entity in your structure is tracked in a single client dashboard with its own compliance calendar. Annual reports, franchise tax deadlines, registered agent renewals, and business license renewals are all tracked per-entity and per-state. You see a unified view of everything that is due in the next 90 days across all jurisdictions.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Foreign Registration", href: "/foreign-registration" },
      { title: "Registered Agent", href: "/registered-agent" },
      { title: "Annual Reports", href: "/annual-reports" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    pullQuote: {
      quote:
        "A multi-state structure without coordinated compliance is a time bomb. One missed annual report in one state can compromise the entire chain.",
      bgText: "MULTISTATE",
    },
    suggestions: [
      {
        title: "Holding Company Structures Explained",
        description:
          "How Wyoming holding LLCs work, when they make sense, and how they integrate with operating entities in other states.",
        href: "/holding-company",
      },
      {
        title: "Real Estate Investor Package",
        description:
          "Pre-built multi-state structures for investors with properties in multiple states. Start with Wyoming, add property LLCs as you grow.",
        href: "/packages/real-estate",
      },
      {
        title: "Asset Protection Strategies",
        description:
          "Jurisdictional diversification patterns for high-net-worth clients — Wyoming, Nevada, and offshore combined.",
        href: "/asset-protection",
      },
    ],
  },

  // ==================== 7. SHARES & CORPORATE RECORDS ====================
  {
    slug: "shares-corporate-records",
    pillar: "compliance",
    pillarLabel: "Compliance",
    title: "Shares & Corporate Records",
    description:
      "Professional management of share certificates, stock ledgers, corporate record books, and ownership documentation. Essential for corporations and multi-member LLCs.",
    sections: [
      {
        id: "what-are",
        type: "text",
        title: "What Are Corporate Records Services?",
        content:
          "Every corporation and many LLCs need proper documentation of ownership — share certificates, stock ledgers, membership interest records, and corporate record books. These documents establish who owns what, track transfers over time, and provide the legal foundation for your entity's governance. Without accurate records, ownership disputes become expensive, transfers become legally uncertain, and tax authorities may reject claimed deductions or basis calculations. We prepare, maintain, and store these records as part of our compliance services.",
      },
      {
        id: "what-we-maintain",
        type: "text",
        title: "What We Maintain",
        content:
          "Our corporate records service covers share certificates and stock ledger maintenance, membership interest documentation for LLCs, corporate record book organization and updates, ownership transfer documentation, and meeting minutes reflecting corporate actions. For Gold package clients, these records are maintained by our offshore records custodian for additional privacy protection and jurisdictional isolation from U.S. discovery processes.",
      },
      {
        id: "llc-vs-corp",
        type: "differentiator",
        title: "LLC Membership Interests vs Corporate Shares",
        content:
          "The distinction between LLC membership interests and corporate shares is one of the most commonly misunderstood areas of entity law. They are fundamentally different instruments governed by different rules. Understanding the difference matters for taxes, transfers, capital raises, and asset protection — get it wrong and you can accidentally compromise your structure.",
        keyPoints: [
          {
            title: "Governing Document",
            description:
              "LLC membership interests are defined by the Operating Agreement. Corporate shares are defined by Bylaws and Articles of Incorporation. The two document frameworks are not interchangeable.",
            icon: "FileText",
          },
          {
            title: "Transfer Restrictions",
            description:
              "LLC interests typically have strong transfer restrictions baked into the operating agreement — a key asset protection feature. Corporate shares transfer freely unless restricted by a separate shareholder agreement.",
            icon: "Lock",
          },
          {
            title: "Certificated vs Uncertificated",
            description:
              "Corporate shares are typically certificated (physical stock certificates). LLC interests are usually uncertificated by default, documented only in the operating agreement and member ledger.",
            icon: "BookOpen",
          },
          {
            title: "Charging Order Protection",
            description:
              "In Wyoming and Nevada, LLC membership interests enjoy charging order protection — creditors cannot seize the interest, only receive distributions. Corporate shares have no equivalent protection.",
            icon: "ShieldCheck",
          },
        ],
      },
    ],
    faqs: [
      {
        id: "scr-faq-1",
        question: "Do I need share certificates for an LLC?",
        answer:
          "LLCs do not issue share certificates — they have membership interests documented in the operating agreement and member ledger. However, proper documentation of ownership percentages, capital contributions, and any transfers is equally important. We handle both LLC membership documentation and corporate share certificates depending on your entity type.",
        category: "compliance",
      },
      {
        id: "scr-faq-2",
        question: "Where are my corporate records stored?",
        answer:
          "For Gold package clients, corporate records are stored by our offshore records custodian outside U.S. jurisdiction for additional privacy and discovery protection. For Silver and Bronze packages, records are maintained securely in our domestic files. Either way, you have immediate access to your records through the client portal at any time.",
        category: "compliance",
      },
      {
        id: "scr-faq-3",
        question: "What happens if I need to transfer ownership?",
        answer:
          "For LLCs, we prepare an assignment of membership interest, update the operating agreement and member ledger, and file any required amendments with the state. For corporations, we prepare the stock transfer documentation, update the stock ledger, and issue new certificates. All transfers are documented contemporaneously and reflected in the minute book.",
        category: "compliance",
      },
    ],
    sidebarLinks: [
      { title: "Corporate Minutes", href: "/corporate-minutes" },
      { title: "Annual Reports", href: "/annual-reports" },
      { title: "Offshore Privacy", href: "/offshore-privacy" },
    ],
    relatedPackages: ["wyoming-gold", "nevada-gold"],
    pullQuote: {
      quote:
        "Ownership is not what you believe. It is what your records prove. Sloppy records lose courtroom fights before they begin.",
      bgText: "OWNERSHIP",
    },
    suggestions: [
      {
        title: "Charging Order Protection Explained",
        description:
          "Why Wyoming and Nevada LLC membership interests are harder to seize than corporate shares — and how it protects your assets.",
        href: "/charging-order",
      },
      {
        title: "Offshore Records Custodian",
        description:
          "How Gold package records are maintained outside U.S. jurisdiction for additional privacy and discovery protection.",
        href: "/offshore-privacy",
      },
      {
        title: "Corporate Minutes Service",
        description:
          "Shares and records work hand-in-hand with minute book maintenance. See how we keep both current together.",
        href: "/corporate-minutes",
      },
    ],
  },
];
