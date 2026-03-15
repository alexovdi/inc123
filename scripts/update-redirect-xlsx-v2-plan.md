# Plan: Update Migration/Redirect .xlsx with Tax Page Redirects

## Context

After analyzing the 319 scraped .md files from the current incorporate123.co site, we found ~32 tax-related URLs that should redirect to the 3 new tax pages (`/formation/entity-tax-guide`, `/compare/llc-vs-scorp-vs-ccorp-tax`, `/compliance/tax-obligations`) instead of the generic `/faq/` catch-all.

The `xlsx` npm package (SheetJS) is already installed. The existing .xlsx was created with it.

## What needs to change

### 1. Create v2 copy (per versioning rule — never edit DOCS in-place)

Source: `DOCS/Phase 1 - .../7 - Deliverables/Incorporate123_Content_Migration_Map_and_Redirect_Plan.xlsx`
Output: `DOCS/Phase 1 - .../7 - Deliverables/v2-tax-redirects/Incorporate123_Content_Migration_Map_and_Redirect_Plan_v2.xlsx`

New folder `v2-tax-redirects/` created to keep versioning consistent.

### 2. Update "Redirect Map" sheet

**Update 5 existing category-level rows** (currently → `/faq/`):

| Old URL | Current Target | New Target |
|---|---|---|
| `/learning-center/cat/14` | `/faq/` | `/formation/entity-tax-guide/` |
| `/learning-center/cat/41` | `/faq/` | `/compliance/tax-obligations/` |
| `/learning-center/cat/43` | `/faq/` | `/formation/entity-tax-guide/` |
| `/learning-center/cat/55` | `/faq/` | `/compare/llc-vs-scorp-vs-ccorp-tax/` |
| `/learning-center/cat/59` (item 97 = USE TAX) | `/faq/` | `/compliance/tax-obligations/` |

Note: `/services/business-license-tax` does NOT exist in the current redirect map.

**Add 32 new item-level redirect rows** before the pattern rules (row 117+):

To `/formation/entity-tax-guide/`:
- `cat/14/item/37`, `cat/14/item/40`, `cat/14/item/62`, `cat/14/item/88`, `cat/14/item/89`
- `cat/43/item/37`, `cat/43/item/40`, `cat/43/item/62`, `cat/43/item/88`, `cat/43/item/89`
- `cat/21/item/37`, `cat/41/item/88`, `cat/55/item/88`

To `/compare/llc-vs-scorp-vs-ccorp-tax/`:
- `cat/14/item/39`, `cat/14/item/90`, `cat/14/item/91`
- `cat/43/item/39`, `cat/43/item/90`, `cat/43/item/91`
- `cat/55/item/39`, `cat/55/item/91`, `cat/55/item/92`

To `/compliance/tax-obligations/`:
- `cat/41/item/20`, `cat/41/item/21`, `cat/41/item/41`, `cat/41/item/42`, `cat/41/item/44`, `cat/41/item/97`, `cat/41/item/98`
- `cat/19/item/21`, `cat/56/item/21`, `cat/59/item/97`

### 3. Update "Gap Analysis" sheet

Add 3 rows before the TOTAL row:
- `/formation/entity-tax-guide/` | Entity Tax Guide | Cluster | Formation | P2 — Expansion | New creation + LC consolidation
- `/compare/llc-vs-scorp-vs-ccorp-tax/` | LLC vs S-Corp vs C-Corp Tax | Comparison | Formation | P2 — Expansion | New creation + LC consolidation
- `/compliance/tax-obligations/` | Tax Filing & Obligations | Cluster | Compliance | P2 — Expansion | New creation + LC consolidation

Update total count: 33 → 36

### 4. Update "Cross-Pillar References" sheet

Add 2 rows:
- Entity Tax Guide: primary Formation, also referenced from Compliance (cross-pillar CTA)
- Tax Obligations: primary Compliance, also referenced from Formation (cross-pillar CTA)

### 5. Update "Migration Summary" dashboard

- New Architecture Pages: 55–71+ → 58–74+
- New Pages Required: 23+ → 26+
- Cross-Pillar References: 12+ → 14+

### 6. Update "FAQ Consolidation" sheet

Add entries for tax LC categories mapping to new tax pages instead of generic FAQ:
- cat/14 → `/formation/entity-tax-guide/`
- cat/43 → `/formation/entity-tax-guide/`
- cat/55 → `/compare/llc-vs-scorp-vs-ccorp-tax/`
- cat/41 → `/compliance/tax-obligations/`
- cat/59 → `/compliance/tax-obligations/`

## Sheet structure reference

**Redirect Map** — Headers at row 3: `Old URL Path | New URL | Inlinks | Redirect Type | Priority`. Pattern rules start at row 117. 121 rows total.

**Gap Analysis** — Row 0: title, row 3: headers `New URL | Page Name | Page Type | Target Pillar | Priority | Content Source | Notes`. Last row: `TOTAL NEW PAGES: 33`. 38 rows total.

**Cross-Pillar References** — Row 3: headers `Page | URL | Primary Pillar | Also Referenced From | Linking Strategy | Notes`. 18 rows total.

**Migration Summary** — Dashboard with labeled rows. Key rows: 26 (New Architecture Pages), 27 (New Pages Required), 28 (Cross-Pillar References). 33 rows total.

**FAQ Consolidation** — Row 3-4: headers `LC Content Type | Count | (col) | Destination | Strategy`. 39 rows total.

## Implementation

Single Node.js script using `xlsx` package:
1. Read existing .xlsx with `XLSX.readFile()`
2. Modify sheets using `sheet_to_json(ws, {header: 1})` → manipulate arrays → `aoa_to_sheet()`
3. Preserve `!cols` and `!merges` from original sheets
4. Write v2 copy with `XLSX.writeFile()`

## Verification
1. Run the script, confirm v2 .xlsx is created
2. Read v2 .xlsx back and verify row counts: Redirect Map 153, Gap Analysis 41, Cross-Pillar 20, FAQ 44
3. Spot-check key redirects (cat/14 → entity-tax-guide, cat/55 → llc-vs-scorp-vs-ccorp-tax)
