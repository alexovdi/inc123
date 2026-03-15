"""Audit styles inside a generated .docx file by parsing its XML."""
import xml.etree.ElementTree as ET
import os
import sys
import zipfile
import tempfile

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

def gv(el, attr):
    return el.get(W + attr) if el is not None else None

def audit(docx_path):
    tmpdir = tempfile.mkdtemp()
    with zipfile.ZipFile(docx_path, "r") as z:
        z.extractall(tmpdir)

    tree = ET.parse(os.path.join(tmpdir, "word", "document.xml"))
    root = tree.getroot()

    stree = ET.parse(os.path.join(tmpdir, "word", "styles.xml"))
    sroot = stree.getroot()

    # === Page Layout ===
    body = root.find(f".//{W}body")
    sectPr = body.find(f"{W}sectPr")
    pgSz = sectPr.find(f"{W}pgSz")
    pgMar = sectPr.find(f"{W}pgMar")
    print("=" * 60)
    print("DOCX STYLE AUDIT: " + os.path.basename(docx_path))
    print("=" * 60)
    print()
    print("## Page Layout")
    print("  Size: %s x %s DXA (US Letter)" % (gv(pgSz, "w"), gv(pgSz, "h")))
    for s in ["top", "bottom", "left", "right"]:
        v = gv(pgMar, s)
        print("  Margin %s: %s DXA (%.2f in)" % (s, v, int(v) / 1440))

    # === Default Style ===
    dd = sroot.find(f".//{W}docDefaults")
    rpr = dd.find(f".//{W}rPr")
    fonts = rpr.find(f"{W}rFonts")
    sz = rpr.find(f"{W}sz")
    col = rpr.find(f"{W}color")
    ppr = dd.find(f".//{W}pPr")
    sp = ppr.find(f"{W}spacing")
    print()
    print("## Default Document Style")
    print("  Font: %s" % gv(fonts, "ascii"))
    sz_val = gv(sz, "val")
    print("  Size: %s half-pts (%dpt)" % (sz_val, int(sz_val) // 2))
    print("  Color: #%s" % gv(col, "val"))
    print("  Spacing after=%s, line=%s" % (gv(sp, "after"), gv(sp, "line")))

    # === Heading Styles ===
    print()
    print("## Heading Styles (custom overrides)")
    all_styles = sroot.findall(f"{W}style")
    seen = set()
    for st in all_styles:
        sid = st.get(f"{W}styleId")
        if sid and sid.startswith("Heading") and len(sid) == 8 and sid[7:].isdigit():
            n = sid[7:]
            if n in seen:
                r = st.find(f"{W}rPr")
                p = st.find(f"{W}pPr")
                sz_v = gv(r.find(f"{W}sz"), "val") if r is not None else "?"
                b = r.find(f"{W}b") if r is not None else None
                c_v = gv(r.find(f"{W}color"), "val") if r is not None else "?"
                kn = p.find(f"{W}keepNext") if p is not None else None
                kl = p.find(f"{W}keepLines") if p is not None else None
                sp2 = p.find(f"{W}spacing") if p is not None else None
                ol = p.find(f"{W}outlineLvl") if p is not None else None
                bef = gv(sp2, "before") if sp2 is not None else "?"
                aft = gv(sp2, "after") if sp2 is not None else "?"
                print(
                    "  H%s: %dpt, bold=%s, color=#%s, keepNext=%s, keepLines=%s, before=%s, after=%s, outline=%s"
                    % (
                        n, int(sz_v) // 2,
                        "yes" if b is not None else "no",
                        c_v,
                        "yes" if kn is not None else "no",
                        "yes" if kl is not None else "no",
                        bef, aft,
                        gv(ol, "val") if ol is not None else "?",
                    )
                )
            seen.add(n)

    # === Content scan ===
    h_counts = {"Heading1": 0, "Heading2": 0, "Heading3": 0}
    bq_count = 0
    bq_sizes = set()
    bq_colors = set()
    bq_italic = False
    hr_count = 0
    hr_centered = 0
    hr_sz = None
    hr_color = None
    tbl_count = 0
    shaded_cells = 0
    shade_fills = set()
    bullet_count = 0

    for p in root.iter(f"{W}p"):
        pPr = p.find(f"{W}pPr")
        if pPr is not None:
            ps = pPr.find(f"{W}pStyle")
            if ps is not None:
                sv = gv(ps, "val")
                if sv in h_counts:
                    h_counts[sv] += 1
            ind = pPr.find(f"{W}ind")
            if ind is not None and gv(ind, "left") == "576":
                bq_count += 1
                for rr in p.findall(f"{W}r"):
                    rp = rr.find(f"{W}rPr")
                    if rp is not None:
                        s2 = rp.find(f"{W}sz")
                        c2 = rp.find(f"{W}color")
                        i2 = rp.find(f"{W}i")
                        if s2 is not None:
                            bq_sizes.add(gv(s2, "val"))
                        if c2 is not None:
                            bq_colors.add(gv(c2, "val"))
                        if i2 is not None:
                            bq_italic = True
            numPr = pPr.find(f"{W}numPr")
            if numPr is not None:
                bullet_count += 1
        text = "".join(t.text or "" for t in p.iter(f"{W}t"))
        if "\u2500" in text:
            hr_count += 1
            if pPr is not None:
                jc = pPr.find(f"{W}jc")
                if jc is not None and gv(jc, "val") == "center":
                    hr_centered += 1
            rr = p.find(f"{W}r")
            if rr is not None:
                rp = rr.find(f"{W}rPr")
                if rp is not None:
                    hr_sz = gv(rp.find(f"{W}sz"), "val")
                    hr_color = gv(rp.find(f"{W}color"), "val")

    for tbl in root.iter(f"{W}tbl"):
        tbl_count += 1
    for tc in root.iter(f"{W}tc"):
        tcPr = tc.find(f"{W}tcPr")
        if tcPr is not None:
            shd = tcPr.find(f"{W}shd")
            if shd is not None:
                f = gv(shd, "fill")
                if f and f != "auto":
                    shaded_cells += 1
                    shade_fills.add(f)

    # === Table Borders ===
    first_tbl = root.find(f".//{W}tbl")
    print()
    print("## Table Borders (first header cell)")
    if first_tbl:
        first_tc = first_tbl.find(f".//{W}tc")
        if first_tc:
            tcPr = first_tc.find(f"{W}tcPr")
            tcBorders = tcPr.find(f"{W}tcBorders") if tcPr else None
            if tcBorders is not None:
                for side in ["top", "bottom", "left", "right"]:
                    b = tcBorders.find(f"{W}{side}")
                    if b is not None:
                        print(
                            "  border-%s: style=%s, sz=%s, color=#%s"
                            % (side, gv(b, "val"), gv(b, "sz"), gv(b, "color"))
                        )

    # Cell margins
    first_tc2 = root.find(f".//{W}tc")
    if first_tc2:
        tcPr2 = first_tc2.find(f"{W}tcPr")
        tcMar = tcPr2.find(f"{W}tcMar") if tcPr2 else None
        if tcMar is not None:
            print()
            print("## Table Cell Margins (first cell)")
            for s in ["top", "bottom", "left", "right"]:
                m = tcMar.find(f"{W}{s}")
                if m is not None:
                    print("  %s: %s DXA" % (s, gv(m, "w")))

    # === Content Counts ===
    print()
    print("## Content Counts")
    for k, v in h_counts.items():
        print("  %s: %d" % (k, v))
    print("  List items: %d" % bullet_count)

    print()
    print("## Tables")
    print("  Count: %d" % tbl_count)
    print("  Shaded cells (banded rows): %d" % shaded_cells)
    print("  Fill colors: %s" % shade_fills)

    print()
    print("## Blockquotes")
    print("  Count: %d" % bq_count)
    pt_sizes = set(str(int(x) // 2) for x in bq_sizes)
    print("  Font sizes: %s half-pts (= %s pt)" % (bq_sizes, pt_sizes))
    print("  Colors: %s" % bq_colors)
    print("  Italic: %s" % bq_italic)
    print("  Indent left: 576 DXA")

    print()
    print("## Horizontal Rules")
    print("  Count: %d" % hr_count)
    print("  Center-aligned: %d of %d" % (hr_centered, hr_count))
    if hr_sz:
        print("  Run size: %s half-pts (%dpt)" % (hr_sz, int(hr_sz) // 2))
    if hr_color:
        print("  Run color: #%s" % hr_color)

    # Footer
    footer_path = os.path.join(tmpdir, "word", "footer1.xml")
    if os.path.exists(footer_path):
        ftree = ET.parse(footer_path)
        froot = ftree.getroot()
        print()
        print("## Footer")
        fp = froot.find(f".//{W}p")
        if fp:
            jc = fp.find(f"{W}pPr/{W}jc")
            print("  Alignment: %s" % (gv(jc, "val") if jc is not None else "none"))
            fr = fp.find(f"{W}r/{W}rPr")
            if fr:
                s3 = fr.find(f"{W}sz")
                c3 = fr.find(f"{W}color")
                f3 = fr.find(f"{W}rFonts")
                font_name = gv(f3, "ascii") if f3 is not None else "?"
                sz3 = gv(s3, "val") if s3 is not None else "?"
                col3 = gv(c3, "val") if c3 is not None else "?"
                print("  Font: %s, sz=%s (%spt), color=#%s" % (font_name, sz3, int(sz3) // 2 if sz3 != "?" else "?", col3))
            fld = fp.find(f".//{W}fldChar")
            if fld:
                print("  Page number field: yes")

    # Header
    print()
    print("## Header")
    print("  header1.xml exists: %s" % os.path.exists(os.path.join(tmpdir, "word", "header1.xml")))


if __name__ == "__main__":
    docx_path = sys.argv[1] if len(sys.argv) > 1 else None
    if not docx_path:
        print("Usage: python audit-docx-styles.py <path-to-docx>")
        sys.exit(1)
    audit(docx_path)
