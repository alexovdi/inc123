"use client";

import {
  type ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface DisclosureSection {
  /** Unique identifier */
  id: string;
  /** Section heading */
  title: string;
  /** Always-visible summary text */
  summary: string;
  /** Expanded content (hidden by default) */
  content: ReactNode;
  /** Open this section by default */
  defaultOpen?: boolean;
}

export interface ProgressiveDisclosureProps {
  /** Array of disclosure sections */
  sections: DisclosureSection[];
  /** Show Expand All / Collapse All toggle */
  expandAllButton?: boolean;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Single Section sub-component
   ------------------------------------------------ */
interface SectionItemProps {
  section: DisclosureSection;
  isOpen: boolean;
  onToggle: () => void;
}

function SectionItem({ section, isOpen, onToggle }: SectionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [section.content, isOpen]);

  return (
    <div
      className="border-b border-border last:border-b-0"
      data-state={isOpen ? "open" : "closed"}
    >
      {/* Always-visible header */}
      <div className="py-5">
        <h3 className="text-heading-sm font-display font-semibold text-foreground">
          {section.title}
        </h3>
        <p className="mt-1 text-body text-muted">{section.summary}</p>

        {/* Toggle button */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="mt-3 inline-flex items-center gap-1.5 text-body-sm font-medium text-secondary transition-colors hover:text-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <span>{isOpen ? "Show less" : "Read more"}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Expanded content — stays in DOM for SEO */}
      <div
        data-state={isOpen ? "open" : "closed"}
        className="overflow-hidden transition-[max-height,opacity] duration-200 ease-out"
        style={{
          maxHeight: isOpen ? `${maxHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div ref={contentRef} className="pb-5 text-body text-foreground">
          {section.content}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   ProgressiveDisclosure
   ------------------------------------------------ */
function ProgressiveDisclosure({
  sections,
  expandAllButton = false,
  className,
}: ProgressiveDisclosureProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const defaults = new Set<string>();
    sections.forEach((s) => {
      if (s.defaultOpen) defaults.add(s.id);
    });
    return defaults;
  });

  const allOpen = sections.every((s) => openSections.has(s.id));

  const toggleSection = useCallback((id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    if (allOpen) {
      setOpenSections(new Set());
    } else {
      setOpenSections(new Set(sections.map((s) => s.id)));
    }
  }, [allOpen, sections]);

  return (
    <div className={cn("w-full", className)}>
      {/* Expand All / Collapse All */}
      {expandAllButton && (
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex items-center gap-1.5 text-body-sm font-medium text-secondary transition-colors hover:text-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            {allOpen ? "Collapse All" : "Expand All"}
          </button>
        </div>
      )}

      {/* Sections */}
      <div className="divide-y divide-border border-t border-border">
        {sections.map((section) => (
          <SectionItem
            key={section.id}
            section={section}
            isOpen={openSections.has(section.id)}
            onToggle={() => toggleSection(section.id)}
          />
        ))}
      </div>
    </div>
  );
}

ProgressiveDisclosure.displayName = "ProgressiveDisclosure";

export { ProgressiveDisclosure };
