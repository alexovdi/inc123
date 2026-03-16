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
  /** Use dark bg variant (full-width dark treatment) */
  variant?: "default" | "dark";
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
  variant = "default",
  className,
}: ComplianceCalloutProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "p-8 sm:p-10 lg:p-12",
        isDark
          ? "bg-primary"
          : "rounded-card bg-pillar-compliance-soft border border-pillar-compliance-mid/30",
        className,
      )}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Text content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-card",
                isDark ? "bg-white/10" : "bg-pillar-compliance/10",
              )}
            >
              <ClipboardCheck
                className={cn(
                  "h-5 w-5",
                  isDark ? "text-white/80" : "text-pillar-compliance",
                )}
                aria-hidden="true"
              />
            </div>
            <span
              className={cn(
                "text-body-sm font-semibold uppercase tracking-[0.15em]",
                isDark ? "text-white/60" : "text-pillar-compliance",
              )}
            >
              Compliance
            </span>
          </div>

          <h2
            className={cn(
              "font-display text-heading-lg font-bold",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            {headline}
          </h2>

          <p
            className={cn(
              "mt-3 text-body-lg max-w-narrow",
              isDark ? "text-white/70" : "text-muted",
            )}
          >
            {description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {isDark ? (
              <Button variant="cta" size="lg" asChild>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            ) : (
              <Button variant="primary" pillar="compliance" size="lg" asChild>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            )}
            <Button
              variant="ghost"
              size="lg"
              asChild
              className={
                isDark
                  ? "text-white/70 hover:text-white hover:bg-white/10"
                  : undefined
              }
            >
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
          <ClipboardCheck
            className={cn(
              "h-32 w-32",
              isDark ? "text-white/20" : "text-pillar-compliance/20",
            )}
          />
        </div>
      </div>
    </section>
  );
}

ComplianceCallout.displayName = "ComplianceCallout";

export { ComplianceCallout };
