import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { Tooltip } from "@/design-system/primitives/Tooltip";
import type { PackageAddOn } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface UpgradesPreviewProps {
  /** Upgrades to display — already filtered for the current (tier, state) context. */
  upgrades: PackageAddOn[];
  /** Destination for the "Configure at checkout" link. */
  checkoutHref: string;
  /** Note explaining why some upgrades may have been filtered out. */
  contextNote?: string;
  className?: string;
}

/* ------------------------------------------------
   Group labels (Apr 13 — David asked for "government filings" header)
   ------------------------------------------------ */
const GROUP_LABELS: Record<string, string> = {
  "government-filing": "Government filings",
  "service-upgrade": "Service upgrades",
};

const GROUP_ORDER: Array<keyof typeof GROUP_LABELS> = [
  "government-filing",
  "service-upgrade",
];

function groupUpgrades(upgrades: PackageAddOn[]) {
  const groups = new Map<string, PackageAddOn[]>();
  for (const u of upgrades) {
    const key = u.category ?? "service-upgrade";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(u);
  }
  return GROUP_ORDER.filter((k) => groups.has(k)).map((k) => ({
    key: k,
    label: GROUP_LABELS[k],
    items: groups.get(k)!,
  }));
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function UpgradesPreview({
  upgrades,
  checkoutHref,
  contextNote,
  className,
}: UpgradesPreviewProps) {
  if (upgrades.length === 0) {
    return (
      <div
        className={cn(
          "rounded-card-lg border border-border bg-surface p-8 text-center",
          className,
        )}
      >
        <p className="text-body text-muted">
          No optional upgrades available for this package.
        </p>
      </div>
    );
  }

  const groups = groupUpgrades(upgrades);

  return (
    <div className={cn("w-full", className)}>
      {contextNote && (
        <p className="mb-6 text-body text-muted">{contextNote}</p>
      )}

      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.key}>
            <h3 className="mb-4 text-body-sm font-semibold uppercase tracking-[0.16em] text-muted">
              {group.label}
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {group.items.map((upgrade) => (
                <div
                  key={upgrade.id}
                  className="flex flex-col rounded-card-lg border border-border bg-surface p-5 transition-colors hover:bg-background"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-heading-sm font-semibold text-foreground">
                        {upgrade.name}
                      </span>
                      {upgrade.tooltip && (
                        <Tooltip
                          trigger={
                            <Icon
                              name="Info"
                              size="xs"
                              className="text-muted cursor-help"
                            />
                          }
                          content={upgrade.tooltip}
                          position="top"
                          size="sm"
                        />
                      )}
                    </div>
                    <span className="shrink-0 font-mono text-body-sm font-semibold text-muted">
                      {upgrade.priceTBD
                        ? "Pricing TBD"
                        : upgrade.price === 0
                          ? "Included"
                          : `+$${upgrade.price.toLocaleString()}`}
                    </span>
                  </div>
                  <p className="mt-2 text-body-sm text-muted">
                    {upgrade.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-card border border-border bg-background px-5 py-4">
        <p className="text-body-sm text-muted">
          Upgrades are selected at checkout — your package above is complete on
          its own.
        </p>
        <a
          href={checkoutHref}
          className="inline-flex items-center gap-1 text-body-sm font-semibold text-secondary hover:gap-2 transition-all"
        >
          Configure at checkout
          <Icon name="ArrowRight" size="sm" />
        </a>
      </div>
    </div>
  );
}

UpgradesPreview.displayName = "UpgradesPreview";

export { UpgradesPreview };
