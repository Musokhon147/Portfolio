import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Portfolio — Full-Spectrum Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050816 0%, #0A1020 40%, #0F1729 100%)",
          position: "relative",
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.4) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            marginBottom: 16,
          }}
        >
          <span style={{ color: "#F1F5F9" }}>Port</span>
          <span style={{ color: "#2563eb" }}>folio</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginBottom: 32,
          }}
        >
          Full-Spectrum Developer
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["React", "Next.js", "Unity", "VR", "Python"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                border: "1px solid rgba(37,99,235,0.3)",
                background: "rgba(37,99,235,0.1)",
                color: "#3b82f6",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 80,
            background: "linear-gradient(to top, rgba(5,8,22,0.8), transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
