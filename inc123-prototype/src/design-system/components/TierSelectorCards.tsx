"use client";

import { cn } from "@/design-system/utils/cn";
import { Badge, Icon } from "@/design-system/primitives";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface TierSelectorCard {
  /** Unique tier identifier */
  id: string;
  /** Tier display name */
  name: string;
  /** Formatted price string or number */
  price: number;
  /** Key features (3-4 bullet points) */
  features: string[];
  /** Optional badge text (e.g. "Recommended") */
  badge?: string;
  /** Whether this card should be visually highlighted */
  highlighted?: boolean;
}

export interface TierSelectorCardsProps {
  /** Available tier options */
  tiers: TierSelectorCard[];
  /** Currently selected tier ID */
  selectedId: string;
  /** Selection change handler */
  onSelect: (id: string) => void;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Helpers
   ------------------------------------------------ */
function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function TierSelectorCards({
  tiers,
  selectedId,
  onSelect,
  className,
}: TierSelectorCardsProps) {
  return (
    <div
      className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}
      role="radiogroup"
      aria-label="Package tier"
    >
      {tiers.map((tier) => {
        const isSelected = tier.id === selectedId;

        return (
          <button
            key={tier.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(tier.id)}
            className={cn(
              "relative flex flex-col rounded-card border-2 p-5 text-left transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
              isSelected
                ? "border-secondary bg-secondary/5 shadow-card-hover"
                : tier.highlighted
                  ? "border-secondary/40 bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                  : "border-border bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
            )}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute -top-3 right-4">
                <Badge variant="warning" size="sm">
                  {tier.badge}
                </Badge>
              </div>
            )}

            {/* Radio indicator */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h4 className="text-heading-sm font-display font-semibold text-foreground">
                  {tier.name}
                </h4>
              </div>
              <div
                className={cn(
                  "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  isSelected
                    ? "border-secondary bg-secondary"
                    : "border-border bg-surface"
                )}
                aria-hidden="true"
              >
                {isSelected && (
                  <div className="h-2 w-2 rounded-full bg-white" />
                )}
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-heading font-display font-bold text-foreground font-mono">
                {formatUSD(tier.price)}
              </span>
              <span className="ml-1 text-body-sm text-muted">all-inclusive</span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mt-auto">
              {tier.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-body-sm text-muted"
                >
                  <Icon
                    name="Check"
                    size="xs"
                    className="mt-0.5 shrink-0 text-success"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </button>
        );
      })}
    </div>
  );
}

TierSelectorCards.displayName = "TierSelectorCards";

export { TierSelectorCards };
