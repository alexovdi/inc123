"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { CategoryFilterPills } from "@/design-system/components/CategoryFilterPills";
import type { CategoryFilterItem } from "@/design-system/components/CategoryFilterPills";
import { CTABlock } from "@/design-system/components/CTABlock";
import { FAQHero } from "@/design-system/components/FAQHero";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

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

  return (
    <>
      {/* 1. FAQ Hero */}
      <FAQHero />

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
                  href="tel:+17753134155"
                  className="font-medium text-secondary hover:underline"
                >
                  (775) 313-4155
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
                  <div key={cat}>
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

      {/* 5. Bottom CTA */}
      <CTABlock
        heading="Still Have Questions?"
        description="Our team has 25 years of experience with Wyoming and Nevada privacy formation. Call us directly — no chatbots, no phone trees."
        primaryCTA={{
          label: "Call (775) 313-4155",
          href: "tel:+17753134155",
        }}
        secondaryCTA={{
          label: "Send Us a Message",
          href: "/contact",
        }}
        trustSignal="25+ Years of Experience in Reno, NV"
      />
    </>
  );
}
