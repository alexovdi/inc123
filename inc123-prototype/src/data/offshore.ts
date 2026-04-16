import type { OffshoreData } from "@/lib/types";

export const offshoreData: OffshoreData = {
  hub: {
    headline:
      "International Formation Services. Nevis · BVI · Panama · Hong Kong.",
    subheadline:
      "For clients who need structures beyond domestic Wyoming and Nevada entities.",
    description:
      "International LLCs, corporations, foundations, and asset protection trusts — formed and managed through our network of registered agents and corporate service providers in each jurisdiction. 25 years of experience. Offshore services since 2000.",
    hubFaqs: [
      {
        id: "off-hub-faq-legality",
        question: "Is offshore entity formation legal?",
        answer:
          "Yes. Forming entities in international jurisdictions is entirely legal and widely practiced by multinational corporations, investment funds, and high-net-worth individuals. What is NOT legal is using offshore structures to evade taxes, launder money, or hide assets from legitimate legal obligations. U.S. persons who own offshore entities must comply with IRS reporting requirements (FBAR, Form 5471/8865, GILTI, FATCA). We help you form the entity; your CPA ensures tax compliance.",
      },
      {
        id: "off-hub-faq-cost",
        question: "How much do offshore structures cost?",
        answer:
          "Formation costs range from approximately $2,060 (Nevis LLC) to over $3,200 (BVI IBC). Annual renewals run $1,535–$1,950 per year depending on jurisdiction. International packages include government registration fees, registered agent and office service, offshore secretary, nominee director or manager, and KYC administration. Bank account opening assistance is available for an additional $500. All pricing is discussed during your consultation.",
      },
      {
        id: "off-hub-faq-necessity",
        question: "Do I need an offshore structure, or is domestic sufficient?",
        answer:
          "Most clients don't need an offshore entity. A Wyoming Gold package with year-round nominees and offshore records custodian provides excellent privacy and asset protection for the vast majority of situations. Offshore entities are appropriate when you need jurisdictional separation (assets outside U.S. court reach), international operational presence, or specific asset protection features such as the Nevis $100,000 plaintiff bond requirement. We'll help you determine whether a domestic structure is sufficient during your consultation.",
      },
      {
        id: "off-hub-faq-banking",
        question: "Can I open a bank account with an offshore entity?",
        answer:
          "Yes, but the process is more involved than domestic banking. International banks require extensive KYC (Know Your Customer) documentation, and processing can take 4–8 weeks. We provide bank account opening assistance ($500) and guide you through the documentation requirements. Note that U.S. persons must report foreign accounts exceeding $10,000 in aggregate value via FBAR.",
      },
      {
        id: "off-hub-faq-timeline",
        question: "What is the formation timeline for offshore entities?",
        answer:
          "Typical formation takes 2–4 weeks depending on jurisdiction and the complexity of KYC documentation. Nevis and BVI are generally faster (2–3 weeks); Panama and Hong Kong may take 3–4 weeks due to additional compliance requirements. Rush processing may be available in some jurisdictions.",
      },
      {
        id: "off-hub-faq-domestic-interaction",
        question: "How do offshore entities interact with my domestic LLC?",
        answer:
          "The most common structure is a domestic LLC (Wyoming or Nevada) with an offshore component providing additional privacy or asset protection. For example, a Nevis LLC can hold assets with strong jurisdictional protections while your Wyoming LLC handles domestic operations. Your corporate records can be maintained by our offshore custodian (included in Gold packages). More complex structures involving trusts or multi-entity arrangements should be designed with input from an international tax attorney.",
      },
      {
        id: "off-hub-faq-inclusions",
        question: "What is included in the international formation package?",
        answer:
          "Standard international packages include Certificate of Incorporation or Formation, government registration fees, registered agent and registered office in the jurisdiction, offshore company secretary, offshore nominee director or manager, IRS pass-through election assistance (for U.S. persons), KYC administration ($150), and the option for offshore bank account opening ($500 additional). Specific inclusions vary by jurisdiction — see each jurisdiction page for details.",
      },
      {
        id: "off-hub-faq-gilti",
        question: "Has GILTI changed the value of offshore structures?",
        answer:
          "Significantly. The Tax Cuts and Jobs Act of 2017 introduced GILTI (Global Intangible Low-Taxed Income), which taxes U.S. shareholders on certain income of controlled foreign corporations even when that income is not distributed. This has reduced the tax deferral benefits that previously made offshore structures attractive for many U.S. persons. Offshore structures still provide valid benefits for asset protection, jurisdictional separation, and international operations — but the tax advantages have narrowed. Consult your CPA about GILTI's impact on your specific situation.",
      },
    ],
  },
  jurisdictions: [
    {
      slug: "nevis",
      name: "Nevis",
      region: "St. Kitts and Nevis",
      entityType: "LLC & Corporation",
      primary: true,
      startingPrice: "$2,060",
      annualRenewal: "$1,535/yr",
      timeline: "2–3 weeks",
      tagline:
        "$100,000 plaintiff bond. 1-year fraudulent-transfer SOL. Foreign judgments not recognized.",
      heroTagline:
        "The strongest offshore asset protection in the world. $100,000 plaintiff bond. 1-year fraudulent-transfer SOL. No recognition of foreign judgments.",
      stats: [
        { label: "Plaintiff Bond", value: "$100,000" },
        { label: "Fraudulent Transfer SOL", value: "1 Year" },
        { label: "Foreign Judgments", value: "Not Recognized" },
      ],
      description:
        "The strongest offshore asset protection jurisdiction. Nevis imposes a 1-year statute of limitations on fraudulent transfer claims, does not recognize or domesticate foreign judgments, and requires a creditor to post a $100,000 bond before even filing suit. Combined with a Wyoming holding LLC, this creates a structure that is prohibitively expensive for most creditors to challenge.",
      advantages: [
        {
          icon: "Gavel",
          title: "$100,000 Plaintiff Bond Requirement",
          description:
            "Before filing suit against a Nevis LLC or corporation, the plaintiff must post a $100,000 bond with the Nevis court. This bond is forfeited if the plaintiff loses. This single provision eliminates the vast majority of speculative and frivolous lawsuits — a plaintiff must be confident enough to risk $100,000 before proceedings begin.",
        },
        {
          icon: "Clock",
          title: "1-Year Statute of Limitations",
          description:
            "In the United States, fraudulent transfer claims can be filed 4–6 years after the transfer. In Nevis, the statute of limitations is 1 year. Once that window closes, the transfer is essentially beyond challenge. For asset protection planning, this dramatically reduces the window of vulnerability.",
        },
        {
          icon: "Shield",
          title: "No Recognition of Foreign Judgments",
          description:
            "A U.S. court judgment cannot be enforced directly in Nevis. A plaintiff who wins in the United States must re-litigate the entire case from scratch in Nevis courts, under Nevis law, after posting the $100,000 bond. The cost and complexity deter all but the most determined litigants.",
        },
        {
          icon: "Lock",
          title: "Charging Order as Sole Remedy",
          description:
            "Similar to Wyoming's domestic protection, Nevis limits a creditor's remedy against an LLC member's interest to a charging order. The creditor cannot seize LLC assets, force liquidation, or take over management. Applies to both single-member and multi-member Nevis LLCs.",
        },
        {
          icon: "Scale",
          title: "Beyond Reasonable Doubt Standard",
          description:
            "Fraudulent transfer claims against a Nevis entity must be proven beyond a reasonable doubt — a criminal standard applied to civil claims. Combined with the bond and SOL, this is the highest evidentiary bar in any major asset protection jurisdiction.",
        },
        {
          icon: "FileText",
          title: "Purpose-Built LLC Legislation",
          description:
            "The Nevis Limited Liability Company Ordinance of 1995 was drafted specifically to create a favorable legal framework for international LLC formation and asset protection. Unlike jurisdictions that adapted existing corporate law, Nevis built its LLC statute from the ground up with asset protection as a primary design objective.",
        },
      ],
      entityTypes: [
        {
          id: "llc",
          name: "Nevis LLC",
          framework: "Nevis LLC Ordinance of 1995",
          features: [
            "Flexible management structure — no board required",
            "Charging order as sole creditor remedy",
            "No minimum capital requirements",
            "Member names not on public record",
            "Pass-through taxation available for U.S. persons (Form 8832)",
          ],
          formationCost: "$2,060",
          annualRenewal: "$1,535/yr",
          bestFor: "Asset protection, holding structures, privacy",
          recommended: true,
        },
        {
          id: "corp",
          name: "Nevis Corporation",
          framework: "Nevis Business Corporation Ordinance",
          features: [
            "Board of directors required (nominee directors available)",
            "Bearer shares prohibited (converted to registered shares)",
            "No minimum capital requirements",
            "Shareholder names not on public record",
            "Standard corporate formality",
          ],
          formationCost: "$2,290",
          annualRenewal: "$1,535/yr",
          bestFor:
            "International trade, multi-shareholder structures, businesses requiring corporate formality",
        },
      ],
      entityRecommendation:
        "For most asset protection and privacy purposes, a Nevis LLC is the better choice. It provides the same $100,000 bond protection and fraudulent transfer limitations as a corporation, with simpler management and pass-through taxation for U.S. persons.",
      kycRequirements: [
        "Certified copy of passport (notarized)",
        "Copy of driver's license or government-issued ID",
        "Proof of residential address (utility bill or bank statement, dated within 3 months)",
        "Professional reference letter (from attorney, CPA, or banker)",
        "Brief description of intended business activity",
      ],
      formationSteps: [
        {
          title: "Consultation & Engagement",
          description:
            "We discuss your goals, recommend LLC or Corporation, and confirm Nevis is the appropriate jurisdiction. You provide KYC documentation.",
        },
        {
          title: "KYC Review & Entity Preparation",
          description:
            "Our Nevis registered agent reviews your KYC documentation. Entity formation documents are prepared — Articles of Organization (LLC) or Articles of Incorporation (Corp).",
        },
        {
          title: "Government Filing",
          description:
            "Formation documents are filed with the Nevis Registrar of Companies. Government registration fees are included in your formation package.",
        },
        {
          title: "Nominee Appointment & Records",
          description:
            "Offshore nominee director or manager is appointed. Corporate records (operating agreement or bylaws, resolutions, certificates) are prepared and maintained by our offshore custodian.",
        },
        {
          title: "Banking (Optional)",
          description:
            "Offshore bank account opening assistance is available for an additional $500. The nominee director facilitates account opening. Bank processing takes an additional 4–8 weeks after formation.",
        },
      ],
      pricing: {
        inclusions: [
          "Government registration fees",
          "Registered agent and registered office in Nevis",
          "Offshore company secretary",
          "Offshore nominee director or manager",
          "Certificate of Incorporation or Formation",
          "Operating agreement (LLC) or bylaws (Corp)",
          "Membership certificates (LLC) or stock certificates (Corp)",
          "IRS pass-through election assistance (Form 8832, U.S. persons)",
          "KYC administration and compliance review",
        ],
        additionalCosts: [
          {
            label: "Offshore bank account opening assistance (optional)",
            price: "$500",
          },
          {
            label: "KYC administration fee (per beneficial owner)",
            // PENDING DAVID: Per beneficial owner or per entity? OFF-06.
            price: "$150",
          },
          {
            label:
              "Annual IRS reporting (Form 5471/8865) — handled by your CPA",
            price: "Not included",
          },
        ],
        renewalInclusions: [
          "Government annual fees",
          "Registered agent and registered office renewal",
          "Nominee director or manager maintenance",
          "Corporate records maintenance",
          "Good standing certificate (upon request)",
        ],
      },
      combinedStructures: [
        {
          title: "Wyoming LLC + Nevis LLC",
          description:
            "Most common combination for asset protection. Your Wyoming LLC handles domestic operations with nominee services. The Nevis LLC holds high-value assets requiring the strongest possible protection. A U.S. creditor must navigate both Wyoming's charging order protection AND Nevis's $100,000 bond requirement.",
          link: { label: "Wyoming Gold Package", href: "/wyoming-gold" },
        },
        {
          title: "Domestic Holding LLC + Nevis Asset Entity",
          description:
            "The domestic holding LLC (WY or NV) holds operating interests. The Nevis LLC holds investment assets, intellectual property, or other high-value assets that benefit from jurisdictional separation. Creditors targeting the domestic entity cannot reach assets held in the Nevis entity.",
          link: {
            label: "Investment Holding LLC",
            href: "/investment-holding-llc",
          },
        },
        {
          title: "Nevis LLC + Offshore Trust",
          description:
            // PENDING DAVID: Bahamas Dynasty Trust — confirm active offering (OFF-17).
            "For maximum protection and estate planning. A Bahamas Dynasty Trust (no rule against perpetuities) holds the membership interest of the Nevis LLC. The trust provides estate planning benefits; the Nevis LLC provides asset protection. The most sophisticated structure available.",
          link: { label: "Discuss trust structures", href: "/contact" },
        },
      ],
      sections: [
        {
          id: "how-nevis-works",
          type: "text",
          title: "How a Nevis LLC Protects Your Assets",
          content:
            "A Nevis LLC operates under the Nevis LLC Ordinance, enacted specifically to attract asset protection structures. The LLC is managed by a registered agent in Nevis, but its assets — bank accounts, investments, real property — can be held anywhere in the world. The key protection mechanism is the combination of the bond requirement, the shortened statute of limitations, and the impossibility of enforcing foreign judgments. Even if a creditor obtains a U.S. judgment against you personally, that judgment is meaningless in Nevis. They must start a new case, under Nevis law, with Nevis counsel, after posting a $100,000 bond.",
        },
        {
          id: "nevis-wyoming",
          type: "text",
          title: "Nevis + Wyoming: The Dual-Layer Strategy",
          content:
            "The most effective structure pairs a Nevis LLC with a Wyoming holding LLC. Your Wyoming LLC owns the Nevis LLC (or vice versa, depending on the strategy). Wyoming provides domestic charging order protection and privacy through nominee services, while Nevis provides the international barrier. A creditor must first penetrate Wyoming's charging order protections, then pursue a separate action in Nevis — a two-front legal battle that most plaintiffs' attorneys will advise against pursuing.",
        },
        {
          id: "who-benefits-nevis",
          type: "audience",
          title: "Who Benefits from a Nevis LLC?",
          content:
            "Nevis LLCs are appropriate for individuals with significant assets who face elevated litigation risk:",
          items: [
            {
              title: "High-Net-Worth Individuals",
              description:
                "Individuals with $1M+ in liquid assets who want proactive protection before any claim arises.",
            },
            {
              title: "Medical Professionals & Executives",
              description:
                "Doctors, surgeons, and corporate officers facing above-average malpractice and liability exposure.",
            },
            {
              title: "Real Estate Investors",
              description:
                "Portfolio owners who want to insulate rental income and equity from tenant lawsuits and slip-and-fall claims.",
            },
          ],
        },
      ],
      faqs: [
        {
          id: "nevis-faq-bond",
          question: "What is the $100,000 plaintiff bond requirement?",
          answer:
            "Under Nevis law, any person or entity wishing to file a lawsuit against a Nevis LLC or corporation must first post a $100,000 bond with the Nevis court. This bond is forfeited if the plaintiff loses the case. The requirement applies to all civil suits, including those originating from foreign judgments. The effect is to deter speculative litigation — a plaintiff must have a high-confidence case to risk $100,000 before proceedings begin.",
          category: "offshore",
        },
        {
          id: "nevis-faq-repatriate",
          question:
            "Can a U.S. court force me to repatriate assets held in a Nevis entity?",
          answer:
            "U.S. courts can issue orders directing a U.S. person to repatriate assets. However, the enforceability of such orders against a Nevis entity depends on whether the entity is structured with independent management (nominee directors) and whether the U.S. person retains sufficient control to comply. Proper structuring with nominee management creates a defensible position. This is a complex legal area — we recommend discussing specific scenarios with an asset protection attorney.",
          category: "offshore",
        },
        {
          id: "nevis-faq-comparison",
          question:
            "How does Nevis compare to other offshore jurisdictions for asset protection?",
          answer:
            "Nevis offers the strongest combination of asset protection features for U.S.-based clients: the plaintiff bond ($100K, unique to Nevis), the short fraudulent transfer statute (1 year vs. 2+ years in Cook Islands, BVI, etc.), and sole-remedy charging order protection. The Cook Islands have a longer track record and their own strong protections, but Nevis's plaintiff bond requirement is unmatched. BVI is better suited for international trade and holding companies. Panama foundations serve estate planning. Hong Kong serves Asia-Pacific operations.",
          category: "offshore",
        },
        {
          id: "nevis-faq-remote",
          question: "Do I need to visit Nevis to form an entity there?",
          answer:
            "No. The entire formation process is handled remotely. KYC documentation is submitted electronically (with certified or notarized copies). Our Nevis registered agent handles all filings with the Registrar of Companies. You do not need to travel to Nevis at any point.",
          category: "offshore",
        },
        {
          id: "nevis-faq-banking",
          question: "Can I open a Nevis bank account?",
          answer:
            "Yes. We provide offshore bank account opening assistance ($500) through banking relationships in the Caribbean region. The nominee director facilitates the account opening, and account access is released to authorized signatories upon approval. Processing typically takes 4–8 weeks due to enhanced compliance requirements for international accounts. U.S. persons must report foreign accounts exceeding $10,000 aggregate value (FBAR requirement).",
          category: "offshore",
        },
        {
          id: "nevis-faq-ordinance",
          question: "What is the Nevis LLC Ordinance of 1995?",
          answer:
            "The Nevis Limited Liability Company Ordinance of 1995 is the legislation that governs LLC formation in the Federation of St. Kitts and Nevis. It was specifically designed to create a favorable legal framework for international LLC formation and asset protection. Key provisions include charging order as sole creditor remedy, the $100,000 plaintiff bond requirement, and the 1-year statute of limitations on fraudulent transfer claims.",
          category: "offshore",
        },
        {
          id: "nevis-faq-maintenance",
          question: "How do I maintain a Nevis entity on an ongoing basis?",
          answer:
            "Annual renewal ($1,535/yr) covers government fees, registered agent and office maintenance, nominee director continuation, and corporate records maintenance. You do not need to file annual reports with the Nevis government in the same way as U.S. entities. However, U.S. persons must file annual IRS informational returns (Form 5471 or 8865) — your CPA handles these.",
          category: "offshore",
        },
        {
          id: "nevis-faq-tax",
          question: "Is a Nevis entity subject to Nevis taxes?",
          answer:
            "No. Nevis does not impose income tax, capital gains tax, or withholding tax on entities formed under the LLC Ordinance or IBC provisions that do not conduct business within St. Kitts and Nevis. However, U.S. persons who own Nevis entities are subject to U.S. federal taxation on worldwide income, including GILTI provisions for controlled foreign corporations. Nevis tax neutrality does not eliminate U.S. tax obligations.",
          category: "offshore",
        },
      ],
      relatedPackages: ["wyoming-gold"],
    },
    {
      slug: "belize",
      name: "Belize",
      region: "Belize",
      entityType: "International Business Company",
      // PENDING DAVID: Is Belize still actively offered? Spec (enhanced) lists only Nevis/BVI/Panama/HK.
      // Keeping in prototype until David confirms; OFF-15 in pricing tracker.
      primary: false,
      startingPrice: "PENDING DAVID",
      annualRenewal: "PENDING DAVID",
      timeline: "2–3 weeks",
      tagline: "Zero foreign-source taxation and criminal privacy statutes.",
      description:
        "Belize International Business Companies (IBCs) offer zero local taxation on foreign-sourced income, robust privacy statutes that criminalize unauthorized disclosure of ownership information, and compatibility with asset protection trusts. The IBC Act was modernized in 2000 and provides a cost-effective offshore structure for international business operations.",
      advantages: [
        {
          icon: "Banknote",
          title: "Zero Local Taxation",
          description:
            "No income tax, capital gains tax, or withholding tax on foreign-sourced income. No stamp duty on share transfers.",
        },
        {
          icon: "Lock",
          title: "Criminal Privacy Statutes",
          description:
            "Unauthorized disclosure of IBC ownership information is a criminal offense under Belizean law, punishable by fine and imprisonment.",
        },
        {
          icon: "FileCheck",
          title: "Trust Compatibility",
          description:
            "Belize IBCs integrate seamlessly with Belize asset protection trusts, enabling layered offshore structures.",
        },
      ],
      sections: [
        {
          id: "how-belize-works",
          type: "text",
          title: "How a Belize IBC Works",
          content:
            "A Belize IBC is incorporated under the IBC Act and is prohibited from conducting business within Belize itself — it exists solely for international operations. The company is not required to file annual returns or financial statements with the Belizean authorities. Ownership records are maintained by the registered agent and are not publicly accessible. Directors and shareholders can be individuals or corporate entities from any country. Bearer shares were historically available but are now held by a custodian under the 2019 amendments, maintaining privacy while complying with international standards.",
        },
        {
          id: "belize-use-cases",
          type: "audience",
          title: "Common Uses for a Belize IBC",
          content:
            "Belize IBCs serve several legitimate international business purposes:",
          items: [
            {
              title: "International Trading",
              description:
                "Import/export businesses that operate across borders and need a tax-neutral holding entity.",
            },
            {
              title: "Intellectual Property Holding",
              description:
                "Hold patents, trademarks, and copyrights in a jurisdiction with no IP-related taxation.",
            },
            {
              title: "Investment Holding",
              description:
                "Hold international investment portfolios, real estate outside Belize, and financial instruments.",
            },
          ],
        },
      ],
      faqs: [
        {
          id: "belize-faq-1",
          question: "Does Belize have tax treaties with the U.S.?",
          answer:
            "No. Belize does not have a tax treaty with the United States. This means there is no automatic exchange of tax information, though Belize does comply with FATCA reporting requirements for U.S. account holders.",
          category: "offshore",
        },
        {
          id: "belize-faq-2",
          question: "What are the annual costs of maintaining a Belize IBC?",
          answer:
            "Annual maintenance includes a government fee (approximately $100-150), registered agent fees, and any additional compliance services. Total annual costs are typically $800-1,500 depending on the complexity of the structure.",
          category: "offshore",
        },
      ],
      relatedPackages: ["wyoming-gold"],
    },
    {
      slug: "cook-islands",
      name: "Cook Islands",
      region: "Cook Islands",
      entityType: "International Trust",
      // PENDING DAVID: Cook Islands Trust not in enhanced offshore hub spec.
      // Keeping in prototype until David confirms; pricing in tracker OFF-09/10.
      primary: false,
      startingPrice: "PENDING DAVID",
      annualRenewal: "PENDING DAVID",
      timeline: "3–5 weeks",
      tagline:
        "Gold-standard asset protection trust — shortest SOL + foreign judgment bar.",
      description:
        "The Cook Islands International Trust is widely regarded as the gold standard for asset protection trusts. The International Trusts Act of 1984 (amended multiple times) was specifically designed to protect trust assets from foreign creditors. The Cook Islands does not recognize foreign judgments against trust assets, imposes a shortened statute of limitations on fraudulent transfer claims, and places the burden of proof on the creditor — beyond a reasonable doubt.",
      advantages: [
        {
          icon: "Trophy",
          title: "Gold Standard for Asset Protection",
          description:
            "Recognized globally as the strongest jurisdiction for asset protection trusts, with decades of case law supporting settlor protection.",
        },
        {
          icon: "Clock",
          title: "2-Year Statute of Limitations",
          description:
            "Creditors must bring fraudulent transfer claims within 2 years of the transfer — or 1 year from when the cause of action arose, whichever is shorter.",
        },
        {
          icon: "Scale",
          title: "Beyond Reasonable Doubt Standard",
          description:
            "Like Nevis, the Cook Islands requires proof beyond a reasonable doubt for fraudulent transfer claims — a near-impossible standard in civil litigation.",
        },
        {
          icon: "ShieldCheck",
          title: "Duress Protection",
          description:
            "A trustee is prohibited from complying with foreign court orders to distribute trust assets — the court order itself triggers a protective mechanism.",
        },
      ],
      sections: [
        {
          id: "how-cook-islands-works",
          type: "text",
          title: "How a Cook Islands Trust Protects Assets",
          content:
            "A Cook Islands International Trust is established under the International Trusts Act with at least one trustee resident in the Cook Islands. The settlor (you) transfers assets into the trust, which holds them for the benefit of named beneficiaries (which can include you). The critical protection: Cook Islands courts will not enforce any foreign court order directing the trustee to return assets. Even if a U.S. court holds you in contempt for not repatriating assets, the Cook Islands trustee is legally prohibited from complying with that order. This creates the same legal standoff as Nevis, but with even more established case law supporting the structure.",
        },
        {
          id: "cook-vs-domestic",
          type: "comparison",
          title: "Cook Islands Trust vs. Domestic Asset Protection Trusts",
          content:
            "While several U.S. states (Wyoming, Nevada, South Dakota) offer domestic asset protection trusts (DAPTs), they have a fundamental weakness: they are subject to U.S. federal court jurisdiction. A federal bankruptcy court can void transfers to a DAPT under the Uniform Voidable Transactions Act. Cook Islands trusts sit outside U.S. jurisdiction entirely, making them impervious to federal court orders.",
        },
        {
          id: "who-needs-cook-islands",
          type: "audience",
          title: "Who Needs a Cook Islands Trust?",
          content:
            "Cook Islands trusts are appropriate for individuals with substantial assets and genuine asset protection concerns:",
          items: [
            {
              title: "Physicians & Surgeons",
              description:
                "Medical malpractice exposure often exceeds insurance limits. A Cook Islands trust protects assets beyond policy coverage.",
            },
            {
              title: "Business Owners in Litigious Industries",
              description:
                "Construction, real estate development, and manufacturing owners facing regular contract and liability disputes.",
            },
            {
              title: "Individuals Facing Potential Future Claims",
              description:
                "Pre-lawsuit planning is essential — transfers made after a claim arises are far more vulnerable to challenge.",
            },
          ],
        },
      ],
      faqs: [
        {
          id: "cook-faq-1",
          question: "How much does a Cook Islands Trust cost to establish?",
          answer:
            "Initial setup costs typically range from $15,000-$25,000, including legal fees, trustee fees, and government registration. Annual maintenance runs $2,500-$5,000. The cost is justified by the level of protection provided — this is not a budget strategy.",
          category: "offshore",
        },
        {
          id: "cook-faq-2",
          question: "Can I be my own trustee of a Cook Islands Trust?",
          answer:
            "No. At least one trustee must be a Cook Islands resident trust company. You can serve as a co-trustee or protector, giving you influence over trust decisions while maintaining the jurisdictional protection.",
          category: "offshore",
        },
        {
          id: "cook-faq-3",
          question: "What happens if a U.S. court holds me in contempt?",
          answer:
            "This is the key question. If a U.S. court orders you to repatriate trust assets and you cannot comply (because the Cook Islands trustee refuses), the court may hold you in contempt. However, courts have generally found that they cannot indefinitely jail someone for failing to do something that is legally impossible. The practical result is usually a negotiated settlement.",
          category: "offshore",
        },
      ],
      relatedPackages: ["wyoming-gold"],
    },
    {
      slug: "panama",
      name: "Panama",
      region: "Republic of Panama",
      entityType: "Corporation / Private Interest Foundation",
      primary: true,
      // PENDING DAVID: Panama formation + renewal pricing. Spec flags as TBD. See OFF-11/12.
      startingPrice: "PENDING DAVID",
      annualRenewal: "PENDING DAVID",
      timeline: "3–4 weeks",
      tagline:
        "Territorial tax system, no foreign-source income tax, strong banking tradition.",
      description:
        "Panama offers a well-established corporate framework with no taxation on foreign-sourced income, historically strong bank secrecy laws, and a legal system based on the civil law tradition. Panama corporations are widely used for international business operations, real estate holding, and as components of multi-jurisdictional asset protection structures.",
      advantages: [
        {
          icon: "Globe",
          title: "No Foreign Income Tax",
          description:
            "Panama operates a territorial tax system — income earned outside Panama is completely tax-free, with no withholding requirements.",
        },
        {
          icon: "Building2",
          title: "Strong Banking Sector",
          description:
            "Panama's banking sector is one of the largest in Latin America, with over 90 banks and a long tradition of international banking services.",
        },
        {
          icon: "FileKey",
          title: "Bearer Share Framework",
          description:
            "While bearer shares must now be held by an authorized custodian, the framework still provides an additional layer of ownership privacy.",
        },
      ],
      sections: [
        {
          id: "how-panama-works",
          type: "text",
          title: "How Panama Corporations Work",
          content:
            "A Panama corporation (Sociedad Anonima or S.A.) is formed under Law 32 of 1927, one of the oldest and most tested corporate statutes in Latin America. The corporation requires a minimum of three directors (who can be of any nationality and reside anywhere) and a registered agent in Panama. There are no minimum capital requirements. The corporation is not required to file tax returns if all income is foreign-sourced. Annual franchise tax is a flat $300. Directors can be nominee directors, providing an additional privacy layer. Panama does not have a public registry of beneficial owners — this information is maintained by the registered agent under strict confidentiality requirements.",
        },
        {
          id: "panama-asset-protection",
          type: "text",
          title: "Panama for Asset Protection",
          content:
            "Panama's asset protection capabilities stem from its territorial tax system, bank secrecy traditions, and the Foundation (Fundacion de Interes Privado) structure enacted in 1995. A Panama Private Interest Foundation functions similarly to a trust but with the legal characteristics of a corporation. It can hold assets, open bank accounts, own real estate, and make distributions to beneficiaries — all without public disclosure of the beneficiary identities. Combined with a Wyoming LLC as the U.S. operating entity, a Panama Foundation provides international asset segregation.",
        },
        {
          id: "panama-considerations",
          type: "audience",
          title: "Key Considerations for Panama Structures",
          content:
            "Panama structures are most appropriate for specific use cases:",
          items: [
            {
              title: "International Business Operations",
              description:
                "Companies doing business in Latin America benefit from Panama's geographic location, USD-based economy, and banking infrastructure.",
            },
            {
              title: "Real Estate Investment",
              description:
                "Holding international real estate (outside the U.S.) through a Panama corporation simplifies transfer and succession planning.",
            },
            {
              title: "Multi-Jurisdictional Structures",
              description:
                "Panama works well as one layer in a multi-jurisdiction structure alongside Nevis, Cook Islands, or BVI entities.",
            },
          ],
        },
      ],
      faqs: [
        {
          id: "panama-faq-1",
          question:
            "Is Panama still considered a viable offshore jurisdiction?",
          answer:
            "Yes, despite the 'Panama Papers' media coverage, Panama remains one of the most widely used offshore jurisdictions. The country has implemented CRS (Common Reporting Standard) reforms and enhanced due diligence requirements, but its core advantages — territorial taxation, no public beneficial ownership registry, and a mature banking sector — remain intact.",
          category: "offshore",
        },
        {
          id: "panama-faq-2",
          question: "How does Panama's bank secrecy compare to Switzerland?",
          answer:
            "Panama's bank secrecy is codified in law (Banking Law Decree No. 238 of 1970) and violations are criminal offenses. While Panama has adopted some international transparency standards (FATCA compliance, CRS), its practical level of banking privacy remains among the strongest globally — arguably stronger than Switzerland post-2018.",
          category: "offshore",
        },
      ],
      relatedPackages: ["wyoming-gold"],
    },
    {
      slug: "british-virgin-islands",
      name: "British Virgin Islands",
      region: "BVI",
      entityType: "Business Company (IBC)",
      primary: true,
      // PENDING DAVID: BVI formation + renewal pricing. Spec references $3,200 / $1,950 as indicative only. OFF-07/08.
      startingPrice: "$3,200",
      annualRenewal: "$1,950/yr",
      timeline: "2–3 weeks",
      tagline:
        "World's most-used offshore jurisdiction. Zero taxation, minimal reporting, global acceptance.",
      description:
        "The British Virgin Islands is the most popular offshore jurisdiction in the world, with over 400,000 active companies. BVI Business Companies (BCs) offer zero taxation, minimal reporting requirements, low formation and maintenance costs, and extraordinary flexibility in corporate structure. The BVI is the pragmatic choice for international business — proven, well-understood, and cost-effective.",
      advantages: [
        {
          icon: "TrendingUp",
          title: "Most Popular Offshore Jurisdiction",
          description:
            "Over 400,000 active companies and decades of established case law make BVI the most widely accepted and understood offshore structure globally.",
        },
        {
          icon: "Banknote",
          title: "Zero Taxation",
          description:
            "No income tax, capital gains tax, wealth tax, or withholding tax. No VAT. Annual government fee is a flat $450 for standard companies.",
        },
        {
          icon: "Zap",
          title: "Fast & Flexible Formation",
          description:
            "Formation can be completed in 24-48 hours. Single director/shareholder permitted. No minimum capital. No residency requirements.",
        },
        {
          icon: "Users",
          title: "Global Acceptance",
          description:
            "BVI companies are widely accepted by international banks, investment funds, and counterparties due to the jurisdiction's long track record.",
        },
      ],
      sections: [
        {
          id: "how-bvi-works",
          type: "text",
          title: "How BVI Companies Work",
          content:
            "A BVI Business Company (BC) is formed under the BVI Business Companies Act, 2004. The structure is remarkably flexible: a single person can serve as sole director and sole shareholder. There are no requirements for local directors, company secretary, or annual general meetings. The company is not required to file financial statements or tax returns with the BVI government. A register of directors is filed with the Registry of Corporate Affairs but is not publicly searchable. The register of members (shareholders) is maintained by the registered agent and is confidential. Annual costs are among the lowest of any offshore jurisdiction.",
        },
        {
          id: "bvi-use-cases",
          type: "audience",
          title: "Common Uses for BVI Companies",
          content:
            "BVI companies serve a wide range of international business purposes:",
          items: [
            {
              title: "International Holding Companies",
              description:
                "Hold shares in operating companies across multiple jurisdictions without triggering tax at the holding level.",
            },
            {
              title: "Investment Vehicles",
              description:
                "BVI is the domicile of choice for hedge funds, private equity vehicles, and SPVs used in structured finance.",
            },
            {
              title: "Trading Companies",
              description:
                "International commodity trading, consulting, and service companies use BVI entities for tax-neutral operations.",
            },
          ],
        },
        {
          id: "bvi-vs-others",
          type: "comparison",
          title: "BVI vs. Other Offshore Jurisdictions",
          content:
            "BVI's primary advantage over Nevis and Cook Islands is cost and simplicity. While BVI does not offer the same level of aggressive asset protection as Nevis (no bond requirement, no shortened statute of limitations), it provides excellent general-purpose offshore functionality at a fraction of the cost. For pure asset protection, Nevis or Cook Islands is stronger. For general international business, BVI is the pragmatic choice. Many multi-jurisdictional structures use both — a BVI holding company owned by a Nevis LLC, for example.",
        },
      ],
      faqs: [
        {
          id: "bvi-faq-1",
          question: "Are BVI companies still private after recent reforms?",
          answer:
            "Yes. While BVI has implemented a Register of Beneficial Owners (as required by UK/EU standards), this register is not publicly accessible. It is maintained by the registered agent and is only available to BVI competent authorities upon legitimate request. Day-to-day privacy for the company owner remains intact.",
          category: "offshore",
        },
        {
          id: "bvi-faq-2",
          question: "How quickly can a BVI company be formed?",
          answer:
            "Standard formation takes 3-5 business days. Express formation (24-48 hours) is available for an additional fee. Pre-formed shelf companies with established incorporation dates are also available for immediate use.",
          category: "offshore",
        },
        {
          id: "bvi-faq-3",
          question: "Can a BVI company open a U.S. bank account?",
          answer:
            "Yes, though it requires additional documentation including a certificate of good standing, articles of incorporation, and beneficial ownership declaration. We assist with the banking introduction process as part of our offshore formation services.",
          category: "offshore",
        },
      ],
      relatedPackages: ["wyoming-gold"],
    },
    {
      slug: "hong-kong",
      name: "Hong Kong",
      region: "Hong Kong SAR",
      entityType: "Limited Company",
      primary: true,
      // PENDING DAVID: Hong Kong formation + renewal pricing. New jurisdiction per spec. OFF-13/14.
      startingPrice: "PENDING DAVID",
      annualRenewal: "PENDING DAVID",
      timeline: "3–4 weeks",
      tagline:
        "China market access, favorable tax (8.25% / 16.5%), globally recognized corporate structure.",
      description:
        "Hong Kong Limited Company formation provides access to mainland China markets, favorable tax treatment on profits (8.25% on the first HKD 2 million and 16.5% thereafter), a globally recognized corporate structure, and one of the world's strongest international banking infrastructures. Hong Kong is widely used for international trade, intellectual property holding, and as a gateway to Asian markets.",
      advantages: [
        {
          icon: "Globe",
          title: "China & Asia Market Access",
          description:
            "Hong Kong is the primary gateway for international businesses operating in or trading with mainland China and the broader Asia-Pacific region.",
        },
        {
          icon: "Banknote",
          title: "Favorable Two-Tier Tax Rate",
          description:
            "Profits tax is 8.25% on the first HKD 2 million of assessable profits and 16.5% thereafter. No capital gains tax, no withholding tax on dividends.",
        },
        {
          icon: "Building2",
          title: "World-Class Banking Infrastructure",
          description:
            "Hong Kong's banking sector is globally respected and widely accepted by international counterparties. Account opening processes are well-established.",
        },
        {
          icon: "ShieldCheck",
          title: "Common Law Legal System",
          description:
            "Hong Kong retains a common law legal system with independent judiciary, providing contractual certainty and predictable dispute resolution.",
        },
      ],
      sections: [
        {
          id: "how-hong-kong-works",
          type: "text",
          title: "How a Hong Kong Limited Company Works",
          content:
            "A Hong Kong private company limited by shares is formed under the Companies Ordinance (Cap. 622). It requires at least one director (of any nationality), one shareholder, a company secretary (resident in Hong Kong), and a registered office address in Hong Kong. There is no minimum share capital requirement. The company is subject to Hong Kong profits tax only on profits arising in or derived from Hong Kong — foreign-source income is generally not taxed. Annual compliance includes audited financial statements, profits tax returns, and an Annual Return filing with the Companies Registry.",
        },
        {
          id: "hong-kong-use-cases",
          type: "audience",
          title: "Common Uses for Hong Kong Companies",
          content:
            "Hong Kong companies serve a range of international business purposes:",
          items: [
            {
              title: "China & Asia Trade Entities",
              description:
                "Businesses importing from or exporting to mainland China use Hong Kong companies as the contracting party with stronger legal protection than mainland entities.",
            },
            {
              title: "International Holding Companies",
              description:
                "Hong Kong's favorable tax treaties with 40+ countries make it a preferred location for regional holding company structures.",
            },
            {
              title: "Intellectual Property & Licensing",
              description:
                "IP held in Hong Kong benefits from the territorial tax system and common-law contract enforcement.",
            },
          ],
        },
      ],
      faqs: [
        {
          id: "hk-faq-1",
          question:
            "Is Hong Kong still a reliable jurisdiction given recent political changes?",
          answer:
            "Hong Kong retains its common law legal system, independent judiciary, and distinct tax framework as part of the One Country Two Systems arrangement. For standard commercial use — international trade, holding companies, licensing — Hong Kong remains widely used and accepted. We recommend consulting counsel for specific political-risk-sensitive situations.",
          category: "offshore",
        },
        {
          id: "hk-faq-2",
          question:
            "Does a Hong Kong company need to file audited financial statements?",
          answer:
            "Yes. All Hong Kong limited companies must prepare audited financial statements annually and file profits tax returns with the Inland Revenue Department. This is a key differentiator from jurisdictions like BVI or Nevis that have minimal annual reporting.",
          category: "offshore",
        },
        {
          id: "hk-faq-3",
          question:
            "How does the territorial tax system work for foreign income?",
          answer:
            "Hong Kong only taxes profits arising in or derived from Hong Kong. Income from activities conducted entirely outside Hong Kong is generally considered offshore-sourced and not subject to Hong Kong profits tax. The classification depends on facts and circumstances and typically requires an offshore claim to be filed with and approved by the Inland Revenue Department.",
          category: "offshore",
        },
      ],
      relatedPackages: ["wyoming-gold"],
    },
  ],
};
