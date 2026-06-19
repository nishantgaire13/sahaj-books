import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div style={{ display: "flex", width: 180, height: 180 }}>
      <svg width="180" height="180" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="30" fill="#1a3318" />
        <rect x="18" y="18" width="124" height="24" fill="white" />
        <rect x="106" y="42" width="36" height="28" fill="white" />
        <polygon points="106,70 142,70 54,90 18,90" fill="#6abf47" />
        <rect x="18" y="90" width="36" height="28" fill="white" />
        <rect x="18" y="118" width="124" height="24" fill="white" />
      </svg>
    </div>,
    { ...size }
  )
}
