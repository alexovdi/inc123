import * as React from "react";
import { icons, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

interface IconProps extends Omit<LucideProps, "size"> {
  /** Lucide icon name in PascalCase (e.g. "Shield", "ArrowRight") */
  name: keyof typeof icons;
  /** Predefined size variant */
  size?: keyof typeof sizeMap;
  /** Override className for color, spacing, etc. */
  className?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = "md", className, ...props }, ref) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[Icon] Unknown icon name: "${name}"`);
      }
      return null;
    }

    return (
      <LucideIcon
        ref={ref}
        size={sizeMap[size]}
        className={cn("shrink-0", className)}
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";

export { Icon, sizeMap };
export type { IconProps };
