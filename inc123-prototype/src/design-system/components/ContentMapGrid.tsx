"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import {
  pillarTextMap,
  pillarBgMap,
  pillarSoftBgMap,
  pillarShortLabelMap,
  pillarIconMap,
} from "@/design-system/utils/pillarMaps";
import { Icon } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

const pillarOrder: PillarName[] = [
  "privacy",
  "asset",
  "formation",
  "compliance",
];

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface ContentMapGridProps {
  /** Content map organized by pillar */
  contentMap: Record<PillarName, Array<{ title: string; href: string }>>;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ContentMapGrid({ contentMap, className }: ContentMapGridProps) {
  const [openPillars, setOpenPillars] = useState<Set<PillarName>>(new Set());

  const togglePillar = (pillar: PillarName) => {
    setOpenPillars((prev) => {
      const next = new Set(prev);
      if (next.has(pillar)) {
        next.delete(pillar);
      } else {
        next.add(pillar);
      }
      return next;
    });
  };

  return (
    <div className={cn(className)}>
      {/* Desktop: 4-column grid */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
        {pillarOrder.map((pillar) => {
          const links = contentMap[pillar] || [];
          return (
            <div key={pillar} className="flex flex-col">
              {/* Pillar header */}
              <div
                className={cn(
                  "flex items-center gap-2 rounded-t-card px-4 py-3",
                  pillarBgMap[pillar],
                )}
              >
                <Icon
                  name={pillarIconMap[pillar]}
                  size="sm"
                  className="text-white"
                />
                <span className="text-body-sm font-semibold text-white">
                  {pillarShortLabelMap[pillar]}
                </span>
              </div>

              {/* Links */}
              <div className="flex-1 rounded-b-card border border-t-0 border-border bg-surface">
                <ul className="p-4 space-y-2">
                  {links.map((link, idx) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={cn(
                          "text-body-sm transition-colors hover:underline",
                          idx === 0
                            ? cn("font-semibold", pillarTextMap[pillar])
                            : "text-foreground hover:text-secondary",
                        )}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: accordion per pillar */}
      <div className="space-y-3 lg:hidden">
        {pillarOrder.map((pillar) => {
          const links = contentMap[pillar] || [];
          const isOpen = openPillars.has(pillar);

          return (
            <div
              key={pillar}
              className="rounded-card border border-border bg-surface overflow-hidden"
            >
              {/* Trigger */}
              <button
                type="button"
                onClick={() => togglePillar(pillar)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors",
                  pillarSoftBgMap[pillar],
                )}
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-2">
                  <Icon
                    name={pillarIconMap[pillar]}
                    size="sm"
                    className={pillarTextMap[pillar]}
                  />
                  <span
                    className={cn(
                      "text-body font-semibold",
                      pillarTextMap[pillar],
                    )}
                  >
                    {pillarShortLabelMap[pillar]}
                  </span>
                  <span className="text-caption text-muted">
                    ({links.length})
                  </span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* Panel */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200 ease-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <ul className="px-4 py-3 space-y-2">
                  {links.map((link, idx) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={cn(
                          "text-body-sm transition-colors hover:underline",
                          idx === 0
                            ? cn("font-semibold", pillarTextMap[pillar])
                            : "text-foreground hover:text-secondary",
                        )}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ContentMapGrid.displayName = "ContentMapGrid";

export { ContentMapGrid };
