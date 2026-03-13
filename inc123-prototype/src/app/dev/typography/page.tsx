"use client";

export default function TypographyPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-content">
        <h1 className="font-display text-display-xl font-extrabold text-foreground mb-2">
          Typography
        </h1>
        <p className="text-body-lg text-muted mb-12">
          Type scale, font families, and text styles used across the design system.
        </p>

        {/* Font Families */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Font Families
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-card border border-border bg-surface p-6">
              <p className="text-caption text-muted mb-2">Display &mdash; Outfit</p>
              <p className="font-display text-heading font-semibold text-foreground">
                Aa Bb Cc Dd Ee
              </p>
              <p className="font-display text-body text-muted mt-2">
                Used for headings and display text. Geometric, modern, and authoritative.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6">
              <p className="text-caption text-muted mb-2">Body &mdash; Inter</p>
              <p className="text-heading font-semibold text-foreground">
                Aa Bb Cc Dd Ee
              </p>
              <p className="text-body text-muted mt-2">
                Used for body copy, labels, and UI text. Highly legible at all sizes.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6">
              <p className="text-caption text-muted mb-2">Mono &mdash; JetBrains Mono</p>
              <p className="font-mono text-heading font-semibold text-foreground">
                Aa Bb Cc Dd Ee
              </p>
              <p className="font-mono text-body text-muted mt-2">
                Used for prices, entity IDs, code snippets, and technical content.
              </p>
            </div>
          </div>
        </section>

        {/* Display Scale */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Display Scale
          </h2>
          <div className="space-y-8 bg-surface rounded-card p-6 border border-border">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">display-xl</span>
                <span className="text-caption text-muted">56px / 1.1 / -0.02em / Outfit 800</span>
              </div>
              <p className="font-display text-display-xl font-extrabold text-foreground">
                Privacy You Can&apos;t Get Elsewhere
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">display-lg</span>
                <span className="text-caption text-muted">44px / 1.15 / -0.02em / Outfit 700</span>
              </div>
              <p className="font-display text-display-lg font-bold text-foreground">
                Protect What You&apos;ve Built
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">display</span>
                <span className="text-caption text-muted">36px / 1.2 / -0.01em / Outfit 700</span>
              </div>
              <p className="font-display text-display font-bold text-foreground">
                Wyoming Anonymous LLC Formation
              </p>
            </div>
          </div>
        </section>

        {/* Heading Scale */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Heading Scale
          </h2>
          <div className="space-y-8 bg-surface rounded-card p-6 border border-border">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">heading-lg</span>
                <span className="text-caption text-muted">30px / 1.25 / Outfit 600</span>
              </div>
              <p className="font-display text-heading-lg font-semibold text-foreground">
                All-Inclusive Privacy Packages
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">heading</span>
                <span className="text-caption text-muted">24px / 1.3 / Outfit 600</span>
              </div>
              <p className="font-display text-heading font-semibold text-foreground">
                Year-Round Nominee Services
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">heading-sm</span>
                <span className="text-caption text-muted">20px / 1.4 / Outfit 600</span>
              </div>
              <p className="font-display text-heading-sm font-semibold text-foreground">
                What&apos;s Included
              </p>
            </div>
          </div>
        </section>

        {/* Body Scale */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Body Scale
          </h2>
          <div className="space-y-8 bg-surface rounded-card p-6 border border-border">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">body-lg</span>
                <span className="text-caption text-muted">18px / 1.6 / Inter 400</span>
              </div>
              <p className="text-body-lg text-foreground">
                No competitor successfully combines modern UX, privacy expertise, transparent pricing, and nominee services.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">body</span>
                <span className="text-caption text-muted">16px / 1.6 / Inter 400</span>
              </div>
              <p className="text-body text-foreground">
                Wyoming&apos;s charging order protection means creditors cannot seize your LLC assets, making it the strongest state for asset protection.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">body-sm</span>
                <span className="text-caption text-muted">14px / 1.5 / Inter 400</span>
              </div>
              <p className="text-body-sm text-muted">
                Filed in 3&ndash;5 business days. Includes registered agent for one year.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">caption</span>
                <span className="text-caption text-muted">12px / 1.5 / Inter 400</span>
              </div>
              <p className="text-caption text-muted">
                Incorporate123 is not a law firm and does not provide legal advice.
              </p>
            </div>
          </div>
        </section>

        {/* Mono */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Monospace
          </h2>
          <div className="space-y-4 bg-surface rounded-card p-6 border border-border">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">mono / body</span>
                <span className="text-caption text-muted">16px / JetBrains Mono 400</span>
              </div>
              <p className="font-mono text-body text-foreground">
                Wyoming Gold LLC &mdash; $1,275 | Annual Renewal &mdash; $525/yr
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-caption text-muted font-mono">mono / body-sm</span>
                <span className="text-caption text-muted">14px / JetBrains Mono 400</span>
              </div>
              <p className="font-mono text-body-sm text-muted">
                Entity #2024-001234567 | Filed: 2024-03-15 | Status: Active
              </p>
            </div>
          </div>
        </section>

        {/* Font Weights */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Font Weights
          </h2>
          <div className="space-y-3 bg-surface rounded-card p-6 border border-border">
            {[
              { weight: "400", class: "font-normal", label: "Regular" },
              { weight: "500", class: "font-medium", label: "Medium" },
              { weight: "600", class: "font-semibold", label: "Semibold" },
              { weight: "700", class: "font-bold", label: "Bold" },
              { weight: "800", class: "font-extrabold", label: "Extrabold" },
            ].map((w) => (
              <div key={w.weight} className="flex items-baseline gap-4">
                <span className="text-caption text-muted font-mono w-12">{w.weight}</span>
                <p className={`${w.class} text-heading-sm text-foreground`}>
                  {w.label} &mdash; The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
