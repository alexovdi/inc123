import type { Metadata } from "next";
import { AboutHero } from "@/design-system/components/AboutHero";
import { CTABlock } from "@/design-system/components/CTABlock";
import { FounderBio } from "@/design-system/components/FounderBio";
import { OfficeSection } from "@/design-system/components/OfficeSection";
import { PhilosophyCards } from "@/design-system/components/PhilosophyCards";
import { StatsStrip } from "@/design-system/components/StatsStrip";
import { Timeline } from "@/design-system/components/Timeline";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title:
    "About Incorporate123 — 25 Years of Business Formation Expertise | Incorporate123",
  description:
    "Founded in 2000, Incorporate123 is a Reno, NV-based business formation company specializing in privacy-focused LLCs, nominee services, and asset protection across Wyoming, Nevada, California, and Florida.",
  alternates: { canonical: "https://incorporate123.co/about" },
};

export default function AboutPage() {
  const { hero, founder, timeline, philosophy, stats, office } = aboutData;

  return (
    <div className="space-y-0">
      {/* 1. About Hero */}
      <AboutHero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />

      {/* 2. Founder Bio */}
      <FounderBio
        name={founder.name}
        title={founder.title}
        location={founder.location}
        bio={founder.bio}
        trustTags={founder.trustTags}
      />

      {/* 3. Timeline */}
      <Timeline milestones={timeline} className="bg-background" />

      {/* 4. Philosophy Cards */}
      <PhilosophyCards cards={philosophy} />

      {/* 5. Stats Strip */}
      <StatsStrip stats={stats} />

      {/* 6. Office Section */}
      <OfficeSection
        address={office.address}
        phone={office.phone}
        email={office.email}
        hours={office.hours}
        showMap
      />

      {/* 7. CTA Block */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <CTABlock
            variant="dark"
            heading="Ready to Work with Us?"
            description="25 years of privacy expertise. All-inclusive packages. Real people who answer the phone."
            primaryCTA={{
              label: "View Packages & Pricing",
              href: "/compare-packages",
            }}
            secondaryCTA={{
              label: "Contact Us",
              href: "/contact",
            }}
            trustSignal="(775) 313-4155 — Call anytime"
          />
        </div>
      </section>
    </div>
  );
}
