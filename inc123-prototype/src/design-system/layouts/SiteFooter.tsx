import NextLink from "next/link";
import { Phone, Mail, MapPin, Bitcoin } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  heading: string;
  links: FooterLink[];
}

interface FooterColumn {
  title: string;
  links?: FooterLink[];
  sections?: FooterSection[];
}

interface FooterCompany {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface SiteFooterProps {
  columns: FooterColumn[];
  legal: FooterLink[];
  company: FooterCompany;
  className?: string;
}

export function SiteFooter({
  columns,
  legal,
  company,
  className,
}: SiteFooterProps) {
  return (
    <footer className={cn("bg-footer-dark text-white", className)}>
      {/* Main Footer — 4 Columns */}
      <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-display text-body-sm font-semibold text-white/90">
                {col.title}
              </h3>

              {/* Simple link list (Col 1: Privacy) */}
              {col.links && (
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <NextLink
                        href={link.href}
                        className="text-caption text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              )}

              {/* Multi-section columns (Cols 2-4) */}
              {col.sections && (
                <div className="space-y-5">
                  {col.sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="mb-2 text-caption font-semibold uppercase tracking-wider text-white/50">
                        {section.heading}
                      </h4>
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <NextLink
                              href={link.href}
                              className="text-caption text-white/60 transition-colors hover:text-white"
                            >
                              {link.label}
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Row */}
        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-caption text-white/60">
          <a
            href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            {company.email}
          </a>
          <p className="flex items-start gap-1.5">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {company.address}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-wide flex-col items-center justify-between gap-4 px-container-x py-6 md:flex-row">
          {/* Left: Brand + Trusted */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <span className="font-display text-body-sm font-bold text-white/80">
              Incorporate123
            </span>
            <span className="text-caption text-white/40">
              Trusted Since 2000 | 25+ Years
            </span>
          </div>

          {/* Center: Crypto note */}
          <div className="flex items-center gap-1.5 text-caption text-white/40">
            <Bitcoin className="h-3.5 w-3.5" />
            <span>We accept cryptocurrency for maximum privacy</span>
          </div>

          {/* Right: Legal + Copyright */}
          <div className="flex items-center gap-4 text-caption text-white/40">
            {legal.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white/60"
              >
                {link.label}
              </NextLink>
            ))}
            <span>
              &copy; {new Date().getFullYear()} {company.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
