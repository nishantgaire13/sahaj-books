export default function Logo({ size = 40, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  const isLight = variant === "light"
  const wordSahaj = isLight ? "white" : "#1e3a1e"

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="28" fill={isLight ? "#2a4e2a" : "#1e3a1e"}/>
        <polygon points="28,36 92,36 128,72 128,138 28,138" fill="#0f2010" opacity="0.5"/>
        <polygon points="22,28 88,28 126,66 126,134 22,134" fill="white"/>
        <polygon points="88,28 126,28 126,66" fill="#6abf47"/>
        <circle cx="34" cy="44" r="7" fill="#ff5f57"/>
        <circle cx="50" cy="44" r="7" fill="#ffbd2e"/>
        <circle cx="66" cy="44" r="7" fill="#28c840"/>
        <line x1="28" y1="70" x2="110" y2="70" stroke="#1e3a1e" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <line x1="28" y1="88" x2="110" y2="88" stroke="#1e3a1e" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <line x1="28" y1="106" x2="86" y2="106" stroke="#6abf47" strokeWidth="3.5" strokeLinecap="round"/>
        {size >= 60 && (
          <text x="108" y="130" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="#6abf47" opacity="0.9" textAnchor="middle">S</text>
        )}
      </svg>
      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: size * 0.44, letterSpacing: "-0.3px", lineHeight: 1 }}>
        <span style={{ color: wordSahaj, fontWeight: 600 }}>Sahaj</span>
        <span style={{ color: "#6abf47", fontWeight: 600 }}>Books</span>
      </span>
    </div>
  )
}