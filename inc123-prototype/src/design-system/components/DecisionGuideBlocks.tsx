import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface DecisionGuideOption {
  title: string;
  description: string;
  criteria: string[];
}

export interface DecisionGuideBlocksProps {
  /** Decision options to display */
  options: DecisionGuideOption[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function DecisionGuideBlocks({
  options,
  className,
}: DecisionGuideBlocksProps) {
  return (
    <div className={cn("flex flex-col md:flex-row gap-6", className)}>
      {options.map((option, i) => (
        <div
          key={i}
          className="flex-1 bg-surface rounded-card border border-border p-6"
        >
          {/* Title */}
          <h4 className="font-display text-heading-sm font-semibold text-foreground">
            {option.title}
          </h4>

          {/* Description */}
          <p className="text-body-sm text-muted mt-2">{option.description}</p>

          {/* Criteria list */}
          <ul className="mt-4 space-y-2.5" role="list">
            {option.criteria.map((criterion, ci) => (
              <li key={ci} className="flex items-start gap-2">
                <Icon
                  name="Check"
                  size="sm"
                  className="text-success shrink-0 mt-0.5"
                />
                <span className="text-body-sm text-foreground">
                  {criterion}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

DecisionGuideBlocks.displayName = "DecisionGuideBlocks";

export { DecisionGuideBlocks };
