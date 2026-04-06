"use client";

import { useState, useCallback } from "react";
import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface StateSelectorOption {
  value: string;
  label: string;
  href: string;
  description?: string;
}

export interface StateSelectorProps {
  /** Available state options */
  states: StateSelectorOption[];
  /** Widget heading */
  heading: string;
  /** Widget description */
  description?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   State abbreviation display map
   ------------------------------------------------ */
const stateAbbreviations: Record<string, string> = {
  wyoming: "WY",
  nevada: "NV",
  california: "CA",
  florida: "FL",
};

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function StateSelector({
  states,
  heading,
  description,
  className,
}: StateSelectorProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const showCards = states.length <= 4;

  const handleGo = useCallback(() => {
    const selected = states.find((s) => s.value === selectedValue);
    if (selected) {
      window.location.href = selected.href;
    }
  }, [selectedValue, states]);

  const handleCardClick = useCallback((href: string) => {
    window.location.href = href;
  }, []);

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = href;
      }
    },
    [],
  );

  return (
    <div className={cn("bg-primary-50 rounded-card p-6", className)}>
      {/* Heading */}
      <h3 className="text-heading-sm font-display font-semibold text-foreground">
        {heading}
      </h3>
      {description && (
        <p className="text-body text-muted mt-1">{description}</p>
      )}

      {/* Card buttons for small state lists */}
      {showCards ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          {states.map((state) => {
            const abbr =
              stateAbbreviations[state.value.toLowerCase()] ??
              state.value.slice(0, 2).toUpperCase();

            return (
              <button
                key={state.value}
                type="button"
                onClick={() => handleCardClick(state.href)}
                onKeyDown={(e) => handleCardKeyDown(e, state.href)}
                className={cn(
                  "flex flex-col items-center gap-1 p-4 rounded-card border border-border bg-surface",
                  "shadow-card hover:shadow-card-hover hover:-translate-y-0.5",
                  "transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                )}
              >
                <span className="text-heading font-display font-bold text-foreground">
                  {abbr}
                </span>
                <span className="text-caption text-muted">{state.label}</span>
              </button>
            );
          })}
        </div>
      ) : (
        /* Dropdown + Go button for larger state lists */
        <div className="flex items-end gap-3 mt-5">
          <div className="flex-1 relative">
            <label
              htmlFor="state-selector"
              className="block text-body-sm font-medium text-foreground mb-1.5"
            >
              Select a State
            </label>
            <div className="relative">
              <select
                id="state-selector"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className={cn(
                  "w-full appearance-none h-11 px-4 pr-10 rounded-button border border-border bg-surface",
                  "text-body text-foreground font-sans",
                  "transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface",
                )}
              >
                <option value="" disabled>
                  Choose your state...
                </option>
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
              <span
                className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted"
                aria-hidden="true"
              >
                <Icon name="ChevronDown" size="sm" />
              </span>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={handleGo}
            disabled={!selectedValue}
          >
            Go
          </Button>
        </div>
      )}
    </div>
  );
}

StateSelector.displayName = "StateSelector";

export { StateSelector };
