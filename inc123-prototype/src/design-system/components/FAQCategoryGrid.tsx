import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

export interface FAQCategoryCardItem {
  /** Unique key — used for anchor IDs or category values */
  id: string;
  /** Card title (category name) */
  title: string;
  /** Short blurb describing what's inside */
  description: string;
  /** Number of FAQs in this category */
  count: number;
  /** Target link — pillar page anchor or scroll-to-section on same page */
  href: string;
  /** Lucide icon name (PascalCase) */
  icon: string;
  /** Pillar accent — controls border + icon color */
  pillar?: "privacy" | "asset" | "formation" | "compliance" | "neutral";
}

export interface FAQCategoryGridProps {
  categories: FAQCategoryCardItem[];
  className?: string;
}

const PILLAR_BORDER: Record<
  NonNullable<FAQCategoryCardItem["pillar"]>,
  string
> = {
  privacy: "border-t-pillar-privacy",
  asset: "border-t-pillar-asset",
  formation: "border-t-pillar-formation",
  compliance: "border-t-pillar-compliance",
  neutral: "border-t-muted",
};

const PILLAR_ICON_BG: Record<
  NonNullable<FAQCategoryCardItem["pillar"]>,
  string
> = {
  privacy: "bg-pillar-privacy/10 text-pillar-privacy",
  asset: "bg-pillar-asset/10 text-pillar-asset",
  formation: "bg-pillar-formation/10 text-pillar-formation",
  compliance: "bg-pillar-compliance/10 text-pillar-compliance",
  neutral: "bg-muted/10 text-muted",
};

function FAQCategoryGrid({ categories, className }: FAQCategoryGridProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        <div className="text-center mb-10">
          <h2 className="font-display text-heading-lg font-bold text-foreground">
            Browse by Category
          </h2>
          <p className="mt-2 text-body text-muted">
            Six topic areas covering everything from privacy to pricing.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const pillar = cat.pillar ?? "neutral";
            return (
              <li key={cat.id}>
                <a
                  href={cat.href}
                  className={cn(
                    "group flex h-full flex-col rounded-card border border-border border-t-4 bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-card-hover",
                    PILLAR_BORDER[pillar],
                  )}
                >
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                      PILLAR_ICON_BG[pillar],
                    )}
                  >
                    <Icon name={cat.icon} size="lg" />
                  </div>

                  <h3 className="font-display text-heading-sm font-semibold text-foreground group-hover:text-secondary">
                    {cat.title}
                  </h3>

                  <p className="mt-2 flex-1 text-body-sm leading-relaxed text-muted">
                    {cat.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-body-sm font-medium text-muted">
                      {cat.count} question{cat.count === 1 ? "" : "s"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-body-sm font-medium text-secondary">
                      View
                      <Icon name="ArrowRight" size="sm" />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

FAQCategoryGrid.displayName = "FAQCategoryGrid";

export { FAQCategoryGrid };
