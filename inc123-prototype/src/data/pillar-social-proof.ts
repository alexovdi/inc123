import type { TrustBadge } from "@/design-system/components/SocialProofStrip";
import type { Differentiator } from "@/design-system/components/KeyDifferentiators";

/* ================================================
   KEY DIFFERENTIATORS — compact strip after pull quote
   3 items per pillar, surfaces "why us" early on page
   ================================================ */

export const PRIVACY_KEY_DIFFS: Differentiator[] = [
  {
    icon: "Globe",
    title: "Offshore Records Custodian",
    detail:
      "Corporate records stored outside U.S. jurisdiction. No other domestic provider offers this.",
  },
  {
    icon: "Calendar",
    title: "Year-Round Nominees",
    detail:
      "Nominees stay on your filings 365 days a year — not just at formation.",
  },
  {
    icon: "DollarSign",
    title: "All-Inclusive Pricing",
    detail:
      "One price covers everything. No surprise add-ons or annual nominee fees.",
  },
];

export const ASSET_KEY_DIFFS: Differentiator[] = [
  {
    icon: "ShieldCheck",
    title: "Charging Order Protection",
    detail:
      "Wyoming's strongest-in-nation statute blocks creditors from reaching LLC assets.",
  },
  {
    icon: "Layers",
    title: "Multi-Entity Strategies",
    detail:
      "Compartmentalize risk across separate legal barriers — not all assets in one basket.",
  },
  {
    icon: "Clock",
    title: "25 Years Specialized",
    detail:
      "Privacy and asset protection since 2000. Not a general filing service.",
  },
];

export const FORMATION_KEY_DIFFS: Differentiator[] = [
  {
    icon: "Package",
    title: "Nothing Hidden",
    detail:
      "State fees, registered agent, EIN, operating agreement — all included in one price.",
  },
  {
    icon: "Zap",
    title: "Same-Day Filing",
    detail:
      "Documents submitted to the state the same day you order. No delays.",
  },
  {
    icon: "Shield",
    title: "Privacy-Ready",
    detail:
      "Every package can be upgraded to include nominees and offshore records.",
  },
];

export const COMPLIANCE_KEY_DIFFS: Differentiator[] = [
  {
    icon: "CheckCircle",
    title: "Never Missed a Deadline",
    detail:
      "25 years of on-time filings. Proactive reminders before every due date.",
  },
  {
    icon: "FileText",
    title: "Full Minutes Maintenance",
    detail:
      "Corporate minutes, resolutions, and record books — maintained annually.",
  },
  {
    icon: "BellRing",
    title: "Proactive Monitoring",
    detail:
      "We track your filing dates, registered agent renewals, and state requirements.",
  },
];

/* ================================================
   SOCIAL PROOF — expanded trust badges per pillar
   ================================================ */

export const PRIVACY_TRUST_BADGES: TrustBadge[] = [
  {
    icon: "Shield",
    label: "25 Years Trusted",
    detail: "Privacy & asset protection since 2000",
  },
  {
    icon: "Users",
    label: "Dedicated Account Team",
    detail: "Your own specialist — not a call center",
  },
  {
    icon: "Bitcoin",
    label: "Crypto Accepted",
    detail: "BTC, ETH, XRP, LTC, XMR",
  },
  {
    icon: "Phone",
    label: "Talk to Real Humans",
    detail: "Call anytime — real answers, no scripts",
  },
  {
    icon: "RefreshCcw",
    label: "30-Day Money Back",
    detail: "Full refund if you're not satisfied",
  },
];

export const ASSET_TRUST_BADGES: TrustBadge[] = [
  {
    icon: "Shield",
    label: "25 Years Trusted",
    detail: "Privacy & asset protection since 2000",
  },
  {
    icon: "Users",
    label: "Dedicated Account Team",
    detail: "Your own specialist — not a call center",
  },
  {
    icon: "Bitcoin",
    label: "Crypto Accepted",
    detail: "BTC, ETH, XRP, LTC, XMR",
  },
  {
    icon: "Phone",
    label: "Talk to Real Humans",
    detail: "Call anytime — real answers, no scripts",
  },
  {
    icon: "RefreshCcw",
    label: "30-Day Money Back",
    detail: "Full refund if you're not satisfied",
  },
];

export const FORMATION_TRUST_BADGES: TrustBadge[] = [
  {
    icon: "Shield",
    label: "25 Years Trusted",
    detail: "Wyoming & Nevada formation since 2000",
  },
  {
    icon: "Users",
    label: "Dedicated Account Team",
    detail: "Your own specialist — not a call center",
  },
  {
    icon: "Bitcoin",
    label: "Crypto Accepted",
    detail: "BTC, ETH, XRP, LTC, XMR",
  },
  {
    icon: "Phone",
    label: "Talk to Real Humans",
    detail: "Call anytime — real answers, no scripts",
  },
  {
    icon: "RefreshCcw",
    label: "30-Day Money Back",
    detail: "Full refund if you're not satisfied",
  },
];

export const COMPLIANCE_TRUST_BADGES: TrustBadge[] = [
  {
    icon: "Shield",
    label: "25 Years Trusted",
    detail: "Privacy & asset protection since 2000",
  },
  {
    icon: "Users",
    label: "Dedicated Account Team",
    detail: "Your own specialist — not a call center",
  },
  {
    icon: "CheckCircle",
    label: "Never Missed a Deadline",
    detail: "25 years of on-time filings",
  },
  {
    icon: "Phone",
    label: "Talk to Real Humans",
    detail: "Call anytime — real answers, no scripts",
  },
  {
    icon: "BellRing",
    label: "Proactive Reminders",
    detail: "We notify you before every due date",
  },
];

/* ================================================
   TESTIMONIALS — one per pillar for social proof strip
   ================================================ */

export const PRIVACY_TESTIMONIAL = {
  quote:
    "I searched for two years for a company that truly understood business privacy. Incorporate123 was the only one that offered year-round nominees and offshore records in a single package.",
  author: "Private Client",
  role: "Real Estate Investor, Wyoming",
};

export const ASSET_TESTIMONIAL = {
  quote:
    "After a close call with a frivolous lawsuit, I restructured everything through Incorporate123. The multi-entity strategy they built gives me real peace of mind.",
  author: "Private Client",
  role: "Business Owner, Nevada",
};

export const FORMATION_TESTIMONIAL = {
  quote:
    "I was quoted $2,800 in hidden fees by another provider. Incorporate123 included everything — state fees, registered agent, EIN — for one transparent price.",
  author: "Private Client",
  role: "Startup Founder, Wyoming",
};

export const COMPLIANCE_TESTIMONIAL = {
  quote:
    "I forgot to file my annual report and almost lost my LLC's good standing. Since switching to Incorporate123, they handle everything — I don't think about it anymore.",
  author: "Private Client",
  role: "LLC Owner, Nevada",
};
