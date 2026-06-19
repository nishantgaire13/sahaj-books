import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a3318",
          padding: "72px 80px",
        }}
      >
        {/* Top: logo wordmark with new geometric S mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", width: "56px", height: "56px" }}>
            <svg width="56" height="56" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
              <rect width="160" height="160" rx="30" fill="#2d5a1b" />
              <rect x="18" y="18" width="124" height="24" fill="white" />
              <rect x="106" y="42" width="36" height="28" fill="white" />
              <polygon points="106,70 142,70 54,90 18,90" fill="#6abf47" />
              <rect x="18" y="90" width="36" height="28" fill="white" />
              <rect x="18" y="118" width="124" height="24" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.5px",
              display: "flex",
            }}
          >
            SahajBooks
          </span>
        </div>

        {/* Middle: headline — each div has one child only (Satori rule) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "78px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            UK Accounting &amp; Bookkeeping
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "36px",
              fontWeight: 800,
              color: "#a8e070",
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            for UK Businesses
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 400,
              marginTop: "16px",
            }}
          >
            Payroll · VAT Returns · Corporation Tax · Year-End Accounts
          </div>
        </div>

        {/* Bottom: trust pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              background: "rgba(106,191,71,0.12)",
              border: "1px solid rgba(106,191,71,0.35)",
              borderRadius: "100px",
              padding: "10px 26px",
              fontSize: "20px",
              color: "#6abf47",
              fontWeight: 600,
            }}
          >
            ACCA Qualified
          </div>
          <div
            style={{
              display: "flex",
              background: "rgba(106,191,71,0.12)",
              border: "1px solid rgba(106,191,71,0.35)",
              borderRadius: "100px",
              padding: "10px 26px",
              fontSize: "20px",
              color: "#6abf47",
              fontWeight: 600,
            }}
          >
            40% cheaper than UK firms
          </div>
          <div
            style={{
              display: "flex",
              background: "rgba(106,191,71,0.12)",
              border: "1px solid rgba(106,191,71,0.35)",
              borderRadius: "100px",
              padding: "10px 26px",
              fontSize: "20px",
              color: "#6abf47",
              fontWeight: 600,
            }}
          >
            Reply within 24 hours
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
