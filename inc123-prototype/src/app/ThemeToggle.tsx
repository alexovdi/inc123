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
      className="fixed bottom-4 right-4 z-50 rounded-pill bg-foreground px-4 py-2 text-sm font-medium text-surface shadow-dropdown transition-colors hover:opacity-90"
    >
      {theme === "wireframe" ? "Switch to Brand" : "Switch to Wireframe"}
    </button>
  );
}
