import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "@/design-system/primitives/Icon";
import { cn } from "@/design-system/utils/cn";

type Pillar = "privacy" | "asset" | "formation" | "compliance";

const PILLAR_LINKS: Array<{
  pillar: Pillar;
  title: string;
  description: string;
  href: string;
  icon: string;
}> = [
  {
    pillar: "privacy",
    title: "Business Privacy",
    description: "Anonymous LLCs, nominee services, ownership privacy.",
    href: "/privacy",
    icon: "EyeOff",
  },
  {
    pillar: "asset",
    title: "Asset Protection",
    description: "Charging orders, LLC structuring, creditor shielding.",
    href: "/asset-protection",
    icon: "Shield",
  },
  {
    pillar: "formation",
    title: "Business Incorporation",
    description: "Wyoming & Nevada LLC / Corporation formation.",
    href: "/formation",
    icon: "Building2",
  },
  {
    pillar: "compliance",
    title: "Compliance",
    description: "Registered agent, annual reports, corporate records.",
    href: "/compliance",
    icon: "ClipboardCheck",
  },
];

const POPULAR_PAGES: Array<{ title: string; href: string }> = [
  { title: "Compare All Packages", href: "/compare-packages" },
  { title: "Wyoming Gold — Private Incorporation", href: "/wyoming-gold" },
  { title: "Anonymous LLC Guide", href: "/anonymous-llc" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact Us", href: "/contact" },
];

const PILLAR_BORDER: Record<Pillar, string> = {
  privacy: "border-t-pillar-privacy",
  asset: "border-t-pillar-asset",
  formation: "border-t-pillar-formation",
  compliance: "border-t-pillar-compliance",
};

const PILLAR_ICON_BG: Record<Pillar, string> = {
  privacy: "bg-pillar-privacy/10 text-pillar-privacy",
  asset: "bg-pillar-asset/10 text-pillar-asset",
  formation: "bg-pillar-formation/10 text-pillar-formation",
  compliance: "bg-pillar-compliance/10 text-pillar-compliance",
};

export default function NotFound() {
  useEffect(() => {
    // Set page title + robots meta (noindex, follow)
    const previousTitle = document.title;
    document.title = "Page Not Found | Incorporate123";

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    let created = false;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
      created = true;
    }
    const previousContent = robots.content;
    robots.content = "noindex, follow";

    // GA4 404 hit tracking — scaffolded; no-op until GA4 is wired in
    type GtagWindow = Window & {
      gtag?: (...args: unknown[]) => void;
    };
    const w = window as GtagWindow;
    if (typeof w.gtag === "function") {
      w.gtag("event", "page_not_found", {
        requested_path: window.location.pathname + window.location.search,
      });
    }

    return () => {
      document.title = previousTitle;
      if (robots) {
        if (created) {
          robots.remove();
        } else {
          robots.content = previousContent;
        }
      }
    };
  }, []);

  return (
    <main className="bg-background px-container-x py-section-y">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
            <Icon name="SearchX" size="xl" className="text-primary-600" />
          </div>

          {/* H1 + Subheading */}
          <h1 className="font-display text-display font-bold text-foreground">
            This Page Doesn&rsquo;t Exist.
          </h1>
          <p className="mt-3 font-display text-heading-lg font-semibold text-muted">
            But We Can Help You Find What You Need.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-body text-muted">
            The page you&rsquo;re looking for may have moved during our recent
            site update. Choose from our most popular pages, or explore by
            pillar.
          </p>
        </div>

        {/* Pillar Grid */}
        <div className="mt-16">
          <h2 className="text-center font-display text-heading-lg font-bold text-foreground">
            Start With a Topic
          </h2>
          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLAR_LINKS.map((link) => (
              <li key={link.pillar}>
                <RouterLink
                  to={link.href}
                  className={cn(
                    "group flex h-full flex-col rounded-card border border-border border-t-4 bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-card-hover",
                    PILLAR_BORDER[link.pillar],
                  )}
                >
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                      PILLAR_ICON_BG[link.pillar],
                    )}
                  >
                    <Icon name={link.icon} size="lg" />
                  </div>
                  <h3 className="font-display text-heading-sm font-semibold text-foreground group-hover:text-secondary">
                    {link.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm leading-relaxed text-muted">
                    {link.description}
                  </p>
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Pages */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center font-display text-heading-lg font-bold text-foreground">
            Popular Pages
          </h2>
          <ul className="mt-6 divide-y divide-border rounded-card border border-border bg-surface">
            {POPULAR_PAGES.map((page) => (
              <li key={page.href}>
                <RouterLink
                  to={page.href}
                  className="flex items-center justify-between px-5 py-4 text-body font-medium text-foreground hover:bg-muted/5 hover:text-secondary"
                >
                  <span>{page.title}</span>
                  <Icon name="ArrowRight" size="sm" className="text-muted" />
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-card border border-border bg-surface p-8">
          <h2 className="text-center font-display text-heading-lg font-bold text-foreground">
            Still can&rsquo;t find what you&rsquo;re looking for?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-body text-muted">
            If you reached this page from a bookmark or external link, the page
            may have been moved. Let us know and we&rsquo;ll help you find it.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="tel:+18005530615"
              className="flex items-center justify-center gap-3 rounded-lg border-2 border-secondary bg-secondary px-6 py-4 font-semibold text-white shadow-lg hover:bg-secondary/90"
            >
              <Icon name="Phone" size="md" />
              Call 1-800-553-0615
            </a>
            <RouterLink
              to="/contact"
              className="flex items-center justify-center gap-3 rounded-lg border-2 border-border bg-surface px-6 py-4 font-semibold text-foreground hover:bg-muted/10"
            >
              <Icon name="Mail" size="md" />
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  );
}
