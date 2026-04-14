import type {
  PackageTier,
  PackageAddOn,
  TierDefinition,
  TierLevel,
  EntityType,
} from "@/lib/types";

/* ═══════════════════════════════════════════════════════════════════════════
   CANONICAL SOURCE OF TRUTH
   Feature matrix locked per David × Alex meeting 2026-04-13.
   Spreadsheet: DOCS/Meeting Preps/Meeting Prep Apr 6/Incorporate123_Packages_v3.xlsx
   See:         DOCS/Meeting Preps/Meeting Prep Apr 20/04_Package_Tier_Definitions_v3.md

   Tier logic:
     Bronze = Formation + Compliance (no VO, no EIN, no nominees)
     Silver = Bronze + EIN + Virtual Office + Mail Forwarding
     Gold   = Silver + Year-Round Nominees

   EIN is the ONLY formation-side item that's Silver/Gold-exclusive.
   Custom Operating Agreement is included in ALL tiers (including Bronze).
   NV Business License only appears on Nevada packages.
   CA Private / FL Private are Gold-tier WY formations + foreign registration + foreign RA.
   Shelf is a separate two-step purchase flow (not a column in the comparison matrix).

   Pricing status: base formation prices are placeholders pending David's Apr 20 confirmation.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ------------------------------------------------
   Add-Ons & Upgrades
   ------------------------------------------------ */

/** 3 Government Filing Services — true add-ons per Apr 13 terminology. */
const governmentFilingAddOns: PackageAddOn[] = [
  {
    id: "foreign-state-filing",
    name: "Foreign State Registration Filing",
    price: 0,
    priceTBD: true,
    description:
      "Register your WY or NV entity to do business in another state. Available for all 50 US states. Includes both the filing and the registered agent service in the foreign state.",
    tooltip:
      "Required when you operate in a state other than where your entity is formed",
    category: "government-filing",
  },
  {
    id: "domestication-filing",
    name: "Domestication Filing",
    price: 0,
    priceTBD: true,
    description:
      "Move your existing entity from another state into Wyoming or Nevada while preserving entity history and EIN.",
    tooltip: "Destination is Wyoming or Nevada only",
    category: "government-filing",
  },
  {
    id: "dba-filing",
    name: "Corporate DBA Filing",
    price: 0,
    priceTBD: true,
    description:
      "File a Doing Business As (fictitious name) for your entity — useful if you market under a different name than your legal entity name.",
    category: "government-filing",
  },
];

/**
 * 3 Service Upgrades — attach to compatible base packages per Apr 13 terminology.
 *
 * Eligibility rules derive from the legacy 15-package lineup:
 *   - Executive VO existed ONLY on NV Silver Exec / NV Gold Exec (physical Reno product) → NV Silver/Gold.
 *   - Part-Time Private Suite existed ONLY on NV Silver MAX / NV Gold MAX → NV Silver/Gold.
 *   - Privacy Services replaced the legacy Bronze+ / non-nominee tiers → Bronze & Silver only
 *     (hidden on Gold, where year-round nominees are already included).
 */
const serviceUpgrades: PackageAddOn[] = [
  {
    id: "privacy-services-upgrade",
    name: "Privacy Services Upgrade",
    price: 0,
    priceTBD: true,
    description:
      "Adds year-round nominee director / manager + officers. Effectively takes Bronze or Silver to Gold-level privacy.",
    tooltip:
      "Nominees appear on all public filings year-round, not just at formation",
    category: "service-upgrade",
    appliesTo: {
      // Gold already includes year-round nominees — hide to avoid redundant purchase.
      tiers: ["bronze", "silver"],
    },
  },
  {
    id: "executive-vo-upgrade",
    name: "Executive Virtual Office Upgrade",
    price: 0,
    priceTBD: true,
    description:
      "Upgrade the basic virtual office that ships with Silver and Gold to an executive-grade VO at the Reno office.",
    tooltip:
      "Nevada only — requires a base VO (Silver or Gold). Wyoming packages are not eligible.",
    category: "service-upgrade",
    appliesTo: {
      tiers: ["silver", "gold"],
      states: ["Nevada"],
    },
  },
  {
    id: "part-time-private-suite-upgrade",
    name: "Part-Time Private Suite Upgrade",
    price: 0,
    priceTBD: true,
    description:
      "Physical part-time private suite access at the Reno, Nevada office. Adds real-world presence on top of Silver or Gold.",
    tooltip: "Nevada only — the suite is a physical product at our Reno office",
    category: "service-upgrade",
    appliesTo: {
      tiers: ["silver", "gold"],
      states: ["Nevada"],
    },
  },
];

