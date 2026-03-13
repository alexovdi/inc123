import { type ReactNode } from "react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface HowItWorksStep {
  /** Step number (displayed in the circle) */
  number: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Optional icon (ReactNode, e.g. lucide icon component) */
  icon?: ReactNode;
}

export interface HowItWorksProps {
  /** Array of steps to display */
  steps: HowItWorksStep[];
  /** Layout direction — defaults to responsive (vertical on mobile, horizontal on desktop) */
  layout?: "horizontal" | "vertical";
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function HowItWorks({
  steps,
  layout,
  className,
}: HowItWorksProps) {
  const isHorizontal = layout === "horizontal";
  const isVertical = layout === "vertical";
  // Default (no layout specified): responsive — vertical on mobile, horizontal on desktop
  const isResponsive = !layout;

  return (
    <div
      className={cn(
        "w-full",
        isHorizontal && "flex flex-row items-start",
        isVertical && "flex flex-col",
        isResponsive && "flex flex-col md:flex-row md:items-start",
        className
      )}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div
            key={step.number}
            className={cn(
              "relative flex",
              // Horizontal layout
              isHorizontal && "flex-1 flex-col items-center text-center",
              // Vertical layout
              isVertical && "flex-row items-start gap-4 pb-8 last:pb-0",
              // Responsive layout
              isResponsive &&
                "flex-row items-start gap-4 pb-8 last:pb-0 md:flex-1 md:flex-col md:items-center md:gap-0 md:pb-0 md:text-center"
            )}
          >
            {/* Number circle + connector wrapper */}
            <div
              className={cn(
                "relative flex shrink-0",
                isHorizontal && "mb-4 w-full items-center justify-center",
                isVertical && "flex-col items-center",
                isResponsive &&
                  "flex-col items-center md:mb-4 md:w-full md:flex-row md:justify-center"
              )}
            >
              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-card">
                <span className="text-display font-display text-body-lg font-bold">
                  {step.number}
                </span>
              </div>

              {/* Connecting line — horizontal */}
              {!isLast && (
                <>
                  {/* Line for horizontal / responsive desktop */}
                  <div
                    className={cn(
                      "border-dashed border-border",
                      isHorizontal &&
                        "absolute left-[calc(50%+24px)] top-1/2 h-0 w-[calc(100%-48px)] -translate-y-1/2 border-t-2",
                      isVertical &&
                        "mt-1 h-full w-0 border-l-2",
                      isResponsive &&
                        "mt-1 h-full w-0 border-l-2 md:mt-0 md:absolute md:left-[calc(50%+24px)] md:top-1/2 md:h-0 md:w-[calc(100%-48px)] md:-translate-y-1/2 md:border-l-0 md:border-t-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </div>

            {/* Content */}
            <div
              className={cn(
                isHorizontal && "px-3",
                isVertical && "flex-1",
                isResponsive && "flex-1 md:mt-4 md:px-3"
              )}
            >
              {/* Optional icon */}
              {step.icon && (
                <div
                  className={cn(
                    "mb-2 text-secondary",
                    isHorizontal && "flex justify-center",
                    isResponsive && "md:flex md:justify-center"
                  )}
                >
                  {step.icon}
                </div>
              )}

              <h3 className="text-body-lg font-display font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-body-sm text-muted">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

HowItWorks.displayName = "HowItWorks";

export { HowItWorks };
