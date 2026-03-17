"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type KeyboardEvent,
} from "react";
import { cn } from "@/design-system/utils/cn";
import { pillarTextMap } from "@/design-system/utils/pillarMaps";
import { Button, Icon, Link } from "@/design-system/primitives";
import type { NavPillar } from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface MobileNavProps {
  items: NavPillar[];
  isOpen: boolean;
  onClose: () => void;
  /** Phone number displayed as tap-to-call */
  phone?: string;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function MobileNav({
  items,
  isOpen,
  onClose,
  phone = "1-800-555-0123",
  className,
}: MobileNavProps) {
  const [expandedPillar, setExpandedPillar] = useState<PillarName | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* -- Toggle accordion sections ------------------- */
  const togglePillar = useCallback((pillar: PillarName) => {
    setExpandedPillar((prev) => (prev === pillar ? null : pillar));
  }, []);

  /* -- Body scroll lock when open ------------------ */
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  /* -- Escape closes ------------------------------- */
  useEffect(() => {
    function handleEscape(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape" && isOpen) onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  /* -- Focus trap ---------------------------------- */
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length > 0) focusable[0].focus();
  }, [isOpen]);

  /* -- Accordion keyboard handler ------------------ */
  const handleAccordionKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, pillar: PillarName) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePillar(pillar);
      }
    },
    [togglePillar],
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-foreground/50 lg:hidden"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-surface shadow-dropdown lg:hidden",
          "flex flex-col overflow-y-auto",
          "animate-slide-in-right",
          className,
        )}
      >
        {/* Header: close button */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-heading-sm font-display font-semibold text-foreground">
            Menu
          </span>
          <button
            onClick={onClose}
            className={cn(
              "inline-flex items-center justify-center w-11 h-11 rounded-button",
              "text-muted hover:text-foreground hover:bg-muted/10 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
            )}
            aria-label="Close menu"
          >
            <Icon name="X" size="lg" />
          </button>
        </div>

        {/* Top actions */}
        <div className="flex flex-col gap-3 p-4 border-b border-border">
          <Button variant="cta" fullWidth asChild>
            <a href="/checkout/configure">Order Now</a>
          </Button>
          <Button variant="secondary" fullWidth asChild>
            <a href="/login">Client Login</a>
          </Button>
        </div>

        {/* Phone tap-to-call */}
        {phone && (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className={cn(
              "flex items-center gap-3 px-4 py-3 min-h-[44px] border-b border-border",
              "text-secondary font-medium text-body-sm hover:bg-muted/5 transition-colors",
            )}
          >
            <Icon name="Phone" size="sm" />
            {phone}
          </a>
        )}

        {/* Pillar accordion sections */}
        <nav className="flex-1 py-2">
          {items.map((item) => {
            const isExpanded = expandedPillar === item.pillar;

            return (
              <div
                key={item.pillar}
                className="border-b border-border last:border-b-0"
              >
                {/* Accordion trigger */}
                <button
                  onClick={() => togglePillar(item.pillar)}
                  onKeyDown={(e) => handleAccordionKeyDown(e, item.pillar)}
                  className={cn(
                    "flex items-center justify-between w-full px-4 py-3 min-h-[44px]",
                    "text-body font-medium text-foreground hover:bg-muted/5 transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary",
                  )}
                  aria-expanded={isExpanded}
                >
                  <span className={cn(pillarTextMap[item.pillar])}>
                    {item.label}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size="sm"
                    className={cn(
                      "text-muted transition-transform duration-200",
                      isExpanded && "rotate-180",
                    )}
                  />
                </button>

                {/* Accordion content */}
                {isExpanded && (
                  <div className="pb-3 px-4">
                    {/* Pillar overview link */}
                    <Link
                      href={item.href}
                      variant="subtle"
                      className={cn(
                        "block py-2 pl-3 min-h-[44px] flex items-center text-body-sm font-medium",
                        pillarTextMap[item.pillar],
                      )}
                    >
                      {item.label} Overview
                    </Link>

                    {/* Cluster links */}
                    <ul className="space-y-0.5">
                      {item.clusters.map((cluster) => (
                        <li key={cluster.href}>
                          <Link
                            href={cluster.href}
                            variant="subtle"
                            className={cn(
                              "block py-2 pl-3 min-h-[44px] flex items-center",
                              "text-body-sm text-foreground hover:text-secondary",
                            )}
                          >
                            {cluster.title}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Featured link */}
                    {item.featuredLink && (
                      <Link
                        href={item.featuredLink.href}
                        variant="subtle"
                        className={cn(
                          "block mt-2 p-3 rounded-card text-body-sm",
                          "bg-muted/5 hover:bg-muted/10 transition-colors",
                          pillarTextMap[item.pillar],
                          "font-medium",
                        )}
                      >
                        {item.featuredLink.title}
                        <Icon
                          name="ArrowRight"
                          size="xs"
                          className="inline ml-1"
                        />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}

MobileNav.displayName = "MobileNav";

export { MobileNav };
