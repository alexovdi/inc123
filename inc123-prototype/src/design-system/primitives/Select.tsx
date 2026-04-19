"use client";

import { type SelectHTMLAttributes, forwardRef, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const selectVariants = cva(
  "w-full appearance-none rounded-button border bg-surface pr-10 font-sans text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-body-sm",
        md: "h-11 px-4 text-body",
        lg: "h-14 px-5 text-body-lg",
      },
      state: {
        default: "border-border",
        error: "border-destructive focus:ring-destructive",
        disabled: "border-border",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);

const labelVariants = cva("block font-sans font-medium text-foreground", {
  variants: {
    size: {
      sm: "text-body-sm mb-1",
      md: "text-body-sm mb-1.5",
      lg: "text-body mb-2",
    },
  },
  defaultVariants: { size: "md" },
});

const chevronSlotVariants = cva(
  "pointer-events-none absolute inset-y-0 right-0 flex items-center text-muted",
  {
    variants: {
      size: {
        sm: "pr-2.5",
        md: "pr-3",
        lg: "pr-4",
      },
    },
    defaultVariants: { size: "md" },
  },
);

const chevronIconVariants = cva("", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: { size: "md" },
});

const helperTextVariants = cva("mt-1.5 text-caption font-sans", {
  variants: {
    tone: {
      default: "text-muted",
      error: "text-destructive",
    },
  },
  defaultVariants: { tone: "default" },
});

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends
    Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  /** Label rendered above the select */
  label?: string;
  /** Options to render */
  options: SelectOption[];
  /** Placeholder text shown as the first disabled option */
  placeholder?: string;
  /** Helper text rendered below the select */
  helperText?: string;
  /** Error message -- replaces helper text and triggers error styling */
  error?: string;
  /** Select size variant */
  size?: "sm" | "md" | "lg";
  /** Whether the field is required */
  required?: boolean;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      helperText,
      error,
      size = "md",
      required,
      disabled,
      className,
      id: externalId,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const id = externalId ?? autoId;
    const helperId = `${id}-helper`;

    const resolvedState = disabled ? "disabled" : error ? "error" : "default";

    return (
      <div className={cn("flex flex-col", className)}>
        {/* Label */}
        {label && (
          <label htmlFor={id} className={labelVariants({ size })}>
            {label}
            {required && (
              <span className="ml-0.5 text-destructive" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        {/* Select wrapper */}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error || helperText ? helperId : undefined}
            className={selectVariants({ size, state: resolvedState })}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Custom chevron */}
          <span className={chevronSlotVariants({ size })} aria-hidden="true">
            <ChevronDown className={chevronIconVariants({ size })} />
          </span>
        </div>

        {/* Helper / Error text */}
        {(error || helperText) && (
          <p
            id={helperId}
            className={helperTextVariants({
              tone: error ? "error" : "default",
            })}
          >
            {error ?? helperText}
          </p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select, selectVariants };
