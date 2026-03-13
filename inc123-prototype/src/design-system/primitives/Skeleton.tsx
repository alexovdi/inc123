import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

const skeletonVariants = cva("animate-pulse bg-muted/20", {
  variants: {
    shape: {
      text: "h-4 w-full rounded-button",
      heading: "h-8 w-3/4 rounded-button",
      image: "w-full rounded-card aspect-video",
      card: "w-full rounded-card",
      avatar: "rounded-full",
    },
  },
  defaultVariants: {
    shape: "text",
  },
});

const defaultDimensions: Record<
  NonNullable<VariantProps<typeof skeletonVariants>["shape"]>,
  { width?: string; height?: string }
> = {
  text: {},
  heading: {},
  image: {},
  card: { height: "12rem" },
  avatar: { width: "3rem", height: "3rem" },
};

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  /** Override width (CSS value, e.g. "200px", "50%") */
  width?: string;
  /** Override height (CSS value) */
  height?: string;
  className?: string;
}

function Skeleton({ shape = "text", width, height, className }: SkeletonProps) {
  const defaults = defaultDimensions[shape ?? "text"];

  return (
    <div
      aria-hidden="true"
      className={cn(skeletonVariants({ shape }), className)}
      style={{
        width: width ?? defaults.width,
        height: height ?? defaults.height,
      }}
    />
  );
}

Skeleton.displayName = "Skeleton";

export { Skeleton, skeletonVariants };
