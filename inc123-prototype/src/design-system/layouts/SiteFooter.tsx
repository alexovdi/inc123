import NextLink from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterCompany {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface SiteFooterProps {
  pillars: FooterColumn[];
  packages: { label: string; href: string }[];
  utility: { label: string; href: string }[];
  legal: { label: string; href: string }[];
  company: FooterCompany;
  className?: string;
}

export function SiteFooter({
  pillars,
  packages,
  utility,
  legal,
  company,
  className,
}: SiteFooterProps) {
  return (
    <footer
      className={cn("bg-footer-dark text-white", className)}
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-wide px-container-x py-section-y-sm">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Pillar Columns */}
          {pillars.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 font-display text-body-sm font-semibold text-white/90">
                {col.title}
              </h3>
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
            </div>
          ))}

          {/* Packages Column */}
          <div>
            <h3 className="mb-3 font-display text-body-sm font-semibold text-white/90">
              Packages
            </h3>
            <ul className="space-y-2">
              {packages.map((link) => (
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

          {/* Company Info & Utility */}
          <div>
            <h3 className="mb-3 font-display text-body-sm font-semibold text-white/90">
              Company
            </h3>
            <ul className="mb-4 space-y-2">
              {utility.map((link) => (
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

            <div className="space-y-2 text-caption text-white/60">
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-wide flex-col items-center justify-between gap-4 px-container-x py-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="font-display text-body-sm font-bold text-white/80">
              Incorporate123
            </span>
            <span className="text-caption text-white/40">
              Trusted Since 2000 | 25+ Years
            </span>
          </div>

          <div className="flex items-center gap-4 text-caption text-white/40">
            {legal.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="hover:text-white/60 transition-colors"
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
