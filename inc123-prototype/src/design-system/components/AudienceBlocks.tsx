import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface AudienceItem {
  /** Lucide icon name */
  icon: string;
  /** Audience persona title */
  title: string;
  /** 2-3 sentence description */
  description: string;
}

export interface AudienceBlocksProps {
  /** Section heading */
  heading?: string;
  /** Audience personas */
  audiences: AudienceItem[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function AudienceBlocks({
  heading = "Who Needs This?",
  audiences,
  className,
}: AudienceBlocksProps) {
  return (
    <section className={cn(className)}>
      <h2 className="text-heading font-display font-semibold text-foreground mb-6">
        {heading}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="bg-surface rounded-card border border-border p-6"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-button bg-secondary/10">
              <Icon name={audience.icon} size="md" className="text-secondary" />
            </div>
            <h3 className="text-heading-sm font-display font-semibold text-foreground mb-2">
              {audience.title}
            </h3>
            <p className="text-body text-muted leading-relaxed">
              {audience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

AudienceBlocks.displayName = "AudienceBlocks";

export { AudienceBlocks };
