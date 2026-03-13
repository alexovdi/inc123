import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface RelatedGuide {
  title: string;
  description: string;
  href: string;
}

export interface RelatedGuidesProps {
  /** Array of guide links */
  guides: RelatedGuide[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component (Server)
   ------------------------------------------------ */
function RelatedGuides({ guides, className }: RelatedGuidesProps) {
  if (!guides.length) return null;

  return (
    <div
      className={cn(
        "rounded-card border border-border bg-primary-50/50 p-4 sm:p-5",
        className
      )}
    >
      <p className="text-body-sm font-semibold text-foreground mb-3">
        Related Guides
      </p>
      <div className="flex flex-col gap-2">
        {guides.map((guide, index) => (
          <a
            key={index}
            href={guide.href}
            className={cn(
              "group flex items-start gap-3 rounded-button p-2 -mx-2",
              "transition-colors hover:bg-surface"
            )}
          >
            <span className="mt-0.5 shrink-0 text-secondary transition-transform duration-200 group-hover:translate-x-0.5">
              <Icon name="ArrowRight" size="sm" />
            </span>
            <span className="flex flex-col">
              <span className="text-body-sm font-medium text-secondary group-hover:underline">
                {guide.title}
              </span>
              <span className="text-caption text-muted">
                {guide.description}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

RelatedGuides.displayName = "RelatedGuides";

export { RelatedGuides };
