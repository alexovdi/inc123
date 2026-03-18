"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

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
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-start gap-3 rounded-card p-5",
        "border-2 transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
        "cursor-pointer text-left w-full",
        "hover:-translate-y-1 active:scale-[0.97]",
        selected
          ? "border-secondary bg-secondary/5 shadow-card"
          : "border-border bg-surface hover:shadow-card-hover hover:border-secondary",
      )}
    >
      {badge && (
        <span className="absolute -top-2.5 right-4 inline-block rounded-pill bg-secondary px-2.5 py-0.5 text-caption font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}

      <Icon
        className="h-6 w-6 text-secondary transition-colors"
        strokeWidth={1.5}
      />

      <div>
        <p className="text-body font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-body-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      </div>
    </button>
  );
}

WizardOptionCard.displayName = "WizardOptionCard";
