import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/6a68fc317_fundotranspartne1.png";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social"
      className={`object-contain h-20 lg:h-28 w-auto ${className}`}
    />
  );
}