import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "WhatsApp AI chatbot for businesses in Sri Lanka by TwoStack";

export default function Image() {
  const languages = ["English", "සිංහල", "தமிழ்", "Singlish", "Thanglish"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090909",
          color: "white",
          padding: "64px 76px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 3,
          }}
        >
          <span>TWOSTACK</span>
          <span style={{ color: "#aaaaaa", fontSize: 21 }}>
            AI SERVICES · SRI LANKA
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -2,
              maxWidth: 1050,
            }}
          >
            WhatsApp AI Chatbot for your business
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {languages.map((language) => (
              <span
                key={language}
                style={{
                  border: "1px solid #666",
                  padding: "8px 18px",
                  fontSize: 24,
                  color: "#dddddd",
                }}
              >
                {language}
              </span>
            ))}
          </div>
          <div style={{ color: "#bdbdbd", fontSize: 25 }}>
            Understands voice notes and product photos.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #555",
            paddingTop: 22,
            justifyContent: "space-between",
            fontSize: 21,
            color: "#aaaaaa",
          }}
        >
          <span>twostack.lk</span>
          <span>COLOMBO, SRI LANKA</span>
        </div>
      </div>
    ),
    size,
  );
}
