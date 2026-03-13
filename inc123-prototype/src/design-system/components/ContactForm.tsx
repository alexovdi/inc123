"use client";

import { useState, useCallback, type FormEvent } from "react";
import { cn } from "@/design-system/utils/cn";
import { Input, Select, Textarea, Button } from "@/design-system/primitives";
import { Icon } from "@/design-system/primitives";
import type { SelectOption } from "@/design-system/primitives/Select";

/* -------------------------------------------------- */
/*  Types                                              */
/* -------------------------------------------------- */
export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  halfWidth?: boolean;
}

export interface ContactFormProps {
  /** Form field definitions from contact.ts */
  fields: ContactFormField[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Helpers                                            */
/* -------------------------------------------------- */
function toSelectOptions(options: string[]): SelectOption[] {
  return options.map((opt) => ({ value: opt, label: opt }));
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function ContactForm({ fields, className }: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getError = useCallback(
    (field: ContactFormField): string | undefined => {
      const val = values[field.name] ?? "";
      const isTouched = touched[field.name] || submitted;

      if (!isTouched) return undefined;

      if (field.required && !val.trim()) {
        return `${field.label} is required`;
      }

      if (field.type === "email" && val.trim() && !isValidEmail(val)) {
        return "Please enter a valid email address";
      }

      return undefined;
    },
    [values, touched, submitted]
  );

  const handleChange = useCallback((name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleBlur = useCallback((name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setSubmitted(true);

      // Validate all required fields
      const hasErrors = fields.some((field) => {
        const val = values[field.name] ?? "";
        if (field.required && !val.trim()) return true;
        if (field.type === "email" && val.trim() && !isValidEmail(val))
          return true;
        return false;
      });

      if (hasErrors) return;

      // Mock submission
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1500);
    },
    [fields, values]
  );

  // Success state
  if (success) {
    return (
      <section
        id="contact-form"
        className={cn("py-section-y px-container-x", className)}
      >
        <div className="mx-auto max-w-[700px] rounded-card border border-success/30 bg-success/5 p-8 md:p-12 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/20">
            <Icon name="Check" size="lg" className="text-success" />
          </div>
          <h2 className="font-display font-bold text-heading-lg text-foreground">
            Message Sent!
          </h2>
          <p className="mt-3 text-body-lg text-muted max-w-narrow mx-auto">
            Thank you for reaching out. We&apos;ll get back to you within 1
            business day. If your matter is urgent, call us directly at{" "}
            <a
              href="tel:+17753134155"
              className="font-medium text-secondary hover:underline"
            >
              (775) 313-4155
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  // Group fields into rows based on halfWidth
  const rows: ContactFormField[][] = [];
  let currentRow: ContactFormField[] = [];

  for (const field of fields) {
    if (field.halfWidth) {
      currentRow.push(field);
      if (currentRow.length === 2) {
        rows.push(currentRow);
        currentRow = [];
      }
    } else {
      if (currentRow.length > 0) {
        rows.push(currentRow);
        currentRow = [];
      }
      rows.push([field]);
    }
  }
  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return (
    <section
      id="contact-form"
      className={cn("py-section-y px-container-x", className)}
    >
      <div className="mx-auto max-w-[700px]">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="font-display font-bold text-heading-lg text-foreground">
            Send Us a Message
          </h2>
          <p className="mt-2 text-body text-muted">
            Tell us what you&apos;re looking for and we&apos;ll get back to you
            within 1 business day. All fields marked * are required.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                row.length > 1
                  ? "grid grid-cols-1 md:grid-cols-2 gap-5"
                  : ""
              )}
            >
              {row.map((field) => {
                const error = getError(field);
                const value = values[field.name] ?? "";

                if (field.type === "select" && field.options) {
                  return (
                    <Select
                      key={field.name}
                      label={field.label}
                      options={toSelectOptions(field.options)}
                      placeholder={`Select ${field.label.toLowerCase()}...`}
                      required={field.required}
                      error={error}
                      value={value}
                      onChange={(e) =>
                        handleChange(field.name, e.target.value)
                      }
                      onBlur={() => handleBlur(field.name)}
                    />
                  );
                }

                if (field.type === "textarea") {
                  return (
                    <Textarea
                      key={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      required={field.required}
                      error={error}
                      rows={5}
                      value={value}
                      onChange={(e) =>
                        handleChange(field.name, e.target.value)
                      }
                      onBlur={() => handleBlur(field.name)}
                    />
                  );
                }

                return (
                  <Input
                    key={field.name}
                    label={field.label}
                    type={
                      field.type as "text" | "email" | "tel"
                    }
                    placeholder={field.placeholder}
                    required={field.required}
                    error={error}
                    value={value}
                    onChange={(e) =>
                      handleChange(field.name, e.target.value)
                    }
                    onBlur={() => handleBlur(field.name)}
                  />
                );
              })}
            </div>
          ))}

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="cta"
              size="lg"
              fullWidth
              loading={loading}
              icon={<Icon name="Send" size="sm" />}
              iconPosition="right"
            >
              Send Message
            </Button>
            <p className="mt-3 text-caption text-muted text-center">
              We respond to all inquiries within 1 business day.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

ContactForm.displayName = "ContactForm";

export { ContactForm };
