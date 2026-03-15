/**
 * Generate .docx versions of v4/v2 markdown deliverables.
 *
 * Usage: node scripts/generate-docx-v4.js
 *
 * Reads 3 source markdown/txt files and produces matching .docx files
 * using the `docx` npm package.
 */

const fs = require("fs");
const path = require("path");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Header,
  Footer,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  WidthType,
  PageNumber,
  PageBreak,
  LevelFormat,
  ShadingType,
} = require("docx");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const DOCS_ROOT = path.join(
  __dirname,
  "..",
  "DOCS",
  "Phase 1 - Discovery & Site Architecture"
);

const FILES = [
  {
    src: path.join(
      DOCS_ROOT,
      "7 - Deliverables",
      "v3-content-audit",
      "Incorporate123_Discovery_Report_v4.md"
    ),
    dst: path.join(
      DOCS_ROOT,
      "7 - Deliverables",
      "v3-content-audit",
      "Incorporate123_Discovery_Report_v4.docx"
    ),
    header: "INCORPORATE123 — Discovery Report v4",
    format: "markdown",
  },
  {
    src: path.join(
      DOCS_ROOT,
      "7 - Deliverables",
      "v3-content-audit",
      "Incorporate123_Validated_Site_Architecture_v4.md"
    ),
    dst: path.join(
      DOCS_ROOT,
      "7 - Deliverables",
      "v3-content-audit",
      "Incorporate123_Validated_Site_Architecture_v4.docx"
    ),
    header: "INCORPORATE123 — Validated Site Architecture v4",
    format: "markdown",
  },
  {
    src: path.join(
      DOCS_ROOT,
      "3 - Content Migration & IA",
      "v3-taxation-update",
      "Incorporate123_Information_Architecture_v2.txt"
    ),
    dst: path.join(
      DOCS_ROOT,
      "3 - Content Migration & IA",
      "v3-taxation-update",
      "Incorporate123_Information_Architecture_v2.docx"
    ),
    header: "INCORPORATE123 — Information Architecture v2",
    format: "plaintext",
  },
];

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

const FONT = "Inter";
const DISPLAY_FONT = "Outfit";
const BODY_SIZE = 22; // 11pt in half-points
const H1_SIZE = 32; // 16pt
const H2_SIZE = 26; // 13pt
const H3_SIZE = 24; // 12pt
const HEADING1_COLOR = "1e3a5f";
const HEADING2_COLOR = "2563eb";
const HEADING3_COLOR = "1f4d78";
const BODY_COLOR = "000000";
const HEADER_FOOTER_COLOR = "666666";
const BLOCKQUOTE_COLOR = "666666";
const TABLE_HEADER_FILL = "1e3a5f";
const TABLE_DATA_FILL = "f0f5fa";

const TABLE_BORDER = {
  style: BorderStyle.SINGLE,
  size: 4,
  color: "cccccc",
};
const CELL_BORDERS = {
  top: TABLE_BORDER,
  bottom: TABLE_BORDER,
  left: TABLE_BORDER,
  right: TABLE_BORDER,
};
const CELL_MARGINS = { top: 80, bottom: 80, left: 120, right: 120 };

function docStyles() {
  return {
    default: {
      document: {
        run: { font: FONT, size: BODY_SIZE },
        paragraph: { spacing: { line: 240 } },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
          size: H1_SIZE,
          bold: true,
          font: DISPLAY_FONT,
          color: HEADING1_COLOR,
        },
        paragraph: {
          spacing: { before: 360, after: 200, line: 240 },
          outlineLevel: 0,
        },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
          size: H2_SIZE,
          bold: true,
          font: DISPLAY_FONT,
          color: HEADING2_COLOR,
        },
        paragraph: {
          spacing: { before: 240, after: 160, line: 240 },
          outlineLevel: 1,
        },
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
          size: H3_SIZE,
          bold: false,
          font: FONT,
          color: HEADING3_COLOR,
        },
        paragraph: {
          spacing: { before: 0, after: 0, line: 240 },
          outlineLevel: 2,
        },
      },
    ],
  };
}

