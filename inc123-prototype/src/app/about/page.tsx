import {
  AboutHero,
  FounderBio,
  Timeline,
  PhilosophyCards,
  StatsStrip,
  OfficeSection,
  CTABlock,
} from "@/design-system/components";
import { aboutData } from "@/data/about";

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
