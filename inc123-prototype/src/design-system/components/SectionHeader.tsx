import { cn } from "@/design-system/utils/cn";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Dark variant for sections with bg-primary */
  dark?: boolean;
  /** Max width constraint on subtitle */
  subtitleMaxWidth?: string;
  className?: string;
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
  subtitleMaxWidth,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center", className)}>
      <p
        className={cn(
          "text-body-sm font-semibold uppercase tracking-[0.15em] mb-2",
          dark ? "text-white/70" : "text-secondary",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display type-display-sm font-semibold",
          dark ? "text-white font-medium" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-body-lg",
            dark ? "text-white/70" : "text-muted",
            subtitleMaxWidth,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
export type { SectionHeaderProps };