function numbering() {
  return {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 720, hanging: 360 } },
            },
          },
          {
            level: 1,
            format: LevelFormat.BULLET,
            text: "\u25E6",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 1440, hanging: 360 } },
            },
          },
        ],
      },
      {
        reference: "numbers",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 720, hanging: 360 } },
            },
          },
        ],
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Inline formatting parser
// ---------------------------------------------------------------------------

/**
 * Parse inline markdown formatting into TextRun array.
 * Handles **bold**, *italic*, ~~strikethrough~~, and plain text.
 */
function parseInline(text, baseProps = {}) {
  const runs = [];
  // Regex matches: **bold**, *italic*, ~~strike~~, or plain text
  const re = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(\~\~(.+?)\~\~)|([^*~]+)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m[2]) {
      // **bold**
      runs.push(new TextRun({ ...baseProps, bold: true, text: m[2] }));
    } else if (m[4]) {
      // *italic*
      runs.push(new TextRun({ ...baseProps, italics: true, text: m[4] }));
    } else if (m[6]) {
      // ~~strikethrough~~
      runs.push(new TextRun({ ...baseProps, strike: true, text: m[6] }));
    } else if (m[7]) {
      // plain
      runs.push(new TextRun({ ...baseProps, text: m[7] }));
    }
  }
  if (runs.length === 0) {
    runs.push(new TextRun({ ...baseProps, text: text }));
  }
  return runs;
}

// ---------------------------------------------------------------------------
// Markdown table parser
// ---------------------------------------------------------------------------

function parseMarkdownTable(lines) {
  // lines = array of "|col|col|" strings (including separator row)
  const rows = [];
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip separator rows like |---|---|
    if (/^\|[\s\-:|]+\|$/.test(trimmed)) continue;
    // Split cells
    const cells = trimmed
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    rows.push(cells);
  }
  return rows; // first row is header
}

function buildDocxTable(tableData) {
  if (tableData.length === 0) return null;

  const colCount = tableData[0].length;
  // Content width for US Letter with 1" margins = 9360 DXA
  const TABLE_WIDTH = 9360;
  const colWidth = Math.floor(TABLE_WIDTH / colCount);
  const columnWidths = Array(colCount).fill(colWidth);
  // Adjust last column to absorb rounding
  columnWidths[colCount - 1] = TABLE_WIDTH - colWidth * (colCount - 1);

  const docxRows = tableData.map((row, rowIdx) => {
    const isHeader = rowIdx === 0;
    const cells = row.map((cellText, colIdx) => {
      const children = parseInline(cellText, {
        font: FONT,
        size: isHeader ? 20 : BODY_SIZE, // 10pt header, 11pt data
        bold: isHeader,
        color: isHeader ? "ffffff" : BODY_COLOR,
      });
      return new TableCell({
        borders: CELL_BORDERS,
        margins: CELL_MARGINS,
        width: { size: columnWidths[colIdx], type: WidthType.DXA },
        shading: {
          fill: isHeader ? TABLE_HEADER_FILL : TABLE_DATA_FILL,
          type: ShadingType.CLEAR,
        },
        verticalAlign: isHeader ? "center" : undefined,
        children: [new Paragraph({ children })],
      });
    });
    return new TableRow({ children: cells });
  });

  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths,
    rows: docxRows,
  });
}

// ---------------------------------------------------------------------------
// Cover page builder
// ---------------------------------------------------------------------------

/**
 * Build a styled cover page from parsed front-matter fields.
 * Returns an array of Paragraph elements matching the reference layout.
 */
