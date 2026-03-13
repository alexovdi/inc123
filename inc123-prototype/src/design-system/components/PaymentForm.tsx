"use client";

import { type FormEvent, useState, useCallback } from "react";
import { cn } from "@/design-system/utils/cn";
import { Button, Icon } from "@/design-system/primitives";
import { Input } from "@/design-system/primitives/Input";
import { Select } from "@/design-system/primitives/Select";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface PaymentFormProps {
  /** Form submission handler */
  onSubmit: (data: PaymentFormData) => void;
  /** Whether to show billing address fields */
  billingFields?: boolean;
  /** Additional class names */
  className?: string;
}

export interface PaymentFormData {
  cardNumber: string;
  expiry: string;
  cvc: string;
  billingName?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
}

/* ------------------------------------------------
   Helpers
   ------------------------------------------------ */
const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

/** Format card number with spaces every 4 digits */
function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

/** Format expiry as MM/YY */
function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
}

/** Format CVC (3-4 digits) */
function formatCVC(value: string): string {
  return value.replace(/\D/g, "").slice(0, 4);
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PaymentForm({
  onSubmit,
  billingFields = true,
  className,
}: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({
        cardNumber: cardNumber.replace(/\s/g, ""),
        expiry,
        cvc,
        ...(billingFields && {
          billingName,
          billingAddress,
          billingCity,
          billingState,
          billingZip,
        }),
      });
    },
    [
      onSubmit,
      cardNumber,
      expiry,
      cvc,
      billingFields,
      billingName,
      billingAddress,
      billingCity,
      billingState,
      billingZip,
    ]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
      noValidate
    >
      {/* Card details */}
      <div className="space-y-4">
        <Input
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          required
          icon={<Icon name="CreditCard" size="sm" />}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            required
          />
          <Input
            label="CVC"
            placeholder="123"
            value={cvc}
            onChange={(e) => setCVC(formatCVC(e.target.value))}
            required
            icon={<Icon name="Lock" size="sm" />}
          />
        </div>
      </div>

      {/* Billing address */}
      {billingFields && (
        <div className="space-y-4 border-t border-border pt-6">
          <p className="text-body-sm font-medium text-foreground">
            Billing Address
          </p>

          <Input
            label="Full Name"
            placeholder="John Doe"
            value={billingName}
            onChange={(e) => setBillingName(e.target.value)}
            required
          />

          <Input
            label="Address"
            placeholder="123 Main Street"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Input
              label="City"
              placeholder="Reno"
              value={billingCity}
              onChange={(e) => setBillingCity(e.target.value)}
              required
            />
            <Select
              label="State"
              placeholder="Select state"
              options={US_STATES}
              value={billingState}
              onChange={(e) => setBillingState(e.target.value)}
              required
            />
            <Input
              label="ZIP Code"
              placeholder="89501"
              value={billingZip}
              onChange={(e) =>
                setBillingZip(e.target.value.replace(/\D/g, "").slice(0, 5))
              }
              required
            />
          </div>
        </div>
      )}

      {/* Trust signals */}
      <div className="flex flex-wrap items-center gap-4 rounded-button bg-success/5 border border-success/20 px-4 py-3">
        <div className="flex items-center gap-2 text-body-sm text-success">
          <Icon name="Lock" size="sm" className="text-success" />
          <span className="font-medium">Secure 256-bit encryption</span>
        </div>
        <div className="flex items-center gap-2 text-muted">
          <span className="text-caption font-medium tracking-wide uppercase">
            Visa
          </span>
          <span className="text-caption font-medium tracking-wide uppercase">
            Mastercard
          </span>
          <span className="text-caption font-medium tracking-wide uppercase">
            Amex
          </span>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="cta"
        fullWidth
        size="lg"
        icon={<Icon name="Lock" size="sm" />}
      >
        Complete Order
      </Button>
    </form>
  );
}

PaymentForm.displayName = "PaymentForm";

export { PaymentForm };
