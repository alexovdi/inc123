# Incorporate123 — Comparison Page Content Guide (Template)

**Exemplar Page:** `/wyoming-vs-nevada-privacy/` · **Template:** Comparison Page (6 pages use this template)  
**Phase:** 2 — UX & Interactive Prototyping  
**Based on:** Comparison Page Wireframe Spec, Brand Guide v2, Competitive Analysis  

---

## Wireframe Improvement Notes

### 1. "Quick Verdict" in Hero Is a Strong Pattern — Expand It

The wireframe includes a 1-sentence "bottom line" verdict immediately visible. This is excellent for SEO (featured snippets love direct answers) and for scanners. However, it should also include a visual cue — a small highlighted badge saying "Our recommendation: Wyoming" or similar.

**Recommendation:** Keep the quick verdict and add a subtle "Recommended" badge next to Wyoming in the hero. This sets expectations before the visitor even reads the table.

### 2. Winner Indicators Should Be More Decisive

The wireframe says winner indicators are "optional" — they shouldn't be. The whole point of a comparison page is to help visitors decide. Timid design that avoids recommending anything creates decision paralysis. Visitors want guidance, not neutrality.

**Recommendation:** Make winner indicators mandatory on every non-tied row. Use a subtle checkmark or highlighted cell background on the winning column. For tied rows, show a "Tie" label. At the bottom, show a clear "Winner" summary: "Wyoming wins 7 of 16 factors. Nevada wins 2. Nine are tied."

### 3. No Silver Package Mention for Formation-Intent Visitors

The dual CTA section only shows Gold packages. Visitors arriving from the Formation pillar (who may not need privacy) will see two $1,275+ options and think "this is too expensive for what I need." They need a visible Silver alternative.

**Recommendation:** Below the dual Gold CTAs, add a text link: "Looking for formation without privacy features? View Silver packages from $875 →"

### 4. Decision Guide Content Could Use Visual Treatment

"Choose Wyoming If..." and "Choose Nevada If..." are currently text blocks. These would convert better as visually distinct cards with checkmark icons per bullet, making them scannable at a glance.

**Recommendation:** Design as cards with green checkmark icons per bullet point. Give each card a subtle state-colored accent (Wyoming could use blue since it wins on privacy, Nevada could use a warm neutral).

---

## Template Content Structure

All 6 comparison pages follow this pattern. Content specifics change per comparison topic, but structure, CTA placement, and voice rules are universal.

### All 6 Comparison Pages

| Page | URL | Pillar | Format |
|------|-----|--------|--------|
| Wyoming vs Nevada for Privacy | `/wyoming-vs-nevada-privacy/` | Privacy | 2-column state comparison |
| Best State for Privacy | `/best-state-for-privacy/` | Privacy | Multi-state ranking |
| Wyoming vs Nevada for AP | `/wyoming-vs-nevada-asset-protection/` | Asset Protection | 2-column state comparison |
| Best State for AP | `/best-state-asset-protection/` | Asset Protection | Multi-state ranking |
| Wyoming vs Nevada LLC | `/wyoming-vs-nevada-llc/` | Formation | 2-column state comparison |
| LLC vs Corporation | `/llc-vs-corporation/` | Formation | 2-column entity type comparison |

---

## Hero Section

| Element | Content Pattern | WY vs NV Privacy Example |
|---------|----------------|--------------------------|
| **Pillar Identity** | Parent pillar color | Privacy Blue |
| **Eyebrow** | "[Pillar] · Comparison" | "Business Privacy · Comparison" |
| **H1** | "[Option A] vs [Option B] for [Topic]" | "Wyoming vs Nevada for Business Privacy" |
| **Subheadline** | Scope of comparison + "here's how to choose" | "A head-to-head comparison of privacy protections, costs, filing requirements, and annual obligations. Both support anonymous LLCs — here's how to choose." |
| **Quick Verdict** | 1-sentence bottom line + recommendation badge | "Bottom line: Wyoming offers stronger privacy at lower cost. Nevada adds no state income tax and suits businesses with a physical Nevada presence." |

**No CTAs in the hero.** The comparison table IS the conversion tool. CTAs appear after the table.

---

## Primary Comparison Table

The centerpiece. Must be scannable in under 30 seconds — visitors should be able to look at the table, see the winner indicators, and make a decision without reading the prose below.

### Table Design Rules

