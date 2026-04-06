import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface FAQHeroProps {
  /** H1 headline */
  headline?: string;
  /** Descriptive subheadline */
  subheadline?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component (Server)
   ------------------------------------------------ */
function FAQHero({
  headline = "Frequently Asked Questions",
  subheadline = "Answers to common questions about business privacy, asset protection, LLC formation, compliance, and our services. Can\u2019t find what you\u2019re looking for? Call us at 1-800-553-0615.",
  className,
}: FAQHeroProps) {
  return (
    <section
      className={cn(
        "bg-primary-50 py-section-y px-container-x text-center",
        className
      )}
    >
      <div className="mx-auto max-w-narrow">
        <p className="text-body-sm font-medium uppercase tracking-wider text-muted mb-3">
          Resources
        </p>
        <h1 className="font-display text-display font-bold text-foreground">
          {headline}
        </h1>
        <p className="mt-4 text-body-lg text-muted">
          {subheadline}
        </p>
      </div>
    </section>
  );
}

FAQHero.displayName = "FAQHero";

export { FAQHero };
