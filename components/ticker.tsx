"use client"

const brands = [
  { name: "Xero", font: "'Instrument Serif', serif", style: "italic" },
  { name: "QuickBooks", font: "'Syne', sans-serif", style: "normal" },
  { name: "Sage", font: "'Instrument Serif', serif", style: "normal" },
  { name: "FreeAgent", font: "'Syne', sans-serif", style: "normal" },
  { name: "HMRC", font: "'Syne', sans-serif", style: "normal" },
  { name: "Companies House", font: "'Instrument Serif', serif", style: "italic" },
]

const allBrands = [...brands, ...brands]

export default function Ticker() {
  return (
    <div style={{
      background: "#ffffff",
      borderTop: "1px solid #e8e8e4",
      borderBottom: "1px solid #e8e8e4",
      padding: "32px 0",
      overflow: "hidden",
    }}>
      <p style={{
  textAlign: "center",
  fontSize: "12px",
  fontWeight: 600,
  color: "#ccc",
  letterSpacing: "0.04em",
  marginBottom: "20px",
  fontFamily: "'Instrument Serif', serif",
  fontStyle: "italic",
}}>
  Trusted by businesses running on
</p>

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade left */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: "140px", zIndex: 2,
          background: "linear-gradient(to right, white, transparent)",
          pointerEvents: "none",
        }} />
        {/* Fade right */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          width: "140px", zIndex: 2,
          background: "linear-gradient(to left, white, transparent)",
          pointerEvents: "none",
        }} />

        <div style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          animation: "ticker 28s linear infinite",
        }}>
          {allBrands.map((brand, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              padding: "0 40px",
            }}>
              <span style={{
                fontFamily: brand.font,
                fontStyle: brand.style,
                fontSize: "18px",
                fontWeight: brand.font.includes("Syne") ? 700 : 400,
                color: "#999",
                letterSpacing: brand.font.includes("Syne") ? "-0.3px" : "0",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#1a3318"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#999"}
              >
                {brand.name}
              </span>
              <span style={{
                color: "#ddd",
                fontSize: "20px",
                marginLeft: "40px",
                fontWeight: 300,
              }}>·</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}