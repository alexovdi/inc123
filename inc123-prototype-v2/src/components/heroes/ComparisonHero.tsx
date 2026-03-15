"use client";

import { Badge } from "@/components/primitives/Badge";
import { FadeUp } from "@/components/animation/FadeUp";

/* ═══════════════════════════════════════════════════════════════════════════
   ComparisonHero — Dark hero for comparison pages
   ═══════════════════════════════════════════════════════════════════════════ */

interface ComparisonHeroProps {
  title: string;
  description: string;
}

export function ComparisonHero({ title, description }: ComparisonHeroProps) {
  return (
    <section className="bg-[var(--color-bg-accent)]">
      <div className="mx-auto max-w-content px-container-x py-20 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="gold" className="mb-6">
              Comparison Guide
            </Badge>
            <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)] md:text-[var(--font-size-hero)]">
              {title}
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
              Helping you decide
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
              {description}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

ComparisonHero.displayName = "ComparisonHero";
