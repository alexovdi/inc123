import type {
  PackageTier,
  PackageAddOn,
  TierDefinition,
  TierLevel,
  EntityType,
} from "@/lib/types";

const sharedAddOns: PackageAddOn[] = [
  {
    id: "foreign-registration",
    name: "Foreign Registration",
    price: 149,
    description: "Register your entity to do business in another state",
    tooltip:
      "Required if your LLC does business in a state other than where it was formed",
  },
  {
    id: "ein",
    name: "EIN Obtainment",
    price: 75,
    description: "We obtain your federal Employer Identification Number",
    tooltip:
      "Required for opening a bank account, hiring employees, and filing taxes",
  },
  {
    id: "operating-agreement",
    name: "Custom Operating Agreement",
    price: 99,
    description:
      "Professionally drafted operating agreement tailored to your entity",
  },
  {
    id: "rush-filing",
    name: "Rush Filing (24-hour)",
    price: 199,
    description: "Expedited state filing within 24 business hours",
  },
  {
    id: "virtual-office",
    name: "Virtual Office Address",
    price: 149,
    description: "Professional Nevada business address with mail forwarding",
    tooltip:
      "Separate from registered agent address — used for business correspondence",
  },
  {
    id: "crypto-payment",
    name: "Cryptocurrency Payment Processing",
    price: 0,
    description: "Pay with Bitcoin, Ethereum, XRP, Litecoin, or Monero",
    tooltip:
      "No additional fee — we accept major cryptocurrencies for maximum privacy",
  },
];

