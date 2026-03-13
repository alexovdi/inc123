"use client";

import { type InputHTMLAttributes, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const checkboxBoxVariants = cva(
  "relative shrink-0 rounded-[4px] border-2 transition-colors flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
      checked: {
        true: "border-secondary bg-secondary",
        false: "border-border bg-surface",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
      disabled: false,
    },
  }
);

const checkIconVariants = cva("text-white", {
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-3.5 w-3.5",
    },
  },
  defaultVariants: { size: "md" },
});

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "checked" | "onChange"
  > {
  /** Label text next to the checkbox */
  label: string;
  /** Optional sub-label / description beneath the label */
  description?: string;
  /** Controlled checked state */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: "sm" | "md";
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  className,
  id: externalId,
  ...props
}: CheckboxProps) {
  const autoId = useId();
  const id = externalId ?? autoId;

  return (
    <div className={cn("flex items-start gap-3", className)}>
      {/* Hidden native checkbox */}
      <div className="relative flex items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer absolute h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
          aria-describedby={description ? `${id}-desc` : undefined}
          {...props}
        />

        {/* Visual replacement */}
        <div
          className={cn(
            checkboxBoxVariants({ size, checked, disabled }),
            "peer-focus-visible:ring-2 peer-focus-visible:ring-secondary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface"
          )}
          aria-hidden="true"
        >
          {checked && (
            <Check className={checkIconVariants({ size })} strokeWidth={3} />
          )}
        </div>
      </div>

      {/* Label & description */}
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className={cn(
            "font-sans text-foreground select-none",
            size === "sm" ? "text-body-sm" : "text-body",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          {label}
        </label>
        {description && (
          <p
            id={`${id}-desc`}
            className={cn(
              "mt-0.5 font-sans text-muted",
              size === "sm" ? "text-caption" : "text-body-sm"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxBoxVariants };
