import type {
  HomepageData,
  HomepageTestimonialItem,
  TrustBarItem,
  DifferentiatorCard,
  PrivacyBridgeColumn,
} from "@/lib/types";
import type { CarouselTestimonial } from "@/design-system/components/TestimonialCarousel";

export type {
  HomepageTestimonialItem,
  TrustBarItem,
  DifferentiatorCard,
  PrivacyBridgeColumn,
} from "@/lib/types";

/* ------------------------------------------------
   Homepage Data — v10 design aligned
   ------------------------------------------------ */
export const homepageData: HomepageData = {
  hero: {
    headlineLines: [
      [{ text: "Incorporate" }, { text: "Privately." }],
      [
        { text: "Your" },
        { text: "Name" },
        { text: "Never", highlight: true },
        { text: "Hits", highlight: true },
      ],
      [{ text: "Public" }, { text: "Records." }],
    ],
    subheadline:
      "Year-round nominee services and all-inclusive pricing — everything included from day one. Privacy specialists across 4 states since 2000.",
    primaryCTA: { label: "Find Your Package →", href: "#wizard" },
    secondaryCTA: {
      label: "Learn About Privacy →",
      href: "/privacy",
    },
    eyebrow: "Privacy & Asset Protection Specialists",
    phone: "1-800-553-0615",
    consultationHref: "/contact",
    stats: [
      { value: "25", unit: "yrs", label: "Specialized Experience" },
      { value: "4", unit: "states", label: "WY · NV · CA · FL" },
      { value: "365", unit: "days", label: "Year-Round Nominees" },
    ],
  },
  differentiators: [
    {
      icon: "Clock",
      title: "Year-Round Nominees Included",
      description:
        "Not 'nominee for a day' — your nominees serve all year, every year. Included in Gold packages at no extra cost.",
    },
    {
      icon: "Globe",
      title: "Offshore Records Since 2012",
      description:
        "Corporate records stored offshore for genuine privacy. Free with every Gold package — competitors charge $400–$5,000/year.",
    },
    {
      icon: "DollarSign",
      title: "$1,275 All-Inclusive Pricing",
      description:
        "Formation, registered agent, EIN, operating agreement, and state fees — all bundled. No surprise add-ons at checkout.",
    },
    {
      icon: "Users",
      title: "Specialist Team",
      description:
        "Privacy formation specialists — not a call center, not a chatbot. Real people who know your name and understand complex structures.",
    },
    {
      icon: "Award",
      title: "25 Years of Specialization",
      description:
        "Focused exclusively on Wyoming and Nevada privacy formation since 2000. Depth over breadth.",
    },
    {
      icon: "Phone",
      title: "Talk to a Real Person",
      description:
        "Have questions? Call us directly. No chatbots, no offshore call centers, no sales pressure.",
    },
  ],
  howItWorks: [
    {
      id: "step-1",
      label: "Choose Your Package",
      description:
        "Select Gold, Silver, or Bronze. Compare features, select your state, and pick the tier that fits your goals.",
      tag: "Most clients choose Gold",
      color: "blue" as const,
    },
    {
      id: "step-2",
      label: "We Form Your Entity",
      description:
        "We handle all state filings, paperwork, and fees. Everything is included — no surprise invoices after checkout.",
      tag: "5–7 business days typical",
      color: "green" as const,
    },
    {
      id: "step-3",
      label: "Nominees Protect You",
      description:
        "Year-round nominee directors and officers keep your name off public records — maintained 365 days a year.",
      tag: "Gold package feature",
      color: "amber" as const,
    },
    {
      id: "step-4",
      label: "Compliance, Handled",
      description:
        "Registered agent, annual reports, and corporate minutes — maintained every year so your entity stays in good standing.",
      tag: "Included in every package",
      color: "purple" as const,
    },
  ],
  complianceCallout: {
    headline: "Already Have an Entity? We Keep You Compliant.",
    description:
      "Registered agent renewals, annual reports, corporate minutes, virtual office upgrades, and domestication services. Ongoing support — not just a mailbox.",
    cta: { label: "Explore Compliance Services →", href: "/compliance" },
    secondaryCTA: { label: "Call 1-800-553-0615 →", href: "tel:+18005530615" },
  },
};

/* ------------------------------------------------
   Pillar Card Overrides (spec-specific copy)
   ------------------------------------------------ */
export const pillarCardOverrides: Record<
  string,
  { title: string; description: string; ctaLabel: string }