/**
 * Combined upgrade inventory attached to every package.
 * Order matters for UI rendering: government filings first, then service upgrades.
 * Crypto payment was removed — it's a checkout payment method, not a product upgrade.
 * Rush Filing was removed — not in David's locked Apr 13 list.
 */
const sharedAddOns: PackageAddOn[] = [
  ...governmentFilingAddOns,
  ...serviceUpgrades,
];

export { governmentFilingAddOns, serviceUpgrades, sharedAddOns as allAddOns };

/**
 * Filter the shared upgrade inventory for a given (tier, state) context.
 * Used on package detail pages and in /checkout/configure so both surfaces
 * show the same, properly gated upgrade list.
 *
 * @param tierSlug - Target tier ("bronze" | "silver" | "gold")
 * @param stateName - Formation state ("Wyoming", "Nevada", "California", "Florida")
 */
export function getAddOnsForContext(
  tierSlug: TierLevel,
  stateName: string,
): PackageAddOn[] {
  return sharedAddOns.filter((addOn) => {
    if (!addOn.appliesTo) return true;
    const { tiers, states } = addOn.appliesTo;
    if (tiers && !tiers.includes(tierSlug)) return false;
    if (states && !states.includes(stateName)) return false;
    return true;
  });
}

/* ------------------------------------------------
   Feature helpers — build the canonical v3 matrix cleanly
   ------------------------------------------------ */

// FORMATION — all tiers
const FEATURE_STATE_FILING_FEES = {
  name: "State Filing Fees Included",
  status: "included" as const,
  tooltip: "All state filing fees are included — no hidden charges",
};
const FEATURE_DOC_PREP = {
  name: "Document Preparation",
  status: "included" as const,
};
const FEATURE_OPERATING_AGREEMENT = {
  name: "Custom Operating Agreement",
  status: "included" as const,
  tooltip: "Professionally drafted operating agreement tailored to your entity",
};
const FEATURE_BANK_ACCT_DOCS = {
  name: "Bank Account Opening Document Package",
  status: "included" as const,
  tooltip:
    "Complete document package to open a business bank account. We do not open the account for you.",
};

// EIN — Silver & Gold only
const FEATURE_EIN_INCLUDED = {
  name: "EIN Obtainment",
  status: "included" as const,
  tooltip:
    "We obtain your federal Employer Identification Number as part of your package",
};
const FEATURE_EIN_NOT_INCLUDED = {
  name: "EIN Obtainment",
  status: "not-included" as const,
  tooltip: "Upgrade to Silver or Gold to include EIN obtainment",
};

// NV-only — Nevada Business License
const FEATURE_NV_BUSINESS_LICENSE = {
  name: "NV Business License",
  status: "included" as const,
  tooltip: "Initial Nevada state business license — required by Nevada law",
};

// COMPLIANCE — all tiers
const FEATURE_INITIAL_STATE_FILINGS = {
  name: "Initial State Filings and Fees",
  status: "included" as const,
};
const FEATURE_CORP_RECORDS = {
  name: "Corporate Records & Minutes",
  status: "included" as const,
  tooltip:
    "Professional preparation and maintenance of your corporate minute book",
};
const FEATURE_REGISTERED_AGENT = {
  name: "Registered Agent (1 Year)",
  status: "included" as const,
  tooltip: "Professional registered agent service for one full year",
};
const FEATURE_OFFSHORE_RECORDS = {
  name: "Offshore Records Storage",
  status: "included" as const,
  tooltip: "Corporate records stored outside U.S. jurisdiction",
};

