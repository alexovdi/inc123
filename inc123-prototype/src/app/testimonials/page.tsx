"use client";

import { useEffect, useMemo, useState } from "react";
import { testimonials } from "@/data/testimonials";
import type { Testimonial, TestimonialCategory } from "@/lib/types";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { CTABlock } from "@/design-system/components/CTABlock";
import {
  CategoryFilterPills,
  type CategoryFilterItem,
} from "@/design-system/components/CategoryFilterPills";
import { StatsStrip } from "@/design-system/components/StatsStrip";
import { Icon } from "@/design-system/primitives/Icon";
import { cn } from "@/design-system/utils/cn";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "1000s", label: "Clients Served" },
  { value: "5-Star", label: "Average Rating" },
  { value: "4", label: "States Served" },
];

const CATEGORY_LABELS: Record<TestimonialCategory, string> = {
  privacy: "Privacy / Nominees",
  asset: "Asset Protection",
  formation: "Formation",
  compliance: "Compliance",
  offshore: "Offshore",
};

const CATEGORY_ORDER: TestimonialCategory[] = [
  "privacy",
  "asset",
  "formation",
  "compliance",
  "offshore",
];

/* ------------------------------------------------
   Schema — Review + AggregateRating
   ------------------------------------------------ */
function TestimonialsSchema() {
  const averageRating =
    testimonials.reduce((sum, t) => sum + (t.rating ?? 5), 0) /
    testimonials.length;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Incorporate123",
    url: "https://incorporate123.com/",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating ?? 5,
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      itemReviewed: {
        "@type": "Service",
        name: t.serviceUsed,
      },
    })),
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
        name: "Testimonials",
        item: "https://incorporate123.com/testimonials",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

/* ------------------------------------------------
   Star Rating
   ------------------------------------------------ */
function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="Star"
          size="sm"
          className={i < rating ? "text-accent fill-accent" : "text-border"}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------
   Testimonial Card
   ------------------------------------------------ */
function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  const t = testimonial;
  return (
    <article
      className={cn(
        "flex flex-col rounded-card border bg-surface p-6 transition-shadow hover:shadow-card-hover",
        featured ? "border-2 border-accent/40 shadow-card" : "border-border",
      )}
    >
      <div className="flex items-center justify-between">
        {t.rating && <StarRating rating={t.rating} />}
        {t.category && (
          <span className="inline-flex items-center rounded-full bg-muted/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
            {CATEGORY_LABELS[t.category]}
          </span>
        )}
      </div>

      <blockquote className="mt-4 flex-1 text-body italic leading-relaxed text-foreground/90">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="mt-6 border-t border-border pt-4">
        <p className="text-body-sm font-semibold text-foreground">{t.name}</p>
        <p className="text-caption text-muted">
          {t.businessType} &middot; {t.state}
        </p>
        <p className="text-caption text-muted mt-0.5">
          Service: {t.serviceUsed}
          {t.clientSince && ` · Client since ${t.clientSince}`}
        </p>
      </div>
    </article>
  );
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<
    TestimonialCategory | "all"
  >("all");

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Client Testimonials — Privacy & Formation Reviews | Incorporate123";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const featured = useMemo(() => testimonials.filter((t) => t.featured), []);
  const allOther = useMemo(() => testimonials.filter((t) => !t.featured), []);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return allOther;
    return allOther.filter((t) => t.category === activeCategory);
  }, [activeCategory, allOther]);

  const categoryPills: CategoryFilterItem[] = useMemo(() => {
    const pills: CategoryFilterItem[] = [
      { value: "all", label: "All", count: allOther.length },
    ];
    for (const cat of CATEGORY_ORDER) {
      const count = allOther.filter((t) => t.category === cat).length;
      if (count === 0) continue;
      pills.push({
        value: cat,
        label: CATEGORY_LABELS[cat],
        pillar:
          cat === "offshore" || cat === "compliance"
            ? cat === "compliance"
              ? "compliance"
              : undefined
            : (cat as "privacy" | "asset" | "formation"),
        count,
      });
    }
    return pills;
  }, [allOther]);

  return (
    <div className="space-y-0">
      <TestimonialsSchema />

      {/* Breadcrumb + Hero */}
      <section className="bg-primary py-section-y px-container-x text-white">
        <div className="mx-auto max-w-content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Testimonials", href: "/testimonials" },
            ]}
            className="mb-4 [&_a]:text-white/70 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
          />
          <div className="text-center">
            <h1 className="font-display text-display font-bold">
              What Our Clients Say
            </h1>
            <p className="mx-auto mt-4 max-w-narrow text-body-lg text-white/80">
              25 years of trusted service. Hear directly from the business
              owners, investors, and entrepreneurs who chose Incorporate123.
            </p>

            {/* Anonymization message */}
            <aside className="mx-auto mt-6 inline-flex max-w-narrow items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-5 py-3">
              <Icon name="Lock" size="md" className="text-white shrink-0" />
              <p className="text-body-sm text-white/90 text-left">
                Client names are withheld at their request &mdash; because
                privacy is what we do.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featured.length > 0 && (
        <section className="py-section-y px-container-x bg-background">
          <div className="mx-auto max-w-content">
            <div className="text-center mb-10">
              <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-accent mb-2">
                Featured
              </p>
              <h2 className="font-display text-heading-lg font-bold text-foreground">
                Voices From Our Clients
              </h2>
              <p className="mt-2 text-body text-muted">
                A handful of the stories clients have allowed us to share.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter + Testimonial Grid */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="text-center mb-8">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              Browse All Testimonials
            </h2>
            <p className="mt-2 text-body text-muted">
              Filter by service category to find stories relevant to your
              situation.
            </p>
          </div>

          <div className="mb-8">
            <CategoryFilterPills
              categories={categoryPills}
              activeCategory={activeCategory}
              onChange={(v) =>
                setActiveCategory(v as TestimonialCategory | "all")
              }
            />
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-card border border-border bg-surface p-8 text-center">
              <p className="text-body-lg font-medium text-foreground">
                No testimonials in this category yet.
              </p>
              <p className="mt-2 text-body text-muted">
                Try a different category or view all testimonials.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trustpilot Widget Placeholder (post-launch) */}
      <section className="bg-background py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="rounded-card border-2 border-dashed border-border bg-surface p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <Icon name="Star" size="lg" className="text-success" />
            </div>
            <h3 className="font-display text-heading-sm font-semibold text-foreground">
              Trustpilot Reviews &mdash; Coming Post-Launch
            </h3>
            <p className="mx-auto mt-2 max-w-narrow text-body text-muted">
              We&rsquo;re building a Trustpilot review program post-launch. Once
              active, live reviews from verified clients will appear here.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip stats={stats} />

      {/* CTA Block */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <CTABlock
            variant="dark"
            heading="Ready to Join Our Clients?"
            description="Start your privacy-first business formation today. All-inclusive packages with no hidden fees."
            primaryCTA={{
              label: "View Packages",
              href: "/compare-packages",
            }}
            secondaryCTA={{
              label: "Contact Us",
              href: "/contact",
            }}
            trustSignal="Trusted by thousands of business owners since 2000"
          />
        </div>
      </section>
    </div>
  );
}
