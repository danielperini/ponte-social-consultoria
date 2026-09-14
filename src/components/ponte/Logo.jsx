import React from "react";

export default function Logo({ theme = "brand", className = "" }) {
  const isLight = theme === "light";
  const ponteColor = isLight ? "#FFFFFF" : "#2D5A27";
  const socialColor = isLight ? "#FFFFFF" : "#1D3A5F";
  const sageColor = isLight ? "#FFFFFF" : "#8A9D7D";
  const subColor = isLight ? "#FFFFFF" : "#1D3A5F";

  return (
    <svg
      viewBox="0 0 225 112"
      className={`object-contain h-16 lg:h-20 w-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ponte Social Consultoria"
    >
      {/* ponte */}
      <text
        x="0" y="34"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontSize="33" fontWeight="400"
        fill={ponteColor}
      >ponte</text>

      {/* social — below ponte, indented */}
      <text
        x="14" y="66"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontSize="33" fontWeight="400"
        fill={socialColor}
      >social</text>

      {/* extended "l" stem — goes up from social to align with ponte height */}
      <rect
        x="95.5" y="10"
        width="2.6" height="40"
        fill={socialColor}
      />

      {/* dashed line — 5 segments, first 4 sage, last one forest green */}
      <line x1="2"  y1="78" x2="14" y2="78" stroke={sageColor}  strokeWidth="2.5" strokeLinecap="butt" />
      <line x1="18" y1="78" x2="30" y2="78" stroke={sageColor}  strokeWidth="2.5" strokeLinecap="butt" />
      <line x1="34" y1="78" x2="46" y2="78" stroke={sageColor}  strokeWidth="2.5" strokeLinecap="butt" />
      <line x1="50" y1="78" x2="62" y2="78" stroke={sageColor}  strokeWidth="2.5" strokeLinecap="butt" />
      <line x1="66" y1="78" x2="78" y2="78" stroke={ponteColor} strokeWidth="2.5" strokeLinecap="butt" />

      {/* CONSULTORIA */}
      <text
        x="84" y="82"
        fontFamily="'Manrope', system-ui, sans-serif"
        fontSize="11" fontWeight="600"
        letterSpacing="2.2"
        fill={sageColor}
      >CONSULTORIA</text>

      {/* relacionamento e mediação */}
      <text
        x="0" y="104"
        fontFamily="'Manrope', system-ui, sans-serif"
        fontSize="11" fontWeight="400"
        letterSpacing="0.4"
        fill={subColor}
      >relacionamento e mediação</text>
    </svg>
  );
}