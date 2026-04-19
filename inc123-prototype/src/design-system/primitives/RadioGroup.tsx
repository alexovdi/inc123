"use client";

import { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const radioGroupVariants = cva("flex", {
  variants: {
    layout: {
      vertical: "flex-col gap-3",
      horizontal: "flex-row flex-wrap gap-4",
    },
  },
  defaultVariants: { layout: "vertical" },
});

const radioCircleVariants = cva(
  "relative shrink-0 rounded-full border-2 transition-colors flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
      selected: {
        true: "border-secondary",
        false: "border-border",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      size: "md",
      selected: false,
      disabled: false,
    },
  },
);

const radioDotVariants = cva("rounded-full bg-secondary", {
  variants: {
    size: {
      sm: "h-2 w-2",
      md: "h-2.5 w-2.5",
    },
  },
  defaultVariants: { size: "md" },
});

const legendVariants = cva("mb-2 font-sans font-medium text-foreground", {
  variants: {
    size: {
      sm: "text-body-sm",
      md: "text-body",
    },
  },
  defaultVariants: { size: "md" },
});

const labelVariants = cva("font-sans text-foreground select-none", {
  variants: {
    size: {
      sm: "text-body-sm",
      md: "text-body",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
  },
  defaultVariants: { size: "md", disabled: false },
});

const descriptionVariants = cva("mt-0.5 font-sans text-muted", {
  variants: {
    size: {
      sm: "text-caption",
      md: "text-body-sm",
    },
  },
  defaultVariants: { size: "md" },
});

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps extends VariantProps<
  typeof radioGroupVariants
> {
  /** Group label */
  label?: string;
  /** Radio options */
  options: RadioOption[];
  /** Currently selected value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Disabled state for all options */
  disabled?: boolean;
  /** Layout direction */
  layout?: "vertical" | "horizontal";
  /** Size variant */
  size?: "sm" | "md";
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function RadioGroup({
  label,
  options,
  value,
  onChange,
  disabled = false,
  layout = "vertical",
  size = "md",
  className,
}: RadioGroupProps) {
  const groupId = useId();
  const groupName = `radio-group-${groupId}`;

  return (
    <fieldset
      className={cn("flex flex-col", className)}
      disabled={disabled}
      role="radiogroup"
      aria-labelledby={label ? `${groupId}-label` : undefined}
    >
      {/* Group label */}
      {label && (
        <legend id={`${groupId}-label`} className={legendVariants({ size })}>
          {label}
        </legend>
      )}

      {/* Options */}
      <div className={radioGroupVariants({ layout })}>
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`;
          const isSelected = value === option.value;

          return (
            <div key={option.value} className="flex items-start gap-3">
              {/* Hidden native radio */}
              <div className="relative flex items-center">
                <input
                  id={optionId}
                  type="radio"
                  name={groupName}
                  value={option.value}
                  checked={isSelected}
                  disabled={disabled}
                  onChange={() => onChange?.(option.value)}
                  className="peer absolute h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
                  aria-describedby={
                    option.description ? `${optionId}-desc` : undefined
                  }
                />

                {/* Visual circle */}
                <div
                  className={cn(
                    radioCircleVariants({
                      size,
                      selected: isSelected,
                      disabled,
                    }),
                    "peer-focus-visible:ring-2 peer-focus-visible:ring-secondary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface",
                  )}
                  aria-hidden="true"
                >
                  {isSelected && <div className={radioDotVariants({ size })} />}
                </div>
              </div>

              {/* Label & description */}
              <div className="flex flex-col">
                <label
                  htmlFor={optionId}
                  className={labelVariants({ size, disabled })}
                >
                  {option.label}
                </label>
                {option.description && (
                  <p
                    id={`${optionId}-desc`}
                    className={descriptionVariants({ size })}
                  >
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

RadioGroup.displayName = "RadioGroup";

export { RadioGroup, radioGroupVariants };
