"use client";

import { useState, useCallback, useMemo } from "react";
import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Checkbox } from "@/design-system/primitives/Checkbox";
import { Icon } from "@/design-system/primitives/Icon";
import { Tooltip } from "@/design-system/primitives/Tooltip";
import { EntityTypeToggle } from "./EntityTypeToggle";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface PricingFeature {
  name: string;
  tooltip?: string;
  status: "included" | "not-included" | "add-on";
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  badge?: string;
  highlighted?: boolean;
}

export interface PricingAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  tooltip?: string;
}

export interface PricingEntityToggle {
  options: { value: string; label: string }[];
  default: string;
}

export interface TierSelection {
  tierId: string;
  entityType: string;
  addOns: string[];
  total: number;
}

export interface PricingGridProps {
  /** Package tiers to display as columns */
  tiers: PricingTier[];
  /** Entity type toggle config (omit to hide toggle) */
  entityToggle?: PricingEntityToggle;
  /** Available add-ons */
  addOns?: PricingAddOn[];
  /** Callback when a tier is selected */
  onTierSelect: (selection: TierSelection) => void;
  /**
   * Compact mode: only show the top N features on every card and link to a
   * full comparison page. Used on package detail pages so the decision grid
   * stays decision-oriented instead of devolving into a feature dump.
   */
  maxFeatures?: number;
  /** Link used in compact mode for the "See full comparison" CTA. */
  compareHref?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Sub-components
   ------------------------------------------------ */
function FeatureStatusIcon({ status }: { status: PricingFeature["status"] }) {
  switch (status) {
    case "included":
      return <Icon name="Check" size="sm" className="text-success" />;
    case "not-included":
      return <Icon name="X" size="sm" className="text-muted" />;
    case "add-on":
      return (
        <Badge variant="warning" size="sm">
          Add-on
        </Badge>
      );
  }
}

function FeatureRow({ feature }: { feature: PricingFeature }) {
  const content = (
    <span className="inline-flex items-center gap-2">
      <FeatureStatusIcon status={feature.status} />
      <span className="text-body-sm text-foreground">{feature.name}</span>
    </span>
  );

  if (feature.tooltip) {
    return (
      <Tooltip
        trigger={content}
        content={feature.tooltip}
        position="top"
        size="sm"
      />
    );
  }

  return content;
}

/* ------------------------------------------------
   Constants
   ------------------------------------------------ */
/** Number of features visible on mobile before "See all" toggle */
const MOBILE_FEATURE_LIMIT = 5;

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PricingGrid({
  tiers,
  entityToggle,
  addOns,
  onTierSelect,
  maxFeatures,
  compareHref,
  className,
}: PricingGridProps) {
  const compact = typeof maxFeatures === "number";
  const [entityType, setEntityType] = useState(entityToggle?.default ?? "llc");
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, boolean>>(
    {},
  );
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>(
    {},
  );

  const toggleFeatureExpand = useCallback((tierId: string) => {
    setExpandedTiers((prev) => ({ ...prev, [tierId]: !prev[tierId] }));
  }, []);

  const toggleAddOn = useCallback((addOnId: string, checked: boolean) => {
    setSelectedAddOns((prev) => ({ ...prev, [addOnId]: checked }));
  }, []);

  const activeAddOnIds = useMemo(
    () =>
      Object.entries(selectedAddOns)
        .filter(([, v]) => v)
        .map(([k]) => k),
    [selectedAddOns],
  );

  const addOnTotal = useMemo(
    () =>
      activeAddOnIds.reduce((sum, id) => {
        const addOn = (addOns ?? []).find((a) => a.id === id);
        return sum + (addOn?.price ?? 0);
      }, 0),
    [activeAddOnIds, addOns],
  );

  const handleTierSelect = useCallback(
    (tierId: string, tierPrice: number) => {
      onTierSelect({
        tierId,
        entityType,
        addOns: activeAddOnIds,
        total: tierPrice + addOnTotal,
      });
    },
    [entityType, activeAddOnIds, addOnTotal, onTierSelect],
  );

  return (
    <div className={cn("w-full", className)}>
      {/* Entity toggle */}
      {entityToggle && (
        <div className="flex justify-center mb-8">
          <EntityTypeToggle
            options={entityToggle.options}
            value={entityType}
            onChange={setEntityType}
          />
        </div>
      )}

      {/* Tier columns — Gold-first on mobile via CSS order */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {tiers.map((tier, index) => {
          const isExpanded = !!expandedTiers[tier.id];
          const visibleFeatures = compact
            ? tier.features.slice(0, maxFeatures)
            : tier.features;
          const hasMoreFeatures = compact
            ? tier.features.length > (maxFeatures ?? 0)
            : tier.features.length > MOBILE_FEATURE_LIMIT;

          return (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col bg-surface rounded-card border p-6 transition-shadow",
                tier.highlighted
                  ? "border-secondary shadow-card-hover md:z-10"
                  : "border-border shadow-card",
                /* Mobile: highlighted (Gold) tier appears first */
                tier.highlighted ? "order-first" : "order-none",
                /* Desktop: restore natural column order (bronze=0, silver=1, gold=2) */
                index === 0 && "md:order-1",
                index === 1 && "md:order-2",
                index === 2 && "md:order-3",
              )}
            >
              {/* Badge — absolutely positioned so it overlaps top edge and
                  doesn't push card height out of alignment with siblings. */}
              {tier.badge && (
                <div className="absolute left-1/2 -top-3 -translate-x-1/2">
                  <Badge
                    variant={tier.highlighted ? "info" : "default"}
                    size="sm"
                  >
                    {tier.badge}
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="font-display text-heading-sm font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-body-sm text-muted">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mt-5">
                  <span className="font-mono text-heading-lg font-bold text-foreground">
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className="text-body-sm text-muted ml-1">
                    /{tier.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className={cn("space-y-3 mb-6", compact ? "" : "flex-1")}>
                {visibleFeatures.map((feature, fi) => (
                  <li
                    key={fi}
                    className={cn(
                      "flex items-start",
                      !compact && fi >= MOBILE_FEATURE_LIMIT && !isExpanded
                        ? "hidden md:flex"
                        : "flex",
                    )}
                  >
                    <FeatureRow feature={feature} />
                  </li>
                ))}
              </ul>

              {/* Compact mode: link out to full comparison */}
              {compact && hasMoreFeatures && compareHref && (
                <a
                  href={compareHref}
                  className="mb-5 inline-flex items-center gap-1 text-body-sm font-medium text-secondary hover:gap-2 transition-all"
                >
                  See full feature comparison
                  <Icon name="ArrowRight" size="sm" className="shrink-0" />
                </a>
              )}

              {/* Non-compact mobile expand toggle */}
              {!compact && hasMoreFeatures && (
                <button
                  type="button"
                  onClick={() => toggleFeatureExpand(tier.id)}
                  className="md:hidden text-body-sm font-medium text-secondary hover:text-secondary/80 mb-4 inline-flex items-center gap-1 mx-auto transition-colors"
                >
                  {isExpanded
                    ? "Show fewer features"
                    : `See all ${tier.features.length} features`}
                  <Icon
                    name={isExpanded ? "ChevronUp" : "ChevronDown"}
                    size="sm"
                    className="shrink-0"
                  />
                </button>
              )}

              {/* Spacer to keep the CTA pinned to the bottom in compact mode */}
              {compact && <div className="flex-1" />}

              {/* CTA */}
              <Button
                variant={tier.highlighted ? "cta" : "primary"}
                fullWidth
                onClick={() => handleTierSelect(tier.id, tier.price)}
              >
                Order Now
              </Button>
            </div>
          );
        })}
      </div>

      {/* Add-ons section */}
      {(addOns ?? []).length > 0 && (
        <div className="mt-10 bg-surface rounded-card border border-border p-6">
          <h4 className="font-display text-heading-sm font-semibold text-foreground mb-4">
            Available Add-Ons
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(addOns ?? []).map((addOn) => {
              const checkbox = (
                <Checkbox
                  key={addOn.id}
                  label=""
                  checked={!!selectedAddOns[addOn.id]}
                  onChange={(checked) => toggleAddOn(addOn.id, checked)}
                />
              );

              return (
                <div key={addOn.id} className="flex items-start gap-3">
                  {checkbox}
                  <div className="flex flex-col">
                    <span className="text-body-sm font-medium text-foreground">
                      {addOn.name}
                      <span className="font-mono text-muted ml-2">
                        +${addOn.price}
                      </span>
                    </span>
                    <span className="text-caption text-muted">
                      {addOn.description}
                    </span>
                    {addOn.tooltip && (
                      <Tooltip
                        trigger={
                          <Icon
                            name="Info"
                            size="xs"
                            className="text-muted mt-1 cursor-help"
                          />
                        }
                        content={addOn.tooltip}
                        position="top"
                        size="sm"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

PricingGrid.displayName = "PricingGrid";

export { PricingGrid };
