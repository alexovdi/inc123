import type { PillarName } from "@/design-system/tokens";

/** Navigation */
export interface NavCluster {
  title: string;
  href: string;
  description?: string;
}

export interface NavPillar {
  pillar: PillarName;
  label: string;
  description: string;
  href: string;
  clusters: NavCluster[];
  comparisons?: NavCluster[];
  featuredLink?: { title: string; href: string; description: string };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavPillar[];
  /** Simple dropdown links (e.g. About menu) — alternative to mega menu */
  dropdownLinks?: { label: string; href: string }[];
}

export interface SiteNavigation {
  main: NavItem[];
  utility: { label: string; href: string; icon?: string }[];
  phone: string;
}

/** Pillars */
export interface Pillar {
  id: PillarName;
  label: string;
  tagline: string;
  description: string;
  icon: string;
  cta: { label: string; href: string };
  trustElement: string;
  clusters: NavCluster[];
  services: string[];
}

/** Packages */
export type EntityType = "llc" | "corp";
export type TierLevel = "bronze" | "silver" | "gold";

export interface PackageFeature {
  name: string;
  tooltip?: string;
  status: "included" | "not-included" | "add-on";
}

/**
 * Add-on category (per Apr 13 decision):
 *  - "government-filing" → the 3 state filings (Foreign State, Domestication, DBA)
 *  - "service-upgrade"   → the 3 service upgrades (Privacy, Executive VO, Part-Time Private Suite)
 *  - "other"             → misc (rush filing, crypto payments, etc.)
 */
export type AddOnCategory = "government-filing" | "service-upgrade" | "other";

export interface PackageAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  tooltip?: string;
  category?: AddOnCategory;
  /** Show as "TBD" in UI when price is not yet locked */
  priceTBD?: boolean;
  /**
   * Restrict where this upgrade may be offered.
   * - `tiers` — only on these tier slugs (e.g. hide Privacy Upgrade on Gold where nominees are already included)
   * - `states` — only in these formation states (e.g. Executive VO and Part-Time Private Suite are Nevada-only physical products)
   * Both are allowlists. Omitting either means "all".
   * See Apr 13 meeting transcript and legacy Incorporate123_Packages.xlsx "Current Packages" sheet.
   */
  appliesTo?: {
    tiers?: TierLevel[];
    states?: string[];
  };
}

export interface PackageTier {
  id: string;
  flatSlug: string;
  name: string;
  tier: TierLevel;
  state: string;
  prices: Record<EntityType, { formation: number; renewal: number }>;
  description: string;
  features: PackageFeature[];
  badge?: string;
  highlighted?: boolean;
  addOns: PackageAddOn[];
}

/** Tier-First Package Architecture */
export interface TierStateVariant {
  state: string;
  abbreviation: string;
  prices: Record<EntityType, { formation: number; renewal: number }>;
  extraFeatures?: PackageFeature[];
  description?: string;
  /** Legacy package ID for backward compat (e.g., "wyoming-gold") */
  legacyId: string;
}

export interface TierDefinition {
  tier: TierLevel;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge?: string;
  highlighted?: boolean;
  availableStates: string[];
  /** Canonical feature list (state-independent) */
  features: PackageFeature[];
  /** State-specific pricing and feature overrides */
  stateVariants: Record<string, TierStateVariant>;
  addOns: PackageAddOn[];
}

/** Testimonials */
export type TestimonialCategory =
  | "privacy"
  | "asset"
  | "formation"
  | "compliance"
  | "offshore";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  businessType: string;
  state: string;
  serviceUsed: string;
  rating?: number;
  category?: TestimonialCategory;
  clientSince?: string;
  featured?: boolean;
}

/** FAQ */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: PillarName | "packages" | "general";
}

/** Trust Signals */
export interface TrustSignalItem {
  icon: string;
  value: string;
  label: string;
}

/** Steps */
export interface Step {
  id: string;
  label: string;
  description?: string;
  tag?: string;
  color?: "blue" | "green" | "amber" | "purple";
}

