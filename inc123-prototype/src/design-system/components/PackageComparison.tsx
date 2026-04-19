import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Check } from "lucide-react";

import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { Eyebrow } from "@/design-system/primitives/Eyebrow";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import type { PackageTierCardData, FormationStateOption } from "@/lib/types";

interface PackageComparisonProps {
  states: readonly FormationStateOption[];
  getCards: (state: string) => PackageTierCardData[];
  className?: string;
}

function PackageComparison({
  states,
  getCards,
  className,
}: PackageComparisonProps) {
  const defaultState = states[0]?.name ?? "";
  const [selectedState, setSelectedState] = useState<string>(defaultState);

  const cards = getCards(selectedState);

  const gridCols =
    cards.length === 3
      ? "lg:grid-cols-[1fr_1fr_1.15fr] max-w-[1100px]"
      : cards.length === 2
        ? "lg:grid-cols-[1fr_1.18fr] max-w-[820px]"
        : "lg:grid-cols-1 max-w-[420px]";

  return (
    <section className={cn("py-section-y bg-background", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Compare All Options"
            title="Detailed package comparison"
            subtitle="Every package side by side. Compare features, pick your tier."
            className="mb-8"
          />
        </ScrollReveal>

        {/* State toggle */}
        <ScrollReveal>
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center rounded-full border border-border bg-surface p-1 gap-0.5">
              {states.map(({ name }) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedState(name)}
                  className={cn(
                    "rounded-full px-4 py-2 text-body-sm font-medium transition-all",
                    selectedState === name
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted hover:text-foreground hover:bg-primary-50",
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className={cn("grid gap-5 mx-auto", gridCols)}>
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
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-caption font-bold text-white uppercase tracking-wider whitespace-nowrap">
                    {card.featuredBadge}
                  </span>
                )}

                <Eyebrow
                  size="sm"
                  tone="inherit"
                  className={card.featured ? "text-secondary" : "text-muted"}
                >
                  {card.tier}
                </Eyebrow>
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

                <Button
                  variant={card.featured ? "cta" : "secondary"}
                  fullWidth
                  asChild
                  className="mt-8 rounded-xl"
                >
                  <RouterLink to={card.ctaHref}>{card.ctaLabel}</RouterLink>
                </Button>

                {card.upsellText && card.upsellHref && (
                  <p className="mt-3 text-center text-caption text-muted">
                    <RouterLink
                      to={card.upsellHref}
                      className="text-secondary hover:underline"
                    >
                      {card.upsellText}
                    </RouterLink>
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Consultation CTA */}
        <ScrollReveal delay={250}>
          <div className="mt-10 text-center space-y-3">
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
                href="tel:+18005530615"
                className="text-secondary font-medium hover:underline"
              >
                call 1-800-553-0615
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

PackageComparison.displayName = "PackageComparison";

export { PackageComparison };
