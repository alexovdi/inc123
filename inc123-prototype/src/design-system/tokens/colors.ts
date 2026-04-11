/**
 * Color tokens for the Incorporate123 design system.
 * Two themes: wireframe (greyscale) and brand (full color).
 * CSS custom properties are set in globals.css; these maps are for reference and tooling.
 */

export const brandColors = {
  primary: "#1e3a5f",
  secondary: "#2563eb",
  link: "#2563eb",
  accent: "#d97706",
  "accent-hover": "#b45309",
  success: "#16a34a",
  destructive: "#dc2626",
  warning: "#ea580c",
  surface: "#ffffff",
  background: "#f8fafc",
  foreground: "#0f172a",
  "footer-dark": "#0f172a",
  muted: "#334155",
  border: "#e2e8f0",
} as const;

export const wireframeColors = {
  primary: "#374151",
  secondary: "#1f2937",
  link: "#2563eb",
  accent: "#374151",
  "accent-hover": "#111827",
  success: "#4b5563",
  destructive: "#374151",
  warning: "#4b5563",
  surface: "#ffffff",
  background: "#f9fafb",
  foreground: "#111827",
  "footer-dark": "#111827",
  muted: "#4b5563",
  border: "#7d8694",
} as const;

export const pillarColors = {
  brand: {
    privacy: { DEFAULT: "#2563eb", soft: "#dbeafe", mid: "#93bbfd" },
    asset: { DEFAULT: "#15803d", soft: "#dcfce7", mid: "#86efac" },
    formation: { DEFAULT: "#a16207", soft: "#fef3c7", mid: "#fcd34d" },
    compliance: { DEFAULT: "#7e22ce", soft: "#f3e8ff", mid: "#c084fc" },
  },
  wireframe: {
    privacy: { DEFAULT: "#374151", soft: "#f3f4f6", mid: "#d1d5db" },
    asset: { DEFAULT: "#374151", soft: "#f3f4f6", mid: "#d1d5db" },
    formation: { DEFAULT: "#374151", soft: "#f3f4f6", mid: "#d1d5db" },
    compliance: { DEFAULT: "#374151", soft: "#f3f4f6", mid: "#d1d5db" },
  },
} as const;

export type PillarName = "privacy" | "asset" | "formation" | "compliance";
export type ThemeName = "wireframe" | "brand";
