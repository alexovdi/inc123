import type { SiteNavigation } from "@/lib/types";

export const siteNavigation: SiteNavigation = {
  phone: "(775) 313-4155",
  utility: [
    { label: "Client Login", href: "/login", icon: "LogIn" },
  ],
  main: [
    {
      label: "Business Privacy",
      href: "/privacy",
      children: [
        {
          pillar: "privacy",
          label: "Business Privacy",
          description: "Privacy You Can't Get Elsewhere — year-round nominees, offshore records, genuine anonymity",
          href: "/privacy",
          clusters: [
            { title: "Anonymous LLC Formation", href: "/privacy/anonymous-llc", description: "Form an LLC with no public ties to your name" },
            { title: "Nominee Services", href: "/privacy/nominee-services", description: "Year-round nominee directors and officers" },
            { title: "Private Incorporation", href: "/privacy/private-incorporation", description: "Privacy-first corporate formation in WY, NV, CA, FL" },
            { title: "Offshore Privacy", href: "/privacy/offshore-privacy", description: "Records stored outside U.S. jurisdiction" },
            { title: "BOI Reporting", href: "/privacy/boi-reporting", description: "Beneficial Ownership Information compliance" },
          ],
          featuredLink: {
            title: "Wyoming Gold Privacy LLC",
            href: "/packages/wyoming-gold",
            description: "Our most popular privacy package — $1,275 all-inclusive",
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
          description: "Protect What You've Built — charging order protection, holding structures, multi-entity strategies",
          href: "/asset-protection",
          clusters: [
            { title: "Charging Order Protection", href: "/asset-protection/charging-order-protection", description: "Shield LLC assets from personal creditors" },
            { title: "Wyoming Asset Protection", href: "/asset-protection/wyoming", description: "The strongest state for asset protection" },
            { title: "Nevada Asset Protection", href: "/asset-protection/nevada", description: "Close-knit statutes for Nevada entities" },
            { title: "Investment Holding LLC", href: "/asset-protection/investment-holding-llc", description: "Separate investment assets from operations" },
            { title: "Real Estate Asset Protection", href: "/asset-protection/real-estate", description: "Protect rental properties and real estate investments" },
          ],
          featuredLink: {
            title: "Wyoming Gold Asset Protection LLC",
            href: "/packages/wyoming-gold",
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
          description: "Expert Formation, All-Inclusive — everything you need to start, nothing hidden",
          href: "/formation",
          clusters: [
            { title: "Wyoming LLC", href: "/formation/wyoming-llc", description: "America's most business-friendly state" },
            { title: "Nevada LLC", href: "/formation/nevada-llc", description: "No state income tax, strong privacy statutes" },
            { title: "Wyoming Corporation", href: "/formation/wyoming-corporation", description: "Corporate formation with close-knit statutes" },
            { title: "Nevada Corporation", href: "/formation/nevada-corporation", description: "Liability protection with Nevada's business court" },
            { title: "Shelf Companies", href: "/formation/shelf-companies", description: "Pre-aged entities for immediate use" },
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
          description: "Ongoing Support, Not Just a Mailbox — year-round registered agent, annual reports, corporate minutes",
          href: "/compliance",
          clusters: [
            { title: "Registered Agent Service", href: "/compliance/registered-agent", description: "Professional registered agent in WY and NV" },
            { title: "Annual Reports", href: "/compliance/annual-reports", description: "Timely filing of state annual reports" },
            { title: "Corporate Minutes", href: "/compliance/corporate-minutes", description: "Professional minute book maintenance" },
            { title: "Virtual Office", href: "/compliance/virtual-office", description: "Professional business address and mail forwarding" },
            { title: "Foreign Registration", href: "/compliance/foreign-registration", description: "Register your entity to do business in another state" },
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
  pillars: [
    {
      title: "Business Privacy",
      links: [
        { label: "Anonymous LLC", href: "/privacy/anonymous-llc" },
        { label: "Nominee Services", href: "/privacy/nominee-services" },
        { label: "Private Incorporation", href: "/privacy/private-incorporation" },
        { label: "Offshore Privacy", href: "/privacy/offshore-privacy" },
        { label: "BOI Reporting", href: "/privacy/boi-reporting" },
      ],
    },
    {
      title: "Asset Protection",
      links: [
        { label: "Charging Order Protection", href: "/asset-protection/charging-order-protection" },
        { label: "Wyoming AP", href: "/asset-protection/wyoming" },
        { label: "Nevada AP", href: "/asset-protection/nevada" },
        { label: "Investment Holding LLC", href: "/asset-protection/investment-holding-llc" },
        { label: "Real Estate AP", href: "/asset-protection/real-estate" },
      ],
    },
    {
      title: "Company Formation",
      links: [
        { label: "Wyoming LLC", href: "/formation/wyoming-llc" },
        { label: "Nevada LLC", href: "/formation/nevada-llc" },
        { label: "Wyoming Corporation", href: "/formation/wyoming-corporation" },
        { label: "Nevada Corporation", href: "/formation/nevada-corporation" },
        { label: "Shelf Companies", href: "/formation/shelf-companies" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { label: "Registered Agent", href: "/compliance/registered-agent" },
        { label: "Annual Reports", href: "/compliance/annual-reports" },
        { label: "Corporate Minutes", href: "/compliance/corporate-minutes" },
        { label: "Virtual Office", href: "/compliance/virtual-office" },
        { label: "Foreign Registration", href: "/compliance/foreign-registration" },
      ],
    },
  ],
  packages: [
    { label: "Wyoming Gold LLC", href: "/packages/wyoming-gold" },
    { label: "Wyoming Silver LLC", href: "/packages/wyoming-silver" },
    { label: "Nevada Gold LLC", href: "/packages/nevada-gold" },
    { label: "Nevada Silver LLC", href: "/packages/nevada-silver" },
    { label: "Nevada Bronze LLC", href: "/packages/nevada-bronze" },
    { label: "CA Private LLC", href: "/packages/california-private" },
    { label: "FL Private LLC", href: "/packages/florida-private" },
    { label: "Shelf Companies", href: "/packages/shelf-companies" },
  ],
  utility: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
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
