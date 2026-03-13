"use client";

import { cn } from "@/design-system/utils/cn";
import { Button, Badge } from "@/design-system/primitives";
import { EntityTypeToggle } from "./EntityTypeToggle";
import type { EntityType } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface PackageHeroProps {
  /** Package display name */
  packageName: string;
  /** Price map keyed by entity type */
  prices: Record<EntityType, { formation: number; renewal: number }>;
  /** Optional badge text (e.g. "Most Popular") */
  badge?: string;
  /** Currently selected entity type */
  entityType: EntityType;
  /** Entity type change handler */
  onEntityTypeChange: (value: EntityType) => void;
  /** Primary CTA config */
  primaryCTA: { label: string; href: string };
  /** Secondary/ghost CTA config */
  secondaryCTA: { label: string; href: string };
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PackageHero({
  packageName,
  prices,
  badge,
  entityType,
  onEntityTypeChange,
  primaryCTA,
  secondaryCTA,
  className,
}: PackageHeroProps) {
  const currentPrice = prices[entityType];

  return (
    <section
      className={cn(
        "w-full bg-surface rounded-card border border-border px-6 py-8 sm:px-10 sm:py-12",
        className
      )}
    >
      <div className="mx-auto max-w-content">
        {/* Headline */}
        <h1 className="font-display text-heading-lg sm:text-display font-bold text-foreground">
          {packageName}
        </h1>

        {/* Price row */}
        <div className="mt-4 flex flex-wrap items-baseline gap-3">
          <span className="font-mono text-display-xl font-bold text-foreground">
            ${currentPrice.formation.toLocaleString()}
          </span>

          {badge && (
            <Badge variant="success" size="md">
              {badge}
            </Badge>
          )}

          <Badge variant="info" size="sm">
            All-Inclusive
          </Badge>
        </div>

        {/* Renewal info */}
        <p className="mt-2 text-body text-muted">
          Annual renewal: ${currentPrice.renewal.toLocaleString()}/year
        </p>

        {/* Entity type toggle */}
        <div className="mt-6">
          <p className="text-body-sm font-medium text-foreground mb-2">
            Choose Your Entity Type
          </p>
          <EntityTypeToggle
            options={[
              { value: "llc", label: "LLC" },
              { value: "corp", label: "Corporation" },
            ]}
            value={entityType}
            onChange={(v) => onEntityTypeChange(v as EntityType)}
          />
        </div>

        {/* Dual CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button variant="cta" size="lg" asChild>
            <a href={primaryCTA.href}>{primaryCTA.label}</a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
          </Button>
        </div>

        {/* Trust strip */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-body-sm text-muted">
          <span>25+ Years Trusted</span>
          <span aria-hidden="true" className="hidden sm:inline">
            &middot;
          </span>
          <span>All-Inclusive</span>
          <span aria-hidden="true" className="hidden sm:inline">
            &middot;
          </span>
          <span>30-Day Guarantee</span>
        </div>
      </div>
    </section>
  );
}

PackageHero.displayName = "PackageHero";

export { PackageHero };
