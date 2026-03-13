import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives";
import { ClipboardCheck } from "lucide-react";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ComplianceCalloutProps {
  /** Section headline */
  headline: string;
  /** Supporting description paragraph */
  description: string;
  /** Call-to-action button */
  cta: { label: string; href: string };
  /** Override the default "Client Login" secondary CTA */
  secondaryCTA?: { label: string; href: string };
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ComplianceCallout({
  headline,
  description,
  cta,
  secondaryCTA,
  className,
}: ComplianceCalloutProps) {
  return (
    <section
      className={cn(
        "rounded-card bg-pillar-compliance-soft border border-pillar-compliance-mid/30 p-8 sm:p-10 lg:p-12",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Text content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-card bg-pillar-compliance/10">
              <ClipboardCheck
                className="h-5 w-5 text-pillar-compliance"
                aria-hidden="true"
              />
            </div>
            <span className="text-body-sm font-semibold text-pillar-compliance uppercase tracking-wide">
              Compliance
            </span>
          </div>

          <h2 className="font-display text-heading-lg font-bold text-foreground">
            {headline}
          </h2>

          <p className="mt-3 text-body-lg text-muted max-w-narrow">
            {description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" pillar="compliance" size="lg" asChild>
              <a href={cta.href}>{cta.label}</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href={secondaryCTA?.href ?? "/login"}>
                {secondaryCTA?.label ?? "Client Login"}
              </a>
            </Button>
          </div>
        </div>

        {/* Right icon area — decorative */}
        <div
          className="hidden lg:flex lg:basis-1/4 items-center justify-center"
          aria-hidden="true"
        >
          <ClipboardCheck className="h-32 w-32 text-pillar-compliance/20" />
        </div>
      </div>
    </section>
  );
}

ComplianceCallout.displayName = "ComplianceCallout";

export { ComplianceCallout };