function buildCoverPage(title, projectDesc, docType, subtitle, metaLines) {
  const elements = [];

  // Top spacer — push content down (~150pt = 3000 twentieths)
  elements.push(new Paragraph({ spacing: { before: 3000 }, children: [] }));

  // Title: "INCORPORATE123" — center, Outfit 22pt, bold, #1e3a5f
  elements.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: title,
          font: DISPLAY_FONT,
          size: 44,
          bold: true,
          color: HEADING1_COLOR,
        }),
      ],
    })
  );

  // Project descriptor: "Website Redesign Project" — center, Outfit 14pt, #666666
  if (projectDesc) {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: projectDesc,
            font: DISPLAY_FONT,
            size: 28,
            color: HEADER_FOOTER_COLOR,
          }),
        ],
      })
    );
  }

  // Spacer
  elements.push(new Paragraph({ spacing: { after: 80 }, children: [] }));

  // Document type: "PHASE 1: DISCOVERY REPORT" — center, Outfit 18pt, bold, #2563eb
  elements.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: docType,
          font: DISPLAY_FONT,
          size: 36,
          bold: true,
          color: HEADING2_COLOR,
        }),
      ],
    })
  );

  // Subtitle — center, Inter 11pt, #666666
  if (subtitle) {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
          new TextRun({
            text: subtitle,
            font: FONT,
            size: BODY_SIZE,
            color: HEADER_FOOTER_COLOR,
          }),
        ],
      })
    );
  }

  // Spacers
  elements.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  elements.push(new Paragraph({ spacing: { after: 80 }, children: [] }));

  // Metadata lines — center, Inter 11pt, #666666
  // "CONFIDENTIAL" or status lines get special treatment
  for (const line of metaLines) {
    const isConfidential = /confidential/i.test(line);
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: isConfidential ? { before: 200 } : {},
        children: [
          new TextRun({
            text: line,
            font: FONT,
            size: isConfidential ? 20 : BODY_SIZE,
            bold: isConfidential,
            color: isConfidential ? HEADING1_COLOR : HEADER_FOOTER_COLOR,
          }),
        ],
      })
    );
  }

  // Page break
  elements.push(new Paragraph({ children: [new PageBreak()] }));

  return elements;
}

/**
 * Extract markdown front-matter (before first ---) and return cover page
 * elements + the index to continue parsing from.
 * Returns { coverElements, startIndex } or null if no front-matter detected.
 */
