"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/animation/FadeUp";

/* ═══════════════════════════════════════════════════════════════════════════
   MarkdownContent — Renders markdown body with prose styling
   ═══════════════════════════════════════════════════════════════════════════ */

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <FadeUp>
      <div
        className={cn(
          "prose prose-lg mx-auto max-w-3xl",
          /* Headings */
          "prose-headings:font-[var(--font-display)] prose-headings:text-[var(--color-text-primary)]",
          "prose-h2:text-[var(--font-size-h2)] prose-h2:mt-12 prose-h2:mb-4",
          "prose-h3:text-[var(--font-size-h3)] prose-h3:mt-8 prose-h3:mb-3",
          /* Body text */
          "prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed",
          /* Links */
          "prose-a:text-[var(--color-accent)] prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-[var(--color-accent-hover)]",
          /* Lists */
          "prose-li:text-[var(--color-text-secondary)]",
          "prose-li:marker:text-[var(--color-accent)]",
          /* Strong */
          "prose-strong:text-[var(--color-text-primary)]",
          /* Tables */
          "prose-table:border-collapse prose-table:w-full",
          "prose-th:bg-[var(--color-bg-secondary)] prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-[var(--color-text-primary)] prose-th:border prose-th:border-[var(--color-border)]",
          "prose-td:px-4 prose-td:py-2 prose-td:text-sm prose-td:text-[var(--color-text-secondary)] prose-td:border prose-td:border-[var(--color-border)]",
          /* Blockquotes */
          "prose-blockquote:border-l-[var(--color-accent)] prose-blockquote:text-[var(--color-text-secondary)] prose-blockquote:italic",
          /* HR */
          "prose-hr:border-[var(--color-border)]",
          className,
        )}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </FadeUp>
  );
}

MarkdownContent.displayName = "MarkdownContent";
