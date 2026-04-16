/**
 * Shared section components used across offshore jurisdiction pages.
 * Each section renders conditionally based on data presence.
 */
import { Link } from "react-router-dom";
import type {
  JurisdictionCombinedStructure,
  JurisdictionEntityType,
  JurisdictionFormationStep,
  JurisdictionPricing,
} from "@/lib/types";
import { Icon } from "@/design-system/primitives/Icon";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   JurisdictionStatStrip
   ------------------------------------------------ */
export interface JurisdictionStatStripProps {
  stats: Array<{ label: string; value: string }>;
  className?: string;
}

export function JurisdictionStatStrip({
  stats,
  className,
}: JurisdictionStatStripProps) {
  if (!stats || stats.length === 0) return null;
  return (
    <dl className={cn("mt-8 grid gap-4 sm:grid-cols-3", className)}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-body-sm text-white/70">{stat.label}</dt>
          <dd className="mt-1 font-display text-heading-sm font-bold text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------
   EntityComparison — LLC vs. Corp
   ------------------------------------------------ */
export interface EntityComparisonProps {
  jurisdictionName: string;
  entities: JurisdictionEntityType[];
  recommendation?: string;
}

export function EntityComparison({
  jurisdictionName,
  entities,
  recommendation,
}: EntityComparisonProps) {
  if (!entities || entities.length < 2) return null;
  return (
    <section className="bg-surface py-section-y px-container-x">
      <div className="mx-auto max-w-content">
        <div className="mb-8">
          <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary">
            Entity Options
          </p>
          <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
            {jurisdictionName} — Entity Comparison
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {entities.map((entity) => (
            <article
              key={entity.id}
              className={cn(
                "flex flex-col rounded-card border bg-surface p-6 shadow-card",
                entity.recommended
                  ? "border-2 border-secondary"
                  : "border-border",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-heading-sm font-bold text-foreground">
                    {entity.name}
                  </h3>
                  {entity.framework && (
                    <p className="mt-1 text-body-sm italic text-muted">
                      {entity.framework}
                    </p>
                  )}
                </div>
                {entity.recommended && (
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-caption font-semibold uppercase tracking-wider text-white">
                    Recommended
                  </span>
                )}
              </div>

              <ul className="mt-4 flex-1 space-y-2">
                {entity.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm">
                    <Icon
                      name="Check"
                      size="sm"
                      className="mt-0.5 shrink-0 text-success"
                    />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-body-sm font-medium text-muted">
                <span className="font-semibold text-foreground">Best for:</span>{" "}
                {entity.bestFor}
              </p>

              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-body-sm">
                <div>
                  <dt className="text-caption text-muted">Formation</dt>
                  <dd
                    className={cn(
                      "font-mono font-semibold",
                      entity.formationCost === "PENDING DAVID"
                        ? "text-accent"
                        : "text-foreground",
                    )}
                  >
                    {entity.formationCost}
                  </dd>
                </div>
                <div>
                  <dt className="text-caption text-muted">Annual renewal</dt>
                  <dd
                    className={cn(
                      "font-mono font-semibold",
                      entity.annualRenewal === "PENDING DAVID"
                        ? "text-accent"
                        : "text-foreground",
                    )}
                  >
                    {entity.annualRenewal}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {recommendation && (
          <aside className="mx-auto mt-8 max-w-3xl rounded-lg border border-secondary/30 bg-secondary/5 p-5">
            <p className="text-body italic leading-relaxed text-foreground">
              {recommendation}
            </p>
          </aside>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------
   FormationProcess — KYC + steps
   ------------------------------------------------ */
export interface FormationProcessProps {
  jurisdictionName: string;
  kycRequirements?: string[];
  steps: JurisdictionFormationStep[];
  timeline?: string;
  bankTimeline?: string;
}

export function FormationProcess({
  jurisdictionName,
  kycRequirements,
  steps,
  timeline,
  bankTimeline,
}: FormationProcessProps) {
  if ((!steps || steps.length === 0) && !kycRequirements?.length) return null;
  return (
    <section className="bg-background py-section-y px-container-x">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-3xl">
          <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary">
            Formation Process
          </p>
          <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
            How {jurisdictionName} Formation Works
          </h2>

          {kycRequirements && kycRequirements.length > 0 && (
            <div className="mt-8 rounded-lg border border-border bg-surface p-6">
              <h3 className="font-display text-heading-sm font-semibold text-foreground">
                KYC Documentation Required
              </h3>
              <p className="mt-2 text-body-sm text-muted">
                Before formation begins, you must provide:
              </p>
              <ul className="mt-4 space-y-2">
                {kycRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm">
                    <Icon
                      name="Square"
                      size="sm"
                      className="mt-0.5 shrink-0 text-muted"
                    />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-body-sm italic text-muted">
                KYC compliance is required by local law and international
                anti-money-laundering standards. We guide you through the
                documentation process.
              </p>
            </div>
          )}

          {steps && steps.length > 0 && (
            <ol className="mt-10 space-y-5">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-lg border border-border bg-surface p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-body-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-body-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {(timeline || bankTimeline) && (
            <div className="mt-8 rounded-lg border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-foreground">
                Timeline
              </h3>
              <dl className="mt-3 space-y-2 text-body-sm">
                {timeline && (
                  <div className="flex justify-between">
                    <dt className="text-muted">Entity formation</dt>
                    <dd className="font-mono font-medium text-foreground">
                      {timeline}
                    </dd>
                  </div>
                )}
                {bankTimeline && (
                  <div className="flex justify-between">
                    <dt className="text-muted">Bank account (if requested)</dt>
                    <dd className="font-mono font-medium text-foreground">
                      {bankTimeline}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   CostBreakdown — pricing + inclusions
   ------------------------------------------------ */
export interface CostBreakdownProps {
  jurisdictionName: string;
  entities: JurisdictionEntityType[];
  pricing?: JurisdictionPricing;
}

export function CostBreakdown({
  jurisdictionName,
  entities,
  pricing,
}: CostBreakdownProps) {
  if (!pricing && (!entities || entities.length === 0)) return null;
  return (
    <section className="bg-surface py-section-y px-container-x">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-3xl">
          <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary">
            Pricing
          </p>
          <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
            {jurisdictionName} — All-Inclusive Pricing
          </h2>

          {entities && entities.length > 0 && (
            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <table className="w-full text-left text-body-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Entity Type</th>
                    <th className="px-4 py-3 font-semibold">Formation</th>
                    <th className="px-4 py-3 font-semibold">Annual Renewal</th>
                  </tr>
                </thead>
                <tbody>
                  {entities.map((entity) => (
                    <tr
                      key={entity.id}
                      className="border-t border-border bg-surface"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {entity.name}
                      </td>
                      <td className="px-4 py-3 font-mono text-foreground">
                        {entity.formationCost}
                      </td>
                      <td className="px-4 py-3 font-mono text-foreground">
                        {entity.annualRenewal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {pricing && (
            <>
              {pricing.inclusions.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-heading-sm font-semibold text-foreground">
                    Included in Formation Package
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {pricing.inclusions.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-body-sm"
                      >
                        <Icon
                          name="Check"
                          size="sm"
                          className="mt-0.5 shrink-0 text-success"
                        />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pricing.additionalCosts.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-heading-sm font-semibold text-foreground">
                    Additional Costs (Not Included)
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {pricing.additionalCosts.map((cost, i) => (
                      <li
                        key={i}
                        className="flex items-start justify-between gap-4 rounded-lg border border-border bg-background p-4 text-body-sm"
                      >
                        <span className="text-foreground">{cost.label}</span>
                        <span className="font-mono font-semibold text-foreground">
                          {cost.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pricing.renewalInclusions.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-heading-sm font-semibold text-foreground">
                    Annual Renewal Includes
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {pricing.renewalInclusions.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-body-sm"
                      >
                        <Icon
                          name="Check"
                          size="sm"
                          className="mt-0.5 shrink-0 text-success"
                        />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          <p className="mt-8 text-body italic text-muted">
            All pricing is fixed and disclosed upfront. No hidden fees, no
            surprise charges during or after formation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   CombinedStructures — domestic + offshore patterns
   ------------------------------------------------ */
export interface CombinedStructuresProps {
  jurisdictionName: string;
  structures: JurisdictionCombinedStructure[];
}

export function CombinedStructures({
  jurisdictionName,
  structures,
}: CombinedStructuresProps) {
  if (!structures || structures.length === 0) return null;
  return (
    <section className="bg-background py-section-y px-container-x">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-3xl">
          <p className="text-body-sm font-semibold uppercase tracking-wider text-secondary">
            Combined Structures
          </p>
          <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
            How {jurisdictionName} Works Alongside Your Domestic Entity
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {structures.map((structure, i) => (
            <article
              key={structure.title}
              className="flex flex-col rounded-card border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 font-mono text-caption font-bold text-secondary">
                  {i + 1}
                </span>
                <h3 className="font-display font-semibold text-foreground">
                  {structure.title}
                </h3>
              </div>
              <p className="mt-3 flex-1 text-body-sm leading-relaxed text-muted">
                {structure.description}
              </p>
              {structure.link && (
                <Link
                  to={structure.link.href}
                  className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary hover:underline"
                >
                  {structure.link.label}
                  <Icon name="ArrowRight" size="sm" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   ComplianceWarning — reusable amber IRS callout
   ------------------------------------------------ */
export function ComplianceWarning() {
  return (
    <section className="bg-surface py-section-y px-container-x">
      <div className="mx-auto max-w-content">
        <div
          className="mx-auto max-w-3xl rounded-card border-l-4 border-accent bg-background p-6 shadow-card md:p-8"
          style={{ borderLeftColor: "#d97706" }}
        >
          <p className="text-body-sm font-semibold uppercase tracking-wider text-accent">
            U.S. Tax Obligations
          </p>
          <h2 className="mt-2 font-display text-heading-sm font-bold text-foreground">
            If you are a U.S. citizen, resident, or green card holder, owning
            this entity triggers federal reporting requirements:
          </h2>
          <ul className="mt-5 space-y-3 text-body-sm">
            <li className="flex items-start gap-2">
              <Icon
                name="FileText"
                size="sm"
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>
                <strong>FBAR (FinCEN 114)</strong> — Foreign accounts exceeding
                $10,000 aggregate.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon
                name="ClipboardCheck"
                size="sm"
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>
                <strong>Form 5471 / 8865</strong> — Informational return for
                foreign entity ownership.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon
                name="Calculator"
                size="sm"
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>
                <strong>GILTI</strong> — Potential tax on controlled foreign
                corporation income.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon
                name="AlertTriangle"
                size="sm"
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>
                <strong>FATCA</strong> — Global financial institution reporting
                to IRS.
              </span>
            </li>
          </ul>
          <p className="mt-5 text-body-sm font-medium text-foreground">
            Failure to comply can result in significant penalties. We strongly
            recommend consulting a CPA or international tax attorney before
            proceeding.
          </p>
          <Link
            to="/offshore/irs-compliance"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-transparent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            Full IRS Compliance Guide
            <Icon name="ArrowRight" size="sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
