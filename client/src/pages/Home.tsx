/**
 * HIMAT DHALIWAL — BRAND IDENTITY SHOWCASE
 * Design: Bold Editorial (Astrix Builders Portfolio Style)
 * Primary Font: JetBrains Mono (DIN Alternate Bold substitute)
 * Secondary Font: Outfit (body)
 * Sections: Hero → Overview → Logo Variations → Color Palette → Typography →
 *           Business Card → For Sale Sign → Social Media → Brand Statement → Email Signature → Brand Pattern → Contact
 */

import { useEffect, useRef } from "react";

// Asset URLs — all using official logo and v2 mockups
const ASSETS = {
  logoOfficial: "/manus-storage/himat-logo-official_ccea84f8.png",
  heroV2: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-hero-v2-En5tPVMcETz9uJNaeN2b4w.webp",
  cardsV2: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-cards-v2-W8hyyJuqB5AmUgAPgvG7Kj.webp",
  forSaleV2: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-forsale-v2-GjPUT6ezoerPwGAJYDStFk.webp",
  phoneV2: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-phone-v2-nJ7Mt3zWB7VoCLtfRYfESU.webp",
  billboardV2: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-billboard-v2-GfYixS2q8aBN47xFLE9vaQ.webp",
};

// Typography constants
const FONT_BRAND = "'JetBrains Mono', monospace";
const FONT_BODY = "'Outfit', sans-serif";

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const reveals = el.querySelectorAll(".reveal");
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef} className="min-h-screen" style={{ fontFamily: FONT_BODY, background: "#F5F5F3", color: "#0D0D0D" }}>

      {/* ─── SECTION 01: HERO ─── */}
      <section style={{ background: "#0D0D0D", minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>

        {/* Ghost logo watermark background */}
        <div style={{
          position: "absolute",
          right: -60,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}>
          <img src={ASSETS.logoOfficial} alt="" style={{ width: 700, filter: "invert(1)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 60px", width: "100%" }}>
          <div className="reveal" style={{ marginBottom: 48 }}>
            <img src={ASSETS.logoOfficial} alt="Himat Dhaliwal Logo" style={{ height: 80, filter: "invert(1)" }} />
          </div>

          <div className="reveal reveal-delay-1">
            <p style={{ fontFamily: FONT_BRAND, fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8963E", marginBottom: 20 }}>
              Brand Identity — 2026
            </p>
            <h1 style={{
              fontFamily: FONT_BRAND,
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 700,
              color: "#F5F5F3",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              marginBottom: 0,
              textTransform: "uppercase",
            }}>
              HIMAT
            </h1>
            <h1 style={{
              fontFamily: FONT_BRAND,
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 700,
              color: "#F5F5F3",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              marginBottom: 32,
              textTransform: "uppercase",
            }}>
              DHALIWAL
            </h1>
          </div>

          <div className="reveal reveal-delay-2" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ width: 40, height: 1, background: "#B8963E" }} />
            <p style={{ fontFamily: FONT_BODY, fontSize: "1rem", color: "#B8963E", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Real Estate Professional
            </p>
          </div>

          <div className="reveal reveal-delay-3" style={{ maxWidth: 520, marginBottom: 64 }}>
            <p style={{
              fontFamily: FONT_BRAND,
              fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
              fontWeight: 500,
              color: "#F5F5F3",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}>
              "Your interests.<br />My expertise.<br />Real results."
            </p>
          </div>

          <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { label: "Website", value: "www.himat.ca" },
              { label: "Phone", value: "778-808-8544" },
              { label: "Email", value: "himatsdhaliwal@gmail.com" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8963E", marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontFamily: FONT_BODY, color: "#F5F5F3", fontSize: "0.85rem", fontWeight: 300 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.22em", color: "#B8963E", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, #B8963E, transparent)" }} />
        </div>
      </section>

      {/* ─── SECTION 02: HERO GRAPHIC (full-width) ─── */}
      <section style={{ background: "#F5F5F3", padding: 0 }}>
        <img
          src={ASSETS.heroV2}
          alt="Himat Dhaliwal Brand Overview"
          className="reveal"
          style={{ width: "100%", display: "block", maxHeight: "65vh", objectFit: "cover" }}
        />
      </section>

      {/* ─── SECTION 03: BRAND OVERVIEW ─── */}
      <section style={{ background: "#F5F5F3", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, alignItems: "start" }}>
            <div className="reveal">
              <span className="section-label">Real Estate</span>
              <div style={{ height: 2, background: "#0D0D0D", marginTop: 12, width: 32 }} />
            </div>
            <div className="reveal reveal-delay-1">
              <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05, marginBottom: 24, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                HIMAT DHALIWAL
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "#555", maxWidth: 560, marginBottom: 32, fontFamily: FONT_BODY }}>
                A trusted real estate professional serving clients across British Columbia with integrity, expertise, and a genuine commitment to achieving the best outcomes. The brand identity reflects these values through clean geometry, bold typography, and a palette that communicates authority and approachability.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, maxWidth: 520, border: "1px solid #E0E0DC" }}>
                {[
                  { label: "Project Scope", value: "Brand Identity System" },
                  { label: "Industry", value: "Real Estate" },
                  { label: "Deliverables", value: "Logo, Palette, Type, Applications" },
                  { label: "Year", value: "2026" },
                ].map((item, i) => (
                  <div key={item.label} style={{ padding: "20px 24px", borderRight: i % 2 === 0 ? "1px solid #E0E0DC" : "none", borderBottom: i < 2 ? "1px solid #E0E0DC" : "none" }}>
                    <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8963E", marginBottom: 6 }}>{item.label}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: "0.85rem", color: "#0D0D0D", fontWeight: 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 04: LOGO VARIATIONS ─── */}
      <section style={{ background: "#0D0D0D", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <span className="section-label" style={{ color: "#B8963E" }}>01 — Logo System</span>
              <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#F5F5F3", marginTop: 12, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                LOGO VARIATIONS
              </h2>
            </div>
          </div>

          {/* Three logo colorways */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 2 }}>
            {/* White on Black */}
            <div className="reveal" style={{ background: "#0D0D0D", border: "1px solid #1A1A1A", padding: "64px 40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", minHeight: 320, gap: 40 }}>
              <img src={ASSETS.logoOfficial} alt="Logo reversed" style={{ height: 80, filter: "invert(1)" }} />
              <div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", color: "#B8963E", textTransform: "uppercase", marginBottom: 4 }}>Primary — Reversed</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "0.75rem", color: "#666" }}>White on Black</div>
              </div>
            </div>

            {/* Black on White */}
            <div className="reveal reveal-delay-1" style={{ background: "#F5F5F3", padding: "64px 40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", minHeight: 320, gap: 40 }}>
              <img src={ASSETS.logoOfficial} alt="Logo standard" style={{ height: 80 }} />
              <div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", color: "#B8963E", textTransform: "uppercase", marginBottom: 4 }}>Primary — Standard</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "0.75rem", color: "#888" }}>Black on White</div>
              </div>
            </div>

            {/* White on Navy */}
            <div className="reveal reveal-delay-2" style={{ background: "#1C2B3A", padding: "64px 40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", minHeight: 320, gap: 40 }}>
              <img src={ASSETS.logoOfficial} alt="Logo on navy" style={{ height: 80, filter: "invert(1)" }} />
              <div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", color: "#B8963E", textTransform: "uppercase", marginBottom: 4 }}>Premium — Navy</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "0.75rem", color: "#6B7280" }}>White on Slate Navy</div>
              </div>
            </div>
          </div>

          {/* Logo construction */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2 }}>
            <div style={{ background: "#111", border: "1px solid #1A1A1A", padding: "80px 60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={ASSETS.logoOfficial} alt="Logo mark large" style={{ height: 180, filter: "invert(1)", opacity: 0.12 }} />
            </div>
            <div style={{ background: "#161616", border: "1px solid #1A1A1A", padding: "60px" }}>
              <span className="section-label" style={{ color: "#B8963E" }}>Logo Construction</span>
              <h3 style={{ fontFamily: FONT_BRAND, fontSize: "1.6rem", fontWeight: 700, color: "#F5F5F3", marginTop: 12, marginBottom: 16, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                THE GRID SYSTEM
              </h3>
              <p style={{ color: "#666", lineHeight: 1.8, fontSize: "0.875rem", marginBottom: 32, fontFamily: FONT_BODY }}>
                The logo is built on a precise 3×3 grid of geometric forms — house shapes, diamonds, and inverted house shapes — representing the three pillars of real estate: community, connection, and home. Each shape is derived from a single unit square, ensuring perfect proportional harmony at any scale.
              </p>
              <div style={{ display: "flex", gap: 40 }}>
                {[
                  { shape: "▲", label: "Community" },
                  { shape: "◆", label: "Connection" },
                  { shape: "▼", label: "Home" },
                ].map((item) => (
                  <div key={item.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.4rem", color: "#B8963E", marginBottom: 6 }}>{item.shape}</div>
                    <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", color: "#555", textTransform: "uppercase" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 05: COLOR PALETTE ─── */}
      <section style={{ background: "#F5F5F3", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px", marginBottom: 64 }}>
          <div className="reveal">
            <span className="section-label">02 — Color System</span>
            <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0D0D0D", marginTop: 12, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              BRAND PALETTE
            </h2>
          </div>
        </div>

        {/* Full-width color strips */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { color: "#0D0D0D", name: "Ink Black", hex: "#0D0D0D", role: "Primary", textColor: "#F5F5F3" },
            { color: "#1C2B3A", name: "Slate Navy", hex: "#1C2B3A", role: "Secondary", textColor: "#F5F5F3" },
            { color: "#B8963E", name: "Champagne Gold", hex: "#B8963E", role: "Accent", textColor: "#0D0D0D" },
            { color: "#F5F5F3", name: "Warm White", hex: "#F5F5F3", role: "Background", textColor: "#0D0D0D", border: true },
          ].map((swatch, i) => (
            <div
              key={swatch.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: swatch.color,
                padding: "64px 40px",
                border: swatch.border ? "1px solid #E0E0DC" : "none",
              }}
            >
              <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: swatch.textColor, opacity: 0.5, marginBottom: 10 }}>{swatch.role}</div>
              <div style={{ fontFamily: FONT_BRAND, fontSize: "1.2rem", fontWeight: 700, color: swatch.textColor, marginBottom: 6, letterSpacing: "-0.01em" }}>{swatch.name}</div>
              <div style={{ fontFamily: FONT_BRAND, fontSize: "0.75rem", color: swatch.textColor, opacity: 0.6 }}>{swatch.hex}</div>
            </div>
          ))}
        </div>

        {/* Color descriptions */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 60px 0" }}>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #E0E0DC" }}>
            {[
              { color: "#0D0D0D", title: "Ink Black", desc: "The foundation of the brand. Used for primary text, the logo mark, and high-contrast backgrounds. Conveys authority, permanence, and professionalism." },
              { color: "#1C2B3A", title: "Slate Navy", desc: "A deep, sophisticated navy that anchors premium brand applications — business cards, signage, and digital profiles. Communicates trust and stability." },
              { color: "#B8963E", title: "Champagne Gold", desc: "The prestige accent. Used sparingly for labels, rules, and highlights. Signals the premium quality of service and the value of the properties represented." },
            ].map((item, i) => (
              <div key={item.title} style={{ padding: "32px 32px", borderRight: i < 2 ? "1px solid #E0E0DC" : "none" }}>
                <div style={{ width: 24, height: 24, background: item.color, marginBottom: 16 }} />
                <h4 style={{ fontFamily: FONT_BRAND, fontWeight: 700, marginBottom: 10, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}>{item.title}</h4>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.75, fontFamily: FONT_BODY }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 06: TYPOGRAPHY ─── */}
      <section style={{ background: "#1C2B3A", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 80 }}>
            <span className="section-label" style={{ color: "#B8963E" }}>03 — Typography</span>
            <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#F5F5F3", marginTop: 12, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              TYPE SYSTEM
            </h2>
          </div>

          {/* Primary font */}
          <div className="reveal" style={{ marginBottom: 64, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", color: "#B8963E", textTransform: "uppercase", marginBottom: 10 }}>Primary Display</div>
                <div style={{ fontFamily: FONT_BRAND, color: "#F5F5F3", fontSize: "0.9rem", fontWeight: 700 }}>JetBrains Mono</div>
                <div style={{ fontFamily: FONT_BODY, color: "#555", fontSize: "0.75rem", marginTop: 4 }}>Headings, Brand Name, Labels</div>
                <div style={{ fontFamily: FONT_BODY, color: "#555", fontSize: "0.7rem", marginTop: 8, fontStyle: "italic" }}>Substitute for DIN Alternate Bold</div>
              </div>
              <div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700, color: "#F5F5F3", lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
                  AaBbCc
                </div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.9rem", color: "#555", marginTop: 20, letterSpacing: "0.05em" }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.9rem", color: "#555", marginTop: 4, letterSpacing: "0.05em" }}>
                  abcdefghijklmnopqrstuvwxyz
                </div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.9rem", color: "#555", marginTop: 4 }}>
                  1234567890 &amp; @ # ( ) . ,
                </div>
              </div>
            </div>
          </div>

          {/* Body font */}
          <div className="reveal">
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", color: "#B8963E", textTransform: "uppercase", marginBottom: 10 }}>Body / UI</div>
                <div style={{ fontFamily: FONT_BRAND, color: "#F5F5F3", fontSize: "0.9rem", fontWeight: 700 }}>Outfit</div>
                <div style={{ fontFamily: FONT_BODY, color: "#555", fontSize: "0.75rem", marginTop: 4 }}>Body Text, Descriptions</div>
              </div>
              <div>
                <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 20 }}>
                  {[["Light", 300], ["Regular", 400], ["Medium", 500], ["SemiBold", 600], ["Bold", 700]].map(([name, weight]) => (
                    <div key={name} style={{ fontFamily: FONT_BODY, fontWeight: weight as number, color: "#F5F5F3", fontSize: "1.4rem" }}>
                      {name}
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "0.9rem", color: "#555", lineHeight: 1.8 }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  1234567890 &amp; @ # ( ) . ,
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 07: BUSINESS CARD ─── */}
      <section style={{ background: "#F5F5F3", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <span className="section-label">04 — Brand Applications</span>
            <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0D0D0D", marginTop: 12, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              BUSINESS CARD
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 60, alignItems: "center" }}>
            <div className="reveal">
              <img
                src={ASSETS.cardsV2}
                alt="Himat Dhaliwal Business Card"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div className="reveal reveal-delay-1">
              <h3 style={{ fontFamily: FONT_BRAND, fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                MATTE FINISH
              </h3>
              <p style={{ color: "#666", lineHeight: 1.85, fontSize: "0.875rem", marginBottom: 36, fontFamily: FONT_BODY }}>
                Two colorways — light powder blue and ink black — both featuring the geometric logo mark prominently. The cards use the brand's bold typographic system with contact details clearly presented on the reverse.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E0E0DC" }}>
                {[
                  { spec: "Size", value: "3.5\" × 2\" Standard" },
                  { spec: "Finish", value: "Soft-touch matte laminate" },
                  { spec: "Colorway A", value: "Powder Blue + Ink Black" },
                  { spec: "Colorway B", value: "Ink Black + White" },
                ].map((item, i) => (
                  <div key={item.spec} style={{ display: "flex", gap: 0, borderBottom: i < 3 ? "1px solid #E0E0DC" : "none" }}>
                    <div style={{ fontFamily: FONT_BRAND, fontSize: "0.6rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase", padding: "14px 20px", minWidth: 120, borderRight: "1px solid #E0E0DC" }}>{item.spec}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: "0.82rem", color: "#0D0D0D", padding: "14px 20px" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 08: FOR SALE SIGN (full bleed) ─── */}
      <section style={{ background: "#0D0D0D", padding: 0 }}>
        <div className="reveal" style={{ position: "relative" }}>
          <img
            src={ASSETS.forSaleV2}
            alt="Himat Dhaliwal For Sale Sign"
            style={{ width: "100%", display: "block", maxHeight: "80vh", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "80px 60px 48px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
          }}>
            <span className="section-label" style={{ color: "#B8963E" }}>05 — Yard Signage</span>
            <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontWeight: 700, color: "#F5F5F3", marginTop: 10, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              FOR SALE SIGN SYSTEM
            </h2>
          </div>
        </div>
      </section>

      {/* ─── SECTION 09: SOCIAL MEDIA / PHONE MOCKUP ─── */}
      <section style={{ background: "#F5F5F3", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="reveal">
              <span className="section-label">06 — Digital Presence</span>
              <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0D0D0D", marginTop: 12, marginBottom: 24, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                SOCIAL MEDIA
              </h2>
              <p style={{ color: "#666", lineHeight: 1.85, fontSize: "0.875rem", marginBottom: 36, fontFamily: FONT_BODY }}>
                The brand translates seamlessly to digital platforms. The geometric logo mark is immediately recognizable at any size. Bold typography and the brand palette carry through to all digital touchpoints — Instagram Stories, LinkedIn, and property listing platforms.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E0E0DC" }}>
                <div style={{ background: "#0D0D0D", color: "#F5F5F3", padding: "14px 20px", fontFamily: FONT_BRAND, fontSize: "0.8rem", fontWeight: 700 }}>
                  @himatdhaliwal
                </div>
                <div style={{ padding: "20px", borderLeft: "3px solid #B8963E" }}>
                  <p style={{ fontFamily: FONT_BRAND, fontSize: "0.9rem", color: "#0D0D0D", lineHeight: 1.5, fontWeight: 500 }}>
                    "Your interests.<br />My expertise.<br />Real results."
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <img
                src={ASSETS.phoneV2}
                alt="Social Media Mockup"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: BRAND STATEMENT ─── */}
      <section style={{ background: "#1C2B3A", padding: "120px 60px", position: "relative", overflow: "hidden" }}>
        {/* Ghost logo */}
        <div style={{ position: "absolute", right: -80, bottom: -60, opacity: 0.05, pointerEvents: "none" }}>
          <img src={ASSETS.logoOfficial} alt="" style={{ width: 600, filter: "invert(1)" }} />
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ marginBottom: 32 }}>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #B8963E, transparent)", marginBottom: 48 }} />
            <span className="section-label" style={{ color: "#B8963E" }}>Brand Philosophy</span>
          </div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: FONT_BRAND,
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            fontWeight: 700,
            color: "#F5F5F3",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}>
            NOT JUST<br />REAL ESTATE.<br />
            <span style={{ color: "#B8963E" }}>YOUR FUTURE.</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: FONT_BODY,
            fontSize: "1rem",
            color: "#6B7280",
            lineHeight: 1.85,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Every transaction is a milestone. Every home is a story. Himat Dhaliwal brings expertise, dedication, and a genuine commitment to ensuring your interests are always the priority.
          </p>
          <div className="reveal reveal-delay-3" style={{ marginTop: 48, height: 1, background: "linear-gradient(90deg, transparent, #B8963E, transparent)" }} />
        </div>
      </section>

      {/* ─── SECTION 11: EMAIL SIGNATURE ─── */}
      <section style={{ background: "#F5F5F3", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <span className="section-label">07 — Email Signature</span>
            <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0D0D0D", marginTop: 12, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              DIGITAL SIGNATURE
            </h2>
          </div>

          {/* Email mockup */}
          <div className="reveal" style={{ background: "#fff", border: "1px solid #E0E0DC", overflow: "hidden", maxWidth: 680 }}>
            {/* Email chrome */}
            <div style={{ background: "#F0F0EE", borderBottom: "1px solid #E0E0DC", padding: "12px 20px", display: "flex", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
            </div>
            {/* Email content */}
            <div style={{ padding: "36px 44px" }}>
              <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.85, marginBottom: 36, fontFamily: FONT_BODY }}>
                Thank you for reaching out. I'd be happy to discuss your real estate needs and explore how we can work together to achieve your goals. Please feel free to contact me at your convenience...
              </p>
              {/* Signature */}
              <div style={{ borderTop: "1px solid #E0E0DC", paddingTop: 28 }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ background: "#0D0D0D", padding: "14px", flexShrink: 0 }}>
                    <img src={ASSETS.logoOfficial} alt="Logo" style={{ height: 40, filter: "invert(1)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: FONT_BRAND, fontWeight: 700, fontSize: "0.95rem", color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "-0.01em" }}>Himat Dhaliwal</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: "0.78rem", color: "#B8963E", marginBottom: 10, fontWeight: 500 }}>Real Estate Professional</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      {[
                        { icon: "🌐", text: "www.himat.ca" },
                        { icon: "📱", text: "778-808-8544" },
                        { icon: "✉️", text: "himatsdhaliwal@gmail.com" },
                      ].map((item) => (
                        <div key={item.text} style={{ fontFamily: FONT_BODY, fontSize: "0.75rem", color: "#666" }}>
                          {item.icon} {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: BILLBOARD (full bleed) ─── */}
      <section style={{ background: "#0D0D0D", padding: 0 }}>
        <div className="reveal" style={{ position: "relative" }}>
          <img
            src={ASSETS.billboardV2}
            alt="Billboard Mockup"
            style={{ width: "100%", display: "block", maxHeight: "75vh", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "80px 60px 48px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
          }}>
            <span className="section-label" style={{ color: "#B8963E" }}>08 — Outdoor Advertising</span>
            <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontWeight: 700, color: "#F5F5F3", marginTop: 10, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              BILLBOARD SYSTEM
            </h2>
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: CONTACT / CLOSING ─── */}
      <section style={{ background: "#0D0D0D", padding: "100px 60px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
            <div className="reveal">
              <span className="section-label" style={{ color: "#B8963E" }}>Get In Touch</span>
              <h2 style={{ fontFamily: FONT_BRAND, fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 700, color: "#F5F5F3", marginTop: 16, lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "-0.03em" }}>
                LET'S FIND<br />YOUR<br /><span style={{ color: "#B8963E" }}>PERFECT<br />HOME.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #1A1A1A" }}>
                {[
                  { label: "Website", value: "www.himat.ca", href: "https://www.himat.ca" },
                  { label: "Phone", value: "778-808-8544", href: "tel:7788088544" },
                  { label: "Email", value: "himatsdhaliwal@gmail.com", href: "mailto:himatsdhaliwal@gmail.com" },
                ].map((item, i) => (
                  <div key={item.label} style={{ display: "flex", borderBottom: i < 2 ? "1px solid #1A1A1A" : "none" }}>
                    <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8963E", padding: "20px 24px", minWidth: 100, borderRight: "1px solid #1A1A1A" }}>
                      {item.label}
                    </div>
                    <a href={item.href} style={{ fontFamily: FONT_BODY, color: "#F5F5F3", fontSize: "0.9rem", textDecoration: "none", fontWeight: 300, padding: "20px 24px", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#B8963E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F5F3")}
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: 100, borderTop: "1px solid #1A1A1A", paddingTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <img src={ASSETS.logoOfficial} alt="Logo" style={{ height: 28, filter: "invert(1)", opacity: 0.4 }} />
              <span style={{ fontFamily: FONT_BRAND, fontSize: "0.6rem", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>Himat Dhaliwal</span>
            </div>
            <div style={{ fontFamily: FONT_BRAND, fontSize: "0.55rem", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              © 2026 — Brand Identity
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
