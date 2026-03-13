"use client";

import { Check } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface StepIndicatorStep {
  /** Unique step identifier */
  id: string;
  /** Step label */
  label: string;
  /** Optional step description */
  description?: string;
}

export interface StepIndicatorProps {
  /** Array of steps */
  steps: StepIndicatorStep[];
  /** ID of the currently active step */
  currentStep: string;
  /** IDs of completed steps */
  completedSteps: string[];
  /** Callback when a completed step is clicked */
  onStepClick?: (stepId: string) => void;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function StepIndicator({
  steps,
  currentStep,
  completedSteps,
  onStepClick,
  className,
}: StepIndicatorProps) {
  const completedSet = new Set(completedSteps);

  const getStepState = (stepId: string) => {
    if (completedSet.has(stepId)) return "completed" as const;
    if (stepId === currentStep) return "current" as const;
    return "upcoming" as const;
  };

  const currentStepData = steps.find((s) => s.id === currentStep);

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop view */}
      <div className="hidden sm:block">
        <div className="flex items-start">
          {steps.map((step, index) => {
            const state = getStepState(step.id);
            const isLast = index === steps.length - 1;
            const isClickable = state === "completed" && !!onStepClick;

            return (
              <div key={step.id} className="flex flex-1 items-start">
                {/* Step circle + content */}
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  <button
                    type="button"
                    disabled={!isClickable}
                    onClick={isClickable ? () => onStepClick(step.id) : undefined}
                    aria-current={state === "current" ? "step" : undefined}
                    className={cn(
                      "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-body-sm font-semibold transition-colors",
                      state === "completed" &&
                        "bg-success text-white cursor-pointer hover:bg-success/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                      state === "current" &&
                        "bg-secondary text-white animate-pulse cursor-default",
                      state === "upcoming" &&
                        "bg-primary-200 text-muted cursor-default",
                      !isClickable && "cursor-default"
                    )}
                  >
                    {state === "completed" ? (
                      <Check className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </button>

                  {/* Label + description */}
                  <div className="mt-2 text-center">
                    <span
                      className={cn(
                        "block text-body-sm font-medium",
                        state === "completed" && "text-success",
                        state === "current" && "text-secondary",
                        state === "upcoming" && "text-muted"
                      )}
                    >
                      {step.label}
                    </span>
                    {step.description && (
                      <span className="mt-0.5 block text-caption text-muted">
                        {step.description}
                      </span>
                    )}
                  </div>
                </div>

                {/* Connecting line */}
                {!isLast && (
                  <div className="mt-5 flex flex-1 items-center px-2">
                    <div
                      className={cn(
                        "h-0.5 w-full rounded-pill transition-colors",
                        // Line is filled if both the current and next step are completed,
                        // or if the current step is completed (leading into current/upcoming)
                        state === "completed"
                          ? "bg-success"
                          : "bg-border"
                      )}
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile view — compact dots */}
      <div className="sm:hidden">
        <div className="flex flex-col items-center gap-3">
          {/* Current step label */}
          {currentStepData && (
            <div className="text-center">
              <span className="text-body font-semibold text-secondary">
                {currentStepData.label}
              </span>
              {currentStepData.description && (
                <span className="mt-0.5 block text-body-sm text-muted">
                  {currentStepData.description}
                </span>
              )}
            </div>
          )}

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {steps.map((step, index) => {
              const state = getStepState(step.id);
              const isClickable = state === "completed" && !!onStepClick;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.id} className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={!isClickable}
                    onClick={
                      isClickable ? () => onStepClick(step.id) : undefined
                    }
                    aria-label={`${step.label}${state === "completed" ? " (completed)" : state === "current" ? " (current)" : ""}`}
                    aria-current={state === "current" ? "step" : undefined}
                    className={cn(
                      "flex items-center justify-center rounded-full transition-all",
                      state === "completed" &&
                        "h-6 w-6 bg-success text-white cursor-pointer",
                      state === "current" &&
                        "h-8 w-8 bg-secondary text-white animate-pulse",
                      state === "upcoming" &&
                        "h-6 w-6 bg-primary-200",
                      !isClickable && state !== "current" && "cursor-default"
                    )}
                  >
                    {state === "completed" && (
                      <Check className="h-3 w-3" aria-hidden="true" />
                    )}
                  </button>

                  {/* Mini connecting line */}
                  {!isLast && (
                    <div
                      className={cn(
                        "h-0.5 w-4 rounded-pill",
                        state === "completed" ? "bg-success" : "bg-border"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step count */}
          <span className="text-caption text-muted">
            Step{" "}
            {steps.findIndex((s) => s.id === currentStep) + 1} of{" "}
            {steps.length}
          </span>
        </div>
      </div>
    </div>
  );
}

StepIndicator.displayName = "StepIndicator";

export { StepIndicator };
