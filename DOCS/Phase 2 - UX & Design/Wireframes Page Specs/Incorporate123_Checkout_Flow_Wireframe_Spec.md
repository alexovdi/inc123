# Incorporate123 — Checkout Flow Wireframe Specification

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** Checkout Flow (4 steps)
**URLs:** `/checkout/configure/` → `/checkout/details/` → `/checkout/payment/` → `/checkout/confirmation/`
**Reuse:** This is the only checkout flow — all packages and add-ons funnel through the same 4-step process.

---

## 1. Flow Purpose & Strategic Role

The checkout flow is where every conversion on the site completes. Every pillar page, every cluster page, every comparison page, every package page — they all point here. The flow must be fast, clear, and trust-reinforcing. David's preference is "Order Now" self-service paths over consultation-heavy flows, so this checkout is designed for autonomous completion with optional human support at every step.

The competitive analysis found that the best-in-class checkout (Wyoming Corporate Services) uses a transparent 3-step wizard, while the worst (ZenBusiness) runs 8–10 upsell screens. Our target: 4 focused steps, completable in under 5 minutes, with no surprise upsells after the package page.

### Design Principles

- Every step shows exactly where you are and what's coming next
- The order summary is always visible — no hidden costs, no surprises
- Trust signals flank the payment fields — this is where ~20% of shoppers abandon due to trust concerns
- Mobile-optimized form design — large tap targets, no tiny dropdowns, minimal typing
- Step validation prevents moving forward with incomplete data but uses gentle inline errors, not alert dialogs
- "Talk to us" escape hatch visible on every step for visitors who get stuck

---

## 2. Step Indicator Component

Persistent across all 4 steps. Shows progress and allows backward navigation to completed steps.

### Structure

```
① Configure  ——  ② Details  ——  ③ Payment  ——  ④ Confirmation
   [active]        [upcoming]    [upcoming]      [upcoming]
```

### Behavior

| Rule | Description |
|------|-------------|
| Current step | Highlighted with filled circle and bold label |
| Completed steps | Checkmark icon replaces number. Clickable — user can go back to edit. |
| Upcoming steps | Muted circle with number. Not clickable. |
| Connector lines | Between each step. Solid for completed, dashed for upcoming. |
| Mobile | Compact version — show step numbers in small circles with current step label only. Or horizontal progress bar with "Step 2 of 4" text. |
| Position | Top of the checkout content area, below the page header. Fixed/sticky on mobile. |

---

## 3. Order Summary Sidebar

Persistent across Steps 1–3. Becomes the receipt on Step 4.

### Layout

**Desktop:** Right sidebar (30% width), sticky on scroll. Main form content is left (70%).
**Mobile:** Collapsed by default with a summary bar showing total. Tap to expand full summary. On Step 3 (payment), summary is expanded by default.

### Contents

| Element | Content |
|---------|---------|
| Package Name | "Wyoming Gold LLC" (updates based on selections) |
| Entity Type | "LLC" or "Corporation" |
| Base Price | "$1,275" (or Corp price if toggled) |
| Add-Ons (if any) | Each line item: "Expedited Filing — +$150", etc. |
| Divider | Visual separator before total |
| Total | "$1,425" (base + add-ons) in large, prominent type |
| Renewal Note | "Annual renewal: $525/year with nominees" below the total |
| Trust Badges | "30-Day Money-Back Guarantee" · "Secure Checkout" · "Crypto Accepted" |
| Help Link | "(775) 555-0123 · Questions? Call us" |

### Behavior

- Updates in real time as selections change on Step 1
- Carries forward through Steps 2 and 3 without change (unless user goes back)
- On Step 4, becomes the order receipt with order number and confirmation details added

---

## 4. Step 1: Package Configuration

**URL:** `/checkout/configure/`

This step may be partially or fully pre-populated if the visitor arrives from a package page with a tier already selected. If arrived directly, all selections start empty.

### Section Header

| Element | Content |
|---------|---------|
| Step Label | "Step 1 of 4" |
| Headline | "Configure Your Package" |
| Subtext | "Confirm your selections below. Your order summary updates in real time." |

### Form Sections

#### 4.1 State Selection