> = {
  privacy: {
    title: "Business Privacy",
    description:
      "Anonymous LLCs, year-round nominee services, offshore records custodian. Real privacy — not 'nominee for a day.'",
    ctaLabel: "Explore Privacy Solutions",
  },
  asset: {
    title: "Asset Protection",
    description:
      "Charging order protection, holding structures, and multi-entity strategies for individuals with $500K+ in assets.",
    ctaLabel: "Protect Your Assets",
  },
  formation: {
    title: "Company Formation",
    description:
      "Expert LLC and Corporation formation in Wyoming and Nevada. Everything included — registered agent, EIN, operating agreement, state fees.",
    ctaLabel: "Start Your Company",
  },
  compliance: {
    title: "Compliance",
    description:
      "Registered agent, annual reports, corporate minutes — maintained every year. Sign up for a package and we take care of everything.",
    ctaLabel: "Explore Compliance",
  },
};

/* ------------------------------------------------
   Testimonials (3 selected from testimonials.ts)
   ------------------------------------------------ */
export const homepageTestimonials: CarouselTestimonial[] = [
  {
    quote:
      "I needed complete anonymity for my LLC, and Incorporate123 delivered. The year-round nominee service means my name never appears on any public filing. Competitors only offer nominees at formation — these guys include them permanently.",
    name: "Michael R.",
    businessType: "Real Estate Investor",
    state: "California",
    serviceUsed: "Wyoming Gold LLC",
    rating: 5,
  },
  {
    quote:
      "After comparing five formation companies, Incorporate123 was the only one that included everything in the price. No surprise fees, no annual upsells for basic services. The all-inclusive pricing is exactly what it says.",
    name: "Sarah K.",
    businessType: "E-Commerce Business Owner",
    state: "Florida",
    serviceUsed: "Nevada Gold LLC",
    rating: 5,
  },
  {
    quote:
      "What sold me was the offshore record storage. My corporate documents are stored outside U.S. jurisdiction, which adds a layer of privacy no other formation company offered at this price point.",
    name: "Jennifer M.",
    businessType: "Consulting Firm Owner",
    state: "New York",
    serviceUsed: "Wyoming Gold LLC",
    rating: 5,
  },
];

/* ------------------------------------------------
   Package renewal pricing map
   Keyed by tier slug for tier-first architecture
   ------------------------------------------------ */
export const packageRenewals: Record<string, string> = {
  gold: "$525/yr with nominees",
  silver: "$325/yr",
  bronze: "$225/yr",
  // Legacy keys kept for backward compatibility
  "wyoming-gold": "$525/yr with nominees",
  "nevada-gold": "$525/yr with nominees",
  "wyoming-silver": "$325/yr",
  "nevada-silver": "$325/yr",
};

/* ------------------------------------------------
   Trust Signal Items (spec-accurate)
   ------------------------------------------------ */
export const trustSignalItems = [
  { icon: "Calendar", value: "25+", label: "Years Trusted" },
  { icon: "Users", value: "Thousands", label: "Entities Formed" },
  { icon: "ShieldCheck", value: "30-Day", label: "Money-Back Guarantee" },
  { icon: "Phone", value: "(775)", label: "Call Anytime" },
  { icon: "Bitcoin", value: "Crypto", label: "Crypto Payments for Privacy" },
  { icon: "Lock", value: "Secure", label: "Checkout" },
];

/* ------------------------------------------------
   Homepage Testimonial Grid — v10 static 3-col
   Type HomepageTestimonialItem is defined in @/lib/types.
   ------------------------------------------------ */
export const homepageTestimonialGrid: HomepageTestimonialItem[] = [
  {
    quote:
      "We moved our California business to a Wyoming entity with nominee services. Our ownership is completely private and the process was handled start to finish.",
    initials: "MT",
    name: "Mark T.",
    role: "California Business Owner",
    color: "secondary",
  },
  {
    quote:
      "After 15 years with another provider, we switched to Incorporate123 for the year-round nominee maintenance. The difference in service level is night and day. We should have made the switch years ago.",
    initials: "IG",
    name: "Investment Group",
    role: "Nevada",
    color: "success",
    featured: true,
  },
  {
    quote:
      "The all-inclusive pricing was what sold us. No hidden fees, no surprise add-ons at checkout — just one clear price for everything we needed.",
    initials: "SM",
    name: "Sarah M.",
    role: "Wyoming LLC Owner",
    color: "accent",
  },
];

/* ------------------------------------------------
   Trust Bar Items — v10 homepage
   Type TrustBarItem is defined in @/lib/types. Data carries semantic
   "accent" keys; the TrustBar component resolves them to Tailwind classes.
   ------------------------------------------------ */
export const trustBarItems: TrustBarItem[] = [
  {
    iconName: "Award",
    accent: "secondary",
    value: "Since 2000",
    label: "25 years trusted",
  },
  {
    iconName: "Phone",
    accent: "success",
    value: "1-800-553-0615",
    label: "Call us directly",
    href: "tel:+18005530615",
  },
  {
    iconName: "Check",
    accent: "accent",
    value: "30-Day",
    label: "Money-back guarantee",
  },
  {
    iconName: "Globe",
    accent: "pillar-compliance",
    value: "5 Cryptos",
    label: "Payments accepted",
  },
  {
    iconName: "DollarSign",
    accent: "secondary",
    value: "All-Inclusive",
    label: "No hidden fees, ever",
  },
];

