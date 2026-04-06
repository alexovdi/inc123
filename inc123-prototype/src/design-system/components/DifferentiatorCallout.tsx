import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface DifferentiatorCalloutProps {
  /** The stat to display prominently (e.g. "98%", "$0", "24hr") */
  stat: string;
  /** Comparison / context text (e.g. "vs. industry average of 72%") */
  comparison: string;
  /** Our highlighted value (e.g. "Included free with every package") */
  ours: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function DifferentiatorCallout({
  stat,
  comparison,
  ours,
  className,
}: DifferentiatorCalloutProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-secondary/20 bg-primary-50 p-6",
        className
      )}
    >
      {/* Stat */}
      <div className="text-display font-mono font-bold text-foreground">
        {stat}
      </div>

      {/* Comparison */}
      <p className="mt-1 text-body text-muted">{comparison}</p>

      {/* Our value */}
      <p className="mt-3 text-body font-medium text-success">{ours}</p>
    </div>
  );
}

DifferentiatorCallout.displayName = "DifferentiatorCallout";

export { DifferentiatorCallout };
