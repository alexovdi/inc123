import Link from "next/link";
import { cn } from "@/lib/utils";

interface SidebarProps {
  relatedPackages?: string[];
  pillar?: string;
  phone?: string;
  className?: string;
}

const PACKAGE_META: Record<
  string,
  { name: string; price: string; href: string }
> = {
  "wyoming-gold": {
    name: "Wyoming Gold LLC",
    price: "$1,275",
    href: "/packages/wyoming-gold",
  },
  "wyoming-silver": {
    name: "Wyoming Silver LLC",
    price: "$575",
    href: "/packages/wyoming-silver",
  },
  "nevada-gold": {
    name: "Nevada Gold LLC",
    price: "$1,800",
    href: "/packages/nevada-gold",
  },
  "nevada-silver": {
    name: "Nevada Silver LLC",
    price: "$875",
    href: "/packages/nevada-silver",
  },
  "nevada-bronze": {
    name: "Nevada Bronze LLC",
    price: "$625",
    href: "/packages/nevada-bronze",
  },
  "california-private": {
    name: "California Private LLC",
    price: "$1,475",
    href: "/packages/california-private",
  },
  "florida-private": {
    name: "Florida Private LLC",
    price: "$1,475",
    href: "/packages/florida-private",
  },
  "shelf-company": {
    name: "Shelf Company",
    price: "From $3,500",
    href: "/packages/shelf-company",
  },
};

function Sidebar({
  relatedPackages,
  phone = "(775) 313-4155",
  className,
}: SidebarProps) {
  const primaryPkg = relatedPackages?.[0];
  const pkg = primaryPkg ? PACKAGE_META[primaryPkg] : null;

  return (
    <aside className={cn("sticky top-24 flex flex-col gap-6", className)}>
      {/* Recommended Package Card */}
      {pkg && (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Recommended Package
          </p>
          <h4 className="mt-2 font-[var(--font-display)] text-lg font-bold">
            {pkg.name}
          </h4>
          <p className="mt-1 text-2xl font-bold text-[var(--color-text-primary)]">
            {pkg.price}
          </p>
          <Link
            href={pkg.href}
            className="mt-4 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-md"
          >
            View Package &rarr;
          </Link>

          {/* Additional packages */}
          {relatedPackages && relatedPackages.length > 1 && (
            <div className="mt-4 border-t border-[var(--color-border)] pt-4">
              <p className="text-xs font-medium text-[var(--color-text-secondary)]">
                Also consider:
              </p>
              <ul className="mt-2 space-y-1.5">
                {relatedPackages.slice(1).map((pkgId) => {
                  const alt = PACKAGE_META[pkgId];
                  if (!alt) return null;
                  return (
                    <li key={pkgId}>
                      <Link
                        href={alt.href}
                        className="text-sm text-[var(--color-accent)] underline underline-offset-2 transition-colors hover:text-[var(--color-accent-hover)]"
                      >
                        {alt.name} — {alt.price}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Phone Card */}
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
          Questions?
        </p>
        <p className="mt-2 font-[var(--font-display)] text-lg font-bold">
          Talk to a Specialist
        </p>
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className="mt-3 flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-white"
        >
          {phone}
        </a>
        <p className="mt-2 text-center text-xs text-[var(--color-text-secondary)]">
          A real person answers at our Reno, NV office.
        </p>
      </div>
    </aside>
  );
}

Sidebar.displayName = "Sidebar";

export { Sidebar };
export type { SidebarProps };
