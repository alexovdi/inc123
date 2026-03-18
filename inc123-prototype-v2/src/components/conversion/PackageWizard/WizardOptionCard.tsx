"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WizardOptionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  badge?: string;
  selected?: boolean;
  onClick: () => void;
}

export function WizardOptionCard({
  icon: Icon,
  title,
  subtitle,
  badge,
  selected = false,
  onClick,
}: WizardOptionCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Wrapper = prefersReducedMotion ? "button" : motion.button;

  const motionProps = prefersReducedMotion
    ? {}
    : { whileTap: { scale: 0.97 }, whileHover: { y: -4 } };

  return (
    <Wrapper
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-start gap-3 rounded-lg p-5",
        "border-2 transition-shadow duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
        "cursor-pointer text-left w-full",
        selected
          ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5 shadow-[var(--shadow-card)]"
          : "border-[var(--color-border)] bg-[var(--color-bg-surface)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-accent)]",
      )}
      {...motionProps}
    >
      {badge && (
        <span className="absolute -top-2.5 right-4 inline-block rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}

      <Icon
        className="h-6 w-6 text-[var(--color-accent)] transition-colors"
        strokeWidth={1.5}
      />

      <div>
        <p className="text-base font-semibold text-[var(--color-text-primary)]">
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      </div>
    </Wrapper>
  );
}

WizardOptionCard.displayName = "WizardOptionCard";
