# Claude Code Setup: Incorporate123 Prototype-to-Production Design System

## The Core Idea

Build the interactive prototype as a **real Next.js application with a real component library** — not throwaway mockups. Every button, accordion, pricing grid, and checkout step you prototype becomes a production-ready React component. When development begins, the dev team imports the design system package rather than translating Figma files into code.

This approach means:
- **Zero design-to-code translation loss** — the prototype IS the code
- **Clickable client reviews** on a real URL (deployed to Vercel)
- **CMS-agnostic components** — works with Payload CMS or headless WordPress
- **53 prototype hours + 65 design hours** produce both deliverables AND the production frontend foundation

---

## Step 1: Project Scaffold

### Initialize the project

```bash
npx create-next-app@latest inc123-prototype \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd inc123-prototype
npm install lucide-react clsx tailwind-merge class-variance-authority
npm install -D @types/node
```

**Why these dependencies:**
- `lucide-react` — icon library (MIT, tree-shakeable, 1000+ icons)
- `clsx` + `tailwind-merge` — conditional classnames without conflicts
- `class-variance-authority` (CVA) — type-safe component variants (essential for design system)

### Directory Structure

```
inc123-prototype/
├── CLAUDE.md                          ← Master instructions for Claude Code
├── src/
│   ├── app/                           ← Next.js App Router (prototype pages)
│   │   ├── layout.tsx                 ← Root layout with fonts + global providers
│   │   ├── page.tsx                   ← Homepage prototype
│   │   ├── privacy/
│   │   │   └── page.tsx               ← Privacy pillar page prototype
│   │   ├── asset-protection/
│   │   │   └── page.tsx               ← Asset protection pillar page
│   │   ├── formation/
│   │   │   └── page.tsx               ← Formation pillar page
│   │   ├── compliance/
│   │   │   └── page.tsx               ← Compliance pillar page
│   │   ├── packages/
│   │   │   ├── page.tsx               ← Package overview
│   │   │   └── [slug]/page.tsx        ← Package detail (3-tier comparison)
│   │   ├── compare/
│   │   │   └── [slug]/page.tsx        ← Comparison pages
│   │   ├── states/
│   │   │   └── [state]/page.tsx       ← State hub template
│   │   ├── resources/
│   │   │   └── page.tsx               ← Resource/FAQ template
│   │   └── checkout/
│   │       ├── configure/page.tsx     ← Step 1: Package config
│   │       ├── details/page.tsx       ← Step 2: Entity details
│   │       ├── payment/page.tsx       ← Step 3: Payment
│   │       └── confirmation/page.tsx  ← Step 4: Confirmation
│   │
│   ├── design-system/                 ← THE REUSABLE LIBRARY
│   │   ├── tokens/                    ← Design tokens (CSS vars + Tailwind config)
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   ├── spacing.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── primitives/                ← Atomic components (no business logic)
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── components/                ← Composite components
│   │   │   ├── Accordion.tsx          ← FAQ accordion with search/filter
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ComparisonTable.tsx    ← Side-by-side comparison
│   │   │   ├── CTABlock.tsx           ← Reusable call-to-action
│   │   │   ├── MegaMenu.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── PricingGrid.tsx        ← 3-tier pricing comparison
│   │   │   ├── ProgressiveDisclosure.tsx
│   │   │   ├── StepIndicator.tsx      ← Checkout progress
│   │   │   ├── TestimonialCarousel.tsx
│   │   │   ├── TrustSignals.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layouts/                   ← Page-level layout patterns
│   │   │   ├── SiteHeader.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   ├── PillarLayout.tsx       ← Shared pillar page structure
│   │   │   ├── ClusterLayout.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── utils/                     ← Shared utilities
│   │       ├── cn.ts                  ← clsx + tailwind-merge helper
│   │       └── variants.ts            ← Shared CVA variant configs
│   │
│   ├── data/                          ← Mock data for prototyping
│   │   ├── packages.ts               ← Package tier data (Basic/Executive/MAX)
│   │   ├── navigation.ts             ← Site navigation structure
│   │   ├── pillars.ts                ← Pillar content structure
│   │   └── testimonials.ts
│   │
│   └── lib/                           ← App-level utilities
│       └── types.ts                   ← Shared TypeScript interfaces
│
├── public/
│   └── images/                        ← Placeholder images
│
├── tailwind.config.ts                 ← Extended with design tokens
└── package.json
```

