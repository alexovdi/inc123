import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import type { ClusterSection } from "@/lib/types";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface LongFormContentProps {
  /** Array of content sections to render */
  sections: ClusterSection[];
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Section Renderers
   ------------------------------------------------ */

/** Text section: heading + prose paragraph */
function TextSection({ section }: { section: ClusterSection }) {
  return (
    <div>
      <h2 className="text-heading font-display font-semibold text-foreground mb-4">
        {section.title}
      </h2>
      <div className="prose prose-muted max-w-none">
        <p className="text-body text-muted leading-relaxed">
          {section.content}
        </p>
      </div>
    </div>
  );
}

/** Comparison section: highlighted callout box with comparison context */
function ComparisonSection({ section }: { section: ClusterSection }) {
  return (
    <div>
      <h2 className="text-heading font-display font-semibold text-foreground mb-4">
        {section.title}
      </h2>
      <div className="rounded-card border border-secondary/20 bg-primary-50 p-6">
        <p className="text-body text-muted leading-relaxed">
          {section.content}
        </p>
      </div>
    </div>
  );
}

/** Audience section: icon cards showing who benefits */
function AudienceSection({ section }: { section: ClusterSection }) {
  return (
    <div>
      <h2 className="text-heading font-display font-semibold text-foreground mb-2">
        {section.title}
      </h2>
      {section.content && (
        <p className="text-body text-muted mb-6">{section.content}</p>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {section.items?.map((item, index) => (
          <div
            key={index}
            className="bg-surface rounded-card border border-border p-5"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-button bg-secondary/10">
              <Icon
                name={item.icon ?? "User"}
                size="md"
                className="text-secondary"
              />
            </div>
            <h3 className="text-heading-sm font-display font-semibold text-foreground mb-1.5">
              {item.title}
            </h3>
            <p className="text-body-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Differentiator section: items with icons highlighting advantages */
function DifferentiatorSection({ section }: { section: ClusterSection }) {
  return (
    <div>
      <h2 className="text-heading font-display font-semibold text-foreground mb-2">
        {section.title}
      </h2>
      {section.content && (
        <p className="text-body text-muted mb-6">{section.content}</p>
      )}
      <div className="space-y-4">
        {section.items?.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-card border border-border bg-surface p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-button bg-success/10">
              <Icon
                name={item.icon ?? "CheckCircle"}
                size="md"
                className="text-success"
              />
            </div>
            <div>
              <h3 className="text-body font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-body-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------
   Section type → renderer map
   ------------------------------------------------ */
const sectionRenderers: Record<
  ClusterSection["type"],
  React.FC<{ section: ClusterSection }>
> = {
  text: TextSection,
  comparison: ComparisonSection,
  audience: AudienceSection,
  differentiator: DifferentiatorSection,
};

/* ------------------------------------------------
   Main Component (Server Component — no "use client")
   ------------------------------------------------ */
function LongFormContent({ sections, className }: LongFormContentProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {sections.map((section) => {
        const Renderer = sectionRenderers[section.type];
        return (
          <section key={section.id} id={section.id}>
            <Renderer section={section} />
          </section>
        );
      })}
    </div>
  );
}

LongFormContent.displayName = "LongFormContent";

export { LongFormContent };