export const packages: PackageTier[] = [
  // Wyoming
  {
    id: "wyoming-gold",
    flatSlug: "gold?state=wyoming",
    name: "Wyoming Gold LLC",
    tier: "gold",
    state: "Wyoming",
    prices: {
      llc: { formation: 1275, renewal: 525 },
      corp: { formation: 1575, renewal: 625 },
    },
    description:
      "Complete privacy package with year-round nominees, offshore records, and full compliance. Our most popular package.",
    badge: "Most Popular",
    highlighted: true,
    features: [
      {
        name: "State Filing Fees Included",
        status: "included",
        tooltip:
          "All Wyoming state filing fees are included — no hidden charges",
      },
      {
        name: "Registered Agent (1 Year)",
        status: "included",
        tooltip:
          "Professional registered agent service in Wyoming for one full year",
      },
      {
        name: "Year-Round Nominee Directors",
        status: "included",
        tooltip:
          "Nominee directors listed on public records year-round, not just at formation",
      },
      {
        name: "Year-Round Nominee Officers",
        status: "included",
        tooltip:
          "Nominee officers protect your identity on all corporate filings",
      },
      {
        name: "Offshore Record Storage",
        status: "included",
        tooltip:
          "Corporate records stored outside U.S. jurisdiction for maximum privacy",
      },
      {
        name: "Corporate Minutes Maintenance",
        status: "included",
        tooltip:
          "Professional preparation and maintenance of your corporate minute book",
      },
      {
        name: "Annual Report Filing",
        status: "included",
        tooltip: "We prepare and file your Wyoming annual report each year",
      },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Corporate Seal", status: "included" },
      { name: "Custom Operating Agreement", status: "included" },
    ],
    addOns: sharedAddOns,
  },
  {
    id: "wyoming-silver",
    flatSlug: "silver?state=wyoming",
    name: "Wyoming Silver LLC",
    tier: "silver",
    state: "Wyoming",
    prices: {
      llc: { formation: 875, renewal: 325 },
      corp: { formation: 1175, renewal: 425 },
    },
    description:
      "Professional formation with registered agent and compliance essentials. Great starting point for business formation.",
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      {
        name: "Year-Round Nominee Directors",
        status: "not-included",
        tooltip: "Upgrade to Gold for year-round nominee directors",
      },
      {
        name: "Year-Round Nominee Officers",
        status: "not-included",
        tooltip: "Upgrade to Gold for year-round nominee officers",
      },
      {
        name: "Offshore Record Storage",
        status: "not-included",
        tooltip: "Upgrade to Gold for offshore record storage",
      },
      { name: "Corporate Minutes Maintenance", status: "included" },
      { name: "Annual Report Filing", status: "included" },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Corporate Seal", status: "included" },
      { name: "Custom Operating Agreement", status: "add-on" },
    ],
    addOns: sharedAddOns,
  },
  {
    id: "wyoming-bronze",
    flatSlug: "bronze?state=wyoming",
    name: "Wyoming Bronze LLC",
    tier: "bronze",
    state: "Wyoming",
    prices: {
      llc: { formation: 625, renewal: 225 },
      corp: { formation: 625, renewal: 225 },
    },
    description:
      "Basic formation with registered agent. You manage your own annual compliance.",
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "not-included" },
      { name: "Year-Round Nominee Officers", status: "not-included" },
      { name: "Offshore Record Storage", status: "not-included" },
      { name: "Corporate Minutes Maintenance", status: "not-included" },
      { name: "Annual Report Filing", status: "not-included" },
      { name: "Certificate of Good Standing", status: "not-included" },
      { name: "Custom Operating Agreement", status: "add-on" },
    ],
    addOns: sharedAddOns,
  },
  // Nevada
  {
    id: "nevada-gold",
    flatSlug: "gold?state=nevada",
    name: "Nevada Gold LLC",
    tier: "gold",
    state: "Nevada",
    prices: {
      llc: { formation: 1800, renewal: 525 },
      corp: { formation: 2100, renewal: 625 },
    },
    description:
      "Premium Nevada formation with full privacy suite. Nominees, offshore records, and complete compliance included.",
    badge: "Premium",
    highlighted: true,
    features: [
      {
        name: "State Filing Fees Included",
        status: "included",
        tooltip: "All Nevada state filing and business license fees included",
      },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "included" },
      { name: "Year-Round Nominee Officers", status: "included" },
      { name: "Offshore Record Storage", status: "included" },
      { name: "Corporate Minutes Maintenance", status: "included" },
      { name: "Annual Report Filing", status: "included" },
      {
        name: "Nevada Business License",
        status: "included",
        tooltip: "Initial Nevada state business license included",
      },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Custom Operating Agreement", status: "included" },
    ],
    addOns: sharedAddOns,
  },
  {
    id: "nevada-silver",
    flatSlug: "silver?state=nevada",
    name: "Nevada Silver LLC",
    tier: "silver",
    state: "Nevada",
    prices: {
      llc: { formation: 1275, renewal: 325 },
      corp: { formation: 1575, renewal: 425 },
    },
    description:
      "Solid Nevada formation with compliance essentials. Upgrade to Gold for full privacy features.",
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "not-included" },
      { name: "Year-Round Nominee Officers", status: "not-included" },
      { name: "Offshore Record Storage", status: "not-included" },
      { name: "Corporate Minutes Maintenance", status: "included" },
      { name: "Annual Report Filing", status: "included" },
      { name: "Nevada Business License", status: "included" },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Custom Operating Agreement", status: "add-on" },
    ],
    addOns: sharedAddOns,
  },
  {
    id: "nevada-bronze",
    flatSlug: "bronze?state=nevada",
    name: "Nevada Bronze LLC",
    tier: "bronze",
    state: "Nevada",
    prices: {
      llc: { formation: 699, renewal: 225 },
      corp: { formation: 899, renewal: 325 },
    },
    description:
      "Basic Nevada formation at an affordable price. Includes state filing fees and registered agent.",
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "not-included" },
      { name: "Year-Round Nominee Officers", status: "not-included" },
      { name: "Offshore Record Storage", status: "not-included" },
      { name: "Corporate Minutes Maintenance", status: "not-included" },
      { name: "Annual Report Filing", status: "add-on" },
      { name: "Nevada Business License", status: "included" },
      { name: "Certificate of Good Standing", status: "add-on" },
      { name: "Custom Operating Agreement", status: "add-on" },
    ],
    addOns: sharedAddOns,
  },
  // State-specific privacy packages
  {
    id: "california-private",
    flatSlug: "gold?state=california",
    name: "California Private LLC",
    tier: "gold",
    state: "California",
    prices: {
      llc: { formation: 1475, renewal: 525 },
      corp: { formation: 1775, renewal: 625 },
    },
    description:
      "Privacy-focused California formation. Wyoming or Nevada nominee structure with California foreign registration.",
    badge: "Privacy",
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "included" },
      { name: "Year-Round Nominee Officers", status: "included" },
      { name: "Offshore Record Storage", status: "included" },
      {
        name: "CA Foreign Registration",
        status: "included",
        tooltip: "Register your WY/NV entity to do business in California",
      },
      { name: "Annual Report Filing", status: "included" },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Custom Operating Agreement", status: "included" },
    ],
    addOns: sharedAddOns,
  },
  {
    id: "florida-private",
    flatSlug: "gold?state=florida",
    name: "Florida Private LLC",
    tier: "gold",
    state: "Florida",
    prices: {
      llc: { formation: 1475, renewal: 525 },
      corp: { formation: 1775, renewal: 625 },
    },
    description:
      "Privacy-focused Florida formation. Wyoming or Nevada nominee structure with Florida foreign registration.",
    badge: "Privacy",
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "included" },
      { name: "Year-Round Nominee Officers", status: "included" },
      { name: "Offshore Record Storage", status: "included" },
      {
        name: "FL Foreign Registration",
        status: "included",
        tooltip: "Register your WY/NV entity to do business in Florida",
      },
      { name: "Annual Report Filing", status: "included" },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Custom Operating Agreement", status: "included" },
    ],
    addOns: sharedAddOns,
  },
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
      "Pre-aged entity with established history. Immediate availability for business needs requiring entity age.",
    badge: "Pre-Aged",
    features: [
      {
        name: "Pre-Aged Entity (1-5 Years)",
        status: "included",
        tooltip:
          "Entity with established formation date — age varies by availability",
      },
      {
        name: "Clean History Guaranteed",
        status: "included",
        tooltip: "No prior business activity, liens, or liabilities",
      },
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "included" },
      { name: "Year-Round Nominee Officers", status: "included" },
      { name: "Offshore Record Storage", status: "included" },
      { name: "Corporate Minutes Maintenance", status: "included" },
      { name: "Annual Report Filing", status: "included" },
      { name: "Custom Operating Agreement", status: "included" },
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
    tagline: "Basic Formation",
    description:
      "Basic formation at an affordable price. Includes state filing fees and registered agent — a solid starting point.",
    availableStates: ["Wyoming", "Nevada"],
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "not-included" },
      { name: "Year-Round Nominee Officers", status: "not-included" },
      { name: "Offshore Record Storage", status: "not-included" },
      { name: "Corporate Minutes Maintenance", status: "not-included" },
      { name: "Annual Report Filing", status: "add-on" },
      { name: "Certificate of Good Standing", status: "add-on" },
      { name: "Custom Operating Agreement", status: "add-on" },
    ],
    stateVariants: {
      Wyoming: {
        state: "Wyoming",
        abbreviation: "WY",
        prices: {
          llc: { formation: 625, renewal: 225 },
          corp: { formation: 625, renewal: 225 },
        },
        extraFeatures: [],
        legacyId: "wyoming-bronze",
      },
      Nevada: {
        state: "Nevada",
        abbreviation: "NV",
        prices: {
          llc: { formation: 699, renewal: 225 },
          corp: { formation: 899, renewal: 325 },
        },
        extraFeatures: [
          {
            name: "Nevada Business License",
            status: "included",
            tooltip: "Initial Nevada state business license included",
          },
        ],
        legacyId: "nevada-bronze",
      },
    },
    addOns: sharedAddOns,
  },
  {
    tier: "silver",
    slug: "silver",
    name: "Silver",
    tagline: "Professional Formation",
    description:
      "Professional formation with registered agent and compliance essentials. Great starting point for business formation.",
    availableStates: ["Wyoming", "Nevada"],
    features: [
      { name: "State Filing Fees Included", status: "included" },
      { name: "Registered Agent (1 Year)", status: "included" },
      { name: "Year-Round Nominee Directors", status: "not-included" },
      { name: "Year-Round Nominee Officers", status: "not-included" },
      { name: "Offshore Record Storage", status: "not-included" },
      { name: "Corporate Minutes Maintenance", status: "included" },
      { name: "Annual Report Filing", status: "included" },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Corporate Seal", status: "included" },
      { name: "Custom Operating Agreement", status: "add-on" },
    ],
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
        extraFeatures: [
          {
            name: "Nevada Business License",
            status: "included",
            tooltip: "Initial Nevada state business license included",
          },
        ],
        legacyId: "nevada-silver",
      },
    },
    addOns: sharedAddOns,
  },
  {
    tier: "gold",
    slug: "gold",
    name: "Gold",
    tagline: "Full Privacy Package",
    description:
      "Complete privacy package with year-round nominees, offshore records, and full compliance. Our most popular package.",
    badge: "Most Popular",
    highlighted: true,
    availableStates: ["Wyoming", "Nevada", "California", "Florida"],
    features: [
      {
        name: "State Filing Fees Included",
        status: "included",
        tooltip: "All state filing fees are included — no hidden charges",
      },
      {
        name: "Registered Agent (1 Year)",
        status: "included",
        tooltip: "Professional registered agent service for one full year",
      },
      {
        name: "Year-Round Nominee Directors",
        status: "included",
        tooltip:
          "Nominee directors listed on public records year-round, not just at formation",
      },
      {
        name: "Year-Round Nominee Officers",
        status: "included",
        tooltip:
          "Nominee officers protect your identity on all corporate filings",
      },
      {
        name: "Offshore Record Storage",
        status: "included",
        tooltip:
          "Corporate records stored outside U.S. jurisdiction for maximum privacy",
      },
      {
        name: "Corporate Minutes Maintenance",
        status: "included",
        tooltip:
          "Professional preparation and maintenance of your corporate minute book",
      },
      {
        name: "Annual Report Filing",
        status: "included",
        tooltip: "We prepare and file your annual report each year",
      },
      { name: "Certificate of Good Standing", status: "included" },
      { name: "Custom Operating Agreement", status: "included" },
    ],
    stateVariants: {
      Wyoming: {
        state: "Wyoming",
        abbreviation: "WY",
        prices: {
          llc: { formation: 1275, renewal: 525 },
          corp: { formation: 1575, renewal: 625 },
        },
        description:
          "Complete privacy package with year-round nominees, offshore records, and full compliance. Our most popular package.",
        legacyId: "wyoming-gold",
      },
      Nevada: {
        state: "Nevada",
        abbreviation: "NV",
        prices: {
          llc: { formation: 1800, renewal: 525 },
          corp: { formation: 2100, renewal: 625 },
        },
        extraFeatures: [
          {
            name: "Nevada Business License",
            status: "included",
            tooltip: "Initial Nevada state business license included",
          },
        ],
        description:
          "Premium Nevada formation with full privacy suite. Nominees, offshore records, and complete compliance included.",
        legacyId: "nevada-gold",
      },
      California: {
        state: "California",
        abbreviation: "CA",
        prices: {
          llc: { formation: 1475, renewal: 525 },
          corp: { formation: 1775, renewal: 625 },
        },
        extraFeatures: [
          {
            name: "CA Foreign Registration",
            status: "included",
            tooltip: "Register your WY/NV entity to do business in California",
          },
        ],
        description:
          "Privacy-focused California formation. Wyoming or Nevada nominee structure with California foreign registration.",
        legacyId: "california-private",
      },
      Florida: {
        state: "Florida",
        abbreviation: "FL",
        prices: {
          llc: { formation: 1475, renewal: 525 },
          corp: { formation: 1775, renewal: 625 },
        },
        extraFeatures: [
          {
            name: "FL Foreign Registration",
            status: "included",
            tooltip: "Register your WY/NV entity to do business in Florida",
          },
        ],
        description:
          "Privacy-focused Florida formation. Wyoming or Nevada nominee structure with Florida foreign registration.",
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

/** Shared feature names for the comparison table, in display order */
export const comparisonFeatures = [
  "State Filing Fees Included",
  "Registered Agent (1 Year)",
  "Year-Round Nominee Directors",
  "Year-Round Nominee Officers",
  "Offshore Record Storage",
  "Corporate Minutes Maintenance",
  "Annual Report Filing",
  "Certificate of Good Standing",
  "Custom Operating Agreement",
];

/** Ordered tiers for consistent column display */
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
