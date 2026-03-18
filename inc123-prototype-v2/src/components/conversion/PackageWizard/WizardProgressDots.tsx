"use client";

import { cn } from "@/lib/utils";

interface WizardProgressDotsProps {
  totalSteps: number;
  currentStep: number;
  labels?: string[];
}

const DEFAULT_LABELS = ["Goal", "Location", "Package", "Result"];

export function WizardProgressDots({
  totalSteps,
  currentStep,
  labels = DEFAULT_LABELS,
}: WizardProgressDotsProps) {
  const visibleLabels = labels.slice(0, totalSteps + 1);

  return (
    <div
      className="flex items-center gap-0"
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={totalSteps + 1}
    >
      {visibleLabels.map((label, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep + 1;
        const isDone = stepNum < currentStep + 1;
        return (
          <div
            key={label}
            className="flex items-center"
            style={{ flex: i < visibleLabels.length - 1 ? 1 : "none" }}
          >
            <div
              className="flex flex-col items-center gap-1"
              style={{ minWidth: 48 }}
            >
              <div
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
                  isDone || isActive
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-[var(--color-border)] text-[var(--color-text-secondary)]",
                )}
              >
                {isDone ? "\u2713" : stepNum}
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium transition-all duration-300",
                  isActive
                    ? "font-bold text-[var(--color-accent)]"
                    : isDone
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-secondary)]",
                )}
              >
                {label}
              </span>
            </div>
            {i < visibleLabels.length - 1 && (
              <div
                className={cn(
                  "mx-2 mb-5 h-0.5 flex-1 rounded-sm transition-all duration-400",
                  isDone
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-border)]",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

WizardProgressDots.displayName = "WizardProgressDots";