/* ------------------------------------------------
   Differentiator Cards — v10 dark section
   Type DifferentiatorCard is defined in @/lib/types.
   ------------------------------------------------ */
export const differentiatorCards: DifferentiatorCard[] = [
  {
    iconName: "Globe",
    title: "Offshore Records Storage",
    desc: "Corporate records maintained outside U.S. jurisdiction. Included free in every Gold package since 2012.",
  },
  {
    iconName: "DollarSign",
    title: "All-Inclusive Pricing",
    desc: "State fees, agent, operating agreement, EIN — every cost included upfront. No add-ons at checkout.",
  },
  {
    iconName: "Clock",
    title: "25 Years Specialized",
    desc: "Wyoming and Nevada entities since 2000. Privacy and asset protection specialists.",
  },
  {
    iconName: "Users",
    title: "Real Human Experts",
    desc: "Dedicated specialists who know Wyoming and Nevada entity law. Not a chatbot, not a call center.",
  },
  {
    iconName: "Phone",
    title: "Crypto Accepted",
    desc: "Bitcoin, Ethereum, and three more cryptocurrencies accepted for maximum payment privacy.",
  },
];

/* ------------------------------------------------
   Package Comparison — Silver/Gold cards
   ------------------------------------------------ */
export interface PackageComparisonCard {
  tier: string;
  tierLabel: string;
  price: string;
  renewal: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  featuredBadge?: string;
  valueCallout?: string;
  upsellText?: string;
  upsellHref?: string;
}

export const packageComparisonCards: PackageComparisonCard[] = [
  {
    tier: "Silver",
    tierLabel: "Formation",
    price: "$875",
    renewal: "$325/yr",
    features: [
      "Registered agent included",
      "Custom operating agreement",
      "All state filing fees",
      "EIN filing",
    ],
    ctaLabel: "View Silver →",
    ctaHref: "/wyoming-incorporation",
    upsellText: "Add privacy for $400 more →",
    upsellHref: "/compare-packages",
  },
  {
    tier: "Gold",
    tierLabel: "Privacy",
    price: "$1,275",
    renewal: "$525/yr with nominees",
    features: [
      "Year-round nominee services",
      "Offshore records storage",
      "Full compliance package",
      "Registered agent included",
      "Corporate minutes maintenance",
      "All state filing fees",
    ],
    ctaLabel: "Get Started →",
    ctaHref: "/wyoming-private-incorporation",
    featured: true,
    featuredBadge: "Chosen by 70% of Clients",
    valueCallout: "Includes $2,000+ in Year 1 services",
    upsellText: "Schedule a consultation",
    upsellHref: "/contact",
  },
];

/* ------------------------------------------------
   Privacy Bridge columns — "Why It Matters" section
   ------------------------------------------------ */
export const privacyBridgeColumns: PrivacyBridgeColumn[] = [
  {
    iconName: "Eye",
    title: "Public Exposure",
    description:
      "Standard formation puts your name on state filings. Anyone with an internet connection can find your address and business details.",
  },
  {
    iconName: "AlertCircle",
    title: "Lawsuit Targeting",
    description:
      "Visible ownership makes you a target. Frivolous lawsuits cost $500K+ to defend on average. Privacy is your first line of defense.",
  },
  {
    iconName: "Lock",
    title: "The Solution",
    description:
      "Year-round nominee officers keep your name off public records — not just at formation, but every day. Combine with offshore records storage for complete privacy.",
  },
];

/* ------------------------------------------------
   Hero visual badges — floating pillar badges
   ------------------------------------------------ */
export interface HeroBadge {
  iconName: string;
  title: string;
  subtitle: string;
  position: "top-right" | "mid-right" | "bottom-left";
  colorClass: string;
  delay: string;
}

export const heroBadges: HeroBadge[] = [
  {
    iconName: "Lock",
    title: "Privacy",
    subtitle: "Year-round nominees",
    position: "top-right",
    colorClass: "bg-secondary/10 text-secondary/80",
    delay: "600ms",
  },
  {
    iconName: "FileText",
    title: "Formation",
    subtitle: "All-inclusive",
    position: "mid-right",
    colorClass: "bg-secondary/10 text-secondary/80",
    delay: "800ms",
  },
  {
    iconName: "Shield",
    title: "Protection",
    subtitle: "Charging order",
    position: "bottom-left",
    colorClass: "bg-success/10 text-success/80",
    delay: "1000ms",
  },
];
