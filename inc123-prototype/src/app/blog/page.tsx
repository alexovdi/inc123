import { blogPosts } from "@/data/blog";
import { pillarTagMap } from "@/design-system/utils/pillarMaps";
import { CTABlock } from "@/design-system/components/CTABlock";
import { Link } from "@/design-system/primitives/Link";

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-section-y px-container-x text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-display font-bold text-white">
            Insights &amp; Guides
          </h1>
          <p className="mt-4 text-body-lg text-white/80">
            Expert analysis on business privacy, asset protection, and entity
            formation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                {/* Category badge */}
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${pillarTagMap[post.category]}`}
                >
                  {post.categoryLabel}
                </span>

                {/* Title */}
                <h2 className="mt-3 font-display text-heading font-semibold text-foreground group-hover:text-secondary transition-colors">
                  <Link
                    href={post.href}
                    className="after:absolute after:inset-0"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="mt-2 flex-1 text-body text-muted leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta row */}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-body-sm text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.readTime}</span>
                </div>

                {/* Read more link */}
                <div className="relative z-10 mt-3">
                  <Link
                    href={post.href}
                    className="inline-flex items-center text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Read more
                    <span className="ml-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABlock
        heading="Ready to Get Started?"
        description="Our most popular package includes anonymous LLC formation, year-round nominee services, and charging order protection — all for one transparent price."
        primaryCTA={{
          label: "View Wyoming Gold LLC — $1,275",
          href: "/wyoming-gold",
        }}
        secondaryCTA={{
          label: "Compare All Packages",
          href: "/packages",
        }}
        trustSignal="25+ Years of Experience · Privacy Specialists"
      />
    </>
  );
}
