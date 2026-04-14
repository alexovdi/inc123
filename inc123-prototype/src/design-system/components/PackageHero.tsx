import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import { GrainOverlay } from "./GrainOverlay";
import { EntityTypeToggle } from "./EntityTypeToggle";
import { TierHeroVisual } from "./TierHeroVisual";
import type { EntityType } from "@/lib/types";
import type { HeroVisualVariant, MetallicAccent } from "@/data/tierContent";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface PackageHeroBreadcrumb {
  label: string;
  href?: string;
}

export interface PackageHeroStateOption {
  name: string;
  abbreviation: string;
  available: boolean;
}

export interface PackageHeroStateSelector {
  states: PackageHeroStateOption[];
  selected: string;
  onChange: (stateName: string) => void;
  label?: string;
}

export interface PackageHeroProps {
  /** Package display name (H1) */
  packageName: string;
  /** Eyebrow label (e.g. "Entry tier — Formation + Compliance") */
  eyebrow: string;
  /** One-line tagline above the H1 */
  tagline?: string;
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
  /** Breadcrumbs rendered at the top of the hero */
  breadcrumbs?: PackageHeroBreadcrumb[];
  /** Optional state selector chips */
  stateSelector?: PackageHeroStateSelector;
  /** Tier hero visual variant — "docs" | "shield" | "seal" */
  heroVisual: HeroVisualVariant;
  /** Metallic accent — "gold" | "silver" | "bronze" */
  metallic: MetallicAccent;
  /** State abbreviation for visual (e.g. "WY") */
  stateAbbreviation?: string;
  /** State display name for visual (e.g. "Wyoming") */
  stateName?: string;
  /** Tier display name for visual (e.g. "Gold") */
  tierName: string;
  /** Trust stats strip below CTAs */
  trustStats?: { icon: string; label: string }[];
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PackageHero({
  packageName,
  eyebrow,
  tagline,
  prices,
  badge,
  entityType,
  onEntityTypeChange,
  primaryCTA,
  secondaryCTA,
  breadcrumbs,
  stateSelector,
  heroVisual,
  metallic,
  stateAbbreviation,
  stateName,
  tierName,
  trustStats,
  className,
}: PackageHeroProps) {
  const currentPrice = prices[entityType];
  const metallicVar = `var(--tier-${metallic})`;
  const metallicMid = `var(--tier-${metallic}-mid)`;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary border-b-4",
        className,
      )}
      style={{ borderBottomColor: metallicVar }}
    >
      <GrainOverlay opacity="opacity-[0.03]" />

      {/* Decorative glows — tinted with tier metallic */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[55vw] w-[55vw] rounded-full blur-[140px]"
        style={{ background: metallicVar, opacity: 0.14 }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-[-25vw] h-[45vw] w-[45vw] rounded-full blur-[140px]"
        style={{ background: metallicMid, opacity: 0.12 }}
      />

      <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            className="mb-8 flex flex-wrap items-center text-body-sm"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <span key={`${crumb.label}-${i}`} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-1 text-white/50" aria-hidden="true">
                      /
                    </span>
                  )}
                  {crumb.href && !isLast ? (
                    i === 0 ? (
                      <Link
                        href={crumb.href}
                        className="!text-white/80 !no-underline hover:!text-white transition-colors inline-flex items-center py-2 px-1"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <RouterLink
                        to={crumb.href}
                        className="text-white/80 no-underline hover:text-white transition-colors inline-flex items-center py-2 px-1"
                      >
                        {crumb.label}
                      </RouterLink>
                    )
                  ) : (
                    <span
                      className="text-white/90 inline-flex items-center py-2 px-1"
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.label}
                    </span>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        {/* Two-column editorial layout: copy left, visual right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:items-center">
          {/* LEFT — content column */}
          <div>
            {/* Eyebrow — metallic tinted */}
            <p
              className="text-body-sm font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: metallicMid }}
            >
              {eyebrow}
            </p>

            {/* H1 Title */}
            <h1 className="font-display type-display-lg font-bold text-white">
              {packageName}
            </h1>

            {/* Tagline */}
            {tagline && (
              <p className="mt-4 text-body-lg text-white/75 max-w-[560px]">
                {tagline}
              </p>
            )}

            {/* State selector chips */}
            {stateSelector && stateSelector.states.length > 0 && (
              <div className="mt-8">
                <p
                  id="state-selector-label"
                  className="text-body-sm uppercase tracking-wider text-white/55 mb-3"
                >
                  {stateSelector.label ?? "Formation State"}
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  role="radiogroup"
                  aria-labelledby="state-selector-label"
                >
                  {stateSelector.states.map((state) => {
                    const isSelected = stateSelector.selected === state.name;
                    return (
                      <button
                        key={state.name}
                        type="button"
                        onClick={() =>
                          state.available && stateSelector.onChange(state.name)
                        }
                        disabled={!state.available}
                        role="radio"
                        aria-checked={isSelected}
                        aria-disabled={!state.available}
                        aria-label={
                          state.available
                            ? `${state.name} (${state.abbreviation})`
                            : `${state.name} — not available for this package`
                        }
                        className={cn(
                          "inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 py-2.5 text-body-sm font-medium transition-colors",
                          isSelected
                            ? "bg-white text-primary"
                            : state.available
                              ? "bg-white/[0.08] border border-white/20 text-white/90 hover:bg-white/[0.14]"
                              : "bg-white/[0.04] border border-white/10 text-white/55 cursor-not-allowed",
                        )}
                      >
                        <span className="font-bold">{state.abbreviation}</span>
                        <span className="hidden sm:inline">{state.name}</span>
                        {!state.available && (
                          <span className="text-body-sm" aria-hidden="true">
                            (N/A)
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Price block — editorial scale */}
            <div className="mt-10">
              <div className="flex items-baseline gap-3">
                <span
                  className="font-display font-bold leading-[0.9] text-white"
                  style={{ fontSize: "clamp(3.5rem, 7vw + 1rem, 6.5rem)" }}
                  aria-label={`Starting price ${currentPrice.formation.toLocaleString()} dollars`}
                >
                  ${currentPrice.formation.toLocaleString()}
                </span>
                <span className="text-body text-white/60">all in</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {badge && (
                  <span
                    className="inline-flex items-center rounded-pill px-3 py-1 text-body-sm font-semibold text-primary"
                    style={{ background: metallicMid }}
                  >
                    {badge}
                  </span>
                )}
                <Badge
                  variant="default"
                  size="sm"
                  className="bg-white/[0.08] text-white/90 border-white/20"
                >
                  Formation + first year
                </Badge>
                <span className="text-body-sm text-white/60">
                  · ${currentPrice.renewal.toLocaleString()}/yr renewal · no
                  hidden fees
                </span>
              </div>
            </div>

            {/* Entity type toggle */}
            <div className="mt-8">
              <p className="text-body-sm uppercase tracking-wider text-white/55 mb-2">
                Entity Type
              </p>
              <EntityTypeToggle
                dark
                options={[
                  { value: "llc", label: "LLC" },
                  { value: "corp", label: "Corporation" },
                ]}
                value={entityType}
                onChange={(v) => onEntityTypeChange(v as EntityType)}
              />
            </div>

            {/* Dual CTAs — arrow visible at all breakpoints */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={primaryCTA.href}>
                <Button variant="cta" size="lg">
                  {primaryCTA.label}
                  <Icon
                    name="ArrowRight"
                    size="sm"
                    className="ml-2 inline-block"
                  />
                </Button>
              </a>
              <RouterLink to={secondaryCTA.href}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  {secondaryCTA.label}
                </Button>
              </RouterLink>
            </div>

            {/* Trust stats strip */}
            {trustStats && trustStats.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-white/75">
                {trustStats.map((stat) => (
                  <span key={stat.label} className="flex items-center gap-2">
                    <Icon
                      name={stat.icon}
                      size="sm"
                      className="text-white/70"
                    />
                    {stat.label}
                  </span>
                ))}
              </div>
            )}

            {/* Phone line */}
            <p className="mt-5 text-body text-white/80">
              Prefer to talk?{" "}
              <a
                href="tel:1-800-553-0615"
                className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors font-medium"
              >
                Call 1-800-553-0615
              </a>
              {" · "}
              <Link
                href="/contact"
                className="text-white/90 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
              >
                Schedule a consultation
              </Link>
            </p>
          </div>

          {/* RIGHT — hero visual */}
          <div className="relative">
            <TierHeroVisual
              variant={heroVisual}
              metallic={metallic}
              tierName={tierName}
              stateAbbreviation={stateAbbreviation}
              stateName={stateName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

PackageHero.displayName = "PackageHero";

export { PackageHero };
