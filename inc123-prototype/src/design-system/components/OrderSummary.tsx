"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Divider } from "@/design-system/primitives/Divider";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface OrderSummaryPackage {
  name: string;
  tier: string;
  price: number;
}

export interface OrderSummaryAddOn {
  name: string;
  price: number;
}

export interface OrderSummaryProps {
  /** Selected package details */
  package: OrderSummaryPackage;
  /** Entity type label (e.g. "LLC", "Corporation") */
  entityType: string;
  /** Selected add-on items */
  addOns: OrderSummaryAddOn[];
  /** Subtotal before fees */
  subtotal: number;
  /** Optional state filing fees */
  stateFees?: number;
  /** Order total */
  total: number;
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

function tierToVariant(tier: string): "bronze" | "silver" | "gold" | undefined {
  const normalized = tier.toLowerCase();
  if (
    normalized === "bronze" ||
    normalized === "silver" ||
    normalized === "gold"
  ) {
    return normalized;
  }
  return undefined;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function OrderSummary({
  package: pkg,
  entityType,
  addOns,
  subtotal,
  stateFees,
  total,
  className,
}: OrderSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const summaryContent = (
    <>
      {/* Package header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-heading-sm font-display font-semibold text-foreground">
            {pkg.name}
          </h3>
          <p className="mt-1 text-body-sm text-muted">{entityType}</p>
        </div>
        <Badge tier={tierToVariant(pkg.tier)} size="sm">
          {pkg.tier}
        </Badge>
      </div>

      <Divider className="my-4" />

      {/* Add-ons */}
      {addOns.length > 0 && (
        <>
          <div className="space-y-2">
            <p className="text-body-sm font-medium text-foreground">Add-ons</p>
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-body-sm"
              >
                <span className="text-muted">{addOn.name}</span>
                <span className="font-mono text-foreground">
                  {formatUSD(addOn.price)}
                </span>
              </div>
            ))}
          </div>

          <Divider className="my-4" />
        </>
      )}

      {/* Totals */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-body-sm">
          <span className="text-muted">Subtotal</span>
          <span className="font-mono text-foreground">
            {formatUSD(subtotal)}
          </span>
        </div>

        {stateFees != null && stateFees > 0 && (
          <div className="flex items-center justify-between text-body-sm">
            <span className="text-muted">State Filing Fees</span>
            <span className="font-mono text-foreground">
              {formatUSD(stateFees)}
            </span>
          </div>
        )}

        <Divider className="my-2" />

        <div className="flex items-center justify-between">
          <span className="text-body font-semibold text-foreground">Total</span>
          <span className="text-heading font-display font-bold font-mono text-foreground">
            {formatUSD(total)}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <aside
      className={cn(
        "bg-surface shadow-card rounded-card border border-border",
        className,
      )}
    >
      {/* Desktop: sticky sidebar, always visible */}
      <div className="hidden md:block sticky top-24 p-6">{summaryContent}</div>

      {/* Mobile: collapsible */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-3">
            <span className="text-body font-semibold text-foreground">
              Order Total
            </span>
            <span className="text-heading-sm font-display font-bold font-mono text-foreground">
              {formatUSD(total)}
            </span>
          </div>
          <span className="flex items-center gap-1 text-body-sm text-secondary">
            {isExpanded ? "Hide" : "View"} Details
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isExpanded && "rotate-180",
              )}
              aria-hidden="true"
            />
          </span>
        </button>

        {isExpanded && (
          <div className="border-t border-border px-4 pb-4 pt-4">
            {summaryContent}
          </div>
        )}
      </div>
    </aside>
  );
}

OrderSummary.displayName = "OrderSummary";

export { OrderSummary };
