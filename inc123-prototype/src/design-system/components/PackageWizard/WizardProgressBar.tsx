"use client";

import { cn } from "@/design-system/utils/cn";

interface WizardProgressBarProps {
  totalSteps: number;
  currentStep: number;
  labels?: string[];
}

const DEFAULT_LABELS = ["Goal", "Location", "Package", "Result"];

export function WizardProgressBar({
  totalSteps,
  currentStep,
  labels = DEFAULT_LABELS,
}: WizardProgressBarProps) {
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
                  "flex h-7 w-7 items-center justify-center rounded-full text-caption font-bold transition-all duration-300",
                  isDone || isActive
                    ? "bg-secondary text-white"
                    : "bg-border text-muted",
                )}
              >
                {isDone ? "\u2713" : stepNum}
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium transition-all duration-300",
                  isActive
                    ? "font-bold text-secondary"
                    : isDone
                      ? "text-secondary"
                      : "text-muted",
                )}
              >
                {label}
              </span>
            </div>
            {i < visibleLabels.length - 1 && (
              <div
                className={cn(
                  "mx-2 mb-5 h-0.5 flex-1 rounded-sm transition-all duration-400",
                  isDone ? "bg-secondary" : "bg-border",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

WizardProgressBar.displayName = "WizardProgressBar";
