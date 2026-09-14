import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/1799b9184_ChatGPTImage14desetde202617_27_14.png";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="SCAMBIO.IA"
      className={`object-contain h-12 lg:h-16 w-auto ${className}`}
    />
  );
}