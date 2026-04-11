import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
interface Differentiator {
  icon: string;
  title: string;
  detail: string;
}

interface KeyDifferentiatorsProps {
  /** Pillar color class for icon accents */
  pillarColor?: string;
  /** 3 key differentiators to display */
  items: Differentiator[];
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function KeyDifferentiators({
  pillarColor = "text-secondary",
  items,
  className,
}: KeyDifferentiatorsProps) {
  return (
    <section className={cn("py-section-y-sm bg-primary-50", className)}>
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-card-lg bg-current/[0.08]",
                    pillarColor,
                  )}
                >
                  <Icon
                    name={item.icon as any}
                    size="md"
                    className={pillarColor}
                  />
                </div>
                <div>
                  <p className="text-body font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-body-sm text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

KeyDifferentiators.displayName = "KeyDifferentiators";

export { KeyDifferentiators };
export type { KeyDifferentiatorsProps, Differentiator };