// VIRTUAL PRESENCE — Silver & Gold only
const FEATURE_VO_INCLUDED = {
  name: "Virtual Office Address",
  status: "included" as const,
  tooltip:
    "Professional business address separate from your registered agent address",
};
const FEATURE_VO_NOT_INCLUDED = {
  name: "Virtual Office Address",
  status: "not-included" as const,
  tooltip: "Upgrade to Silver or Gold to include a virtual office address",
};
const FEATURE_MAIL_FORWARDING_INCLUDED = {
  name: "Weekly Mail Forwarding",
  status: "included" as const,
};
const FEATURE_MAIL_FORWARDING_NOT_INCLUDED = {
  name: "Weekly Mail Forwarding",
  status: "not-included" as const,
};

// PRIVACY — Gold only
const FEATURE_NOMINEE_DIRECTOR_INCLUDED = {
  name: "Year-Round Nominee Director / Manager",
  status: "included" as const,
  tooltip:
    "Nominee appears on all public filings year-round, not just at formation",
};
const FEATURE_NOMINEE_DIRECTOR_NOT_INCLUDED = {
  name: "Year-Round Nominee Director / Manager",
  status: "not-included" as const,
  tooltip: "Upgrade to Gold for year-round nominee privacy",
};
const FEATURE_NOMINEE_OFFICERS_INCLUDED = {
  name: "Year-Round Nominee Officers",
  status: "included" as const,
  tooltip: "Nominee officers protect your identity on all corporate filings",
};
const FEATURE_NOMINEE_OFFICERS_NOT_INCLUDED = {
  name: "Year-Round Nominee Officers",
  status: "not-included" as const,
};

// CA / FL specific
const FEATURE_CA_FOREIGN_REG = {
  name: "CA Foreign State Registration",
  status: "included" as const,
  tooltip: "Register your WY-formed entity to do business in California",
};
const FEATURE_CA_REGISTERED_AGENT = {
  name: "CA Registered Agent",
  status: "included" as const,
  tooltip: "Registered agent service in California for one full year",
};
const FEATURE_FL_FOREIGN_REG = {
  name: "FL Foreign State Registration",
  status: "included" as const,
  tooltip: "Register your WY-formed entity to do business in Florida",
};
const FEATURE_FL_REGISTERED_AGENT = {
  name: "FL Registered Agent",
  status: "included" as const,
  tooltip: "Registered agent service in Florida for one full year",
};

/** Features for Bronze tier (no EIN, no VO, no nominees). */
const bronzeFeatures = [
  FEATURE_STATE_FILING_FEES,
  FEATURE_DOC_PREP,
  FEATURE_OPERATING_AGREEMENT,
  FEATURE_BANK_ACCT_DOCS,
  FEATURE_EIN_NOT_INCLUDED,
  FEATURE_INITIAL_STATE_FILINGS,
  FEATURE_CORP_RECORDS,
  FEATURE_REGISTERED_AGENT,
  FEATURE_OFFSHORE_RECORDS,
  FEATURE_VO_NOT_INCLUDED,
  FEATURE_MAIL_FORWARDING_NOT_INCLUDED,
  FEATURE_NOMINEE_DIRECTOR_NOT_INCLUDED,
  FEATURE_NOMINEE_OFFICERS_NOT_INCLUDED,
];

/** Features for Silver tier (Bronze + EIN + VO + mail forwarding). */
const silverFeatures = [
  FEATURE_STATE_FILING_FEES,
  FEATURE_DOC_PREP,
  FEATURE_OPERATING_AGREEMENT,
  FEATURE_BANK_ACCT_DOCS,
  FEATURE_EIN_INCLUDED,
  FEATURE_INITIAL_STATE_FILINGS,
  FEATURE_CORP_RECORDS,
  FEATURE_REGISTERED_AGENT,
  FEATURE_OFFSHORE_RECORDS,
  FEATURE_VO_INCLUDED,
  FEATURE_MAIL_FORWARDING_INCLUDED,
  FEATURE_NOMINEE_DIRECTOR_NOT_INCLUDED,
  FEATURE_NOMINEE_OFFICERS_NOT_INCLUDED,
];

