"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { siteNavigation } from "@/data/navigation";
import type { NavItem, NavPillar } from "@/lib/types";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   SiteHeader — Sticky header with mega menu and mobile drawer
   ═══════════════════════════════════════════════════════════════════════════ */

interface SiteHeaderProps {
  className?: string;
}

/* ── Mega Menu Panel ── */

interface MegaMenuProps {
  pillar: NavPillar;
  onClose: () => void;
}

function MegaMenu({ pillar, onClose }: MegaMenuProps) {
  return (
    <div
      className="absolute top-full left-0 w-full pt-2"
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-content px-container-x">
        <div
          className={cn(
            "rounded-[var(--radius-lg)] bg-[var(--color-bg-surface-dark)] p-8",
            "shadow-[var(--shadow-dropdown)]",
            "animate-in fade-in slide-in-from-top-2 duration-[var(--duration-normal)]",
          )}
        >
          {/* Pillar header */}
          <div className="mb-6">
            <p className="text-[length:var(--font-size-small)] font-semibold tracking-caps text-[var(--color-accent)]">
              {pillar.label}
            </p>
            <p className="mt-1 max-w-lg text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)]">
              {pillar.description}
            </p>
          </div>

          <div className="flex gap-8">
            {/* Cluster links grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {pillar.clusters.map((cluster) => (
                  <Link
                    key={cluster.href}
                    href={cluster.href}
                    onClick={onClose}
                    className={cn(
                      "group rounded-[var(--radius-md)] p-3",
                      "transition-colors duration-[var(--duration-fast)]",
                      "hover:bg-[var(--color-bg-accent)]",
                    )}
                  >
                    <span className="block text-[length:var(--font-size-body)] font-medium text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-accent)]">
                      {cluster.title}
                    </span>
                    <span className="mt-0.5 block text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)]">
                      {cluster.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured link card */}
            {pillar.featuredLink && (
              <div className="w-64 shrink-0">
                <Link
                  href={pillar.featuredLink.href}
                  onClick={onClose}
                  className={cn(
                    "group flex h-full flex-col justify-between rounded-[var(--radius-lg)] p-5",
                    "border border-[var(--color-border-dark)]",
                    "bg-[var(--color-bg-accent)]",
                    "transition-all duration-[var(--duration-normal)]",
                    "hover:border-[var(--color-accent)]",
                  )}
                >
                  <div>
                    <p className="text-[length:var(--font-size-caption)] font-semibold tracking-caps text-[var(--color-accent)]">
                      Featured
                    </p>
                    <p className="mt-2 font-display text-[length:var(--font-size-h4)] font-bold text-[var(--color-text-on-dark)]">
                      {pillar.featuredLink.title}
                    </p>
                    <p className="mt-1 text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)]">
                      {pillar.featuredLink.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-[length:var(--font-size-small)] font-medium text-[var(--color-accent)] transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1">
                    Learn more
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

MegaMenu.displayName = "MegaMenu";

/* ── Mobile Nav Drawer ── */

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  phone: string;
}

function MobileDrawer({ isOpen, onClose, items, phone }: MobileDrawerProps) {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-[var(--duration-normal)]",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw]",
          "bg-[var(--color-bg-surface-dark)] shadow-xl",
          "transform transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border-dark)] p-4">
          <span className="font-display text-[length:var(--font-size-h4)] font-bold text-[var(--color-accent)]">
            Menu
          </span>
          <button
            onClick={onClose}
            className="rounded-[var(--radius-md)] p-2 text-[var(--color-text-on-dark-muted)] transition-colors hover:text-[var(--color-text-on-dark)]"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav
          className="overflow-y-auto p-4"
          style={{ maxHeight: "calc(100vh - 140px)" }}
        >
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedPillar(
                          expandedPillar === item.label ? null : item.label,
                        )
                      }
                      className={cn(
                        "flex w-full items-center justify-between rounded-[var(--radius-md)] px-3 py-3",
                        "text-[length:var(--font-size-body)] font-medium text-[var(--color-text-on-dark)]",
                        "transition-colors duration-[var(--duration-fast)]",
                        "hover:bg-[var(--color-bg-accent)]",
                      )}
                    >
                      {item.label}
                      <svg
                        className={cn(
                          "h-4 w-4 transition-transform duration-[var(--duration-fast)]",
                          expandedPillar === item.label && "rotate-180",
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Expanded cluster links */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-[var(--duration-normal)]",
                        expandedPillar === item.label
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <ul className="mt-1 space-y-0.5 pl-4">
                        {/* Hub link */}
                        <li>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="block rounded-[var(--radius-md)] px-3 py-2 text-[length:var(--font-size-small)] font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-bg-accent)]"
                          >
                            Overview
                          </Link>
                        </li>
                        {item.children[0].clusters.map((cluster) => (
                          <li key={cluster.href}>
                            <Link
                              href={cluster.href}
                              onClick={onClose}
                              className="block rounded-[var(--radius-md)] px-3 py-2 text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)] transition-colors hover:bg-[var(--color-bg-accent)] hover:text-[var(--color-text-on-dark)]"
                            >
                              {cluster.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-[var(--radius-md)] px-3 py-3 text-[length:var(--font-size-body)] font-medium text-[var(--color-text-on-dark)] transition-colors hover:bg-[var(--color-bg-accent)]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--color-border-dark)] p-4">
          <a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 py-3",
              "bg-[var(--color-accent)] text-[var(--color-bg-accent)]",
              "text-[length:var(--font-size-small)] font-semibold",
              "transition-colors duration-[var(--duration-fast)]",
              "hover:bg-[var(--color-accent-hover)]",
            )}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {phone}
          </a>
        </div>
      </div>
    </>
  );
}

MobileDrawer.displayName = "MobileDrawer";

/* ── Site Header ── */

export function SiteHeader({ className }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { main, phone } = siteNavigation;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleNavEnter = useCallback((label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMega(label);
  }, []);

  const handleNavLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMega(null);
    }, 150);
  }, []);

  const closeMega = useCallback(() => {
    setActiveMega(null);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-[var(--duration-normal)]",
          scrolled
            ? "bg-[var(--color-bg-accent)]/95 shadow-md backdrop-blur-md"
            : "bg-transparent",
          className,
        )}
      >
        <div className="max-w-content mx-auto flex items-center justify-between px-container-x py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="font-display text-[length:var(--font-size-h4)] font-bold text-[var(--color-accent)] lg:text-[length:var(--font-size-h3)]">
              Incorporate123
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {main.map((item) => (
              <div
                key={item.href}
                onMouseEnter={() =>
                  item.children ? handleNavEnter(item.label) : undefined
                }
                onMouseLeave={item.children ? handleNavLeave : undefined}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-[var(--radius-md)] px-3 py-2",
                    "text-[length:var(--font-size-small)] font-medium",
                    "text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-fast)]",
                    "hover:text-[var(--color-accent)]",
                    activeMega === item.label && "text-[var(--color-accent)]",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-[var(--duration-fast)]",
                        activeMega === item.label && "rotate-180",
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side: phone + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Phone (desktop) */}
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className={cn(
                "hidden items-center gap-2 lg:inline-flex",
                "text-[length:var(--font-size-small)] font-medium",
                "text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-fast)]",
                "hover:text-[var(--color-accent)]",
              )}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {phone}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-[var(--radius-md)] p-2 text-[var(--color-text-on-dark)] transition-colors hover:text-[var(--color-accent)] lg:hidden"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mega menu (desktop) — rendered at header level for full width */}
        {activeMega &&
          main
            .filter(
              (item) => item.label === activeMega && item.children?.length,
            )
            .map((item) => (
              <MegaMenu
                key={item.label}
                pillar={item.children![0]}
                onClose={closeMega}
              />
            ))}
      </header>

      {/* Mobile drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={main}
        phone={phone}
      />
    </>
  );
}

SiteHeader.displayName = "SiteHeader";
