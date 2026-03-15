"use client";

import { Badge } from "@/components/primitives/Badge";
import { FadeUp } from "@/components/animation/FadeUp";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════════════
   PackageHero — Dark hero for individual package pages
   ═══════════════════════════════════════════════════════════════════════════ */

interface PackageHeroProps {
  title: string;
  description: string;
  price?: string;
  badge?: string;
}

export function PackageHero({
  title,
  description,
  price,
  badge,
}: PackageHeroProps) {
  return (
    <section className="bg-[var(--color-bg-accent)]">
      <div className="mx-auto max-w-content px-container-x py-20 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            {badge && (
              <Badge variant="gold" className="mb-6">
                {badge}
              </Badge>
            )}
            <h1 className="font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)] md:text-[var(--font-size-hero)]">
              {title}
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-widest text-[var(--color-text-on-dark-muted)]">
              All-Inclusive
            </p>
            {price && (
              <p className="mt-6 font-[var(--font-mono)] text-4xl font-bold text-[var(--color-accent)] md:text-5xl">
                {price}
              </p>
            )}
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-dark-muted)]">
              {description}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

PackageHero.displayName = "PackageHero";
