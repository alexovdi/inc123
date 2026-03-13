import { Check, X, CircleHelp } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface DifferentiatorItem {
  /** Row label */
  label: string;
  /** Incorporate123 value */
  inc123Value: string;
  /** Competitor value */
  competitorValue: string;
  /** Optional tooltip for the label */
  tooltip?: string;
}

export interface DifferentiatorGridProps {
  /** Section heading */
  heading: string;
  /** Comparison items */
  items: DifferentiatorItem[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function DifferentiatorGrid({
  heading,
  items,
  className,
}: DifferentiatorGridProps) {
  return (
    <section
      className={cn(
        "rounded-card bg-primary p-6 text-white sm:p-8 lg:p-10",
        className
      )}
    >
      <h2 className="mb-6 text-center text-heading font-display font-bold sm:mb-8 sm:text-heading-lg">
        {heading}
      </h2>

      {/* Desktop table layout */}
      <div className="hidden md:block">
        {/* Header row */}
        <div className="mb-4 grid grid-cols-3 gap-4 px-4">
          <div className="text-body-sm font-medium text-white/80">Feature</div>
          <div className="text-center text-body-sm font-semibold text-white">
            Incorporate123
          </div>
          <div className="text-center text-body-sm font-medium text-white/80">
            Typical Competitor
          </div>
        </div>

        {/* Data rows */}
        <div className="divide-y divide-white/10">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center gap-4 px-4 py-3.5 transition-colors hover:bg-white/5"
            >
              {/* Label */}
              <div className="flex items-center gap-2 text-body text-white/90">
                <span>{item.label}</span>
                {item.tooltip && (
                  <span
                    className="cursor-help text-white/60"
                    title={item.tooltip}
                  >
                    <CircleHelp className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </div>

              {/* Inc123 value */}
              <div className="flex items-center justify-center gap-2">
                <Check
                  className="h-4 w-4 shrink-0 text-white/70"
                  aria-hidden="true"
                />
                <span className="text-body-sm font-medium text-white">
                  {item.inc123Value}
                </span>
              </div>

              {/* Competitor value */}
              <div className="flex items-center justify-center gap-2">
                <X
                  className="h-4 w-4 shrink-0 text-white/60"
                  aria-hidden="true"
                />
                <span className="text-body-sm text-white/70">
                  {item.competitorValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile card layout */}
      <div className="space-y-3 md:hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-card bg-white/5 p-4"
          >
            {/* Label */}
            <div className="mb-3 flex items-center gap-2 text-body font-medium text-white">
              <span>{item.label}</span>
              {item.tooltip && (
                <span
                  className="cursor-help text-white/60"
                  title={item.tooltip}
                >
                  <CircleHelp className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </div>

            {/* Values */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check
                  className="h-4 w-4 shrink-0 text-white/70"
                  aria-hidden="true"
                />
                <span className="text-body-sm text-white/90">
                  <span className="font-semibold text-white">Ours:</span>{" "}
                  {item.inc123Value}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <X
                  className="h-4 w-4 shrink-0 text-white/60"
                  aria-hidden="true"
                />
                <span className="text-body-sm text-white/70">
                  <span className="font-medium">Theirs:</span>{" "}
                  {item.competitorValue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

DifferentiatorGrid.displayName = "DifferentiatorGrid";

export { DifferentiatorGrid };
