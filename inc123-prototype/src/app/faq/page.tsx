"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  FAQHero,
  SearchInput,
  CategoryFilterPills,
  Accordion,
  AccordionItem,
  RelatedGuides,
  CTABlock,
} from "@/design-system/components";
import type { CategoryFilterItem } from "@/design-system/components";
import type { RelatedGuide } from "@/design-system/components";
import type { PillarName } from "@/design-system/tokens";
import { faqItems } from "@/data/faq";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Category configuration
   ------------------------------------------------ */
type FAQCategory = PillarName | "packages" | "general";

const categoryDisplayLabels: Record<FAQCategory, string> = {
  privacy: "Business Privacy",
  asset: "Asset Protection",
  formation: "Company Formation",
  compliance: "Compliance",
  packages: "Packages & Pricing",
  general: "General",
};

const categoryOrder: FAQCategory[] = [
  "privacy",
  "asset",
  "formation",
  "compliance",
  "packages",
  "general",
];

const categoryPillarMap: Partial<Record<FAQCategory, PillarName>> = {
  privacy: "privacy",
  asset: "asset",
  formation: "formation",
  compliance: "compliance",
};

/* Pillar accent colors for category headings */
const categoryBorderBottomColors: Record<FAQCategory, string> = {
  privacy: "border-b-pillar-privacy",
  asset: "border-b-pillar-asset",
  formation: "border-b-pillar-formation",
  compliance: "border-b-pillar-compliance",
  packages: "border-b-secondary",
  general: "border-b-muted",
};

/* ------------------------------------------------
   Related guides per category
   ------------------------------------------------ */
const relatedGuidesMap: Record<FAQCategory, RelatedGuide[]> = {
  privacy: [
    {
      title: "Read the Full Anonymous LLC Guide",
      description:
        "Everything you need to know about forming an anonymous LLC for maximum privacy.",
      href: "/anonymous-llc",
    },
    {
      title: "Nominee Services Explained",
      description:
        "How year-round nominee officers and directors protect your identity.",
      href: "/nominee-services",
    },
    {
      title: "Compare Gold vs Silver Packages",
      description:
        "See what privacy features are included in each package tier.",
      href: "/compare-packages",
    },
  ],
  asset: [
    {
      title: "Charging Order Protection Guide",
      description:
        "Understand how Wyoming's charging order protection shields your assets.",
      href: "/charging-order-protection",
    },
    {
      title: "Wyoming Asset Protection Overview",
      description:
        "Why Wyoming is the top state for domestic asset protection structures.",
      href: "/asset-protection",
    },
    {
      title: "Investment Holding LLC",
      description: "How to use an LLC to hold and protect investment assets.",
      href: "/investment-holding-llc",
    },
  ],
  formation: [
    {
      title: "Wyoming LLC Formation",
      description:
        "Step-by-step guide to forming your Wyoming LLC with all-inclusive pricing.",
      href: "/wyoming",
    },
    {
      title: "Nevada LLC Formation",
      description:
        "Everything included in Nevada formation packages and state-specific details.",
      href: "/nevada",
    },
    {
      title: "LLC vs Corporation Comparison",
      description:
        "Full side-by-side comparison to help you choose the right entity type.",
      href: "/llc-vs-corporation",
    },
  ],
  compliance: [
    {
      title: "Registered Agent Services",
      description:
        "Professional registered agent service included in every package.",
      href: "/registered-agent",
    },
    {
      title: "Annual Reports Guide",
      description:
        "Filing requirements, deadlines, and what happens if you miss them.",
      href: "/annual-reports",
    },
    {
      title: "Corporate Minutes Maintenance",
      description:
        "Why corporate minutes matter and how we maintain them for you.",
      href: "/corporate-minutes",
    },
  ],
  packages: [
    {
      title: "Compare All Packages",
      description:
        "Side-by-side comparison of Gold, Silver, and Bronze packages.",
      href: "/compare-packages",
    },
    {
      title: "Wyoming Gold Package \u2014 $1,275",
      description:
        "Our most popular package with full privacy and asset protection.",
      href: "/wyoming-private-incorporation",
    },
  ],
  general: [
    {
      title: "About Incorporate123",
      description:
        "25 years of business formation and privacy expertise from Reno, Nevada.",
      href: "/about",
    },
    {
      title: "Contact Us",
      description:
        "Call, email, or visit our office. Real people, real answers.",
      href: "/contact",
    },
  ],
};

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
