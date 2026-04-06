import { Link as RouterLink } from "react-router-dom";
import { Check } from "lucide-react";

import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import type { PackageComparisonCard } from "@/data/homepage";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface PackageComparisonProps {
  cards: PackageComparisonCard[];
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PackageComparison({ cards, className }: PackageComparisonProps) {
  return (
    <section
      className={cn("py-section-y", className)}
      style={{
        background:
          "linear-gradient(180deg, var(--primary-50) 0%, var(--background) 100%)",
      }}
    >
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Compare All Options"
            title="Detailed package comparison"
            subtitle="Every package side by side. Compare features, pick your tier."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.18fr] max-w-[820px] mx-auto">
          {cards.map((card, index) => (
            <ScrollReveal key={card.tier} delay={index * 80}>
              <div
                className={cn(
                  "rounded-card-lg bg-surface border p-8 lg:p-10 h-full flex flex-col",
                  card.featured
                    ? "relative border-2 border-secondary/20 shadow-card-hover"
                    : "border-border",
                )}
              >
                {card.featured && card.featuredBadge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-caption font-bold text-white uppercase tracking-wider">
                    {card.featuredBadge}
                  </span>
                )}
                <p
                  className={cn(
                    "text-caption font-semibold uppercase tracking-wider",
                    card.featured ? "text-secondary" : "text-muted",
                  )}
                >
                  {card.tier}
                </p>
                <p className="font-display text-body-lg font-bold text-foreground mt-1">
                  {card.tierLabel}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-display font-semibold text-foreground tracking-tight">
                    {card.price}
                  </span>
                  <span className="text-body-sm text-muted">/formation</span>
                </div>
                <p className="text-caption text-muted mt-1">
                  Renewal: {card.renewal}
                </p>

                {card.valueCallout && (
                  <div className="mt-3 rounded-lg bg-accent/[0.06] border border-accent/10 px-3 py-2 text-caption font-semibold text-accent text-center">
                    {card.valueCallout}
                  </div>
                )}

                <ul className="mt-6 space-y-3 flex-1">
                  {card.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-body text-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {card.featured ? (
                  <Button
                    variant="cta"
                    fullWidth
                    asChild
                    className="mt-8 rounded-xl"
                  >
                    <RouterLink to={card.ctaHref}>{card.ctaLabel}</RouterLink>
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    fullWidth
                    asChild
                    className="mt-8 rounded-xl"
                  >
                    <RouterLink to={card.ctaHref}>{card.ctaLabel}</RouterLink>
                  </Button>
                )}

                {card.upsellText && card.upsellHref && (
                  <p className="mt-3 text-center text-caption text-muted">
                    <RouterLink
                      to={card.upsellHref}
                      className={cn(
                        "hover:underline",
                        card.featured
                          ? "hover:text-secondary"
                          : "text-secondary",
                      )}
                    >
                      {card.upsellText}
                    </RouterLink>
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bronze entry + consultation */}
        <ScrollReveal delay={250}>
          <div className="mt-10 text-center space-y-3">
            <p className="text-body text-muted">
              Looking for basic formation?{" "}
              <RouterLink
                to="/compare-packages"
                className="text-secondary font-medium hover:underline"
              >
                Bronze starts at $625 →
              </RouterLink>
            </p>
            <p className="text-body text-muted">
              Not sure which package fits? We&rsquo;re here to help.{" "}
              <RouterLink
                to="/contact"
                className="text-secondary font-medium hover:underline"
              >
                Schedule a free consultation →
              </RouterLink>{" "}
              or{" "}
              <a
                href="tel:+17753134155"
                className="text-secondary font-medium hover:underline"
              >
                call (775) 313-4155
              </a>
            </p>
            <p className="text-caption text-muted">
              Operating in California or Florida?{" "}
              <RouterLink
                to="/california-private-incorporation"
                className="text-secondary font-medium hover:underline"
              >
                See our private incorporation packages →
              </RouterLink>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

PackageComparison.displayName = "PackageComparison";

export { PackageComparison };
