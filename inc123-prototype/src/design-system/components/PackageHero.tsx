import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import { GrainOverlay } from "./GrainOverlay";
import { EntityTypeToggle } from "./EntityTypeToggle";
import type { EntityType } from "@/lib/types";

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
  /** Eyebrow label (e.g. "Gold Package", "Bronze Package") */
  eyebrow: string;
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
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PackageHero({
  packageName,
  eyebrow,
  prices,
  badge,
  entityType,
  onEntityTypeChange,
  primaryCTA,
  secondaryCTA,
  breadcrumbs,
  stateSelector,
  className,
}: PackageHeroProps) {
  const currentPrice = prices[entityType];

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary border-b-4 border-b-secondary",
        className,
      )}
    >
      <GrainOverlay opacity="opacity-[0.03]" />

      {/* Decorative glows — two secondary-tinted orbs for depth */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-secondary/[0.18] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[-20vw] h-[45vw] w-[45vw] rounded-full bg-secondary/[0.18] blur-[140px]" />

      <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
        {/* Breadcrumb — tap targets padded to stay legible on mobile */}
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

        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            {eyebrow}
          </p>

          {/* H1 Title */}
          <h1 className="font-display type-display-lg font-bold text-white">
            {packageName}
          </h1>

          {/* State selector chips — min 44px tall for AA tap targets */}
          {stateSelector && stateSelector.states.length > 0 && (
            <div className="mt-8">
              <p
                id="state-selector-label"
                className="text-body-sm uppercase tracking-wider text-white/60 mb-3"
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
                            : "bg-white/[0.04] border border-white/10 text-white/40 cursor-not-allowed",
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

          {/* Price row */}
          <div className="mt-8 flex flex-wrap items-baseline gap-3">
            <span className="font-mono text-display-xl font-bold text-white leading-none">
              ${currentPrice.formation.toLocaleString()}
            </span>
            {badge && (
              <Badge
                variant="default"
                size="md"
                className="bg-white/[0.1] text-white border-white/20"
              >
                {badge}
              </Badge>
            )}
            <Badge
              variant="default"
              size="sm"
              className="bg-secondary/20 text-secondary border-secondary/30"
            >
              All-Inclusive
            </Badge>
          </div>

          <p className="mt-2 text-body text-white/70">
            Annual renewal ${currentPrice.renewal.toLocaleString()}/year · No
            hidden fees
          </p>

          {/* Entity type toggle */}
          <div className="mt-6">
            <p className="text-body-sm uppercase tracking-wider text-white/60 mb-2">
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

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={primaryCTA.href}>
              <Button variant="cta" size="lg">
                {primaryCTA.label}
                <Icon
                  name="ArrowRight"
                  size="sm"
                  className="ml-2 hidden sm:inline-block"
                />
              </Button>
            </a>
            <a href={secondaryCTA.href}>
              <Button
                variant="secondary"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                {secondaryCTA.label}
              </Button>
            </a>
          </div>

          {/* Phone line */}
          <p className="mt-5 text-body-sm text-white/70">
            Prefer to talk?{" "}
            <a
              href="tel:1-800-553-0615"
              className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
            >
              Call 1-800-553-0615
            </a>
            {" · "}
            <Link
              href="/contact"
              className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
            >
              Schedule a consultation
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

PackageHero.displayName = "PackageHero";

export { PackageHero };
