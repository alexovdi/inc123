import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

/**
 * Panel — the "just the surface" primitive.
 *
 * Use when you need a `rounded-card` container with background + border,
 * but the opinionated Card (title + description + cta API) is too narrow.
 * Panel is a styled wrapper; compose its children freely.
 */
const panelVariants = cva("rounded-card bg-surface text-foreground", {
  variants: {
    variant: {
      default: "border border-border",
      elevated: "border border-border shadow-card",
      interactive:
        "border border-border transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5",
      featured: "border-2 border-secondary",
      flat: "",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-5",
      lg: "p-6",
      xl: "p-8",
    },
    overflow: {
      visible: "",
      hidden: "overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "none",
    overflow: "visible",
  },
});

export interface PanelProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof panelVariants> {}

const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
  { variant, padding, overflow, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(panelVariants({ variant, padding, overflow }), className)}
      {...rest}
    >
      {children}
    </div>
  );
});

Panel.displayName = "Panel";

export { Panel, panelVariants };
