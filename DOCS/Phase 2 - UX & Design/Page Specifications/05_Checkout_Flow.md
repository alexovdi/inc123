# Checkout Flow

> URL: `/checkout/configure` → `/checkout/details` → `/checkout/payment` → `/checkout/confirmation`
> Layout: 70/30 split (form + order summary) | 4-step flow

## Purpose

Purchase funnel. All packages route here. Collects configuration choices, entity details, payment, and confirms the order. Must feel secure, transparent, and simple.

## Layout

- 70/30 split: form content (left) + order summary sidebar (right)
- Sidebar becomes collapsible summary bar on mobile
- Step indicator persistent at top
- Max-width: 1200px
- No site header/footer — uses `CheckoutLayoutClient`

## Steps

### Step 1: Configure (`/checkout/configure`)

1. **Step Indicator** — ① Configure (active) → ② Details → ③ Payment → ④ Confirmation
2. **State Selection** — Radio: Wyoming, Nevada (CA/FL route through WY + foreign registration)
3. **Entity Type** — Radio: LLC, Corporation (+$300 note for corp)
4. **Package Tier** — Selectable cards: Bronze, Silver, Gold. "Recommended" badge on Gold. Shows price + 3-4 key features per card.
5. **Add-Ons** — Checkboxes with pricing: Expedited Filing +$150, Corporate Record Book +$75, Foreign State Registration +$350-$500.
6. **Navigation** — "Continue to Entity Details →" + "← Back to Package Page"

### Step 2: Entity Details (`/checkout/details`)

1. **Step Indicator** — ① ✓ → ② Details (active) → ③ → ④
2. **Company Information** — Company name (1st/2nd/3rd choice), business purpose
3. **Member/Officer Info** — Repeatable: name, address, ownership %, role. "Add Another Member" button.
4. **Registered Agent** — Pre-filled: "Incorporate123 — Reno, Nevada" (informational only)
5. **Contact Information** — Full name, email, phone, preferred contact method
6. **Special Instructions** — Textarea for additional notes
7. **Privacy Note** — (Gold only): "Your nominee officer will appear on all public filings instead of the information above."
8. **Navigation** — "Continue to Payment →" + "← Back to Configuration"

### Step 3: Payment (`/checkout/payment`)

1. **Step Indicator** — ① ✓ → ② ✓ → ③ Payment (active) → ④
2. **Billing Address** — Street, city, state, ZIP, country. "Same as contact address" checkbox.
3. **Payment Method** — Radio: Credit/Debit Card, PayPal, Cryptocurrency
4. **Card Form** — Mock Stripe Elements: card number, expiration, CVC, name
5. **PayPal** — Redirect button
6. **Crypto** — Coin selector + wallet address display
7. **Trust Signals** — 256-bit SSL, 30-Day Money-Back, Trusted Since 2000, payment icons
8. **Order Review** — Expandable summary: package, add-ons, total, renewal, terms checkbox
9. **Terms Checkbox** — "I agree to Terms of Service and Privacy Policy" (required)
10. **Navigation** — "Place Order — $[total]" + "← Back to Entity Details"

### Step 4: Confirmation (`/checkout/confirmation`)

1. **Step Indicator** — All ✓
2. **Success State** — Large checkmark + "Your Order is Confirmed!"
3. **Order Details** — Order #INC-2026-XXXXX, date, confirmation email note
4. **Order Receipt** — Full breakdown: package, entity name, state, add-ons, total, payment method, annual renewal
5. **"What Happens Next" Timeline** — 5 steps: Now (order received), 1-2 days (review), 3-5 days (filed), 5-10 days (docs delivered), Ongoing (compliance begins)
6. **Actions** — "Print Receipt", "Return to Homepage", phone for questions
7. **Cross-Sell** — Subtle: "Protect Your Other Assets Too" → /asset-protection

## Content Status

| Section        | Status        | Notes                                                 |
| -------------- | ------------- | ----------------------------------------------------- |
| Step 1 forms   | Ready         | Configuration options defined                         |
| Step 2 forms   | Ready         | Fields defined, needs state requirements verification |
| Step 3 forms   | Ready         | Mock payment UI built                                 |
| Step 4 receipt | Ready         | Layout and timeline built                             |
| Trust signals  | Ready         | All defined                                           |
| Cross-sell     | Needs writing | Brief copy for asset protection upsell                |

## State Management

Uses `CheckoutContext` across all steps:

- `selectedState`, `selectedTier`, `entityType`, `selectedAddOns`
- `companyDetails`, `billingAddress`
- `step` (1-4)
- State preserved when navigating back

## Key Components

`CheckoutLayoutClient`, `StepIndicator`, `StateSelector`, `EntityTypeToggle`, `TierSelector`, `AddOnConfigurator`, `MemberForm`, `PaymentForm`, `OrderSummary`, `ConfirmationReceipt`, `Timeline`, `TrustSignals`

## Prototype Status

Fully built. All 4 steps functional with context-based state management. Mock payment processing (1.5s delay). Order number generation on confirmation.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_Checkout_Flow_Wireframe_Spec.md`

## Next Steps

- [ ] Verify entity formation form fields against state requirements (David)
- [ ] Write cross-sell copy for confirmation page
- [ ] Design pass — ensure trust signals are prominent on payment step
- [ ] Production: Stripe integration, PayPal setup, crypto processor
- [ ] Production: Email confirmation template
- [ ] Production: Form submission backend
