import React from "react";

const LOGO_URL = "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/a4a38e4dc_WhatsAppImage2026-09-11at0938173.jpeg";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social Consultoria"
      className={`object-contain h-16 lg:h-20 w-auto ${className}`}
    />
  );
}