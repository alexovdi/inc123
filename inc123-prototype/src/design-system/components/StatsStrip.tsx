import { cn } from "@/design-system/utils/cn";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface StatItem {
  /** Large display value (e.g. "25+", "$525") */
  value: string;
  /** Label below the value */
  label: string;
}

export interface StatsStripProps {
  /** Array of stat items to display */
  stats: StatItem[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function StatsStrip({ stats, className }: StatsStripProps) {
  return (
    <section
      className={cn(
        "bg-primary text-white py-section-y-sm px-container-x",
        className
      )}
    >
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-heading-lg md:text-display text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-body-sm text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

StatsStrip.displayName = "StatsStrip";

export { StatsStrip };
