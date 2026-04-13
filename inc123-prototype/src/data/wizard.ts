import {
  Building2,
  Shield,
  Globe,
  MapPin,
  ShieldCheck,
  Eye,
  EyeOff,
  type LucideIcon,
} from "lucide-react";
import { packages } from "./packages";
import type { EntityType } from "@/lib/types";

/* ═══════════════════════════════════════════════════════════════════════════
   Package Wizard — Data definitions (v2)
   Flow: Branch → Business Type / AP State → Privacy Question → Result
   2-branch model per David's April 1 meeting
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Types ──

export type WizardBranch = "formation" | "ap";
export type WizardBusinessType = "virtual" | "brick-mortar";
export type WizardFormationState = "wyoming" | "nevada";
export type WizardOperatingState = "california" | "florida" | "other";
export type WizardTier = "gold" | "silver" | "bronze";
export type WizardStepId =
  | "start"
  | "business-type"
  | "ap-state"
  | "bm-state"
  | "privacy"
  | "result";

export type { EntityType };

export interface WizardOption {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  badge?: string;
}

export interface WizardQuestion {
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
  features: string[];
}

// ── Questions ──

export const questions: Record<string, WizardQuestion> = {
  start: {
    heading: "What brings you here?",
    subheading: "We\u2019ll recommend the best package for your needs.",
  },
  businessType: {
    heading: "What type of business?",
    subheading: "This determines which state and structure works best for you.",
  },
  apState: {
    heading: "Where do you want to form?",
    subheading: "Wyoming is recommended for most asset protection needs.",
  },
  bmState: {
    heading: "Which state do you operate in?",
    subheading:
      "We\u2019ll form in Wyoming and register in your state for full compliance.",
  },
  privacy: {
    heading: "Do you want your name kept off public records?",
    subheading: "This is the key difference between our packages.",
  },
};

// ── Step 1: Branch Options (2 cards) ──

export const branchOptions: WizardOption[] = [
  {
    id: "formation",
    icon: Building2,
    title: "Business Formation",
    subtitle:
      "Start an LLC or Corporation \u2014 form your business the right way",
  },
  {
    id: "ap",
    icon: Shield,
    title: "Asset Protection",
    subtitle: "Shield your personal assets from business liabilities",
  },
];

// ── Step 2a: Business Type Options ──

export const businessTypeOptions: WizardOption[] = [
  {
    id: "virtual",
    icon: Globe,
    title: "Virtual / Remote",
    subtitle: "Operate from anywhere \u2014 no physical location required",
  },
  {
    id: "brick-mortar",
    icon: MapPin,
    title: "Brick-and-Mortar",
    subtitle: "Physical presence in a specific state",
  },
];

// ── Step 2b: AP State Options ──

export const apStateOptions: WizardOption[] = [
  {
    id: "wyoming",
    icon: ShieldCheck,
    title: "Wyoming",
    subtitle: "Lowest cost, strongest privacy, excellent asset protection",
    badge: "Recommended",
  },
  {
    id: "nevada",
    icon: ShieldCheck,
    title: "Nevada",
    subtitle: "Strongest charging order protection, no IRS info-sharing",
  },
];

// ── Step 2c: Brick-and-Mortar State Options ──

export const bmStateOptions: WizardOption[] = [
  {
    id: "california",
    icon: MapPin,
    title: "California",
    subtitle: "WY formation + CA foreign registration",
  },
  {
    id: "florida",
    icon: MapPin,
    title: "Florida",
    subtitle: "WY formation + FL foreign registration",
  },
  {
    id: "other",
    icon: MapPin,
    title: "Another State",
    subtitle: "WY formation + foreign registration in your state",
  },
];

// ── Step 3: Privacy Decision Options ──

export const privacyOptions: WizardOption[] = [
  {
    id: "yes",
    icon: Eye,
    title: "Yes \u2014 keep my name private",
    subtitle:
      "Year-round nominees appear on all public filings instead of your name",
  },
  {
    id: "no",
    icon: EyeOff,
    title: "No \u2014 I don\u2019t need that",
    subtitle:
      "Your name will appear on state records, but you\u2019ll save on costs",
  },
];

// ── Package Data (prices derived from canonical packages.ts) ──

const canonicalPrices = Object.fromEntries(
  packages.map((pkg) => [
    pkg.id,
    {
      prices: {
        llc: pkg.prices.llc.formation,
        corp: pkg.prices.corp.formation,
      },
      renewal: { llc: pkg.prices.llc.renewal, corp: pkg.prices.corp.renewal },
    },
  ]),
);

export const wizardPackages: Record<string, WizardPackage> = {
  "wyoming-gold": {
    slug: "wyoming-gold",
    name: "Wyoming Gold",
    ...canonicalPrices["wyoming-gold"],
    badge: "Most Popular",
    href: "/wyoming-gold",
    shortDescription:
      "Maximum privacy — your name stays off all public filings",
    features: [
      "Year-round nominee director / manager",
      "Year-round nominee officers",
      "Virtual office + weekly mail forwarding",
      "EIN + operating agreement + compliance",
    ],
  },
  "wyoming-silver": {
    slug: "wyoming-silver",
    name: "Wyoming Silver",
    ...canonicalPrices["wyoming-silver"],
    href: "/wyoming-silver",
    shortDescription: "Virtual office, EIN, and compliance — without nominees",
    features: [
      "Virtual office address",
      "Weekly mail forwarding",
      "EIN obtainment included",
      "Full compliance + operating agreement",
    ],
  },
  "wyoming-bronze": {
    slug: "wyoming-bronze",
    name: "Wyoming Bronze",
    ...canonicalPrices["wyoming-bronze"],
    href: "/wyoming-bronze",
    shortDescription:
      "Affordable formation + compliance. No VO, no EIN, no nominees.",
    features: [
      "Registered agent (1 year)",
      "State filing fees + document prep",
      "Custom operating agreement",
      "Corporate records & minutes",
    ],
  },
  "nevada-gold": {
    slug: "nevada-gold",
    name: "Nevada Gold",
    ...canonicalPrices["nevada-gold"],
    badge: "Premium",
    href: "/nevada-gold",
    shortDescription: "Nevada formation + full privacy + NV business license",
    features: [
      "Year-round nominee director / manager + officers",
      "Virtual office + weekly mail forwarding",
      "NV business license included",
      "EIN + operating agreement + compliance",
    ],
  },
  "nevada-silver": {
    slug: "nevada-silver",
    name: "Nevada Silver",
    ...canonicalPrices["nevada-silver"],
    href: "/nevada-silver",
    shortDescription:
      "Nevada formation with virtual office, EIN, and business license",
    features: [
      "Virtual office address",
      "Weekly mail forwarding",
      "EIN + NV business license",
      "Full compliance + operating agreement",
    ],
  },
  "nevada-bronze": {
    slug: "nevada-bronze",
    name: "Nevada Bronze",
    ...canonicalPrices["nevada-bronze"],
    href: "/nevada-bronze",
    shortDescription:
      "Affordable Nevada formation with business license included",
    features: [
      "Registered agent (1 year)",
      "NV business license included",
      "Custom operating agreement",
      "Corporate records & minutes",
    ],
  },
  "california-private": {
    slug: "california-private",
    name: "California Private",
    ...canonicalPrices["california-private"],
    badge: "All-in-One",
    href: "/california-private",
    shortDescription: "WY Gold pre-bundled with CA foreign registration + RA",
    features: [
      "Full WY Gold feature set (nominees, VO, EIN)",
      "CA foreign state registration",
      "CA registered agent",
      "Compliance handled in both states",
    ],
  },
  "florida-private": {
    slug: "florida-private",
    name: "Florida Private",
    ...canonicalPrices["florida-private"],
    badge: "All-in-One",
    href: "/florida-private",
    shortDescription: "WY Gold pre-bundled with FL foreign registration + RA",
    features: [
      "Full WY Gold feature set (nominees, VO, EIN)",
      "FL foreign state registration",
      "FL registered agent",
      "Compliance handled in both states",
    ],
  },
};
