import { MARK_W, MARK_H, MARK_PATH } from "./logo-mark"

export default function Logo({ size = 40, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  const isLight = variant === "light"
  const wordSahaj = isLight ? "white" : "#1a3318"
  const gradId = `sahaj-s-grad-${variant}`

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg width={size} height={size} viewBox={`0 0 ${MARK_W} ${MARK_H}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2={MARK_W} y2={MARK_H} gradientUnits="userSpaceOnUse">
            {isLight ? (
              <>
                <stop offset="0" stopColor="#a8e070" />
                <stop offset="1" stopColor="#6abf47" />
              </>
            ) : (
              <>
                <stop offset="0" stopColor="#1a3318" />
                <stop offset="1" stopColor="#6abf47" />
              </>
            )}
          </linearGradient>
        </defs>
        <path d={MARK_PATH} fill={`url(#${gradId})`} />
      </svg>

      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: size * 0.46,
        letterSpacing: "-0.5px",
        lineHeight: 1,
        display: "flex",
        alignItems: "baseline",
        gap: 0,
      }}>
        <span style={{ color: wordSahaj, fontWeight: 700 }}>Sahaj</span>
        <span style={{ color: "#6abf47", fontWeight: 700 }}>Books</span>
      </span>
    </div>
  )
}
