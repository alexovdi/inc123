import type { OffshoreData } from "@/lib/types";

export const offshoreData: OffshoreData = {
  hub: {
    headline: "Offshore Privacy & Asset Protection",
    subheadline:
      "Beyond domestic structures — international jurisdictions for maximum privacy",
    description:
      "For clients who need protection beyond what Wyoming or Nevada can offer, offshore entities provide an additional layer of privacy, asset protection, and legal insulation. These structures complement — not replace — domestic formations. A properly structured offshore entity works alongside your Wyoming LLC or Nevada Corporation to create a multi-jurisdictional shield that is significantly harder to penetrate than any single domestic entity.",
  },
  jurisdictions: [
    {
      slug: "nevis",
      name: "Nevis LLC",
      description:
        "The strongest offshore asset protection jurisdiction. Nevis imposes a 1-year statute of limitations on fraudulent transfer claims, does not recognize or domesticate foreign judgments, and requires a creditor to post a $100,000 bond before even filing suit. Combined with a Wyoming holding LLC, this creates a structure that is prohibitively expensive for most creditors to challenge.",
      advantages: [
        {
          icon: "Shield",
          title: "1-Year Statute of Limitations",
          description:
            "Creditors have only one year from the date of transfer to challenge it — the shortest window of any jurisdiction worldwide.",
        },
        {
          icon: "Ban",
          title: "No Domestication of Judgments",
          description:
            "Foreign court judgments cannot be enforced in Nevis. A creditor must re-litigate from scratch under Nevis law.",
        },
        {
          icon: "DollarSign",
          title: "$100,000 Bond Requirement",
          description:
            "Before filing any claim, a creditor must post a $100,000 cash bond with the Nevis court — a powerful deterrent.",
        },
        {
          icon: "Scale",
          title: "Beyond Reasonable Doubt Standard",
          description:
            "Fraudulent transfer claims must be proven beyond a reasonable doubt — a criminal standard applied to civil claims.",
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
          id: "nevis-faq-1",
          question: "Is a Nevis LLC legal for U.S. residents?",
          answer:
            "Yes. U.S. residents can legally own and operate a Nevis LLC. You must report the entity to the IRS (Form 8858) and disclose foreign bank accounts (FBAR) if applicable. The structure is legal — the key is proper tax compliance and reporting.",
          category: "offshore",
        },
        {
          id: "nevis-faq-2",
          question: "How long does it take to form a Nevis LLC?",
          answer:
            "Formation typically takes 5-10 business days once all documentation is submitted. Rush processing is available for an additional fee.",
          category: "offshore",
        },
        {
          id: "nevis-faq-3",
          question:
            "Can a U.S. court force me to repatriate assets from a Nevis LLC?",
          answer:
            "A U.S. court can order you to repatriate assets, but if the Nevis LLC operating agreement contains a duress clause — which ours do — the manager in Nevis is instructed to refuse distributions made under court compulsion. This creates a legal standoff that typically results in negotiated settlements at a fraction of the original claim.",
          category: "offshore",
        },
      ],
      relatedPackages: ["wyoming-gold"],
    },
    {
      slug: "belize",
      name: "Belize IBC",
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
      name: "Cook Islands Trust",
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
      name: "Panama Corporation",
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
      name: "BVI Company",
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
  ],
};
