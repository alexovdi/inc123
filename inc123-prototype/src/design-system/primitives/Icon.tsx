import { icons } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

const sizeMap = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

type IconSize = keyof typeof sizeMap;

export interface IconProps {
  /** Lucide icon name in PascalCase (e.g. "Shield", "ChevronRight") */
  name: string;
  /** Predefined size preset */
  size?: IconSize;
  /** CSS color value or Tailwind class via className */
  color?: string;
  /** Accessible label — when provided, sets role="img"; otherwise aria-hidden */
  ariaLabel?: string;
  className?: string;
}

function Icon({
  name,
  size = "md",
  color,
  ariaLabel,
  className,
}: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Icon] Unknown lucide icon name: "${name}"`);
    }
    return null;
  }

  return (
    <LucideIcon
      size={sizeMap[size]}
      color={color}
      className={cn("shrink-0", className)}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : undefined}
    />
  );
}

Icon.displayName = "Icon";

export { Icon, sizeMap as iconSizeMap };
