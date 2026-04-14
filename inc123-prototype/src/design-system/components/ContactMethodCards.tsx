import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import type { ContactMethod } from "@/lib/types";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface ContactMethodCardsProps {
  /** Array of contact method objects */
  methods: ContactMethod[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function ContactMethodCards({ methods, className }: ContactMethodCardsProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method) => {
            const isPhone = method.type === "phone";

            return (
              <article
                key={method.type}
                className={cn(
                  "rounded-card border bg-surface p-6 transition-shadow hover:shadow-card-hover flex flex-col",
                  isPhone ? "border-secondary border-2" : "border-border",
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "mb-4 flex items-center justify-center w-12 h-12 rounded-full",
                    isPhone ? "bg-secondary/15" : "bg-secondary/10",
                  )}
                >
                  <Icon
                    name={method.icon}
                    size="lg"
                    className="text-secondary"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-heading-sm text-foreground">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-body text-muted leading-relaxed flex-1">
                  {method.description}
                </p>

                {/* Action */}
                {method.action && (
                  <div className="mt-4">
                    {method.type === "phone" ? (
                      <a
                        href={method.action.href}
                        className="inline-flex items-center gap-2 text-body-lg font-bold text-secondary hover:underline"
                      >
                        <Icon name="Phone" size="sm" />
                        {method.action.label}
                      </a>
                    ) : (
                      <a
                        href={method.action.href}
                        className="inline-flex items-center gap-1.5 text-body font-medium text-secondary hover:underline"
                      >
                        {method.action.label}
                        <Icon
                          name={
                            method.type === "email" ? "ArrowRight" : "ArrowDown"
                          }
                          size="sm"
                        />
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

ContactMethodCards.displayName = "ContactMethodCards";

export { ContactMethodCards };
