"use client";

import React, { useState, useMemo } from "react";
import {
  tierDefinitions,
  getTierMinPrice,
  getTierPrice,
  getPackageUrl,
  ALL_FORMATION_STATES,
  entityOptions,
  comparisonFeatureGroups,
  tierOrder,
} from "@/data/packages";
import { EntityTypeToggle } from "@/design-system/components/EntityTypeToggle";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { PackagePreviewCard } from "@/design-system/components/PackagePreviewCard";
import { PillarFinalCTA } from "@/design-system/components/PillarFinalCTA";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { Link as DSLink } from "@/design-system/primitives/Link";
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
      {/* Hero — dark, matches pillar/cluster/package style */}
      <section className="relative overflow-hidden bg-primary border-b-4 border-b-secondary">
        <GrainOverlay opacity="opacity-[0.03]" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-secondary/[0.18] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-[-20vw] h-[45vw] w-[45vw] rounded-full bg-secondary/[0.18] blur-[140px]" />

        <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
          {/* Breadcrumb */}
          <nav className="mb-8 text-body-sm" aria-label="Breadcrumb">
            <DSLink
              href="/"
              className="!text-white/80 !no-underline hover:!text-white transition-colors"
            >
              Home
            </DSLink>
            <span className="mx-2 text-white/70">/</span>
            <DSLink
              href="/packages"
              className="!text-white/80 !no-underline hover:!text-white transition-colors"
            >
              Packages
            </DSLink>
            <span className="mx-2 text-white/70">/</span>
            <span className="text-white/90" aria-current="page">
              Compare
            </span>
          </nav>

          <div className="max-w-[760px]">
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Package Comparison
            </p>
            <h1 className="font-display type-display-lg font-bold text-white">
              Compare All Packages
            </h1>
            <p className="mt-6 text-body-lg text-white/80 max-w-[560px]">
              Find the right formation package for your business. Compare
              features, pricing, and privacy levels across Bronze, Silver, and
              Gold tiers.
            </p>

            <div className="mt-8">
              <EntityTypeToggle
                options={entityOptions}
                value={entityType}
                onChange={(v) => setEntityType(v as EntityType)}
                dark
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#tier-cards">
                <Button variant="cta" size="lg">
                  Find Your Package
                  <Icon
                    name="ArrowRight"
                    size="sm"
                    className="ml-2 hidden sm:inline-block"
                  />
                </Button>
              </a>
              <a href="#feature-comparison">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  View Feature Table
                  <Icon
                    name="ArrowDown"
                    size="sm"
                    className="ml-2 hidden sm:inline-block"
                  />
                </Button>
              </a>
            </div>

            <p className="mt-5 text-body-sm text-white/70">
              Prefer to talk?{" "}
              <a
                href="tel:1-800-553-0615"
                className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
              >
                Call 1-800-553-0615
              </a>
              {" · "}
              <DSLink
                href="/contact"
                className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
              >
                Schedule a consultation
              </DSLink>
            </p>
          </div>
        </div>
      </section>

      {/* State Selector + Tier Cards */}
      <section
        id="tier-cards"
        className="scroll-mt-24 py-section-y px-container-x bg-background"
      >
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow="By Tier"
            title="Formation Packages by Tier"
            subtitle={`Showing ${entityType === "llc" ? "LLC" : "Corporation"} formation pricing. Select a state below to see available tiers.`}
          />

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
                ? "grid-cols-1 max-w-[32rem] mx-auto"
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
                    href: getPackageUrl(tier.slug, selectedState),
                  }}
                />
              );
            })}
          </div>

          {/* State-specific note */}
          {(selectedState === "California" || selectedState === "Florida") && (
            <p className="mt-6 text-body text-muted text-center max-w-narrow mx-auto">
              {selectedState} packages use a Wyoming or Nevada nominee structure
              with {selectedState} foreign registration included. Only Gold tier
              is available.
            </p>
          )}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section
        id="feature-comparison"
        className="scroll-mt-24 py-section-y px-container-x bg-surface"
      >
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow="Side-by-Side"
            title="Feature Comparison"
            subtitle="See which features are included in each package tier."
          />

          <div className="mt-10 -mx-container-x px-container-x overflow-x-auto overscroll-x-contain pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
            <table className="w-full min-w-[600px] border-collapse text-body-sm">
              <colgroup>
                <col className="w-1/2" />
                <col className="w-1/6" />
                <col className="w-1/6" />
                <col className="w-1/6" />
              </colgroup>
              <thead>
                <tr className="border-b-2 border-foreground">
                  <th className="py-4 px-4 text-left text-body font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center text-body font-semibold text-foreground">
                    Bronze
                  </th>
                  <th className="py-4 px-4 text-center text-body font-semibold text-foreground">
                    Silver
                  </th>
                  <th className="py-4 px-4 text-center text-body font-semibold text-secondary">
                    Gold
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatureGroups.map((group) => {
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
                    featureName: string,
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
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-success/10 text-success"
                            aria-label="Included"
                          >
                            &#10003;
                          </span>
                        );
                      case "add-on":
                        return (
                          <span
                            className="inline-flex items-center rounded-pill bg-warning/10 px-2.5 py-1 text-caption font-semibold uppercase tracking-wide text-warning"
                            aria-label="Available as add-on"
                          >
                            Add-on
                          </span>
                        );
                      default:
                        return (
                          <span
                            className="text-muted/50"
                            aria-label="Not included"
                          >
                            &mdash;
                          </span>
                        );
                    }
                  };

                  return (
                    <React.Fragment key={group.label}>
                      <tr>
                        <td
                          colSpan={4}
                          className="bg-background border-y border-border py-3 px-4 text-caption font-bold uppercase tracking-[0.12em] text-foreground"
                        >
                          {group.label}
                        </td>
                      </tr>
                      {group.features.map((featureName, idx) => (
                        <tr
                          key={featureName}
                          className={`border-b border-border/60 hover:bg-muted/[0.04] transition-colors ${
                            idx % 2 === 1 ? "bg-muted/[0.02]" : ""
                          }`}
                        >
                          <td className="py-3 px-4 text-foreground">
                            {featureName}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {renderCell(getStatus(bronzeTier, featureName))}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {renderCell(getStatus(silverTier, featureName))}
                          </td>
                          <td className="py-3 px-4 text-center bg-secondary/5">
                            {renderCell(getStatus(goldTier, featureName))}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pricing footer — prominent, matches table column widths */}
          <div className="mt-8 -mx-container-x px-container-x overflow-x-auto overscroll-x-contain pb-2">
            <table className="w-full min-w-[600px] border-collapse">
              <colgroup>
                <col className="w-1/2" />
                <col className="w-1/6" />
                <col className="w-1/6" />
                <col className="w-1/6" />
              </colgroup>
              <tbody>
                <tr className="border-t-2 border-foreground">
                  <td className="py-5 px-4 align-middle text-body-sm font-semibold uppercase tracking-[0.12em] text-muted">
                    Starting from
                  </td>
                  {orderedTiers.map((tier) => {
                    const minPrice = getTierMinPrice(tier, entityType);
                    return (
                      <td
                        key={tier.slug}
                        className={`py-5 px-4 text-center align-middle ${
                          tier.tier === "gold" ? "bg-secondary/5" : ""
                        }`}
                      >
                        <span className="font-mono text-heading-sm font-bold text-foreground">
                          ${minPrice.toLocaleString()}
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="py-4 px-4" />
                  {orderedTiers.map((tier) => (
                    <td
                      key={tier.slug}
                      className={`py-4 px-3 text-center ${
                        tier.tier === "gold" ? "bg-secondary/5" : ""
                      }`}
                    >
                      <a
                        href={`/${tier.slug}`}
                        className={`inline-flex w-full items-center justify-center rounded-button px-4 py-3 text-body-sm font-semibold transition-colors ${
                          tier.highlighted
                            ? "bg-accent text-white hover:bg-accent/90"
                            : "bg-foreground text-white hover:bg-foreground/90"
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

      {/* Final CTA — dark close matching pillar/cluster/package style */}
      <PillarFinalCTA
        heading="Need Help Choosing?"
        description="Our formation specialists can help you pick the right package for your business goals, privacy needs, and budget."
        ctaLabel="Contact a Specialist"
        ctaHref="/contact"
      />
    </div>
  );
}
