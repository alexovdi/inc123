import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center font-semibold uppercase tracking-widest",
    "text-[0.6875rem] leading-none px-2.5 py-1",
    "rounded-[var(--radius-sm)]",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)]",
        gold: "bg-[var(--color-accent)]/15 text-[var(--color-accent)]",
        dark: "bg-[var(--color-bg-accent)] text-[var(--color-text-on-dark)]",
        pillar: "", // pillar colors applied dynamically via pillar prop
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const pillarColorMap: Record<string, string> = {
  privacy:
    "bg-[var(--color-pillar-privacy)]/15 text-[var(--color-pillar-privacy)]",
  asset: "bg-[var(--color-pillar-asset)]/15 text-[var(--color-pillar-asset)]",
  formation:
    "bg-[var(--color-pillar-formation)]/15 text-[var(--color-pillar-formation)]",
  compliance:
    "bg-[var(--color-pillar-compliance)]/15 text-[var(--color-pillar-compliance)]",
};

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Pillar key — applies pillar-specific colors when variant="pillar" */
  pillar?: "privacy" | "asset" | "formation" | "compliance";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, pillar, ...props }, ref) => {
    const pillarClasses =
      variant === "pillar" && pillar ? pillarColorMap[pillar] : undefined;

    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), pillarClasses, className)}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
export type { BadgeProps };
