/* ================================================
   Pillar Page Content — shared data for all 4 pillars
   Extracted from inline constants in page components
   ================================================ */

/* ------------------------------------------------
   PULL QUOTE DATA
   ------------------------------------------------ */

export interface PullQuoteData {
  /** The plain text of the quote (JSX highlight applied in component) */
  text: string;
  /** The word/phrase to accent-highlight */
  highlight: string;
  /** Large decorative background text */
  bgText?: string;
}

export const PRIVACY_PULL_QUOTE: PullQuoteData = {
  text: "Most providers offer a nominee for a day. We keep nominees on your filings 365 days a year — formation, annual reports, amendments, everything.",
  highlight: "365\u00A0days\u00A0a\u00A0year",
  bgText: "365",
};

export const ASSET_PULL_QUOTE: PullQuoteData = {
  text: "Charging order protection means creditors can't seize your LLC's assets — they can only wait for distributions that may never come.",
  highlight: "may never come",
  bgText: "LLC",
};

export const FORMATION_PULL_QUOTE: PullQuoteData = {
  text: "We include everything other providers charge extra for — state fees, registered agent, EIN, operating agreement. One price, nothing hidden.",
  highlight: "nothing hidden",
  bgText: "$0",
};

export const COMPLIANCE_PULL_QUOTE: PullQuoteData = {
  text: "An entity that falls out of good standing loses its liability protection. We make sure that never happens.",
  highlight: "never happens",
  bgText: "365",
};

/* ------------------------------------------------
   FINAL CTA DATA
   ------------------------------------------------ */

export interface FinalCTAData {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const PRIVACY_FINAL_CTA: FinalCTAData = {
  heading: "Your name never has to appear in public records.",
  description:
    "Wyoming Gold starts at $1,275 — formation, nominees, offshore records, registered agent, all included. No hidden fees. No annual surprises.",
  ctaLabel: "Choose Your Privacy Package",
  ctaHref: "/compare-packages",
};

export const ASSET_FINAL_CTA: FinalCTAData = {
  heading: "Your assets don\u2019t have to be vulnerable.",
  description:
    "Wyoming Gold starts at $1,275 — charging order protection, nominee services, registered agent, operating agreement, all included. No hidden fees.",
  ctaLabel: "Choose Your Protection Package",
  ctaHref: "/compare-packages",
};

export const FORMATION_FINAL_CTA: FinalCTAData = {
  heading: "Start your business right. Everything included.",
  description:
    "Wyoming Silver starts at $895 — state fees, registered agent, EIN, operating agreement, all included. Upgrade to Gold for full privacy. No hidden fees.",
  ctaLabel: "Choose Your Formation Package",
  ctaHref: "/compare-packages",
};

export const COMPLIANCE_FINAL_CTA: FinalCTAData = {
  heading: "Your entity stays in good standing. We guarantee it.",
  description:
    "Annual compliance starts at $325 — registered agent, annual reports, corporate minutes, all included. Never worry about missing a deadline again.",
  ctaLabel: "Choose Your Compliance Package",
  ctaHref: "/compare-packages",
};
