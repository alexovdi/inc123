"use client";

import { type ChangeEvent } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

const toggleTrackVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center rounded-pill transition-colors focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2 focus-within:ring-offset-surface",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-[3.25rem]",
      },
      checked: {
        true: "bg-secondary",
        false: "bg-muted/30",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
    },
  }
);

const toggleThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-card transition-transform",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-4.5 w-4.5",
        lg: "h-5.5 w-5.5",
      },
      checked: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", checked: false, class: "translate-x-[3px]" },
      { size: "sm", checked: true, class: "translate-x-[17px]" },
      { size: "md", checked: false, class: "translate-x-[3px]" },
      { size: "md", checked: true, class: "translate-x-[23px]" },
      { size: "lg", checked: false, class: "translate-x-[3px]" },
      { size: "lg", checked: true, class: "translate-x-[27px]" },
    ],
    defaultVariants: {
      size: "md",
      checked: false,
    },
  }
);

export interface ToggleProps
  extends Omit<VariantProps<typeof toggleTrackVariants>, "checked" | "disabled"> {
  /** Labels displayed beside the toggle */
  labels?: { on: string; off: string };
  /** Controlled checked state */
  checked: boolean;
  /** Change handler */
  onChange: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  className?: string;
}

function Toggle({
  labels,
  checked,
  onChange,
  disabled = false,
  size,
  className,
}: ToggleProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 select-none",
        disabled && "cursor-not-allowed",
        className
      )}
    >
      {labels && (
        <span
          className={cn(
            "text-body-sm",
            !checked ? "text-foreground font-medium" : "text-muted"
          )}
        >
          {labels.off}
        </span>
      )}

      <span
        className={toggleTrackVariants({ size, checked, disabled })}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <span
          className={toggleThumbVariants({ size, checked })}
          aria-hidden="true"
        />
      </span>

      {labels && (
        <span
          className={cn(
            "text-body-sm",
            checked ? "text-foreground font-medium" : "text-muted"
          )}
        >
          {labels.on}
        </span>
      )}
    </label>
  );
}

Toggle.displayName = "Toggle";

export { Toggle, toggleTrackVariants, toggleThumbVariants };
