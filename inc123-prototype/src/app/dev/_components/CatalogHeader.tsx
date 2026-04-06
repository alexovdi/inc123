import { Link as RouterLink, useLocation } from "react-router-dom";
import { cn } from "@/design-system/utils/cn";

const navLinks = [
  { label: "Tokens", href: "/dev" },
  { label: "Colors", href: "/dev/colors" },
  { label: "Typography", href: "/dev/typography" },
  { label: "All Components", href: "/dev/components" },
  { label: "Site Preview", href: "/" },
];

export function CatalogHeader() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-surface px-4">
      <div className="flex items-center gap-3">
        <RouterLink
          to="/dev"
          className="font-display text-heading-sm font-semibold text-foreground hover:text-secondary transition-colors"
        >
          Inc123 Design System
        </RouterLink>
        <span className="rounded-pill bg-secondary/10 px-2 py-0.5 text-caption font-medium text-secondary">
          v0.1
        </span>
      </div>

      <nav className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/dev"
              ? pathname === "/dev"
              : pathname?.startsWith(link.href) && link.href !== "/";

          return (
            <RouterLink
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-button px-3 py-1.5 text-body-sm font-medium transition-colors",
                isActive
                  ? "bg-secondary/10 text-secondary"
                  : "text-muted hover:text-foreground hover:bg-muted/10",
              )}
            >
              {link.label}
            </RouterLink>
          );
        })}
      </nav>
    </header>
  );
}
