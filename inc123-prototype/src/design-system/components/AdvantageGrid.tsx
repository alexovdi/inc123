import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface AdvantageItem {
  /** Lucide icon name in PascalCase */
  icon: string;
  /** Advantage title */
  title: string;
  /** Advantage description */
  description: string;
}

export interface AdvantageGridProps {
  /** Advantage items to display */
  items: AdvantageItem[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function AdvantageGrid({ items, className }: AdvantageGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-card"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-card bg-background">
            <Icon name={item.icon} size="md" className="text-secondary" />
          </div>

          {/* Title */}
          <h3 className="text-body-lg font-display font-semibold text-foreground mt-4">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-body text-muted mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

AdvantageGrid.displayName = "AdvantageGrid";

export { AdvantageGrid };
