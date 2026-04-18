import { type HTMLAttributes, type ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

const eyebrowVariants = cva("font-semibold uppercase tracking-[0.15em]", {
  variants: {
    size: {
      sm: "text-caption",
      md: "text-body-sm",
    },
    tone: {
      secondary: "text-secondary",
      accent: "text-accent",
      muted: "text-muted",
      success: "text-success",
      onDark: "text-white/70",
      onDarkStrong: "text-white/80",
      inherit: "",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "secondary",
  },
});

export interface EyebrowProps
  extends
    HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof eyebrowVariants> {
  children: ReactNode;
  className?: string;
}

const Eyebrow = forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ size, tone, className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(eyebrowVariants({ size, tone }), className)}
      {...props}
    >
      {children}
    </p>
  ),
);

Eyebrow.displayName = "Eyebrow";

export { Eyebrow, eyebrowVariants };
