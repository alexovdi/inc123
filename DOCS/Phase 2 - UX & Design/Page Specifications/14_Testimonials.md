# Testimonials Page

> URL: `/testimonials` | Layout: Full-width single-column | Unique page

## Purpose

Social proof aggregation page. Collects all client testimonials in one place. Supports trust-building for visitors doing due diligence. Also feeds testimonial components used across other pages (homepage, package pages, about).

## Layout

- Full-width, single-column
- Max-width: 1200px
- Testimonial grid: 3 columns desktop, 2 tablet, 1 mobile (masonry-style for variable height)

## Sections

1. **Breadcrumbs** — Home > Testimonials
2. **Hero** — H1: "What Our Clients Say". Subheadline: "Real experiences from business owners who chose Incorporate123 for privacy, asset protection, and formation." Trust stat: "[X] clients served since 2000" (if available).
3. **Stats Strip** — 3-4 key numbers: years in business, clients served (if available), states served, average rating. Only use verifiable numbers.
4. **Filter/Category** — Optional pills: All | Privacy | Asset Protection | Formation | General. Only if enough testimonials to warrant filtering.
5. **Testimonial Grid** — Card grid (masonry or uniform). Each card:
   - Star rating (1-5 stars)
   - Quote text (2-5 sentences)
   - Client name or initials (anonymized if needed — privacy company!)
   - Client details: industry, state, year (optional)
   - Service used badge (e.g., "Wyoming Gold", "Nevada Silver")
6. **CTA Section** — "Ready to Join Them?" + "View Packages" + "Contact Us" + phone.

## Content Status

| Section      | Status              | Notes                                         |
| ------------ | ------------------- | --------------------------------------------- |
| Hero         | Needs writing       | Simple, can write now                         |
| Stats        | Pending             | Needs client count from David                 |
| Testimonials | Partially available | 10 quotes exist in mapped content (640 words) |
| CTA          | Ready               | Standard package + contact CTAs               |

**Available testimonials (from current site):**

- 10 client quotes covering: formation speed, professionalism, service quality, helpfulness
- Mix of anonymized and named clients
- Need to verify these are real and approved for use on new site

## Key Components

`TestimonialsHero`, `StatsStrip`, `TestimonialCard`, `CategoryFilter` (optional), `CTASection`

## Prototype Status

Fully built. Has hero, stats strip, testimonial grid with star ratings and client info. Uses mock data — needs real testimonials populated.

## Existing Specs

- No dedicated wireframe spec (NEW)
- No content guide (NEW)

## Privacy Consideration

This is a privacy-focused company — testimonials must respect client confidentiality:

- Use initials or first name only unless client explicitly approves full name
- Include industry/state but not company name (unless approved)
- Never disclose entity names or formation details without permission
- Consider: "J.T., Real Estate Investor, California" format

## Next Steps

- [ ] Get David to verify existing 10 testimonials are approved for new site
- [ ] Get David to collect additional testimonials (target 15-20 total)
- [ ] Define anonymization rules with David
- [ ] Populate real testimonials in prototype data
- [ ] Decide on filtering (probably skip at launch — not enough volume)
- [ ] Get client count for stats strip (or use "hundreds of clients" if exact unknown)
- [ ] Consider Trustpilot integration post-launch
