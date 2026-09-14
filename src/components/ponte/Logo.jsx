import React from "react";

export default function Logo({ theme = "brand", className = "" }) {
  const isLight = theme === "light";
  const ponteColor = isLight ? "#FFFFFF" : "#477A63";
  const socialColor = isLight ? "#FFFFFF" : "#477A63";
  const dashColor = isLight ? "#FFFFFF" : "#477A63";

  return (
    <svg
      viewBox="0 0 200 90"
      className={`object-contain h-16 lg:h-20 w-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ponte Social"
    >
      <text
        x="0"
        y="40"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontSize="40"
        fontWeight="400"
        fill={ponteColor}
      >
        ponte
      </text>
      <line
        x1="2"
        y1="54"
        x2="50"
        y2="54"
        stroke={dashColor}
        strokeWidth="1.5"
        strokeDasharray="2.5 2.5"
        opacity="0.7"
      />
      <text
        x="56"
        y="58"
        fontFamily="'Manrope', system-ui, sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="3"
        fill={socialColor}
      >
        SOCIAL
      </text>
    </svg>
  );
}