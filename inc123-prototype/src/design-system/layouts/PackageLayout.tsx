import { cn } from "@/design-system/utils/cn";

export interface PackageLayoutProps {
  /** Package display name — reserved for future use (e.g. doc title). */
  packageName?: string;
  /** If false, skip the top trust bar (for pages with their own hero) */
  showTrustBar?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function PackageLayout({
  showTrustBar = true,
  children,
  className,
}: PackageLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      {showTrustBar && (
        <div className="bg-primary-50 border-b border-border">
          <div className="mx-auto flex max-w-wide items-center justify-center gap-6 px-container-x py-2 text-caption text-muted">
            <span>25+ Years Trusted</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">All-Inclusive Pricing</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              30-Day Money-Back Guarantee
            </span>
          </div>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
