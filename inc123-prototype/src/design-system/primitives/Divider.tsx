import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

const dividerVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-full",
    },
    weight: {
      light: "",
      medium: "",
      heavy: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", weight: "light", class: "h-px" },
    { orientation: "horizontal", weight: "medium", class: "h-0.5" },
    { orientation: "horizontal", weight: "heavy", class: "h-1" },
    { orientation: "vertical", weight: "light", class: "w-px" },
    { orientation: "vertical", weight: "medium", class: "w-0.5" },
    { orientation: "vertical", weight: "heavy", class: "w-1" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    weight: "light",
  },
});

export interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
}

function Divider({ orientation, weight, className }: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation ?? "horizontal"}
      className={cn(dividerVariants({ orientation, weight }), className)}
    />
  );
}

Divider.displayName = "Divider";

export { Divider, dividerVariants };
