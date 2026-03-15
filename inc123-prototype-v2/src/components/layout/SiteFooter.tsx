import { cn } from "@/lib/utils";
import { footerNavigation } from "@/data/navigation";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   SiteFooter — Multi-column footer with pillar nav, packages, and legal
   ═══════════════════════════════════════════════════════════════════════════ */

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  const { pillars, packages, utility, legal, company } = footerNavigation;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-[var(--color-bg-accent)] text-[var(--color-text-on-dark)]",
        className,
      )}
    >
      {/* Main footer content */}
      <div className="max-w-content mx-auto px-container-x py-section-y">
        {/* Top row: Logo + tagline */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-[length:var(--font-size-h3)] font-bold text-[var(--color-accent)]">
                Incorporate123
              </span>
            </Link>
            <p className="mt-2 max-w-md text-[var(--color-text-on-dark-muted)] text-[length:var(--font-size-small)]">
              Privacy, Asset Protection &amp; Business Formation Specialists.
              Serving entrepreneurs since 2001.
            </p>
          </div>

          {/* Company contact */}
          <div className="text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)]">
            <p>{company.address}</p>
            <p className="mt-1">
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)]"
              >
                {company.phone}
              </a>
              {" | "}
              <a
                href={`mailto:${company.email}`}
                className="text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)]"
              >
                {company.email}
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-[var(--color-border-dark)]" />

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Pillar sections (4 columns) */}
          {pillars.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-[length:var(--font-size-small)] font-semibold tracking-caps text-[var(--color-text-on-dark)]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Packages column */}
          <div>
            <h3 className="mb-4 text-[length:var(--font-size-small)] font-semibold tracking-caps text-[var(--color-text-on-dark)]">
              Packages
            </h3>
            <ul className="space-y-2">
              {packages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility + Legal column */}
          <div>
            <h3 className="mb-4 text-[length:var(--font-size-small)] font-semibold tracking-caps text-[var(--color-text-on-dark)]">
              Company
            </h3>
            <ul className="space-y-2">
              {utility.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--font-size-small)] text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border-dark)]">
        <div className="max-w-content mx-auto flex flex-col items-center justify-between gap-4 px-container-x py-6 sm:flex-row">
          <p className="text-[length:var(--font-size-caption)] text-[var(--color-text-on-dark-muted)]">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex gap-6">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--font-size-caption)] text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

SiteFooter.displayName = "SiteFooter";
