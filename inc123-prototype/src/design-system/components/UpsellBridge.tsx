import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { Button } from "@/design-system/primitives/Button";
import { Link } from "@/design-system/primitives/Link";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
interface UpsellBridgeProps {
  /** Eyebrow label */
  eyebrow: string;
  /** Main headline */
  heading: string;
  /** Supporting copy */
  description: string;
  /** Social proof stat (e.g. "70%") */
  stat?: string;
  /** Stat label */
  statLabel?: string;
  /** CTA button text */
  ctaLabel: string;
  /** CTA link target */
  ctaHref: string;
  /** Pillar color for accents */
  pillarColor?: string;
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function UpsellBridge({
  eyebrow,
  heading,
  description,
  stat,
  statLabel,
  ctaLabel,
  ctaHref,
  pillarColor = "text-secondary",
  className,
}: UpsellBridgeProps) {
  return (
    <section
      className={cn(
        "py-section-y-sm bg-primary-50 border-y border-border/50",
        className,
      )}
    >
      <div className="mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:items-center">
            {/* Left: Content */}
            <div>
              <p
                className={cn(
                  "text-body-sm font-semibold uppercase tracking-[0.15em] mb-3",
                  pillarColor,
                )}
              >
                {eyebrow}
              </p>
              <h2 className="font-display type-display-sm font-semibold text-foreground max-w-[32ch]">
                {heading}
              </h2>
              <p className="mt-3 text-body text-muted max-w-[520px] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Right: Stat + CTA */}
            <div className="flex flex-col items-start lg:items-center gap-5">
              {stat && (
                <div className="text-center">
                  <p
                    className={cn(
                      "font-display text-[3rem] font-bold leading-none",
                      pillarColor,
                    )}
                  >
                    {stat}
                  </p>
                  {statLabel && (
                    <p className="mt-1 text-body-sm text-muted max-w-[160px]">
                      {statLabel}
                    </p>
                  )}
                </div>
              )}
              <Link href={ctaHref} className="!no-underline">
                <Button variant="cta" size="md">
                  {ctaLabel}
                  <Icon name="ArrowRight" size="sm" className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

UpsellBridge.displayName = "UpsellBridge";

export { UpsellBridge };
export type { UpsellBridgeProps };
