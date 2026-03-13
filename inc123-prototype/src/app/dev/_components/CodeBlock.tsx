"use client";

import { useState } from "react";
import { Icon } from "@/design-system/primitives";

interface CodeBlockProps {
  code: string;
  title?: string;
}

export function CodeBlock({ code, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <div className="rounded-card border border-border/60 overflow-hidden">
      {title && (
        <div className="bg-muted/5 px-3 py-1.5 text-caption text-muted/60 border-b border-border/40">
          {title}
        </div>
      )}
      <div className="relative bg-muted/[0.03]">
        <button
          onClick={handleCopy}
          className="absolute top-1.5 right-1.5 flex items-center gap-1 rounded-md bg-muted/10 hover:bg-muted/20 px-2 py-1 text-caption text-muted/50 hover:text-muted/70 transition-colors"
        >
          <Icon name={copied ? "CircleCheck" : "Clipboard"} size="xs" />
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre className="overflow-x-auto p-3 pr-20 text-caption font-mono text-muted/70">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
