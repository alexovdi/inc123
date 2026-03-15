"use client";

import { cn } from "@/design-system/utils/cn";
import { Button, Icon, Link } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Pillar color maps
   ------------------------------------------------ */
const pillarTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface PackageShortcut {
  name: string;
  price: string;
  period: string;
  href: string;
  badge?: string;
}

export interface RelatedPage {
  title: string;
  href: string;
  current?: boolean;
}

export interface CrossPillarLinkItem {
  pillar: PillarName;
  title: string;
  href: string;
}

export interface ContentSidebarProps {
  /** Sidebar context: pillar overview or cluster detail */
  variant: "pillar" | "cluster";
  /** Optional package mini-card shortcut */
  packageShortcut?: PackageShortcut;
  /** Related / sibling cluster pages */
  relatedPages: RelatedPage[];
  /** Optional cross-pillar navigation link */
  crossPillarLink?: CrossPillarLinkItem;
  /** Optional phone number for direct contact */
  phoneNumber?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Package Shortcut sub-component (shared)
   ------------------------------------------------ */
function PackageShortcutCard({
  pkg,
  className,
}: {
  pkg: PackageShortcut;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-body-sm font-semibold text-foreground">
          {pkg.name}
        </h3>
        {pkg.badge && (
          <span className="inline-flex items-center px-2 py-0.5 text-caption font-medium rounded-pill bg-accent/15 text-accent">
            {pkg.badge}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-heading-sm font-mono font-semibold text-foreground">
          {pkg.price}
        </span>
        <span className="text-caption text-muted">/{pkg.period}</span>
      </div>
      <Button variant="cta" size="sm" fullWidth asChild>
        <a href={pkg.href}>Get Started</a>
      </Button>
    </div>
  );
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ContentSidebar({
  variant,
  packageShortcut,
  relatedPages,
  crossPillarLink,
  phoneNumber,
  className,
}: ContentSidebarProps) {
  return (
    <>
      {/* Mobile inline package shortcut — shown before main content on small screens */}
      {packageShortcut && (
        <div className="lg:hidden mb-6 bg-surface rounded-card border border-border p-4">
          <PackageShortcutCard pkg={packageShortcut} />
          {phoneNumber && (
            <>
              <hr className="border-border my-4" />
              <a
                href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
              >
                <Icon name="Phone" size="sm" />
                {phoneNumber}
              </a>
            </>
          )}
        </div>
      )}

      {/* Desktop sidebar — sticky, hidden on mobile */}
      <aside
        className={cn(
          "hidden lg:block sticky top-24 bg-surface rounded-card border border-border p-4 space-y-6",
          className,
        )}
      >
        {/* Package shortcut mini-card */}
        {packageShortcut && <PackageShortcutCard pkg={packageShortcut} />}

        {/* Divider after package shortcut */}
        {packageShortcut && relatedPages.length > 0 && (
          <hr className="border-border" />
        )}

        {/* Related pages / sibling clusters */}
        {relatedPages.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-caption font-semibold text-muted uppercase tracking-wide">
              {variant === "pillar" ? "Related Topics" : "In This Section"}
            </h4>
            <nav aria-label="Related pages">
              <ul className="space-y-1">
                {relatedPages.map((page, index) => (
                  <li key={index}>
                    <Link
                      href={page.href}
                      variant="nav"
                      className={cn(
                        "block px-3 py-1.5 rounded-button text-body-sm transition-colors",
                        page.current
                          ? "font-medium bg-muted/10 text-foreground"
                          : "text-muted hover:text-foreground hover:bg-muted/5",
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Cross-pillar link */}
        {crossPillarLink && (
          <>
            <hr className="border-border" />
            <div className="rounded-button pl-3 py-2">
              <Link
                href={crossPillarLink.href}
                variant="subtle"
                className={cn(
                  "text-body-sm font-medium inline-flex items-center gap-1.5",
                  pillarTextMap[crossPillarLink.pillar],
                )}
                icon={<Icon name="ArrowRight" size="xs" />}
                iconPosition="right"
              >
                {crossPillarLink.title}
              </Link>
            </div>
          </>
        )}

        {/* Phone number */}
        {phoneNumber && (
          <>
            <hr className="border-border" />
            <div className="flex items-center gap-2 text-body-sm text-muted">
              <Icon name="Phone" size="sm" className="text-muted" />
              <a
                href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`}
                className="hover:text-foreground transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

ContentSidebar.displayName = "ContentSidebar";

export { ContentSidebar };
