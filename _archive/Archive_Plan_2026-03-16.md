# Plan: Archive Outdated Project Files

## Context

The Incorporate123 project has accumulated ~740+ files across DOCS/, root, and prototype directories over the course of Phase 1 (Discovery) and Phase 2 (UX & Design). Many files are superseded by newer versions, are duplicate format copies, are research prompts/artifacts no longer needed, or are one-time deliverables from completed phases. Archiving these reduces clutter and makes active files easier to find.

Per CLAUDE.md rules: files move to `~/.claude/trash/2026-03-16_project-archive/` preserving path structure — never permanently deleted.

## Archive Destination

```
~/.claude/trash/2026-03-16_project-archive/
  DOCS--root/                      # Top-level DOCS files
  DOCS--Kick-off-Info/             # Superseded SOWs, briefs
  DOCS--Phase1--1-Kickoff/         # Old kickoff materials
  DOCS--Phase1--3-IA-Archive/      # Old IA iterations
  DOCS--Phase1--4-Competitors/     # Research prompts, duplicates
  DOCS--Phase1--7-Deliverables/    # Archive/ subfolder
  DOCS--Phase2--Designs/           # Old HTML iterations, prompt files
  DOCS--Phase2--Wireframes-Prompts/ # Artifact generation prompts
  DOCS--Phase2--Backup/            # _backup/ content folder
  root--screenshots/               # 34 audit PNGs
  root--scripts/                   # 2 .mjs generator scripts
  prototype/                       # TASKS.md
```

## Files to Archive (organized by location)

### 1. Root-level screenshots (34 PNG files, ~5.6 MB)

Audit/QA screenshots from Mar 15-16, no longer needed:

```
about-d-1.png through about-d-5.png
about-d1.png, about-desktop-hero.png, about-desktop-team.png
audit-about-*.png (3 files)
audit-hp-*.png (2 files)
audit-homepage-*.png (6 files)
audit-01-packages-*.png, audit-02-packages-*.png, audit-package-desktop.png
audit-comparison-desktop.png, audit-02-compare-*.png
audit-privacy-*.png (4 files)
audit-wyoming-statehub-desktop.png
```

### 2. Root-level scripts (2 files, ~122 KB)

One-off research generators, not imported anywhere:

```
generate-competitive-analysis.mjs
generate-competitive-analysis-no-seo.mjs
```

### 3. Root-level temp file (1 file)

```
DOCS/~$Incorporate123_Project_Task_List.xlsx  (Excel lock file — DELETE, not archive)
```

### 4. Top-level DOCS/ — superseded files (6 files)

| File                                                            | Why Archive                                            |
| --------------------------------------------------------------- | ------------------------------------------------------ |
| `Incorporate123_Project_Task_List0.xlsx`                        | v0 superseded by current `_Task_List.xlsx`             |
| `Incorporate123_Project_Cheat_Sheet.html`                       | Duplicate of `.pdf` version                            |
| `incorporate123-complete-strategy.pdf`                          | Earlier version; .md version in Kick-off Info is newer |
| `Incorporate123_Scope_Internal_Final.docx`                      | Superseded by `(Repaired).docx`                        |
| `Payload CMS 3.x the complete technical stack and ecosystem.md` | CMS decision made (WordPress) — obsolete research      |
| `Redesign Strategy Mind Map.png`                                | Phase 1 artifact, incorporated into Discovery Report   |

### 5. Kick-off Info/ — superseded SOWs & briefs (~15 files)

| File(s)                                                         | Why Archive                                 |
| --------------------------------------------------------------- | ------------------------------------------- |
| `Incorporate123_SOW (1).docx`, `(2).docx`, `(3).docx`           | Early SOW drafts — Final version exists     |
| `Incorporate123_SOW.docx`, `Incorporate123_SOW.pdf`             | Early SOW — superseded by `_Detailed_Final` |
| `Incorporate123_SOW_Detailed-v2.md`                             | v2, superseded by `_Detailed_Final.md`      |
| `Incorporate123_SOW_Full.md`                                    | Alternative pricing model, not selected     |
| `Incorporate123_Scope_Effort.html`                              | v1 — keep only `_Effort-v3.html`            |
| `Incorporate123_Developer_Brief_Roman.docx`, `.pdf`, `_RU.docx` | Phase 1 brief for Roman — work completed    |
| `Incorporate123_Content_SEO_Brief_Irish.docx`                   | Phase 1 brief for Irish — work completed    |
| `Incorporate123_Kickoff_Questions_SHORT.md`                     | Abbreviated; full version exists            |
| `Incorporate123_Kickoff_Questions_for_David.docx`               | Duplicate of `.md` version                  |
| Saved webpage HTMLs + `_files/` folders (2 sets)                | Can be re-fetched from BIT Studios site     |

### 6. Phase 1 / 1 - Kick-off Meeting — old materials (~4 files)

| File(s)                                                   | Why Archive                               |
| --------------------------------------------------------- | ----------------------------------------- |
| `Incorporate123_Kickoff_Talking_Points.docx` & `(1).docx` | Duplicate + completed                     |
| `Incorporate123_Meeting_Questions.docx`                   | Superseded by Discovery Finalization docs |
| `Incorporate123_Supplemental_Questions.docx`              | Superseded                                |

**KEEP:** The 4 new untracked Discovery Finalization files (active meeting prep).

