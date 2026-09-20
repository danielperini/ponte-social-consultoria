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
    "min-h-[44px] px-3 py-2 rounded-full text-xs font-semibold tracking-[0.08em] uppercase transition-colors flex items-center gap-1.5";

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label={t("a11y.textScaleAria")}
    >
      <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#A8B7A0]">
        <Type size={13} />
        {t("a11y.textScaleLabel")}
      </span>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => choose("normal")}
          aria-pressed={scale === "normal"}
          className={`${baseBtn} ${
            scale === "normal"
              ? "bg-[#A8B7A0] text-[#073050]"
              : "bg-[#0a3a5e] text-[#FFFFFF]/70 hover:text-[#FFFFFF]"
          }`}
        >
          A · {t("a11y.textScaleNormal")}
        </button>
        <button
          type="button"
          onClick={() => choose("large")}
          aria-pressed={scale === "large"}
          className={`${baseBtn} ${
            scale === "large"
              ? "bg-[#A8B7A0] text-[#073050]"
              : "bg-[#0a3a5e] text-[#FFFFFF]/70 hover:text-[#FFFFFF]"
          }`}
        >
          A+ · {t("a11y.textScaleLarge")}
        </button>
      </div>
    </div>
  );
}