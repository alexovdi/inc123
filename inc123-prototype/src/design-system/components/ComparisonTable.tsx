"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { cn } from "@/design-system/utils/cn";
import { Badge, Tooltip, Icon } from "@/design-system/primitives";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface ComparisonTableColumn {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  cta?: { label: string; href: string };
}

export interface ComparisonTableRow {
  label: string;
  tooltip?: string;
  values: Record<string, string | ReactNode>;
}

export interface ComparisonTableProps {
  /** Columns to compare */
  columns: ComparisonTableColumn[];
  /** Feature rows */
  rows: ComparisonTableRow[];
  /** Column id to highlight */
  highlightColumn?: string;
  /** Sticky header on scroll */
  stickyHeader?: boolean;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ComparisonTable({
  columns,
  rows,
  highlightColumn,
  stickyHeader = true,
  className,
}: ComparisonTableProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  /** Whether a column should be visually emphasised (highlight prop OR hover) */
  const isEmphasised = (colId: string) =>
    highlightColumn === colId || hoveredColumn === colId;

  return (
    <div className={cn("relative w-full", className)}>
      {/* Left fade indicator */}
      {canScrollLeft && (
        <div
          className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Right fade indicator */}
      {canScrollRight && (
        <div
          className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden"
          aria-hidden="true"
        />
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
      >
        <table className="w-full border-collapse min-w-[600px]">
          {/* Header */}
          <thead>
            <tr
              className={cn(stickyHeader && "sticky top-0 z-20 bg-background")}
            >
              {/* Label column header */}
              <th
                scope="col"
                className="sticky left-0 z-30 bg-background text-left p-4 font-display text-body-sm font-semibold text-muted border-b border-border min-w-[180px]"
              >
                Feature
              </th>

              {/* Data column headers */}
              {columns.map((col) => (
                <th
                  key={col.id}
                  scope="col"
                  className={cn(
                    "text-center p-4 border-b border-border min-w-[150px] transition-colors duration-150",
                    isEmphasised(col.id) &&
                      "bg-secondary/5 border-b-secondary/20",
                  )}
                  onMouseEnter={() => setHoveredColumn(col.id)}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  <div className="flex flex-col items-center gap-1">
                    {col.badge && (
                      <Badge variant="info" size="sm">
                        {col.badge}
                      </Badge>
                    )}
                    <span className="font-display text-body-lg font-semibold text-foreground">
                      {col.title}
                    </span>
                    {col.subtitle && (
                      <span className="text-caption text-muted">
                        {col.subtitle}
                      </span>
                    )}
                    {col.cta && (
                      <a
                        href={col.cta.href}
                        className="mt-2 inline-flex items-center gap-1 text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                      >
                        {col.cta.label}
                        <Icon name="ArrowRight" size="xs" />
                      </a>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={cn(
                  ri % 2 === 0 ? "bg-primary/[0.02]" : "bg-transparent",
                )}
              >
                {/* Row label (sticky on mobile) */}
                <td
                  className={cn(
                    "sticky left-0 z-10 p-4 text-body-sm font-medium text-foreground border-b border-border/50",
                    ri % 2 === 0 ? "bg-primary/[0.02]" : "bg-background",
                  )}
                >
                  {row.tooltip ? (
                    <Tooltip
                      trigger={
                        <span className="inline-flex items-center gap-1.5 cursor-help border-b border-dashed border-muted/50">
                          {row.label}
                          <Icon name="Info" size="xs" className="text-muted" />
                        </span>
                      }
                      content={row.tooltip}
                      position="top"
                      size="sm"
                    />
                  ) : (
                    row.label
                  )}
                </td>

                {/* Data cells */}
                {columns.map((col) => (
                  <td
                    key={col.id}
                    className={cn(
                      "text-center p-4 text-body-sm text-foreground border-b border-border/50 transition-colors duration-150",
                      isEmphasised(col.id) && "bg-secondary/5",
                    )}
                    onMouseEnter={() => setHoveredColumn(col.id)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    {row.values[col.id] ?? "\u2014"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

ComparisonTable.displayName = "ComparisonTable";

export { ComparisonTable };
