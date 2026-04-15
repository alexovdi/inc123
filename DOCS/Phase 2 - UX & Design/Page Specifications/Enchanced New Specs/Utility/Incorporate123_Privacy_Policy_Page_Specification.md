# Privacy Policy — Page Specification

**Page:** Privacy Policy
**URL:** `/privacy-policy/`
**Template Type:** Legal
**Priority:** P1 — Launch
**Content Source:** Existing — preserve

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Legal compliance. Standard privacy policy disclosing how Incorporate123 collects, uses, stores, and protects visitor and client data. Required by law (CCPA, GDPR for international visitors, and general regulatory best practice).

### 1.2 Strategic Nuance

For a company whose entire brand is built on **privacy**, the privacy policy carries more weight than on a typical business website. Visitors — especially privacy-conscious ones — may actually read this page. The policy must be transparent, specific, and consistent with the privacy-first positioning. Any perception of hypocrisy ("they sell privacy but collect everything") would undermine the brand.

---

## 2. Section Order

| # | Section | Content |
|---|---------|---------|
| 1 | Legal Header | H1 + effective date + "Last updated" date |
| 2 | Information We Collect | Personal info (name, email, phone), payment info (processed by Stripe/PayPal — not stored), entity formation details, website analytics (GA4) |
| 3 | How We Use Your Information | Service delivery, communication, legal compliance, website improvement |
| 4 | How We Protect Your Information | Encryption, secure payment processing, offshore records storage where applicable, data retention policies |
| 5 | Information We Share | Third parties: state filing agencies (required for formation), payment processors, registered agent partners. Explicit: "We do not sell your personal information." |
| 6 | Cookies & Tracking | Analytics (GA4), essential cookies, no advertising cookies, no third-party tracking pixels |
| 7 | Your Rights | Access, correction, deletion, opt-out. CCPA rights for California residents. |
| 8 | Data Retention | How long data is kept and why |
| 9 | Children's Privacy | Standard COPPA compliance statement |
| 10 | Changes to This Policy | How updates are communicated |
| 11 | Contact Information | How to reach us with privacy questions |

---

## 3. Key Specifications

### Layout

- White background, single column, max-width (reading-optimized)
- Standard prose — no progressive disclosure, no accordions. Legal documents should be fully visible and scrollable.
- Table of contents at the top with anchor links to each section
- Last updated date prominently displayed
- Print-friendly (no background colors that waste ink)

### Brand-Aligned Privacy Statements

The following statements should appear prominently (if David and legal counsel approve):

```
"We do not sell, rent, or trade your personal information to
third parties — ever."

"We do not use advertising cookies or third-party tracking pixels."

"Client entity formation records maintained through our offshore
custodian are subject to the privacy protections described in your
service agreement."
```

### Crypto Payment Privacy

If crypto payments are accepted, the privacy policy should address how cryptocurrency transaction data is handled — wallet addresses, transaction IDs, and whether any KYC data is collected for crypto transactions.

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | "Privacy Policy" |
| **Title tag** | "Privacy Policy \| Incorporate123" |
| **Meta description** | "Incorporate123's privacy policy. How we collect, use, and protect your information. We do not sell your personal data." |
| **Schema** | WebPage, BreadcrumbList |
| **Robots** | `index, follow` — privacy policies should be indexable (legal best practice) |
| **URL note** | `/privacy-policy/` — NOT `/privacy/` (that's the Privacy pillar page) |

---

## 5. Content Notes for David

1. **Legal review** — The privacy policy should be reviewed by legal counsel before publication. This spec provides structure, not legal advice.
2. **Current policy** — Does the existing site have a privacy policy? If so, it should be reviewed for accuracy against the new site's data collection practices (GA4, Stripe/PayPal, form submissions, etc.).
3. **Crypto KYC** — Does Incorporate123 collect KYC data for cryptocurrency payments? This affects the privacy policy's data collection disclosures.
4. **GDPR applicability** — Does Incorporate123 serve EU residents? If so, GDPR provisions (consent, right to erasure, DPO contact) are required.
5. **Government information requests** — The current site mentions resisting informal government requests for client information. Should the privacy policy address law enforcement data requests and the company's policy for responding?

---

*End of Specification — Privacy Policy*
*Confidential — BIT Studios × Incorporate123 — April 2026*
