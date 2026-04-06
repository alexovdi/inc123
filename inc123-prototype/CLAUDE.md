# Incorporate123 — Interactive Prototype & Design System

## Project Context

This is a Vite + React Router prototype for Incorporate123.com, a 25-year-old privacy-focused
business formation company. The prototype serves dual purpose:

1. **Client-facing interactive prototype** — clickable pages David reviews
2. **Production design system** — components reused in the final CMS build

The site has ~71 pages across 9 template types, organized in a pillar/cluster
content architecture with 4 pillars: Business Privacy, Asset Protection,
Company Formation, and Compliance.

## Dev Server

- Local dev port: **2121** → `http://localhost:2121`
- Set via `--port 2121` in vite.config.ts and package.json scripts
- Before starting work, ensure the dev server is running. If not:
  1. Kill any stale processes on port 2121: `lsof -ti:2121 | xargs kill -9 2>/dev/null || true`
  2. Start fresh: `npm run dev`
  3. Verify: confirm HTTP 200 on `http://localhost:2121`
- Build: `npm run build` (outputs to `dist/`)
- Preview production build: `npm run preview`

## Workflow Rules

- **Always implement, never stop at a plan** unless the user explicitly asks for a plan only. If a plan file exists, execute it directly.
- **When creating new components, ALWAYS create the corresponding catalog page in the same session.** Never ship a component without its catalog page.
- **Verify the build passes** (`npm run build`) before declaring any task complete.
- **Use browser verification** on port 2121 after visual changes to catch layout/contrast regressions.

## Workflow Preferences

- When executing a plan, DO the work — do not enter 'plan mode' or ask for confirmation. If a plan file exists, implement it directly unless the user says otherwise.

## Architecture Rules

### Design System (`src/design-system/`)

- **NEVER import from `src/app/` or `src/data/`** — design system is standalone
- **ALWAYS use design tokens** — never hardcode colors, fonts, or spacing
- **ALWAYS use CVA (class-variance-authority)** for component variants
- **ALWAYS export from barrel files** (index.ts in each directory)
- **EVERY component gets a TypeScript interface** for its props
- **NO business logic in primitives** — they are pure UI
- **Components accept `className` prop** for composition
- **Use `cn()` utility** for merging Tailwind classes

### Prototype Pages (`src/app/`)

- Pages import from `src/design-system/` and `src/data/`
- Mock data lives in `src/data/` with realistic Inc123 content
- Pages demonstrate all interactive states (hover, active, expanded, etc.)
- Mobile responsiveness is required on every page
- Use React Router `<Link>` (with `to=` prop) for navigation between prototype pages

### Page Structure Patterns

- **Routing:** explicit routes defined in `src/router.tsx` with `React.lazy()` code splitting
- **Dynamic routes:** use `useParams()` from `react-router-dom` for slug params
- **Layout spacing:** all pages use `max-w-content` + `px-container-x` + `py-section-y`
- **Invalid slugs:** render `<NotFound />` component for missing data
- **Section wrapper pattern:** `<section className="py-section-y"><div className="max-w-content mx-auto px-container-x">`

### Component Conventions

- **Every component sets `.displayName`** (e.g., `Button.displayName = "Button"`)
- **Export both component and variants:** `export { Card, cardVariants }`
- **Pillar-aware components** use color maps (`pillarBorderTopMap`, `pillarTextMap`, `pillarSoftBgMap`)
- All components are client-side (Vite SPA) — no `"use client"` directives needed

### Tailwind CSS v4 & Styling

