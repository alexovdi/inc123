import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface QuickLink {
  /** Lucide icon name in PascalCase */
  icon: string;
  /** Card title */
  title: string;
  /** Short description */
  description: string;
  /** Navigation target */
  href: string;
}

export interface QuickLinkCardsProps {
  /** Array of quick link items */
  links: QuickLink[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function QuickLinkCards({ links, className }: QuickLinkCardsProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-heading-lg text-foreground">
            You Might Also Find These Helpful
          </h2>
        </div>

        {/* Cards grid — 2x2 on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group rounded-card border border-border bg-surface p-5 flex items-start gap-4 transition-all hover:shadow-card-hover hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 group-hover:bg-secondary/15 transition-colors">
                <Icon name={link.icon} size="md" className="text-secondary" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-body-lg text-foreground group-hover:text-secondary transition-colors">
                  {link.title}
                </h3>
                <p className="mt-1 text-body-sm text-muted line-clamp-2">
                  {link.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 flex items-center self-center">
                <Icon
                  name="ArrowRight"
                  size="md"
                  className="text-muted group-hover:text-secondary transition-colors"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

QuickLinkCards.displayName = "QuickLinkCards";

export { QuickLinkCards };
