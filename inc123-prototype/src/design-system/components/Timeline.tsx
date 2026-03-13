import { cn } from "@/design-system/utils/cn";
import type { TimelineMilestone } from "@/lib/types";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface TimelineProps {
  /** Array of milestones to display */
  milestones: TimelineMilestone[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function Timeline({ milestones, className }: TimelineProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-heading-lg text-foreground">
            Our Story
          </h2>
          <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
            From a single-state Nevada incorporator to Privacy, Asset Protection
            &amp; Business Formation Specialists.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
            aria-hidden="true"
          />
          {/* Vertical left line — mobile */}
          <div
            className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-12">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className={cn(
                    "relative flex items-start",
                    /* Mobile: always left-aligned with line on left */
                    "pl-14 md:pl-0",
                    /* Desktop: alternating */
                    "md:flex-row",
                    isLeft ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Year badge — mobile (on the line) */}
                  <div
                    className="md:hidden absolute left-0 top-0 flex items-center justify-center w-12 h-8 rounded-full bg-secondary text-white text-caption font-bold z-10"
                    aria-hidden="true"
                  >
                    {milestone.year}
                  </div>

                  {/* Desktop: content block */}
                  <div
                    className={cn(
                      "md:w-[calc(50%-2rem)]",
                      isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                    )}
                  >
                    {/* Year badge — desktop (inline) */}
                    <div
                      className={cn(
                        "hidden md:inline-flex items-center justify-center rounded-full bg-secondary text-white px-3 py-1 text-caption font-bold mb-2"
                      )}
                    >
                      {milestone.year}
                    </div>

                    <h3 className="font-display font-semibold text-heading-sm text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-body text-muted">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Center dot — desktop only */}
                  <div
                    className="hidden md:flex absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-surface z-10"
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Timeline.displayName = "Timeline";

export { Timeline };