- **Tailwind CSS v4** with `@theme inline` in `globals.css` — there is **NO `tailwind.config.ts`**
- Vite plugin: `@tailwindcss/vite` in `vite.config.ts`
- Two complete themes (wireframe/brand) as CSS custom properties in `globals.css`
- Toggle via `data-theme="brand"` on `<html>` — zero component changes on theme switch
- **Layout tokens:** `max-w-content` (72rem), `max-w-narrow` (48rem), `max-w-wide` (80rem)
- **Spacing tokens:** `py-section-y`, `py-section-y-sm`, `px-container-x`
- **Shadow tokens:** `shadow-card`, `shadow-card-hover`, `shadow-dropdown`, `shadow-tooltip`
- **Animation tokens:** `accordion-down`, `accordion-up`, `fade-in`, `slide-in-right`
- **Do NOT use default Tailwind sizing classes** like `max-w-sm`, `max-w-xl`, `max-w-2xl` — they resolve to unexpected values because of the custom spacing scale. Use the project's layout tokens (`max-w-content`, `max-w-narrow`, `max-w-wide`) or explicit values instead.
- **All custom CSS must be wrapped in `@layer base { }` blocks.** Unwrapped CSS causes cascade ordering issues in Tailwind v4.

### Design Tokens

All visual values flow from the token system:

```typescript
// Colors — reference by semantic name, never hex
primary: "#1e3a5f"; // Deep navy — authority, trust
secondary: "#2563eb"; // Bright blue — CTAs, links
accent: "#d97706"; // Amber — urgency, attention
success: "#16a34a"; // Green — confirmation, trust signals
surface: "#ffffff"; // White — card/section backgrounds
background: "#f8fafc"; // Slate-50 — page background
foreground: "#0f172a"; // Slate-900 — primary text
muted: "#64748b"; // Slate-500 — secondary text
border: "#e2e8f0"; // Slate-200 — borders, dividers

// Pillar Colors (for cross-pillar navigation and identity)
privacy: "#2563eb"; // Blue
assetProtection: "#16a34a"; // Green
formation: "#d97706"; // Amber
compliance: "#9333ea"; // Purple
```

### Component Patterns

**Button (CVA example):**

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-white hover:bg-secondary/90",
        secondary:
          "bg-white text-foreground border border-border hover:bg-muted/10",
        ghost: "hover:bg-muted/10",
        cta: "bg-accent text-white hover:bg-accent/90 shadow-lg",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
```

### Quality Standards

- All components responsive (mobile-first)
- WCAG 2.1 AA color contrast
- Keyboard navigation for all interactive elements
- No layout shift — use fixed dimensions for dynamic content
- Tailwind only — no CSS modules, styled-components, or inline styles
- Semantic HTML elements (nav, main, section, article, aside)

### Data & Types

- **All TypeScript interfaces** live in `src/lib/types.ts`
- **Data files** import types from `@/lib/types` and export typed constants
- **13 data files** in `src/data/`: navigation, packages, pillars, testimonials, faq, homepage, clusters, comparisons, states, about, contact, checkout, blog
- **Import paths:** always use `@/` alias (e.g., `@/data/packages`, `@/design-system/components/Card`)

### Testing

- **Playwright E2E tests** in `tests/e2e/` (7 spec files: routes, navigation, checkout, packages, faq, contact, theme)
- Route smoke tests verify all 50+ routes return HTTP 200 with >100 chars content and no JS console errors
- Run: `npx playwright test`

### Known Anti-Patterns (avoid repeating)

- **Pillar color maps are duplicated** across Card, Button, Badge, Breadcrumbs, ClusterHero — same `pillarBorderTopMap`/`pillarTextMap`/`pillarSoftBgMap` objects repeated. Should extract to `src/design-system/utils/pillarMaps.ts`
- **No `error.tsx` error boundaries** anywhere — should add to root and key route groups
- **Hardcoded data in pages** (e.g., `FORMATION_STATES` in checkout/configure) — always put data in `src/data/`
- **Leaving tasks at "plan drafted" stage** — always implement through to completion, build verification, and browser check
- **Using default Tailwind spacing/sizing classes** — always use project layout tokens or explicit values

## File Naming Conventions

- Components: PascalCase (`PricingGrid.tsx`)
- Utilities: camelCase (`cn.ts`)
- Data files: camelCase (`packages.ts`)
- Page routes: kebab-case (Next.js convention)
