import { ImageResponse } from "next/og"
import { MARK_W, MARK_H, MARK_PATH } from "@/components/logo-mark"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Isometric interlocking S on the deep-green brand tile.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 180,
          height: 180,
          background: "#1a3318",
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="116" height="116" viewBox={`0 0 ${MARK_W} ${MARK_H}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="s" x1="0" y1="0" x2={MARK_W} y2={MARK_H} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#a8e070" />
              <stop offset="1" stopColor="#6abf47" />
            </linearGradient>
          </defs>
          <path d={MARK_PATH} fill="url(#s)" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
