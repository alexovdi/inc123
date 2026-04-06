import {
  type WizardBranch,
  type WizardBusinessType,
  type WizardFormationState,
  type WizardOperatingState,
  type WizardPackage,
  wizardPackages,
} from "@/data/wizard";

/* ═══════════════════════════════════════════════════════════════════════════
   Wizard Logic v2 — Recommendation engine for 2-branch flow
   Privacy question auto-determines tier. AP auto-recommends Gold.
   ═══════════════════════════════════════════════════════════════════════════ */

export interface WizardAlternative {
  pkg: WizardPackage;
  reason: string;
}

export interface WizardResult {
  primary: WizardPackage;
  alternatives: WizardAlternative[];
  contextNote: string;
  addonNote?: string;
}

interface RecommendationInput {
  branch: WizardBranch;
  businessType: WizardBusinessType | null;
  formationState: WizardFormationState | null;
  operatingState: WizardOperatingState | null;
  wantsPrivacy: boolean | null;
}

/**
 * Resolves which package to recommend based on wizard answers.
 * Ported from the interactive HTML reference (Package_Wizard_Interactive.html).
 */
export function getRecommendation(input: RecommendationInput): WizardResult {
  const { branch, businessType, formationState, operatingState, wantsPrivacy } =
    input;

  // ── AP paths (2 clicks, no privacy question — auto Gold) ──
  if (branch === "ap") {
    if (formationState === "nevada") {
      return {
        primary: wizardPackages["nevada-gold"],
        contextNote:
          "Nevada Gold includes year-round nominees, charging order protection, and full compliance \u2014 everything you need in one package.",
        alternatives: [
          {
            pkg: wizardPackages["wyoming-gold"],
            reason:
              "Same privacy and nominees at a lower cost. Wyoming has excellent asset protection too.",
          },
          {
            pkg: wizardPackages["nevada-silver"],
            reason:
              "Same Nevada benefits, virtual office included \u2014 without nominee privacy. Save $525.",
          },
        ],
      };
    }
    // Default: Wyoming
    return {
      primary: wizardPackages["wyoming-gold"],
      contextNote:
        "Wyoming Gold includes year-round nominees, offshore records storage, and full compliance \u2014 your name never appears on public records.",
      alternatives: [
        {
          pkg: wizardPackages["wyoming-silver"],
          reason:
            "Same compliance, same virtual office \u2014 without nominee privacy. Save $400.",
        },
        {
          pkg: wizardPackages["nevada-gold"],
          reason:
            "If you need Nevada specifically for stronger charging order protection.",
        },
      ],
    };
  }

  // ── Formation → Virtual paths (3 clicks) ──
  if (businessType === "virtual") {
    if (wantsPrivacy) {
      return {
        primary: wizardPackages["wyoming-gold"],
        contextNote:
          "Wyoming Gold includes year-round nominees, offshore records storage, and full compliance \u2014 your name never appears on public records.",
        alternatives: [
          {
            pkg: wizardPackages["wyoming-silver"],
            reason:
              "Same compliance, same virtual office \u2014 without nominees. Save $400.",
          },
          {
            pkg: wizardPackages["nevada-gold"],
            reason:
              "If you need Nevada specifically for stronger charging order protection.",
          },
        ],
      };
    }
    // Virtual + no privacy → Silver (needs business address)
    return {
      primary: wizardPackages["wyoming-silver"],
      contextNote:
        "For your virtual business, our Silver package includes a Wyoming business address and mail forwarding \u2014 everything you need to operate professionally without a physical office.",
      alternatives: [
        {
          pkg: wizardPackages["wyoming-gold"],
          reason:
            "Add nominee privacy so your name stays off all public records.",
        },
        {
          pkg: wizardPackages["wyoming-bronze"],
          reason:
            "If you don\u2019t need a business address or mail forwarding.",
        },
      ],
    };
  }

  // ── Formation → B&M → CA/FL paths (4 clicks) ──
  if (operatingState === "california" || operatingState === "florida") {
    const stateLabel =
      operatingState === "california" ? "California" : "Florida";
    const otherStateLabel =
      operatingState === "california" ? "Florida" : "California";
    const privatePkgId =
      operatingState === "california"
        ? "california-private"
        : "florida-private";
    const otherPrivatePkgId =
      operatingState === "california"
        ? "florida-private"
        : "california-private";

    if (wantsPrivacy) {
      return {
        primary: wizardPackages[privatePkgId],
        contextNote: `Our ${stateLabel} Private package bundles Wyoming privacy formation with ${stateLabel} registration \u2014 one package, full compliance in both states.`,
        alternatives: [
          {
            pkg: wizardPackages["wyoming-gold"],
            reason: `Formation only, add ${stateLabel} registration separately.`,
          },
          {
            pkg: wizardPackages[otherPrivatePkgId],
            reason: `If you operate in ${otherStateLabel} instead.`,
          },
        ],
      };
    }
    // B&M + CA/FL + no privacy → Bronze + state reg
    return {
      primary: wizardPackages["wyoming-bronze"],
      contextNote: `We\u2019ll form a Wyoming company and register it in ${stateLabel}. Since you don\u2019t need privacy, the Bronze package plus ${stateLabel} registration is the most cost-effective option.`,
      addonNote: `You\u2019ll also need ${stateLabel} foreign registration. We can add this during checkout.`,
      alternatives: [
        {
          pkg: wizardPackages["wyoming-silver"],
          reason: "Adds a Wyoming business address and mail forwarding.",
        },
        {
          pkg: wizardPackages["wyoming-gold"],
          reason:
            "Add full privacy with nominees keeping your name off records.",
        },
      ],
    };
  }

  // ── Formation → B&M → Other State paths (4 clicks) ──
  if (operatingState === "other") {
    if (wantsPrivacy) {
      return {
        primary: wizardPackages["wyoming-gold"],
        contextNote:
          "Wyoming Gold includes year-round nominees and full compliance \u2014 your name stays off all public records. We\u2019ll also help with your state registration.",
        addonNote:
          "You\u2019ll also need foreign registration in your state. We\u2019ll help you set that up after checkout.",
        alternatives: [
          {
            pkg: wizardPackages["wyoming-silver"],
            reason:
              "Same compliance, same virtual office \u2014 without nominee privacy. Save $400.",
          },
          {
            pkg: wizardPackages["wyoming-bronze"],
            reason:
              "Basic formation only, if you don\u2019t need privacy or a virtual office.",
          },
        ],
      };
    }
    // B&M + Other + no privacy → Bronze + foreign reg
    return {
      primary: wizardPackages["wyoming-bronze"],
      contextNote:
        "Since you already have a physical location, our Bronze package covers formation \u2014 we handle all the paperwork.",
      addonNote:
        "You\u2019ll also need foreign registration in your state. We\u2019ll help you set that up after checkout.",
      alternatives: [
        {
          pkg: wizardPackages["wyoming-silver"],
          reason: "Adds a Wyoming business address and mail forwarding.",
        },
        {
          pkg: wizardPackages["wyoming-gold"],
          reason:
            "Add full privacy with nominees keeping your name off records.",
        },
      ],
    };
  }

  // Fallback (shouldn't reach here)
  return {
    primary: wizardPackages["wyoming-gold"],
    contextNote:
      "Our most popular package \u2014 includes formation, nominees, and full compliance.",
    alternatives: [],
  };
}

/**
 * Format a price number as currency string.
 */
export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString()}`;
}
