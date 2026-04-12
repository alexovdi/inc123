import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import type { ClusterSection } from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface LongFormContentProps {
  /** Array of content sections to render */
  sections: ClusterSection[];
  /** Pillar for color-aware styling */
  pillar?: PillarName;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Pillar-aware icon background maps
   ------------------------------------------------ */
const pillarIconBgMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy/[0.08] group-hover:bg-pillar-privacy/[0.14]",
  asset: "bg-pillar-asset/[0.08] group-hover:bg-pillar-asset/[0.14]",
  formation:
    "bg-pillar-formation/[0.08] group-hover:bg-pillar-formation/[0.14]",
  compliance:
    "bg-pillar-compliance/[0.08] group-hover:bg-pillar-compliance/[0.14]",
};

const pillarIconTextMap: Record<PillarName, string> = {
  privacy: "text-pillar-privacy",
  asset: "text-pillar-asset",
  formation: "text-pillar-formation",
  compliance: "text-pillar-compliance",
};

const pillarCalloutMap: Record<PillarName, string> = {
  privacy: "border-pillar-privacy/20 bg-pillar-privacy/[0.04]",
  asset: "border-pillar-asset/20 bg-pillar-asset/[0.04]",
  formation: "border-pillar-formation/20 bg-pillar-formation/[0.04]",
  compliance: "border-pillar-compliance/20 bg-pillar-compliance/[0.04]",
};

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
function ComparisonSection({
  section,
  pillar,
}: {
  section: ClusterSection;
  pillar?: PillarName;
}) {
  return (
    <div>
      <h2 className="text-heading font-display font-semibold text-foreground mb-4">
        {section.title}
      </h2>
      <div
        className={cn(
          "rounded-card border p-6",
          pillar
            ? pillarCalloutMap[pillar]
            : "border-secondary/20 bg-primary-50",
        )}
      >
        <p className="text-body text-muted leading-relaxed">
          {section.content}
        </p>
      </div>
    </div>
  );
}

/** Audience section: icon cards showing who benefits */
function AudienceSection({
  section,
  pillar,
}: {
  section: ClusterSection;
  pillar?: PillarName;
}) {
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
            className="group bg-surface rounded-card border border-border p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <div
              className={cn(
                "mb-3 flex h-10 w-10 items-center justify-center rounded-button transition-colors",
                pillar
                  ? pillarIconBgMap[pillar]
                  : "bg-secondary/10 group-hover:bg-secondary/[0.18]",
              )}
            >
              <Icon
                name={item.icon ?? "User"}
                size="md"
                className={
                  pillar ? pillarIconTextMap[pillar] : "text-secondary"
                }
              />
            </div>
            <h3 className="text-heading-sm font-display font-semibold text-foreground mb-1.5">
              {item.title}
            </h3>
            <p className="text-body text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Differentiator section: items with icons highlighting advantages */
function DifferentiatorSection({
  section,
  pillar,
}: {
  section: ClusterSection;
  pillar?: PillarName;
}) {
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
            className="group flex gap-4 rounded-card border border-border bg-surface p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-button transition-colors",
                pillar
                  ? pillarIconBgMap[pillar]
                  : "bg-success/10 group-hover:bg-success/[0.18]",
              )}
            >
              <Icon
                name={item.icon ?? "CheckCircle"}
                size="md"
                className={pillar ? pillarIconTextMap[pillar] : "text-success"}
              />
            </div>
            <div>
              <h3 className="text-body font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-body text-muted leading-relaxed">
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
type SectionRenderer = React.FC<{
  section: ClusterSection;
  pillar?: PillarName;
}>;

const sectionRenderers: Record<ClusterSection["type"], SectionRenderer> = {
  text: TextSection,
  comparison: ComparisonSection,
  audience: AudienceSection,
  differentiator: DifferentiatorSection,
};

/* ------------------------------------------------
   Main Component
   ------------------------------------------------ */
function LongFormContent({
  sections,
  pillar,
  className,
}: LongFormContentProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {sections.map((section, i) => {
        const Renderer = sectionRenderers[section.type];
        return (
          <ScrollReveal key={section.id} delay={i * 50}>
            <section id={section.id}>
              <Renderer section={section} pillar={pillar} />
            </section>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

LongFormContent.displayName = "LongFormContent";

export { LongFormContent };
