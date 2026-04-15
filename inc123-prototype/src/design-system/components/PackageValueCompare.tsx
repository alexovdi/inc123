import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface PackageValueCompareLine {
  label: string;
  ours: string | null;
  theirs: string;
}

export interface PackageValueCompareProps {
  /** Our package price (e.g. "$1,275") */
  ourTotal: string;
  /** Our annual renewal (e.g. "$525/yr") */
  ourRenewal: string;
  /** Low end of "assembled elsewhere" total */
  theirTotalLow: string;
  /** High end of "assembled elsewhere" total */
  theirTotalHigh: string;
  /** Line-item breakdown */
  lines: PackageValueCompareLine[];
  /** Summary line below the comparison */
  bottomLine: string;
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PackageValueCompare({
  ourTotal,
  ourRenewal,
  theirTotalLow,
  theirTotalHigh,
  lines,
  bottomLine,
  className,
}: PackageValueCompareProps) {
  return (
    <div
      className={cn(
        "rounded-card-lg border border-secondary/20 bg-secondary/[0.04] p-8 lg:p-12",
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* LEFT — Our package */}
        <div>
          <p className="text-caption font-semibold uppercase tracking-wider text-secondary mb-3">
            Incorporate123
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-display-sm font-bold text-foreground">
              {ourTotal}
            </span>
            <span className="text-body-sm text-muted">all-inclusive</span>
          </div>
          <p className="mt-2 font-mono text-body-sm text-muted">
            {ourRenewal} renewal · all services maintained
          </p>

          <ul className="mt-6 space-y-2.5">
            {lines.map((line) => (
              <li
                key={line.label}
                className="flex items-start gap-2 text-body-sm text-foreground"
              >
                <Icon
                  name="Check"
                  size="xs"
                  className="mt-1 shrink-0 text-success"
                />
                <span>
                  {line.label}
                  {line.ours && (
                    <span className="ml-2 text-caption text-muted">
                      ({line.ours})
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Assembled elsewhere */}
        <div className="lg:border-l lg:border-border lg:pl-12">
          <p className="text-caption font-semibold uppercase tracking-wider text-muted mb-3">
            Assembled elsewhere
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-display-sm font-bold text-muted">
              {theirTotalLow}
            </span>
            <span className="text-body-sm text-muted">–</span>
            <span className="font-mono text-display-sm font-bold text-muted">
              {theirTotalHigh}
            </span>
          </div>
          <p className="mt-2 font-mono text-body-sm text-muted">
            Year 1 cost · pieced together from multiple providers
          </p>

          <ul className="mt-6 space-y-2.5">
            {lines.map((line) => (
              <li
                key={line.label}
                className="flex items-start gap-2 text-body-sm text-muted"
              >
                <Icon
                  name="Plus"
                  size="xs"
                  className="mt-1 shrink-0 text-muted/60"
                />
                <span>
                  {line.label}{" "}
                  <span className="text-caption">({line.theirs})</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom line summary */}
      <div className="mt-8 pt-6 border-t border-border/60">
        <p className="text-body text-foreground leading-relaxed italic">
          {bottomLine}
        </p>
      </div>
    </div>
  );
}

PackageValueCompare.displayName = "PackageValueCompare";

export { PackageValueCompare };
