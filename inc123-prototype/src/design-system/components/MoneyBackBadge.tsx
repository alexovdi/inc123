import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const moneyBackVariants = cva(
  "inline-flex items-start gap-3 bg-success/5 border border-success/20 rounded-card text-success",
  {
    variants: {
      variant: {
        standard: "px-4 py-3",
        detailed: "px-5 py-4",
      },
    },
    defaultVariants: {
      variant: "standard",
    },
  }
);

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface MoneyBackBadgeProps
  extends VariantProps<typeof moneyBackVariants> {
  /** Display variant */
  variant?: "standard" | "detailed";
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function MoneyBackBadge({
  variant = "standard",
  className,
}: MoneyBackBadgeProps) {
  return (
    <div className={cn(moneyBackVariants({ variant }), className)}>
      <Icon
        name="ShieldCheck"
        size="md"
        className="text-success shrink-0 mt-0.5"
      />

      <div className="flex flex-col">
        <span className="text-body font-semibold text-success">
          30-Day Money-Back Guarantee
        </span>

        {variant === "detailed" && (
          <p className="text-body-sm text-success/80 mt-1">
            Not satisfied? Get a full refund within 30 days of purchase, no
            questions asked.
          </p>
        )}
      </div>
    </div>
  );
}

MoneyBackBadge.displayName = "MoneyBackBadge";

export { MoneyBackBadge, moneyBackVariants };
