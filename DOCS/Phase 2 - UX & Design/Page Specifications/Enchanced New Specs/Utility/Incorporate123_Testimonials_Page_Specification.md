# Testimonials — Page Specification

**Page:** Testimonials
**URL:** `/testimonials/`
**Template Type:** Social Proof
**Priority:** P1 — Launch
**Content Source:** Existing — enhance (+ Trustpilot integration post-launch)

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Aggregate all social proof in one place. With zero reviews on any public platform at launch, this page will initially rely on client quotes David supplies (anonymized for privacy-alignment) and will grow as the Trustpilot review program generates volume. The page's long-term goal is to reach parity with Wyoming Corporate Services (1,268 reviews, 5.0★) and approach NCH (12,263 reviews, 5.0★).

### 1.2 Strategic Role

- **Trust architecture component** — Referenced from every pillar page's social proof strip, every package page's trust section, and the homepage testimonial area
- **Trustpilot landing page** — Once reviews accumulate, this page embeds the Trustpilot widget and becomes the destination for "See all reviews" links
- **Conversion support** — Visitors who click "testimonials" are in the final validation stage before purchasing. The page must reinforce, not dilute, purchase intent.

### 1.3 Launch State vs. Post-Launch

| Phase | Content |
|-------|---------|
| **Launch** | 5–10 client-supplied quotes (anonymized). No Trustpilot widget. Trust badges + company stats as supporting signals. |
| **Post-launch (Month 2+)** | Trustpilot review widget embedded. Review count and average rating displayed. Automated review solicitation emails sent post-service. |
| **Target (Month 6)** | 100+ Trustpilot reviews. Page becomes a genuine competitive asset. |

---

## 2. Section Order

| # | Section | Role |
|---|---------|------|
| 1 | Testimonials Hero | H1 + trust stat (review count + average rating when available) |
| 2 | Featured Testimonials | 3–5 highlighted quotes with more detail — category-tagged (Privacy, AP, Formation) |
| 3 | Testimonial Grid | All testimonials in card format — filterable by category |
| 4 | Trustpilot Widget (post-launch) | Embedded Trustpilot review feed — live from the platform |
| 5 | Trust Stats Strip | 25 years, entities formed, states, crypto accepted |
| 6 | CTA | "Ready to join them?" + package/consultation CTAs |

---

## 3. Key Specifications

### Testimonial Card Format

```
★★★★★
"We chose Wyoming Gold specifically for the year-round nominee
services. Two years later, our name has never appeared in any
public filing."

— Business owner, Texas
   Service: Wyoming Gold (Privacy)
   Client since: 2024
```

**Dev Notes:**
- Client names are WITHHELD by default — this aligns with the privacy positioning. "Name withheld for privacy" is a feature, not a weakness. It reinforces the brand promise.
- Category badge: tag each testimonial with the relevant service (Privacy, AP, Formation, Compliance, Offshore)
- Star rating: 5 stars by default — only real reviews should show variable ratings (once Trustpilot is active)
- State/location: include the client's state (e.g., "Business owner, Texas") for geographic diversity signal

### Category Filter

Visitors can filter testimonials by:
- All
- Privacy / Nominees
- Asset Protection
- Formation
- Compliance
- Offshore

### Privacy-Aligned Anonymization

```
DO show: Industry, state, service purchased, time as client
DON'T show: Full name, business name, specific details that could identify the client

"This is not a limitation — it's a deliberate demonstration of the privacy we provide."
```

The anonymization itself is a trust signal. A short note at the top of the page: "Client names are withheld at their request — because privacy is what we do."

### Trustpilot Widget (Post-Launch)

Once the Trustpilot review program is active:
- Embed the official Trustpilot widget (carousel or grid format)
- Display aggregate rating and review count prominently
- Link to Incorporate123's Trustpilot profile page
- Automated review solicitation: email sent X days post-service-completion inviting a review

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | "What Our Clients Say" |
| **Title tag** | "Client Testimonials — Privacy & Formation Reviews \| Incorporate123" |
| **Meta description** | "Read what clients say about Incorporate123's privacy incorporation, nominee services, and asset protection. 25 years of specialized experience. Client names withheld — because privacy is what we do." |
| **Schema** | Review (aggregate when Trustpilot active), BreadcrumbList |
| **Trustpilot integration** | Official Trustpilot widget — embedded post-launch |

---

## 5. Content Notes for David

1. **Client quotes** — David must supply 5–10 client testimonials for launch. They can be anonymized (and should be, for brand alignment). Include: quote text, client's state, service purchased, approximate time as client.
2. **Trustpilot setup** — Create Trustpilot business profile. Set up automated review solicitation emails (sent X days after service completion). Target: 100+ reviews in 6 months.
3. **Anonymization statement** — "Client names withheld at their request — because privacy is what we do." Does David approve this framing?
4. **Review volume gap** — Wyoming Corporate Services has 1,268 reviews (5.0★). NCH has 12,263. ZenBusiness has 25,821. Incorporate123 has 0. Closing this gap is the single most important post-launch trust initiative.

---

*End of Specification — Testimonials*
*Confidential — BIT Studios × Incorporate123 — April 2026*
