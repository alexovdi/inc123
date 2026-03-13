"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CheckoutState, EntityType } from "@/lib/types";

const initialState: CheckoutState = {
  step: 1,
  selectedState: "Wyoming",
  entityType: "llc",
  selectedTier: "",
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
  | { type: "SET_COMPANY_DETAILS"; details: Partial<CheckoutState["companyDetails"]> }
  | { type: "SET_BILLING_ADDRESS"; address: Partial<CheckoutState["billingAddress"]> }
  | { type: "SET_PAYMENT_METHOD"; method: CheckoutState["paymentMethod"] }
  | { type: "RESET" };

function checkoutReducer(state: CheckoutState, action: CheckoutAction): CheckoutState {
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

interface CheckoutContextValue {
  state: CheckoutState;
  dispatch: React.Dispatch<CheckoutAction>;
}

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children, initialPackage }: { children: ReactNode; initialPackage?: string }) {
  const [state, dispatch] = useReducer(checkoutReducer, {
    ...initialState,
    selectedTier: initialPackage || "",
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
