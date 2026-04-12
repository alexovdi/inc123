# Cluster Page Redesign — Privacy Pillar

**Date:** 2026-04-11
**Scope:** Upgrade `ClusterPageTemplate` and supporting components to match homepage/pillar page design quality
**Pillar:** Privacy (7 cluster pages), but template changes benefit all pillars

## Problem

Cluster pages use a minimal, text-heavy layout with no animations, flat white backgrounds, and a bare-minimum hero. The homepage and pillar pages use rich editorial layouts with ScrollReveal animations, alternating section backgrounds, dark sections, SectionHeader eyebrow patterns, FinalCTA, StickyMobileCTA, and trust signals. The quality gap is stark — cluster pages feel like a different site.

## Design Decisions

### Hero: Dark pillar-themed hero (matching pillar page pattern)

- Dark `bg-primary` background with `GrainOverlay`
- Breadcrumb navigation (Home / Pillar / Current)
- Pillar eyebrow (uppercase, tracking, pillar color)
- H1 title in white, description in white/80
- Reading time badge + pillar badge
- Dual CTAs: primary "Find Your Package" + secondary "How It Works"
- Phone/consultation line below CTAs
- No right-side visual (cluster pages are content pages, not landing pages — keep hero focused)

### Section Structure: Alternating backgrounds with ScrollReveal

Every section in ClusterPageTemplate gets:

- `ScrollReveal` wrapper with staggered delays
- Alternating backgrounds: `bg-background` (default) → `bg-primary-50` (ToC) → content sections alternate → dark CTA close
- Proper section wrapper: `<section className="py-section-y-sm bg-{variant}">`

### SectionHeader Pattern

Replace raw `<h2>` headings in package CTA, FAQ, and WhereToGoNext sections with `SectionHeader` component (eyebrow + title + subtitle).

### FinalCTA: Dark closing section

Add `FinalCTA` or a custom dark CTA section at the bottom (before WhereToGoNext), matching the pillar page pattern — headline, price anchor, dual CTAs.

### StickyMobileCTA

Add `StickyMobileCTA` with "Find Your Package" CTA + phone number, same as homepage/pillar.

### FAQ: Two-column sticky layout

Match the pillar page pattern:

- Left column: sticky header with eyebrow, title, description, phone/email links
- Right column: accordion
- Background: `bg-primary-50`

### Trust Signal Strip

Add a social proof strip (icons + text) before the package CTA section, matching the pillar page pattern.

### LongFormContent Upgrades

- Add hover effects to audience/differentiator cards (`hover:shadow-card-hover hover:-translate-y-0.5 transition-all`)
- Make differentiator icons pillar-aware (use pillar color instead of always success green)
- Add pillar-colored accent to comparison section callout boxes

### Table of Contents Upgrade

- Add pillar color accent (left border or top border)
- Improve hover states on links

### CrossPillarCTA Section Framing

Wrap in a proper section with background, SectionHeader ("Related Services"), and centered layout matching pillar page pattern.

## Files to Modify

1. `src/app/[...slug]/ClusterPageTemplate.tsx` — main template restructure
2. `src/design-system/components/ClusterHero.tsx` — dark hero redesign
3. `src/design-system/components/LongFormContent.tsx` — card hover effects, pillar awareness
4. `src/design-system/layouts/ClusterLayout.tsx` — remove redundant border-top (hero handles it now)

## Files NOT Modified

- Cluster data (`src/data/clusters.ts`) — no data changes needed
- Other design system components (FinalCTA, StickyMobileCTA, SectionHeader, ScrollReveal, GrainOverlay) — used as-is
- Pillar pages, homepage — untouched

## Out of Scope

- Phase 2 visual polish beyond what's listed (pull quotes, editorial numbers in content)
- Phase 3 content richness ("Continue Learning" section upgrade)
- Other pillar cluster pages (same template serves all, changes cascade automatically)
