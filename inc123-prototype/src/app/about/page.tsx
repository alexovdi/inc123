import { useEffect } from "react";
import { AboutHero } from "@/design-system/components/AboutHero";
import { AboutStory } from "@/design-system/components/AboutStory";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { CTABlock } from "@/design-system/components/CTABlock";
import { DifferentiatorsSummary } from "@/design-system/components/DifferentiatorsSummary";
import { FounderBio } from "@/design-system/components/FounderBio";
import { OfficeSection } from "@/design-system/components/OfficeSection";
import { PhilosophyCards } from "@/design-system/components/PhilosophyCards";
import { StatsStrip } from "@/design-system/components/StatsStrip";
import { Timeline } from "@/design-system/components/Timeline";
import { aboutData } from "@/data/about";

function AboutSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Incorporate123",
    url: "https://incorporate123.com/",
    foundingDate: "2000",
    description:
      "Privacy, asset protection, and business formation specialists since 2000. Wyoming and Nevada formation, nominee services, and all-inclusive packages.",
    telephone: "+1-800-553-0615",
    email: "info@incorporate123.com",
  };
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Incorporate123",
    url: "https://incorporate123.com/",
    telephone: "+1-800-553-0615",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Reno",
      addressRegion: "NV",
      addressCountry: "US",
    },
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David",
    jobTitle: "Privacy Formation Specialist",
    worksFor: { "@type": "Organization", name: "Incorporate123" },
    knowsAbout: [
      "Business Privacy",
      "Asset Protection",
      "Business Formation",
      "Wyoming LLC",
      "Nevada LLC",
      "Nominee Services",
    ],
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://incorporate123.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://incorporate123.com/about",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

export default function AboutPage() {
  const {
    hero,
    story,
    founder,
    timeline,
    philosophy,
    stats,
    differentiators,
    office,
  } = aboutData;

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "About Incorporate123 — 25 Years of Privacy & Formation Expertise";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="space-y-0">
      <AboutSchema />

      {/* Breadcrumb */}
      <div className="bg-primary-50 px-container-x pt-6">
        <div className="mx-auto max-w-content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          />
        </div>
      </div>

      {/* 1. About Hero */}
      <AboutHero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />

      {/* 2. The Story */}
      {story && (
        <AboutStory heading={story.heading} paragraphs={story.paragraphs} />
      )}

      {/* 3. Founder / Team */}
      <FounderBio
        name={founder.name}
        title={founder.title}
        location={founder.location}
        bio={founder.bio}
        trustTags={founder.trustTags}
      />

      {/* 4. Timeline */}
      <Timeline milestones={timeline} className="bg-background" />

      {/* 5. What We Believe — 4 Philosophy Cards */}
      <PhilosophyCards cards={philosophy} />

      {/* 6. By the Numbers */}
      <StatsStrip stats={stats} />

      {/* 7. Differentiators Summary */}
      {differentiators && <DifferentiatorsSummary items={differentiators} />}

      {/* 8. Office — minimal per brand rule, no street address, no map */}
      <OfficeSection
        address={office.address}
        phone={office.phone}
        email={office.email}
        hours={office.hours}
      />

      {/* 9. CTA Block */}
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
            trustSignal="1-800-553-0615 — Call anytime"
          />
        </div>
      </section>
    </div>
  );
}
