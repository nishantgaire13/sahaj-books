export default function Logo({ size = 40, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  const isLight = variant === "light"
  const wordSahaj = isLight ? "white" : "#1a3318"
  const gradId = `sahaj-s-grad-${variant}`
  const maskId = `sahaj-s-weave-${variant}`

  // Interlocking ribbon S — top loop weaves under the bottom loop at the centre.
  const underPath = "M74 34 C74 22 56 22 46 28 C36 34 36 45 52 51"
  const overPath = "M26 66 C26 78 44 78 54 72 C64 66 64 55 48 49"

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradId} x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
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
          {/* Cuts a transparent gap in the under-strand where the over-strand crosses */}
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
            <rect width="100" height="100" fill="white" />
            <path d={overPath} stroke="black" strokeWidth="22" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </mask>
        </defs>

        {/* Under-strand (top loop) — notched where it passes beneath */}
        <path d={underPath} stroke={`url(#${gradId})`} strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" mask={`url(#${maskId})`} />
        {/* Over-strand (bottom loop) — sits on top */}
        <path d={overPath} stroke={`url(#${gradId})`} strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
