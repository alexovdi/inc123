import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Pillar color maps
   ------------------------------------------------ */
const pillarTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

const pillarBorderMap: Record<PillarName, string> = {
  privacy: "border-pillar-privacy/30",
  asset: "border-pillar-asset/30",
  formation: "border-pillar-formation/30",
  compliance: "border-pillar-compliance/30",
};

const pillarBgMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy-soft",
  asset: "bg-pillar-asset-soft",
  formation: "bg-pillar-formation-soft",
  compliance: "bg-pillar-compliance-soft",
};

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
  className,
}: ComparisonHeroProps) {
  return (
    <section className={cn("bg-primary-50", className)}>
      <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
        {/* Eyebrow */}
        <p
          className={cn(
            "text-body-sm font-semibold uppercase tracking-wider mb-2",
            pillarTextMap[pillar]
          )}
        >
          Comparison
        </p>

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
            pillarBorderMap[pillar],
            pillarBgMap[pillar]
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
              <p className="text-body-sm text-muted mt-1">
                {verdict.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ComparisonHero.displayName = "ComparisonHero";

export { ComparisonHero };
