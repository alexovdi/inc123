import {
  Shield,
  Lock,
  Building2,
  Clock,
  MapPin,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   Package Wizard — Data definitions
   Flow: Goal → State → Tier/Entity → Result
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Types ──

export type WizardIntent =
  | "privacy"
  | "asset-protection"
  | "formation"
  | "shelf"
  | "ca-fl";

export type WizardTier = "gold" | "silver" | "bronze";
export type WizardState =
  | "wyoming"
  | "nevada"
  | "california"
  | "florida"
  | "unsure";
export type EntityType = "llc" | "corp";

export interface WizardOption {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  badge?: string;
}

export interface WizardQuestion {
  key: string;
  heading: string;
  subheading: string;
}

export interface WizardPackage {
  slug: string;
  name: string;
  prices: { llc: number; corp: number };
  renewal: { llc: number; corp: number };
  badge?: string;
  href: string;
  shortDescription: string;
}

export interface WizardFeature {
  name: string;
  gold: boolean;
  silver: boolean;
  bronze: boolean;
}

// ── Questions ──

export const questions: Record<string, WizardQuestion> = {
  intent: {
    key: "intent",
    heading: "What\u2019s your primary goal?",
    subheading:
      "Choose what matters most \u2014 this determines your recommended package.",
  },
  state: {
    key: "state",
    heading: "Where will you primarily operate?",
    subheading: "Your state determines pricing and available features.",
  },
  tier: {
    key: "tier",
    heading: "Choose your entity type and service level",
    subheading:
      "Pick your entity type first, then select how much ongoing support you need.",
  },
  tierCaFl: {
    key: "tierCaFl",
    heading: "Choose your entity type",
    subheading:
      "The Private package includes full Gold-level formation bundled with your home state registration.",
  },
};

// ── Step 1: Intent Options ──

export const intentOptions: WizardOption[] = [
  {
    id: "privacy",
    icon: Shield,
    title: "Business Privacy",
    subtitle:
      "Keep your name off public records with year-round nominee services",
  },
  {
    id: "asset-protection",
    icon: Lock,
    title: "Asset Protection",
    subtitle:
      "Shield personal assets from business liabilities with charging order protection",
  },
  {
    id: "formation",
    icon: Building2,
    title: "Form a Business",
    subtitle: "Set up an LLC or Corporation quickly and correctly",
  },
  {
    id: "shelf",
    icon: Clock,
    title: "Established Entity",
    subtitle: "Acquire a pre-aged company with an established history",
  },
];

// ── Step 2: State Options ──

export const stateOptions: WizardOption[] = [
  {
    id: "wyoming",
    icon: MapPin,
    title: "Wyoming",
    subtitle: "Lowest cost, excellent privacy, minimal annual fees ($50/yr)",
  },
  {
    id: "nevada",
    icon: MapPin,
    title: "Nevada",
    subtitle: "Strongest asset protection, no IRS info sharing",
  },
  {
    id: "california",
    icon: MapPin,
    title: "California",
    subtitle: "I live or operate in CA and need my entity registered there",
  },
  {
    id: "florida",
    icon: MapPin,
    title: "Florida",
    subtitle: "I live or operate in FL and need my entity registered there",
  },
  {
    id: "unsure",
    icon: HelpCircle,
    title: "Not sure yet",
    subtitle: "Help me decide \u2014 show me a comparison",
  },
];

// ── Step 3: Tier Options ──

export interface TierOption {
  id: WizardTier;
  label: string;
  description: string;
}

export const tierOptions: TierOption[] = [
  {
    id: "gold",
    label: "Gold",
    description:
      "Full privacy + compliance. Year-round nominees, offshore records, all filings handled.",
  },
  {
    id: "silver",
    label: "Silver",
    description:
      "Formation + managed compliance. Annual reports, corporate minutes, good standing.",
  },
  {
    id: "bronze",
    label: "Bronze",
    description:
      "Basic formation + registered agent. You handle annual compliance yourself.",
  },
];

// ── State Comparison Data ──

export const stateComparison = {
  headers: ["", "Wyoming", "Nevada", "California", "Florida"],
  rows: [
    ["Gold LLC", "$1,275", "$1,800", "$1,475", "$1,475"],
    ["Annual State Fees", "~$50/yr", "~$350/yr", "~$820/yr*", "~$139/yr"],
    [
      "Privacy",
      "Excellent",
      "Excellent",
      "Good (via WY/NV)",
      "Good (via WY/NV)",
    ],
    ["Asset Protection", "Strong", "Strongest", "Moderate", "Strong"],
    [
      "Best For",
      "Privacy + value",
      "Privacy + AP",
      "CA residents",
      "FL residents",
    ],
  ],
  footnote:
    "*CA includes $800/yr minimum franchise tax for LLCs. CA & FL Private packages bundle a WY/NV Gold formation with foreign state registration.",
};

// ── State Context Notes ──

export function getStateContextNote(intent: WizardIntent): string | null {
  if (intent === "privacy") {
    return "Both Wyoming and Nevada offer excellent privacy. Wyoming is more affordable; Nevada adds stronger asset protection.";
  }
  if (intent === "asset-protection") {
    return "Nevada has the strongest charging order protection. Wyoming is strong and significantly more affordable.";
  }
  return null;
}

// ── Default Tier by Intent ──

export function getDefaultTier(intent: WizardIntent): WizardTier {
  if (intent === "privacy" || intent === "asset-protection") return "gold";
  return "silver";
}

// ── Features by Goal (shown on result) ──

export const featuresByGoal: Record<string, WizardFeature[]> = {
  privacy: [
    {
      name: "Year-Round Nominee Directors",
      gold: true,
      silver: false,
      bronze: false,
    },
    {
      name: "Year-Round Nominee Officers",
      gold: true,
      silver: false,
      bronze: false,
    },
    {
      name: "Offshore Record Storage",
      gold: true,
      silver: false,
      bronze: false,
    },
    {
      name: "State Filing Fees Included",
      gold: true,
      silver: true,
      bronze: true,
    },
    {
      name: "Registered Agent (1 Year)",
      gold: true,
      silver: true,
      bronze: true,
    },
    {
      name: "Corporate Minutes Maintenance",
      gold: true,
      silver: true,
      bronze: false,
    },
  ],
  "asset-protection": [
    {
      name: "Charging Order Protection",
      gold: true,
      silver: true,
      bronze: true,
    },
    {
      name: "Year-Round Nominee Privacy",
      gold: true,
      silver: false,
      bronze: false,
    },
    {
      name: "Offshore Record Storage",
      gold: true,
      silver: false,
      bronze: false,
    },
    {
      name: "Corporate Minutes Maintenance",
      gold: true,
      silver: true,
      bronze: false,
    },
    { name: "Annual Report Filing", gold: true, silver: true, bronze: false },
    {
      name: "Certificate of Good Standing",
      gold: true,
      silver: true,
      bronze: false,
    },
  ],
  formation: [
    {
      name: "State Filing Fees Included",
      gold: true,
      silver: true,
      bronze: true,
    },
    {
      name: "Registered Agent (1 Year)",
      gold: true,
      silver: true,
      bronze: true,
    },
    { name: "Annual Report Filing", gold: true, silver: true, bronze: false },
    {
      name: "Corporate Minutes Maintenance",
      gold: true,
      silver: true,
      bronze: false,
    },
    {
      name: "Certificate of Good Standing",
      gold: true,
      silver: true,
      bronze: false,
    },
    {
      name: "Year-Round Nominee Privacy",
      gold: true,
      silver: false,
      bronze: false,
    },
  ],
};

// ── Package Data ──

export const wizardPackages: Record<string, WizardPackage> = {
  "wyoming-gold": {
    slug: "wyoming-gold",
    name: "Wyoming Gold",
    prices: { llc: 1275, corp: 1575 },
    renewal: { llc: 525, corp: 625 },
    badge: "Most Popular",
    href: "/packages/wyoming-gold",
    shortDescription: "Maximum privacy with lowest formation cost",
  },
  "wyoming-silver": {
    slug: "wyoming-silver",
    name: "Wyoming Silver",
    prices: { llc: 875, corp: 1175 },
    renewal: { llc: 325, corp: 425 },
    href: "/packages/wyoming-silver",
    shortDescription: "Professional compliance without nominees",
  },
  "nevada-gold": {
    slug: "nevada-gold",
    name: "Nevada Gold",
    prices: { llc: 1800, corp: 2100 },
    renewal: { llc: 525, corp: 625 },
    badge: "Premium",
    href: "/packages/nevada-gold",
    shortDescription: "Strongest asset protection + full privacy",
  },
  "nevada-silver": {
    slug: "nevada-silver",
    name: "Nevada Silver",
    prices: { llc: 1275, corp: 1575 },
    renewal: { llc: 325, corp: 425 },
    href: "/packages/nevada-silver",
    shortDescription: "Professional NV formation with compliance",
  },
  "nevada-bronze": {
    slug: "nevada-bronze",
    name: "Nevada Bronze",
    prices: { llc: 699, corp: 899 },
    renewal: { llc: 225, corp: 325 },
    href: "/packages/nevada-bronze",
    shortDescription: "Affordable NV formation, you manage compliance",
  },
  "california-private": {
    slug: "california-private",
    name: "California Private",
    prices: { llc: 1475, corp: 1775 },
    renewal: { llc: 525, corp: 625 },
    href: "/packages/california-private",
    shortDescription: "Privacy formation bundled with CA registration",
  },
  "florida-private": {
    slug: "florida-private",
    name: "Florida Private",
    prices: { llc: 1475, corp: 1775 },
    renewal: { llc: 525, corp: 625 },
    href: "/packages/florida-private",
    shortDescription: "Privacy formation bundled with FL registration",
  },
  shelf: {
    slug: "shelf",
    name: "Shelf Companies",
    prices: { llc: 0, corp: 0 },
    renewal: { llc: 0, corp: 0 },
    href: "/packages/shelf-companies",
    shortDescription: "Pre-formed companies with established history",
  },
};

// ── Price Helpers ──

export function getPackagePrice(
  stateId: string,
  tier: WizardTier,
  entity: EntityType,
): number | null {
  if (stateId === "california" || stateId === "florida") {
    const pkg = wizardPackages[`${stateId}-private`];
    return pkg ? pkg.prices[entity] : null;
  }
  const pkg = wizardPackages[`${stateId}-${tier}`];
  return pkg ? pkg.prices[entity] : null;
}