/** Features for Gold tier (Silver + year-round nominees). */
const goldFeatures = [
  FEATURE_STATE_FILING_FEES,
  FEATURE_DOC_PREP,
  FEATURE_OPERATING_AGREEMENT,
  FEATURE_BANK_ACCT_DOCS,
  FEATURE_EIN_INCLUDED,
  FEATURE_INITIAL_STATE_FILINGS,
  FEATURE_CORP_RECORDS,
  FEATURE_REGISTERED_AGENT,
  FEATURE_OFFSHORE_RECORDS,
  FEATURE_VO_INCLUDED,
  FEATURE_MAIL_FORWARDING_INCLUDED,
  FEATURE_NOMINEE_DIRECTOR_INCLUDED,
  FEATURE_NOMINEE_OFFICERS_INCLUDED,
];

/* ------------------------------------------------
   Legacy flat packages array (8 core packages + Shelf)
   Kept for backward compat with existing routes and cards.
   NOTE: pricing values are placeholders until David confirms on Apr 20.
   ------------------------------------------------ */

export const packages: PackageTier[] = [
  // ── WYOMING ──
  {
    id: "wyoming-bronze",
    flatSlug: "wyoming-bronze",
    name: "Wyoming Bronze",
    tier: "bronze",
    state: "Wyoming",
    prices: {
      llc: { formation: 625, renewal: 225 },
      corp: { formation: 625, renewal: 225 },
    },
    description:
      "Wyoming formation with full compliance handling. Everything you need to incorporate and stay in good standing — without virtual office or nominee privacy. The affordable entry point for small businesses.",
    features: bronzeFeatures,
    addOns: sharedAddOns,
  },
  {
    id: "wyoming-silver",
    flatSlug: "wyoming-silver",
    name: "Wyoming Silver",
    tier: "silver",
    state: "Wyoming",
    prices: {
      llc: { formation: 875, renewal: 325 },
      corp: { formation: 1175, renewal: 425 },
    },
    description:
      "Wyoming formation with virtual office, weekly mail forwarding, and EIN included. The mainstream choice for online businesses who want their home address off public records.",
    features: silverFeatures,
    addOns: sharedAddOns,
  },
  {
    id: "wyoming-gold",
    flatSlug: "wyoming-gold",
    name: "Wyoming Gold",
    tier: "gold",
    state: "Wyoming",
    prices: {
      llc: { formation: 1275, renewal: 525 },
      corp: { formation: 1575, renewal: 625 },
    },
    description:
      "Complete privacy package with year-round nominee directors, managers, and officers. Your name never appears on public records. Our most popular privacy-focused package.",
    badge: "Most Popular",
    highlighted: true,
    features: goldFeatures,
    addOns: sharedAddOns,
  },
  // ── NEVADA ──
  {
    id: "nevada-bronze",
    flatSlug: "nevada-bronze",
    name: "Nevada Bronze",
    tier: "bronze",
    state: "Nevada",
    prices: {
      llc: { formation: 699, renewal: 225 },
      corp: { formation: 899, renewal: 325 },
    },
    description:
      "Nevada formation including the required state business license. Compliance, registered agent, and operating agreement handled. No virtual office or nominees.",
    features: [...bronzeFeatures, FEATURE_NV_BUSINESS_LICENSE],
    addOns: sharedAddOns,
  },
  {
    id: "nevada-silver",
    flatSlug: "nevada-silver",
    name: "Nevada Silver",
    tier: "silver",
    state: "Nevada",
    prices: {
      llc: { formation: 1275, renewal: 325 },
      corp: { formation: 1575, renewal: 425 },
    },
    description:
      "Nevada formation with EIN, virtual office, weekly mail forwarding, and business license included. Ideal for businesses with an actual Nevada presence who want professional infrastructure.",
    features: [...silverFeatures, FEATURE_NV_BUSINESS_LICENSE],
    addOns: sharedAddOns,
  },
  {
    id: "nevada-gold",
    flatSlug: "nevada-gold",
    name: "Nevada Gold",
    tier: "gold",
    state: "Nevada",
    prices: {
      llc: { formation: 1800, renewal: 525 },
      corp: { formation: 2100, renewal: 625 },
    },
    description:
      "Premium Nevada formation with year-round nominees, virtual office, EIN, business license, and full compliance. Maximum privacy in a Nevada-formed entity.",
    badge: "Premium",
    highlighted: true,
    features: [...goldFeatures, FEATURE_NV_BUSINESS_LICENSE],
    addOns: sharedAddOns,
  },
  // ── CA & FL Private (Gold-tier WY formations with foreign reg + RA) ──
  {
    id: "california-private",
    flatSlug: "california-private",
    name: "California Private",
    tier: "gold",
    state: "California",
    prices: {
      llc: { formation: 1475, renewal: 525 },
      corp: { formation: 1775, renewal: 625 },
    },
    description:
      "Wyoming Gold formation pre-bundled with California foreign registration and a California registered agent. Full Gold-tier privacy for California operators — everything in one package.",
    badge: "Privacy",
    features: [
      ...goldFeatures,
      FEATURE_CA_FOREIGN_REG,
      FEATURE_CA_REGISTERED_AGENT,
    ],
    addOns: sharedAddOns,
  },
  {
    id: "florida-private",
    flatSlug: "florida-private",
    name: "Florida Private",
    tier: "gold",
    state: "Florida",
    prices: {
      llc: { formation: 1475, renewal: 525 },
      corp: { formation: 1775, renewal: 625 },
    },
    description:
      "Wyoming Gold formation pre-bundled with Florida foreign registration and a Florida registered agent. Full Gold-tier privacy for Florida operators — everything in one package.",
    badge: "Privacy",
    features: [
      ...goldFeatures,
      FEATURE_FL_FOREIGN_REG,
      FEATURE_FL_REGISTERED_AGENT,
    ],
    addOns: sharedAddOns,
  },
  // ── Shelf — separate two-step flow, not a column in the comparison table ──
  {
    id: "shelf-companies",
    flatSlug: "shelf-companies",
    name: "Shelf Company",
    tier: "gold",
    state: "Wyoming",
    prices: {
      llc: { formation: 2500, renewal: 525 },
      corp: { formation: 2800, renewal: 625 },
    },
    description:
      "Pre-formed aged entity with established formation date. Choose a shelf entity, then attach Bronze / Silver / Gold tier. Useful when you need entity age for credibility or contracts.",
    badge: "Pre-Aged",
    features: [
      {
        name: "Pre-Aged Entity (1–5 years)",
        status: "included",
        tooltip:
          "Formation date predates today — exact age depends on available inventory",
      },
      {
        name: "Clean History Guaranteed",
        status: "included",
        tooltip: "No prior business activity, liens, or liabilities",
      },
      ...goldFeatures,
    ],
    addOns: sharedAddOns,
  },
];

