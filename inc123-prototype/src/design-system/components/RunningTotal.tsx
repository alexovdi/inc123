"use client";

import { useState, useCallback } from "react";
import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface RunningTotalTier {
  name: string;
  price: number;
}

export interface RunningTotalAddOn {
  name: string;
  price: number;
}

export interface RunningTotalProps {
  /** Selected tier info */
  tier: RunningTotalTier;
  /** Entity type label (e.g. "LLC", "Corporation") */
  entityType: string;
  /** Selected add-ons */
  addOns: RunningTotalAddOn[];
  /** Computed total */
  total: number;
  /** Checkout destination */
  checkoutHref: string;
  /** Checkout button label (default: "Proceed to Checkout") */
  checkoutLabel?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Itemized breakdown (shared between layouts)
   ------------------------------------------------ */
function ItemizedBreakdown({
  tier,
  entityType,
  addOns,
  total,
}: Omit<RunningTotalProps, "checkoutHref" | "className">) {
  return (
    <div className="space-y-3">
      {/* Tier line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-body-sm font-medium text-foreground">
            {tier.name}
          </span>
          <Badge variant="info" size="sm">
            {entityType}
          </Badge>
        </div>
        <span className="font-mono text-body-sm text-foreground">
          ${tier.price.toLocaleString()}
        </span>
      </div>

      {/* Add-on lines */}
      {addOns.map((addOn, i) => (
        <div key={i} className="flex items-center justify-between">
          <span className="text-body-sm text-muted">{addOn.name}</span>
          <span className="font-mono text-body-sm text-muted">
            +${addOn.price.toLocaleString()}
          </span>
        </div>
      ))}

      {/* Divider */}
      <div role="separator" className="h-px w-full bg-border" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-body font-semibold text-foreground">Total</span>
        <span className="font-mono text-heading-sm font-bold text-foreground">
          ${total.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function RunningTotal({
  tier,
  entityType,
  addOns,
  total,
  checkoutHref,
  checkoutLabel = "Proceed to Checkout",
  className,
}: RunningTotalProps) {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setMobileExpanded((prev) => !prev);
  }, []);

  return (
    <>
      {/* Desktop: Sticky sidebar card */}
      <aside
        className={cn(
          "hidden lg:block sticky top-24 bg-surface shadow-card rounded-card border border-border p-6",
          className,
        )}
      >
        <h4 className="font-display text-heading-sm font-semibold text-foreground mb-4">
          Order Summary
        </h4>

        <ItemizedBreakdown
          tier={tier}
          entityType={entityType}
          addOns={addOns}
          total={total}
        />

        <div className="mt-6">
          <Button variant="cta" fullWidth asChild>
            <a href={checkoutHref}>{checkoutLabel}</a>
          </Button>
        </div>
      </aside>

      {/* Mobile: Sticky bottom bar */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface border-t border-border shadow-card",
          className,
        )}
      >
        {/* Expandable itemized view */}
        {mobileExpanded && (
          <div className="px-4 pt-4 pb-2 border-b border-border">
            <ItemizedBreakdown
              tier={tier}
              entityType={entityType}
              addOns={addOns}
              total={total}
            />
          </div>
        )}

        {/* Collapsed bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={toggleExpanded}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-button px-1"
            aria-expanded={mobileExpanded}
            aria-label="Toggle order details"
          >
            <span className="font-mono text-heading-sm font-bold text-foreground">
              ${total.toLocaleString()}
            </span>
            <Icon
              name="ChevronUp"
              size="sm"
              className={cn(
                "text-muted transition-transform duration-200",
                mobileExpanded && "rotate-180",
              )}
            />
          </button>

          <Button variant="cta" size="sm" asChild>
            <a href={checkoutHref}>{checkoutLabel}</a>
          </Button>
        </div>
      </div>
    </>
  );
}

RunningTotal.displayName = "RunningTotal";

export { RunningTotal };
