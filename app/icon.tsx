import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Interlocking ribbon S on the deep-green brand tile.
export default function Icon() {
  const underPath = "M74 34 C74 22 56 22 46 28 C36 34 36 45 52 51"
  const overPath = "M26 66 C26 78 44 78 54 72 C64 66 64 55 48 49"

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: 180, height: 180 }}>
        <svg width="180" height="180" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="s" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#a8e070" />
              <stop offset="1" stopColor="#6abf47" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="24" fill="#1a3318" />
          {/* Under-strand */}
          <path d={underPath} stroke="url(#s)" strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Gap that makes the over-strand read as woven over the under-strand */}
          <path d={overPath} stroke="#1a3318" strokeWidth="22" fill="none" strokeLinecap="round" />
          {/* Over-strand */}
          <path d={overPath} stroke="url(#s)" strokeWidth="13" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
