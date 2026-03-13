import { cn } from "@/design-system/utils/cn";
import { Link } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

/* -------------------------------------------------- */
/*  Pillar separator color map                         */
/* -------------------------------------------------- */
const pillarSeparatorMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Optional pillar — colors the separators */
  pillar?: PillarName;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function Breadcrumbs({ items, pillar, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const lastIndex = items.length - 1;

  /**
   * For mobile: collapse middle items when path > 3 levels.
   * Show first, ellipsis, second-to-last, and last.
   */
  const shouldCollapse = items.length > 3;

  return (
    <nav aria-label="Breadcrumb" className={cn("py-3", className)}>
      <ol className="flex flex-wrap items-center text-body-sm">
        {items.map((item, index) => {
          const isLast = index === lastIndex;

          /* -- Mobile collapsing logic --------------- */
          const isCollapsedOnMobile =
            shouldCollapse && index > 0 && index < lastIndex - 1;
          const isEllipsis = shouldCollapse && index === 1;

          return (
            <li
              key={item.href}
              className={cn(
                "flex items-center",
                isCollapsedOnMobile && !isEllipsis && "hidden md:flex"
              )}
            >
              {/* Separator before each item (except the first) */}
              {index > 0 && (
                <span
                  role="presentation"
                  aria-hidden="true"
                  className={cn(
                    "mx-2 select-none",
                    pillar ? pillarSeparatorMap[pillar] : "text-muted",
                    /* On mobile, hide separator for collapsed items */
                    isCollapsedOnMobile && !isEllipsis && "hidden md:inline"
                  )}
                >
                  /
                </span>
              )}

              {/* Ellipsis for collapsed mobile items */}
              {isEllipsis && shouldCollapse && (
                <span
                  className="md:hidden text-muted select-none"
                  aria-hidden="true"
                >
                  ...
                  <span
                    className={cn(
                      "mx-2 select-none",
                      pillar ? pillarSeparatorMap[pillar] : "text-muted"
                    )}
                  >
                    /
                  </span>
                </span>
              )}

              {/* Breadcrumb item */}
              {isLast ? (
                <span
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  variant="breadcrumb"
                  className={cn(
                    isCollapsedOnMobile && !isEllipsis && "hidden md:inline-flex"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumbs.displayName = "Breadcrumbs";

export { Breadcrumbs };
