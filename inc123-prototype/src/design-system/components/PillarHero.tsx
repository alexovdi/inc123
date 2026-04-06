import { cn } from "@/design-system/utils/cn";
import {
  pillarTextMap,
  pillarBgMap,
  pillarBorderMap,
} from "@/design-system/utils/pillarMaps";
import { Icon } from "@/design-system/primitives/Icon";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface PillarHeroProps {
  /** Which pillar this hero represents */
  pillar: PillarName;
  /** Small label above the headline (e.g., "Business Privacy") */
  eyebrow: string;
  /** H1 headline */
  headline: string;
  /** Supporting description paragraph */
  description: string;
  /** Primary call-to-action (pillar-colored background) */
  primaryCTA: { label: string; href: string };
  /** Secondary call-to-action (outline/ghost style) */
  secondaryCTA: { label: string; href: string };
  /** Trust snippet displayed below CTAs */
  trustSnippet: string;
  /** Consultation safety net text below CTAs (e.g., "Have questions? Call ...") */
  safetyNet?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component (Server Component — no "use client")
   ------------------------------------------------ */
function PillarHero({
  pillar,
  eyebrow,
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  trustSnippet,
  safetyNet,
  className,
}: PillarHeroProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto max-w-content px-container-x py-section-y-sm">
        {/* Eyebrow */}
        <p
          className={cn(
            "text-body-sm font-semibold uppercase tracking-wider mb-3",
            pillarTextMap[pillar],
          )}
        >
          {eyebrow}
        </p>

        {/* Headline */}
        <h1 className="font-display text-display-lg font-bold text-foreground mb-4 max-w-narrow">
          {headline}
        </h1>

        {/* Description */}
        <p className="text-body-lg text-muted max-w-narrow mb-8">
          {description}
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a
            href={primaryCTA.href}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-button font-medium transition-colors",
              "h-11 px-6 text-body",
              "text-white hover:opacity-90 active:opacity-80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
              pillarBgMap[pillar],
              `focus-visible:ring-current`,
            )}
          >
            {primaryCTA.label}
            <Icon name="ArrowRight" size="sm" className="shrink-0" />
          </a>
          <a
            href={secondaryCTA.href}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-button font-medium transition-colors",
              "h-11 px-6 text-body",
              "bg-transparent border text-foreground hover:bg-muted/10 active:bg-muted/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
              pillarBorderMap[pillar],
            )}
          >
            {secondaryCTA.label}
            <Icon name="ArrowRight" size="sm" className="shrink-0" />
          </a>
        </div>

        {/* Safety net */}
        {safetyNet && (
          <p className="text-body text-muted mb-4">{safetyNet}</p>
        )}

        {/* Trust snippet */}
        <div className="flex items-center gap-2 text-body-sm text-muted">
          <Icon
            name="ShieldCheck"
            size="sm"
            className={pillarTextMap[pillar]}
          />
          <span>{trustSnippet}</span>
        </div>
      </div>
    </section>
  );
}

PillarHero.displayName = "PillarHero";

export { PillarHero };
