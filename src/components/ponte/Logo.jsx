import React from "react";

const BRAND = {
  ponte: "#2F5938",
  social: "#1D3557",
  consultoria: "#8F9E8F",
  dashes: ["#A8B6A8", "#88A288", "#688E68", "#487450", "#2F5938"],
};

const LIGHT = {
  ponte: "#F4EFEA",
  social: "#F4EFEA",
  consultoria: "rgba(244,239,234,0.55)",
  dashes: [
    "rgba(200,122,83,0.35)",
    "rgba(200,122,83,0.5)",
    "rgba(200,122,83,0.65)",
    "rgba(200,122,83,0.8)",
    "rgba(200,122,83,1)",
  ],
};

export default function Logo({ theme = "brand", className = "" }) {
  const c = theme === "brand" ? BRAND : LIGHT;

  return (
    <div className={`inline-flex flex-col leading-none select-none ${className}`} aria-label="Ponte Social Consultoria">
      <span
        className="font-display text-[18px] leading-[0.95] tracking-tight"
        style={{ color: c.ponte }}
      >
        ponte
      </span>
      <span
        className="font-display text-[18px] leading-[0.95] tracking-tight"
        style={{ color: c.social }}
      >
        social
      </span>
      <div className="flex items-center justify-end gap-[3px] mt-[5px]">
        {c.dashes.map((color, i) => (
          <span
            key={i}
            className="h-px w-[8px] rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
        <span
          className="font-body text-[8px] font-medium uppercase ml-1.5"
          style={{ color: c.consultoria, letterSpacing: "0.3em" }}
        >
          Consultoria
        </span>
      </div>
    </div>
  );
}