| Element | Content |
|---------|---------|
| Label | "Formation State" |
| Input Type | Segmented control or large radio buttons |
| Options | Wyoming · Nevada |
| Default | Pre-selected if arrived from a state-specific package page |
| Effect | Switching state changes available tiers and all pricing |

#### 4.2 Entity Type

| Element | Content |
|---------|---------|
| Label | "Entity Type" |
| Input Type | Segmented control or large radio buttons |
| Options | LLC · Corporation |
| Default | LLC |
| Effect | Switching entity type adjusts all prices (Corp adds ~$300) |

#### 4.3 Package Tier

| Element | Content |
|---------|---------|
| Label | "Select Your Package" |
| Input Type | Selectable cards (not a dropdown) |
| Options | Tier cards showing name, price, 3–4 key features each. Gold highlighted as "Recommended." |
| Wyoming Tiers | Silver ($900 LLC) · Gold ($1,275 LLC) |
| Nevada Tiers | Bronze ($1,000 LLC) · Silver ($1,275 LLC) · Gold ($1,800 LLC) |
| Default | Pre-selected tier if arrived from a package page |
| Effect | Selecting a tier updates the order summary sidebar |

Each tier card shows:
- Tier name and subtitle ("Expert Formation" / "Complete Privacy")
- Price with "all-inclusive" label
- 3–4 key included items
- "Recommended" badge on Gold
- Radio-style selection indicator

#### 4.4 Add-Ons (Optional)

| Element | Content |
|---------|---------|
| Label | "Optional Add-Ons" |
| Input Type | Checkboxes |
| Layout | List with checkbox, name, price, one-line description per item |

**Add-On Options:**

| Add-On | Price | Description |
|--------|-------|-------------|
| Expedited Filing (24-hour rush) | +$150 | Get your entity filed within 24 hours |
| Virtual Office (state address) | +$400 | Dedicated business address with mail scanning, forwarding, virtual phone |
| Corporate Record Book | +$75 | Physical bound record book with all formation documents |
| Foreign State Registration | +$350–$500 | Register to do business in another state (CA, FL, TX, NY, etc.) |
| Shelf Company Upgrade | Varies | Upgrade to an aged entity. Select age from inventory. |

Each checkbox toggle updates the order summary total in real time.

#### 4.5 Navigation

| Element | Content |
|---------|---------|
| Primary CTA | "Continue to Entity Details →" |
| Validation | At least state + entity type + tier must be selected before proceeding |
| Error | Inline highlight on unselected required fields with "Please select a [field]" message |
| Back Link | "← Back to Package Page" |

---

## 5. Step 2: Entity Details

**URL:** `/checkout/details/`

Collects the information needed to file the entity with the state. Form fields are grouped into logical sections with clear labels.

### Section Header

| Element | Content |
|---------|---------|
| Step Label | "Step 2 of 4" |
| Headline | "Your Entity Details" |
| Subtext | "We use this information to prepare and file your formation documents." |

### Form Sections

#### 5.1 Company Information

| Field | Type | Required | Placeholder / Help Text |
|-------|------|----------|------------------------|
| Company Name (1st Choice) | Text input | Yes | "e.g., Acme Holdings LLC" |
| Company Name (2nd Choice) | Text input | No | "Backup name if first choice is taken" |
| Company Name (3rd Choice) | Text input | No | "Second backup name" |
| Business Purpose | Text area (2 lines) | No | "Brief description of business activity. Leave blank for 'any lawful purpose.'" |

Help note below company name: "We check name availability with the Secretary of State. If your first choice is taken, we'll use your backup names in order."

#### 5.2 Member / Officer Information

For LLC (Members/Managers):

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full Legal Name | Text | Yes | Person or entity name |
| Address | Address fields (street, city, state, zip, country) | Yes | Mailing address |
| Ownership Percentage | Number | Yes | Must total 100% across all members |
| Role | Select | Yes | "Member" / "Manager" / "Member-Manager" |
| "Add Another Member" | Button | — | Allows multiple members |

For Corporation (Officers/Directors):

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Officer Name | Text | Yes | |
| Title | Select | Yes | "President" / "Secretary" / "Treasurer" / "Director" |
| Address | Address fields | Yes | |
| "Add Another Officer" | Button | — | Allows multiple |