**The critical separation:** Everything in `src/design-system/` is CMS-agnostic and production-portable. Everything in `src/app/` is prototype-specific routing with mock data. When development starts, the design system folder moves to the production repo as-is.

---

## Step 2: The CLAUDE.md File

This is the single most important file. It tells Claude Code how to work on this project. Create this at the project root:

```markdown
# Incorporate123 — Interactive Prototype & Design System

## Project Context

This is a Next.js prototype for Incorporate123.com, a 25-year-old privacy-focused
business formation company. The prototype serves dual purpose:

1. **Client-facing interactive prototype** — clickable pages David reviews
2. **Production design system** — components reused in the final CMS build

The site has ~71 pages across 9 template types, organized in a pillar/cluster
content architecture with 4 pillars: Business Privacy, Asset Protection,
Company Formation, and Compliance.

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
- Use Next.js `<Link>` for navigation between prototype pages

### Design Tokens
All visual values flow from the token system:

```typescript
// Colors — reference by semantic name, never hex
primary: '#1e3a5f'      // Deep navy — authority, trust
secondary: '#2563eb'     // Bright blue — CTAs, links
accent: '#d97706'        // Amber — urgency, attention
success: '#16a34a'       // Green — confirmation, trust signals
surface: '#ffffff'        // White — card/section backgrounds
background: '#f8fafc'    // Slate-50 — page background
foreground: '#0f172a'    // Slate-900 — primary text
muted: '#64748b'         // Slate-500 — secondary text
border: '#e2e8f0'        // Slate-200 — borders, dividers

// Pillar Colors (for cross-pillar navigation and identity)
privacy: '#2563eb'       // Blue
assetProtection: '#16a34a' // Green
formation: '#d97706'     // Amber
compliance: '#9333ea'    // Purple
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
        secondary: "bg-white text-foreground border border-border hover:bg-muted/10",
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
  }
)
```

**Progressive Disclosure pattern:**
- Start collapsed, reveal on click
- Animate with CSS transitions (no JS animation libraries)
- Use `data-state="open"` / `data-state="closed"` attributes

**Accordion pattern:**
- Single or multi-expand modes
- Keyboard accessible (Enter/Space to toggle, arrow keys to navigate)
- Search/filter for the FAQ template (111+ items)

**3-Tier Pricing Grid:**
- Three columns: Basic / Executive / MAX
- Highlighted "recommended" column
- Interactive tooltips on feature rows
- Add-on configurator below with dynamic price updates
- LLC/Corp toggle that switches pricing
- Mobile: stack to cards with expandable feature lists

**Checkout Flow:**
- 4-step progress indicator (configure → details → payment → confirm)
- Step validation before proceeding
- Summary sidebar that updates with selections
- Mock Stripe Elements-style card input

### The 9 Template Types

1. **Homepage** — Hero with dual CTA paths, 3 pillar nav blocks, package links, testimonials, trust signals
2. **Pillar Page** (×4) — Long-form with progressive disclosure, cluster grid, inline CTAs, FAQ accordion
3. **Cluster Page** (×24+) — Focused content, FAQ accordion, related links, package CTAs
4. **Package Detail** (×8-10) — 3-tier pricing grid, tooltips, add-on configurator, dual CTA
5. **Comparison Page** (×6) — Side-by-side tables, decision content, dual CTAs
6. **State Hub** (×4) — Cross-pillar aggregation, dynamic linking, package quick links
7. **Resource/FAQ** (×5-10) — Accordion with search/filter, 111+ items consolidated
8. **Checkout Flow** (×3-4) — Multi-step: config → details → payment → confirmation
9. **Utility Page** (×5-7) — Standard content, contact form variant

### Navigation Requirements
- Intent-first main nav: Privacy · Asset Protection · Formation · Packages · About
- Persistent Client Login in header
- Mega menu showing clusters under each pillar
- Breadcrumbs on every cluster, comparison, and package page
- "Where to Go Next" block at end of every content page
- Phone number with tap-to-call on mobile

### Quality Standards
- All components responsive (mobile-first)
- WCAG 2.1 AA color contrast
- Keyboard navigation for all interactive elements
- No layout shift — use fixed dimensions for dynamic content
- Tailwind only — no CSS modules, styled-components, or inline styles
- Semantic HTML elements (nav, main, section, article, aside)

## File Naming Conventions
- Components: PascalCase (`PricingGrid.tsx`)
- Utilities: camelCase (`cn.ts`)
- Data files: camelCase (`packages.ts`)
- Page routes: kebab-case (Next.js convention)

## Build Order (Recommended)

### Phase A: Foundation (do this first)
1. Design tokens → tailwind.config.ts
2. cn() utility
3. Button, Badge, Input, Select primitives
4. SiteHeader + SiteFooter + MegaMenu + MobileNav
5. Root layout with fonts and navigation

### Phase B: Core Templates
6. Homepage (proves the full design system)
7. Pillar page template (tests progressive disclosure + cluster grid)
8. Package page (highest complexity — pricing grid + configurator)

### Phase C: Supporting Templates
9. Cluster page
10. Comparison page
11. State hub
12. Resource/FAQ

### Phase D: Checkout Flow
13. Checkout steps 1-4
14. Step indicator + form validation patterns

### Phase E: Polish & Documentation
15. Mobile responsive pass on all pages
16. Component documentation (JSDoc or Storybook)
17. Design specs export for development handoff
```

