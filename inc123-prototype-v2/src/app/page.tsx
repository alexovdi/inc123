import { Section } from "@/components/layout";
import { FadeUp } from "@/components/animation/FadeUp";
import { HomepageHero } from "@/components/heroes/HomepageHero";
import { PackageWizard } from "@/components/conversion/PackageWizard";
import { PillarCards } from "@/components/cards/PillarCards";
import { Differentiators } from "@/components/content/Differentiators";
import { HowItWorks } from "@/components/content/HowItWorks";
import { PackagesPreview } from "@/components/conversion/PackagesPreview";
import { TestimonialsSection } from "@/components/content/TestimonialsSection";
import { ComplianceCallout } from "@/components/content/ComplianceCallout";
import { CTABand } from "@/components/conversion/CTABand";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — dark */}
      <HomepageHero />

      {/* 2. PACKAGE WIZARD — cream-alt */}
      <Section variant="cream-alt" id="wizard">
        <FadeUp>
          <div className="mx-auto max-w-3xl">
            <PackageWizard />
          </div>
        </FadeUp>
      </Section>

      {/* 3. PILLAR CARDS — cream */}
      <Section variant="cream">
        <PillarCards />
      </Section>

      {/* 4. DIFFERENTIATORS — dark */}
      <Section variant="dark">
        <Differentiators />
      </Section>

      {/* 5. HOW IT WORKS — cream-alt */}
      <Section variant="cream-alt">
        <HowItWorks />
      </Section>

      {/* 6. PACKAGES PREVIEW — cream */}
      <Section variant="cream">
        <PackagesPreview />
      </Section>

      {/* 7. TESTIMONIALS — dark */}
      <Section variant="dark">
        <TestimonialsSection />
      </Section>

      {/* 8. COMPLIANCE CALLOUT — cream-alt */}
      <Section variant="cream-alt">
        <ComplianceCallout />
      </Section>

      {/* 9. FINAL CTA — dark */}
      <CTABand
        headline="Ready to Protect Your Privacy?"
        description="Formation typically completes in 3-7 business days. The sooner you file, the sooner your protection is active."
        primaryCTA={{ label: "View Packages", href: "/packages" }}
        secondaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
      />
    </>
  );
}
