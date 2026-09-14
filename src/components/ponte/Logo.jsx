import React from "react";

const LOGO_URL = "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/a4a38e4dc_WhatsAppImage2026-09-11at0938173.jpeg";

export default function Logo({ theme = "brand", className = "" }) {
  const isLight = theme === "light";
  // On light/scrolled bg: mix-blend-multiply removes white bg, keeps true colors.
  // On dark/hero bg: invert + screen makes the logo light while removing the white bg.
  const blend = isLight ? "invert mix-blend-screen" : "mix-blend-multiply";
  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social Consultoria — relacionamento e mediação"
      className={`object-contain h-16 lg:h-20 w-auto ${blend} ${className}`}
    />
  );
}