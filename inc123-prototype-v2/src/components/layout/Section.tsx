import { cn } from "@/lib/utils";
import type { SectionVariant } from "@/lib/types";

/* ═══════════════════════════════════════════════════════════════════════════
   Section — Versatile section wrapper with variant-driven styling
   ═══════════════════════════════════════════════════════════════════════════ */

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-[var(--color-bg-accent)] text-[var(--color-text-on-dark)] [&_h1]:text-[var(--color-text-on-dark)] [&_h2]:text-[var(--color-text-on-dark)] [&_h3]:text-[var(--color-text-on-dark)] [&_h4]:text-[var(--color-text-on-dark)]",
  cream: "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]",
  "cream-alt":
    "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]",
};

interface SectionProps {
  variant?: SectionVariant;
  narrow?: boolean;
  noPadding?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  variant = "cream",
  narrow = false,
  noPadding = false,
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn(variantClasses[variant], className)}>
      <div
        className={cn(
          "mx-auto px-container-x",
          narrow ? "max-w-narrow" : "max-w-content",
          !noPadding && "py-section-y",
        )}
      >
        {children}
      </div>
    </section>
  );
}

Section.displayName = "Section";
