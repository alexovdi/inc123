import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ComparisonItem {
  title: string;
  description: string;
  href: string;
}

export interface ComparisonCardsProps {
  /** Comparison link cards (typically 2) */
  comparisons: ComparisonItem[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ComparisonCards({ comparisons, className }: ComparisonCardsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-6",
        className
      )}
    >
      {comparisons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={cn(
            "group block bg-surface rounded-card border border-border p-6",
            "shadow-card hover:shadow-card-hover",
            "transition-all duration-200"
          )}
        >
          <h3 className="text-heading-sm font-display font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="text-body-sm text-muted mt-2">
            {item.description}
          </p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-body-sm font-medium text-secondary group-hover:gap-2 transition-all duration-200">
            Compare
            <Icon
              name="ArrowRight"
              size="sm"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </a>
      ))}
    </div>
  );
}

ComparisonCards.displayName = "ComparisonCards";

export { ComparisonCards };
