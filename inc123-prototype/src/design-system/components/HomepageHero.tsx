import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives";
import { Shield, CheckCircle } from "lucide-react";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface HomepageHeroProps {
  /** Main H1 headline */
  headline: string;
  /** Supporting subheadline paragraph */
  subheadline: string;
  /** Primary call-to-action */
  primaryCTA: { label: string; href: string };
  /** Secondary call-to-action */
  secondaryCTA: { label: string; href: string };
  /** 4 trust snippets shown in a horizontal row below CTAs */
  trustSnippets: string[];
  /** Override the hardcoded eyebrow text */
  eyebrow?: string;
  /** Subtle text below CTAs (e.g. "Have questions? Call …") */
  safetyNet?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function HomepageHero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustSnippets,
  eyebrow,
  safetyNet,
  className,
}: HomepageHeroProps) {
  return (
    <section
      className={cn(
        "bg-surface",
        className
      )}
    >
      <div className="mx-auto max-w-content px-container-x py-section-y">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left content — 60% */}
          <div className="flex-1 lg:basis-3/5">
            {/* Eyebrow */}
            <p className="text-body-sm font-medium text-muted mb-3">
              {eyebrow ?? "Trusted Since 2000 \u00b7 Privacy Specialists"}
            </p>

            {/* H1 Headline */}
            <h1 className="font-display text-display-lg font-extrabold text-foreground leading-tight lg:text-display-xl">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-4 text-body-lg text-muted max-w-narrow">
              {subheadline}
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="cta" size="lg" asChild>
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            </div>

            {/* Consultation Safety Net */}
            {safetyNet && (
              <p className="mt-4 text-body-sm text-muted">{safetyNet}</p>
            )}

            {/* Trust Strip */}
            {trustSnippets.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {trustSnippets.map((snippet) => (
                  <div
                    key={snippet}
                    className="flex items-center gap-2 text-body-sm text-muted"
                  >
                    <CheckCircle
                      className="h-4 w-4 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    <span>{snippet}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right illustration placeholder — 40% */}
          <div className="mt-10 lg:mt-0 lg:basis-2/5">
            <div
              className={cn(
                "flex aspect-square items-center justify-center rounded-card",
                "bg-primary-100 border border-border"
              )}
              aria-hidden="true"
            >
              <div className="flex flex-col items-center gap-3 text-muted">
                <Shield className="h-16 w-16 text-primary-400" />
                <span className="text-body-sm font-medium">
                  Hero Illustration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

HomepageHero.displayName = "HomepageHero";

export { HomepageHero };
