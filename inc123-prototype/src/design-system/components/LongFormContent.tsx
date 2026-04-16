import { useState } from "react";

import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import type {
  ClusterComparisonRow,
  ClusterPricingRow,
  ClusterPullQuote,
  ClusterSection,
} from "@/lib/types";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface LongFormContentProps {
  /** Array of content sections to render */
  sections: ClusterSection[];
  /** Pillar for color-aware styling */
  pillar?: PillarName;
  /** Optional pull quote rendered between sections */
  pullQuote?: ClusterPullQuote;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Pillar-aware color maps
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

const pillarTableHeaderMap: Record<PillarName, string> = {
  privacy: "bg-pillar-privacy/[0.06] text-pillar-privacy",
  asset: "bg-pillar-asset/[0.06] text-pillar-asset",
  formation: "bg-pillar-formation/[0.06] text-pillar-formation",
  compliance: "bg-pillar-compliance/[0.06] text-pillar-compliance",
};

/* ------------------------------------------------
   Shared sub-components
   ------------------------------------------------ */

/** Bullet list rendered inside text/audience sections */
function BulletList({
  bullets,
  pillar,
}: {
  bullets: string[];
  pillar?: PillarName;
}) {
  return (
    <ul className="mt-4 space-y-2">
      {bullets.map((bullet, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 text-body text-foreground/80 leading-relaxed"
        >
          <Icon
            name="CheckCircle"
            size="sm"
            className={cn(
              "mt-0.5 shrink-0",
              pillar ? pillarIconTextMap[pillar] : "text-success",
            )}
          />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

/** Key-point callout boxes rendered at the end of a section */
function KeyPointsGrid({
  keyPoints,
  pillar,
}: {
  keyPoints: NonNullable<ClusterSection["keyPoints"]>;
  pillar?: PillarName;
}) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {keyPoints.map((point, i) => (
        <div
          key={i}
          className={cn(
            "flex gap-3 rounded-card border p-4",
            pillar
              ? pillarCalloutMap[pillar]
              : "border-secondary/20 bg-primary-50",
          )}
        >
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-button",
              pillar
                ? pillarIconBgMap[pillar].replace("group-hover:", "")
                : "bg-secondary/10",
            )}
          >
            <Icon
              name={point.icon ?? "Sparkles"}
              size="sm"
              className={pillar ? pillarIconTextMap[pillar] : "text-secondary"}
            />
          </div>
          <div>
            <p className="text-body-sm font-semibold text-foreground mb-0.5">
              {point.title}
            </p>
            <p className="text-body-sm text-muted leading-snug">
              {point.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Progressive disclosure — "Read more" toggle */
function ExtendedContent({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mt-4">
      {expanded ? (
        <>
          <div className="text-body text-foreground/80 leading-relaxed whitespace-pre-line">
            {text}
          </div>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-3 inline-flex items-center gap-1.5 text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            Show less
            <Icon name="ChevronUp" size="sm" />
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="inline-flex items-center gap-1.5 text-body-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
        >
          Read more
          <Icon name="ChevronDown" size="sm" />
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------
   Section Renderers
   ------------------------------------------------ */

/** Text section: heading + paragraph + optional bullets/key-points/expand */
function TextSection({
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
      <div className="prose prose-muted max-w-none">
        <p className="text-body text-foreground/80 leading-relaxed">
          {section.content}
        </p>
      </div>
      {section.bullets && section.bullets.length > 0 && (
        <BulletList bullets={section.bullets} pillar={pillar} />
      )}
      {section.keyPoints && section.keyPoints.length > 0 && (
        <KeyPointsGrid keyPoints={section.keyPoints} pillar={pillar} />
      )}
      {section.extendedContent && (
        <ExtendedContent text={section.extendedContent} />
      )}
    </div>
  );
}

/** Comparison section: side-by-side Wyoming vs Nevada table */
function ComparisonSection({
  section,
  pillar,
}: {
  section: ClusterSection;
  pillar?: PillarName;
}) {
  const rows = section.comparisonRows ?? [];
  const columnLabels = section.comparisonColumnLabels ?? {
    left: "Wyoming",
    right: "Nevada",
  };

  return (
    <div>
      <h2 className="text-heading font-display font-semibold text-foreground mb-4">
        {section.title}
      </h2>
      {section.content && (
        <p className="text-body text-muted mb-6 leading-relaxed">
          {section.content}
        </p>
      )}

      {rows.length > 0 ? (
        <div className="overflow-hidden rounded-card border border-border">
          <table className="w-full text-left">
            <thead
              className={cn(
                "text-body-sm font-semibold uppercase tracking-[0.1em]",
                pillar
                  ? pillarTableHeaderMap[pillar]
                  : "bg-primary-50 text-foreground",
              )}
            >
              <tr>
                <th className="px-5 py-3">Factor</th>
                <th className="px-5 py-3">{columnLabels.left}</th>
                <th className="px-5 py-3">{columnLabels.right}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {rows.map((row: ClusterComparisonRow, i: number) => (
                <tr
                  key={i}
                  className={cn(
                    "align-top",
                    row.highlight &&
                      (pillar ? pillarCalloutMap[pillar] : "bg-primary-50/60"),
                  )}
                >
                  <td className="px-5 py-4 text-body-sm font-semibold text-foreground">
                    {row.label}
                  </td>
                  <td className="px-5 py-4 text-body-sm text-muted leading-relaxed">
                    {row.wyoming}
                  </td>
                  <td className="px-5 py-4 text-body-sm text-muted leading-relaxed">
                    {row.nevada}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className={cn(
            "rounded-card border p-6",
            pillar
              ? pillarCalloutMap[pillar]
              : "border-secondary/20 bg-primary-50",
          )}
        >
          <p className="text-body text-foreground/80 leading-relaxed">
            {section.content}
          </p>
        </div>
      )}

      {section.keyPoints && section.keyPoints.length > 0 && (
        <KeyPointsGrid keyPoints={section.keyPoints} pillar={pillar} />
      )}
    </div>
  );
}

/** Pricing section: cost breakdown card */
function PricingSection({
  section,
  pillar,
}: {
  section: ClusterSection;
  pillar?: PillarName;
}) {
  const rows = section.pricingRows ?? [];

  return (
    <div>
      <h2 className="text-heading font-display font-semibold text-foreground mb-4">
        {section.title}
      </h2>
      {section.content && (
        <p className="text-body text-muted mb-6 leading-relaxed">
          {section.content}
        </p>
      )}

      <div className="overflow-hidden rounded-card border border-border bg-surface">
        <div
          className={cn(
            "px-5 py-3 text-body-sm font-semibold uppercase tracking-[0.1em] border-b border-border",
            pillar
              ? pillarTableHeaderMap[pillar]
              : "bg-primary-50 text-foreground",
          )}
        >
          <div className="grid grid-cols-[1fr_auto] gap-4">
            <span>Item</span>
            <span>Cost</span>
          </div>
        </div>
        <ul className="divide-y divide-border">
          {rows.map((row: ClusterPricingRow, i: number) => (
            <li
              key={i}
              className={cn(
                "grid grid-cols-[1fr_auto] gap-4 px-5 py-4",
                row.highlight &&
                  (pillar ? pillarCalloutMap[pillar] : "bg-primary-50/60"),
              )}
            >
              <div>
                <p className="text-body-sm font-semibold text-foreground">
                  {row.label}
                </p>
                {row.note && (
                  <p className="text-caption text-muted mt-0.5">{row.note}</p>
                )}
              </div>
              <span className="text-body-sm font-mono font-semibold text-foreground whitespace-nowrap">
                {row.price}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {section.pricingNote && (
        <p className="mt-4 text-caption text-muted italic">
          {section.pricingNote}
        </p>
      )}
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
        <p className="text-body text-muted mb-6 leading-relaxed">
          {section.content}
        </p>
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
            <p className="text-body text-foreground/80 leading-relaxed">
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
        <p className="text-body text-muted mb-6 leading-relaxed">
          {section.content}
        </p>
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
              <p className="text-body text-foreground/80 leading-relaxed">
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
   Inline Pull Quote — editorial callout between sections
   ------------------------------------------------ */
function InlinePullQuote({
  pullQuote,
  pillar,
}: {
  pullQuote: ClusterPullQuote;
  pillar?: PillarName;
}) {
  return (
    <figure
      className={cn(
        "relative my-4 overflow-hidden rounded-card-lg border-l-0 border-t-4 px-6 py-8 sm:px-10",
        pillar
          ? pillarCalloutMap[pillar].replace("border-", "border-t-")
          : "border-t-secondary bg-primary-50",
      )}
    >
      {pullQuote.bgText && (
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 bottom-0 font-display text-[8rem] font-black leading-none select-none text-foreground/[0.04]"
        >
          {pullQuote.bgText}
        </span>
      )}
      <blockquote className="relative">
        <p className="font-display text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium text-foreground leading-[1.35] tracking-tight text-balance">
          &ldquo;{pullQuote.quote}&rdquo;
        </p>
        {pullQuote.attribution && (
          <figcaption className="mt-4 text-body-sm text-muted font-medium tracking-wide uppercase">
            &mdash; {pullQuote.attribution}
          </figcaption>
        )}
      </blockquote>
    </figure>
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
  pricing: PricingSection,
  audience: AudienceSection,
  differentiator: DifferentiatorSection,
};

/* ------------------------------------------------
   Main Component
   ------------------------------------------------ */
function LongFormContent({
  sections,
  pillar,
  pullQuote,
  className,
}: LongFormContentProps) {
  // Pull quote sits after the midpoint section if we have 3+ sections
  const midpoint = sections.length >= 3 ? Math.ceil(sections.length / 2) : -1;

  return (
    <div className={cn("space-y-12", className)}>
      {sections.map((section, i) => {
        const Renderer = sectionRenderers[section.type];
        return (
          <div key={section.id}>
            <ScrollReveal delay={i * 50}>
              <section id={section.id}>
                <Renderer section={section} pillar={pillar} />
              </section>
            </ScrollReveal>
            {pullQuote && i === midpoint - 1 && (
              <ScrollReveal delay={(i + 1) * 50}>
                <InlinePullQuote pullQuote={pullQuote} pillar={pillar} />
              </ScrollReveal>
            )}
          </div>
        );
      })}
    </div>
  );
}

LongFormContent.displayName = "LongFormContent";

export { LongFormContent };
