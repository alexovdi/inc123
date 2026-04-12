import type { ClusterContent, ClusterSection } from "@/lib/types";

/**
 * Average reading speed (words per minute) for educational/long-form content.
 * Tuned for the "scanner-then-reader" cluster page audience.
 */
const WORDS_PER_MINUTE = 225;

/** Strip words from a single section — paragraph + extended + bullets + items + key points */
function countSectionWords(section: ClusterSection): number {
  const parts: string[] = [section.title, section.content];

  if (section.extendedContent) parts.push(section.extendedContent);
  if (section.bullets) parts.push(...section.bullets);
  if (section.items) {
    section.items.forEach((i) => {
      parts.push(i.title, i.description);
    });
  }
  if (section.keyPoints) {
    section.keyPoints.forEach((k) => {
      parts.push(k.title, k.description);
    });
  }
  if (section.comparisonRows) {
    section.comparisonRows.forEach((r) => {
      parts.push(r.label, r.wyoming, r.nevada);
    });
  }
  if (section.pricingRows) {
    section.pricingRows.forEach((r) => {
      parts.push(r.label, r.price, r.note ?? "");
    });
  }

  return parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
}

/** Count words across all cluster sections + FAQs (which are part of the page). */
export function countClusterWords(cluster: ClusterContent): number {
  const sectionWords = cluster.sections.reduce(
    (acc, s) => acc + countSectionWords(s),
    0,
  );
  const faqWords = cluster.faqs.reduce(
    (acc, f) =>
      acc + (f.question.split(/\s+/).length + f.answer.split(/\s+/).length),
    0,
  );
  return sectionWords + faqWords;
}

/**
 * Compute reading time for a cluster. Returns a string like "6 min read".
 * Minimum is 2 minutes — even the thinnest guide deserves a scannable floor
 * so reading-time doesn't undersell the content.
 */
export function computeReadingTime(cluster: ClusterContent): string {
  const words = countClusterWords(cluster);
  const minutes = Math.max(2, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

/**
 * Resolve the reading time for a cluster — prefer explicit override,
 * otherwise compute from content.
 */
export function resolveReadingTime(cluster: ClusterContent): string {
  return cluster.readingTime ?? computeReadingTime(cluster);
}
