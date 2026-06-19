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
        {/* Top: logo wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#6abf47",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              color: "white",
              fontWeight: 800,
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.5px",
            }}
          >
            SahajBooks
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "78px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            UK Accounting &amp;{" "}
            <span style={{ color: "#a8e070" }}>Bookkeeping</span>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 400,
            }}
          >
            Payroll · VAT Returns · Corporation Tax · Year-End Accounts
          </div>
        </div>

        {/* Bottom: trust pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["ACCA Qualified", "40% cheaper than UK firms", "Reply within 24 hours"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(106,191,71,0.12)",
                  border: "1px solid rgba(106,191,71,0.35)",
                  borderRadius: "100px",
                  padding: "10px 26px",
                  fontSize: "20px",
                  color: "#6abf47",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
