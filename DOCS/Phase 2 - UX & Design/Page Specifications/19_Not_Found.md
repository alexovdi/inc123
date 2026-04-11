# 404 / Not Found Page

> URL: `*` (catch-all) | Layout: Full-width single-column | Unique page

## Purpose

Error recovery page. Catches invalid URLs and helps visitors find what they're looking for. Also catches the ~170 old URLs that don't have redirects set up yet. Should be helpful, not just an error message.

## Layout

- Full-width, single-column, centered
- Max-width: 800px
- Vertically centered on viewport

## Sections

1. **Error Message** — Large "404" number. H1: "Page Not Found". Subheadline: "The page you're looking for doesn't exist or has moved. Let us help you find what you need."
2. **Quick Links** — 4 cards with icons pointing to most useful destinations:
   - Homepage (house icon) — "Start here"
   - Packages (package icon) — "View our formation packages"
   - FAQ (question icon) — "Find answers to common questions"
   - Contact (phone icon) — "Talk to a specialist"
3. **Search Suggestion** — Optional: "Looking for something specific? Try searching our FAQ" + link to /faq with search bar.
4. **Phone Fallback** — "Or call us directly: [phone number]" — tap-to-call on mobile.

## Content Status

| Section       | Status      | Notes                       |
| ------------- | ----------- | --------------------------- |
| Error message | Ready       | Simple, can finalize now    |
| Quick links   | Ready       | All destination pages exist |
| Phone         | Needs David | Phone number confirmation   |

## Key Components

`NotFoundHero`, `QuickLinkCard`, `PhoneLink`

## Prototype Status

Fully built. Shows 404 hero, quick links to homepage/packages/FAQ/contact with icons, phone number link. Clean and functional.

## Existing Specs

- No wireframe spec (simple page)
- No content guide

## Redirect Strategy

The ~170 old-site URLs are handled via redirect rules in the router (legacy redirects already set up for major package URLs). Remaining old URLs that don't match redirects will land here. Post-launch analytics should track 404 hits to identify missing redirects.

## Next Steps

- [ ] Confirm phone number with David
- [ ] Consider adding search functionality (or just link to FAQ search)
- [ ] Monitor 404 hits post-launch to add missing redirects
- [ ] Design pass: make it friendly, not clinical
