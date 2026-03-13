/**
 * Typography tokens for the Incorporate123 design system.
 * Font families: Outfit (display), Inter (body), JetBrains Mono (pricing/legal).
 * Type scale with line-height and letter-spacing defined in tailwind.config.ts.
 */

export const fontFamilies = {
  display: ["var(--font-outfit)", "system-ui", "sans-serif"],
  sans: ["var(--font-inter)", "system-ui", "sans-serif"],
  mono: ["var(--font-jetbrains)", "monospace"],
} as const;

export const typeScale = {
  "display-xl": {
    size: "3.5rem",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    weight: 800,
    font: "display",
  },
  "display-lg": {
    size: "2.75rem",
    lineHeight: "1.15",
    letterSpacing: "-0.02em",
    weight: 700,
    font: "display",
  },
  display: {
    size: "2.25rem",
    lineHeight: "1.2",
    letterSpacing: "-0.01em",
    weight: 700,
    font: "display",
  },
  "heading-lg": {
    size: "1.875rem",
    lineHeight: "1.25",
    letterSpacing: "0",
    weight: 600,
    font: "display",
  },
  heading: {
    size: "1.5rem",
    lineHeight: "1.3",
    letterSpacing: "0",
    weight: 600,
    font: "display",
  },
  "heading-sm": {
    size: "1.25rem",
    lineHeight: "1.4",
    letterSpacing: "0",
    weight: 600,
    font: "display",
  },
  "body-lg": {
    size: "1.125rem",
    lineHeight: "1.6",
    letterSpacing: "0",
    weight: 400,
    font: "sans",
  },
  body: {
    size: "1rem",
    lineHeight: "1.6",
    letterSpacing: "0",
    weight: 400,
    font: "sans",
  },
  "body-sm": {
    size: "0.875rem",
    lineHeight: "1.5",
    letterSpacing: "0",
    weight: 400,
    font: "sans",
  },
  caption: {
    size: "0.75rem",
    lineHeight: "1.5",
    letterSpacing: "0",
    weight: 400,
    font: "sans",
  },
} as const;
