"use client";

import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import type { SiteNavigation } from "@/lib/types";

/* ------------------------------------------------
   Pillar color maps for mega menu accents
   ------------------------------------------------ */
const pillarAccentBorder: Record<string, string> = {
  privacy: "border-t-[var(--pillar-privacy)]",
  asset: "border-t-[var(--pillar-asset)]",
  formation: "border-t-[var(--pillar-formation)]",
  compliance: "border-t-[var(--pillar-compliance)]",
};

const pillarAccentText: Record<string, string> = {
  privacy: "text-[var(--pillar-privacy)]",
  asset: "text-[var(--pillar-asset)]",
  formation: "text-[var(--pillar-formation)]",
  compliance: "text-[var(--pillar-compliance)]",
};

const pillarDotBg: Record<string, string> = {
  privacy: "bg-[var(--pillar-privacy)]",
  asset: "bg-[var(--pillar-asset)]",
  formation: "bg-[var(--pillar-formation)]",
  compliance: "bg-[var(--pillar-compliance)]",
};

export interface SiteHeaderProps {
  navigation: SiteNavigation;
  className?: string;
}

export function SiteHeader({ navigation, className }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-surface transition-all duration-200",
          scrolled ? "shadow-card py-2" : "py-4",
          className,
        )}
      >
        <div className="mx-auto flex max-w-wide items-center justify-between px-container-x">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-1">
            <span className="font-display text-heading-sm font-bold text-primary">
              Incorporate
            </span>
            <span className="font-display text-heading-sm font-bold text-secondary">
              123
            </span>
          </RouterLink>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.main.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  (item.children || item.dropdownLinks) &&
                  setActiveMenu(item.label)
                }
                onMouseLeave={() => setActiveMenu(null)}
              >
                <RouterLink
                  to={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-2 text-body-sm font-medium text-foreground transition-colors hover:text-secondary",
                    activeMenu === item.label && "text-secondary",
                  )}
                >
                  {item.label}
                  {(item.children || item.dropdownLinks) && (
                    <ChevronDown className="h-3 w-3 text-muted" />
                  )}
                </RouterLink>

                {/* Mega Menu Panel (pillar columns) */}
                {item.children && activeMenu === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="w-[min(640px,90vw)] rounded-card bg-surface p-5 shadow-dropdown border border-border">
                      {item.children.map((pillar) => (
                        <div key={pillar.pillar}>
                          {/* Pillar header with accent */}
                          <div
                            className={cn(
                              "mb-3 pb-2 border-t-[3px]",
                              pillarAccentBorder[pillar.pillar],
                            )}
                          >
                            <RouterLink
                              to={pillar.href}
                              className={cn(
                                "text-body-sm font-bold mt-2 inline-block",
                                pillarAccentText[pillar.pillar],
                              )}
                            >
                              {pillar.label}
                            </RouterLink>
                            <p className="text-caption text-muted mt-0.5">
                              {pillar.description}
                            </p>
                          </div>

                          {/* Cluster links */}
                          <div className="grid grid-cols-2 gap-1.5 mb-2">
                            {pillar.clusters.map((cluster) => (
                              <RouterLink
                                key={cluster.href}
                                to={cluster.href}
                                className="block rounded-button px-3 py-2 text-body-sm transition-colors hover:bg-primary-50"
                              >
                                <span className="font-medium text-foreground">
                                  {cluster.title}
                                </span>
                                {cluster.description && (
                                  <span className="mt-0.5 block text-caption text-muted line-clamp-1">
                                    {cluster.description}
                                  </span>
                                )}
                              </RouterLink>
                            ))}
                          </div>

                          {/* Comparison links */}
                          {pillar.comparisons &&
                            pillar.comparisons.length > 0 && (
                              <div className="mb-3">
                                <p className="px-3 mb-1 text-caption font-semibold uppercase tracking-wider text-muted/60">
                                  Compare
                                </p>
                                <div className="grid grid-cols-2 gap-1.5">
                                  {pillar.comparisons.map((cmp) => (
                                    <RouterLink
                                      key={cmp.href}
                                      to={cmp.href}
                                      className="block rounded-button px-3 py-1.5 text-caption font-medium text-muted transition-colors hover:bg-primary-50 hover:text-foreground"
                                    >
                                      {cmp.title}
                                    </RouterLink>
                                  ))}
                                </div>
                              </div>
                            )}

                          {/* Featured link */}
                          {pillar.featuredLink && (
                            <RouterLink
                              to={pillar.featuredLink.href}
                              className="block rounded-button bg-primary-50 p-3 text-body-sm transition-colors hover:bg-primary-100"
                            >
                              <span className="font-semibold text-secondary">
                                {pillar.featuredLink.title}
                              </span>
                              <span className="mt-0.5 block text-caption text-muted">
                                {pillar.featuredLink.description}
                              </span>
                            </RouterLink>
                          )}

                          {/* Explore All link */}
                          <div className="mt-2 border-t border-border pt-2">
                            <RouterLink
                              to={pillar.href}
                              className={cn(
                                "text-body-sm font-semibold",
                                pillarAccentText[pillar.pillar],
                              )}
                            >
                              Explore All {pillar.label} →
                            </RouterLink>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Simple Dropdown (About menu) */}
                {item.dropdownLinks && activeMenu === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="w-48 rounded-card bg-surface py-2 shadow-dropdown border border-border">
                      {item.dropdownLinks.map((link) => (
                        <RouterLink
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 text-body-sm text-foreground transition-colors hover:bg-primary-50 hover:text-secondary"
                        >
                          {link.label}
                        </RouterLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Phone + CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${navigation.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-1.5 text-body-sm text-muted transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{navigation.phone}</span>
            </a>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              <RouterLink to="/compare-packages">
                Find Your Package →
              </RouterLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center gap-2 p-2 -mr-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-surface p-6 shadow-dropdown"
            aria-label="Mobile navigation"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-heading-sm font-bold text-primary">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile CTA + Phone */}
            <div className="mb-6 flex flex-col gap-3">
              <Button
                variant="secondary"
                fullWidth
                asChild
                className="border-secondary text-secondary"
              >
                <RouterLink
                  to="/compare-packages"
                  onClick={() => setMobileOpen(false)}
                >
                  Find Your Package →
                </RouterLink>
              </Button>
              <a
                href={`tel:${navigation.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-button border border-border py-3 text-body-sm font-medium text-foreground hover:bg-primary-50"
              >
                <Phone className="h-4 w-4" />
                {navigation.phone}
              </a>
            </div>

            {/* Mobile nav items */}
            <div className="space-y-1">
              {navigation.main.map((item) => (
                <MobileNavSection
                  key={item.label}
                  item={item}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function MobileNavSection({
  item,
  onNavigate,
}: {
  item: SiteNavigation["main"][number];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  // Simple link (no children or dropdown)
  if (!item.children && !item.dropdownLinks) {
    return (
      <RouterLink
        to={item.href}
        onClick={onNavigate}
        className="block rounded-button px-3 py-3 text-body font-medium text-foreground hover:bg-primary-50"
      >
        {item.label}
      </RouterLink>
    );
  }

  // Simple dropdown links (About)
  if (item.dropdownLinks) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-button px-3 py-3 text-body font-medium text-foreground hover:bg-primary-50"
        >
          <span>{item.label}</span>
          <span
            className={cn(
              "text-muted transition-transform",
              open && "rotate-180",
            )}
          >
            ▾
          </span>
        </button>
        {open && (
          <div className="ml-3 space-y-1 pl-3 border-l-2 border-border">
            {item.dropdownLinks.map((link) => (
              <RouterLink
                key={link.href}
                to={link.href}
                onClick={onNavigate}
                className="block rounded-button px-3 py-2 text-body-sm text-muted hover:text-foreground hover:bg-primary-50"
              >
                {link.label}
              </RouterLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Mega menu pillar accordion
  const pillar = item.children?.[0];
  const pillarId = pillar?.pillar;

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-button px-3 py-3 text-body font-medium text-foreground hover:bg-primary-50"
      >
        <span className="flex items-center gap-2">
          {pillarId && (
            <span
              className={cn("h-2 w-2 rounded-full", pillarDotBg[pillarId])}
            />
          )}
          {item.label}
        </span>
        <span
          className={cn(
            "text-muted transition-transform",
            open && "rotate-180",
          )}
        >
          ▾
        </span>
      </button>
      {open && pillar && (
        <div className="ml-3 space-y-1 pl-3 border-l-2 border-border">
          {pillar.clusters.map((cluster) => (
            <RouterLink
              key={cluster.href}
              to={cluster.href}
              onClick={onNavigate}
              className="block rounded-button px-3 py-2 text-body-sm text-muted hover:text-foreground hover:bg-primary-50"
            >
              {cluster.title}
            </RouterLink>
          ))}
          {pillar.comparisons && pillar.comparisons.length > 0 && (
            <>
              <p className="px-3 pt-2 text-caption font-semibold uppercase tracking-wider text-muted/50">
                Compare
              </p>
              {pillar.comparisons.map((cmp) => (
                <RouterLink
                  key={cmp.href}
                  to={cmp.href}
                  onClick={onNavigate}
                  className="block rounded-button px-3 py-2 text-body-sm text-muted hover:text-foreground hover:bg-primary-50"
                >
                  {cmp.title}
                </RouterLink>
              ))}
            </>
          )}
          <RouterLink
            to={pillar.href}
            onClick={onNavigate}
            className={cn(
              "block rounded-button px-3 py-2 text-body-sm font-semibold",
              pillarAccentText[pillarId ?? ""],
            )}
          >
            Explore All {pillar.label} →
          </RouterLink>
        </div>
      )}
    </div>
  );
}
