import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/82c7a2f66_WhatsAppImage2026-09-11at0938171.jpeg";

export default function Logo({ theme = "brand", className = "" }) {
  const onDark = theme === "light";

  if (onDark) {
    return (
      <div className={`inline-flex items-center rounded-lg bg-[#F9F9F7] px-2 py-1 ${className}`}>
        <img
          src={LOGO_URL}
          alt="Ponte Social Consultoria"
          className="h-9 lg:h-10 w-auto object-contain"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social Consultoria"
      className={`h-9 lg:h-10 w-auto rounded-md object-contain ${className}`}
      draggable={false}
    />
  );
}