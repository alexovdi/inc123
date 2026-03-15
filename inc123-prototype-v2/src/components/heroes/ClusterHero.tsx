"use client";

import Link from "next/link";
import { FadeUp } from "@/components/animation/FadeUp";
import { cn } from "@/lib/utils";
import type { PillarName } from "@/lib/types";
import { pillarColorMap, pillarLabelMap } from "./PillarHero";

interface ClusterHeroProps {
  title: string;
  pillar: PillarName;
  readingTime?: number;
  breadcrumbs?: { label: string; href: string }[];
  className?: string;
}

function ClusterHero({
  title,
  pillar,
  readingTime,
  breadcrumbs,
  className,
}: ClusterHeroProps) {
  const color = pillarColorMap[pillar];
  const crumbs = breadcrumbs ?? [
    { label: "Home", href: "/" },
    { label: pillarLabelMap[pillar], href: `/${pillar}` },
    { label: title, href: "#" },
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

      <div className="relative mx-auto max-w-content px-container-x py-12 md:py-16 lg:py-20">
        {/* Breadcrumbs */}
        <FadeUp>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-on-dark-muted)]">
              {crumbs.map((crumb, i) => (
                <li
                  key={`${crumb.href}-${i}`}
                  className="flex items-center gap-2"
                >
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

        {/* Badge row */}
        <FadeUp delay={0.05}>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
              style={{ backgroundColor: color }}
            >
              {pillarLabelMap[pillar]}
            </span>
            {readingTime && (
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[var(--color-text-on-dark-muted)]">
                {readingTime} min read
              </span>
            )}
          </div>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.1}>
          <h1 className="max-w-3xl font-[var(--font-display)] text-[var(--font-size-h2)] leading-[1.15] tracking-tight text-[var(--color-text-on-dark)] md:text-[var(--font-size-h1)]">
            {title}
          </h1>
        </FadeUp>
      </div>
    </section>
  );
}

ClusterHero.displayName = "ClusterHero";

export { ClusterHero };
export type { ClusterHeroProps };
