import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  ContentFrontmatter,
  ContentPage,
  FAQSection,
  PageType,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Read and parse a single markdown file.
 */
export function getContent(filePath: string): ContentPage {
  const fullPath = path.join(CONTENT_DIR, filePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ContentFrontmatter;
  return {
    frontmatter,
    body: content,
    slug: frontmatter.slug,
  };
}

/**
 * Get all markdown files in a folder, parsed with frontmatter.
 */
export function getAllContent(folder: string): ContentPage[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((file) => getContent(path.join(folder, file)));
}

/**
 * Get a content page by its slug within a folder.
 * Searches all .md files in the folder for matching slug in frontmatter.
 */
export function getContentBySlug(
  folder: string,
  slug: string,
): ContentPage | null {
  const pages = getAllContent(folder);
  return (
    pages.find((page) => {
      const pageSlug = page.frontmatter.slug
        .replace(/^\//, "")
        .replace(/\/$/, "");
      return pageSlug === slug || page.frontmatter.slug === slug;
    }) ?? null
  );
}

/**
 * Get a content page by filename (without extension).
 */
export function getContentByFilename(
  folder: string,
  filename: string,
): ContentPage | null {
  const filePath = path.join(folder, `${filename}.md`);
  const fullPath = path.join(CONTENT_DIR, filePath);
  if (!fs.existsSync(fullPath)) return null;
  return getContent(filePath);
}

/**
 * Get the _index.md (hub page) for a folder.
 */
export function getHubContent(folder: string): ContentPage | null {
  const filePath = path.join(folder, "_index.md");
  const fullPath = path.join(CONTENT_DIR, filePath);
  if (!fs.existsSync(fullPath)) return null;
  return getContent(filePath);
}

/**
 * Get all content pages of a specific type.
 */
export function getContentByType(type: PageType): ContentPage[] {
  const allPages: ContentPage[] = [];

  function walkDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walkDir(path.join(dir, entry.name));
      } else if (
        entry.name.endsWith(".md") &&
        !entry.name.startsWith("_generation")
      ) {
        const relativePath = path.relative(
          CONTENT_DIR,
          path.join(dir, entry.name),
        );
        const page = getContent(relativePath);
        if (page.frontmatter.type === type) {
          allPages.push(page);
        }
      }
    }
  }

  walkDir(CONTENT_DIR);
  return allPages;
}

/**
 * Get all slugs for a page type (for generateStaticParams).
 */
export function getSlugsForType(type: PageType): string[] {
  return getContentByType(type).map((page) => {
    const slug = page.frontmatter.slug.replace(/^\//, "").replace(/\/$/, "");
    // For nested slugs like "privacy/anonymous-llc", return just the last segment
    const parts = slug.split("/");
    return parts[parts.length - 1];
  });
}

/**
 * Parse FAQ items from markdown body.
 * FAQs are in the format: **Question?**\nAnswer text
 */
export function parseFAQsFromBody(
  body: string,
): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const lines = body.split("\n");
  let currentQuestion = "";
  let currentAnswer: string[] = [];
  let inFAQ = false;

  for (const line of lines) {
    // Detect FAQ section headers
    if (line.match(/^##\s*(Frequently Asked Questions|FAQ)/i)) {
      inFAQ = true;
      continue;
    }

    // Stop at next major section after FAQ
    if (inFAQ && line.match(/^##\s/) && !line.match(/FAQ/i)) {
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.join("\n").trim(),
        });
      }
      break;
    }

    if (!inFAQ) continue;

    // Bold question pattern: **Question?**
    const questionMatch = line.match(/^\*\*(.+?)\*\*$/);
    if (questionMatch) {
      // Save previous Q&A
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.join("\n").trim(),
        });
      }
      currentQuestion = questionMatch[1];
      currentAnswer = [];
      continue;
    }

    if (currentQuestion && line.trim()) {
      currentAnswer.push(line);
    }
  }

  // Don't forget the last FAQ
  if (currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.join("\n").trim(),
    });
  }

  return faqs;
}

/**
 * Parse FAQ sections from the dedicated FAQ page markdown.
 * The FAQ page uses ## headings as section titles, with **Question?** / Answer pairs.
 */
export function parseFAQSections(body: string): FAQSection[] {
  const sections: FAQSection[] = [];
  const lines = body.split("\n");
  let currentSection: FAQSection | null = null;
  let currentQuestion = "";
  let currentAnswer: string[] = [];
  let pastIntro = false;

  function flushQuestion() {
    if (currentQuestion && currentAnswer.length > 0 && currentSection) {
      currentSection.items.push({
        question: currentQuestion,
        answer: currentAnswer.join("\n").trim(),
      });
    }
    currentQuestion = "";
    currentAnswer = [];
  }

  for (const line of lines) {
    // Skip the h1 title
    if (line.match(/^#\s/) && !line.match(/^##/)) {
      pastIntro = true;
      continue;
    }

    // Section heading (## Company Formation, ## Business Privacy, etc.)
    const sectionMatch = line.match(/^##\s+(.+)$/);
    if (sectionMatch && pastIntro) {
      flushQuestion();
      currentSection = { title: sectionMatch[1], items: [] };
      sections.push(currentSection);
      continue;
    }

    if (!currentSection) continue;

    // Bold question pattern: **Question?**
    const questionMatch = line.match(/^\*\*(.+?)\*\*$/);
    if (questionMatch) {
      flushQuestion();
      currentQuestion = questionMatch[1];
      continue;
    }

    // Skip horizontal rules and empty lines within Q&A
    if (/^---+$/.test(line.trim())) continue;

    if (currentQuestion && line.trim()) {
      currentAnswer.push(line);
    }
  }

  flushQuestion();

  // Filter out sections with no FAQ items (e.g., intro paragraphs, footer)
  return sections.filter((s) => s.items.length > 0);
}

/**
 * Get filenames (without .md) for all markdown files in a content folder.
 * Excludes _index.md by default.
 */
export function getContentSlugs(folder: string, excludeIndex = true): string[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter(
      (f) =>
        f.endsWith(".md") &&
        (!excludeIndex || f !== "_index.md") &&
        !f.startsWith("_generation"),
    )
    .map((f) => f.replace(/\.md$/, ""));
}
