"use client";

import { useCallback } from "react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface EntityTypeToggleOption {
  value: string;
  label: string;
}

export interface EntityTypeToggleProps {
  /** Available entity type options */
  options: EntityTypeToggleOption[];
  /** Currently selected value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Use dark-background-friendly colors (for placement on bg-primary) */
  dark?: boolean;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function EntityTypeToggle({
  options,
  value,
  onChange,
  dark,
  className,
}: EntityTypeToggleProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, optionValue: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onChange(optionValue);
      }
    },
    [onChange]
  );

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-pill p-1",
        dark
          ? "bg-white/10 border border-white/20"
          : "bg-muted/10 border border-border",
        className
      )}
      role="radiogroup"
      aria-label="Entity type"
    >
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            onKeyDown={(e) => handleKeyDown(e, option.value)}
            className={cn(
              "relative px-5 py-2 text-body-sm font-medium rounded-pill transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
              isActive
                ? "bg-secondary text-white shadow-sm"
                : dark
                  ? "bg-transparent text-white/90 hover:bg-white/10"
                  : "bg-transparent text-foreground hover:bg-primary/5"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

EntityTypeToggle.displayName = "EntityTypeToggle";

export { EntityTypeToggle };