function extractMarkdownFrontMatter(lines) {
  // Find first --- line
  let hrIndex = -1;
  for (let i = 0; i < Math.min(lines.length, 20); i++) {
    if (/^---+\s*$/.test(lines[i].trim())) {
      hrIndex = i;
      break;
    }
  }
  if (hrIndex < 0) return null;

  let title = "";
  let projectDesc = "";
  let docType = "";
  let subtitle = "";
  const metaLines = [];

  for (let i = 0; i < hrIndex; i++) {
    const line = lines[i];
    const h1Match = line.match(/^#\s+(.+)/);
    const h2Match = line.match(/^##\s+(.+)/);
    const h3Match = line.match(/^###\s+(.+)/);
    const metaMatch = line.match(/^\*\*(.+?):\*\*\s*(.+)/);

    if (h1Match) {
      // Split "INCORPORATE123 — Website Redesign Project" on " — "
      const parts = h1Match[1].split(" — ");
      title = parts[0].trim();
      if (parts[1]) projectDesc = parts[1].trim();
    } else if (h2Match) {
      docType = h2Match[1];
    } else if (h3Match) {
      subtitle = h3Match[1];
    } else if (metaMatch) {
      metaLines.push(`${metaMatch[1]}: ${metaMatch[2]}`);
    }
  }

  if (!title) return null;

  const coverElements = buildCoverPage(
    title,
    projectDesc,
    docType,
    subtitle,
    metaLines
  );
  return { coverElements, startIndex: hrIndex + 1 };
}

/**
 * Extract IA plaintext front-matter and return cover page elements.
 * The IA .txt starts with: version note, blank, "INCORPORATE123 ... :: PHASE...",
 * dashes, subtitle lines, metadata lines, then "1. Architecture Overview".
 */
function extractIAFrontMatter(lines) {
  // Find the line starting with "1. " which begins actual content
  let contentStart = -1;
  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    if (/^\d+\.\s+\S/.test(lines[i].trim())) {
      contentStart = i;
      break;
    }
  }
  if (contentStart < 0) return null;

  // Parse the header block
  let title = "INCORPORATE123";
  let projectDesc = "";
  let docType = "";
  let subtitle = "";
  const metaLines = [];

  for (let i = 0; i < contentStart; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed || /^-{10,}$/.test(trimmed)) continue;
    if (/^v\d+\s/.test(trimmed)) continue; // skip version note

    // "INCORPORATE123 WEBSITE REDESIGN :: PHASE 2: UX & DESIGN"
    if (trimmed.startsWith("INCORPORATE123")) {
      const parts = trimmed.split("::");
      if (parts.length >= 2) {
        // Extract company + project from first part
        const first = parts[0].trim(); // "INCORPORATE123 WEBSITE REDESIGN"
        const words = first.split(/\s+/);
        title = words[0]; // "INCORPORATE123"
        projectDesc = words.slice(1).join(" "); // "WEBSITE REDESIGN"
        docType = parts.slice(1).join("::").trim(); // "PHASE 2: UX & DESIGN"
      }
      continue;
    }

    // Metadata lines: "Prepared by:", "Date:", etc.
    if (
      /^(Prepared|Date:|Deliverable:)/.test(trimmed)
    ) {
      metaLines.push(trimmed.replace(/\s+--\s+/g, " — "));
      continue;
    }

    // Confidential line
    if (/^Confidential/i.test(trimmed)) {
      metaLines.push(trimmed.replace(/\s+--\s+/g, " — "));
      continue;
    }

    // Subtitle lines (between dashes and metadata)
    if (!subtitle) {
      subtitle = trimmed;
    } else {
      // Join continuation lines with space (e.g. "& Navigation Hierarchy")
      subtitle += " " + trimmed;
    }
  }

  if (!title) return null;

  const coverElements = buildCoverPage(
    title,
    projectDesc,
    docType,
    subtitle,
    metaLines
  );
  return { coverElements, startIndex: contentStart };
}

// ---------------------------------------------------------------------------
// Markdown → docx elements
// ---------------------------------------------------------------------------

function parseMarkdown(content) {
  const lines = content.split(/\r?\n/);
  const elements = [];
  let i = 0;

  // Detect and consume front-matter for cover page
  const frontMatter = extractMarkdownFrontMatter(lines);
  if (frontMatter) {
    elements.push(...frontMatter.coverElements);
    i = frontMatter.startIndex;
  }

  while (i < lines.length) {
    const line = lines[i];

    // Horizontal rule
    if (/^---+\s*$/.test(line.trim())) {
      elements.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 200 },
          children: [
            new TextRun({
              text: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
              font: FONT,
              size: 16,
              color: "CCCCCC",
            }),
          ],
        })
      );
      i++;
      continue;
    }

    // Heading
    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const heading =
        level === 1
          ? HeadingLevel.HEADING_1
          : level === 2
            ? HeadingLevel.HEADING_2
            : HeadingLevel.HEADING_3;
      elements.push(
        new Paragraph({ heading, children: parseInline(text) })
      );
      i++;
      continue;
    }

    // Table (collect consecutive | lines)
    if (line.trim().startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const tableData = parseMarkdownTable(tableLines);
      const table = buildDocxTable(tableData);
      if (table) {
        elements.push(table);
        // Add spacing after table
        elements.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
      }
      continue;
    }

    // Blockquote
    if (line.trim().startsWith(">")) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      const quoteText = quoteLines.join(" ").replace(/>\s?/g, "").trim();
      elements.push(
        new Paragraph({
          indent: { left: 576 },
          spacing: { before: 120, after: 120 },
          children: parseInline(quoteText, {
            italics: true,
            color: BLOCKQUOTE_COLOR,
            font: FONT,
            size: 20, // 10pt — smaller than body per v2
          }),
        })
      );
      continue;
    }

    // Numbered list item
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)/);
    if (numberedMatch) {
      elements.push(
        new Paragraph({
          numbering: { reference: "numbers", level: 0 },
          children: parseInline(numberedMatch[2]),
        })
      );
      i++;
      continue;
    }

    // Bullet list item
    if (line.trim().startsWith("- ")) {
      elements.push(
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          children: parseInline(line.trim().slice(2)),
        })
      );
      i++;
      continue;
    }

    // Empty line → skip
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Plain paragraph
    elements.push(
      new Paragraph({
        spacing: { after: 120 },
        children: parseInline(line.trim()),
      })
    );
    i++;
  }

  return elements;
}

