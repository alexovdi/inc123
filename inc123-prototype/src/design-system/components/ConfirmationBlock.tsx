import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Divider } from "@/design-system/primitives/Divider";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ConfirmationPackage {
  name: string;
  tier: string;
  price: number;
}

export interface ConfirmationAddOn {
  name: string;
  price: number;
}

export interface ConfirmationNextStep {
  step: number;
  title: string;
  description: string;
  timeline: string;
}

export interface ConfirmationBlockProps {
  /** Order number */
  orderNumber: string;
  /** Package details */
  package: ConfirmationPackage;
  /** Entity type label */
  entityType: string;
  /** Selected add-ons */
  addOns: ConfirmationAddOn[];
  /** Order total */
  total: number;
  /** Next steps after purchase */
  nextSteps: ConfirmationNextStep[];
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
function ConfirmationBlock({
  orderNumber,
  package: pkg,
  entityType,
  addOns,
  total,
  nextSteps,
  className,
}: ConfirmationBlockProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-card border border-border overflow-hidden",
        className,
      )}
    >
      {/* Success header */}
      <div className="bg-success/10 border-b border-success/20 px-6 py-8 text-center">
        <div className="flex justify-center mb-3">
          <Icon
            name="CircleCheck"
            size="xl"
            className="text-success"
            ariaLabel="Success"
          />
        </div>
        <h2 className="text-heading-lg font-display font-bold text-foreground">
          Order Confirmed!
        </h2>
        <p className="mt-2 text-body text-muted">Order #{orderNumber}</p>
      </div>

      {/* Order summary */}
      <div className="px-6 py-6">
        <h3 className="text-heading-sm font-display font-semibold text-foreground mb-4">
          Order Summary
        </h3>

        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-body font-medium text-foreground">{pkg.name}</p>
            <p className="text-body-sm text-muted">{entityType}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge tier={tierToVariant(pkg.tier)} size="sm">
              {pkg.tier}
            </Badge>
            <span className="font-mono text-body font-medium text-foreground">
              {formatUSD(pkg.price)}
            </span>
          </div>
        </div>

        {addOns.length > 0 && (
          <>
            <Divider className="my-3" />
            <div className="space-y-2">
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
          </>
        )}

        <Divider className="my-3" />

        <div className="flex items-center justify-between">
          <span className="text-body font-semibold text-foreground">Total</span>
          <span className="text-heading font-display font-bold font-mono text-foreground">
            {formatUSD(total)}
          </span>
        </div>
      </div>

      <Divider />

      {/* What happens next */}
      <div className="px-6 py-6">
        <h3 className="text-heading-sm font-display font-semibold text-foreground mb-6">
          What Happens Next
        </h3>

        <div className="space-y-6">
          {nextSteps.map((step, index) => (
            <div key={step.step} className="flex gap-4">
              {/* Step number + connector line */}
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-body-sm font-semibold">
                  {step.step}
                </div>
                {index < nextSteps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>

              {/* Step content */}
              <div className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-body font-medium text-foreground">
                    {step.title}
                  </h4>
                  <Badge variant="info" size="sm">
                    {step.timeline}
                  </Badge>
                </div>
                <p className="text-body-sm text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Print receipt */}
      <div className="px-6 py-4 flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          icon={<Icon name="Printer" size="sm" />}
          onClick={() => window.print()}
        >
          Print Receipt
        </Button>
      </div>
    </div>
  );
}

ConfirmationBlock.displayName = "ConfirmationBlock";

export { ConfirmationBlock };
