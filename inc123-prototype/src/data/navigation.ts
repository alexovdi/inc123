import type { SiteNavigation } from "@/lib/types";

export const siteNavigation: SiteNavigation = {
  phone: "(775) 313-4155",
  utility: [{ label: "Client Login", href: "/login", icon: "LogIn" }],
  main: [
    {
      label: "Business Privacy",
      href: "/privacy",
      children: [
        {
          pillar: "privacy",
          label: "Business Privacy",
          description:
            "Privacy You Can't Get Elsewhere — year-round nominees, offshore records, genuine anonymity",
          href: "/privacy",
          clusters: [
            {
              title: "Anonymous LLC Formation",
              href: "/anonymous-llc",
              description: "Form an LLC with no public ties to your name",
            },
            {
              title: "Nominee Services",
              href: "/nominee-services",
              description: "Year-round nominee directors and officers",
            },
            {
              title: "Private Incorporation",
              href: "/private-incorporation",
              description:
                "Privacy-first corporate formation in WY, NV, CA, FL",
            },
            {
              title: "Offshore Privacy",
              href: "/offshore-privacy",
              description: "Records stored outside U.S. jurisdiction",
            },
          ],
          featuredLink: {
            title: "Wyoming Gold Privacy LLC",
            href: "/gold?state=wyoming",
            description:
              "Our most popular privacy package — $1,275 all-inclusive",
          },
        },
      ],
    },
    {
      label: "Asset Protection",
      href: "/asset-protection",
      children: [
        {
          pillar: "asset",
          label: "Asset Protection",
          description:
            "Protect What You've Built — charging order protection, holding structures, multi-entity strategies",
          href: "/asset-protection",
          clusters: [
            {
              title: "Charging Order Protection",
              href: "/charging-order-protection",
              description: "Shield LLC assets from personal creditors",
            },
            {
              title: "Wyoming Asset Protection",
              href: "/wyoming-asset-protection",
              description: "The strongest state for asset protection",
            },
            {
              title: "Nevada Asset Protection",
              href: "/nevada-asset-protection",
              description: "Close-knit statutes for Nevada entities",
            },
            {
              title: "Investment Holding LLC",
              href: "/investment-holding-llc",
              description: "Separate investment assets from operations",
            },
            {
              title: "Real Estate Asset Protection",
              href: "/real-estate",
              description:
                "Protect rental properties and real estate investments",
            },
          ],
          featuredLink: {
            title: "Wyoming Gold Asset Protection LLC",
            href: "/gold?state=wyoming",
            description: "Full privacy + charging order protection — $1,275",
          },
        },
      ],
    },
    {
      label: "Company Formation",
      href: "/formation",
      children: [
        {
          pillar: "formation",
          label: "Company Formation",
          description:
            "Expert Formation, All-Inclusive — everything you need to start, nothing hidden",
          href: "/formation",
          clusters: [
            {
              title: "Wyoming LLC",
              href: "/wyoming-llc",
              description: "America's most business-friendly state",
            },
            {
              title: "Nevada LLC",
              href: "/nevada-llc",
              description: "No state income tax, strong privacy statutes",
            },
            {
              title: "Wyoming Corporation",
              href: "/wyoming-corporation",
              description: "Corporate formation with close-knit statutes",
            },
            {
              title: "Nevada Corporation",
              href: "/nevada-corporation",
              description: "Liability protection with Nevada's business court",
            },
            {
              title: "Shelf Companies",
              href: "/shelf-companies",
              description: "Pre-aged entities for immediate use",
            },
            {
              title: "Entity Tax Guide",
              href: "/entity-tax-guide",
              description: "How entity type affects your taxes",
            },
          ],
          featuredLink: {
            title: "Compare All Packages",
            href: "/packages",
            description: "See all formation packages side by side",
          },
        },
      ],
    },
    {
      label: "Compliance",
      href: "/compliance",
      children: [
        {
          pillar: "compliance",
          label: "Compliance",
          description:
            "Ongoing Support, Not Just a Mailbox — year-round registered agent, annual reports, corporate minutes",
          href: "/compliance",
          clusters: [
            {
              title: "Registered Agent Service",
              href: "/registered-agent",
              description: "Professional registered agent in WY and NV",
            },
            {
              title: "Annual Reports",
              href: "/annual-reports",
              description: "Timely filing of state annual reports",
            },
            {
              title: "Corporate Minutes",
              href: "/corporate-minutes",
              description: "Professional minute book maintenance",
            },
            {
              title: "Virtual Office",
              href: "/virtual-office",
              description: "Professional business address and mail forwarding",
            },
            {
              title: "Foreign Registration",
              href: "/foreign-registration",
              description:
                "Register your entity to do business in another state",
            },
            {
              title: "2nd-Tier State Filings",
              href: "/second-tier-state-filings",
              description: "Multi-state filings beyond WY and NV",
            },
            {
              title: "Shares & Corporate Records",
              href: "/shares-corporate-records",
              description:
                "Share certificates, stock ledgers, and record books",
            },
            {
              title: "Tax Filing & Obligations",
              href: "/tax-obligations",
              description: "Ongoing tax requirements after formation",
            },
          ],
        },
      ],
    },
    {
      label: "Packages",
      href: "/packages",
    },
  ],
};

