import React from "react";

export default function Logo({ theme = "brand", className = "" }) {
  const isLight = theme === "light";
  const ponteColor = isLight ? "#FFFFFF" : "#2e5e33";
  const socialColor = isLight ? "#FFFFFF" : "#183c5d";
  const consultoriaColor = isLight ? "#FFFFFF" : "#86a482";
  const subColor = isLight ? "#FFFFFF" : "#183c5d";
  const dashColor = isLight ? "#FFFFFF" : "#2e5e33";
  const dashLightColor = isLight ? "#FFFFFF" : "#a2b89f";

  return (
    <svg
      viewBox="0 0 260 110"
      className={`object-contain h-16 lg:h-20 w-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ponte Social"
    >
      {/* ponte social */}
      <text
        x="0" y="38"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontSize="34" fontWeight="400"
        fill={ponteColor}
      >
        ponte
      </text>
      <text
        x="92" y="38"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontSize="34" fontWeight="400"
        fill={socialColor}
      >
        social
      </text>

      {/* dashed line */}
      <g>
        <line x1="2" y1="54" x2="12" y2="54" stroke={dashColor} strokeWidth="2.5" />
        <line x1="17" y1="54" x2="27" y2="54" stroke={dashLightColor} strokeWidth="2.5" />
        <line x1="32" y1="54" x2="42" y2="54" stroke={dashColor} strokeWidth="2.5" />
        <line x1="47" y1="54" x2="57" y2="54" stroke={dashLightColor} strokeWidth="2.5" />
        <line x1="62" y1="54" x2="72" y2="54" stroke={dashColor} strokeWidth="2.5" />
      </g>

      {/* CONSULTORIA */}
      <text
        x="80" y="58"
        fontFamily="'Manrope', system-ui, sans-serif"
        fontSize="11" fontWeight="700"
        letterSpacing="2.5"
        fill={consultoriaColor}
      >
        CONSULTORIA
      </text>

      {/* relacionamento e mediação */}
      <text
        x="0" y="92"
        fontFamily="'Manrope', system-ui, sans-serif"
        fontSize="11" fontWeight="400"
        letterSpacing="0.5"
        fill={subColor}
      >
        relacionamento e mediação
      </text>
    </svg>
  );
}