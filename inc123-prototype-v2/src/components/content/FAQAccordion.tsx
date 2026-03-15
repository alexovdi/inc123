"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/animation/FadeUp";

/* ═══════════════════════════════════════════════════════════════════════════
   FAQAccordion — Expandable FAQ items with smooth open/close
   ═══════════════════════════════════════════════════════════════════════════ */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

interface FAQAccordionProps {
  items?: FAQItem[];
  sections?: FAQSection[];
  className?: string;
}

function FAQAccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[var(--color-accent)]"
      >
        <span className="pr-4 text-base font-semibold text-[var(--color-text-primary)]">
          {question}
        </span>
        <span
          className={cn(
            "shrink-0 text-xl text-[var(--color-accent)] transition-transform duration-200",
            open && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({
  items,
  sections,
  className,
}: FAQAccordionProps) {
  return (
    <FadeUp>
      <div className={cn("mx-auto max-w-3xl", className)}>
        {!sections && (
          <h2 className="mb-8 font-[var(--font-display)] text-[var(--font-size-h2)] leading-tight text-[var(--color-text-primary)]">
            Frequently Asked Questions
          </h2>
        )}
        {sections?.map((section) => (
          <div key={section.title} className="mb-10 last:mb-0">
            <h3 className="mb-4 font-[var(--font-display)] text-[var(--font-size-h3)] leading-snug text-[var(--color-text-primary)]">
              {section.title}
            </h3>
            <div>
              {section.items.map((item) => (
                <FAQAccordionItem key={item.question} {...item} />
              ))}
            </div>
          </div>
        ))}
        {items && items.length > 0 && (
          <div>
            {items.map((item) => (
              <FAQAccordionItem key={item.question} {...item} />
            ))}
          </div>
        )}
      </div>
    </FadeUp>
  );
}

FAQAccordion.displayName = "FAQAccordion";
