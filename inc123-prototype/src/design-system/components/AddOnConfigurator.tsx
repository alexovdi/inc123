"use client";

import { cn } from "@/design-system/utils/cn";
import { Checkbox, Icon, Tooltip } from "@/design-system/primitives";
import type { PackageAddOn } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface AddOnConfiguratorProps {
  /** Available add-ons to display */
  addOns: PackageAddOn[];
  /** Currently selected add-on IDs */
  selectedIds: string[];
  /** Toggle handler — receives the toggled add-on ID */
  onToggle: (id: string) => void;
  /** Base package price (used for running total calculation) */
  basePrice: number;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Helpers
   ------------------------------------------------ */
/**
 * Split add-ons into recommended (first 3) and additional (rest).
 * In a real scenario these would be flagged in data; here we use a
 * simple positional split for the prototype.
 */
function splitAddOns(addOns: PackageAddOn[]) {
  const recommended = addOns.slice(0, 3);
  const additional = addOns.slice(3);
  return { recommended, additional };
}

/* ------------------------------------------------
   AddOn Row sub-component
   ------------------------------------------------ */
interface AddOnRowProps {
  addOn: PackageAddOn;
  checked: boolean;
  onToggle: () => void;
}

function AddOnRow({ addOn, checked, onToggle }: AddOnRowProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}
      className={cn(
        "flex items-start gap-4 rounded-card border p-4 transition-colors cursor-pointer",
        checked
          ? "border-secondary/30 bg-secondary/5"
          : "border-border bg-surface hover:border-secondary/20"
      )}
    >
      <Checkbox
        label=""
        checked={checked}
        onChange={() => onToggle()}
        className="mt-0.5 pointer-events-none"
      />

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-body font-medium text-foreground">
            {addOn.name}
          </span>
          <span className="font-mono text-body-sm font-semibold text-secondary">
            {addOn.price === 0 ? "FREE" : `+$${addOn.price.toLocaleString()}`}
          </span>
          {addOn.tooltip && (
            <Tooltip
              trigger={
                <Icon
                  name="Info"
                  size="xs"
                  className="text-muted cursor-help"
                />
              }
              content={addOn.tooltip}
              position="top"
              size="sm"
            />
          )}
        </div>
        <p className="mt-1 text-body-sm text-muted">{addOn.description}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function AddOnConfigurator({
  addOns,
  selectedIds,
  onToggle,
  basePrice,
  className,
}: AddOnConfiguratorProps) {
  const { recommended, additional } = splitAddOns(addOns);

  const addOnTotal = selectedIds.reduce((sum, id) => {
    const addOn = addOns.find((a) => a.id === id);
    return sum + (addOn?.price ?? 0);
  }, 0);

  const grandTotal = basePrice + addOnTotal;

  return (
    <div className={cn("w-full", className)}>
      {/* Section header */}
      <h2 className="font-display text-heading-lg font-bold text-foreground">
        Customize Your Package
      </h2>
      <p className="mt-2 text-body text-muted">
        Optional add-ons to enhance your formation. Select any that apply —
        your total updates in real time.
      </p>

      {/* Recommended add-ons */}
      {recommended.length > 0 && (
        <div className="mt-8">
          <h3 className="text-body-lg font-semibold text-foreground mb-3">
            Recommended
          </h3>
          <div className="space-y-3">
            {recommended.map((addOn) => (
              <AddOnRow
                key={addOn.id}
                addOn={addOn}
                checked={selectedIds.includes(addOn.id)}
                onToggle={() => onToggle(addOn.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Additional add-ons */}
      {additional.length > 0 && (
        <div className="mt-8">
          <h3 className="text-body-lg font-semibold text-foreground mb-3">
            Additional Services
          </h3>
          <div className="space-y-3">
            {additional.map((addOn) => (
              <AddOnRow
                key={addOn.id}
                addOn={addOn}
                checked={selectedIds.includes(addOn.id)}
                onToggle={() => onToggle(addOn.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Running total */}
      <div className="mt-8 rounded-card border border-border bg-muted/5 p-5">
        <div className="flex items-center justify-between">
          <span className="text-body font-medium text-foreground">
            Base Package
          </span>
          <span className="font-mono text-body font-semibold text-foreground">
            ${basePrice.toLocaleString()}
          </span>
        </div>

        {selectedIds.length > 0 && (
          <div className="mt-3 space-y-2">
            {selectedIds.map((id) => {
              const addOn = addOns.find((a) => a.id === id);
              if (!addOn) return null;
              return (
                <div
                  key={id}
                  className="flex items-center justify-between"
                >
                  <span className="text-body-sm text-muted">
                    {addOn.name}
                  </span>
                  <span className="font-mono text-body-sm text-muted">
                    {addOn.price === 0
                      ? "FREE"
                      : `+$${addOn.price.toLocaleString()}`}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <div
          role="separator"
          className="my-3 h-px w-full bg-border"
        />

        <div className="flex items-center justify-between">
          <span className="text-body-lg font-bold text-foreground">
            Total
          </span>
          <span className="font-mono text-heading-sm font-bold text-foreground">
            ${grandTotal.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

AddOnConfigurator.displayName = "AddOnConfigurator";

export { AddOnConfigurator };
