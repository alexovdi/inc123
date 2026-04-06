import { testimonials } from "@/data/testimonials";
import { CTABlock } from "@/design-system/components/CTABlock";
import { StatsStrip } from "@/design-system/components/StatsStrip";
import { Icon } from "@/design-system/primitives/Icon";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "1000s", label: "Clients Served" },
  { value: "5-Star", label: "Average Rating" },
  { value: "4", label: "States Served" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
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

export default function TestimonialsPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-primary text-white py-section-y px-container-x">
        <div className="mx-auto max-w-content text-center">
          <h1 className="font-display text-display font-bold">
            What Our Clients Say
          </h1>
          <p className="mt-4 text-body-lg text-white/80 max-w-narrow mx-auto">
            25 years of trusted service. Hear directly from the business owners,
            investors, and entrepreneurs who chose Incorporate123.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip stats={stats} />

      {/* Testimonial Grid */}
      <section className="py-section-y px-container-x bg-background">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex flex-col bg-surface rounded-card border border-border p-6 transition-shadow hover:shadow-card-hover"
              >
                {/* Rating */}
                {t.rating && <StarRating rating={t.rating} />}

                {/* Quote */}
                <blockquote className="mt-4 flex-1 text-body italic text-foreground/90 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-semibold text-body-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-caption text-muted">
                    {t.businessType} &middot; {t.state}
                  </p>
                  <p className="text-caption text-muted mt-0.5">
                    Service: {t.serviceUsed}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
            trustSignal="Trusted by 1000s of business owners since 1999"
          />
        </div>
      </section>
    </div>
  );
}
