export default function Logo({ size = 40, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  const isLight = variant === "light"
  const wordSahaj = isLight ? "white" : "#1a3318"

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dark green rounded square */}
        <rect width="160" height="160" rx="30" fill="#1a3318" />

        {/* Top full-width bar */}
        <rect x="18" y="18" width="124" height="24" fill="white" />

        {/* Top-right connector — right arm of upper S curve */}
        <rect x="106" y="42" width="36" height="28" fill="white" />

        {/* Diagonal spine — the S crossover, in accent green */}
        <polygon points="106,70 142,70 54,90 18,90" fill="#6abf47" />

        {/* Bottom-left connector — left arm of lower S curve */}
        <rect x="18" y="90" width="36" height="28" fill="white" />

        {/* Bottom full-width bar */}
        <rect x="18" y="118" width="124" height="24" fill="white" />
      </svg>

      <span style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: size * 0.44,
        letterSpacing: "-0.3px",
        lineHeight: 1,
        display: "flex",
        alignItems: "baseline",
        gap: 0,
      }}>
        <span style={{ color: wordSahaj, fontWeight: 600 }}>Sahaj</span>
        <span style={{ color: "#6abf47", fontWeight: 600 }}>Books</span>
      </span>
    </div>
  )
}