export const footerNavigation = {
  columns: [
    {
      title: "Business Privacy",
      links: [
        { label: "Anonymous LLC", href: "/anonymous-llc" },
        { label: "Nominee Services", href: "/nominee-services" },
        { label: "Private Incorporation", href: "/private-incorporation" },
        { label: "Offshore Privacy", href: "/offshore-privacy" },
      ],
    },
    {
      title: "Asset Protection & Formation",
      sections: [
        {
          heading: "Asset Protection",
          links: [
            {
              label: "Charging Order Protection",
              href: "/charging-order-protection",
            },
            { label: "Wyoming AP", href: "/wyoming-asset-protection" },
            { label: "Nevada AP", href: "/nevada-asset-protection" },
            {
              label: "Investment Holding LLC",
              href: "/investment-holding-llc",
            },
            { label: "Real Estate AP", href: "/real-estate" },
          ],
        },
        {
          heading: "Company Formation",
          links: [
            { label: "Wyoming LLC", href: "/wyoming-llc" },
            { label: "Nevada LLC", href: "/nevada-llc" },
            { label: "Wyoming Corp", href: "/wyoming-corporation" },
            { label: "Nevada Corp", href: "/nevada-corporation" },
            { label: "Shelf Companies", href: "/shelf-companies" },
          ],
        },
      ],
    },
    {
      title: "Packages & States",
      sections: [
        {
          heading: "Packages",
          links: [
            { label: "Compare All Packages", href: "/packages" },
            {
              label: "Wyoming Gold LLC",
              href: "/gold?state=wyoming",
            },
            { label: "Wyoming Silver LLC", href: "/silver?state=wyoming" },
            { label: "Nevada Gold LLC", href: "/gold?state=nevada" },
            { label: "Nevada Silver LLC", href: "/silver?state=nevada" },
            { label: "Nevada Bronze LLC", href: "/bronze?state=nevada" },
          ],
        },
        {
          heading: "States",
          links: [
            { label: "Wyoming", href: "/wyoming" },
            { label: "Nevada", href: "/nevada" },
            { label: "California", href: "/california" },
            { label: "Florida", href: "/florida" },
          ],
        },
      ],
    },
    {
      title: "Company & Compliance",
      sections: [
        {
          heading: "Company",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "FAQ", href: "/faq" },
            { label: "Blog", href: "/blog" },
            { label: "Testimonials", href: "/testimonials" },
          ],
        },
        {
          heading: "Compliance",
          links: [
            { label: "Registered Agent", href: "/registered-agent" },
            { label: "Annual Reports", href: "/annual-reports" },
            { label: "Corporate Minutes", href: "/corporate-minutes" },
            { label: "Virtual Office", href: "/virtual-office" },
            { label: "Foreign Registration", href: "/foreign-registration" },
          ],
        },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  company: {
    name: "Incorporate123",
    address: "1795 Meadow Wood Lane, Suite 100, Reno, NV 89502",
    phone: "(775) 313-4155",
    email: "info@incorporate123.com",
  },
};
