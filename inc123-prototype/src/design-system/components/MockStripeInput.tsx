"use client";

import { useState, useCallback } from "react";
import { Lock, CreditCard } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface MockStripeInputProps {
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Helpers
   ------------------------------------------------ */

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

/** Format CVC (3 digits) */
function formatCVC(value: string): string {
  return value.replace(/\D/g, "").slice(0, 3);
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function MockStripeInput({ className }: MockStripeInputProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const handleCardNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCardNumber(formatCardNumber(e.target.value));
    },
    [],
  );

  const handleExpiry = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(formatExpiry(e.target.value));
  }, []);

  const handleCVC = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCVC(formatCVC(e.target.value));
  }, []);

  const inputBase =
    "w-full rounded-button border border-border bg-surface px-4 py-3 text-body text-foreground font-sans placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface";

  return (
    <div className={cn("space-y-4", className)}>
      {/* Cardholder name */}
      <div>
        <label
          htmlFor="mock-cardholder"
          className="block text-body-sm font-medium text-foreground mb-1.5"
        >
          Cardholder Name
        </label>
        <input
          id="mock-cardholder"
          type="text"
          placeholder="John Doe"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className={inputBase}
        />
      </div>

      {/* Card number */}
      <div>
        <label
          htmlFor="mock-card-number"
          className="block text-body-sm font-medium text-foreground mb-1.5"
        >
          Card Number
        </label>
        <div className="relative">
          <span
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted"
            aria-hidden="true"
          >
            <CreditCard className="h-5 w-5" />
          </span>
          <input
            id="mock-card-number"
            type="text"
            inputMode="numeric"
            placeholder="4242 4242 4242 4242"
            value={cardNumber}
            onChange={handleCardNumber}
            className={cn(inputBase, "pl-10 pr-28")}
            autoComplete="cc-number"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center gap-1.5 pr-3 text-caption font-semibold tracking-wide text-muted/70"
            aria-hidden="true"
          >
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
          </div>
        </div>
      </div>

      {/* Expiry + CVC row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="mock-expiry"
            className="block text-body-sm font-medium text-foreground mb-1.5"
          >
            Expiry
          </label>
          <input
            id="mock-expiry"
            type="text"
            inputMode="numeric"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiry}
            className={inputBase}
            autoComplete="cc-exp"
          />
        </div>
        <div>
          <label
            htmlFor="mock-cvc"
            className="block text-body-sm font-medium text-foreground mb-1.5"
          >
            CVC
          </label>
          <div className="relative">
            <input
              id="mock-cvc"
              type="text"
              inputMode="numeric"
              placeholder="123"
              value={cvc}
              onChange={handleCVC}
              className={cn(inputBase, "pr-10")}
              autoComplete="cc-csc"
            />
            <span
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted"
              aria-hidden="true"
            >
              <Lock className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Security note */}
      <div className="flex items-center gap-2 rounded-button bg-success/5 border border-success/20 px-4 py-2.5">
        <Lock className="h-4 w-4 shrink-0 text-success" />
        <span className="text-body-sm font-medium text-success">
          256-bit SSL Encrypted
        </span>
        <span className="ml-auto flex items-center gap-2 text-muted">
          <span className="text-caption font-medium tracking-wide uppercase">
            Visa
          </span>
          <span className="text-caption font-medium tracking-wide uppercase">
            Mastercard
          </span>
          <span className="text-caption font-medium tracking-wide uppercase">
            Amex
          </span>
        </span>
      </div>
    </div>
  );
}

MockStripeInput.displayName = "MockStripeInput";

export { MockStripeInput };
