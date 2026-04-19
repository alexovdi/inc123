import { cva } from "class-variance-authority";

import { cn } from "@/design-system/utils/cn";
import { Eyebrow } from "@/design-system/primitives/Eyebrow";

/* -------------------------------------------------- */
/*  CVA variants — slot-level, keyed by `tone`         */
/* -------------------------------------------------- */
const titleVariants = cva("font-display type-display-sm font-semibold", {
  variants: {
    tone: {
      light: "text-foreground",
      dark: "text-white font-medium",
    },
  },
  defaultVariants: { tone: "light" },
});

const subtitleVariants = cva("mt-3 text-body-lg", {
  variants: {
    tone: {
      light: "text-muted",
      dark: "text-white/70",
    },
  },
  defaultVariants: { tone: "light" },
});

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
  const tone = dark ? "dark" : "light";

  return (
    <div className={cn("text-center", className)}>
      <Eyebrow tone={dark ? "onDark" : "secondary"} className="mb-2">
        {eyebrow}
      </Eyebrow>
      <h2 className={titleVariants({ tone })}>{title}</h2>
      {subtitle && (
        <p className={cn(subtitleVariants({ tone }), subtitleMaxWidth)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
export type { SectionHeaderProps };