// ---------------------------------------------------------------------------
// Plain-text IA parser (special handling for the .txt format)
// ---------------------------------------------------------------------------

function parsePlainTextIA(content) {
  const lines = content.split(/\r?\n/);
  const elements = [];
  let i = 0;

  // Extract front-matter for cover page.
  // Format: version note, blank, "INCORPORATE123 ... :: PHASE...", dashes,
  // title lines, blank, metadata lines, blank, then "1. Architecture Overview"
  const iaFrontMatter = extractIAFrontMatter(lines);
  if (iaFrontMatter) {
    elements.push(...iaFrontMatter.coverElements);
    i = iaFrontMatter.startIndex;
  }

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Horizontal rule
    if (/^-{10,}$/.test(trimmed)) {
      elements.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 200 },
          children: [
            new TextRun({
              text: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
              font: FONT,
              size: 16,
              color: "CCCCCC",
            }),
          ],
        })
      );
      i++;
      continue;
    }

    // Empty line
    if (trimmed === "") {
      i++;
      continue;
    }

    // Section headers like "1. Architecture Overview", "4.1 Pillar 1: ..."
    const sectionMatch = trimmed.match(
      /^(\d+(?:\.\d+)?)\s+(.+)/
    );
    if (sectionMatch) {
      const num = sectionMatch[1];
      const text = sectionMatch[2];
      // Top-level sections (no dot) → H2, sub-sections → H3
      const heading = num.includes(".")
        ? HeadingLevel.HEADING_3
        : HeadingLevel.HEADING_2;
      elements.push(
        new Paragraph({
          heading,
          children: [new TextRun({ text: `${num} ${text}` })],
        })
      );
      i++;
      continue;
    }

    // Detect inline table data: runs of text with known columnar patterns
    // The IA .txt has table data smooshed into single lines like:
    // "ComponentPagesPurposePillar Pages4Primary navigation hubs..."
    // These are recognized by known header patterns
    if (isInlineTable(trimmed)) {
      const table = parseInlineTable(trimmed);
      if (table) {
        elements.push(table);
        elements.push(
          new Paragraph({ spacing: { after: 120 }, children: [] })
        );
      }
      i++;
      continue;
    }

    // Lines starting with known sub-headers (no number prefix)
    if (
      /^(Architecture at a Glance|INCORPORATE123|Prepared|Date:|Deliverable:|Confidential|Status:)/.test(
        trimmed
      )
    ) {
      // Title/meta lines
      if (trimmed.startsWith("INCORPORATE123")) {
        elements.push(
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: trimmed })],
          })
        );
      } else {
        elements.push(
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({ text: trimmed, font: FONT, size: BODY_SIZE }),
            ],
          })
        );
      }
      i++;
      continue;
    }

    // Check for sub-headings like "Architecture at a Glance", multi-word lines
    // that are short and act as labels
    if (
      trimmed.length < 80 &&
      !trimmed.includes("  ") &&
      /^[A-Z]/.test(trimmed) &&
      !trimmed.includes("Page Name") &&
      !trimmed.includes("Component")
    ) {
      // Could be a sub-heading or short description
      const isSubHeading =
        trimmed.endsWith(":") ||
        /^(Architecture at a Glance|v\d+)/.test(trimmed);
      if (isSubHeading) {
        elements.push(
          new Paragraph({
            heading: HeadingLevel.HEADING_3,
            children: [new TextRun({ text: trimmed })],
          })
        );
        i++;
        continue;
      }
    }

    // Indented lines (tab or 2+ spaces) → could be sub-items
    if (/^\s{2,}/.test(line) || line.startsWith("\t")) {
      elements.push(
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          children: parseInline(trimmed),
        })
      );
      i++;
      continue;
    }

    // Plain paragraph
    elements.push(
      new Paragraph({
        spacing: { after: 120 },
        children: parseInline(trimmed),
      })
    );
    i++;
  }

  return elements;
}

