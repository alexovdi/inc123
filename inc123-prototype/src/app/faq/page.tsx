"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { CategoryFilterPills } from "@/design-system/components/CategoryFilterPills";
import type { CategoryFilterItem } from "@/design-system/components/CategoryFilterPills";
import { FAQHero } from "@/design-system/components/FAQHero";
import {
  FAQCategoryGrid,
  type FAQCategoryCardItem,
} from "@/design-system/components/FAQCategoryGrid";
import { PillarLinkCard } from "@/design-system/components/PillarLinkCard";
import { RelatedGuides } from "@/design-system/components/RelatedGuides";
import { SearchInput } from "@/design-system/components/SearchInput";
import {
  faqItems,
  type FAQCategory,
  categoryDisplayLabels,
  categoryOrder,
  categoryPillarMap,
  categoryBorderBottomColors,
  relatedGuidesMap,
} from "@/data/faq";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Page component
   ------------------------------------------------ */
export default function FAQPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("all");

  // Keep search in sync if the URL query changes (e.g., redirected from 404 page)
  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setSearchQuery(q);
  }, [searchParams]);

  // Memoize grouped FAQs by category
  const faqsByCategory = useMemo(() => {
    const grouped: Record<FAQCategory, typeof faqItems> = {
      privacy: [],
      asset: [],
      formation: [],
      compliance: [],
      packages: [],
      general: [],
    };
    for (const item of faqItems) {
      grouped[item.category as FAQCategory]?.push(item);
    }
    return grouped;
  }, []);

  // Filter FAQs based on search + category
  const filteredFaqs = useMemo(() => {
    let items = faqItems;

    // Category filter
    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query),
      );
    }

    return items;
  }, [searchQuery, activeCategory]);

  // Group filtered FAQs by category for display
  const filteredByCategory = useMemo(() => {
    const grouped: Record<FAQCategory, typeof faqItems> = {
      privacy: [],
      asset: [],
      formation: [],
      compliance: [],
      packages: [],
      general: [],
    };
    for (const item of filteredFaqs) {
      grouped[item.category as FAQCategory]?.push(item);
    }
    return grouped;
  }, [filteredFaqs]);

  // Build category filter pills
  const categoryPills: CategoryFilterItem[] = useMemo(() => {
    const allCount = searchQuery.trim() ? filteredFaqs.length : faqItems.length;

    const pills: CategoryFilterItem[] = [
      { value: "all", label: "All", count: allCount },
    ];

    for (const cat of categoryOrder) {
      // Count items for this category that match search
      const count = searchQuery.trim()
        ? filteredByCategory[cat].length
        : faqsByCategory[cat].length;

      pills.push({
        value: cat,
        label: categoryDisplayLabels[cat],
        pillar: categoryPillarMap[cat],
        count,
      });
    }

    return pills;
  }, [searchQuery, filteredFaqs, filteredByCategory, faqsByCategory]);

  // Categories to display (with content)
  const visibleCategories = categoryOrder.filter(
    (cat) => filteredByCategory[cat].length > 0,
  );

  const handleSearch = useCallback((term: string) => {
    setSearchQuery(term);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setActiveCategory(value);
  }, []);

  // Whether the user is actively searching
  const isSearching = searchQuery.trim().length > 0;

  // Active category display label for search context
  const activeCategoryLabel =
    activeCategory !== "all"
      ? categoryDisplayLabels[activeCategory as FAQCategory]
      : undefined;

  // Result count text for display above accordion sections
  const resultCountText = useMemo(() => {
    if (!isSearching && activeCategory === "all") return null;

    const total =
      activeCategory !== "all"
        ? (faqsByCategory[activeCategory as FAQCategory]?.length ??
          faqItems.length)
        : faqItems.length;

    if (filteredFaqs.length === total) {
      return `${filteredFaqs.length} question${filteredFaqs.length !== 1 ? "s" : ""}`;
    }

    return `${filteredFaqs.length} of ${total} questions`;
  }, [isSearching, activeCategory, filteredFaqs.length, faqsByCategory]);

  // Set page title
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "FAQ — Privacy, Formation, Asset Protection & Compliance | Incorporate123";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  // Build category grid cards (6 total — 4 pillars + Packages + General)
  const categoryGridItems: FAQCategoryCardItem[] = [
    {
      id: "privacy",
      title: "Business Privacy",
      description:
        "Anonymous LLCs, nominee services, ownership disclosure, state privacy laws.",
      count: faqsByCategory.privacy.length,
      href: "/privacy#faq",
      icon: "EyeOff",
      pillar: "privacy",
    },
    {
      id: "asset",
      title: "Asset Protection",
      description:
        "Charging orders, LLC vs trust, entity separation, real estate protection.",
      count: faqsByCategory.asset.length,
      href: "/asset-protection#faq",
      icon: "Shield",
      pillar: "asset",
    },
    {
      id: "formation",
      title: "Company Formation",
      description:
        "LLC vs corporation, state selection, formation timeline and costs.",
      count: faqsByCategory.formation.length,
      href: "/formation#faq",
      icon: "Building2",
      pillar: "formation",
    },
    {
      id: "compliance",
      title: "Compliance",
      description:
        "Registered agent, annual reports, foreign registration, corporate records.",
      count: faqsByCategory.compliance.length,
      href: "/compliance#faq",
      icon: "ClipboardCheck",
      pillar: "compliance",
    },
    {
      id: "packages",
      title: "Packages & Pricing",
      description:
        "Package contents, what's included, payment methods, refund policy, renewal.",
      count: faqsByCategory.packages.length,
      href: "#category-packages",
      icon: "Package",
      pillar: "neutral",
    },
    {
      id: "general",
      title: "General",
      description:
        "Company background, how we're different, getting started, account management.",
      count: faqsByCategory.general.length,
      href: "#category-general",
      icon: "Info",
      pillar: "neutral",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-primary-50 px-container-x pt-6">
        <div className="mx-auto max-w-content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faq" },
            ]}
          />
        </div>
      </div>

      {/* 1. FAQ Hero */}
      <FAQHero />

      {/* 2. Category Navigation Grid — 6 cards */}
      <FAQCategoryGrid categories={categoryGridItems} />

      {/* 2. Search + Filters section */}
      <section className="bg-primary-50 pb-8 px-container-x">
        <div className="mx-auto max-w-[900px] flex flex-col gap-4">
          {/* Search input */}
          <SearchInput
            value={searchQuery}
            onChange={handleSearch}
            resultCount={filteredFaqs.length}
            totalCount={
              activeCategory !== "all"
                ? (faqsByCategory[activeCategory as FAQCategory]?.length ??
                  faqItems.length)
                : faqItems.length
            }
            categoryLabel={activeCategoryLabel}
          />

          {/* 3. Category filter pills */}
          <CategoryFilterPills
            categories={categoryPills}
            activeCategory={activeCategory}
            onChange={handleCategoryChange}
          />
        </div>
      </section>

      {/* 4. FAQ Accordion Sections */}
      <section className="py-section-y px-container-x">
        <div className="mx-auto max-w-[900px]">
          {/* Result count when filtering */}
          {resultCountText && (
            <p className="text-body-sm text-muted mb-6" aria-live="polite">
              {resultCountText}
            </p>
          )}

          {filteredFaqs.length === 0 ? (
            /* No results state */
            <div className="rounded-card border border-border bg-surface p-8 text-center">
              <p className="text-body-lg font-medium text-foreground">
                No questions match your search.
              </p>
              <p className="mt-2 text-body text-muted">
                Try different keywords or call us at{" "}
                <a
                  href="tel:+18005530615"
                  className="font-medium text-secondary hover:underline"
                >
                  1-800-553-0615
                </a>
                .
              </p>
            </div>
          ) : isSearching ? (
            /* Flat list when search is active */
            <Accordion type="multiple" variant="default">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  id={faq.id}
                  title={faq.question}
                  badge={categoryDisplayLabels[faq.category as FAQCategory]}
                >
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            /* Grouped by category when not searching */
            <div className="flex flex-col gap-12">
              {visibleCategories.map((cat) => {
                const items = filteredByCategory[cat];
                const displayLabel = categoryDisplayLabels[cat];
                const guides = relatedGuidesMap[cat];

                return (
                  <div
                    key={cat}
                    id={`category-${cat}`}
                    className="scroll-mt-24"
                  >
                    {/* Category heading */}
                    <div
                      className={cn(
                        "border-b-2 pb-4 mb-6",
                        categoryBorderBottomColors[cat],
                      )}
                    >
                      <h2 className="font-display text-heading font-semibold text-foreground">
                        {displayLabel}
                      </h2>
                      <p className="text-body-sm text-muted">
                        {items.length} question{items.length !== 1 ? "s" : ""}
                      </p>
                    </div>

                    {/* Accordion */}
                    <Accordion type="multiple" variant="default">
                      {items.map((faq) => (
                        <AccordionItem
                          key={faq.id}
                          id={faq.id}
                          title={faq.question}
                        >
                          <p>{faq.answer}</p>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    {/* Related guides */}
                    {guides && guides.length > 0 && (
                      <RelatedGuides guides={guides} className="mt-6" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. Can't Find It? — Contact + pillar links */}
      <section className="bg-background py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="mx-auto max-w-narrow text-center">
            <h2 className="font-display text-heading-lg font-bold text-foreground">
              Can&rsquo;t Find What You&rsquo;re Looking For?
            </h2>
            <p className="mt-3 text-body text-muted">
              Call us directly or browse topics by pillar. A privacy specialist
              answers — no chatbots, no phone trees.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:+18005530615"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg hover:bg-accent/90"
              >
                Call 1-800-553-0615
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-foreground hover:bg-muted/10"
              >
                Send Us a Message
              </a>
            </div>
          </div>

          <ul className="mx-auto mt-10 grid max-w-narrow grid-cols-1 gap-3 sm:grid-cols-2">
            <li>
              <PillarLinkCard
                pillar="privacy"
                href="/privacy"
                title="Browse Business Privacy topics"
                variant="compact"
              />
            </li>
            <li>
              <PillarLinkCard
                pillar="asset"
                href="/asset-protection"
                title="Browse Asset Protection topics"
                variant="compact"
              />
            </li>
            <li>
              <PillarLinkCard
                pillar="formation"
                href="/formation"
                title="Browse Formation topics"
                variant="compact"
              />
            </li>
            <li>
              <PillarLinkCard
                pillar="compliance"
                href="/compliance"
                title="Browse Compliance topics"
                variant="compact"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
