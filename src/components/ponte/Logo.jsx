import React from "react";

export default function Logo({ theme = "brand", className = "" }) {
  const isLight = theme === "light";
  const ponteColor = isLight ? "#FFFFFF" : "#477A63";
  const socialColor = isLight ? "#FFFFFF" : "#073050";
  const dashColor = isLight ? "#FFFFFF" : "#477A63";

  return (
    <svg
      viewBox="0 0 220 100"
      className={`object-contain h-16 lg:h-20 w-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ponte Social"
    >
      <text
        x="0"
        y="42"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontSize="38"
        fontWeight="400"
        fontStyle="italic"
        fill={ponteColor}
        letterSpacing="0.5"
      >
        ponte
      </text>
      <line
        x1="2"
        y1="56"
        x2="62"
        y2="56"
        stroke={dashColor}
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.7"
      />
      <text
        x="68"
        y="60"
        fontFamily="'Manrope', system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="3.5"
        fill={socialColor}
      >
        SOCIAL
      </text>
    </svg>
  );
}