**Privacy Note (for Gold packages):** A callout box appears here: "Your nominee officer will appear on all public filings instead of the information above. Your personal details are kept confidential and used only for internal records."

#### 5.3 Registered Agent

| Element | Content |
|---------|---------|
| Display | Pre-filled: "Incorporate123 — Reno, Nevada" with address |
| Note | "Registered agent service is included in your package. You don't need to provide anything here." |
| Edit Option | None — this is informational only |

#### 5.4 Contact Information

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full Name | Text | Yes | Primary contact for this order |
| Email | Email | Yes | Order confirmation and documents delivered here |
| Phone | Tel | Yes | For questions about your filing |
| Preferred Contact Method | Radio | No | Email / Phone / Either |

#### 5.5 Special Instructions

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Additional Notes | Text area (3 lines) | No | "Anything else we should know about your formation?" |

#### 5.6 Navigation

| Element | Content |
|---------|---------|
| Primary CTA | "Continue to Payment →" |
| Validation | All required fields must be completed. Inline validation as user leaves each field. |
| Error Style | Red border on field, error message below: "Company name is required" |
| Back Link | "← Back to Configuration" (returns to Step 1 with all selections preserved) |

---

## 6. Step 3: Payment

**URL:** `/checkout/payment/`

The payment step. Trust signals are most critical here — research shows ~20% of shoppers abandon checkout due to not trusting the site with payment information.

### Section Header

| Element | Content |
|---------|---------|
| Step Label | "Step 3 of 4" |
| Headline | "Secure Payment" |
| Subtext | "Your payment is encrypted and processed securely through Stripe." |

### Form Sections

#### 6.1 Billing Address

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Same as contact address | Checkbox | — | If checked, auto-fills from Step 2 |
| Street Address | Text | Yes | |
| City | Text | Yes | |
| State / Province | Select | Yes | |
| ZIP / Postal Code | Text | Yes | |
| Country | Select | Yes | Default: United States |

#### 6.2 Payment Method Selection

| Element | Content |
|---------|---------|
| Option A | "Credit / Debit Card" — selected by default |
| Option B | "PayPal" |
| Option C | "Cryptocurrency" (Bitcoin, Ethereum, XRP, Litecoin, Monero) |
| Layout | Large radio buttons or tabbed selector |

#### 6.3 Credit Card Form (shown when Option A selected)

Mock Stripe Elements-style card input:

| Field | Type | Notes |
|-------|------|-------|
| Card Number | Text (formatted: xxxx xxxx xxxx xxxx) | Stripe Elements or mock equivalent |
| Expiration | Text (MM/YY) | |
| CVC | Text (xxx) | |
| Name on Card | Text | |

For the prototype: mock Stripe Elements UI with realistic card field styling (single-line card input with icon, or split fields). No actual payment processing.

#### 6.4 PayPal (shown when Option B selected)

| Element | Content |
|---------|---------|
| Display | "You'll be redirected to PayPal to complete your payment." |
| CTA | "Pay with PayPal →" (yellow PayPal-style button) |

#### 6.5 Cryptocurrency (shown when Option C selected)

| Element | Content |
|---------|---------|
| Display | "Select your cryptocurrency and we'll provide a wallet address for payment." |
| Crypto Options | Bitcoin · Ethereum · XRP · Litecoin · Monero (selectable icons/pills) |
| Note | "After placing your order, you'll receive a wallet address and payment instructions by email. Formation begins upon payment confirmation." |

#### 6.6 Trust Signals (Critical Placement)

Trust signals must flank the payment form — not buried at the bottom of the page.

| Element | Placement |
|---------|-----------|
| Lock icon + "256-bit SSL Encryption" | Next to card input fields |
| "30-Day Money-Back Guarantee" | Below payment form, above submit button |
| "Trusted Since 2000 · 25 Years" | Below payment form |
| Payment method icons | Visa, Mastercard, AMEX, BTC, ETH logos near card input |
| Phone number | "(775) 555-0123 · Questions before paying?" below trust signals |

#### 6.7 Order Review (expanded on mobile, inline on desktop)

Before submitting, the visitor sees a final order review:

| Element | Content |
|---------|---------|
| Package | "Wyoming Gold LLC" |
| Add-Ons | Each line item |
| Total | "$1,425" |
| Renewal | "Annual renewal: $525/year starting Year 2" |
| Terms Checkbox | "I agree to the Terms of Service and Privacy Policy" (required, with links) |

#### 6.8 Navigation

| Element | Content |
|---------|---------|
| Primary CTA | "Place Order — $1,425 →" (amount matches total) |
| Validation | Payment fields complete + terms checkbox checked |
| Error | Inline errors on card fields: "Invalid card number", "Card expired" |
| Back Link | "← Back to Entity Details" |
| Security Note | "Your card information is processed securely by Stripe and is never stored on our servers." |

---

## 7. Step 4: Confirmation

**URL:** `/checkout/confirmation/`

Order complete. This page reassures the buyer, sets expectations for what happens next, and provides a clear path forward.

### Section Header

| Element | Content |
|---------|---------|
| Icon | Large checkmark in a circle (success state) |
| Headline | "Your Order is Confirmed!" |
| Subheadline | "Thank you for choosing Incorporate123. We're preparing your formation documents now." |

### 7.1 Order Confirmation Details

| Element | Content |
|---------|---------|
| Order Number | "#INC-2026-XXXXX" (generated) |
| Date | Order date |
| Email Confirmation | "A confirmation email has been sent to [email@address.com]" |

### 7.2 Order Summary (receipt version)

Same order summary sidebar content, now displayed as a full-width receipt card:

| Element | Content |
|---------|---------|
| Package | Wyoming Gold LLC |
| Entity Name | "Acme Holdings LLC" (from Step 2) |
| State | Wyoming |
| Add-Ons | Listed with prices |
| Total Charged | "$1,425" |
| Payment Method | "Visa ending in 4242" or "PayPal" or "Bitcoin" |
| Annual Renewal | "$525/year with nominees — starting Year 2" |

### 7.3 What Happens Next

A numbered timeline showing the next steps:

| Step | Timeline | Description |
|------|----------|-------------|
| 1 | "Now" | "We're checking name availability with the Wyoming Secretary of State." |
| 2 | "1–2 business days" | "Your Articles of Organization are filed. (24 hours with expedited filing.)" |
| 3 | "3–5 business days" | "Your EIN is obtained from the IRS." |
| 4 | "5–10 business days" | "You receive your complete formation package: articles, operating agreement, membership certificates, EIN confirmation, nominee setup confirmation, and registered agent details." |
| 5 | "Ongoing" | "Year-round nominee services, registered agent, and compliance support are active immediately." |

### 7.4 Action Buttons

| Element | Content |
|---------|---------|
| Primary CTA | "Print / Download Receipt" |
| Secondary CTA | "Return to Homepage →" |
| Account Link | "Set Up Client Login →" → `/login/` |
| Phone | "(775) 555-0123 · Questions about your order?" |

### 7.5 Cross-Sell (Subtle)

| Element | Content |
|---------|---------|
| Headline | "Protect Your Other Assets Too" |
| Description | "Now that your entity is formed, explore how asset protection structures can safeguard your wealth." |
| CTA | "Learn About Asset Protection →" → `/asset-protection/` |

This cross-sell is subtle and positioned BELOW the receipt and next-steps content. It should not feel like a checkout upsell.

---

## 8. Mobile-Specific Requirements

### Step Indicator on Mobile

Compact horizontal bar: "Step 2 of 4 — Entity Details" with a progress bar fill. No full step labels — just the current one.

### Order Summary on Mobile

- Collapsed by default on Steps 1–2: shows a summary bar at top of form with "Wyoming Gold LLC — $1,275" and a "View details ↓" toggle
- On Step 3 (Payment): expanded by default — visitor must see their total before entering payment
- On Step 4 (Confirmation): full receipt displayed

### Form Layout on Mobile

- All form fields stack to single column, full width
- Large input heights (minimum 48px tap target)
- Labels above inputs (not beside)
- Section headers with clear visual separation
- Floating labels or clear placeholder text
- Address fields: use single-line address autocomplete if possible, or clear street/city/state/zip stack

