import { ImageResponse } from "next/og"
import { MARK_W, MARK_H, MARK_PATH } from "@/components/logo-mark"

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
          <div
            style={{
              display: "flex",
              width: "64px",
              height: "64px",
              background: "#2d5a1b",
              borderRadius: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="42" height="42" viewBox={`0 0 ${MARK_W} ${MARK_H}`} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="og-s" x1="0" y1="0" x2={MARK_W} y2={MARK_H} gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#a8e070" />
                  <stop offset="1" stopColor="#6abf47" />
                </linearGradient>
              </defs>
              <path d={MARK_PATH} fill="url(#og-s)" />
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
