/**
 * Spacing tokens for the Incorporate123 design system.
 * Section padding, container widths, component gaps.
 */

export const sectionSpacing = {
  "section-y": "5rem",
  "section-y-sm": "3rem",
  "container-x": "1.5rem",
} as const;

export const containerWidths = {
  content: "72rem",   // 1152px — main content area
  narrow: "48rem",    // 768px — text-heavy pages
  wide: "80rem",      // 1280px — comparison tables
} as const;

export const borderRadius = {
  card: "0.75rem",
  button: "0.5rem",
  pill: "9999px",
} as const;

export const shadows = {
  card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
  "card-hover": "0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)",
  dropdown: "0 10px 40px rgba(0,0,0,0.12)",
  tooltip: "0 4px 12px rgba(0,0,0,0.15)",
} as const;