/* ------------------------------------------------
   Tier-First Architecture
   Bronze / Silver / Gold tiers with state variants
   ------------------------------------------------ */

export const tierDefinitions: TierDefinition[] = [
  {
    tier: "bronze",
    slug: "bronze",
    name: "Bronze",
    tagline: "Formation + Compliance",
    description:
      "Affordable formation with full compliance handling — state filings, registered agent, corporate records, operating agreement, and bank account documents. No virtual office, no EIN, no nominees. The entry point for budget-conscious businesses who already have a physical address.",
    availableStates: ["Wyoming", "Nevada"],
    features: bronzeFeatures,
    stateVariants: {
      Wyoming: {
        state: "Wyoming",
        abbreviation: "WY",
        prices: {
          llc: { formation: 625, renewal: 225 },
          corp: { formation: 625, renewal: 225 },
        },
        legacyId: "wyoming-bronze",
      },
      Nevada: {
        state: "Nevada",
        abbreviation: "NV",
        prices: {
          llc: { formation: 699, renewal: 225 },
          corp: { formation: 899, renewal: 325 },
        },
        extraFeatures: [FEATURE_NV_BUSINESS_LICENSE],
        legacyId: "nevada-bronze",
      },
    },
    addOns: sharedAddOns,
  },
  {
    tier: "silver",
    slug: "silver",
    name: "Silver",
    tagline: "Bronze + Virtual Presence",
    description:
      "Everything in Bronze plus EIN obtainment, a virtual office address, and weekly mail forwarding. The mainstream choice for online businesses who want a real business address that isn't their home.",
    availableStates: ["Wyoming", "Nevada"],
    features: silverFeatures,
    stateVariants: {
      Wyoming: {
        state: "Wyoming",
        abbreviation: "WY",
        prices: {
          llc: { formation: 875, renewal: 325 },
          corp: { formation: 1175, renewal: 425 },
        },
        legacyId: "wyoming-silver",
      },
      Nevada: {
        state: "Nevada",
        abbreviation: "NV",
        prices: {
          llc: { formation: 1275, renewal: 325 },
          corp: { formation: 1575, renewal: 425 },
        },
        extraFeatures: [FEATURE_NV_BUSINESS_LICENSE],
        legacyId: "nevada-silver",
      },
    },
    addOns: sharedAddOns,
  },
  {
    tier: "gold",
    slug: "gold",
    name: "Gold",
    tagline: "Silver + Year-Round Nominee Privacy",
    description:
      "Complete privacy package. Everything in Silver plus year-round nominee director/manager and nominee officers. Your name never appears on public filings. The only feature-level difference from Silver is nominees — that's the privacy decision.",
    badge: "Most Popular",
    highlighted: true,
    availableStates: ["Wyoming", "Nevada", "California", "Florida"],
    features: goldFeatures,
    stateVariants: {
      Wyoming: {
        state: "Wyoming",
        abbreviation: "WY",
        prices: {
          llc: { formation: 1275, renewal: 525 },
          corp: { formation: 1575, renewal: 625 },
        },
        description:
          "Complete privacy package with year-round nominee directors, managers, and officers. Your name never appears on public records. Our most popular privacy-focused package.",
        legacyId: "wyoming-gold",
      },
      Nevada: {
        state: "Nevada",
        abbreviation: "NV",
        prices: {
          llc: { formation: 1800, renewal: 525 },
          corp: { formation: 2100, renewal: 625 },
        },
        extraFeatures: [FEATURE_NV_BUSINESS_LICENSE],
        description:
          "Premium Nevada formation with year-round nominees, virtual office, EIN, business license, and full compliance. Maximum privacy in a Nevada-formed entity.",
        legacyId: "nevada-gold",
      },
      California: {
        state: "California",
        abbreviation: "CA",
        prices: {
          llc: { formation: 1475, renewal: 525 },
          corp: { formation: 1775, renewal: 625 },
        },
        extraFeatures: [FEATURE_CA_FOREIGN_REG, FEATURE_CA_REGISTERED_AGENT],
        description:
          "Wyoming Gold formation pre-bundled with California foreign registration and a California registered agent. Full Gold-tier privacy for California operators.",
        legacyId: "california-private",
      },
      Florida: {
        state: "Florida",
        abbreviation: "FL",
        prices: {
          llc: { formation: 1475, renewal: 525 },
          corp: { formation: 1775, renewal: 625 },
        },
        extraFeatures: [FEATURE_FL_FOREIGN_REG, FEATURE_FL_REGISTERED_AGENT],
        description:
          "Wyoming Gold formation pre-bundled with Florida foreign registration and a Florida registered agent. Full Gold-tier privacy for Florida operators.",
        legacyId: "florida-private",
      },
    },
    addOns: sharedAddOns,
  },
];

