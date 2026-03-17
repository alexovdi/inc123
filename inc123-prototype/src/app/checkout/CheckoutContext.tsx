"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CheckoutState, EntityType } from "@/lib/types";
import { getTierBySlug, getTierPrice } from "@/data/packages";
import {
  getLegacyPackageTierSlug,
  getLegacyPackageState,
} from "@/lib/slug-registry";

/* ------------------------------------------------
   Defaults — Gold tier + Wyoming (most popular)
   ------------------------------------------------ */
const DEFAULT_TIER = "gold";
const DEFAULT_STATE = "Wyoming";

const initialState: CheckoutState = {
  step: 1,
  selectedState: DEFAULT_STATE,
  entityType: "llc",
  selectedTier: DEFAULT_TIER,
  selectedAddOns: [],
  companyDetails: {
    name1: "",
    name2: "",
    name3: "",
    purpose: "",
    members: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    specialInstructions: "",
  },
  billingAddress: {
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  },
  paymentMethod: "credit-card",
};

type CheckoutAction =
  | { type: "SET_STEP"; step: number }
  | { type: "SET_STATE"; state: string }
  | { type: "SET_ENTITY_TYPE"; entityType: EntityType }
  | { type: "SET_TIER"; tier: string }
  | { type: "TOGGLE_ADDON"; addonId: string }
  | {
      type: "SET_COMPANY_DETAILS";
      details: Partial<CheckoutState["companyDetails"]>;
    }
  | {
      type: "SET_BILLING_ADDRESS";
      address: Partial<CheckoutState["billingAddress"]>;
    }
  | { type: "SET_PAYMENT_METHOD"; method: CheckoutState["paymentMethod"] }
  | { type: "RESET" };

function checkoutReducer(
  state: CheckoutState,
  action: CheckoutAction,
): CheckoutState {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.step };
    case "SET_STATE":
      return { ...state, selectedState: action.state };
    case "SET_ENTITY_TYPE":
      return { ...state, entityType: action.entityType };
    case "SET_TIER":
      return { ...state, selectedTier: action.tier };
    case "TOGGLE_ADDON":
      return {
        ...state,
        selectedAddOns: state.selectedAddOns.includes(action.addonId)
          ? state.selectedAddOns.filter((id) => id !== action.addonId)
          : [...state.selectedAddOns, action.addonId],
      };
    case "SET_COMPANY_DETAILS":
      return {
        ...state,
        companyDetails: { ...state.companyDetails, ...action.details },
      };
    case "SET_BILLING_ADDRESS":
      return {
        ...state,
        billingAddress: { ...state.billingAddress, ...action.address },
      };
    case "SET_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.method };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

/** Capitalize first letter (e.g. "wyoming" → "Wyoming") */
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

/** Resolve query params into initial checkout state overrides.
 *
 *  Accepts two formats:
 *  - New: `?tier=gold&state=wyoming&entity=llc`
 *  - Legacy: `?package=wyoming-gold`
 *
 *  Returns overrides for selectedTier, selectedState, entityType. */
export function resolveCheckoutParams(params: {
  tier?: string | null;
  state?: string | null;
  entity?: string | null;
  package?: string | null;
}): Pick<CheckoutState, "selectedTier" | "selectedState" | "entityType"> {
  let tier = DEFAULT_TIER;
  let state = DEFAULT_STATE;
  let entityType: EntityType = "llc";

  if (params.tier) {
    // New tier-first format: ?tier=gold&state=wyoming
    const tierDef = getTierBySlug(params.tier);
    if (tierDef) {
      tier = tierDef.slug;
      // Resolve state — use provided state or first available
      if (params.state) {
        const capitalized = capitalize(params.state);
        if (tierDef.availableStates.includes(capitalized)) {
          state = capitalized;
        } else {
          state = tierDef.availableStates[0];
        }
      } else {
        state = tierDef.availableStates[0];
      }
    }
  } else if (params.package) {
    // Legacy format: ?package=wyoming-gold
    const legacyTier = getLegacyPackageTierSlug(params.package);
    const legacyState = getLegacyPackageState(params.package);
    if (legacyTier) tier = legacyTier;
    if (legacyState) state = legacyState;
  }

  // Entity type override
  if (params.entity === "corp" || params.entity === "llc") {
    entityType = params.entity;
  }

  return { selectedTier: tier, selectedState: state, entityType };
}

/** Get the resolved price for the current checkout tier + state + entity.
 *  Returns { formation, renewal } or null if the combination is invalid. */
export function getCheckoutPrice(checkoutState: CheckoutState) {
  const tierDef = getTierBySlug(checkoutState.selectedTier);
  if (!tierDef) return null;
  return getTierPrice(
    tierDef,
    checkoutState.selectedState,
    checkoutState.entityType,
  );
}

interface CheckoutContextValue {
  state: CheckoutState;
  dispatch: React.Dispatch<CheckoutAction>;
}

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({
  children,
  initialTier,
  initialStateName,
  initialEntity,
}: {
  children: ReactNode;
  /** Tier slug: "gold", "silver", or "bronze" */
  initialTier?: string;
  /** State name: "Wyoming", "Nevada", etc. */
  initialStateName?: string;
  /** Entity type: "llc" or "corp" */
  initialEntity?: EntityType;
}) {
  const [state, dispatch] = useReducer(checkoutReducer, {
    ...initialState,
    selectedTier: initialTier || DEFAULT_TIER,
    selectedState: initialStateName || DEFAULT_STATE,
    entityType: initialEntity || "llc",
  });

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
