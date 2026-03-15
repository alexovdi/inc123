"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/design-system/layouts/SiteHeader";
import { SiteFooter } from "@/design-system/layouts/SiteFooter";
import { ThemeToggle } from "./ThemeToggle";
import { siteNavigation, footerNavigation } from "@/data/navigation";

export function HeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCheckout = pathname?.startsWith("/checkout");
  const isDev = pathname?.startsWith("/dev");

  return (
    <>
      {!isCheckout && !isDev && <SiteHeader navigation={siteNavigation} />}
      {isDev ? children : <main id="main-content">{children}</main>}
      {!isCheckout && !isDev && (
        <SiteFooter
          columns={footerNavigation.columns}
          legal={footerNavigation.legal}
          company={footerNavigation.company}
        />
      )}
      {!isDev && <ThemeToggle />}
    </>
  );
}
