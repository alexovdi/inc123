import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const winnerVariants = cva("inline-flex items-center gap-1.5", {
  variants: {
    type: {
      winner: "bg-success/10 text-success font-medium px-2 py-0.5 rounded-pill",
      tie: "text-foreground",
      loser: "text-muted line-through",
    },
  },
  defaultVariants: {
    type: "tie",
  },
});

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface WinnerIndicatorProps extends VariantProps<
  typeof winnerVariants
> {
  /** Outcome type */
  type: "winner" | "tie" | "loser";
  /** Content to display */
  children: ReactNode;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function WinnerIndicator({ type, children, className }: WinnerIndicatorProps) {
  return (
    <span className={cn(winnerVariants({ type }), className)}>
      {type === "winner" && (
        <Icon name="Check" size="xs" className="text-success" />
      )}
      {children}
    </span>
  );
}

WinnerIndicator.displayName = "WinnerIndicator";

export { WinnerIndicator, winnerVariants };
