import type { HomepageData } from "@/lib/types";
import type { CarouselTestimonial } from "@/design-system/components/TestimonialCarousel";

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
      "Year-round nominee services and all-inclusive pricing — everything included from day one. Wyoming & Nevada specialists since 2000.",
    primaryCTA: { label: "Find Your Package →", href: "#wizard" },
    secondaryCTA: {
      label: "Learn About Privacy →",
      href: "/privacy",
    },
    eyebrow: "Privacy & Asset Protection Specialists",
    phone: "(775) 313-4155",
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
      tag: "Gold recommended for privacy",
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
    secondaryCTA: { label: "Call (775) 313-4155 →", href: "tel:+17753134155" },
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
    ctaLabel: "Explore Privacy Solutions →",
  },
  asset: {
    title: "Asset Protection",
    description:
      "Charging order protection, holding structures, and multi-entity strategies for individuals with $500K+ in assets.",
    ctaLabel: "Protect Your Assets →",
  },
  formation: {
    title: "Company Formation",
    description:
      "Expert LLC and Corporation formation in Wyoming and Nevada. Everything included — registered agent, EIN, operating agreement, state fees.",
    ctaLabel: "Start Your Company →",
  },
  compliance: {
    title: "Compliance",
    description:
      "Registered agent, annual reports, corporate minutes — maintained every year. Sign up for a package and we take care of everything.",
    ctaLabel: "Explore Compliance →",
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
