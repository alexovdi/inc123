"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CheckoutLayout } from "@/design-system/layouts/CheckoutLayout";
import { AddOnConfigurator } from "@/design-system/components/AddOnConfigurator";
import { EntityTypeToggle } from "@/design-system/components/EntityTypeToggle";
import { FormSection } from "@/design-system/components/FormSection";
import { OrderSummary } from "@/design-system/components/OrderSummary";
import { TierSelectorCards } from "@/design-system/components/TierSelectorCards";
import { Button } from "@/design-system/primitives/Button";
import {
  getTierBySlug,
  getTierPrice,
  getAvailableTiersForState,
  getTierFeaturesForState,
} from "@/data/packages";
import { FORMATION_STATES } from "@/data/checkout";
import { useCheckout, getCheckoutPrice } from "../CheckoutContext";
import type { EntityType } from "@/lib/types";

export default function CheckoutConfigurePage() {
  const router = useRouter();
  const { state, dispatch } = useCheckout();

  // Get available tier definitions for the selected state
  const availableTiers = useMemo(
    () => getAvailableTiersForState(state.selectedState),
    [state.selectedState],
  );

  // Get the currently selected tier definition
  const selectedTierDef = useMemo(
    () => getTierBySlug(state.selectedTier),
    [state.selectedTier],
  );

  // Entity label for display (swap LLC ↔ Corp in package names)
  const entityLabel = state.entityType === "llc" ? "LLC" : "Corp";

  // Build tier cards from tierDefinitions filtered by selected state
  const tierCards = useMemo(
    () =>
      availableTiers.map((tierDef) => {
        const price = getTierPrice(
          tierDef,
          state.selectedState,
          state.entityType,
        );
        const features = getTierFeaturesForState(tierDef, state.selectedState);
        return {
          id: tierDef.slug,
          name: `${tierDef.name} ${entityLabel}`,
          price: price?.formation ?? 0,
          features: features
            .filter((f) => f.status === "included")
            .slice(0, 4)
            .map((f) => f.name),
          badge: tierDef.badge,
          highlighted: tierDef.highlighted,
        };
      }),
    [availableTiers, state.selectedState, state.entityType, entityLabel],
  );

  // Calculate pricing using tier-first helpers
  const pricing = getCheckoutPrice(state);
  const basePrice = pricing?.formation ?? 0;

  // Get add-ons for the selected tier (or first available tier)
  const availableAddOns =
    selectedTierDef?.addOns ?? availableTiers[0]?.addOns ?? [];

  const addOnTotal = state.selectedAddOns.reduce((sum, id) => {
    const addOn = availableAddOns.find((a) => a.id === id);
    return sum + (addOn?.price ?? 0);
  }, 0);

  const total = basePrice + addOnTotal;

  // Selected add-on details for OrderSummary
  const selectedAddOnDetails = state.selectedAddOns
    .map((id) => availableAddOns.find((a) => a.id === id))
    .filter(Boolean)
    .map((a) => ({ name: a!.name, price: a!.price }));

  const canContinue =
    state.selectedState && state.entityType && state.selectedTier;

  const handleContinue = () => {
    if (canContinue) {
      dispatch({ type: "SET_STEP", step: 2 });
      router.push("/checkout/details");
    }
  };

  const sidebar = selectedTierDef ? (
    <OrderSummary
      package={{
        name: `${state.selectedState} ${selectedTierDef.name} ${entityLabel}`,
        tier: selectedTierDef.tier,
        price: basePrice,
      }}
      entityType={state.entityType === "llc" ? "LLC" : "Corporation"}
      addOns={selectedAddOnDetails}
      subtotal={basePrice}
      total={total}
    />
  ) : (
    <div className="rounded-card border border-border bg-surface p-6 text-center text-body-sm text-muted">
      Select a package to see your order summary.
    </div>
  );

  return (
    <CheckoutLayout currentStep={1} sidebar={sidebar}>
      {/* Page header */}
      <div className="mb-8">
        <p className="text-body-sm font-medium text-secondary mb-1">
          Step 1 of 4
        </p>
        <h1 className="text-heading-lg font-display font-bold text-foreground">
          Configure Your Package
        </h1>
        <p className="mt-2 text-body text-muted">
          Confirm your selections below. Your order summary updates in real
          time.
        </p>
      </div>

      {/* Formation State */}
      <FormSection
        title="Formation State"
        description="Select the state where you want to form your entity."
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FORMATION_STATES.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => {
                dispatch({ type: "SET_STATE", state: s.value });
                // Reset to the best available tier for the new state
                const tiersForState = getAvailableTiersForState(s.value);
                const currentStillAvailable = tiersForState.find(
                  (t) => t.slug === state.selectedTier,
                );
                if (!currentStillAvailable && tiersForState.length > 0) {
                  // Pick the highlighted tier, or last (highest) tier
                  const best =
                    tiersForState.find((t) => t.highlighted) ??
                    tiersForState[tiersForState.length - 1];
                  dispatch({ type: "SET_TIER", tier: best.slug });
                }
              }}
              className={`flex flex-col items-center gap-1 rounded-card border-2 p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                state.selectedState === s.value
                  ? "border-secondary bg-secondary/5 shadow-card-hover"
                  : "border-border bg-surface hover:border-secondary/40 hover:shadow-card"
              }`}
            >
              <span className="text-heading font-display font-bold text-foreground">
                {s.abbr}
              </span>
              <span className="text-caption text-muted">{s.label}</span>
            </button>
          ))}
        </div>
      </FormSection>

      {/* Entity Type */}
      <FormSection
        title="Entity Type"
        description="Choose the type of business entity to form."
      >
        <EntityTypeToggle
          options={[
            { value: "llc", label: "LLC" },
            { value: "corp", label: "Corporation" },
          ]}
          value={state.entityType}
          onChange={(val) =>
            dispatch({ type: "SET_ENTITY_TYPE", entityType: val as EntityType })
          }
        />
      </FormSection>

      {/* Package Tier */}
      <FormSection
        title="Select Your Package"
        description="Choose the formation package that best fits your needs."
      >
        {tierCards.length > 0 ? (
          <TierSelectorCards
            tiers={tierCards}
            selectedId={state.selectedTier}
            onSelect={(id) => dispatch({ type: "SET_TIER", tier: id })}
          />
        ) : (
          <p className="text-body-sm text-muted">
            No packages available for the selected state.
          </p>
        )}
      </FormSection>

      {/* Add-Ons */}
      {availableAddOns.length > 0 && (
        <FormSection
          title="Optional Add-Ons"
          description="Enhance your formation with these optional services."
        >
          <AddOnConfigurator
            addOns={availableAddOns}
            selectedIds={state.selectedAddOns}
            onToggle={(id) => dispatch({ type: "TOGGLE_ADDON", addonId: id })}
            basePrice={basePrice}
          />
        </FormSection>
      )}

      {/* Navigation */}
      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          variant="ghost"
          size="md"
          icon={<ArrowLeft className="h-4 w-4" />}
          onClick={() => router.back()}
        >
          Back to Package Page
        </Button>

        <Button
          variant="cta"
          size="lg"
          icon={<ArrowRight className="h-4 w-4" />}
          iconPosition="right"
          disabled={!canContinue}
          onClick={handleContinue}
        >
          Continue to Details
        </Button>
      </div>
    </CheckoutLayout>
  );
}
