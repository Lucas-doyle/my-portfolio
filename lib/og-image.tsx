import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { shieldDataUri } from "@/lib/brand-mark";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageAlt = `${site.role} — ${site.location}`;
export const ogImageContentType = "image/png";

const stack = ["Python", "TypeScript", "React", "Next.js", "Generative AI"];

export function createOgImage() {
  const mark = shieldDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#050816",
          color: "#f8fafc",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: "rgba(139, 92, 246, 0.28)",
            filter: "blur(8px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: 120,
            width: 360,
            height: 360,
            borderRadius: 360,
            background: "rgba(16, 185, 129, 0.18)",
            filter: "blur(8px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "72px 80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <img src={mark} width={96} height={96} alt="" />
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#c4b5fd",
              }}
            >
              Portfolio
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.1,
                maxWidth: 980,
              }}
            >
              {site.role}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#8b94a7",
              }}
            >
              {site.location} · {site.availability}
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontSize: 22,
                  color: "#e2e8f0",
                  background: "rgba(11, 17, 32, 0.8)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
