import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { FadeUp } from "@/components/animation/FadeUp";

/* ═══════════════════════════════════════════════════════════════════════════
   CTABand — Full-width dark CTA strip with headline, description, and actions
   ═══════════════════════════════════════════════════════════════════════════ */

interface CTABandProps {
  headline: string;
  description?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTABand({
  headline,
  description,
  primaryCTA,
  secondaryCTA,
}: CTABandProps) {
  return (
    <Section variant="dark">
      <FadeUp>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight text-[var(--color-text-on-dark)]">
            {headline}
          </h2>
          {description && (
            <p className="mt-4 text-[var(--color-text-on-dark-muted)]">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
            </Button>
            {secondaryCTA && (
              <Button variant="dark" size="lg" asChild>
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

CTABand.displayName = "CTABand";
