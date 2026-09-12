import React from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

const OPTIONS = [
  { code: "pt-BR", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

export default function LanguageSwitcher({ scrolled = true, className = "" }) {
  const { lang, setLang, t } = useTranslation();
  const inactiveColor = scrolled ? "text-[#1F4A2E]" : "text-[#F4EFEA]";
  const dividerColor = scrolled ? "text-[#C2D2C0]" : "text-[#F4EFEA]/40";

  return (
    <nav
      aria-label={t("langSelector.ariaLabel")}
      className={`flex items-center gap-1.5 ${className}`}
    >
      {OPTIONS.map((o, i) => {
        const active = lang === o.code;
        return [
          i > 0 && (
            <span key={`sep-${o.code}`} className={`${dividerColor} text-xs select-none`}>
              ·
            </span>
          ),
          <button
            key={o.code}
            type="button"
            lang={o.code}
            aria-current={active ? "true" : undefined}
            aria-label={o.name}
            onClick={() => setLang(o.code)}
            className={`text-xs font-medium tracking-[0.08em] px-0.5 transition-colors ${
              active ? "text-[#A67C00] font-semibold" : `${inactiveColor} hover:text-[#A67C00]`
            }`}
          >
            {o.label}
          </button>,
        ];
      })}
    </nav>
  );
}