import {
  type WizardIntent,
  type WizardTier,
  type WizardState,
  type WizardPackage,
  type EntityType,
  wizardPackages,
} from "@/data/wizard";

/* ═══════════════════════════════════════════════════════════════════════════
   Wizard Logic — Pure functions for package recommendation
   Flow: Goal → State → Tier/Entity → Result
   ═══════════════════════════════════════════════════════════════════════════ */

export interface WizardResult {
  primary: WizardPackage;
  alternatives: WizardPackage[];
  note?: string;
}

/**
 * Maps wizard answers to a package recommendation with alternatives.
 */
export function getRecommendation(
  intent: WizardIntent,
  tier: WizardTier | null,
  state: WizardState | null,
): WizardResult {
  // Shelf shortcut
  if (intent === "shelf") {
    return {
      primary: wizardPackages["shelf"],
      alternatives: [
        wizardPackages["wyoming-gold"],
        wizardPackages["nevada-gold"],
      ],
    };
  }

  // CA/FL — always Gold-equivalent Private package
  if (state === "california" || state === "florida") {
    const slug = `${state}-private`;
    const otherState = state === "california" ? "florida" : "california";
    return {
      primary: wizardPackages[slug],
      alternatives: [
        wizardPackages[`${otherState}-private`],
        wizardPackages["wyoming-gold"],
      ],
    };
  }

  // Standard path: intent + state + tier
  const resolvedTier = tier ?? "gold";
  const resolvedState = state ?? "wyoming";

  // Edge case: Bronze doesn't exist for Wyoming
  if (resolvedTier === "bronze" && resolvedState === "wyoming") {
    return {
      primary: wizardPackages["wyoming-silver"],
      alternatives: [
        wizardPackages["wyoming-gold"],
        wizardPackages["nevada-bronze"],
      ],
      note: "Wyoming\u2019s most affordable option is the Silver package.",
    };
  }

  const slug = `${resolvedState}-${resolvedTier}`;
  const primary = wizardPackages[slug];
  const alternatives = getAlternatives(intent, resolvedTier, resolvedState);

  return { primary, alternatives };
}

function getAlternatives(
  intent: WizardIntent,
  tier: WizardTier,
  state: string,
): WizardPackage[] {
  const alts: WizardPackage[] = [];
  const otherState = state === "wyoming" ? "nevada" : "wyoming";

  if (intent === "privacy") {
    const otherSlug = `${otherState}-${tier}`;
    if (wizardPackages[otherSlug]) alts.push(wizardPackages[otherSlug]);
    if (tier === "gold") {
      alts.push(wizardPackages[`${state}-silver`]);
    }
  } else if (intent === "asset-protection") {
    if (state === "nevada" && tier === "gold") {
      alts.push(wizardPackages["wyoming-gold"]);
      alts.push(wizardPackages["nevada-silver"]);
    } else {
      const otherSlug = `${otherState}-${tier}`;
      if (wizardPackages[otherSlug]) alts.push(wizardPackages[otherSlug]);
      alts.push(wizardPackages["nevada-gold"]);
    }
  } else {
    if (tier === "gold") {
      alts.push(wizardPackages[`${state}-silver`]);
    } else if (tier === "silver") {
      alts.push(wizardPackages[`${state}-gold`]);
      const bronzeSlug = `${state}-bronze`;
      if (wizardPackages[bronzeSlug]) alts.push(wizardPackages[bronzeSlug]);
    } else {
      alts.push(wizardPackages[`${state}-silver`]);
      alts.push(wizardPackages[`${state}-gold`]);
    }
  }

  return alts.filter(Boolean).slice(0, 2);
}

/**
 * Determines how many total steps this wizard path requires.
 */
export function getTotalSteps(intent: WizardIntent): number {
  if (intent === "shelf") return 1;
  if (intent === "ca-fl") return 2;
  return 3;
}

/**
 * Format a price number as currency string.
 */
export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

/**
 * Get the resolved package ID from state + tier.
 */
export function getPackageId(
  state: WizardState | null,
  tier: WizardTier | null,
): string | null {
  if (!state || !tier) return null;
  if (state === "california") return "california-private";
  if (state === "florida") return "florida-private";
  return `${state}-${tier}`;
}

/**
 * Check if a state is CA or FL (private package path).
 */
export function isCaFl(state: WizardState | null): boolean {
  return state === "california" || state === "florida";
}
