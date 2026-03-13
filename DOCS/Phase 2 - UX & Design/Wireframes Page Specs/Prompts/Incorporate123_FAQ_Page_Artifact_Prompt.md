# Resource/FAQ Page Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_FAQ_Page_Wireframe_Spec.md` file.

---

Build the Incorporate123 FAQ page (`/faq/`) as a single React artifact (.jsx) based on the attached wireframe specification. This is the consolidated replacement for the current Learning Center (244 URLs, 188 FAQ items). The unique interactive challenge: real-time search filtering + category filtering working together across ~45 questions organized by pillar category.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, highly functional FAQ reference page. This should feel like a well-organized knowledge base — think Stripe's docs or Notion's help center. Clean, searchable, fast, scannable. Category colors use the four pillar identity colors (blue for Privacy, green for AP, amber for Formation, purple for Compliance) as subtle accents.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Search, X, ChevronDown, ChevronUp, Shield, Vault, Building2, ClipboardCheck, Package, HelpCircle, Phone, ArrowRight, MessageCircle)
- React hooks: useState for search query, active category, expanded questions set
- useMemo for filtered question list (search + category combined)
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML

## State Architecture

```
searchQuery: ''              // text input, filters in real time
activeCategory: 'all'        // 'all' | 'privacy' | 'asset-protection' | 'formation' | 'compliance' | 'packages' | 'general'
expandedQuestions: new Set()  // multi-expand — track which question IDs are open
```

## FAQ Data Structure

Build all ~45 questions from the spec into a data array:

```javascript
const faqs = [
  { id: 'privacy-1', category: 'privacy', question: 'What is an anonymous LLC?', answer: '...' },
  { id: 'privacy-2', category: 'privacy', question: 'What states allow anonymous LLCs?', answer: '...' },
  // ... all 45 questions
]
```

Write realistic 2–4 sentence answers for every question. Answers should be informative, precise, and use specific numbers where relevant ($1,275, $525/year, 25 years, etc.). Some answers should include a "Learn more →" text link pointing to the relevant cluster or pillar page.

## Filtering Logic

The search and category filter COMBINE:

```javascript
const filtered = useMemo(() => {
  return faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })
}, [searchQuery, activeCategory])
```

Show a result count that updates in real time: "Showing {filtered.length} of {faqs.length} questions" — or "Showing {filtered.length} of {categoryCount} {categoryName} questions" when a category is active.

## Page Structure — Build Every Section

### Header & Footer
Same as other pages. No specific nav item active (FAQ is a utility page). Breadcrumb: Home > FAQ.

### Section 1: Hero
- Eyebrow: "Resources"
- H1: "Frequently Asked Questions"
- Subheadline from spec (mentions phone number as fallback)
- Clean, compact — this hero is functional, not marketing

### Section 2: Search Bar
- THE most important element on the page
- Large, prominent input field with Search icon inside
- Placeholder: "Search questions... e.g., 'nominee officer' or 'Wyoming annual report'"
- Filters in real time as user types (debounce ~200ms with setTimeout)
- Clear button (X icon) appears inside when text is entered
- When search is active, questions display as a flat filtered list (not grouped by category) with category tags on each item
- When search is empty, questions display grouped by category (default view)

### Section 3: Category Filter Pills
- Horizontal row of pills/tabs directly below search
- 7 options: All · Privacy · Asset Protection · Formation · Compliance · Packages & Pricing · General
- "All" selected by default with active visual state
- Pillar categories use their identity color as a subtle accent (border or text color when active)
- Click to filter. Combines with search.
- Desktop: full row visible. Mobile: horizontal scroll or wrap to 2 rows.

### Section 4: Result Count
- "Showing 45 of 45 questions" (updates in real time)
- When filtered: "Showing 8 of 45 questions" or "Showing 5 of 12 Privacy questions"

### Section 5: FAQ Content Area

**Default View (no search active):**
Questions grouped under category headings. Each category section:
- H2 category header with pillar color left border accent and question count: "Privacy (12)"
- Accordion items listed below
- "Related guides" links at bottom of each category section (2 links per spec)

**Search View (search input has text):**
Questions in a flat filtered list (no category groupings):
- Each question row shows a small category tag/pill (e.g., "Privacy" in blue) before the question text
- Results sorted by relevance (match in question weighted higher than match in answer) — or just keep original order if simpler
- Matching text highlighted in the question/answer (optional — nice to have, not required)

**Each FAQ Item:**
- Question row: full-width clickable bar with question text + ChevronDown icon
- Click toggles expand/collapse
- Answer: 2–4 sentences, may include "Learn more →" link
- Multi-expand mode — opening one does NOT close others
- Smooth height animation
- Keyboard accessible: Enter/Space to toggle, arrow keys between items

**Empty State:**
When search + filter returns 0 results:
"No questions match your search. Try different keywords or call us at (775) 555-0123."

### Section 6: Related Guides (per category)
At the bottom of each category section in default view:
- 2 contextual links per the spec's Related Guides section
- Privacy: "Read the full Anonymous LLC Guide →" + "Compare States for Privacy →"
- (all other categories per spec)

### Section 7: Bottom CTA
- "Still Have Questions?"
- "Our team has 25 years of experience..." description
- Primary: "Call (775) 555-0123" (tap-to-call button)
- Secondary: "Send Us a Message →" → `/contact/`
- Tertiary: "View Packages & Pricing →" → `/compare-packages/`

### Mobile Sticky CTA Bar
Phone-first variant: "Call Us" button + message icon (instead of the usual "View Packages" — this page's visitors need answers, not a package link)

## Content Rules

- Use ALL 45 questions from the spec organized by category
- Write realistic, substantive 2–4 sentence answers for every question
- Answers should use specific numbers: $1,275, $525/year, 25 years, $62 WY annual fee, etc.
- Some answers include "Learn more →" links to relevant pages
- Phone: (775) 555-0123
- All links: `href="#"`

## Full-Width Layout

No sidebar. Single column, narrower max-width than other pages (~900px) for optimal reading of text-heavy FAQ content. Search bar and category pills span full container width.

## What Matters Most

1. **Search that actually works** — real-time filtering across question + answer text. This is the #1 interaction and must feel instant and reliable.
2. **Category + search combined** — filtering by "Privacy" then searching for "nominee" shows only Privacy questions containing "nominee." Both filters apply simultaneously.
3. **45 real questions with real answers** — this is a content-heavy page. Every answer must be substantive, not placeholder.
4. **Multi-expand accordion** — researchers browse FAQs by opening several questions. Never auto-close.
5. **Result count feedback** — user always knows how many questions match their current filter/search state.
6. **Empty state** — friendly message when nothing matches, with phone number as fallback.
7. **Clean, fast, functional** — this is a reference tool. Prioritize usability over visual flair. Think documentation site, not marketing page.
