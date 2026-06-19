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
            <svg width="56" height="56" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="og-s" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#a8e070" />
                  <stop offset="1" stopColor="#6abf47" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" rx="24" fill="#2d5a1b" />
              <path d="M74 34 C74 22 56 22 46 28 C36 34 36 45 52 51" stroke="url(#og-s)" strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26 66 C26 78 44 78 54 72 C64 66 64 55 48 49" stroke="#2d5a1b" strokeWidth="22" fill="none" strokeLinecap="round" />
              <path d="M26 66 C26 78 44 78 54 72 C64 66 64 55 48 49" stroke="url(#og-s)" strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
