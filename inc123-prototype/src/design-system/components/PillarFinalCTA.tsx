import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { Link } from "@/design-system/primitives/Link";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
interface PillarFinalCTAProps {
  /** Main headline */
  heading: string;
  /** Supporting paragraph */
  description: string;
  /** Primary CTA button label */
  ctaLabel: string;
  /** Primary CTA href */
  ctaHref: string;
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PillarFinalCTA({
  heading,
  description,
  ctaLabel,
  ctaHref,
  className,
}: PillarFinalCTAProps) {
  return (
    <section
      className={cn("bg-primary border-t border-white/[0.06]", className)}
    >
      <div className="mx-auto max-w-content px-container-x py-section-y-sm">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:items-center">
            {/* Left: Statement */}
            <div>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-white leading-[1.15] tracking-tight">
                {heading}
              </h2>
              <p className="mt-4 text-body text-white/75 max-w-[440px]">
                {description}
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col gap-3">
              <Link href={ctaHref} className="!no-underline">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full justify-center"
                >
                  {ctaLabel}
                </Button>
              </Link>
              <Link href="/contact" className="!no-underline">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center border-white/20 text-white hover:bg-white/10"
                >
                  Schedule a Consultation
                </Button>
              </Link>
              <p className="mt-1 text-center text-body-sm text-white/70">
                Or call{" "}
                <a
                  href="tel:1-800-553-0615"
                  className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
                >
                  1-800-553-0615
                </a>
                {" — real humans, real answers."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

PillarFinalCTA.displayName = "PillarFinalCTA";

export { PillarFinalCTA };
export type { PillarFinalCTAProps };
