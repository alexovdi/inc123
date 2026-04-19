"use client";

import { useCallback } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Variants
   ------------------------------------------------ */
const containerVariants = cva(
  "inline-flex items-center rounded-pill p-1 border",
  {
    variants: {
      tone: {
        light: "bg-muted/10 border-border",
        dark: "bg-white/10 border-white/20",
      },
    },
    defaultVariants: { tone: "light" },
  },
);

const optionVariants = cva(
  [
    "relative px-5 py-2 text-body-sm font-medium rounded-pill transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  ],
  {
    variants: {
      tone: { light: "", dark: "" },
      active: { true: "shadow-sm", false: "bg-transparent" },
    },
    compoundVariants: [
      { tone: "light", active: true, class: "bg-foreground text-surface" },
      {
        tone: "light",
        active: false,
        class: "text-muted hover:bg-primary/5",
      },
      { tone: "dark", active: true, class: "bg-white text-primary" },
      { tone: "dark", active: false, class: "text-white/80 hover:bg-white/10" },
    ],
    defaultVariants: { tone: "light", active: false },
  },
);

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
  const tone = dark ? "dark" : "light";

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, optionValue: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onChange(optionValue);
      }
    },
    [onChange],
  );

  return (
    <div
      className={cn(containerVariants({ tone }), className)}
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
            className={optionVariants({ tone, active: isActive })}
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
