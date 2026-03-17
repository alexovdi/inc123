import type { HomepageData } from "@/lib/types";
import type { CarouselTestimonial } from "@/design-system/components/TestimonialCarousel";

/* ------------------------------------------------
   Homepage Data — Spec v1.1 aligned
   ------------------------------------------------ */
export const homepageData: HomepageData = {
  hero: {
    headline:
      "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden",
    subheadline:
      "Year-round nominee services, offshore records, and expert formation in Wyoming and Nevada. 25 years of specialized experience protecting your privacy and assets.",
    primaryCTA: { label: "Protect Your Privacy →", href: "/privacy" },
    secondaryCTA: {
      label: "View Packages & Pricing →",
      href: "/compare-packages",
    },
    trustSnippets: [
      "25 Years",
      "Thousands Formed",
      "$1,275 All-Inclusive",
      "Money-Back Guarantee",
    ],
    eyebrow: "Trusted Since 2000 · Privacy Specialists",
    safetyNet: "Have questions? Call (775) 313-4155",
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
      label: "Choose Your Protection Level",
      description:
        "Explore our Privacy, Asset Protection, or Formation guides — or jump straight to packages if you already know what you need.",
    },
    {
      id: "step-2",
      label: "Select Your Package",
      description:
        "Pick the package that fits your needs. Gold for full privacy with year-round nominees, Silver for expert formation with everything included.",
    },
    {
      id: "step-3",
      label: "We Handle the Filing",
      description:
        "Complete a short form with your entity details. We file with the state, obtain your EIN, prepare your operating agreement, and set up registered agent service.",
    },
    {
      id: "step-4",
      label: "You're Protected",
      description:
        "Receive your formation documents, nominee confirmations, and ongoing compliance support. Your privacy and assets are secured.",
    },
  ],
  complianceCallout: {
    headline: "Already Have an Entity? We Keep You Compliant.",
    description:
      "Registered agent renewals, annual reports, corporate minutes, virtual office upgrades, and domestication services. Ongoing support — not just a mailbox.",
    cta: { label: "Explore Compliance Services →", href: "/compliance" },
    secondaryCTA: { label: "Client Login →", href: "/login" },
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
    title: "Business Incorporation",
    description:
      "Expert LLC and Corporation formation in Wyoming and Nevada. Everything included — registered agent, EIN, operating agreement, state fees.",
    ctaLabel: "Start Your Company →",
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
