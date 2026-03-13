"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import { getComponentsByCategory, registry } from "../_data/component-registry";

export function CatalogSidebar() {
  const pathname = usePathname();
  const groups = getComponentsByCategory();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-border sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-surface">
      <div className="px-4 py-3 border-b border-border">
        <p className="text-caption font-medium text-muted">
          {registry.length} components
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        <NextLink
          href="/dev/components"
          className={cn(
            "flex items-center px-4 py-1.5 text-body-sm font-medium transition-colors",
            pathname === "/dev/components"
              ? "bg-secondary/10 text-secondary"
              : "text-muted hover:text-foreground hover:bg-muted/10"
          )}
        >
          All Components
        </NextLink>

        {groups.map((group) => {
          const isCollapsed = collapsed[group.id] ?? false;

          return (
            <div key={group.id} className="mt-2">
              <button
                onClick={() => toggle(group.id)}
                className="flex w-full items-center justify-between px-4 py-1.5 text-caption font-semibold uppercase tracking-wider text-muted hover:text-foreground transition-colors"
              >
                <span>
                  {group.label}{" "}
                  <span className="text-muted font-normal normal-case tracking-normal">
                    ({group.entries.length})
                  </span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    isCollapsed && "-rotate-90"
                  )}
                />
              </button>

              {!isCollapsed && (
                <div className="mt-0.5">
                  {group.entries.map((entry) => {
                    const href = `/dev/components/${entry.slug}`;
                    const isActive = pathname === href;

                    return (
                      <NextLink
                        key={entry.slug}
                        href={href}
                        className={cn(
                          "block px-4 py-1 pl-6 text-body-sm transition-colors",
                          isActive
                            ? "bg-secondary/10 text-secondary font-medium"
                            : "text-muted hover:text-foreground hover:bg-muted/5"
                        )}
                      >
                        {entry.name}
                      </NextLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
