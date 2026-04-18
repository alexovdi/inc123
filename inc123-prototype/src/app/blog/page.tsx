"use client";

import { useEffect, useMemo, useState } from "react";
import {
  blogPosts,
  blogCategoryLabels,
  blogCategoryOrder,
  type BlogCategory,
  type BlogPost,
} from "@/data/blog";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import {
  CategoryFilterPills,
  type CategoryFilterItem,
} from "@/design-system/components/CategoryFilterPills";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import {
  pillarTagMap,
  pillarTextMap,
  pillarBorderTopMap,
} from "@/design-system/utils/pillarMaps";
import { cn } from "@/design-system/utils/cn";

const POSTS_PER_PAGE = 9;

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* Tailwind classes for category badge — pillar map only covers 4 pillars */
const categoryBadgeClass: Record<BlogCategory, string> = {
  privacy: pillarTagMap.privacy,
  asset: pillarTagMap.asset,
  formation: pillarTagMap.formation,
  compliance: pillarTagMap.compliance,
  general: "bg-muted/10 text-muted",
};

/* ------------------------------------------------
   Blog Schema
   ------------------------------------------------ */
function BlogSchema() {
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Incorporate123 Blog",
    url: "https://incorporate123.com/blog",
    description:
      "Expert insights on business privacy, anonymous LLCs, asset protection, and Wyoming/Nevada formation.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
      description: post.excerpt,
      url: `https://incorporate123.com${post.href}`,
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
        name: "Blog",
        item: "https://incorporate123.com/blog",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

/* ------------------------------------------------
   Featured Post Card
   ------------------------------------------------ */
function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-card border border-border bg-surface shadow-card",
        "grid grid-cols-1 lg:grid-cols-2",
      )}
    >
      {/* Visual block — pillar color */}
      <div
        className={cn(
          "relative hidden min-h-[240px] items-center justify-center lg:flex",
          post.category === "general"
            ? "bg-muted/10"
            : `bg-pillar-${post.category}/10`,
        )}
      >
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs font-semibold shadow-sm">
            Featured
          </span>
          <div
            className={cn(
              "mt-4 font-display text-display font-bold",
              post.category === "general"
                ? "text-muted"
                : pillarTextMap[
                    post.category as
                      | "privacy"
                      | "asset"
                      | "formation"
                      | "compliance"
                  ],
            )}
          >
            {post.categoryLabel.split(" ")[0]}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-8 lg:p-10">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
              categoryBadgeClass[post.category],
            )}
          >
            {post.categoryLabel}
          </span>
          <span className="text-body-sm font-semibold uppercase tracking-[0.15em] text-accent">
            ★ Featured
          </span>
        </div>

        <h2 className="mt-4 font-display text-heading-lg font-bold text-foreground group-hover:text-secondary">
          <Link href={post.href} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 flex-1 text-body text-muted leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-4 text-body-sm text-muted">
          <span className="font-medium text-foreground">By {post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------
   Standard Post Card
   ------------------------------------------------ */
function PostCard({ post }: { post: BlogPost }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-card border border-border border-t-4 bg-surface p-6 transition-shadow hover:shadow-card-hover",
        post.category === "general"
          ? "border-t-muted"
          : pillarBorderTopMap[
              post.category as "privacy" | "asset" | "formation" | "compliance"
            ],
      )}
    >
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold",
          categoryBadgeClass[post.category],
        )}
      >
        {post.categoryLabel}
      </span>

      <h2 className="mt-3 font-display text-heading font-semibold text-foreground group-hover:text-secondary">
        <Link href={post.href} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h2>

      <p className="mt-2 flex-1 text-body text-muted leading-relaxed">
        {post.excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-body-sm text-muted">
        <span className="font-medium text-foreground">By {post.author}</span>
        <span>{post.readTime}</span>
      </div>
      <time className="mt-1 text-xs text-muted" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
    </article>
  );
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all",
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Blog — Privacy, LLC Formation & Asset Protection Guides | Incorporate123";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Separate featured post from the rest
  const featuredPost = useMemo(
    () => blogPosts.find((p) => p.featured) ?? blogPosts[0],
    [],
  );
  const otherPosts = useMemo(
    () => blogPosts.filter((p) => p.slug !== featuredPost.slug),
    [featuredPost],
  );

  // Filter by category
  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return otherPosts;
    return otherPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory, otherPosts]);

  // Paginate
  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Build filter pills with counts
  const categoryPills: CategoryFilterItem[] = useMemo(() => {
    const pills: CategoryFilterItem[] = [
      { value: "all", label: "All Posts", count: otherPosts.length },
    ];
    for (const cat of blogCategoryOrder) {
      const count = otherPosts.filter((p) => p.category === cat).length;
      pills.push({
        value: cat,
        label: blogCategoryLabels[cat],
        pillar: cat === "general" ? undefined : cat,
        count,
      });
    }
    return pills;
  }, [otherPosts]);

  return (
    <>
      <BlogSchema />

      {/* Breadcrumb + Hero */}
      <section className="bg-primary py-section-y px-container-x text-white">
        <div className="mx-auto max-w-content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
            className="mb-4 [&_a]:text-white/70 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
          />
          <div className="max-w-narrow">
            <h1 className="font-display text-display font-bold">
              Blog — Privacy, Formation &amp; Asset Protection Insights
            </h1>
            <p className="mt-4 text-body-lg text-white/80">
              Expert analysis from 25 years of specialization. Practical guides
              on business privacy, anonymous LLCs, asset protection, and
              Wyoming/Nevada formation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <FeaturedPostCard post={featuredPost} />
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background px-container-x pb-6">
        <div className="mx-auto max-w-content">
          <CategoryFilterPills
            categories={categoryPills}
            activeCategory={activeCategory}
            onChange={(v) => setActiveCategory(v as BlogCategory | "all")}
          />
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-background pb-section-y px-container-x">
        <div className="mx-auto max-w-content">
          {paginatedPosts.length === 0 ? (
            <div className="rounded-card border border-border bg-surface p-8 text-center">
              <p className="text-body-lg font-medium text-foreground">
                No posts in this category yet.
              </p>
              <p className="mt-2 text-body text-muted">
                New articles publish monthly. Try a different category.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-10 flex items-center justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-4 py-2 text-body-sm font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-40 hover:bg-muted/10"
              >
                <Icon name="ChevronLeft" size="sm" />
                Previous
              </button>
              <span className="px-4 text-body-sm text-muted">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-4 py-2 text-body-sm font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-40 hover:bg-muted/10"
              >
                Next
                <Icon name="ChevronRight" size="sm" />
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Pillar Links — "Start here" */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="text-center mb-8">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              Start Here
            </h2>
            <p className="mt-2 text-body text-muted">
              New to Incorporate123? These core topic pages are the fastest way
              to get oriented.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <Link
                href="/privacy"
                className="!no-underline flex h-full flex-col rounded-card border border-border border-t-4 border-t-pillar-privacy bg-surface p-5 hover:shadow-card-hover"
              >
                <span className="font-display font-semibold text-foreground no-underline">
                  Business Privacy
                </span>
                <span className="mt-1 text-body-sm text-muted no-underline">
                  Anonymous LLCs and nominee services
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/asset-protection"
                className="!no-underline flex h-full flex-col rounded-card border border-border border-t-4 border-t-pillar-asset bg-surface p-5 hover:shadow-card-hover"
              >
                <span className="font-display font-semibold text-foreground">
                  Asset Protection
                </span>
                <span className="mt-1 text-body-sm text-muted">
                  Charging orders and LLC structuring
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/formation"
                className="!no-underline flex h-full flex-col rounded-card border border-border border-t-4 border-t-pillar-formation bg-surface p-5 hover:shadow-card-hover"
              >
                <span className="font-display font-semibold text-foreground">
                  Company Formation
                </span>
                <span className="mt-1 text-body-sm text-muted">
                  Wyoming and Nevada LLC formation
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/compliance"
                className="!no-underline flex h-full flex-col rounded-card border border-border border-t-4 border-t-pillar-compliance bg-surface p-5 hover:shadow-card-hover"
              >
                <span className="font-display font-semibold text-foreground">
                  Compliance
                </span>
                <span className="mt-1 text-body-sm text-muted">
                  Registered agent and annual reports
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
