import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface StateHeroFact {
  label: string;
  value: string;
}

export interface StateHeroProps {
  /** State name displayed as H1 */
  stateName: string;
  /** Subtitle paragraph below the headline */
  subtitle: string;
  /** Array of fact chips displayed in a horizontal strip */
  facts: StateHeroFact[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function StateHero({ stateName, subtitle, facts, className }: StateHeroProps) {
  return (
    <section className={cn("bg-primary text-white", className)}>
      <div className="mx-auto max-w-content px-container-x py-section-y">
        {/* Eyebrow */}
        <p className="text-body-sm font-semibold uppercase tracking-wider text-white/70 mb-3">
          State Guide
        </p>

        {/* H1 */}
        <h1 className="font-display text-display-xl font-extrabold mb-4">
          {stateName} Business Services — Privacy, Protection &amp; Formation
        </h1>

        {/* Subtitle */}
        <p className="text-body-lg text-white/80 max-w-narrow mb-8">
          {subtitle}
        </p>

        {/* Facts strip */}
        <div className="flex flex-wrap gap-3" role="list" aria-label={`${stateName} key facts`}>
          {facts.map((fact) => (
            <div
              key={fact.label}
              role="listitem"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5"
            >
              <span className="text-body-sm font-medium text-white/70">
                {fact.label}:
              </span>
              <span className="text-body-sm font-semibold text-white">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

StateHero.displayName = "StateHero";

export { StateHero };