1. **Factor column is always leftmost.** Factor names should be plain English, not legal jargon.
2. **Winner indicators are mandatory.** Small checkmark or highlighted cell on the winning column per row. "Tie" label for tied rows.
3. **Prices use JetBrains Mono font.** All monetary values in mono for clarity and brand consistency.
4. **Table header shows prices + CTAs.** State name, Gold price, renewal, and a small "Start →" CTA in each column header.
5. **Table footer summarizes the winner.** "Wyoming wins X factors. Nevada wins Y. Z are tied."
6. **Mobile: stacked factor cards.** Each row becomes a card showing the factor name as header, then both values side by side. Commit to this approach — do not punt to dev.

### Content Direction for David

Every comparison table row must contain verified data. Filing fees, tax requirements, and statutory citations must be current as of launch. David should review and confirm all numbers before design begins. Outdated comparison data destroys credibility with the research-heavy audience these pages target.

---

## Dual Package CTAs

Appears IMMEDIATELY after the comparison table. This is where the decision converts to action.

| Element | Left Card | Right Card |
|---------|-----------|------------|
| **State** | Winning state (usually Wyoming) | Alternative state |
| **Package** | "Gold Package — Complete Privacy" | Same |
| **Price** | Price (LLC) · Price (Corp) | Same structure |
| **Renewal** | "$525/year with nominees" | Same |
| **Key Includes** | 4 bullet items | Same |
| **Primary CTA** | "Start [State] Gold — $[price] →" | Same pattern |
| **Secondary** | "View full package details →" | Same |

**Below both cards:**
- "Not sure yet? Schedule a consultation →" (safety net)
- "Looking for formation without privacy? View Silver packages from $875 →" (Formation-intent escape valve)

**Repeat these CTAs at the bottom of the page** after the FAQ, for visitors who scrolled through everything.

---

## Decision Guide Content

Short, scannable decision-support blocks. NOT educational depth — cluster pages handle that. These are "if/then" recommendations.

### "Choose [Option A] If..."

4–5 bullet-style blocks, each with a checkmark icon and 1–2 sentence explanation. Visual card treatment with subtle accent color.

### "Choose [Option B] If..."

Same format. Give equal visual weight to both options — the comparison page shouldn't feel biased, even if one option is generally recommended.

### "What's the Same in Both"

Simple list showing shared features. For state comparisons, this shows that Gold package features are identical regardless of state — the difference is cost and state statutes, not service quality.

---

## Cross-Pillar Callout

After decision content, before FAQ. Links to the comparison page in the adjacent pillar.

| Source Comparison | Cross-Pillar Target | Headline |
|-------------------|--------------------|--------------------|
| WY vs NV Privacy | WY vs NV Asset Protection | "Privacy Is Step One. Asset Protection Is Step Two." |
| Best State Privacy | Best State AP | "Found Your Privacy State? Now Protect Your Assets." |
| WY vs NV AP | WY vs NV Privacy | "Protecting Assets Works Best with Anonymous Ownership." |
| WY vs NV LLC | WY vs NV Privacy | "Add Privacy for $375 More — Year-Round Nominees Included." |
| LLC vs Corp | WY vs NV LLC | "Chose Your Entity Type? Now Pick Your State." |

---

## FAQ Accordion

6–8 questions specific to the comparison topic. Single-expand mode. FAQ schema markup.

### Question Patterns (apply to all comparison pages)

1. "Can I do [Option A] and also [Option B]?" — addresses both/and thinking
2. "Is [Winner] really better than [Alternative]?" — validates the recommendation
3. "Why is [Alternative] more expensive?" — addresses the price gap
4. "What about [Third Option]?" — catches visitors thinking about Delaware, NM, etc.
5. "Can I switch later?" — reduces commitment anxiety
6. "What if I already have an entity?" — catches existing-entity visitors

---

## SEO & Competitive Position

Comparison pages fill a competitive content vacuum. No competitor in the privacy niche has systematic comparison content. These pages target decision-stage keywords ("Wyoming vs Nevada LLC," "best state for anonymous LLC") where searchers have high purchase intent.

**Key SEO rules:**
- Every comparison page gets FAQ schema markup (featured snippet opportunities)
- Table data should be in semantic HTML `<table>` elements (not divs), enabling Google to display table snippets
- Target keywords appear in H1, first paragraph, and table headers
- Each page links to both package pages (the conversion endpoints) and the parent pillar (the educational hub)

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