/**
 * Detect if a line is a smooshed inline table from the IA txt format.
 * These lines contain known header sequences without delimiters.
 */
function isInlineTable(line) {
  const markers = [
    "ComponentPagesPurpose",
    "Nav PositionLabelDestination",
    "Page NameTypeURL",
    "PhasePage CountIncludes",
    "From Page TypeLinks To",
    "Cross-Pillar LinkSourceDestination",
  ];
  return markers.some((m) => line.includes(m));
}

/**
 * Parse known inline table formats from the IA .txt file.
 * Each format has known column headers that we split on.
 */
function parseInlineTable(line) {
  // Known table schemas — headers and a regex to split rows
  const schemas = [
    {
      detect: "ComponentPagesPurpose",
      headers: ["Component", "Pages", "Purpose"],
      splitPattern:
        /(Pillar Pages|Cluster Pages|Comparison Pages|Package Pages|State Hub Pages|Utility\/Support|Offshore Hub|Checkout Flow|TOTAL)/,
    },
    {
      detect: "Nav PositionLabelDestination",
      headers: [
        "Nav Position",
        "Label",
        "Destination",
        "Mega Menu Content",
      ],
    },
    {
      detect: "Page NameTypeURLPriority",
      headers: ["Page Name", "Type", "URL", "Priority", "Content Source"],
    },
    {
      detect: "PhasePage CountIncludes",
      headers: ["Phase", "Page Count", "Includes", "Timeline"],
    },
    {
      detect: "From Page TypeLinks To",
      headers: ["From Page Type", "Links To", "Link Placement"],
    },
    {
      detect: "Cross-Pillar LinkSourceDestination",
      headers: [
        "Cross-Pillar Link",
        "Source",
        "Destination",
        "CTA Messaging",
      ],
    },
  ];

  // Find matching schema
  const schema = schemas.find((s) => line.includes(s.detect));
  if (!schema) return null;

  // For the smooshed format, we can really only reliably render the headers
  // plus the raw text as a paragraph. True parsing of concatenated cells
  // without delimiters is fragile. We'll render the header row + content as
  // best-effort by splitting on known row-start tokens.

  // Extract the part after the headers
  const headerStr = schema.headers.join("");
  const idx = line.indexOf(headerStr);
  const dataStr = idx >= 0 ? line.slice(idx + headerStr.length) : "";

  // For the Component table, we know the row starters
  if (schema.detect === "ComponentPagesPurpose" && dataStr) {
    const rowStarters = [
      "Pillar Pages",
      "Cluster Pages",
      "Comparison Pages",
      "Package Pages",
      "State Hub Pages",
      "Utility/Support",
      "Offshore Hub",
      "Checkout Flow",
    ];
    const rows = [schema.headers];
    let remaining = dataStr;

    for (let s = 0; s < rowStarters.length; s++) {
      const start = remaining.indexOf(rowStarters[s]);
      if (start < 0) continue;
      // Find next row starter or end
      let end = remaining.length;
      for (let ns = s + 1; ns < rowStarters.length; ns++) {
        const nextIdx = remaining.indexOf(rowStarters[ns], start + 1);
        if (nextIdx > 0) {
          end = nextIdx;
          break;
        }
      }
      // Also check for TOTAL
      const totalIdx = remaining.indexOf("TOTAL", start + 1);
      if (totalIdx > 0 && totalIdx < end) end = totalIdx;

      const chunk = remaining.slice(start, end).trim();
      // Try to split: name, then a number, then the rest
      const numMatch = chunk.match(/^(.+?)(\d+|~\d+)(.*)$/);
      if (numMatch) {
        rows.push([numMatch[1].trim(), numMatch[2], numMatch[3].trim()]);
      }
    }

    // TOTAL row
    const totalIdx = remaining.indexOf("TOTAL");
    if (totalIdx >= 0) {
      const totalChunk = remaining.slice(totalIdx);
      const tm = totalChunk.match(/^TOTAL(.+?)(\d+|~\d+)(.*)$/);
      if (tm) {
        rows.push(["TOTAL", tm[2].trim(), tm[3].trim()]);
      }
    }

    if (rows.length > 1) return buildDocxTable(rows);
  }

  // For Page Name tables (pillar inventory), split on known type keywords
  if (schema.detect === "Page NameTypeURLPriority" && dataStr) {
    const rows = [schema.headers];
    // These tables have pattern: NameTypeName/url/P1 or P2Source
    // Split on known Type values
    const typeRegex =
      /(Pillar Hub|Cluster|Comparison|Package|State Pkg|Specialty|State Hub|Homepage|Utility|Resource|Content Hub|Social Proof|Portal|Legal|Hub Page|Offshore|Checkout)/g;
    const fullLine = dataStr;
    const typeMatches = [...fullLine.matchAll(typeRegex)];

    for (let t = 0; t < typeMatches.length; t++) {
      const typeMatch = typeMatches[t];
      const type = typeMatch[1];
      const typeStart = typeMatch.index;
      // Name = text before this type (after previous row end)
      const prevEnd =
        t > 0
          ? typeMatches[t - 1].index +
            typeMatches[t - 1][1].length +
            getRemainingRowLength(
              fullLine,
              typeMatches[t - 1].index + typeMatches[t - 1][1].length,
              typeStart
            )
          : 0;
      const name = fullLine.slice(prevEnd, typeStart).trim();
      // After type: URL starts with /
      const afterType = fullLine.slice(typeStart + type.length);
      const urlMatch = afterType.match(/^(\/[^\s]*\/?)(.*)$/);
      let url = "",
        priority = "",
        source = "";
      if (urlMatch) {
        url = urlMatch[1];
        const rest = urlMatch[2];
        const prioMatch = rest.match(/^(P\d\s+\w+)(.*)$/);
        if (prioMatch) {
          priority = prioMatch[1].trim();
          source = prioMatch[2].trim().replace(/\s+/g, " ");
        } else {
          // Fallback
          source = rest.trim();
        }
      }
      if (name) rows.push([name, type, url, priority, source]);
    }

    if (rows.length > 1) return buildDocxTable(rows);
  }

  // Fallback: render as a header-only table + the raw text as a paragraph below
  const headerRow = buildDocxTable([schema.headers]);
  return headerRow;
}