### ~~7. Phase 1 / 2 - Content Inventory / scraped-content/ — KEEP~~

**Decision:** Keep scraped-content/ for now as reference in case old site content questions come up during David meetings.

### 8. Phase 1 / 3 - Content Migration & IA / `_Archive/` (~15 files)

Old IA iterations (Card_Tree, Deep_Tree, Folder_Tree, Horizontal_Tree variations). Already self-archived by the project — move to trash.

### 9. Phase 1 / 4 - Competitors Analysis — prompts & duplicates (~6 files)

| File(s)                                                          | Why Archive                            |
| ---------------------------------------------------------------- | -------------------------------------- |
| `competitor-analysis-prompt.md`                                  | Research prompt, not analysis          |
| `Incorporate123_Competitive_Analysis_Research_Prompts.md`        | Research framework/instructions        |
| `The complete playbook for competitive website analysis.md`      | Methodology doc, not specific analysis |
| `I need to do competitor research for [https___inco.md`          | Raw prompt artifact                    |
| `Incorporate123_Competitive_Analysis.docx` (if duplicate of .md) | Format duplicate                       |

**KEEP:** All actual analysis results, Anderson update, executive summaries, pricing/funnel teardown.

### 10. Phase 1 / 7 - Deliverables / `Archive/` subfolder

Contains older iterations of deliverables. Already self-archived — move to trash.

### 11. Phase 2 / Designs/ — old iterations & prompts (~12 files)

| File(s)                                                       | Why Archive                             |
| ------------------------------------------------------------- | --------------------------------------- |
| `Incorporate123_Brand_Guide.html` (v1)                        | Superseded by v2                        |
| `Incorporate123_Brand_Guide (1).html`, `(2).html`, `(3).html` | Duplicate variations                    |
| `Incorporate123_Brand_Guide_Prompt*.md` (3 files)             | Generation prompts — not deliverables   |
| `Incorporate123_Homepage.html`, `(1).html`                    | Superseded by V2, V3                    |
| `nasa_graphics_manual_nhb_1430-2_jan_1976.pdf`                | External inspiration — not project work |

**KEEP:** `_V2.html`, `_V3.html` (latest), `_v2.html`/`.md` brand guide, `.jsx` component.

### 12. Phase 2 / Wireframes Page Specs / `Prompts/` (~16 files)

Entire `Prompts/` subfolder contains artifact generation prompts (one per page type). These are instructions for Claude/GPT to generate wireframes — the wireframes themselves are the deliverables, not the prompts.

Also archive `_Archive/` subfolder in Wireframes.

### 13. Phase 2 / content / `_backup/` (~60 files)

Mirror backup of content files from earlier phases. Active versions live in main `content/` and `v2-post-david-review/` and `v3-taxation-update/`.

### 14. Prototype — TASKS.md (1 file)

`inc123-prototype/TASKS.md` has all checkboxes unchecked despite work being complete. Conflicts with accurate `PROGRESS.md`. Archive it.

## Files to KEEP (no action)

- All of `DOCS/Package Strategy/` (just created)
- `DOCS/Code/` (4 active reference files)
- `DOCS/Meeting Transcripts/` (historical reference)
- `DOCS/Phase 2/content/`, `v2-post-david-review/`, `v3-taxation-update/`
- `DOCS/Phase 2/Wireframes Page Specs/*.md` (actual specs)
- All prototype code (`inc123-prototype/src/`, `tests/`)
- `DOCS/Kick-off Info/Incorporate123_SOW_Detailed_Final.*` (all 3 formats)
- `DOCS/Phase 1/6 - Discovery Report/` (all current versions)
- All 4 new Discovery Finalization meeting files
- `DOCS/ACT/` (CRM data — confirmed keep)
- `DOCS/Phase 1/2 - Content Inventory/scraped-content/` (confirmed keep)

## Execution

1. Create timestamped archive folder: `~/.claude/trash/2026-03-16_project-archive/`
2. Move files in batches by location (root screenshots, root scripts, DOCS top-level, Kick-off Info, Phase 1 subdirs, Phase 2 subdirs, prototype)
3. Delete (not archive) the Excel lock file `~$Incorporate123_Project_Task_List.xlsx`
4. Verify no broken references in active files after moves
5. Log the archive operation in `.claude/project-log.md`

## Estimated Impact

| Category                         | Files          | Size       |
| -------------------------------- | -------------- | ---------- |
| Root screenshots                 | 34             | ~5.6 MB    |
| Root scripts                     | 2              | ~122 KB    |
| DOCS top-level superseded        | 6              | ~18 MB     |
| Kick-off Info superseded         | ~15            | ~5 MB      |
| Phase 1 IA/Deliverables archives | ~30            | ~1 MB      |
| Phase 1 competitor prompts       | ~6             | ~200 KB    |
| Phase 2 old designs/prompts      | ~28            | ~3 MB      |
| Phase 2 content backup           | ~60            | ~2 MB      |
| Prototype TASKS.md               | 1              | ~5 KB      |
| **Total**                        | **~183 files** | **~35 MB** |

## Verification

1. After archiving, run `ls -R "DOCS/"` to confirm only active files remain
2. Verify the prototype still builds: `cd inc123-prototype && npm run build`
3. Check that the 4 new Discovery Finalization files are still in place (untracked, not moved)
4. Spot-check 3-4 active documents still reference correct sibling files
