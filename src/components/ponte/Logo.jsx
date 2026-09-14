import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/cf2c3c7ce_WhatsAppImage2026-09-14at1551151.png";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social"
      className={`object-contain h-20 lg:h-28 w-auto ${className}`}
    />
  );
}