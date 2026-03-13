import { useState, useEffect, useRef, useCallback } from "react";
import { Shield, Lock, Vault, ShieldCheck, Building2, FileCheck, BookOpen, ClipboardCheck, Clock, Globe, DollarSign, MapPin, Award, Phone, ChevronRight, Check, X, Star, Eye, Fingerprint, ArrowRight, Menu, XIcon, Bitcoin, CreditCard, Users, Camera, ImageOff, Layers, Type, Palette, MessageSquare, Target, Package, Gem, Crown, Medal, AlertTriangle, Heart, Zap, TrendingUp, ExternalLink } from "lucide-react";

// ─── Color Tokens ───
const C = {
  navy: "#1e3a5f",
  navyLight: "#264a7a",
  blue: "#2563eb",
  blueLight: "#3b82f6",
  amber: "#d97706",
  amberLight: "#f59e0b",
  green: "#16a34a",
  purple: "#9333ea",
  white: "#ffffff",
  surface: "#f8fafc",
  bg: "#f1f5f9",
  fg: "#0f172a",
  muted: "#64748b",
  border: "#e2e8f0",
  success: "#16a34a",
};

const PILLAR_COLORS = {
  privacy: { color: C.blue, bg: "#eff6ff", label: "Business Privacy", icon: Shield },
  asset: { color: C.green, bg: "#f0fdf4", label: "Asset Protection", icon: ShieldCheck },
  formation: { color: C.amber, bg: "#fffbeb", label: "Company Formation", icon: Building2 },
  compliance: { color: C.purple, bg: "#faf5ff", label: "Compliance", icon: BookOpen },
};

const SECTIONS = [
  { id: "overview", label: "Brand Overview" },
  { id: "pillars", label: "Four Pillars" },
  { id: "colors", label: "Color System" },
  { id: "typography", label: "Typography" },
  { id: "voice", label: "Voice & Messaging" },
  { id: "trust", label: "Trust Architecture" },
  { id: "packages", label: "Package Tiers" },
  { id: "icons", label: "Iconography" },
  { id: "photography", label: "Photography" },
  { id: "content", label: "Content Patterns" },
  { id: "positioning", label: "Positioning" },
];

// ─── Utility Components ───
const SectionTitle = ({ children, sub }) => (
  <div style={{ marginBottom: 40 }}>
    <div style={{ width: 48, height: 3, background: C.amber, marginBottom: 16, borderRadius: 2 }} />
    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 36, fontWeight: 700, color: C.navy, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{children}</h2>
    {sub && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: C.muted, marginTop: 10, lineHeight: 1.6, maxWidth: 680 }}>{sub}</p>}
  </div>
);

