# Incorporate123 — Page Specifications Index

> Master index of all unique page types in the redesigned site.
> Each spec covers: layout, sections, content status, components, and next steps.
> Created: 2026-04-10

## Site Summary

- **19 unique page types/templates**
- **65+ total pages** (templates expand via data)
- **10 existing wireframe specs** (in `../Wireframes Page Specs/`)
- **8 content guides** (in `../v2-post-david-review/` and `../v3-taxation-update/`)

---

## Page Types by Priority

### Tier 1 — Core Conversion (build quality first)

| #   | Page Type                                      | URL Pattern                   | Template? | Instances    | Spec        | Content Guide | Wireframe Spec |
| --- | ---------------------------------------------- | ----------------------------- | --------- | ------------ | ----------- | ------------- | -------------- |
| 1   | [Homepage](./01_Homepage.md)                   | `/`                           | No        | 1            | This folder | v3            | Yes            |
| 2   | [Tier/Package Page](./02_Tier_Page.md)         | `/bronze`, `/silver`, `/gold` | Yes       | 3 (x states) | This folder | v2            | Yes (Package)  |
| 3   | [Compare Packages](./03_Compare_Packages.md)   | `/compare-packages`           | No        | 1            | This folder | —             | —              |
| 4   | [Packages Overview](./04_Packages_Overview.md) | `/packages`                   | No        | 1            | This folder | —             | —              |
| 5   | [Checkout Flow](./05_Checkout_Flow.md)         | `/checkout/*`                 | Yes       | 4 steps      | This folder | —             | Yes            |

### Tier 2 — Educational Funnel (content depth)

| #   | Page Type                                  | URL Pattern                                                  | Template? | Instances | Spec        | Content Guide | Wireframe Spec |
| --- | ------------------------------------------ | ------------------------------------------------------------ | --------- | --------- | ----------- | ------------- | -------------- |
| 6   | [Pillar Page](./06_Pillar_Page.md)         | `/privacy`, `/asset-protection`, `/formation`, `/compliance` | Yes       | 4         | This folder | v2 (Privacy)  | Yes            |
| 7   | [Cluster Page](./07_Cluster_Page.md)       | `/:slug` (e.g., `/anonymous-llc`)                            | Yes       | ~24       | This folder | —             | Yes            |
| 8   | [Comparison Page](./08_Comparison_Page.md) | `/:slug` (e.g., `/wyoming-vs-nevada-privacy`)                | Yes       | ~12       | This folder | v2            | Yes            |
| 9   | [State Hub](./09_State_Hub.md)             | `/:slug` (e.g., `/wyoming`)                                  | Yes       | 4         | This folder | v2            | Yes            |

### Tier 3 — Supporting Pages (trust & utility)

| #   | Page Type                                              | URL Pattern       | Template? | Instances | Spec        | Content Guide | Wireframe Spec |
| --- | ------------------------------------------------------ | ----------------- | --------- | --------- | ----------- | ------------- | -------------- |
| 10  | [About](./10_About.md)                                 | `/about`          | No        | 1         | This folder | v2            | Yes            |
| 11  | [Contact](./11_Contact.md)                             | `/contact`        | No        | 1         | This folder | —             | Yes            |
| 12  | [FAQ](./12_FAQ.md)                                     | `/faq`            | No        | 1         | This folder | v3            | Yes            |
| 13  | [Blog](./13_Blog.md)                                   | `/blog`           | No        | 1         | This folder | —             | —              |
| 14  | [Testimonials](./14_Testimonials.md)                   | `/testimonials`   | No        | 1         | This folder | —             | —              |
| 15  | [Offshore Hub](./15_Offshore_Hub.md)                   | `/offshore`       | No        | 1         | This folder | —             | —              |
| 16  | [Offshore Jurisdiction](./16_Offshore_Jurisdiction.md) | `/offshore/:slug` | Yes       | 5         | This folder | —             | —              |

### Tier 4 — Legal & Utility

| #   | Page Type                                | URL Pattern       | Template? | Instances | Spec        | Content Guide | Wireframe Spec |
| --- | ---------------------------------------- | ----------------- | --------- | --------- | ----------- | ------------- | -------------- |
| 17  | [Privacy Policy](./17_Privacy_Policy.md) | `/privacy-policy` | No        | 1         | This folder | —             | —              |
| 18  | [Terms of Service](./18_Terms.md)        | `/terms`          | No        | 1         | This folder | —             | —              |
| 19  | [404 / Not Found](./19_Not_Found.md)     | `*`               | No        | 1         | This folder | —             | —              |

---

## Template vs. Unique Pages

**Templates** (5 types → 52+ pages):

- Tier Page × 3 tiers × 4 states = ~12 configurations
- Pillar Page × 4 pillars
- Cluster Page × ~24 topics
- Comparison Page × ~12 matchups
- Offshore Jurisdiction × 5 jurisdictions
- State Hub × 4 states

**Unique pages** (14):

- Homepage, Compare Packages, Packages Overview, Checkout (4 steps), About, Contact, FAQ, Blog, Testimonials, Offshore Hub, Privacy Policy, Terms, 404

---

## Content Readiness Summary

| Status              | Count     | Description                            |
| ------------------- | --------- | -------------------------------------- |
| Ready to publish    | ~15 pages | Content exists, needs minor editing    |
| Needs enhancement   | ~20 pages | Structure exists, needs expansion      |
| Needs writing       | ~17 pages | Scaffolding only or blank              |
| Needs David's input | ~13 pages | Waiting on client verification/content |

---

## Cross-References

- **Wireframe Specs:** `../Wireframes Page Specs/`
- **Content Guides:** `../v2-post-david-review/` (v2) and `../v3-taxation-update/` (v3)
- **Brand Guide:** `../v2-post-david-review/Incorporate123_Brand_Guide_v3.md`
- **Package Strategy:** `../../Meeting Prep Apr 6/` (v2 docs)
- **Mapped Content:** `../mapped-content-from-real-one/`
- **Prototype:** `inc123-prototype/src/app/` (page components)