### Sticky Elements on Mobile

- Step indicator bar: fixed at top of viewport below header
- "Continue →" CTA button: fixed at bottom of viewport (replaces the general sticky CTA bar during checkout)

---

## 9. Form Validation Rules

### General

| Rule | Implementation |
|------|----------------|
| Required fields | Marked with asterisk (*). Validated on blur (when user leaves field) AND on submit attempt. |
| Error display | Red border on field + error message directly below the field in red text. |
| Success display | Green border or checkmark on valid fields (optional — don't over-decorate). |
| Submit button | Disabled (muted) until minimum required fields are completed. Enabled when valid. |
| Scroll to error | On submit with errors, page scrolls to the first error field. |

### Per-Step Validation

| Step | Required Before Continuing |
|------|---------------------------|
| Step 1 | State selected, entity type selected, package tier selected |
| Step 2 | Company name (1st choice), at least one member/officer with name and address, contact name + email + phone |
| Step 3 | All billing address fields, payment method completed, terms checkbox checked |
| Step 4 | N/A — display only |

---

## 10. Error & Edge Case Handling

| Scenario | Behavior |
|----------|----------|
| User hits back button | Returns to previous step with all data preserved |
| User clicks completed step in indicator | Returns to that step with all data preserved |
| Payment fails | Stay on Step 3. Display error: "Payment could not be processed. Please check your card details or try another payment method." Clear card fields. |
| Session timeout | Show overlay: "Your session has expired. Your selections have been saved." with "Resume Checkout →" button. |
| Network error | Show inline error: "Something went wrong. Please try again." with retry button. |

---

## 11. Interaction Behavior

| Element | Behavior |
|---------|----------|
| Step indicator | Click completed step to go back. Smooth transition between steps. |
| State/entity/tier selectors | Large selectable cards with clear active state. Click to select. |
| Add-on checkboxes | Toggle updates summary in real time. Smooth price counter animation. |
| Form fields | Validate on blur. Show inline errors immediately. |
| Payment method tabs | Switching shows relevant form (card / PayPal / crypto). Smooth content swap. |
| "Place Order" button | Shows loading state (spinner + "Processing...") on click. Disabled during processing. |
| Confirmation success | Checkmark animation on arrival to Step 4. |

---

## 12. SEO & Technical

| Element | Value |
|---------|-------|
| Title Tags | "Checkout — Configure | Incorporate123", "Checkout — Entity Details | Incorporate123", etc. |
| Indexing | All checkout pages should be `noindex, nofollow` — these are transactional, not SEO targets |
| Schema | No schema needed on checkout pages |
| Analytics | Track funnel drop-off: Step 1 → Step 2 → Step 3 → Step 4 conversion rates |
| Session | All selections persist across steps. Back navigation preserves all data. |

---

## 13. Content Dependencies

| Item | Status | Owner |
|------|--------|-------|
| Final package pricing per state/tier/entity | Pending | David |
| Add-on pricing confirmed | Pending | David |
| Payment gateway credentials (Stripe) | Needed | David |
| PayPal business account | Needed | David |
| Crypto payment processor selection | Needed | David |
| Entity formation form fields confirmed | Need David to verify required fields match state filing requirements | David |
| Email template for order confirmation | Needed | BIT Studios |
| Terms of Service and Privacy Policy pages | Needed | David / Legal |

---

## 14. Component Reuse Map

| Component | First Used | Reused On |
|-----------|-----------|-----------|
| StepIndicator | This flow | Only here (unique to checkout) |
| OrderSummary (sidebar/collapsible) | This flow | Evolves from RunningTotal on package page |
| EntityTypeToggle | Package page | Reused on Step 1 |
| TierSelectorCards | Package page (PricingGrid) | Adapted for Step 1 selection |
| AddOnCheckboxes | Package page (Configurator) | Reused on Step 1 |
| FormInput / FormSelect / FormTextarea | This flow | Contact page form |
| PaymentMethodSelector | This flow | Only here |
| MockStripeInput | This flow | Only here |
| TrustSignalsBar | Homepage | Reused flanking payment form |
| MoneyBackBadge | Package page | Reused on Step 3 |
| ConfirmationTimeline | This flow | Only here |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
