"use client";

import { useState, useMemo } from "react";
import {
  tierDefinitions,
  getTierMinPrice,
  getTierPrice,
  ALL_FORMATION_STATES,
  entityOptions,
  comparisonFeatures,
  tierOrder,
} from "@/data/packages";
import { CTABlock } from "@/design-system/components/CTABlock";
import { EntityTypeToggle } from "@/design-system/components/EntityTypeToggle";
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import type { EntityType, TierDefinition } from "@/lib/types";

const orderedTiers = [...tierDefinitions].sort(
  (a, b) => tierOrder[a.tier] - tierOrder[b.tier],
);

export default function ComparePackagesPage() {
  const [entityType, setEntityType] = useState<EntityType>("llc");
  const [selectedState, setSelectedState] = useState("Wyoming");

  /** Get pricing for a tier in current state */
  function getPrice(tier: TierDefinition): number | null {
    const statePrice = getTierPrice(tier, selectedState, entityType);
    return statePrice ? statePrice.formation : null;
  }

  /** Tiers available in the selected state */
  const visibleTiers = useMemo(
    () => orderedTiers.filter((t) => t.availableStates.includes(selectedState)),
    [selectedState],
  );

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-primary text-white py-section-y px-container-x">
        <div className="mx-auto max-w-content text-center">
          <h1 className="font-display text-display font-bold">
            Compare All Packages
          </h1>
          <p className="mt-4 text-body-lg text-white/80 max-w-narrow mx-auto">
            Find the right formation package for your business. Compare
            features, pricing, and privacy levels across all tiers.
          </p>
          <div className="mt-8 flex justify-center">
            <EntityTypeToggle
              options={entityOptions}
              value={entityType}
              onChange={(v) => setEntityType(v as EntityType)}
              dark
            />
          </div>
        </div>
      </section>

      {/* State Selector + Tier Cards */}
      <section className="py-section-y px-container-x bg-background">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            Formation Packages by Tier
          </h2>
          <p className="mt-2 text-body text-muted text-center max-w-narrow mx-auto">
            Showing {entityType === "llc" ? "LLC" : "Corporation"} formation
            pricing. Select a state below to see available tiers.
          </p>

          {/* State Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ALL_FORMATION_STATES.map(({ name, abbreviation }) => {
              const isSelected = selectedState === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedState(name)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-body-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-secondary text-white shadow-card"
                      : "bg-surface border border-border text-foreground hover:bg-primary-50"
                  }`}
                >
                  <span className="font-bold">{abbreviation}</span>
                  <span className="hidden sm:inline">{name}</span>
                </button>
              );
            })}
          </div>

          {/* Tier Cards */}
          <div
            className={`mt-10 grid gap-6 ${
              visibleTiers.length === 1
                ? "grid-cols-1 max-w-lg mx-auto"
                : visibleTiers.length === 2
                  ? "grid-cols-1 sm:grid-cols-2 max-w-[48rem] mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visibleTiers.map((tier) => {
              const price = getPrice(tier);
              if (price === null) return null;
              const stateVariant = tier.stateVariants[selectedState];
              const renewal = stateVariant
                ? `$${stateVariant.prices[entityType].renewal}/yr renewal`
                : undefined;

              return (
                <PackagePreviewCard
                  key={tier.slug}
                  tier={{
                    name: `${tier.name} ${entityType === "llc" ? "LLC" : "Corporation"}`,
                    badge: tier.badge,
                    price,
                    period: "formation",
                    description: stateVariant?.description ?? tier.description,
                    highlighted: tier.highlighted,
                    renewal,
                  }}
                  entityType={entityType === "llc" ? "LLC" : "Corp"}
                  cta={{
                    label: "View Package",
                    href: `/${tier.slug}?state=${selectedState.toLowerCase()}`,
                  }}
                />
              );
            })}
          </div>

          {/* State-specific note */}
          {(selectedState === "California" || selectedState === "Florida") && (
            <p className="mt-6 text-body-sm text-muted text-center max-w-narrow mx-auto">
              {selectedState} packages use a Wyoming or Nevada nominee structure
              with {selectedState} foreign registration included. Only Gold tier
              is available.
            </p>
          )}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-heading-lg font-bold text-foreground text-center">
            Feature Comparison
          </h2>
          <p className="mt-2 text-body text-muted text-center">
            See which features are included in each package tier.
          </p>

          <div className="mt-10 -mx-container-x px-container-x overflow-x-auto overscroll-x-contain pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
            <table className="w-full min-w-[600px] border-collapse text-body-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="py-3 px-4 text-left font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-foreground">
                    Bronze
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-foreground">
                    Silver
                  </th>
                  <th className="py-3 px-4 text-center font-semibold text-secondary">
                    Gold
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((featureName) => {
                  const bronzeTier = tierDefinitions.find(
                    (t) => t.tier === "bronze",
                  );
                  const silverTier = tierDefinitions.find(
                    (t) => t.tier === "silver",
                  );
                  const goldTier = tierDefinitions.find(
                    (t) => t.tier === "gold",
                  );

                  const getStatus = (
                    tier: TierDefinition | undefined,
                  ): string => {
                    if (!tier) return "not-included";
                    const feature = tier.features.find(
                      (f) => f.name === featureName,
                    );
                    return feature?.status ?? "not-included";
                  };

                  const renderCell = (status: string) => {
                    switch (status) {
                      case "included":
                        return (
                          <span
                            className="text-success font-medium"
                            aria-label="Included"
                          >
                            &#10003;
                          </span>
                        );
                      case "add-on":
                        return (
                          <span
                            className="text-warning font-medium"
                            aria-label="Available as add-on"
                          >
                            Add-on
                          </span>
                        );
                      default:
                        return (
                          <span
                            className="text-muted"
                            aria-label="Not included"
                          >
                            &mdash;
                          </span>
                        );
                    }
                  };

                  return (
                    <tr
                      key={featureName}
                      className="border-b border-border hover:bg-muted/5 transition-colors"
                    >
                      <td className="py-3 px-4 text-foreground">
                        {featureName}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(getStatus(bronzeTier))}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(getStatus(silverTier))}
                      </td>
                      <td className="py-3 px-4 text-center bg-secondary/5">
                        {renderCell(getStatus(goldTier))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pricing row below the table */}
          <div className="mt-6 -mx-container-x px-container-x overflow-x-auto overscroll-x-contain pb-2">
            <table className="w-full min-w-[600px] border-collapse text-body-sm">
              <tbody>
                <tr className="border-t-2 border-border">
                  <td className="py-3 px-4 font-semibold text-foreground">
                    Starting From
                  </td>
                  {orderedTiers.map((tier) => {
                    const minPrice = getTierMinPrice(tier, entityType);
                    return (
                      <td
                        key={tier.slug}
                        className={`py-3 px-4 text-center font-mono font-bold text-foreground ${tier.tier === "gold" ? "bg-secondary/5" : ""}`}
                      >
                        ${minPrice.toLocaleString()}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="py-2 px-4" />
                  {orderedTiers.map((tier) => (
                    <td key={tier.slug} className="py-2 px-4 text-center">
                      <a
                        href={`/${tier.slug}`}
                        className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-body-sm font-medium transition-colors ${
                          tier.highlighted
                            ? "bg-accent text-white hover:bg-accent/90"
                            : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                        }`}
                      >
                        View {tier.name}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <CTABlock
            variant="dark"
            heading="Need Help Choosing?"
            description="Our formation specialists can help you pick the right package for your business goals, privacy needs, and budget."
            primaryCTA={{
              label: "Contact a Specialist",
              href: "/contact",
            }}
            secondaryCTA={{
              label: "Call (775) 313-4155",
              href: "tel:7753134155",
            }}
            trustSignal="25+ Years of Formation Experience"
          />
        </div>
      </section>
    </div>
  );
}
