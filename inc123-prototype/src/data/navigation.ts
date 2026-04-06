import type { SiteNavigation } from "@/lib/types";

/* ------------------------------------------------
   Header Navigation — Final (aligned with Site Map Final)
   URL Rule: All URLs are flat, no directory nesting.
   Only exceptions: /offshore/* and /checkout/*
   ------------------------------------------------ */
export const siteNavigation: SiteNavigation = {
  phone: "1-800-553-0615",
  utility: [],
  main: [
    /* ---- Privacy (Blue) ---- */
    {
      label: "Privacy",
      href: "/privacy",
      children: [
        {
          pillar: "privacy",
          label: "Privacy",
          description:
            "Privacy You Can't Get Elsewhere — year-round nominees, offshore records, genuine anonymity",
          href: "/privacy",
          clusters: [
            {
              title: "Anonymous LLC",
              href: "/anonymous-llc",
              description: "Form an LLC with no public ties to your name",
            },
            {
              title: "Anonymous Corporation",
              href: "/anonymous-corporation",
              description: "Corporate formation with nominee directors",
            },
            {
              title: "Nominee Services",
              href: "/nominee-services",
              description: "Year-round nominee directors and officers",
            },
            {
              title: "Wyoming Privacy",
              href: "/wyoming-privacy",
              description: "Wyoming's privacy advantages for business owners",
            },
            {
              title: "Nevada Privacy",
              href: "/nevada-privacy",
              description: "Nevada's privacy features and protections",
            },
            {
              title: "California Private Inc.",
              href: "/california-private-incorporation",
              description: "WY formation + CA foreign registration",
            },
            {
              title: "Florida Private Inc.",
              href: "/florida-private-incorporation",
              description: "WY formation + FL foreign registration",
            },
          ],
          comparisons: [
            {
              title: "Best State for Privacy",
              href: "/best-state-for-privacy",
            },
            {
              title: "WY vs NV for Privacy",
              href: "/wyoming-vs-nevada-privacy",
            },
          ],
          featuredLink: {
            title: "Wyoming Gold Privacy LLC",
            href: "/wyoming-private-incorporation",
            description:
              "Our most popular privacy package — full nominee services included",
          },
        },
      ],
    },

    /* ---- Asset Protection (Green) ---- */
    {
      label: "Asset Protection",
      href: "/asset-protection",
      children: [
        {
          pillar: "asset",
          label: "Asset Protection",
          description:
            "Protect What You've Built — charging order protection, holding structures",
          href: "/asset-protection",
          clusters: [
            {
              title: "Nevada Asset Protection",
              href: "/nevada-asset-protection",
              description: "Nevada's asset protection statutes",
            },
            {
              title: "Wyoming Asset Protection",
              href: "/wyoming-asset-protection",
              description: "The strongest state for asset protection",
            },
            {
              title: "Charging Order Protection",
              href: "/charging-order-protection",
              description: "Shield LLC assets from personal creditors",
            },
            {
              title: "Investment Holding LLC",
              href: "/investment-holding-llc",
              description: "Separate investment assets from operations",
            },
          ],
          comparisons: [
            {
              title: "Best State for AP",
              href: "/best-state-for-asset-protection",
            },
            {
              title: "WY vs NV for AP",
              href: "/wyoming-vs-nevada-asset-protection",
            },
          ],
          featuredLink: {
            title: "Wyoming Gold Asset Protection LLC",
            href: "/wyoming-private-incorporation",
            description: "Full privacy + charging order protection",
          },
        },
      ],
    },

    /* ---- Company Formation (Amber) ---- */
    {
      label: "Company Formation",
      href: "/formation",
      children: [
        {
          pillar: "formation",
          label: "Company Formation",
          description:
            "Expert Formation, All-Inclusive — everything you need to start",
          href: "/formation",
          clusters: [
            {
              title: "Wyoming LLC",
              href: "/wyoming-llc",
              description: "America's most business-friendly state",
            },
            {
              title: "Wyoming Corporation",
              href: "/wyoming-corporation",
              description: "Corporate formation with close-knit statutes",
            },
            {
              title: "Nevada LLC",
              href: "/nevada-llc",
              description: "No state income tax, strong privacy statutes",
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
            {
              title: "LLC vs Corporation",
              href: "/llc-vs-corporation",
              description:
                "Side-by-side comparison of LLC and corporate structures",
            },
          ],
          comparisons: [
            {
              title: "Wyoming vs Nevada",
              href: "/wyoming-vs-nevada",
            },
            {
              title: "Shelf vs New Formation",
              href: "/shelf-company-vs-new-formation",
            },
            {
              title: "LLC vs S-Corp vs C-Corp Tax",
              href: "/llc-vs-scorp-vs-ccorp-tax",
            },
          ],
          featuredLink: {
            title: "Compare All Packages",
            href: "/compare-packages",
            description: "See all formation packages side by side",
          },
        },
      ],
    },

    /* ---- Compliance (Purple) ---- */
    {
      label: "Compliance",
      href: "/compliance",
      children: [
        {
          pillar: "compliance",
          label: "Compliance",
          description:
            "Ongoing Support, Not Just a Mailbox — registered agent, annual reports, corporate minutes",
          href: "/compliance",
          clusters: [
            {
              title: "Registered Agent Services",
              href: "/registered-agent",
              description: "Professional registered agent in WY and NV",
            },
            {
              title: "Wyoming Registered Agent",
              href: "/wyoming-registered-agent",
              description: "Wyoming-specific RA service from Cheyenne",
            },
            {
              title: "Nevada Registered Agent",
              href: "/nevada-registered-agent",
              description: "Nevada-specific RA service included",
            },
            {
              title: "Annual Reports",
              href: "/annual-reports",
              description: "Timely filing of state annual reports",
            },
            {
              title: "Foreign State Registration",
              href: "/foreign-state-registration",
              description: "Register your entity in another state",
            },
            {
              title: "Domestication",
              href: "/domestication",
              description: "Move your entity to Wyoming or Nevada",
            },
            {
              title: "2nd-Tier State Filings",
              href: "/second-tier-state-filings",
              description: "Multi-state filing coordination",
            },
            {
              title: "Shares & Corporate Records",
              href: "/shares-corporate-records",
              description: "Stock certificates, ledgers, and record books",
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

    /* ---- About (simple dropdown) ---- */
    {
      label: "About",
      href: "/about",
      dropdownLinks: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Testimonials", href: "/testimonials" },
      ],
    },
  ],
};

/* ------------------------------------------------
   Footer Navigation — Final (6 columns + branding strip)
   ------------------------------------------------ */
export const footerNavigation = {
  /* Branding strip */
  brand: {
    tagline:
      "Privacy, Asset Protection & Business Formation Specialists. Trusted since 2000.",
    ctas: [
      { label: "View Packages", href: "/compare-packages" },
      { label: "Contact Us", href: "/contact" },
    ],
  },

  /* 6 columns */
  columns: [
    {
      title: "Privacy",
      links: [
        { label: "Anonymous LLC", href: "/anonymous-llc" },
        { label: "Anonymous Corporation", href: "/anonymous-corporation" },
        { label: "Nominee Services", href: "/nominee-services" },
        { label: "Wyoming Privacy", href: "/wyoming-privacy" },
        { label: "Nevada Privacy", href: "/nevada-privacy" },
        { label: "CA Private Inc.", href: "/california-private-incorporation" },
        { label: "FL Private Inc.", href: "/florida-private-incorporation" },
      ],
      comparisons: [
        { label: "Best State for Privacy", href: "/best-state-for-privacy" },
        { label: "WY vs NV Privacy", href: "/wyoming-vs-nevada-privacy" },
      ],
    },
    {
      title: "Asset Protection",
      links: [
        { label: "Nevada Asset Protection", href: "/nevada-asset-protection" },
        {
          label: "Wyoming Asset Protection",
          href: "/wyoming-asset-protection",
        },
        {
          label: "Charging Order Protection",
          href: "/charging-order-protection",
        },
        { label: "Investment Holding LLC", href: "/investment-holding-llc" },
      ],
      comparisons: [
        {
          label: "Best State for AP",
          href: "/best-state-for-asset-protection",
        },
        {
          label: "WY vs NV for AP",
          href: "/wyoming-vs-nevada-asset-protection",
        },
      ],
    },
    {
      title: "Company Formation",
      links: [
        { label: "Wyoming LLC", href: "/wyoming-llc" },
        { label: "Wyoming Corporation", href: "/wyoming-corporation" },
        { label: "Nevada LLC", href: "/nevada-llc" },
        { label: "Nevada Corporation", href: "/nevada-corporation" },
        { label: "Shelf Companies", href: "/shelf-companies" },
        { label: "Entity Tax Guide", href: "/entity-tax-guide" },
        { label: "LLC vs Corporation", href: "/llc-vs-corporation" },
      ],
      comparisons: [
        { label: "Wyoming vs Nevada", href: "/wyoming-vs-nevada" },
        {
          label: "Shelf vs New Formation",
          href: "/shelf-company-vs-new-formation",
        },
        {
          label: "LLC vs S/C-Corp Tax",
          href: "/llc-vs-scorp-vs-ccorp-tax",
        },
      ],
    },
    {
      title: "Compliance",
      links: [
        { label: "Registered Agent", href: "/registered-agent" },
        { label: "Wyoming RA", href: "/wyoming-registered-agent" },
        { label: "Nevada RA", href: "/nevada-registered-agent" },
        { label: "Annual Reports", href: "/annual-reports" },
        { label: "Foreign Registration", href: "/foreign-state-registration" },
        { label: "Domestication", href: "/domestication" },
        { label: "2nd-Tier Filings", href: "/second-tier-state-filings" },
        { label: "Shares & Records", href: "/shares-corporate-records" },
        { label: "Tax Obligations", href: "/tax-obligations" },
      ],
    },
    {
      title: "Packages",
      links: [
        {
          label: "★ Wyoming Gold",
          href: "/wyoming-private-incorporation",
        },
        {
          label: "★ Nevada Gold",
          href: "/nevada-private-incorporation",
        },
        { label: "Wyoming Silver", href: "/wyoming-incorporation" },
        { label: "Nevada Silver", href: "/nevada-incorporation" },
        { label: "Nevada Bronze", href: "/nevada-basic-incorporation" },
        {
          label: "California Private",
          href: "/california-private-incorporation",
        },
        {
          label: "Florida Private",
          href: "/florida-private-incorporation",
        },
        { label: "Shelf Companies", href: "/shelf-companies" },
      ],
    },
    {
      title: "Company & States",
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
          heading: "States",
          links: [
            { label: "Wyoming", href: "/wyoming" },
            { label: "Nevada", href: "/nevada" },
            { label: "California", href: "/california" },
            { label: "Florida", href: "/florida" },
          ],
        },
        {
          heading: "",
          links: [{ label: "Offshore", href: "/offshore" }],
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
    address: "Reno, Nevada",
    phone: "1-800-553-0615",
    email: "info@incorporate123.com",
  },
  crypto: ["BTC", "ETH", "XRP", "LTC", "XMR"],
};
