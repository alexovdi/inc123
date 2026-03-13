import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface AboutHeroProps {
  /** Small label above the headline */
  eyebrow: string;
  /** H1 headline */
  headline: string;
  /** Supporting paragraph below the headline */
  subheadline: string;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function AboutHero({
  eyebrow,
  headline,
  subheadline,
  className,
}: AboutHeroProps) {
  return (
    <section
      className={cn(
        "bg-primary-50 py-section-y px-container-x",
        className
      )}
    >
      <div className="mx-auto max-w-content flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        {/* Text — 60% on desktop */}
        <div className="lg:w-[60%]">
          <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary mb-3">
            {eyebrow}
          </p>
          <h1 className="font-display font-bold text-heading-lg md:text-display text-foreground">
            {headline}
          </h1>
          <p className="mt-4 text-body-lg text-muted max-w-narrow">
            {subheadline}
          </p>
        </div>

        {/* Image placeholder — 40% on desktop */}
        <div className="lg:w-[40%] flex items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-card bg-muted/20 border border-border flex items-center justify-center">
            <Icon name="Building2" size="xl" className="text-muted/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

AboutHero.displayName = "AboutHero";

export { AboutHero };
