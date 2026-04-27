/**
 * HIMAT DHALIWAL — BRAND IDENTITY SHOWCASE
 * Design: Refined Modernism
 * Sections: Hero → Overview → Logo Variations → Color Palette → Typography →
 *           Business Card → For Sale Sign → Social Media → Brand Pattern → Contact
 */

import { useEffect, useRef } from "react";

// Asset URLs (webdev lifecycle-tied)
const ASSETS = {
  logo: "/manus-storage/himat-logo_d727245b.webp",
  billboard: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-hero-billboard-dCW3ZatEbT2Bjqegn3vnHD.webp",
  businessCard: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-business-card-fVhGaccJftzAEQgacUY9TU.webp",
  forSaleSign: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-forsale-sign-U8F5vSA8xaiwcUu6fAePFs.webp",
  brandPattern: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-brand-pattern-6wxDCe6vtDrH5VaokMKSJd.webp",
  phoneMockup: "https://d2xsxph8kpxj0f.cloudfront.net/91635441/CwagM2MDrndy4dbHaPyCQZ/himat-phone-mockup-hJuSmwhTJP2f2ri5CBnLaX.webp",
};

// SVG Logo Component (recreated from the uploaded logo)
function HimatLogo({ color = "#0D0D0D", size = 80 }: { color?: string; size?: number }) {
  const s = size / 5; // unit size
  const gap = s * 0.18;
  const shapes = [
    // Row 1: 3 house shapes (pentagon pointing up)
    { type: "house", x: 0, y: 0 },
    { type: "house", x: s + gap, y: 0 },
    { type: "house", x: (s + gap) * 2, y: 0 },
    // Row 2: 3 diamond shapes (square rotated 45°)
    { type: "diamond", x: 0, y: s + gap },
    { type: "diamond", x: s + gap, y: s + gap },
    { type: "diamond", x: (s + gap) * 2, y: s + gap },
    // Row 3: 3 inverted house shapes (pentagon pointing down)
    { type: "invhouse", x: 0, y: (s + gap) * 2 },
    { type: "invhouse", x: s + gap, y: (s + gap) * 2 },
    { type: "invhouse", x: (s + gap) * 2, y: (s + gap) * 2 },
  ];

  const renderShape = (shape: typeof shapes[0], i: number) => {
    const { x, y, type } = shape;
    const hs = s / 2;
    if (type === "house") {
      // Pentagon: flat bottom, pointed top
      const pts = [
        `${x + hs},${y}`,
        `${x + s},${y + s * 0.45}`,
        `${x + s},${y + s}`,
        `${x},${y + s}`,
        `${x},${y + s * 0.45}`,
      ].join(" ");
      return <polygon key={i} points={pts} fill={color} />;
    } else if (type === "diamond") {
      const pts = [
        `${x + hs},${y}`,
        `${x + s},${y + hs}`,
        `${x + hs},${y + s}`,
        `${x},${y + hs}`,
      ].join(" ");
      return <polygon key={i} points={pts} fill={color} />;
    } else {
      // inverted house: flat top, pointed bottom
      const pts = [
        `${x},${y}`,
        `${x + s},${y}`,
        `${x + s},${y + s * 0.55}`,
        `${x + hs},${y + s}`,
        `${x},${y + s * 0.55}`,
      ].join(" ");
      return <polygon key={i} points={pts} fill={color} />;
    }
  };

  const totalW = s * 3 + gap * 2;
  return (
    <svg
      width={size * 0.75}
      height={size * 0.75}
      viewBox={`0 0 ${totalW} ${totalW}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {shapes.map(renderShape)}
    </svg>
  );
}

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
      { threshold: 0.12 }
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
    <div ref={pageRef} className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif", background: "#FAFAF8", color: "#0D0D0D" }}>

      {/* ─── SECTION 01: HERO ─── */}
      <section style={{ background: "#0D0D0D", minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Background pattern overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${ASSETS.brandPattern})`,
          backgroundSize: "400px 400px",
          opacity: 0.06,
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 40px", width: "100%" }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="section-label" style={{ color: "#B8963E" }}>Brand Identity — 2026</span>
          </div>

          <div className="reveal reveal-delay-1" style={{ display: "flex", alignItems: "center", gap: 40, marginBottom: 48, flexWrap: "wrap" }}>
            <img src={ASSETS.logo} alt="Himat Dhaliwal Logo" style={{ height: 100, filter: "invert(1)", flexShrink: 0 }} />
          </div>

          <div className="reveal reveal-delay-2">
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 300,
              color: "#FAFAF8",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}>
              Himat Dhaliwal
            </h1>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#B8963E",
              letterSpacing: "0.05em",
              marginBottom: 40,
            }}>
              Real Estate Professional
            </p>
          </div>

          <div className="reveal reveal-delay-3" style={{ maxWidth: 560 }}>
            <div style={{ height: 1, background: "linear-gradient(90deg, #B8963E, transparent)", marginBottom: 32, width: 200 }} />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 300,
              color: "#FAFAF8",
              lineHeight: 1.5,
              letterSpacing: "0.01em",
            }}>
              "Your interests. My expertise.<br />Real results."
            </p>
          </div>

          <div className="reveal reveal-delay-4" style={{ marginTop: 64, display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Website", value: "www.himat.ca" },
              { label: "Phone", value: "778-808-8544" },
              { label: "Email", value: "himatsdhaliwal@gmail.com" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8963E", marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: "#FAFAF8", fontSize: "0.9rem", fontWeight: 300 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#B8963E", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, #B8963E, transparent)" }} />
        </div>
      </section>

      {/* ─── SECTION 02: BILLBOARD MOCKUP ─── */}
      <section style={{ background: "#FAFAF8" }}>
        <img
          src={ASSETS.billboard}
          alt="Himat Dhaliwal Billboard Mockup"
          className="reveal"
          style={{ width: "100%", display: "block", maxHeight: "70vh", objectFit: "cover" }}
        />
      </section>

      {/* ─── SECTION 03: BRAND OVERVIEW ─── */}
      <section style={{ background: "#FAFAF8", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <div className="reveal">
              <span className="section-label">Real Estate</span>
              <div style={{ height: 1, background: "#B8963E", marginTop: 12, width: 40 }} />
            </div>
            <div className="reveal reveal-delay-1">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: 24, color: "#0D0D0D" }}>
                Himat Dhaliwal
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#6B7280", maxWidth: 560, marginBottom: 24 }}>
                A trusted real estate professional serving clients across British Columbia with integrity, expertise, and a genuine commitment to achieving the best outcomes. The brand identity reflects these values through clean geometry, timeless typography, and a palette that communicates both authority and approachability.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 480 }}>
                {[
                  { label: "Project Scope", value: "Brand Identity System" },
                  { label: "Industry", value: "Real Estate" },
                  { label: "Deliverables", value: "Logo, Palette, Typography, Applications" },
                  { label: "Year", value: "2026" },
                ].map((item) => (
                  <div key={item.label} style={{ borderTop: "1px solid #E5E3DF", paddingTop: 12 }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8963E", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: "0.85rem", color: "#0D0D0D", fontWeight: 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 04: LOGO VARIATIONS ─── */}
      <section style={{ background: "#0D0D0D", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <span className="section-label" style={{ color: "#B8963E" }}>01 — Logo System</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#FAFAF8", marginTop: 16 }}>
              Logo Variations
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {/* White on Black */}
            <div className="reveal" style={{ background: "#0D0D0D", border: "1px solid #222", padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, minHeight: 280 }}>
              <img src={ASSETS.logo} alt="Logo on Black" style={{ height: 72, filter: "invert(1)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase" }}>Primary — Reversed</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "#6B7280", marginTop: 4 }}>White on Black</div>
              </div>
            </div>

            {/* Black on White */}
            <div className="reveal reveal-delay-1" style={{ background: "#FAFAF8", padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, minHeight: 280 }}>
              <img src={ASSETS.logo} alt="Logo on White" style={{ height: 72 }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase" }}>Primary — Standard</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "#6B7280", marginTop: 4 }}>Black on White</div>
              </div>
            </div>

            {/* Gold on Navy */}
            <div className="reveal reveal-delay-2" style={{ background: "#1C2B3A", padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, minHeight: 280 }}>
              <img src={ASSETS.logo} alt="Logo on Navy" style={{ height: 72, filter: "invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.85)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase" }}>Premium — Navy</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "#6B7280", marginTop: 4 }}>Gold on Navy</div>
              </div>
            </div>
          </div>

          {/* Logo construction note */}
          <div className="reveal" style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            <div style={{ background: "#111", border: "1px solid #222", padding: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <HimatLogo color="#B8963E" size={160} />
            </div>
            <div>
              <span className="section-label" style={{ color: "#B8963E" }}>Logo Construction</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "#FAFAF8", marginTop: 12, marginBottom: 16 }}>
                The Grid System
              </h3>
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: 24 }}>
                The logo is built on a precise 3×3 grid of geometric forms — house shapes, diamonds, and inverted house shapes — representing the three pillars of real estate: community, connection, and home. Each shape is derived from a single unit square, ensuring perfect proportional harmony at any scale.
              </p>
              <div style={{ display: "flex", gap: 32 }}>
                {[
                  { shape: "▲", label: "Community" },
                  { shape: "◆", label: "Connection" },
                  { shape: "▼", label: "Home" },
                ].map((item) => (
                  <div key={item.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.5rem", color: "#B8963E", marginBottom: 4 }}>{item.shape}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#6B7280", textTransform: "uppercase" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 05: COLOR PALETTE ─── */}
      <section style={{ background: "#FAFAF8", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", marginBottom: 64 }}>
          <div className="reveal">
            <span className="section-label">02 — Color System</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#0D0D0D", marginTop: 16 }}>
              Brand Palette
            </h2>
          </div>
        </div>

        {/* Full-width color strips */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { color: "#0D0D0D", name: "Ink Black", hex: "#0D0D0D", role: "Primary", textColor: "#FAFAF8" },
            { color: "#1C2B3A", name: "Slate Navy", hex: "#1C2B3A", role: "Secondary", textColor: "#FAFAF8" },
            { color: "#B8963E", name: "Champagne Gold", hex: "#B8963E", role: "Accent", textColor: "#0D0D0D" },
            { color: "#FAFAF8", name: "Warm White", hex: "#FAFAF8", role: "Background", textColor: "#0D0D0D", border: true },
          ].map((swatch, i) => (
            <div
              key={swatch.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: swatch.color,
                padding: "60px 32px",
                border: swatch.border ? "1px solid #E5E3DF" : "none",
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: swatch.textColor, opacity: 0.6, marginBottom: 8 }}>{swatch.role}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500, color: swatch.textColor, marginBottom: 4 }}>{swatch.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: swatch.textColor, opacity: 0.7 }}>{swatch.hex}</div>
            </div>
          ))}
        </div>

        {/* Color usage description */}
        <div style={{ maxWidth: 1200, margin: "64px auto 0", padding: "0 40px" }}>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            <div style={{ borderTop: "2px solid #0D0D0D", paddingTop: 24 }}>
              <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, marginBottom: 8, fontSize: "0.9rem" }}>Ink Black</h4>
              <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>The foundation of the brand. Used for primary text, the logo mark, and high-contrast backgrounds. Conveys authority, permanence, and professionalism.</p>
            </div>
            <div style={{ borderTop: "2px solid #1C2B3A", paddingTop: 24 }}>
              <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, marginBottom: 8, fontSize: "0.9rem" }}>Slate Navy</h4>
              <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>A deep, sophisticated navy that anchors premium brand applications — business cards, signage, and digital profiles. Communicates trust and stability.</p>
            </div>
            <div style={{ borderTop: "2px solid #B8963E", paddingTop: 24 }}>
              <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, marginBottom: 8, fontSize: "0.9rem" }}>Champagne Gold</h4>
              <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>The prestige accent. Used sparingly for labels, rules, and highlights. Signals the premium quality of service and the value of the properties represented.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 06: TYPOGRAPHY ─── */}
      <section style={{ background: "#1C2B3A", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 80 }}>
            <span className="section-label" style={{ color: "#B8963E" }}>03 — Typography</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#FAFAF8", marginTop: 16 }}>
              Type System
            </h2>
          </div>

          {/* Display font */}
          <div className="reveal" style={{ marginBottom: 80 }}>
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase", marginBottom: 8 }}>Display</div>
                <div style={{ color: "#FAFAF8", fontSize: "0.85rem", fontWeight: 500 }}>Cormorant Garamond</div>
                <div style={{ color: "#6B7280", fontSize: "0.75rem", marginTop: 4 }}>Headings & Brand Name</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, color: "#FAFAF8", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  AaBbCc
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#6B7280", marginTop: 16, letterSpacing: "0.05em" }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#6B7280", marginTop: 4, letterSpacing: "0.05em" }}>
                  abcdefghijklmnopqrstuvwxyz
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#6B7280", marginTop: 4 }}>
                  1234567890 &amp; @ # ( ) . ,
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 80 }} />

          {/* Body font */}
          <div className="reveal" style={{ marginBottom: 80 }}>
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase", marginBottom: 8 }}>Body</div>
                <div style={{ color: "#FAFAF8", fontSize: "0.85rem", fontWeight: 500 }}>Outfit</div>
                <div style={{ color: "#6B7280", fontSize: "0.75rem", marginTop: 4 }}>Body Text & UI</div>
              </div>
              <div>
                <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginBottom: 16 }}>
                  {["Light 300", "Regular 400", "Medium 500", "SemiBold 600", "Bold 700"].map((weight) => (
                    <div key={weight} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: parseInt(weight.split(" ")[1]), color: "#FAFAF8", fontSize: "1.5rem" }}>
                      {weight.split(" ")[0]}
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#6B7280", lineHeight: 1.8 }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  1234567890 &amp; @ # ( ) . ,
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 80 }} />

          {/* Mono font */}
          <div className="reveal">
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase", marginBottom: 8 }}>Labels</div>
                <div style={{ color: "#FAFAF8", fontSize: "0.85rem", fontWeight: 500 }}>JetBrains Mono</div>
                <div style={{ color: "#6B7280", fontSize: "0.75rem", marginTop: 4 }}>Labels & Hex Codes</div>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(1.5rem, 4vw, 3rem)", color: "#B8963E", marginBottom: 16, letterSpacing: "0.05em" }}>
                  AaBb | AaBb | AaBb
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.8 }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  1234567890 — #0D0D0D #1C2B3A #B8963E
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 07: BUSINESS CARD MOCKUP ─── */}
      <section style={{ background: "#FAFAF8", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <span className="section-label">04 — Brand Applications</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#0D0D0D", marginTop: 16 }}>
              Business Card
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            <div className="reveal">
              <img
                src={ASSETS.businessCard}
                alt="Himat Dhaliwal Business Card"
                style={{ width: "100%", borderRadius: 4, boxShadow: "0 32px 80px rgba(0,0,0,0.15)" }}
              />
            </div>
            <div className="reveal reveal-delay-1">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, marginBottom: 16 }}>Premium Matte Finish</h3>
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: 32 }}>
                The business card uses the full brand palette — Slate Navy on the front for immediate brand recognition, clean Warm White on the reverse for contact information. The geometric logo mark is rendered in Champagne Gold foil, creating a tactile premium experience that reflects the quality of service.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { spec: "Size", value: "3.5\" × 2\" (Standard)" },
                  { spec: "Finish", value: "Soft-touch matte laminate" },
                  { spec: "Front", value: "Slate Navy + Gold foil logo" },
                  { spec: "Back", value: "Warm White + Navy ink" },
                ].map((item) => (
                  <div key={item.spec} style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#B8963E", textTransform: "uppercase", minWidth: 80 }}>{item.spec}</div>
                    <div style={{ fontSize: "0.85rem", color: "#0D0D0D" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 08: FOR SALE SIGN ─── */}
      <section style={{ background: "#0D0D0D", padding: "0" }}>
        <div className="reveal" style={{ position: "relative" }}>
          <img
            src={ASSETS.forSaleSign}
            alt="Himat Dhaliwal For Sale Sign"
            style={{ width: "100%", display: "block", maxHeight: "75vh", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "60px 60px 40px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
          }}>
            <span className="section-label" style={{ color: "#B8963E" }}>05 — Yard Signage</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, color: "#FAFAF8", marginTop: 8 }}>
              For Sale Sign System
            </h2>
          </div>
        </div>
      </section>

      {/* ─── SECTION 09: SOCIAL MEDIA / PHONE MOCKUP ─── */}
      <section style={{ background: "#FAFAF8", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="reveal">
              <span className="section-label">06 — Digital Presence</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#0D0D0D", marginTop: 16, marginBottom: 24 }}>
                Social Media Profile
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: 32 }}>
                The brand translates seamlessly to digital platforms. The profile avatar uses the geometric logo mark on a Slate Navy circle, immediately recognizable at any size. The brand palette and typography carry through to all digital touchpoints, ensuring consistent recognition across Instagram, LinkedIn, and other platforms.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "#0D0D0D", color: "#FAFAF8", padding: "16px 24px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
                  @himatdhaliwal
                </div>
                <div style={{ borderLeft: "2px solid #B8963E", paddingLeft: 16 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem", color: "#0D0D0D", lineHeight: 1.6 }}>
                    "Your interests. My expertise. Real results."
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <img
                src={ASSETS.phoneMockup}
                alt="Social Media Profile Mockup"
                style={{ width: "100%", borderRadius: 8, boxShadow: "0 40px 100px rgba(0,0,0,0.12)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: BRAND STATEMENT ─── */}
      <section style={{
        background: "#1C2B3A",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${ASSETS.brandPattern})`,
          backgroundSize: "300px 300px",
          opacity: 0.08,
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ marginBottom: 24 }}>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #B8963E, transparent)", marginBottom: 40 }} />
            <span className="section-label" style={{ color: "#B8963E" }}>Brand Philosophy</span>
          </div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "#FAFAF8",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: 40,
          }}>
            Not Just Real Estate.<br />
            <em style={{ fontStyle: "italic", color: "#B8963E" }}>Your Future.</em>
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            color: "#6B7280",
            lineHeight: 1.8,
            maxWidth: 600,
            margin: "0 auto",
          }}>
            Every transaction is a milestone. Every home is a story. Himat Dhaliwal brings expertise, dedication, and a genuine commitment to ensuring your interests are always the priority.
          </p>
          <div className="reveal reveal-delay-3" style={{ marginTop: 40, height: 1, background: "linear-gradient(90deg, transparent, #B8963E, transparent)" }} />
        </div>
      </section>

      {/* ─── SECTION 11: EMAIL SIGNATURE MOCKUP ─── */}
      <section style={{ background: "#FAFAF8", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <span className="section-label">07 — Email Signature</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#0D0D0D", marginTop: 16 }}>
              Digital Signature
            </h2>
          </div>

          {/* Email mockup */}
          <div className="reveal" style={{ background: "#fff", border: "1px solid #E5E3DF", borderRadius: 4, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", maxWidth: 700 }}>
            {/* Email chrome */}
            <div style={{ background: "#F5F5F5", borderBottom: "1px solid #E5E3DF", padding: "12px 20px", display: "flex", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
            </div>
            {/* Email content */}
            <div style={{ padding: "32px 40px" }}>
              <p style={{ color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: 32 }}>
                Thank you for reaching out. I'd be happy to discuss your real estate needs and explore how we can work together to achieve your goals. Please feel free to contact me at your convenience...
              </p>
              {/* Signature */}
              <div style={{ borderTop: "1px solid #E5E3DF", paddingTop: 24 }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ background: "#1C2B3A", padding: "12px", borderRadius: 2, flexShrink: 0 }}>
                    <img src={ASSETS.logo} alt="Logo" style={{ height: 36, filter: "invert(1)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0D0D0D" }}>Himat Dhaliwal</div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "#B8963E", marginBottom: 8 }}>Real Estate Professional</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {[
                        { icon: "🌐", text: "www.himat.ca" },
                        { icon: "📱", text: "778-808-8544" },
                        { icon: "✉️", text: "himatsdhaliwal@gmail.com" },
                      ].map((item) => (
                        <div key={item.text} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "#6B7280" }}>
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

      {/* ─── SECTION 12: BRAND PATTERN ─── */}
      <section style={{ background: "#0D0D0D", padding: "0" }}>
        <div className="reveal" style={{ position: "relative" }}>
          <img
            src={ASSETS.brandPattern}
            alt="Brand Pattern"
            style={{ width: "100%", display: "block", height: 400, objectFit: "cover", opacity: 0.6 }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 16,
          }}>
            <span className="section-label" style={{ color: "#B8963E" }}>08 — Brand Pattern</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, color: "#FAFAF8", textAlign: "center" }}>
              The Geometric Texture
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.85rem", textAlign: "center", maxWidth: 400 }}>
              The logo motif repeats as a seamless background pattern for branded materials, presentations, and digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: CONTACT / CLOSING ─── */}
      <section style={{ background: "#0D0D0D", padding: "100px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
            <div className="reveal">
              <span className="section-label" style={{ color: "#B8963E" }}>Get In Touch</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#FAFAF8", marginTop: 16, lineHeight: 1.15 }}>
                Let's Find Your<br />
                <em style={{ fontStyle: "italic", color: "#B8963E" }}>Perfect Home.</em>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  { label: "Website", value: "www.himat.ca", href: "https://www.himat.ca" },
                  { label: "Phone", value: "778-808-8544", href: "tel:7788088544" },
                  { label: "Email", value: "himatsdhaliwal@gmail.com", href: "mailto:himatsdhaliwal@gmail.com" },
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 24 }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8963E", marginBottom: 8 }}>{item.label}</div>
                    <a href={item.href} style={{ color: "#FAFAF8", fontSize: "1.1rem", textDecoration: "none", fontWeight: 300, transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#B8963E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#FAFAF8")}
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: 100, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <img src={ASSETS.logo} alt="Logo" style={{ height: 32, filter: "invert(1)", opacity: 0.6 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#6B7280", letterSpacing: "0.1em" }}>HIMAT DHALIWAL</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#6B7280", letterSpacing: "0.1em" }}>
              © 2026 — BRAND IDENTITY
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