const Card = ({ children, style, ...props }) => (
  <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.border}`, padding: 28, ...style }} {...props}>{children}</div>
);

const DoCard = ({ title, items }) => (
  <Card style={{ borderLeft: `4px solid ${C.green}`, flex: 1, minWidth: 280 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Check size={16} color={C.green} strokeWidth={2.5} />
      </div>
      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, color: C.green, letterSpacing: "0.04em", textTransform: "uppercase" }}>{title}</span>
    </div>
    {items.map((item, i) => (
      <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.fg, lineHeight: 1.65, margin: "8px 0" }}>{item}</p>
    ))}
  </Card>
);

const DontCard = ({ title, items }) => (
  <Card style={{ borderLeft: "4px solid #ef4444", flex: 1, minWidth: 280 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <X size={16} color="#ef4444" strokeWidth={2.5} />
      </div>
      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, color: "#ef4444", letterSpacing: "0.04em", textTransform: "uppercase" }}>{title}</span>
    </div>
    {items.map((item, i) => (
      <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.fg, lineHeight: 1.65, margin: "8px 0" }}>{item}</p>
    ))}
  </Card>
);

const Swatch = ({ color, name, hex, wide }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: wide ? "1 1 160px" : "0 0 auto" }}>
    <div style={{ width: wide ? "100%" : 80, height: 80, borderRadius: 10, background: color, border: color === "#ffffff" ? `1px solid ${C.border}` : "none", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }} />
    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: C.fg }}>{name}</span>
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.muted }}>{hex}</span>
  </div>
);

const Badge = ({ children, color }) => (
  <span style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: color || C.muted, background: color ? `${color}12` : C.bg, border: `1px solid ${color ? `${color}30` : C.border}`, borderRadius: 6, padding: "4px 10px" }}>{children}</span>
);

// ─── Main Component ───
export default function Incorporate123BrandGuide() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    // Load fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop + 120;
      let current = "overview";
      for (const s of SECTIONS) {
        const el = sectionRefs.current[s.id];
        if (el && el.offsetTop <= scrollTop) current = s.id;
      }
      setActiveSection(current);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (el && mainRef.current) {
      mainRef.current.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setSidebarOpen(false);
  }, []);

  const regRef = useCallback((id) => (el) => { sectionRefs.current[id] = el; }, []);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%", background: C.bg, fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>
      {/* ── Sidebar ── */}
      <aside style={{
        width: 260, minWidth: 260, height: "100%", background: C.navy, display: "flex", flexDirection: "column",
        position: "relative", zIndex: 20, transition: "transform 0.3s ease",
      }}>
        {/* Logo area */}
        <div style={{ padding: "28px 24px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: C.white, letterSpacing: "-0.01em" }}>
            Incorporate<span style={{ color: C.amber }}>123</span>
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>Brand Guide — 2026</div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "16px 12px", overflowY: "auto" }}>
          {SECTIONS.map((s) => {
            const active = activeSection === s.id;
            return (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 14px", borderRadius: 8,
                background: active ? "rgba(255,255,255,0.1)" : "transparent", border: "none", cursor: "pointer",
                marginBottom: 2, transition: "all 0.15s ease",
              }}>
                <div style={{ width: 3, height: 18, borderRadius: 2, background: active ? C.amber : "transparent", transition: "background 0.15s ease" }} />
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 13.5, fontWeight: active ? 600 : 400,
                  color: active ? C.white : "rgba(255,255,255,0.55)", letterSpacing: "0.01em", textAlign: "left",
                }}>{s.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding: "16px 24px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            Prepared by BIT Studios<br />March 2026
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main ref={mainRef} style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
        {/* Cover */}
        <div style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyLight} 50%, ${C.blue} 100%)`,
          padding: "80px 60px", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -120, right: -80, width: 500, height: 500, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
          <div style={{ position: "absolute", bottom: -60, left: "40%", width: 300, height: 300, borderRadius: "50%", background: "rgba(217,119,6,0.06)" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
            <Badge color="rgba(255,255,255,0.6)">Official Brand Reference</Badge>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 52, fontWeight: 800, color: C.white, margin: "24px 0 16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Incorporate<span style={{ color: C.amber }}>123</span>
            </h1>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.8)", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
              Privacy, Asset Protection &amp; Business Formation Specialists
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.45)", marginTop: 28, lineHeight: 1.6, maxWidth: 520 }}>
              Brand identity system, voice guidelines, visual standards, and content patterns for the repositioned Incorporate123 brand.
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div style={{ padding: "60px 60px 120px", maxWidth: 920 }}>

          {/* ═══ OVERVIEW ═══ */}
          <section ref={regRef("overview")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="A deliberate repositioning from geography-first Nevada incorporation company to privacy-first formation specialists.">Brand Overview</SectionTitle>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Company", value: "Incorporate123" },
                { label: "Founded", value: "~2000 (25+ years)" },
                { label: "Location", value: "Reno, Nevada" },
                { label: "Domain", value: "incorporate123.com" },
              ].map((d) => (
                <Card key={d.label} style={{ padding: 20 }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{d.label}</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: C.navy }}>{d.value}</div>
                </Card>
              ))}
            </div>

            {/* Positioning Statement */}
            <Card style={{ background: C.navy, border: "none", padding: 36, marginBottom: 32 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: C.amber, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Positioning Statement</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 600, color: C.white, lineHeight: 1.35, margin: 0, letterSpacing: "-0.01em" }}>
                "Privacy, Asset Protection &amp; Business Formation Specialists"
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 16, lineHeight: 1.6 }}>
                Occupies the uncontested market space where modern UX, privacy expertise, transparent pricing, and nominee services intersect. No competitor successfully combines all four.
              </p>
            </Card>

            {/* What We Are / Are Not */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <DoCard title="What Incorporate123 IS" items={[
                "A 25-year privacy and formation specialist focused on Wyoming and Nevada",
                "Premium but transparent — $1,275–$2,100 all-inclusive with no hidden fees",
                "Expert-guided but self-service friendly — clients can buy directly or talk to a person",
                "Privacy-first — year-round nominees, offshore records, cryptocurrency accepted",
              ]} />
              <DontCard title="What Incorporate123 is NOT" items={[
                "Not a budget $0 filing service (ZenBusiness, LegalZoom territory)",
                "Not a consultation-gated premium firm ($2,750+ like Anderson Advisors)",
                "Not a generic 'all 50 states' formation mill",
              ]} />
            </div>
          </section>

          {/* ═══ FOUR PILLARS ═══ */}
          <section ref={regRef("pillars")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="The entire brand, site, and content are organized around four pillars. Each has its own identity color, messaging voice, and visual signature.">Four Content Pillars</SectionTitle>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  key: "privacy", badge: "LEAD PILLAR",
                  msg: "Privacy You Can't Get Elsewhere — year-round nominees, offshore records, genuine anonymity",
                  cta: "Protect Your Privacy", trust: "Year-round nominees included — not 'nominee for a day'",
                  services: ["Anonymous LLC", "Nominee Services", "Private Incorporation (WY/NV/CA/FL)", "Offshore Privacy", "BOI Reporting"],
                },
                {
                  key: "asset",
                  msg: "Protect What You've Built — charging order protection, holding structures, multi-entity strategies",
                  cta: "Protect Your Assets", trust: "For individuals with $500K+ in assets",
                  services: ["Charging Order Protection", "WY/NV Asset Protection", "Investment Holding LLC", "Real Estate AP"],
                },
                {
                  key: "formation",
                  msg: "Expert Formation, All-Inclusive — everything you need to start, nothing hidden",
                  cta: "Start Your Company", trust: "25 years forming Wyoming and Nevada entities",
                  services: ["Wyoming LLC", "Nevada LLC", "Wyoming Corporation", "Nevada Corporation", "Shelf Companies"],
                },
                {
                  key: "compliance",
                  msg: "Ongoing Support, Not Just a Mailbox — year-round registered agent, annual reports, corporate minutes",
                  cta: "Stay Compliant", trust: "Full corporate minute maintenance included",
                  services: ["Registered Agent", "Annual Reports", "Corporate Minutes", "Virtual Office", "Domestication", "Foreign Registration"],
                },
              ].map((p) => {
                const pil = PILLAR_COLORS[p.key];
                const Icon = pil.icon;
                return (
                  <Card key={p.key} style={{ borderTop: `4px solid ${pil.color}`, padding: 0, overflow: "hidden" }}>
                    <div style={{ padding: "28px 32px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: pil.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={22} color={pil.color} />
                        </div>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: C.navy }}>{pil.label}</span>
                            {p.badge && <Badge color={pil.color}>{p.badge}</Badge>}
                          </div>
                        </div>
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: C.fg, lineHeight: 1.6, margin: "0 0 16px", maxWidth: 640 }}>{p.msg}</p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 20 }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Primary CTA</div>
                          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: pil.color, color: C.white, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, padding: "8px 16px", borderRadius: 8 }}>
                            {p.cta} <ArrowRight size={14} />
                          </div>
                        </div>
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Trust Element</div>
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg, fontStyle: "italic" }}>{p.trust}</div>
                        </div>
                      </div>

                      <div style={{ marginTop: 20 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Key Services</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {p.services.map((s) => (
                            <span key={s} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: pil.color, background: pil.bg, padding: "4px 10px", borderRadius: 6, fontWeight: 500 }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* ═══ COLORS ═══ */}
          <section ref={regRef("colors")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="A layered color system built around brand authority, pillar identity, and semantic meaning.">Color System</SectionTitle>

            {/* Brand colors */}
            <div style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: C.navy, marginBottom: 16 }}>Brand Colors</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ width: 160, height: 100, borderRadius: 12, background: C.navy, boxShadow: "0 4px 12px rgba(30,58,95,0.3)", display: "flex", alignItems: "flex-end", padding: 12 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>#1e3a5f</span>
                  </div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: C.fg }}>Primary — Deep Navy</span>
                  <span style={{ fontSize: 12, color: C.muted }}>Authority, trust, dark sections</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ width: 160, height: 100, borderRadius: 12, background: C.blue, boxShadow: "0 4px 12px rgba(37,99,235,0.3)", display: "flex", alignItems: "flex-end", padding: 12 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.8)" }}>#2563eb</span>
                  </div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: C.fg }}>Secondary — Bright Blue</span>
                  <span style={{ fontSize: 12, color: C.muted }}>CTAs, links, interactive</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ width: 160, height: 100, borderRadius: 12, background: C.amber, boxShadow: "0 4px 12px rgba(217,119,6,0.3)", display: "flex", alignItems: "flex-end", padding: 12 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.8)" }}>#d97706</span>
                  </div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: C.fg }}>Accent — Amber</span>
                  <span style={{ fontSize: 12, color: C.muted }}>Primary conversion CTAs only</span>
                </div>
              </div>
            </div>

            {/* Pillar colors */}
            <div style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: C.navy, marginBottom: 16 }}>Pillar Identity Colors</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {Object.entries(PILLAR_COLORS).map(([key, val]) => (
                  <Card key={key} style={{ padding: 16, display: "flex", alignItems: "center", gap: 14, flex: "1 1 180px" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, background: val.color }} />
                    <div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: C.fg }}>{val.label}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.muted }}>{val.color}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Semantic colors */}
            <div style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: C.navy, marginBottom: 16 }}>Semantic &amp; Surface Colors</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {[
                  { name: "Success", hex: "#16a34a", c: C.success },
                  { name: "Surface", hex: "#ffffff", c: C.white },
                  { name: "Background", hex: "#f1f5f9", c: C.bg },
                  { name: "Foreground", hex: "#0f172a", c: C.fg },
                  { name: "Muted", hex: "#64748b", c: C.muted },
                  { name: "Border", hex: "#e2e8f0", c: C.border },
                ].map((s) => <Swatch key={s.name} color={s.c} name={s.name} hex={s.hex} wide />)}
              </div>
            </div>

            {/* Usage rules */}
            <Card style={{ background: C.surface, borderColor: C.border }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, margin: "0 0 16px" }}>Color Usage Rules</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { ok: true, text: "Primary navy for dark sections: differentiator, final CTA, footer" },
                  { ok: true, text: "Secondary blue for links, active nav, focus rings" },
                  { ok: true, text: "Amber ONLY for primary conversion CTAs" },
                  { ok: true, text: "Pillar colors for mega menu accents, page headers, card borders" },
                  { ok: false, text: "Never use pillar colors for body text" },
                  { ok: false, text: "Never use amber for non-CTA elements" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    {r.ok ? <Check size={16} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} /> : <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />}
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg, lineHeight: 1.5 }}>{r.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* ═══ TYPOGRAPHY ═══ */}
          <section ref={regRef("typography")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="A three-font system: Outfit for display impact, Inter for body readability, JetBrains Mono for precision data.">Typography</SectionTitle>

            {/* Font specimens */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {[
                { family: "Outfit", role: "Display / Headings", desc: "Clean, modern, premium feel", sample: "Privacy, Asset Protection & Business Formation" },
                { family: "Inter", role: "Body Text", desc: "Excellent readability, professional", sample: "Incorporate123 has specialized in anonymous business structures for over 25 years, providing year-round nominee services and offshore record-keeping." },
                { family: "JetBrains Mono", role: "Mono / Legal / Pricing", desc: "For entity numbers, pricing, legal references", sample: "$1,275  ·  $525/yr  ·  EIN: 88-0123456" },
              ].map((f) => (
                <Card key={f.family}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontFamily: `'${f.family}', sans-serif`, fontSize: 22, fontWeight: 700, color: C.navy }}>{f.family}</span>
                    <Badge>{f.role}</Badge>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted, marginBottom: 16 }}>{f.desc}</p>
                  <div style={{ fontFamily: `'${f.family}', ${f.family === "JetBrains Mono" ? "monospace" : "sans-serif"}`, fontSize: f.family === "JetBrains Mono" ? 16 : 18, fontWeight: f.family === "Inter" ? 400 : 600, color: C.fg, lineHeight: 1.5, padding: 20, background: C.surface, borderRadius: 8 }}>
                    {f.sample}
                  </div>
                </Card>
              ))}
            </div>

            {/* Type scale */}
            <Card style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, margin: "0 0 24px" }}>Type Scale</h3>
              {[
                { level: "Display XL", size: 48, weight: 800, lh: 1.1, use: "Hero headlines only", font: "Outfit" },
                { level: "Display LG", size: 36, weight: 700, lh: 1.2, use: "Section headlines", font: "Outfit" },
                { level: "Display SM", size: 24, weight: 600, lh: 1.3, use: "Card titles, sub-section headers", font: "Outfit" },
                { level: "Text XL", size: 20, weight: 500, lh: 1.5, use: "Lead paragraphs, callouts", font: "Inter" },
                { level: "Text LG", size: 17, weight: 500, lh: 1.5, use: "Subheadlines, descriptions", font: "Inter" },
                { level: "Text Base", size: 15, weight: 400, lh: 1.6, use: "Body copy", font: "Inter" },
                { level: "Text SM", size: 13, weight: 400, lh: 1.5, use: "Captions, labels, meta", font: "Inter" },
                { level: "Text XS", size: 11, weight: 400, lh: 1.4, use: "Legal text, footnotes", font: "Inter" },
              ].map((t, i) => (
                <div key={t.level} style={{ display: "flex", alignItems: "baseline", gap: 20, padding: "14px 0", borderBottom: i < 7 ? `1px solid ${C.border}` : "none" }}>
                  <div style={{ width: 100, flexShrink: 0 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.muted }}>{t.level}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontFamily: `'${t.font}', sans-serif`, fontSize: t.size, fontWeight: t.weight, lineHeight: t.lh, color: C.fg }}>
                      Privacy Specialists
                    </span>
                  </div>
                  <div style={{ width: 200, flexShrink: 0, textAlign: "right" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted }}>{t.size}px / {t.weight} — {t.use}</span>
                  </div>
                </div>
              ))}
            </Card>

            {/* Typography rules */}
            <Card style={{ background: C.surface }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, margin: "0 0 16px" }}>Typography Rules</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { ok: true, text: "Headlines: 8 words or fewer for scannability" },
                  { ok: true, text: "Body copy: 3–5 sentences max per paragraph" },
                  { ok: true, text: "Pricing always uses JetBrains Mono" },
                  { ok: true, text: "Page H1s must be unique across the entire site" },
                  { ok: false, text: "Never use ALL CAPS for body text" },
                  { ok: false, text: "ALL CAPS acceptable only for eyebrows and badges" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    {r.ok ? <Check size={16} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} /> : <AlertTriangle size={16} color={C.amber} style={{ flexShrink: 0, marginTop: 2 }} />}
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg, lineHeight: 1.5 }}>{r.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* ═══ VOICE & MESSAGING ═══ */}
          <section ref={regRef("voice")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="The most critical section. How the brand speaks defines how it's perceived. Every piece of content must pass these filters.">Voice &amp; Messaging</SectionTitle>

            {/* Voice attributes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {[
                { attr: "Authoritative", doText: "Cite 25 years of experience; reference specific statutes and structures", dontText: "Vague claims; 'best in the business' without evidence" },
                { attr: "Educational", doText: "Explain why privacy matters; teach the difference between privacy and asset protection", dontText: "Assume visitors already understand nominees, charging orders, etc." },
                { attr: "Transparent", doText: "Show all pricing upfront; explain what's included and what's not", dontText: "Hidden pricing; fine-print exclusions; auto-renewal traps" },
                { attr: "Reassuring", doText: "Emphasize 25-year track record, real office, ongoing support", dontText: "Fear-based selling; 'you'll get sued if you don't act now'" },
                { attr: "Precise", doText: "Use specific numbers: $1,275, 25 years, $525 annual renewal", dontText: "Round numbers; 'affordable'; 'competitive pricing'" },
              ].map((v) => (
                <Card key={v.attr} style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ background: C.navy, padding: "12px 24px" }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, color: C.white }}>{v.attr}</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 260, padding: 20, borderRight: `1px solid ${C.border}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                        <Check size={14} color={C.green} />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: C.green, textTransform: "uppercase", letterSpacing: "0.05em" }}>Do</span>
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.fg, lineHeight: 1.6, margin: 0 }}>{v.doText}</p>
                    </div>
                    <div style={{ flex: 1, minWidth: 260, padding: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                        <X size={14} color="#ef4444" />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.05em" }}>Don't</span>
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.fg, lineHeight: 1.6, margin: 0 }}>{v.dontText}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Messaging DOs and DONTs */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <DoCard title="Messaging DOs" items={[
                "Compete on privacy expertise — '25 years specializing in anonymous structures'",
                "Compete on nominee depth — 'year-round nominees, not nominee for a day'",
                "Compete on offshore capability — 'nominees and records outside U.S. jurisdiction'",
                "Compete on all-inclusive value — 'what others charge $5,000/year for, we include'",
                "Compete on human service — 'real experts, not automated forms'",
                "Always establish context before presenting benefits",
              ]} />
              <DontCard title="Messaging DON'Ts" items={[
                "Never compete on price — 'we're cheaper'",
                "Never compete on speed — 'file in 5 minutes'",
                "Never compete on ease — 'simple 3-step process'",
                "Never compete on breadth — 'all 50 states'",
                "Never use fear-based selling or urgency pressure",
                "Never lead with benefits before establishing relevance/context",
              ]} />
            </div>

            {/* Pricing language */}
            <Card style={{ borderTop: `4px solid ${C.amber}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <DollarSign size={18} color={C.amber} />
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>Pricing Language</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { ok: true, text: "Always say 'all-inclusive' — never 'starting at'" },
                  { ok: true, text: "Always show renewal rate alongside formation price" },
                  { ok: true, text: "Frame value comparatively: 'competitors charge $400–$5,000/year for nominee services alone'" },
                  { ok: false, text: "Never apologize for premium pricing — position it as proof of included value" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    {r.ok ? <Check size={16} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} /> : <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />}
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg, lineHeight: 1.5 }}>{r.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* ═══ TRUST ═══ */}
          <section ref={regRef("trust")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="Launching with zero public reviews means trust signals must be engineered into every touchpoint from day one.">Trust Architecture</SectionTitle>

            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: C.navy, marginBottom: 16 }}>Immediate Trust Signals (at Launch)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 36 }}>
              {[
                { icon: Award, label: "Trusted Since 2000", desc: "25+ years of specialized experience in header/hero" },
                { icon: MapPin, label: "Real Reno Office", desc: "Professional photography, physical address displayed" },
                { icon: Users, label: "Founder Visibility", desc: "David's bio, experience, and photo on About page" },
                { icon: ShieldCheck, label: "30-Day Guarantee", desc: "Money-back guarantee badge on all package pages" },
                { icon: Bitcoin, label: "Crypto Payments", desc: "BTC, ETH, XRP, LTC, XMR badges — signals privacy" },
                { icon: Phone, label: "Phone Prominent", desc: "Clickable number in header and on every conversion page" },
              ].map((t) => (
                <Card key={t.label} style={{ padding: 20, textAlign: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.surface, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                    <t.icon size={22} color={C.navy} />
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: C.navy, marginBottom: 6 }}>{t.label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{t.desc}</div>
                </Card>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: C.navy, marginBottom: 16 }}>Post-Launch Trust Building</h3>
            <Card style={{ marginBottom: 32 }}>
              {[
                { text: "Trustpilot review program — target 100+ reviews in 6 months", icon: Star },
                { text: "Anonymized case studies — 3–5 within first quarter", icon: FileCheck },
                { text: "Content authority — regular blog publishing for E-E-A-T signals", icon: BookOpen },
                { text: "BBB accreditation exploration", icon: Award },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: i < 3 ? `1px solid ${C.border}` : "none" }}>
                  <item.icon size={18} color={C.blue} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.fg }}>{item.text}</span>
                </div>
              ))}
            </Card>

            <Card style={{ background: C.surface }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, margin: "0 0 16px" }}>Trust Signal Placement Rules</h3>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 16px" }}>
                {[
                  ["Every page", "Phone number in header + footer"],
                  ["Every conversion page", "Trust badge strip (25 years, guarantee, phone, crypto)"],
                  ["Every package page", "Money-back guarantee badge + value comparison messaging"],
                  ["Homepage", "Full trust signals bar + testimonials/stats section"],
                ].map(([where, what], i) => (
                  <React.Fragment key={i}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: C.navy }}>{where}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg }}>{what}</span>
                  </React.Fragment>
                ))}
              </div>
            </Card>
          </section>

          {/* ═══ PACKAGES ═══ */}
          <section ref={regRef("packages")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="Gold is the hero product. Silver is entry-level formation. Bronze exists only for price-sensitive captures.">Package Tier System</SectionTitle>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "stretch", marginBottom: 32 }}>
              {/* Gold */}
              <Card style={{ flex: "1 1 240px", borderTop: `4px solid ${C.amber}`, position: "relative", boxShadow: "0 8px 30px rgba(217,119,6,0.12)" }}>
                <div style={{ position: "absolute", top: 12, right: 12, background: C.amber, color: C.white, fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 20, letterSpacing: "0.04em", textTransform: "uppercase" }}>Most Popular</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <Crown size={22} color={C.amber} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700, color: C.navy }}>Gold</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.5, marginBottom: 20 }}>Privacy — the recommended standard for anyone seeking genuine anonymity</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 600, color: C.navy }}>$1,275<span style={{ fontSize: 14, color: C.muted, fontWeight: 400 }}> WY</span></div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 600, color: C.navy }}>$1,800<span style={{ fontSize: 14, color: C.muted, fontWeight: 400 }}> NV</span></div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: C.green, marginTop: 4 }}>$525/yr renewal w/ nominees</div>
                </div>
                <div style={{ fontSize: 12, color: C.fg, lineHeight: 1.6 }}>
                  Includes year-round nominees, offshore records, full compliance, registered agent, and annual report filing.
                </div>
              </Card>

              {/* Silver */}
              <Card style={{ flex: "1 1 240px", borderTop: `4px solid ${C.border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <Medal size={22} color={C.muted} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700, color: C.navy }}>Silver</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.5, marginBottom: 20 }}>Formation — entry point without privacy features. Clear upgrade path to Gold.</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 600, color: C.navy }}>$875<span style={{ fontSize: 14, color: C.muted, fontWeight: 400 }}> WY</span></div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 600, color: C.navy }}>$1,275<span style={{ fontSize: 14, color: C.muted, fontWeight: 400 }}> NV</span></div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: C.muted, marginTop: 4 }}>$325/yr renewal</div>
                </div>
              </Card>

              {/* Bronze */}
              <Card style={{ flex: "1 1 240px", borderTop: `4px solid ${C.border}`, opacity: 0.75 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <Gem size={22} color="#a3a3a3" />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700, color: C.navy }}>Bronze</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.5, marginBottom: 20 }}>Budget option, Nevada only. Minimal investment — exists for price-sensitive captures who may upgrade later.</p>
              </Card>
            </div>

            <Card style={{ background: C.surface }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, margin: "0 0 16px" }}>Package Display Rules</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { ok: true, text: "Always show Gold first (or highlighted center in 3-column)" },
                  { ok: true, text: "Always show renewal rate alongside formation price" },
                  { ok: true, text: "Always include 'all-inclusive' badge" },
                  { ok: false, text: "Never show Bronze as the default or recommended option" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    {r.ok ? <Check size={16} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} /> : <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />}
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg, lineHeight: 1.5 }}>{r.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* ═══ ICONOGRAPHY ═══ */}
          <section ref={regRef("icons")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="Lucide React — MIT licensed, tree-shakeable, 1000+ icons. Outline style only for consistency.">Iconography</SectionTitle>

            <Card style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
                {[
                  { size: 16, label: "16px — Inline" },
                  { size: 24, label: "24px — Standard" },
                  { size: 40, label: "40px — Feature" },
                ].map((s) => (
                  <div key={s.size} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Shield size={s.size} color={C.navy} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.muted, margin: 0 }}>
                Color: inherit from context — pillar color on pillar pages, muted in body text, white on dark backgrounds.
              </p>
            </Card>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
              {[
                { icon: Shield, label: "Privacy", c: C.blue },
                { icon: Lock, label: "Privacy Alt", c: C.blue },
                { icon: ShieldCheck, label: "Asset Protection", c: C.green },
                { icon: Building2, label: "Formation", c: C.amber },
                { icon: BookOpen, label: "Compliance", c: C.purple },
                { icon: Clock, label: "Year-round", c: C.navy },
                { icon: Globe, label: "Offshore", c: C.navy },
                { icon: DollarSign, label: "All-inclusive", c: C.navy },
                { icon: MapPin, label: "Reno Office", c: C.navy },
                { icon: Phone, label: "Human Support", c: C.navy },
              ].map((item) => (
                <Card key={item.label} style={{ padding: 16, textAlign: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${item.c}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                    <item.icon size={24} color={item.c} />
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, color: C.fg }}>{item.label}</div>
                </Card>
              ))}
            </div>
          </section>

          {/* ═══ PHOTOGRAPHY ═══ */}
          <section ref={regRef("photography")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="Professional photography is pending. These guidelines define the creative direction for all visual assets.">Photography Direction</SectionTitle>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { title: "Office Photography", desc: "Clean, professional shots of the Reno office (Kingsbury Executive Suites). No stock photos of generic office interiors.", icon: Building2, ok: true },
                { title: "Team Photography", desc: "Professional headshot of David for About page and trust signals. Approachable but authoritative.", icon: Camera, ok: true },
                { title: "No Stock People", desc: "Avoid generic diverse-team-in-conference-room stock photography. It undermines the 'real office, real people' trust signal.", icon: ImageOff, ok: false },
                { title: "Abstract / Conceptual", desc: "For hero sections and pillar headers, abstract shield/lock/vault imagery or geometric privacy-themed graphics preferred.", icon: Layers, ok: true },
                { title: "Privacy Alignment", desc: "Never use photos showing identifiable individuals as 'clients' — contradicts the privacy positioning.", icon: Fingerprint, ok: false },
              ].map((d) => (
                <Card key={d.title} style={{ flex: "1 1 320px", borderLeft: `4px solid ${d.ok ? C.green : "#ef4444"}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <d.icon size={18} color={d.ok ? C.green : "#ef4444"} />
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15, color: C.navy }}>{d.title}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg, lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* ═══ CONTENT PATTERNS ═══ */}
          <section ref={regRef("content")} style={{ marginBottom: 80 }}>
            <SectionTitle sub="Every page serves two audiences with progressive disclosure. Scanners get the pitch in seconds; researchers get the depth they need.">Content Patterns</SectionTitle>

            {/* 80/20 model */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 36 }}>
              <Card style={{ flex: "1 1 300px", borderTop: `4px solid ${C.blue}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <Eye size={18} color={C.blue} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: C.navy }}>80% — Scanners</span>
                </div>
                {["Clear value prop in ≤8 words", "3–5 sentence overview", "Visual comparison tables", "Prominent CTA above the fold", "Trust badge strip"].map((t) => (
                  <div key={t} style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 0" }}>
                    <ChevronRight size={14} color={C.blue} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg }}>{t}</span>
                  </div>
                ))}
              </Card>
              <Card style={{ flex: "1 1 300px", borderTop: `4px solid ${C.navy}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <BookOpen size={18} color={C.navy} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: C.navy }}>20% — Researchers</span>
                </div>
                {["Expandable 'Read More' sections", "Detailed FAQs (10–15 questions)", "Related deep-dive content links", "Full testimonials and case studies", "Itemized pricing breakdowns"].map((t) => (
                  <div key={t} style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 0" }}>
                    <ChevronRight size={14} color={C.navy} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.fg }}>{t}</span>
                  </div>
                ))}
              </Card>
            </div>

            {/* CTA hierarchy */}
            <Card>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, margin: "0 0 20px" }}>CTA Hierarchy</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.muted, marginBottom: 20, lineHeight: 1.5 }}>Every page has exactly one primary CTA style and one secondary. Never three competing styles.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <button style={{ background: C.amber, color: C.white, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, padding: "12px 28px", borderRadius: 10, border: "none", display: "flex", alignItems: "center", gap: 8, cursor: "pointer", boxShadow: "0 2px 8px rgba(217,119,6,0.25)" }}>
                    Protect Your Privacy <ArrowRight size={16} />
                  </button>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 12, color: C.fg }}>Primary</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted }}>Bold, amber. Action verb + outcome.</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <button style={{ background: "transparent", color: C.blue, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, padding: "11px 28px", borderRadius: 10, border: `2px solid ${C.blue}`, display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                    View Packages &amp; Pricing <ArrowRight size={16} />
                  </button>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 12, color: C.fg }}>Secondary</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted }}>Outline style. Alternative path.</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <button style={{ background: "transparent", color: C.muted, fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, padding: "8px 0", border: "none", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", textDecoration: "underline", textDecorationColor: C.border, textUnderlineOffset: 3 }}>
                    <Phone size={14} /> Talk to us instead
                  </button>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 12, color: C.fg }}>Consultation Safety Net</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted }}>Every self-service CTA must have a "Talk to us" nearby.</div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* ═══ POSITIONING ═══ */}
          <section ref={regRef("positioning")} style={{ marginBottom: 40 }}>
            <SectionTitle sub="Incorporate123 occupies the premium-but-self-service quadrant that no competitor currently fills.">Competitive Positioning</SectionTitle>

            {/* Quadrant chart */}
            <Card style={{ padding: 40, marginBottom: 24 }}>
              <div style={{ position: "relative", width: "100%", maxWidth: 580, height: 420, margin: "0 auto" }}>
                {/* Axes */}
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: C.border, transform: "translateX(-50%)" }} />
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, background: C.border, transform: "translateY(-50%)" }} />

                {/* Axis labels */}
                <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>Consultation-Required</div>
                <div style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>Self-Service</div>
                <div style={{ position: "absolute", left: -4, top: "50%", transform: "translateY(-50%) rotate(-90deg)", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>Budget ($0)</div>
                <div style={{ position: "absolute", right: -4, top: "50%", transform: "translateY(-50%) rotate(90deg)", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>Premium ($5K+)</div>

                {/* Quadrant backgrounds */}
                <div style={{ position: "absolute", left: 0, bottom: 0, width: "50%", height: "50%", background: "#f8fafc", borderRadius: "0 0 0 8px" }} />
                <div style={{ position: "absolute", right: 0, bottom: 0, width: "50%", height: "50%", background: `${C.amber}08`, borderRadius: "0 0 8px 0", border: `2px dashed ${C.amber}30` }} />

                {/* Budget + Self-Service */}
                <div style={{ position: "absolute", left: "12%", bottom: "18%", display: "flex", flexDirection: "column", gap: 4 }}>
                  {["ZenBusiness", "LegalZoom", "Incfile"].map((n) => (
                    <span key={n} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted, background: C.white, padding: "3px 8px", borderRadius: 4, border: `1px solid ${C.border}` }}>{n}</span>
                  ))}
                </div>

                {/* Premium + Consultation */}
                <div style={{ position: "absolute", right: "10%", top: "18%", display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                  {["Anderson Advisors", "NCH Inc"].map((n) => (
                    <span key={n} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.muted, background: C.white, padding: "3px 8px", borderRadius: 4, border: `1px solid ${C.border}` }}>{n}</span>
                  ))}
                </div>

                {/* Empty quadrant label */}
                <div style={{ position: "absolute", left: "20%", top: "35%", fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#d4d4d4", fontStyle: "italic" }}>(empty)</div>

                {/* INCORPORATE123 */}
                <div style={{ position: "absolute", right: "14%", bottom: "16%", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ background: C.amber, color: C.white, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, padding: "8px 16px", borderRadius: 8, boxShadow: "0 4px 16px rgba(217,119,6,0.3)", whiteSpace: "nowrap" }}>Incorporate123</div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, color: C.amber, textTransform: "uppercase", letterSpacing: "0.08em" }}>White space!</span>
                </div>
              </div>
            </Card>

            <Card style={{ background: C.navy, border: "none" }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 600, color: C.white, lineHeight: 1.4, margin: 0 }}>
                The brand occupies the premium-but-self-service quadrant that no competitor currently fills. All messaging, design, and UX decisions should reinforce this position.
              </p>
            </Card>
          </section>

        </div>
      </main>
    </div>
  );
}
