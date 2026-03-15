"use client";

import Link from "next/link";
import { FadeUp } from "@/components/animation/FadeUp";
import { cn } from "@/lib/utils";
import type { PillarName } from "@/lib/types";

interface PillarHeroProps {
  title: string;
  description: string;
  pillar: PillarName;
  breadcrumbs?: { label: string; href: string }[];
  className?: string;
}

const pillarColorMap: Record<PillarName, string> = {
  privacy: "#3d5a8a",
  "asset-protection": "#2d5a3d",
  formation: "#8a6d3d",
  compliance: "#5a3d7a",
};

const pillarLabelMap: Record<PillarName, string> = {
  privacy: "Business Privacy",
  "asset-protection": "Asset Protection",
  formation: "Company Formation",
  compliance: "Compliance",
};

function PillarHero({
  title,
  description,
  pillar,
  breadcrumbs,
  className,
}: PillarHeroProps) {
  const color = pillarColorMap[pillar];
  const crumbs = breadcrumbs ?? [
    { label: "Home", href: "/" },
    { label: pillarLabelMap[pillar], href: `/${pillar}` },
  ];

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[var(--color-bg-accent)]",
        className,
      )}
    >
      {/* Pillar color accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-container-x py-16 md:py-24 lg:py-28">
        {/* Breadcrumbs */}
        <FadeUp>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[var(--color-text-on-dark-muted)]">
              {crumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="text-[var(--color-text-on-dark-muted)]"
                    >
                      /
                    </span>
                  )}
                  {i === crumbs.length - 1 ? (
                    <span className="text-[var(--color-text-on-dark)]">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-[var(--color-accent)]"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </FadeUp>

        {/* Pillar Badge */}
        <FadeUp delay={0.05}>
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
            style={{ backgroundColor: color }}
          >
            {pillarLabelMap[pillar]}
          </span>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.1}>
          <h1 className="max-w-3xl font-[var(--font-display)] text-[var(--font-size-h1)] leading-[1.1] tracking-tight text-[var(--color-text-on-dark)] md:text-[var(--font-size-hero)]">
            {title}
          </h1>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-on-dark-muted)] md:text-xl">
            {description}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

PillarHero.displayName = "PillarHero";

export { PillarHero, pillarColorMap, pillarLabelMap };
export type { PillarHeroProps };
