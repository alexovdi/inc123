import { Link as RouterLink } from "react-router-dom";
import { Clock, Globe, DollarSign, Users, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import type { DifferentiatorCard } from "@/data/homepage";

/* ------------------------------------------------
   Icon resolver
   ------------------------------------------------ */
const iconMap: Record<string, ReactNode> = {
  Clock: <Clock className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
  DollarSign: <DollarSign className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Phone: <Phone className="h-5 w-5" />,
};

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface DifferentiatorSectionProps {
  cards: DifferentiatorCard[];
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function DifferentiatorSection({
  cards,
  className,
}: DifferentiatorSectionProps) {
  return (
    <section
      className={cn(
        "relative bg-primary py-section-y overflow-hidden",
        className,
      )}
    >
      <GrainOverlay />
      <div className="relative z-10 mx-auto max-w-content px-container-x">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            eyebrow="What Sets Us Apart"
            title="Why clients choose Incorporate123"
            subtitle="One service no competitor can match — and five more reasons on top."
            dark
            subtitleMaxWidth="max-w-narrow mx-auto"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Hero differentiator card — full-width, 2-column */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] rounded-3xl overflow-hidden bg-white/[0.06] border border-white/[0.12] mb-4 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)]">
            <div className="p-10 lg:p-12">
              <div className="font-mono type-display-xl font-semibold text-white/70 leading-none tracking-[-3px] mb-3">
                365
              </div>
              <h3 className="font-display text-heading font-extrabold text-white mb-3.5">
                Year-Round Nominee Services
              </h3>
              <p className="text-body text-white/70 leading-[1.8]">
                Your nominee directors and officers are maintained every single
                day — not just at formation. Most providers offer a
                &ldquo;nominee for a day&rdquo; and disappear. This is the
                single service that defines Incorporate123.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-10 lg:p-12 bg-white/[0.03]">
              <div className="w-full rounded-2xl bg-white/[0.06] border border-white/[0.12] p-4 text-center">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-white/75 mb-2">
                  Competitors charge
                </p>
                <p className="font-mono text-heading font-semibold text-white/70 line-through decoration-white/40">
                  $400–$5,000/yr
                </p>
                <p className="text-caption text-white/70 mt-1">
                  For nominee services alone
                </p>
              </div>
              <div className="w-full rounded-2xl bg-accent/[0.08] border border-accent/15 p-4 text-center">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                  Incorporate123 Gold
                </p>
                <p className="font-mono text-heading font-semibold text-white">
                  Included
                </p>
                <p className="text-caption text-white/75 mt-1">
                  Plus offshore records, agent, EIN, all fees
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 5 smaller cards — 3 + 2 layout */}
        <div className="flex flex-wrap gap-4 justify-center">
          {cards.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 80}
              className={
                index < 3
                  ? "w-full sm:w-[calc(33.333%-11px)]"
                  : "w-full sm:w-[calc(50%-8px)]"
              }
            >
              <div className="group relative rounded-3xl bg-white/[0.06] border border-white/[0.12] p-7 sm:p-9 transition-all duration-500 hover:bg-white/[0.10] hover:border-white/[0.18] hover:-translate-y-1.5 focus-within:-translate-y-1.5 focus-within:border-white/[0.12] overflow-hidden h-full">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,var(--gradient-glow-blue),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.08] border border-white/[0.15] mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <span className="text-secondary/80">
                      {iconMap[item.iconName]}
                    </span>
                  </div>
                  <h3 className="font-display text-body-lg font-bold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-body text-white/70 leading-[1.78]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* VS Comparison Bar */}
        <ScrollReveal delay={400}>
          <div className="mt-6 grid grid-cols-[1fr_auto_1fr] gap-5 items-center rounded-card-lg bg-accent/[0.05] border border-accent/[0.10] p-8 sm:px-10">
            <div className="text-center">
              <p className="text-caption font-semibold uppercase tracking-[0.1em] text-white/75 mb-2">
                Competitors
              </p>
              <p className="font-mono text-heading-lg font-semibold text-white/70 tracking-tight leading-none">
                $400–$5,000
                <span className="text-body-sm text-white/70">/yr</span>
              </p>
              <p className="text-body text-white/70 mt-1.5">
                For nominee services alone
              </p>
            </div>
            <div className="font-display text-caption font-extrabold uppercase tracking-[0.15em] text-white/70">
              VS
            </div>
            <div className="text-center">
              <p className="text-caption font-semibold uppercase tracking-[0.1em] text-white/75 mb-2">
                Incorporate123 Gold
              </p>
              <p className="font-mono text-heading-lg font-semibold text-white tracking-tight leading-none">
                $1,275
              </p>
              <p className="text-body text-white/75 mt-1.5">
                All-inclusive — nominees + 5 more services
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Dual CTAs */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-12 flex flex-wrap justify-center gap-3.5">
            <Button variant="cta" size="lg" asChild className="rounded-xl">
              <RouterLink to="/compare-packages">
                Compare All Packages →
              </RouterLink>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="rounded-xl border-white/30 text-white/80 hover:border-white/50 hover:text-white hover:bg-transparent"
            >
              <RouterLink to="/contact">Schedule a Consultation →</RouterLink>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

DifferentiatorSection.displayName = "DifferentiatorSection";

export { DifferentiatorSection };
