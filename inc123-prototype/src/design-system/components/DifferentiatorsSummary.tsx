import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

export interface DifferentiatorsSummaryProps {
  heading?: string;
  items: string[];
  className?: string;
}

function DifferentiatorsSummary({
  heading = "What Sets Us Apart",
  items,
  className,
}: DifferentiatorsSummaryProps) {
  return (
    <section
      className={cn("bg-background py-section-y px-container-x", className)}
    >
      <div className="mx-auto max-w-content">
        <div className="text-center mb-10">
          <h2 className="font-display text-heading-lg font-bold text-foreground">
            {heading}
          </h2>
        </div>
        <ul className="mx-auto grid max-w-narrow gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-card border border-border bg-surface p-4"
            >
              <Icon
                name="CheckCircle2"
                size="md"
                className="mt-0.5 shrink-0 text-success"
              />
              <span className="text-body text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

DifferentiatorsSummary.displayName = "DifferentiatorsSummary";

export { DifferentiatorsSummary };
