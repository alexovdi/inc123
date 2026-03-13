"use client";

import { Alert } from "@/design-system/primitives/Alert";
import { Button } from "@/design-system/primitives/Button";
import { Input } from "@/design-system/primitives/Input";
import { Icon } from "@/design-system/primitives/Icon";
import { Divider } from "@/design-system/primitives/Divider";
import { Link } from "@/design-system/primitives/Link";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-section-y px-container-x bg-background">
      <div className="w-full max-w-md">
        {/* Prototype Banner */}
        <Alert
          variant="warning"
          title="Prototype"
          description="This is a prototype login page. Form submission is disabled."
          className="mb-8"
        />

        {/* Login Card */}
        <div className="bg-surface rounded-card border border-border p-8">
          {/* Lock Icon + Heading */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
              <Icon name="Lock" size="lg" className="text-secondary" />
            </div>
            <h1 className="font-display text-heading font-bold text-foreground">
              Client Login
            </h1>
            <p className="mt-2 text-body-sm text-muted">
              Access your dashboard, documents, and compliance status.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
              icon={<Mail className="h-4 w-4" />}
            />

            <div>
              <label
                htmlFor="login-password"
                className="block font-sans font-medium text-body-sm text-foreground mb-1.5"
              >
                Password
                <span className="ml-0.5 text-destructive" aria-hidden="true">
                  *
                </span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted" aria-hidden="true">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  disabled
                  className="w-full rounded-button border border-border bg-surface font-sans text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50 h-11 px-4 text-body pl-10"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              fullWidth
              disabled
            >
              Sign In
            </Button>
          </form>

          {/* Forgot password */}
          <div className="mt-4 text-center">
            <Link href="#" variant="subtle" className="text-body-sm">
              Forgot password?
            </Link>
          </div>

          {/* Divider */}
          <div className="my-6">
            <Divider />
          </div>

          {/* Not a client */}
          <div className="text-center">
            <p className="text-body-sm text-muted">Not a client yet?</p>
            <Link href="/packages" className="text-body-sm font-medium mt-1 inline-block">
              View our formation packages &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
