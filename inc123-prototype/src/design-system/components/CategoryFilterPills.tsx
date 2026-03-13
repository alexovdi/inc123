"use client";

import { cn } from "@/design-system/utils/cn";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Pillar color map
   ------------------------------------------------ */
const pillarActiveColors: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy text-white",
  asset: "bg-pillar-asset text-white",
  formation: "bg-pillar-formation text-white",
  compliance: "bg-pillar-compliance text-white",
};

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface CategoryFilterItem {
  /** Filter value identifier */
  value: string;
  /** Display label */
  label: string;
  /** Optional pillar for color coding */
  pillar?: PillarName;
  /** Optional count shown in parentheses */
  count?: number;
}

export interface CategoryFilterPillsProps {
  /** Available filter categories */
  categories: CategoryFilterItem[];
  /** Currently active category value */
  activeCategory: string;
  /** Selection change handler */
  onChange: (value: string) => void;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function CategoryFilterPills({
  categories,
  activeCategory,
  onChange,
  className,
}: CategoryFilterPillsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-2",
        className
      )}
      role="tablist"
      aria-label="Filter categories"
    >
      {categories.map((category) => {
        const isActive = category.value === activeCategory;

        // Determine active color: pillar-specific or default secondary
        const activeClass = category.pillar
          ? pillarActiveColors[category.pillar]
          : "bg-secondary text-white";

        return (
          <button
            key={category.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.value)}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-pill px-4 py-2 text-body-sm font-medium whitespace-nowrap transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
              isActive
                ? activeClass
                : "bg-primary-50 text-foreground hover:bg-primary-100"
            )}
          >
            {category.label}
            {category.count != null && (
              <span
                className={cn(
                  "text-caption",
                  isActive ? "opacity-80" : "text-muted"
                )}
              >
                ({category.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

CategoryFilterPills.displayName = "CategoryFilterPills";

export { CategoryFilterPills };
