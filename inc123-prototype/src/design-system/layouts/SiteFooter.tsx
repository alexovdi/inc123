"use client";

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  heading: string;
  links: FooterLink[];
}

interface FooterColumn {
  title: string;
  links?: FooterLink[];
  sections?: FooterSection[];
  comparisons?: FooterLink[];
}

interface FooterCompany {
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface FooterBrand {
  tagline: string;
  ctas: { label: string; href: string }[];
}

export interface SiteFooterProps {
  columns: FooterColumn[];
  legal: FooterLink[];
  company: FooterCompany;
  brand?: FooterBrand;
  crypto?: string[];
  className?: string;
}

/* ------------------------------------------------
   Footer Column Content (shared between mobile/desktop)
   ------------------------------------------------ */
function FooterColumnContent({ col }: { col: FooterColumn }) {
  return (
    <>
      {/* Simple link list */}
      {col.links && (
        <ul className="space-y-2">
          {col.links.map((link) => (
            <li key={link.href + link.label}>
              <RouterLink
                to={link.href}
                className="text-body-sm text-white/50 transition-colors hover:text-white hover:underline"
              >
                {link.label}
              </RouterLink>
            </li>
          ))}
        </ul>
      )}

      {/* Comparison links */}
      {col.comparisons && col.comparisons.length > 0 && (
        <div className="mt-3">
          <div className="flex items-center gap-2 mb-2 mt-1">
            <span className="flex-1 h-px bg-white/[0.10]" />
            <span className="text-caption text-white/50">Compare</span>
            <span className="flex-1 h-px bg-white/[0.10]" />
          </div>
          <ul className="space-y-2">
            {col.comparisons.map((link) => (
              <li key={link.href}>
                <RouterLink
                  to={link.href}
                  className="text-body-sm text-white/50 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Multi-section columns */}
      {col.sections && (
        <div className="space-y-4">
          {col.sections.map((section) => (
            <div key={section.heading || "other"}>
              {section.heading && (
                <h4 className="mb-2 text-caption font-semibold uppercase tracking-wider text-white/50">
                  {section.heading}
                </h4>
              )}
              {!section.heading && (
                <div className="h-px bg-white/[0.06] mb-2" />
              )}
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <RouterLink
                      to={link.href}
                      className="text-body-sm text-white/50 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------
   Mobile Accordion Item
   ------------------------------------------------ */
function FooterAccordionItem({ col }: { col: FooterColumn }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Collapse" : "Expand"} ${col.title}`}
        className="flex w-full items-center justify-between py-3 text-left"
      >
        <h3 className="text-caption font-semibold uppercase tracking-wider text-white/80">
          {col.title}
        </h3>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-white/50 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="pb-4">
          <FooterColumnContent col={col} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   SiteFooter
   ------------------------------------------------ */
export function SiteFooter({
  columns,
  legal,
  company,
  brand,
  crypto,
  className,
}: SiteFooterProps) {
  return (
    <footer className={cn("bg-footer-dark text-white", className)}>
      {/* Branding Strip */}
      {brand && (
        <div className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-wide px-container-x py-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <RouterLink to="/" className="inline-flex items-center gap-1">
                  <span className="font-display text-[22px] font-bold text-white">
                    incorporate
                  </span>
                  <span className="font-display text-[22px] font-bold text-primary-400">
                    123
                  </span>
                </RouterLink>
                <p className="mt-1.5 text-body-sm text-white/50">
                  {brand.tagline}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                  className="text-body-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  {company.phone}
                </a>
                <div className="flex flex-wrap gap-3">
                  {brand.ctas.map((cta) => (
                    <RouterLink
                      key={cta.href}
                      to={cta.href}
                      className="inline-flex items-center px-5 py-2.5 rounded-lg border border-white/20 text-body-sm font-medium text-white/70 transition-all hover:border-white/40 hover:text-white"
                    >
                      {cta.label}
                    </RouterLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer — 6 Columns */}
      <div className="mx-auto max-w-wide px-container-x py-12 lg:py-16">
        {/* Desktop: 6-column grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-body-sm font-bold uppercase tracking-wider text-white/80">
                {col.title}
              </h3>
              <FooterColumnContent col={col} />
            </div>
          ))}
        </div>

        {/* Tablet: 3-column grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:hidden">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-body-sm font-bold uppercase tracking-wider text-white/80">
                {col.title}
              </h3>
              <FooterColumnContent col={col} />
            </div>
          ))}
        </div>

        {/* Mobile: accordion layout */}
        <div className="sm:hidden">
          {columns.map((col) => (
            <FooterAccordionItem key={col.title} col={col} />
          ))}
        </div>
      </div>

      {/* Legal Strip */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-wide px-container-x py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Left — copyright, legal links, disclaimer */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-caption text-white/50">
                <span>
                  &copy; {new Date().getFullYear()} {company.name}
                </span>
                <span className="text-white/15">·</span>
                {legal.map((link, i) => (
                  <span key={link.href} className="flex items-center gap-3">
                    <RouterLink
                      to={link.href}
                      className="text-white/50 underline underline-offset-2 decoration-white/30 transition-colors hover:text-white/70 hover:decoration-white/50"
                    >
                      {link.label}
                    </RouterLink>
                    {i < legal.length - 1 && (
                      <span className="text-white/15">·</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-caption text-white/50">
                Not a law firm, bank, or CPA.{" "}
                <RouterLink
                  to="/legal"
                  className="text-white/50 underline underline-offset-2 decoration-white/30 hover:text-white/70 hover:decoration-white/50 transition-colors"
                >
                  Full legal disclaimer
                </RouterLink>{" "}
                · All prices in USD · Operated by Fidelity Solutions Ltd
              </p>
            </div>

            {/* Right — crypto badges */}
            {crypto && crypto.length > 0 && (
              <div className="flex gap-2.5 shrink-0">
                {crypto.map((symbol) => (
                  <span
                    key={symbol}
                    className="text-caption font-bold tracking-wide text-white/50 bg-white/[0.05] px-2 py-1 rounded"
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
