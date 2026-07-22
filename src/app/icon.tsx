import { ImageResponse } from "next/og";
import { contact } from "@/data/contact";

export const size = { width: 64, height: 64 };
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
          background: "#181614",
          color: "#C89B82",
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        {contact.monogram}
      </div>
    ),
    { ...size }
  );
}
