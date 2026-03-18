import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ValueComparisonCalloutProps {
  /** Prominent price display */
  price: string;
  /** Value proposition badge text */
  valueStatement: string;
  /** Detailed description of included value */
  includedValue: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ValueComparisonCallout({
  price,
  valueStatement,
  includedValue,
  className,
}: ValueComparisonCalloutProps) {
  return (
    <div
      className={cn(
        "bg-success/5 border border-success/20 rounded-card p-6",
        className,
      )}
    >
      {/* Price */}
      <p className="font-mono text-heading-lg font-bold text-foreground">
        {price}
      </p>

      {/* Value statement badge */}
      <Badge variant="success" size="md" className="mt-3">
        {valueStatement}
      </Badge>

      {/* Included value description */}
      <p className="text-body text-muted mt-3">{includedValue}</p>
    </div>
  );
}

ValueComparisonCallout.displayName = "ValueComparisonCallout";

export { ValueComparisonCallout };
