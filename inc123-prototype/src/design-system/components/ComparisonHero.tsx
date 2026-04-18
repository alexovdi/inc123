import { cn } from "@/design-system/utils/cn";
import {
  pillarTextMap,
  pillarBorderSoftMap,
  pillarSoftBgMap,
} from "@/design-system/utils/pillarMaps";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/design-system/components/Breadcrumbs";
import { Eyebrow } from "@/design-system/primitives/Eyebrow";
import { Icon } from "@/design-system/primitives/Icon";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ComparisonHeroProps {
  /** Pillar this comparison belongs to */
  pillar: PillarName;
  /** Page title (H1) */
  title: string;
  /** Description paragraph */
  description: string;
  /** Verdict callout */
  verdict: {
    winner: string;
    summary: string;
  };
  /** Optional breadcrumb trail (Home > Pillar > Comparison) */
  breadcrumbs?: BreadcrumbItem[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ComparisonHero({
  pillar,
  title,
  description,
  verdict,
  breadcrumbs,
  className,
}: ComparisonHeroProps) {
  return (
    <section className={cn("bg-primary-50", className)}>
      <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} pillar={pillar} className="mb-4" />
        )}

        {/* Eyebrow */}
        <Eyebrow tone="inherit" className={cn("mb-2", pillarTextMap[pillar])}>
          Comparison
        </Eyebrow>

        {/* Title */}
        <h1 className="font-display text-display-lg font-bold text-foreground mb-3">
          {title}
        </h1>

        {/* Description */}
        <p className="text-body-lg text-muted max-w-narrow mb-6">
          {description}
        </p>

        {/* Verdict callout box */}
        <div
          className={cn(
            "rounded-card border p-5 max-w-content",
            pillarBorderSoftMap[pillar],
            pillarSoftBgMap[pillar],
          )}
        >
          <div className="flex items-start gap-3">
            <Icon
              name="Trophy"
              size="md"
              className={cn("shrink-0 mt-0.5", pillarTextMap[pillar])}
            />
            <div>
              <p className="font-display font-semibold text-foreground">
                Bottom Line: {verdict.winner} Wins
              </p>
              <p className="text-body text-muted mt-1">{verdict.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ComparisonHero.displayName = "ComparisonHero";

export { ComparisonHero };
