import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/design-system/utils/cn";
import { Badge } from "@/design-system/primitives/Badge";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
export interface AlsoConsiderItem {
  name: string;
  price: string;
  renewal: string;
  description: string;
  href: string;
  badge?: string;
}

export interface AlsoConsiderProps {
  items: AlsoConsiderItem[];
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function AlsoConsider({ items, className }: AlsoConsiderProps) {
  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:grid-cols-3 items-stretch",
        className,
      )}
    >
      {items.map((item) => (
        <RouterLink
          key={item.href}
          to={item.href}
          className="group flex h-full flex-col rounded-card-lg border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-card-hover hover:border-secondary/50"
        >
          {item.badge && (
            <Badge variant="info" size="sm" className="self-start mb-3">
              {item.badge}
            </Badge>
          )}

          <h3 className="font-display text-heading-sm font-semibold text-foreground">
            {item.name}
          </h3>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-mono text-body-lg font-bold text-foreground">
              {item.price}
            </span>
            <span className="font-mono text-caption text-muted">
              {item.renewal}
            </span>
          </div>

          <p className="mt-3 flex-1 text-body-sm text-muted leading-relaxed">
            {item.description}
          </p>

          <span className="mt-5 inline-flex items-center gap-1 text-body-sm font-medium text-secondary group-hover:gap-2 transition-all">
            View package
            <Icon name="ArrowRight" size="sm" />
          </span>
        </RouterLink>
      ))}
    </div>
  );
}

AlsoConsider.displayName = "AlsoConsider";

export { AlsoConsider };
