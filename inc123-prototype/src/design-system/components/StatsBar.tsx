import { cn } from "@/design-system/utils/cn";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

const stats = [
  { value: "25", label: "Years of Specialized Experience" },
  { value: "Thousands", label: "Entities Formed" },
  { value: "4", label: "States (WY · NV · CA · FL)" },
  { value: "365", label: "Days of Nominee Coverage" },
];

export function StatsBar({ className }: { className?: string }) {
  return (
    <section className={cn("bg-primary py-16 lg:py-20", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="flex flex-col items-center text-center lg:px-6">
                <span className="font-display text-display-lg font-medium text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-body-sm text-white/60">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

StatsBar.displayName = "StatsBar";
