import { ImageResponse } from "next/og";

export const alt = "Jesse Briska — Software · Automation · Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#11110f",
          color: "#f3f0e8",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2 }}>
          <span>JESSE BRISKA</span>
          <span style={{ color: "#d8ff3e" }}>SOFTWARE / AUTOMATION / SYSTEMS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, lineHeight: 1, fontWeight: 700 }}>
            I build digital
          </div>
          <div style={{ fontSize: 76, lineHeight: 1, fontWeight: 700, color: "#d8ff3e" }}>
            systems that work.
          </div>
          <div style={{ fontSize: 28, marginTop: 16, color: "#c9c5bb" }}>
            Full-stack applications · AI automation · backend systems
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#aaa69c" }}>
          <span>jesse-briska-portfolio.vercel.app</span>
          <span>2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
