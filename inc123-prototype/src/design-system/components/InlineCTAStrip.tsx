import { Link as RouterLink } from "react-router-dom";

import { cn } from "@/design-system/utils/cn";
import { pillarTextMap } from "@/design-system/utils/pillarMaps";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface InlineCTAStripProps {
  /** Pillar for eyebrow accent color */
  pillar?: PillarName;
  /** Short eyebrow label above the heading */
  eyebrow?: string;
  /** Main heading — short, direct */
  heading: string;
  /** Supporting description */
  description?: string;
  /** Primary CTA — usually the package anchor */
  primaryCTA: { label: string; href: string };
  /** Optional secondary CTA — usually the consultation route */
  secondaryCTA?: { label: string; href: string };
  /** Optional phone number for tap-to-call */
  phone?: string;
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function InlineCTAStrip({
  pillar,
  eyebrow = "Ready to Get Started?",
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  phone,
  className,
}: InlineCTAStripProps) {
  return (
    <section
      className={cn(
        "py-section-y-sm bg-primary-50 border-y border-border",
        className,
      )}
    >
      <div className="mx-auto max-w-content px-container-x">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left: Copy */}
          <div>
            <p
              className={cn(
                "text-body-sm font-semibold uppercase tracking-[0.15em] mb-3",
                pillar ? pillarTextMap[pillar] : "text-secondary",
              )}
            >
              {eyebrow}
            </p>
            <h2 className="font-display text-heading font-semibold text-foreground leading-tight">
              {heading}
            </h2>
            {description && (
              <p className="mt-3 text-body text-muted max-w-[560px]">
                {description}
              </p>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col gap-3">
            <RouterLink to={primaryCTA.href} className="no-underline">
              <Button variant="cta" size="lg" className="w-full justify-center">
                {primaryCTA.label}
                <Icon name="ArrowRight" size="sm" className="ml-2" />
              </Button>
            </RouterLink>
            {secondaryCTA && (
              <RouterLink to={secondaryCTA.href} className="no-underline">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                >
                  {secondaryCTA.label}
                </Button>
              </RouterLink>
            )}
            {phone && (
              <p className="text-center text-body-sm text-muted">
                Or call{" "}
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="font-medium text-foreground hover:text-secondary transition-colors"
                >
                  {phone}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

InlineCTAStrip.displayName = "InlineCTAStrip";

export { InlineCTAStrip };
