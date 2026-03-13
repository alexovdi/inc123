import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";
import type { TrustSignalItem } from "@/lib/types";

/* -------------------------------------------------- */
/*  CVA variants                                       */
/* -------------------------------------------------- */
const trustSignalsVariants = cva("", {
  variants: {
    layout: {
      row: "flex flex-wrap items-center justify-center gap-8",
      grid: "grid grid-cols-2 md:grid-cols-3 gap-6",
      compact: "flex flex-wrap items-center justify-center gap-6",
    },
    variant: {
      light: "",
      dark: "",
      subtle: "",
    },
  },
  defaultVariants: {
    layout: "row",
    variant: "light",
  },
});

const itemVariants = cva("flex flex-col items-center text-center gap-1.5", {
  variants: {
    layout: {
      row: "",
      grid: "p-4",
      compact: "flex-row gap-2",
    },
    variant: {
      light: "",
      dark: "",
      subtle: "",
    },
  },
});

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface TrustSignalsProps
  extends VariantProps<typeof trustSignalsVariants> {
  items: TrustSignalItem[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function TrustSignals({
  items,
  layout,
  variant,
  className,
}: TrustSignalsProps) {
  const isCompact = layout === "compact";
  const isDark = variant === "dark";
  const isSubtle = variant === "subtle";

  return (
    <div
      className={cn(trustSignalsVariants({ layout, variant }), className)}
      role="list"
      aria-label="Trust signals"
    >
      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className={cn(
            itemVariants({ layout, variant }),
            isCompact && "flex-col sm:flex-row"
          )}
          role="listitem"
        >
          {/* Icon */}
          <div
            className={cn(
              "shrink-0",
              isDark
                ? "text-white/80"
                : isSubtle
                  ? "text-muted"
                  : "text-secondary"
            )}
          >
            <Icon
              name={item.icon}
              size={isCompact ? "sm" : "lg"}
              ariaLabel={item.label}
            />
          </div>

          {/* Value + Label */}
          <div
            className={cn(
              isCompact ? "flex items-baseline gap-1.5" : "flex flex-col"
            )}
          >
            <span
              className={cn(
                "font-display font-bold",
                isCompact ? "text-body" : "text-heading-sm",
                isDark
                  ? "text-white"
                  : isSubtle
                    ? "text-foreground"
                    : "text-foreground"
              )}
            >
              {item.value}
            </span>
            <span
              className={cn(
                isCompact ? "text-caption" : "text-body-sm",
                isDark
                  ? "text-white/60"
                  : isSubtle
                    ? "text-muted/70"
                    : "text-muted"
              )}
            >
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

TrustSignals.displayName = "TrustSignals";

export { TrustSignals, trustSignalsVariants };
