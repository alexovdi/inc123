/**
 * Extract the first N paragraphs from markdown body (before any ## heading).
 */
export function extractIntroParagraphs(body: string, count = 3): string {
  const lines = body.split("\n");
  const paragraphs: string[] = [];
  let current: string[] = [];

  for (const line of lines) {
    // Stop at first ## heading
    if (line.match(/^##\s/)) break;
    // Skip # H1 headings
    if (line.match(/^#\s/) && !line.match(/^##/)) continue;

    if (line.trim() === "") {
      if (current.length > 0) {
        paragraphs.push(current.join(" "));
        current = [];
      }
    } else {
      current.push(line.trim());
    }
  }

  if (current.length > 0) {
    paragraphs.push(current.join(" "));
  }

  return paragraphs.slice(0, count).join("\n\n");
}

/**
 * Estimate reading time from word count or body text.
 */
export function estimateReadingTime(body: string): number {
  const words = body.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 250));
}
