import { cn } from "@/design-system/utils/cn";
import {
  pillarBorderTopMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import { Icon } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface SuggestionItem {
  title: string;
  description: string;
  href: string;
  pillar?: PillarName;
}

export interface WhereToGoNextProps {
  /** Section heading */
  heading?: string;
  /** Navigation suggestion cards */
  suggestions: SuggestionItem[];
  /** Maximum number of items to display */
  maxItems?: number;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function WhereToGoNext({
  heading = "Where to Go Next",
  suggestions,
  maxItems = 3,
  className,
}: WhereToGoNextProps) {
  const visibleSuggestions = suggestions.slice(0, maxItems);

  return (
    <section
      className={cn(
        "bg-primary-50 rounded-card py-section-y-sm px-container-x",
        className,
      )}
    >
      <h2 className="text-heading font-display font-semibold text-foreground text-center mb-8">
        {heading}
      </h2>

      <div
        className={cn(
          "flex flex-col md:flex-row gap-6",
          "max-w-content mx-auto",
        )}
      >
        {visibleSuggestions.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={cn(
              "group flex-1 block bg-surface rounded-card border border-border p-6",
              "shadow-card hover:shadow-card-hover",
              "transition-all duration-200",
              item.pillar && "border-t-2",
              item.pillar && pillarBorderTopMap[item.pillar],
            )}
          >
            <h3 className="text-heading-sm font-display font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="text-body-sm text-muted mt-2">{item.description}</p>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 mt-4 text-body-sm font-medium transition-all duration-200",
                "group-hover:gap-2",
                item.pillar ? pillarTextMap[item.pillar] : "text-secondary",
              )}
            >
              Explore
              <Icon
                name="ArrowRight"
                size="sm"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

WhereToGoNext.displayName = "WhereToGoNext";

export { WhereToGoNext };
