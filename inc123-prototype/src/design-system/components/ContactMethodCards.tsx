import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import type { ContactMethod } from "@/lib/types";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface ContactMethodCardsProps {
  /** Array of contact method objects */
  methods: ContactMethod[];
  /** Show phone card as a featured hero above the other methods */
  featurePhone?: boolean;
  className?: string;
}

/* -------------------------------------------------- */
/*  Phone Hero Card                                    */
/* -------------------------------------------------- */
function PhoneHeroCard({ method }: { method: ContactMethod }) {
  return (
    <article className="relative overflow-hidden rounded-card border-2 border-secondary bg-surface p-8 shadow-card">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary/15">
          <Icon name="Phone" size="xl" className="text-secondary" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            <span className="text-body-sm font-semibold uppercase tracking-wider text-success">
              Available now · Mon–Fri, 9am–5pm PT
            </span>
          </div>
          <h3 className="mt-2 font-display text-heading-lg font-bold text-foreground">
            {method.title}
          </h3>
          <p className="mt-2 text-body text-muted leading-relaxed">
            Real people. Real answers. Not a phone tree. Speak directly with a
            privacy formation specialist — no gatekeeping, no sales pressure.
          </p>
        </div>

        {method.action && (
          <a
            href={method.action.href}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-4 font-display text-heading-sm font-bold text-white shadow-lg transition-colors hover:bg-secondary/90"
          >
            <Icon name="Phone" size="md" />
            {method.action.label}
          </a>
        )}
      </div>
    </article>
  );
}

/* -------------------------------------------------- */
/*  Standard Card                                      */
/* -------------------------------------------------- */
function StandardMethodCard({ method }: { method: ContactMethod }) {
  return (
    <article className="flex flex-col rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-card-hover">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
        <Icon name={method.icon} size="lg" className="text-secondary" />
      </div>

      <h3 className="font-display text-heading-sm font-semibold text-foreground">
        {method.title}
      </h3>

      <p className="mt-2 flex-1 text-body leading-relaxed text-muted">
        {method.description}
      </p>

      {method.action && (
        <div className="mt-4">
          <a
            href={method.action.href}
            className="inline-flex items-center gap-1.5 text-body font-medium text-secondary hover:underline"
          >
            {method.action.label}
            <Icon
              name={method.type === "email" ? "ArrowRight" : "ArrowDown"}
              size="sm"
            />
          </a>
        </div>
      )}
    </article>
  );
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function ContactMethodCards({
  methods,
  featurePhone = false,
  className,
}: ContactMethodCardsProps) {
  const phoneMethod = methods.find((m) => m.type === "phone");
  const otherMethods = methods.filter((m) => m.type !== "phone");

  if (featurePhone && phoneMethod) {
    return (
      <section className={cn("py-section-y px-container-x", className)}>
        <div className="mx-auto max-w-content space-y-6">
          <PhoneHeroCard method={phoneMethod} />
          {otherMethods.length > 0 && (
            <div
              className={cn(
                "grid gap-6",
                otherMethods.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2",
              )}
            >
              {otherMethods.map((method) => (
                <StandardMethodCard key={method.type} method={method} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {methods.map((method) => (
            <StandardMethodCard key={method.type} method={method} />
          ))}
        </div>
      </div>
    </section>
  );
}

ContactMethodCards.displayName = "ContactMethodCards";

export { ContactMethodCards };
