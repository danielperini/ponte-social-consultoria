import React, { useState, useEffect } from "react";
import { Type } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const STORAGE_KEY = "ponte_text_scale";
const LARGE_CLASS = "text-scale-lg";

function applyScale(scale) {
  const html = document.documentElement;
  if (scale === "large") html.classList.add(LARGE_CLASS);
  else html.classList.remove(LARGE_CLASS);
}

export default function TextScaleToggle() {
  const { t } = useTranslation();
  const [scale, setScale] = useState("normal");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "large" || stored === "normal") {
      setScale(stored);
      applyScale(stored);
    }
  }, []);

  const choose = (value) => {
    setScale(value);
    applyScale(value);
    localStorage.setItem(STORAGE_KEY, value);
  };

  const baseBtn =
    "h-8 w-8 rounded-full text-xs font-semibold leading-none transition-colors flex items-center justify-center";

  return (
    <div
      className="flex items-center gap-1.5"
      role="group"
      aria-label={t("a11y.textScaleAria")}
    >
      <Type size={14} className="text-[#A8B7A0] shrink-0" aria-hidden />
      <button
        type="button"
        onClick={() => choose("normal")}
        aria-label={t("a11y.textScaleNormal")}
        aria-pressed={scale === "normal"}
        className={`${baseBtn} ${
          scale === "normal"
            ? "bg-[#A8B7A0] text-[#073050]"
            : "bg-[#0a3a5e] text-[#FFFFFF]/70 hover:text-[#FFFFFF]"
        }`}
      >
        A
      </button>
      <button
        type="button"
        onClick={() => choose("large")}
        aria-label={t("a11y.textScaleLarge")}
        aria-pressed={scale === "large"}
        className={`${baseBtn} ${
          scale === "large"
            ? "bg-[#A8B7A0] text-[#073050]"
            : "bg-[#0a3a5e] text-[#FFFFFF]/70 hover:text-[#FFFFFF]"
        }`}
      >
        A+
      </button>
    </div>
  );
}