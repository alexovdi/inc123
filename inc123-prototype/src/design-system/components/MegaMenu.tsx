"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type KeyboardEvent,
} from "react";
import { cn } from "@/design-system/utils/cn";
import { Link, Icon } from "@/design-system/primitives";
import type { NavPillar } from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";

const pillarTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

const pillarSoftBgMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy-soft",
  asset: "bg-pillar-asset-soft",
  formation: "bg-pillar-formation-soft",
  compliance: "bg-pillar-compliance-soft",
};

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface MegaMenuProps {
  items: NavPillar[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function MegaMenu({ items, className }: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [focusedCluster, setFocusedCluster] = useState<number>(-1);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* -- Hover handlers with 100ms delay ------------- */
  const openPanel = useCallback((index: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveIndex(index);
      setFocusedCluster(-1);
    }, 100);
  }, []);

  const closePanel = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveIndex(null);
      setFocusedCluster(-1);
    }, 100);
  }, []);

  const cancelClose = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  }, []);

  /* -- Close on Escape globally -------------------- */
  useEffect(() => {
    function handleEscape(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape" && activeIndex !== null) {
        setActiveIndex(null);
        setFocusedCluster(-1);
        triggerRefs.current[activeIndex]?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [activeIndex]);

  /* -- Cleanup timer on unmount -------------------- */
  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  /* -- Keyboard navigation on triggers ------------- */
  const handleTriggerKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          setActiveIndex((prev) => (prev === index ? null : index));
          setFocusedCluster((prev) => (prev === -1 ? 0 : prev));
          break;
        case "ArrowRight":
          e.preventDefault();
          {
            const next = (index + 1) % items.length;
            triggerRefs.current[next]?.focus();
            setActiveIndex(next);
            setFocusedCluster(-1);
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          {
            const prev = (index - 1 + items.length) % items.length;
            triggerRefs.current[prev]?.focus();
            setActiveIndex(prev);
            setFocusedCluster(-1);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (activeIndex === index && items[index].clusters.length > 0) {
            setFocusedCluster(0);
          } else {
            setActiveIndex(index);
            setFocusedCluster(0);
          }
          break;
      }
    },
    [items, activeIndex],
  );

  /* -- Keyboard navigation inside panel ------------ */
  const handlePanelKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (activeIndex === null) return;
      const clusters = items[activeIndex].clusters;
      const featured = items[activeIndex].featuredLink;
      const totalItems = clusters.length + (featured ? 1 : 0);

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusedCluster((prev) => Math.min(prev + 1, totalItems - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedCluster((prev) => {
            const next = prev - 1;
            if (next < 0) {
              triggerRefs.current[activeIndex]?.focus();
              return -1;
            }
            return next;
          });
          break;
      }
    },
    [activeIndex, items],
  );

  /* -- Focus cluster links via ref ----------------- */
  const clusterLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (focusedCluster >= 0 && clusterLinkRefs.current[focusedCluster]) {
      clusterLinkRefs.current[focusedCluster]?.focus();
    }
  }, [focusedCluster]);

  /* -- Attach panel keyboard listener -------------- */
  useEffect(() => {
    if (activeIndex !== null) {
      document.addEventListener("keydown", handlePanelKeyDown);
      return () => document.removeEventListener("keydown", handlePanelKeyDown);
    }
  }, [activeIndex, handlePanelKeyDown]);

  return (
    <nav
      ref={menuRef}
      className={cn("relative hidden lg:flex items-center gap-1", className)}
      role="navigation"
      aria-label="Main navigation"
    >
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={item.pillar}
            className="relative"
            onMouseEnter={() => openPanel(index)}
            onMouseLeave={closePanel}
          >
            {/* Trigger */}
            <button
              ref={(el) => {
                triggerRefs.current[index] = el;
              }}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-2 text-body-sm font-medium rounded-button transition-colors",
                "text-foreground hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                isOpen && "text-secondary",
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
              role="menuitem"
              onClick={() => {
                setActiveIndex(isOpen ? null : index);
                setFocusedCluster(-1);
              }}
              onKeyDown={(e) => handleTriggerKeyDown(e, index)}
            >
              {item.label}
              <Icon
                name="ChevronDown"
                size="xs"
                className={cn(
                  "transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            {/* Panel */}
            {isOpen && (
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50",
                  "min-w-[28rem]",
                )}
                onMouseEnter={cancelClose}
                onMouseLeave={closePanel}
                role="menu"
                aria-label={`${item.label} submenu`}
              >
                <div className="bg-surface rounded-card shadow-dropdown border border-border p-5">
                  {/* Pillar header */}
                  <div className="mb-4">
                    <Link
                      href={item.href}
                      variant="nav"
                      className={cn(
                        "text-heading-sm font-display font-semibold",
                        pillarTextMap[item.pillar],
                      )}
                    >
                      {item.label}
                    </Link>
                    <p className="text-body-sm text-muted mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Cluster links */}
                  <ul className="space-y-1">
                    {item.clusters.map((cluster, ci) => (
                      <li key={cluster.href}>
                        <a
                          ref={(el) => {
                            clusterLinkRefs.current[ci] = el;
                          }}
                          href={cluster.href}
                          role="menuitem"
                          className={cn(
                            "block px-3 py-2 rounded-button transition-colors",
                            "text-body-sm text-foreground hover:bg-muted/5",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                          )}
                        >
                          <span className="font-medium">{cluster.title}</span>
                          {cluster.description && (
                            <span className="block text-caption text-muted mt-0.5">
                              {cluster.description}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Featured link */}
                  {item.featuredLink && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        ref={(el) => {
                          clusterLinkRefs.current[item.clusters.length] = el;
                        }}
                        href={item.featuredLink.href}
                        role="menuitem"
                        className={cn(
                          "block p-3 rounded-card transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                          pillarSoftBgMap[item.pillar],
                          "hover:opacity-90",
                        )}
                      >
                        <span
                          className={cn(
                            "font-medium text-body-sm",
                            pillarTextMap[item.pillar],
                          )}
                        >
                          {item.featuredLink.title}
                        </span>
                        <span className="block text-caption text-muted mt-0.5">
                          {item.featuredLink.description}
                        </span>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 text-caption font-medium mt-1",
                            pillarTextMap[item.pillar],
                          )}
                        >
                          Learn more
                          <Icon name="ArrowRight" size="xs" />
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

MegaMenu.displayName = "MegaMenu";

export { MegaMenu };
