import { ImageResponse } from "next/og";
import { contact } from "@/data/contact";

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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #9D6F59 0%, #45362F 55%, #181614 100%)",
          color: "#FAF8F6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 9999,
            border: "2px solid #C89B82",
            fontSize: 40,
            marginBottom: 28,
          }}
        >
          {contact.monogram}
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 600 }}>{contact.brand}</div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            marginTop: 12,
            color: "#C89B82",
            textTransform: "uppercase",
          }}
        >
          {contact.brandSuffix}
        </div>
      </div>
    ),
    { ...size }
  );
}