/* ------------------------------------------------
   Tier Helper Functions
   ------------------------------------------------ */

/** Get a tier definition by its slug ("bronze", "silver", "gold") */
export function getTierBySlug(slug: string): TierDefinition | undefined {
  return tierDefinitions.find((t) => t.slug === slug);
}

/** Get pricing for a tier in a specific state. Returns null if state not available. */
export function getTierPrice(
  tier: TierDefinition,
  state: string,
  entityType: EntityType,
): { formation: number; renewal: number } | null {
  const variant = tier.stateVariants[state];
  return variant ? variant.prices[entityType] : null;
}

/** Get the minimum "from" price across all available states for a tier */
export function getTierMinPrice(
  tier: TierDefinition,
  entityType: EntityType = "llc",
): number {
  return Math.min(
    ...Object.values(tier.stateVariants).map(
      (v) => v.prices[entityType].formation,
    ),
  );
}

/** Get all tiers available in a given state */
export function getAvailableTiersForState(state: string): TierDefinition[] {
  return tierDefinitions.filter((t) => t.availableStates.includes(state));
}

/**
 * Canonical flat URL for a given (tier, state) combination.
 * Returns the path only (no protocol/host), e.g. "/wyoming-gold".
 *
 * Maps:
 *  - Wyoming/Nevada + Bronze/Silver/Gold → /{state}-{tier}
 *  - California + Gold                    → /california-private
 *  - Florida + Gold                       → /florida-private
 *
 * Falls back to /packages if the combination is not a valid published package.
 */
