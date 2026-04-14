"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"wireframe" | "brand">("wireframe");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "brand") setTheme("brand");
  }, []);

  const toggle = () => {
    const next = theme === "wireframe" ? "brand" : "wireframe";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "wireframe"
          ? "Switch to brand theme"
          : "Switch to wireframe theme"
      }
      title={theme === "wireframe" ? "Switch to Brand" : "Switch to Wireframe"}
      className="fixed right-4 top-20 z-[60] rounded-pill bg-foreground/85 px-3 py-1.5 text-xs font-medium text-surface shadow-dropdown backdrop-blur transition-all hover:bg-foreground hover:opacity-100 opacity-60 max-sm:hidden"
    >
      {theme === "wireframe" ? "Switch to Brand" : "Switch to Wireframe"}
    </button>
  );
}