function getRemainingRowLength(str, start, maxEnd) {
  // Helper: find where the current row's data ends (before next row name starts)
  // This is a rough heuristic — just return 0 to use the gap as-is
  return 0;
}

// ---------------------------------------------------------------------------
// Document builder
// ---------------------------------------------------------------------------

async function buildDocument(file) {
  const content = fs.readFileSync(file.src, "utf8");

  const children =
    file.format === "markdown"
      ? parseMarkdown(content)
      : parsePlainTextIA(content);

  const doc = new Document({
    styles: docStyles(),
    numbering: numbering(),
    sections: [
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: {
              top: 1440,
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: file.header,
                    font: FONT,
                    size: 16,
                    color: HEADER_FOOTER_COLOR,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "Confidential \u2014 BIT Studios \u00D7 Incorporate123  |  Page ",
                    font: FONT,
                    size: 16,
                    color: HEADER_FOOTER_COLOR,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: FONT,
                    size: 16,
                    color: HEADER_FOOTER_COLOR,
                  }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(file.dst, buffer);

  const stats = fs.statSync(file.dst);
  return stats.size;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("Generating .docx deliverables...\n");

  for (const file of FILES) {
    if (!fs.existsSync(file.src)) {
      console.error(`ERROR: Source not found: ${file.src}`);
      process.exit(1);
    }

    const size = await buildDocument(file);
    const sizeKB = (size / 1024).toFixed(1);
    console.log(`  OK  ${path.basename(file.dst)} (${sizeKB} KB)`);
  }

  console.log("\nDone — all 3 .docx files generated.");
}

main().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
