import { cn } from "@/design-system/utils/cn";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
  tag?: string;
  /** Accent color for circle and tag */
  color?: "blue" | "green" | "amber" | "purple";
}

export interface HowItWorksProps {
  steps: HowItWorksStep[];
  className?: string;
}

/* ------------------------------------------------
   Color maps
   ------------------------------------------------ */
const circleColors: Record<
  string,
  { border: string; bg: string; text: string }
> = {
  blue: {
    border: "border-[var(--pillar-privacy)]",
    bg: "group-hover:bg-[var(--pillar-privacy)]",
    text: "text-[var(--pillar-privacy)] group-hover:text-white",
  },
  green: {
    border: "border-[var(--pillar-asset)]",
    bg: "group-hover:bg-[var(--pillar-asset)]",
    text: "text-[var(--pillar-asset)] group-hover:text-white",
  },
  amber: {
    border: "border-[var(--pillar-formation)]",
    bg: "group-hover:bg-[var(--pillar-formation)]",
    text: "text-[var(--pillar-formation)] group-hover:text-white",
  },
  purple: {
    border: "border-[var(--pillar-compliance)]",
    bg: "group-hover:bg-[var(--pillar-compliance)]",
    text: "text-[var(--pillar-compliance)] group-hover:text-white",
  },
};

const tagColors: Record<string, string> = {
  blue: "bg-[var(--pillar-privacy)]/[0.08] text-[var(--pillar-privacy)]",
  green: "bg-[var(--pillar-asset)]/[0.08] text-[var(--pillar-asset)]",
  amber: "bg-[var(--pillar-formation)]/[0.08] text-[var(--pillar-formation)]",
  purple:
    "bg-[var(--pillar-compliance)]/[0.08] text-[var(--pillar-compliance)]",
};

/* ------------------------------------------------
   Component — Vertical timeline
   ------------------------------------------------ */
function HowItWorks({ steps, className }: HowItWorksProps) {
  return (
    <div
      className={cn("relative flex flex-col max-w-[780px] mx-auto", className)}
    >
      {/* Gradient vertical line */}
      <div
        className="absolute left-[27px] sm:left-[47px] top-0 bottom-0 w-0.5 rounded-full opacity-15"
        style={{
          background:
            "linear-gradient(180deg, var(--pillar-privacy), var(--pillar-asset), var(--pillar-formation), var(--pillar-compliance))",
        }}
        aria-hidden="true"
      />

      {steps.map((step, index) => {
        const color = step.color ?? "blue";
        const colors = circleColors[color];
        const isLast = index === steps.length - 1;

        return (
          <ScrollReveal key={step.number} delay={index * 120}>
            <div
              className={cn(
                "group relative grid items-start py-9",
                "grid-cols-[56px_1fr] gap-5 sm:grid-cols-[96px_1fr] sm:gap-8",
                !isLast && "border-b border-foreground/[0.06]",
              )}
            >
              {/* Number circle */}
              <div className="flex justify-center">
                <div
                  className={cn(
                    "relative z-10 flex items-center justify-center",
                    "h-14 w-14 sm:h-[72px] sm:w-[72px]",
                    "rounded-full border-[2.5px] bg-surface",
                    "shadow-[0_0_0_8px_var(--surface)]",
                    "font-display font-extrabold text-xl sm:text-[26px]",
                    "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "group-hover:scale-110 group-hover:shadow-[0_0_0_10px_var(--surface),0_12px_32px_-4px_rgba(0,0,0,0.12)]",
                    colors.border,
                    colors.bg,
                    colors.text,
                  )}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="pt-2.5">
                <h3 className="font-display text-body-lg font-bold text-foreground tracking-[-0.3px] sm:text-[20px]">
                  {step.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted leading-[1.75] max-w-[520px]">
                  {step.description}
                </p>
                {step.tag && (
                  <span
                    className={cn(
                      "mt-3.5 inline-flex font-mono text-caption font-semibold tracking-[0.04em] px-3 py-1.5 rounded-full",
                      tagColors[color],
                    )}
                  >
                    {step.tag}
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

HowItWorks.displayName = "HowItWorks";

export { HowItWorks };
