"use client";

import { Check } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/design-system/utils/cn";

type StepState = "completed" | "current" | "upcoming";

/* ------------------------------------------------
   Variants
   ------------------------------------------------ */
const desktopCircleVariants = cva(
  [
    "relative flex h-10 w-10 shrink-0 items-center justify-center",
    "rounded-full text-body-sm font-semibold transition-colors",
  ],
  {
    variants: {
      state: {
        completed:
          "bg-success text-white hover:bg-success/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        current: "bg-secondary text-white animate-pulse cursor-default",
        upcoming: "bg-primary-200 text-muted cursor-default",
      },
      clickable: {
        true: "cursor-pointer",
        false: "cursor-default",
      },
    },
    defaultVariants: { state: "upcoming", clickable: false },
  },
);

const desktopLabelVariants = cva("block text-body-sm font-medium", {
  variants: {
    state: {
      completed: "text-success",
      current: "text-secondary",
      upcoming: "text-muted",
    },
  },
  defaultVariants: { state: "upcoming" },
});

const connectingLineVariants = cva(
  "h-0.5 w-full rounded-pill transition-colors",
  {
    variants: {
      state: {
        completed: "bg-success",
        current: "bg-border",
        upcoming: "bg-border",
      },
    },
    defaultVariants: { state: "upcoming" },
  },
);

const mobileDotVariants = cva(
  "flex items-center justify-center rounded-full transition-all",
  {
    variants: {
      state: {
        completed: "h-6 w-6 bg-success text-white",
        current: "h-8 w-8 bg-secondary text-white animate-pulse",
        upcoming: "h-6 w-6 bg-primary-200",
      },
      clickable: {
        true: "cursor-pointer",
        false: "cursor-default",
      },
    },
    defaultVariants: { state: "upcoming", clickable: false },
  },
);

const mobileLineVariants = cva("h-0.5 w-4 rounded-pill", {
  variants: {
    state: {
      completed: "bg-success",
      current: "bg-border",
      upcoming: "bg-border",
    },
  },
  defaultVariants: { state: "upcoming" },
});

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

  const getStepState = (stepId: string): StepState => {
    if (completedSet.has(stepId)) return "completed";
    if (stepId === currentStep) return "current";
    return "upcoming";
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
                    onClick={
                      isClickable ? () => onStepClick(step.id) : undefined
                    }
                    aria-current={state === "current" ? "step" : undefined}
                    className={desktopCircleVariants({
                      state,
                      clickable: isClickable,
                    })}
                  >
                    {state === "completed" ? (
                      <Check className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </button>

                  {/* Label + description */}
                  <div className="mt-2 text-center">
                    <span className={desktopLabelVariants({ state })}>
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
                      className={connectingLineVariants({ state })}
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
                    className={mobileDotVariants({
                      state,
                      clickable: isClickable,
                    })}
                  >
                    {state === "completed" && (
                      <Check className="h-3 w-3" aria-hidden="true" />
                    )}
                  </button>

                  {/* Mini connecting line */}
                  {!isLast && (
                    <div
                      className={mobileLineVariants({ state })}
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step count */}
          <span className="text-caption text-muted">
            Step {steps.findIndex((s) => s.id === currentStep) + 1} of{" "}
            {steps.length}
          </span>
        </div>
      </div>
    </div>
  );
}

StepIndicator.displayName = "StepIndicator";

export { StepIndicator };
