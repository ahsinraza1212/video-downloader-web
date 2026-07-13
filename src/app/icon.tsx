import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f97316",
          color: "#0a0a0c",
          fontSize: 24,
          fontWeight: 800,
          borderRadius: 7,
        }}
      >
        ↓
      </div>
    ),
    size,
  );
}
