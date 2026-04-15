import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface PhilosophyCard {
  title: string;
  description: string;
  /** Lucide icon name in PascalCase */
  icon: string;
}

export interface PhilosophyCardsProps {
  /** Array of 3 philosophy cards */
  cards: PhilosophyCard[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function PhilosophyCards({ cards, className }: PhilosophyCardsProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-heading-lg text-foreground">
            What Makes Us Different
          </h2>
        </div>

        {/* Cards grid — adapts to 3 or 4 cards */}
        <div
          className={cn(
            "grid grid-cols-1 gap-6",
            cards.length === 4
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-3",
          )}
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-card-hover"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                <Icon name={card.icon} size="lg" className="text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-heading-sm text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-body text-muted leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

PhilosophyCards.displayName = "PhilosophyCards";

export { PhilosophyCards };
