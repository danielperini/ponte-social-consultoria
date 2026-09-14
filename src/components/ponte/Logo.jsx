import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/9aea63e71_ChatGPTImage14desetde202617_28_23.png";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="SCAMBIO.IA"
      className={`object-contain h-16 lg:h-20 w-auto ${className}`}
    />
  );
}