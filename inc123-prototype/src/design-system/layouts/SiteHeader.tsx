"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Menu, X, Phone, LogIn } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives";
import type { SiteNavigation } from "@/lib/types";

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
      {/* Top Utility Bar (desktop only) */}
      <div
        className={cn(
          "hidden w-full bg-primary text-white transition-all duration-200 lg:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-wide items-center justify-between px-container-x py-1.5 text-caption">
          <a
            href={`tel:${navigation.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
          >
            <Phone className="h-3 w-3" />
            <span>{navigation.phone}</span>
          </a>
          <span className="text-white/60">
            25 Years of Privacy-Focused Business Formation
          </span>
          <NextLink
            href="/login"
            className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
          >
            <LogIn className="h-3 w-3" />
            <span>Client Login</span>
          </NextLink>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-surface transition-all duration-200",
          scrolled ? "shadow-card py-2" : "py-4",
          className,
        )}
      >
        <div className="mx-auto flex max-w-wide items-center justify-between px-container-x">
          {/* Logo */}
          <NextLink href="/" className="flex items-center gap-2">
            <span className="font-display text-heading-sm font-bold text-primary">
              Incorporate
            </span>
            <span className="font-display text-heading-sm font-bold text-secondary">
              123
            </span>
          </NextLink>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.main.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <NextLink
                  href={item.href}
                  className={cn(
                    "inline-flex items-center px-3 py-2 text-body-sm font-medium text-foreground transition-colors hover:text-secondary",
                    activeMenu === item.label && "text-secondary",
                  )}
                >
                  {item.label}
                </NextLink>

                {/* Mega Menu Panel */}
                {item.children && activeMenu === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="w-[600px] rounded-card bg-surface p-6 shadow-dropdown border border-border">
                      {item.children.map((pillar) => (
                        <div key={pillar.pillar}>
                          <div className="mb-3">
                            <p className="text-body-sm font-semibold text-foreground">
                              {pillar.label}
                            </p>
                            <p className="text-caption text-muted">
                              {pillar.description}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {pillar.clusters.map((cluster) => (
                              <NextLink
                                key={cluster.href}
                                href={cluster.href}
                                className="block rounded-button p-3 text-body-sm transition-colors hover:bg-primary-50"
                              >
                                <span className="font-medium text-foreground">
                                  {cluster.title}
                                </span>
                                {cluster.description && (
                                  <span className="mt-0.5 block text-caption text-muted">
                                    {cluster.description}
                                  </span>
                                )}
                              </NextLink>
                            ))}
                          </div>
                          {pillar.featuredLink && (
                            <NextLink
                              href={pillar.featuredLink.href}
                              className="block rounded-button bg-primary-50 p-3 text-body-sm transition-colors hover:bg-primary-100"
                            >
                              <span className="font-semibold text-secondary">
                                {pillar.featuredLink.title}
                              </span>
                              <span className="mt-0.5 block text-caption text-muted">
                                {pillar.featuredLink.description}
                              </span>
                            </NextLink>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button (right-aligned) */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="cta" size="sm" asChild>
              <NextLink href="/packages">Compare Packages</NextLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center gap-2 lg:hidden"
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

            <div className="mb-6 flex flex-col gap-3">
              <Button variant="cta" fullWidth asChild>
                <NextLink href="/packages" onClick={() => setMobileOpen(false)}>
                  Order Now
                </NextLink>
              </Button>
              <Button variant="secondary" fullWidth asChild>
                <NextLink href="/login" onClick={() => setMobileOpen(false)}>
                  Client Login
                </NextLink>
              </Button>
              <a
                href={`tel:${navigation.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-button border border-border py-3 text-body-sm font-medium text-foreground hover:bg-primary-50"
              >
                <Phone className="h-4 w-4" />
                {navigation.phone}
              </a>
            </div>

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

  if (!item.children) {
    return (
      <NextLink
        href={item.href}
        onClick={onNavigate}
        className="block rounded-button px-3 py-3 text-body font-medium text-foreground hover:bg-primary-50"
      >
        {item.label}
      </NextLink>
    );
  }

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
        <div className="ml-3 space-y-1 pl-3">
          {item.children!.map((pillar) =>
            pillar.clusters.map((cluster) => (
              <NextLink
                key={cluster.href}
                href={cluster.href}
                onClick={onNavigate}
                className="block rounded-button px-3 py-2 text-body-sm text-muted hover:text-foreground hover:bg-primary-50"
              >
                {cluster.title}
              </NextLink>
            )),
          )}
        </div>
      )}
    </div>
  );
}