/** Comparison */
export interface ComparisonColumn {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export interface ComparisonRow {
  label: string;
  tooltip?: string;
  values: Record<string, string | React.ReactNode>;
}

/** Homepage */
export interface DifferentiatorItemData {
  icon: string;
  title: string;
  description: string;
}

export interface HeadlineSegment {
  text: string;
  highlight?: boolean;
}

export interface HeroStat {
  value: string;
  unit: string;
  label: string;
}

export interface HomepageData {
  hero: {
    headlineLines: HeadlineSegment[][];
    subheadline: string;
    primaryCTA: { label: string; href: string };
    secondaryCTA: { label: string; href: string };
    eyebrow?: string;
    phone?: string;
    consultationHref?: string;
    stats?: HeroStat[];
  };
  differentiators: DifferentiatorItemData[];
  howItWorks: Step[];
  complianceCallout: {
    headline: string;
    description: string;
    cta: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
  };
}

/** Cluster Pages */
export type ClusterSectionType =
  | "text"
  | "comparison"
  | "audience"
  | "differentiator"
  | "pricing";

export interface ClusterComparisonRow {
  label: string;
  wyoming: string;
  nevada: string;
  highlight?: boolean;
}

export interface ClusterPricingRow {
  label: string;
  price: string;
  note?: string;
  highlight?: boolean;
}

export interface ClusterSection {
  id: string;
  type: ClusterSectionType;
  title: string;
  content: string;
  /** Optional extra detail shown behind a "Read more" toggle */
  extendedContent?: string;
  /** Optional bullet list rendered under the paragraph */
  bullets?: string[];
  /** Optional key-point callout boxes rendered after the bullets */
  keyPoints?: Array<{ title: string; description: string; icon?: string }>;
  /** Audience / differentiator cards */
  items?: Array<{ title: string; description: string; icon?: string }>;
  /** Two-column comparison rows (comparison type). Fields are named
      wyoming/nevada for historical reasons but the columns can be
      relabeled via `comparisonColumnLabels` for non-WY/NV comparisons. */
  comparisonRows?: ClusterComparisonRow[];
  /** Override the default "Wyoming" / "Nevada" table headers. Use when
      the comparison is something other than WY vs NV (e.g. "Private
      Structure" vs "Direct CA Formation" on CA/FL private clusters). */
  comparisonColumnLabels?: { left: string; right: string };
  /** Pricing breakdown rows (pricing type) */
  pricingRows?: ClusterPricingRow[];
  /** Footer note under a pricing table */
  pricingNote?: string;
}

export interface ClusterPullQuote {
  /** The main statement */
  quote: string;
  /** Optional attribution line */
  attribution?: string;
  /** Optional large decorative background text */
  bgText?: string;
}

export interface ClusterContent {
  slug: string;
  pillar: PillarName;
  pillarLabel: string;
  title: string;
  description: string;
  /** Optional override — computed from content when omitted */
  readingTime?: string;
  sections: ClusterSection[];
  faqs: FAQItem[];
  sidebarLinks: Array<{ title: string; href: string }>;
  relatedPackages: string[];
  /** Optional pull quote rendered between content sections */
  pullQuote?: ClusterPullQuote;
  /** Optional custom WhereToGoNext suggestions */
  suggestions?: Array<{ title: string; description: string; href: string }>;
  crossPillarCTA?: {
    pillar: PillarName;
    title: string;
    description: string;
    href: string;
  };
}

/** Comparison Pages */
export interface ComparisonPage {
  slug: string;
  pillar: PillarName;
  title: string;
  description: string;
  verdict: { winner: string; summary: string };
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  decisionGuide: {
    chooseA: { title: string; reasons: string[] };
    chooseB: { title: string; reasons: string[] };
    identical: string[];
  };
  relatedPackages: string[];
  faqs: FAQItem[];
  /** Optional legal/tax disclaimer rendered prominently above the table */
  disclaimer?: string;
  /** Optional parent pillar breadcrumb override — defaults derived from pillar */
  breadcrumbParent?: { label: string; href: string };
  /** Optional SEO title override */
  seoTitle?: string;
  /** Optional SEO meta description */
  seoMetaDescription?: string;
}

/** State Hub Pages */
export interface StateFact {
  label: string;
  value: string;
}

export interface StateAdvantage {
  icon: string;
  title: string;
  description: string;
}

export interface IntentRoute {
  pillar: PillarName;
  title: string;
  description: string;
  links: Array<{ label: string; href: string }>;
  cta: { label: string; href: string };
  packageLink?: { label: string; href: string };
}

/** Section 6 — compact state comparison table (WY vs NV, CA direct vs WY+foreign, etc.) */
export interface StateComparisonRow {
  label: string;
  tooltip?: string;
  values: Record<string, string>;
}

export interface StateComparisonColumn {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export interface StateComparison {
  eyebrow: string;
  title: string;
  columns: StateComparisonColumn[];
  rows: StateComparisonRow[];
  /** Column id to visually highlight as the recommended choice */
  highlightColumnId: string;
  /** Short recommendation paragraph below the table */
  summary: string;
  /** Deep-link CTAs to full comparison / other hub pages */
  ctas: Array<{ label: string; href: string }>;
}

export interface StateHub {
  slug: string;
  name: string;
  abbreviation: string;
  subtitle: string;
  facts: StateFact[];
  advantages: StateAdvantage[];
  intentRoutes: IntentRoute[];
  contentMap: Record<PillarName, Array<{ title: string; href: string }>>;
  packages: string[];
  faqs: FAQItem[];
  /** Optional Section 6 comparison block (WY vs NV, CA problem/solution, etc.) */
  comparison?: StateComparison;
}

/** About Page */
export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface AboutData {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  story?: {
    heading: string;
    paragraphs: string[];
  };
  founder: {
    name: string;
    title: string;
    location: string;
    bio: string[];
    trustTags: string[];
  };
  timeline: TimelineMilestone[];
  philosophy: Array<{ title: string; description: string; icon: string }>;
  stats: Array<{ value: string; label: string }>;
  differentiators?: string[];
  office: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    leadLine?: string;
  };
}

/** Contact Page */
export interface ContactMethod {
  type: "phone" | "form" | "email";
  icon: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
}

export interface ContactData {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  methods: ContactMethod[];
  formFields: Array<{
    name: string;
    label: string;
    type: string;
    required?: boolean;
    options?: string[];
    placeholder?: string;
    halfWidth?: boolean;
    conditionalOn?: string;
    conditionalValues?: string[];
  }>;
  quickLinks: Array<{
    icon: string;
    title: string;
    description: string;
    href: string;
  }>;
}

/** Checkout */
export interface CheckoutState {
  step: number;
  selectedState: string;
  entityType: EntityType;
  selectedTier: string;
  selectedAddOns: string[];
  companyDetails: {
    name1: string;
    name2: string;
    name3: string;
    purpose: string;
    members: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    specialInstructions: string;
  };
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  paymentMethod: "credit-card" | "paypal" | "crypto";
}

export interface CheckoutTimelineStep {
  label: string;
  description: string;
  duration: string;
}

/** Offshore Jurisdictions */
export interface JurisdictionEntityType {
  /** Entity type key, e.g. "llc" */
  id: string;
  /** Display label, e.g. "Nevis LLC" */
  name: string;
  /** Statutory framework reference */
  framework?: string;
  /** 4-6 bullet features for the comparison column */
  features: string[];
  /** Formation cost, display string, e.g. "$2,060" */
  formationCost: string;
  /** Annual renewal, display string, e.g. "$1,535/yr" */
  annualRenewal: string;
  /** Best-for label */
  bestFor: string;
  /** Marks this as the recommended entity type */
  recommended?: boolean;
}

export interface JurisdictionFormationStep {
  title: string;
  description: string;
}

export interface JurisdictionCombinedStructure {
  title: string;
  description: string;
  link?: { label: string; href: string };
}

export interface JurisdictionPricing {
  inclusions: string[];
  additionalCosts: Array<{ label: string; price: string }>;
  renewalInclusions: string[];
}

export interface OffshoreJurisdiction {
  slug: string;
  name: string;
  /** Jurisdiction country/region label, e.g. "St. Kitts and Nevis" */
  region?: string;
  /** Entity type label for hub card subtitle, e.g. "LLC & Corporation" */
  entityType?: string;
  /** Short tagline for hub card (1 sentence key advantage) */
  tagline?: string;
  description: string;
  /** Starting formation cost — display string like "$2,060" */
  startingPrice?: string;
  /** Annual renewal cost — display string like "$1,535/yr" */
  annualRenewal?: string;
  /** Formation timeline, e.g. "2–3 weeks" */
  timeline?: string;
  /** Whether this jurisdiction is in the primary spec set (Nevis/BVI/Panama/HK) */
  primary?: boolean;
  /** Note for prototype display, e.g. "Pricing pending David confirmation" */
  pricingNote?: string;
  /** Jurisdiction hero tagline — short, appears under H1 */
  heroTagline?: string;
  /** 3-item stat strip for the hero */
  stats?: Array<{ label: string; value: string }>;
  advantages: Array<{ icon: string; title: string; description: string }>;
  /** Entity types available (used for LLC vs. Corp comparison section) */
  entityTypes?: JurisdictionEntityType[];
  /** Recommendation text shown below the entity comparison */
  entityRecommendation?: string;
  /** KYC documents required for formation */
  kycRequirements?: string[];
  /** Ordered formation process steps */
  formationSteps?: JurisdictionFormationStep[];
  /** Detailed pricing breakdown */
  pricing?: JurisdictionPricing;
  /** Combined-structure patterns linking to domestic offerings */
  combinedStructures?: JurisdictionCombinedStructure[];
  sections: Array<{
    id: string;
    type: "text" | "comparison" | "audience" | "differentiator";
    title: string;
    content: string;
    items?: Array<{ title: string; description: string; icon?: string }>;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
    category: string;
  }>;
  relatedPackages: string[];
}

export interface OffshoreData {
  hub: {
    headline: string;
    subheadline: string;
    description: string;
    /** Hub-level FAQ items (rendered on /offshore/ itself) */
    hubFaqs?: Array<{ id: string; question: string; answer: string }>;
  };
  jurisdictions: OffshoreJurisdiction[];
}