export function getPackageUrl(tierSlug: string, state: string): string {
  const t = tierSlug.toLowerCase();
  const s = state.toLowerCase();
  if (s === "california") return "/california-private";
  if (s === "florida") return "/florida-private";
  if (s === "wyoming" || s === "nevada") {
    if (t === "bronze" || t === "silver" || t === "gold") {
      return `/${s}-${t}`;
    }
  }
  return "/packages";
}

/** Get the combined features for a tier in a state (canonical + state extras) */
export function getTierFeaturesForState(
  tier: TierDefinition,
  state: string,
): TierDefinition["features"] {
  const variant = tier.stateVariants[state];
  if (!variant) return tier.features;
  return variant.extraFeatures
    ? [...tier.features, ...variant.extraFeatures]
    : tier.features;
}

/* ------------------------------------------------
   Compare-packages page data
   ------------------------------------------------ */

export const entityOptions = [
  { value: "llc", label: "LLC" },
  { value: "corp", label: "Corporation" },
];

/**
 * Feature rows for the comparison table, in display order matching the v3 spreadsheet.
 * Each entry maps 1:1 to a feature name in the tier feature arrays above.
 */
export const comparisonFeatures = [
  // Formation
  "State Filing Fees Included",
  "Document Preparation",
  "Custom Operating Agreement",
  "Bank Account Opening Document Package",
  "EIN Obtainment",
  // Compliance
  "Initial State Filings and Fees",
  "Corporate Records & Minutes",
  "Registered Agent (1 Year)",
  "Offshore Records Storage",
  // Virtual Presence
  "Virtual Office Address",
  "Weekly Mail Forwarding",
  // Privacy
  "Year-Round Nominee Director / Manager",
  "Year-Round Nominee Officers",
];

/** Grouped feature sections for the comparison table (per v3 spreadsheet layout). */
export const comparisonFeatureGroups = [
  {
    label: "Formation — Included in All Tiers",
    features: [
      "State Filing Fees Included",
      "Document Preparation",
      "Custom Operating Agreement",
      "Bank Account Opening Document Package",
      "EIN Obtainment",
    ],
  },
  {
    label: "Compliance — Included in All Tiers",
    features: [
      "Initial State Filings and Fees",
      "Corporate Records & Minutes",
      "Registered Agent (1 Year)",
      "Offshore Records Storage",
    ],
  },
  {
    label: "Virtual Presence — Silver & Gold",
    features: ["Virtual Office Address", "Weekly Mail Forwarding"],
  },
  {
    label: "Privacy — Gold Only",
    features: [
      "Year-Round Nominee Director / Manager",
      "Year-Round Nominee Officers",
    ],
  },
] as const;

/** Ordered tiers for consistent column display (Bronze → Silver → Gold). */
export const tierOrder: Record<string, number> = {
  bronze: 0,
  silver: 1,
  gold: 2,
};

/** All states that have at least one tier available */
export const ALL_FORMATION_STATES = [
  { name: "Wyoming", abbreviation: "WY" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "California", abbreviation: "CA" },
  { name: "Florida", abbreviation: "FL" },
] as const;
