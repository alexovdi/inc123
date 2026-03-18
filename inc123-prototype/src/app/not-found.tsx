import NextLink from "next/link";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-container-x py-section-y text-center">
      <div className="max-w-narrow mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
            <Icon name="Search" size="lg" className="text-primary-600" />
          </div>
        </div>

        <h1 className="text-display font-display font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-4 text-body text-muted max-w-[36rem] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try one of these helpful links to find what you need.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[32rem] mx-auto">
          <NextLink href="/">
            <Button variant="primary" size="md" className="w-full">
              <Icon name="House" size="sm" className="mr-2" />
              Homepage
            </Button>
          </NextLink>
          <NextLink href="/packages">
            <Button variant="secondary" size="md" className="w-full">
              <Icon name="Package" size="sm" className="mr-2" />
              View Packages
            </Button>
          </NextLink>
          <NextLink href="/faq">
            <Button variant="secondary" size="md" className="w-full">
              <Icon name="CircleHelp" size="sm" className="mr-2" />
              FAQ
            </Button>
          </NextLink>
          <NextLink href="/contact">
            <Button variant="secondary" size="md" className="w-full">
              <Icon name="Phone" size="sm" className="mr-2" />
              Contact Us
            </Button>
          </NextLink>
        </div>

        <p className="mt-8 text-body-sm text-muted">
          Need help?{" "}
          <NextLink
            href="/contact"
            className="font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            Get in touch
          </NextLink>{" "}
          or call{" "}
          <a
            href="tel:+17753134155"
            className="font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            (775) 313-4155
          </a>
        </p>
      </div>
    </main>
  );
}