---

## Step 3: Design Token Architecture

### `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: {
          DEFAULT: "#1e3a5f",
          50: "#f0f5fa",
          100: "#dae6f2",
          200: "#b8cfe6",
          300: "#8ab1d4",
          400: "#5a8fbe",
          500: "#3a6fa3",
          600: "#2d5a87",
          700: "#1e3a5f",  // DEFAULT
          800: "#1a3050",
          900: "#152740",
        },
        secondary: {
          DEFAULT: "#2563eb",
          // ... full scale
        },
        accent: {
          DEFAULT: "#d97706",
          // ... full scale
        },
        // Pillar identity colors
        pillar: {
          privacy: "#2563eb",
          asset: "#16a34a",
          formation: "#d97706",
          compliance: "#9333ea",
        },
        // Semantic
        surface: "#ffffff",
        background: "#f8fafc",
        foreground: "#0f172a",
        muted: "#64748b",
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        // Type scale (with line-height and letter-spacing)
        "display-xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.25" }],
        "heading": ["1.5rem", { lineHeight: "1.3" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        // Section spacing
        "section-y": "5rem",      // Vertical padding between sections
        "section-y-sm": "3rem",
        "container-x": "1.5rem",  // Horizontal page padding (mobile)
      },
      maxWidth: {
        "content": "72rem",       // 1152px — main content area
        "narrow": "48rem",        // 768px — text-heavy pages
        "wide": "80rem",          // 1280px — comparison tables
      },
      borderRadius: {
        "card": "0.75rem",
        "button": "0.5rem",
        "pill": "9999px",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)",
        "dropdown": "0 10px 40px rgba(0,0,0,0.12)",
        "tooltip": "0 4px 12px rgba(0,0,0,0.15)",
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
        "fade-in": "fade-in 150ms ease-out",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--accordion-height)" } },
        "accordion-up": { from: { height: "var(--accordion-height)" }, to: { height: "0" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
      },
    },
  },
  plugins: [],
};

export default config;
```

### `src/design-system/utils/cn.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Step 4: Working with Claude Code — Practical Workflow

### Session 1: Bootstrap

```
> Create the project foundation: design tokens in tailwind.config.ts,
  the cn() utility, and the Button primitive with primary/secondary/ghost/cta
  variants and sm/md/lg sizes. Then create the SiteHeader with mega menu
  navigation for the 4 pillars + packages.
```

### Session 2: Homepage Prototype

```
> Build the homepage prototype using the design system. It needs:
  - Hero section with dual CTA paths (privacy-focused vs. formation-focused)
  - 3 pillar navigation blocks (Privacy, Asset Protection, Formation)
  - Secondary direct-to-package CTAs
  - Testimonial carousel (use mock data)
  - Trust signals section (25 years, BBB rating, money-back guarantee)
  - Mobile responsive
```

### Session 3: Package Page (Highest Complexity)

```
> Build the Package Detail template. This is the most complex page:
  - 3-tier comparison grid (Basic $299 / Executive $499 / MAX $799)
  - Interactive tooltip system on each feature row
  - Add-on configurator with dynamic pricing (Foreign Registration +$149, etc.)
  - LLC/Corp toggle that switches all pricing
  - Progressive disclosure (scanner view vs. deep-dive)
  - Dual CTAs
  - Mock data for the Nevada Privacy LLC package
```

