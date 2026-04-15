import { cn } from "@/design-system/utils/cn";

export interface AboutStoryProps {
  heading: string;
  paragraphs: string[];
  className?: string;
}

function AboutStory({ heading, paragraphs, className }: AboutStoryProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-narrow">
          <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary">
            Since 2000
          </p>
          <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
            {heading}
          </h2>
          <div className="mt-6 space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

AboutStory.displayName = "AboutStory";

export { AboutStory };
