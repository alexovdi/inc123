"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "w-full border bg-[var(--color-bg-surface)] text-[var(--color-text-primary)]",
    "placeholder:text-[var(--color-text-secondary)]/60",
    "transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)]",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm rounded-[var(--radius-sm)]",
        md: "h-10 px-4 text-sm rounded-[var(--radius-md)]",
        lg: "h-12 px-4 text-base rounded-[var(--radius-md)]",
      },
      error: {
        true: "border-red-500 focus:ring-red-500 focus:border-red-500",
        false: "border-[var(--color-border)]",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message — also sets error styling */
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, size, error, label, helperText, errorMessage, id, ...props },
    ref,
  ) => {
    const inputId = id || React.useId();
    const hasError = error || !!errorMessage;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--color-text-primary)]"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={cn(inputVariants({ size, error: hasError, className }))}
          aria-invalid={hasError || undefined}
          aria-describedby={
            errorMessage
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          {...props}
        />

        {errorMessage && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-red-500"
            role="alert"
          >
            {errorMessage}
          </p>
        )}

        {!errorMessage && helperText && (
          <p
            id={`${inputId}-helper`}
            className="text-xs text-[var(--color-text-secondary)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };
export type { InputProps };
