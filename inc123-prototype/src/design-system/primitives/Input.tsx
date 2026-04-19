"use client";

import {
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
  useId,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const inputVariants = cva(
  [
    "w-full rounded-button border bg-surface font-sans text-foreground",
    "placeholder:text-muted/60 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
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
        success: "border-success focus:ring-success",
        disabled: "border-border",
      },
      withIcon: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", withIcon: true, class: "pl-8" },
      { size: "md", withIcon: true, class: "pl-10" },
      { size: "lg", withIcon: true, class: "pl-12" },
    ],
    defaultVariants: {
      size: "md",
      state: "default",
      withIcon: false,
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

const iconSlotVariants = cva(
  "pointer-events-none absolute inset-y-0 left-0 flex items-center text-muted",
  {
    variants: {
      size: {
        sm: "pl-2.5",
        md: "pl-3",
        lg: "pl-4",
      },
    },
    defaultVariants: { size: "md" },
  },
);

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
export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /** Label rendered above the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Helper text rendered below the input */
  helperText?: string;
  /** Error message — replaces helper text and triggers error styling */
  error?: string;
  /** Input size variant */
  size?: "sm" | "md" | "lg";
  /** HTML input type */
  type?: "text" | "email" | "tel" | "number";
  /** Whether the field is required */
  required?: boolean;
  /** Leading icon rendered inside the input */
  icon?: ReactNode;
  /** Additional class names */
  className?: string;
}

type InputState = "default" | "error" | "success" | "disabled";

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      helperText,
      error,
      size = "md",
      type = "text",
      required,
      icon,
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

    const resolvedState: InputState = disabled
      ? "disabled"
      : error
        ? "error"
        : ((props as { state?: InputState }).state ?? "default");

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

        {/* Input wrapper (for icon positioning) */}
        <div className="relative">
          {icon && (
            <span className={iconSlotVariants({ size })} aria-hidden="true">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            type={type}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={error || helperText ? helperId : undefined}
            className={inputVariants({
              size,
              state: resolvedState,
              withIcon: !!icon,
            })}
            {...props}
          />
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

Input.displayName = "Input";

export { Input, inputVariants };
