"use client";

import {
  type TextareaHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const textareaVariants = cva(
  "w-full rounded-button border bg-surface font-sans text-foreground placeholder:text-muted/60 transition-colors resize-y focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-body-sm",
        md: "px-4 py-3 text-body",
        lg: "px-5 py-4 text-body-lg",
      },
      state: {
        default: "border-border",
        error: "border-destructive focus:ring-destructive",
        success: "border-success focus:ring-success",
        disabled: "border-border",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
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

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  /** Label rendered above the textarea */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Helper text rendered below the textarea */
  helperText?: string;
  /** Error message -- replaces helper text and triggers error styling */
  error?: string;
  /** Textarea size variant */
  size?: "sm" | "md" | "lg";
  /** Number of visible text rows */
  rows?: number;
  /** Maximum character count (shows counter when set) */
  maxLength?: number;
  /** Whether the field is required */
  required?: boolean;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      placeholder,
      helperText,
      error,
      size = "md",
      rows = 4,
      maxLength,
      required,
      disabled,
      className,
      id: externalId,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const id = externalId ?? autoId;
    const helperId = `${id}-helper`;

    const resolvedState = disabled
      ? "disabled"
      : error
        ? "error"
        : "default";

    // Character count: use value if controlled, otherwise track via uncontrolled
    const charCount =
      typeof value === "string" ? value.length : undefined;

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

        {/* Textarea */}
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error || helperText ? helperId : undefined}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className={cn(textareaVariants({ size, state: resolvedState }))}
          {...props}
        />

        {/* Footer row: helper/error text + character count */}
        <div className="mt-1.5 flex items-start justify-between gap-2">
          {/* Helper / Error text */}
          {(error || helperText) ? (
            <p
              id={helperId}
              className={cn(
                "text-caption font-sans",
                error ? "text-destructive" : "text-muted"
              )}
            >
              {error ?? helperText}
            </p>
          ) : (
            <span />
          )}

          {/* Character count */}
          {maxLength != null && charCount != null && (
            <span
              className={cn(
                "shrink-0 text-caption font-sans tabular-nums",
                charCount >= maxLength ? "text-destructive" : "text-muted"
              )}
              aria-live="polite"
            >
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
