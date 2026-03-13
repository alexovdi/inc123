"use client";

const colorTokens = [
  { name: "primary", var: "--primary", class: "bg-primary" },
  { name: "secondary", var: "--secondary", class: "bg-secondary" },
  { name: "accent", var: "--accent", class: "bg-accent" },
  { name: "success", var: "--success", class: "bg-success" },
  { name: "destructive", var: "--destructive", class: "bg-destructive" },
  { name: "warning", var: "--warning", class: "bg-warning" },
  { name: "surface", var: "--surface", class: "bg-surface" },
  { name: "background", var: "--background", class: "bg-background" },
  { name: "foreground", var: "--foreground", class: "bg-foreground" },
  { name: "muted", var: "--muted", class: "bg-muted" },
  { name: "border", var: "--border", class: "bg-border" },
];

const pillarTokens = [
  { name: "Privacy", var: "--pillar-privacy", class: "bg-pillar-privacy", softClass: "bg-pillar-privacy-soft", midClass: "bg-pillar-privacy-mid" },
  { name: "Asset Protection", var: "--pillar-asset", class: "bg-pillar-asset", softClass: "bg-pillar-asset-soft", midClass: "bg-pillar-asset-mid" },
  { name: "Formation", var: "--pillar-formation", class: "bg-pillar-formation", softClass: "bg-pillar-formation-soft", midClass: "bg-pillar-formation-mid" },
  { name: "Compliance", var: "--pillar-compliance", class: "bg-pillar-compliance", softClass: "bg-pillar-compliance-soft", midClass: "bg-pillar-compliance-mid" },
];

const primaryScale = [
  { name: "50", class: "bg-primary-50" },
  { name: "100", class: "bg-primary-100" },
  { name: "200", class: "bg-primary-200" },
  { name: "300", class: "bg-primary-300" },
  { name: "400", class: "bg-primary-400" },
  { name: "500", class: "bg-primary-500" },
  { name: "600", class: "bg-primary-600" },
  { name: "700", class: "bg-primary-700" },
  { name: "800", class: "bg-primary-800" },
  { name: "900", class: "bg-primary-900" },
];

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-content">
        <h1 className="font-display text-display-xl font-extrabold text-foreground mb-2">
          Colors
        </h1>
        <p className="text-body-lg text-muted mb-12">
          Semantic color tokens for both wireframe and brand themes.
        </p>

        {/* Brand Colors */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Semantic Colors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {colorTokens.map((token) => (
              <div key={token.name} className="space-y-2">
                <div
                  className={`${token.class} h-20 rounded-card border border-border`}
                />
                <p className="text-body-sm font-medium text-foreground">{token.name}</p>
                <p className="text-caption text-muted font-mono">{token.var}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Primary Scale */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Primary Scale
          </h2>
          <div className="flex rounded-card overflow-hidden border border-border">
            {primaryScale.map((shade) => (
              <div key={shade.name} className="flex-1 text-center">
                <div className={`${shade.class} h-16`} />
                <p className="text-caption text-muted py-1">{shade.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pillar Colors */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Pillar Colors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pillarTokens.map((pillar) => (
              <div key={pillar.name} className="space-y-2">
                <p className="text-body-sm font-medium text-foreground mb-2">{pillar.name}</p>
                <div className="flex gap-2">
                  <div className={`${pillar.softClass} h-14 flex-1 rounded-card border border-border`} />
                  <div className={`${pillar.midClass} h-14 flex-1 rounded-card border border-border`} />
                  <div className={`${pillar.class} h-14 flex-1 rounded-card border border-border`} />
                </div>
                <div className="flex gap-2 text-caption text-muted">
                  <span className="flex-1">Soft</span>
                  <span className="flex-1">Mid</span>
                  <span className="flex-1">Full</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Shadows
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "card", class: "shadow-card" },
              { name: "card-hover", class: "shadow-card-hover" },
              { name: "dropdown", class: "shadow-dropdown" },
              { name: "tooltip", class: "shadow-tooltip" },
            ].map((shadow) => (
              <div key={shadow.name} className="text-center">
                <div className={`${shadow.class} bg-surface h-24 rounded-card border border-border`} />
                <p className="text-body-sm text-muted mt-2">{shadow.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Border Radius
          </h2>
          <div className="flex gap-8 flex-wrap">
            {[
              { name: "card (12px)", class: "rounded-card" },
              { name: "button (8px)", class: "rounded-button" },
              { name: "pill (full)", class: "rounded-pill" },
            ].map((radius) => (
              <div key={radius.name} className="text-center">
                <div className={`${radius.class} bg-primary h-20 w-32`} />
                <p className="text-body-sm text-muted mt-2">{radius.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="font-display text-heading-lg font-semibold text-foreground mb-6">
            Spacing Tokens
          </h2>
          <div className="space-y-4">
            {[
              { name: "section-y (80px)", class: "h-section-y" },
              { name: "section-y-sm (48px)", class: "h-section-y-sm" },
              { name: "container-x (24px)", class: "h-container-x" },
            ].map((space) => (
              <div key={space.name} className="flex items-center gap-4">
                <div className={`${space.class} w-8 bg-secondary rounded`} />
                <p className="text-body-sm text-muted">{space.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
