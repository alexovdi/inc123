"use client";

import NextLink from "next/link";

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

export default function DevPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-content">
        <h1 className="font-display text-display-xl font-extrabold text-foreground mb-2">
          Design System Tokens
        </h1>
        <p className="text-body-lg text-muted mb-12">
          Toggle between wireframe and brand themes using the button in the bottom-right corner.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <NextLink
            href="/dev/colors"
            className="group rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-card-hover"
          >
            <h2 className="font-display text-heading-sm font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
              Colors
            </h2>
            <p className="text-body-sm text-muted">
              Semantic colors, pillar palette, primary scale, shadows, and border radius.
            </p>
            {/* Mini color preview */}
            <div className="flex gap-1.5 mt-4">
              {colorTokens.slice(0, 6).map((t) => (
                <div key={t.name} className={`${t.class} h-6 flex-1 rounded`} />
              ))}
            </div>
          </NextLink>

          <NextLink
            href="/dev/typography"
            className="group rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-card-hover"
          >
            <h2 className="font-display text-heading-sm font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
              Typography
            </h2>
            <p className="text-body-sm text-muted">
              Font families, type scale, heading and body styles, font weights.
            </p>
            {/* Mini type preview */}
            <div className="mt-4 space-y-1">
              <p className="font-display text-body-lg font-bold text-foreground truncate">Display — Outfit</p>
              <p className="text-body-sm text-muted truncate">Body — Inter</p>
              <p className="font-mono text-caption text-muted truncate">Mono — JetBrains</p>
            </div>
          </NextLink>

          <NextLink
            href="/dev/components"
            className="group rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-card-hover"
          >
            <h2 className="font-display text-heading-sm font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
              Components
            </h2>
            <p className="text-body-sm text-muted">
              62 components across primitives, composites, and layouts.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Button", "Card", "Badge", "Input", "Accordion", "PricingGrid"].map((name) => (
                <span key={name} className="rounded-pill bg-secondary/10 px-2 py-0.5 text-caption text-secondary">
                  {name}
                </span>
              ))}
            </div>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
