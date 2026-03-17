import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import { pillarBadgeMap } from "@/design-system/utils/pillarMaps";
import type { PillarName } from "@/design-system/tokens";

const badgeVariants = cva("inline-flex items-center font-medium rounded-pill", {
  variants: {
    variant: {
      default: "bg-muted/15 text-foreground",
      success: "bg-success/15 text-success",
      warning: "bg-warning/15 text-warning",
      destructive: "bg-destructive/15 text-destructive",
      info: "bg-secondary/15 text-secondary",
    },
    size: {
      sm: "px-2 py-0.5 text-caption",
      md: "px-3 py-1 text-body-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const tierBadgeMap = {
  bronze:
    "bg-amber-800/15 text-amber-800 dark:bg-amber-600/15 dark:text-amber-600",
  silver: "bg-gray-400/15 text-gray-600 dark:bg-gray-400/15 dark:text-gray-400",
  gold: "bg-yellow-500/15 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
} as const;

type Tier = keyof typeof tierBadgeMap;

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  /** Pillar-colored badge — overrides variant */
  pillar?: PillarName;
  /** Package tier badge — overrides variant */
  tier?: Tier;
  children: ReactNode;
  className?: string;
}

function Badge({
  variant,
  size,
  pillar,
  tier,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({ variant: pillar || tier ? null : variant, size }),
        pillar && pillarBadgeMap[pillar],
        tier && tierBadgeMap[tier],
        className,
      )}
    >
      {children}
    </span>
  );
}

Badge.displayName = "Badge";

export { Badge, badgeVariants };
