import { ImageResponse } from "next/og";
import { shieldDataUri } from "@/lib/brand-mark";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  const mark = shieldDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050816",
        }}
      >
        <img src={mark} width={148} height={148} alt="" />
      </div>
    ),
    { ...size }
  );
}