### Session 4: Checkout Flow

```
> Build the 4-step checkout flow:
  Step 1 (Configure): Package tier selected, add-on checkboxes, entity type
  Step 2 (Details): Company name, registered agent info, member/officer details
  Step 3 (Payment): Mock Stripe card input, order summary sidebar
  Step 4 (Confirmation): Order confirmed, next steps, receipt
  Include a persistent StepIndicator component and a running total sidebar.
```

### How to iterate efficiently with Claude Code

**Give context, not just instructions.** Instead of "make a tooltip component," say:

```
> The PricingGrid needs tooltips that explain what each feature means.
  For example, hovering "Nominee Officer Service" should show a tooltip
  explaining "A nominee officer is listed on public records instead of
  your personal information, adding a layer of privacy to your company."
  Use Radix-style positioning (above by default, flip if near viewport edge).
  The tooltip must work on touch devices (tap to toggle).
```

**Review in browser, not in code.** After each session, `npm run dev` and click through. Then tell Claude Code what to fix:

```
> The pricing grid looks good on desktop but on mobile the 3 columns
  are squished. Switch to a card-based layout on mobile where each tier
  is a full-width card that expands to show features on tap. Keep the
  "recommended" badge on Executive.
```

**Build progressively, not all at once.** The recommended build order in CLAUDE.md exists for a reason — each phase validates the design tokens and primitives before they're used in more complex templates.

---

## Step 5: Deploy for Client Review

### Vercel deployment (free tier works)

```bash
npm install -g vercel
vercel
```

This gives David a live URL to click through the prototype on his phone and desktop. Each push to the repo auto-deploys.

### Protect with password (optional)

Add Vercel's built-in password protection or use Next.js middleware:

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) {
    return new NextResponse('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Prototype"' },
    });
  }
  // Check credentials...
  return NextResponse.next();
}
```

---

## Step 6: Production Handoff

When the prototype is approved and development begins, the handoff is minimal:

### If Payload CMS:
```bash
# The design system folder drops directly into the Payload + Next.js project
cp -r src/design-system/ payload-project/src/design-system/
cp tailwind.config.ts payload-project/tailwind.config.ts
```

Payload pages import components directly — no translation needed since it's already Next.js + React.

### If WordPress (headless):
```bash
# The design system becomes the Next.js frontend's component library
cp -r src/design-system/ wordpress-frontend/src/design-system/
```

The Next.js frontend fetches content from WordPress REST API and renders it with the same components.

### What changes in production:
- `src/data/` mock data → replaced with CMS API calls
- `src/app/` routes → replaced with dynamic CMS-driven routes
- `src/design-system/` → **stays exactly the same**

---

## Key Decisions to Make Before Starting

### 1. Typography
The prototype needs real fonts. Recommended for Inc123's premium positioning:

- **Display/Headings:** Outfit or Inter (already used in journey diagrams)
- **Body:** Inter or Source Sans 3
- **Code/Legal:** JetBrains Mono (for legal entity numbers, pricing)

### 2. Color Palette Approval
The CLAUDE.md includes a proposed palette. Get David's sign-off on primary brand color before building — everything cascades from it.

### 3. Pillar Color Coding
The 4-color pillar system (blue/green/amber/purple) needs validation. These colors appear in navigation, page headers, CTA variants, and cross-pillar links throughout the entire site.

### 4. CMS Decision Timing
The prototype is intentionally CMS-agnostic. But the CMS decision should happen during or immediately after prototyping — it affects how content is modeled, which informs component prop interfaces. The earlier the better.

---

## Summary: What This Approach Gets You

| Traditional Figma Approach | Code-First Prototype Approach |
|---|---|
| Static mockups → developer interprets | Clickable prototype IS the code |
| Design-dev handoff friction | Zero handoff — same codebase |
| Figma components ≠ code components | React components are production-ready |
| Responsive shown as separate artboards | Actually responsive in browser |
| Interactions described in annotations | Interactions actually work |
| Design system lives in Figma | Design system lives in code + Tailwind |
| Client reviews static images | Client clicks through on real URL |
| 53 + 65 = 118 hours produce deliverables only | 118 hours produce deliverables + production code |

The prototype isn't a throwaway — it's Sprint 0 of development.
