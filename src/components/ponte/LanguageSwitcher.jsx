import React from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

const OPTIONS = [
  { code: "pt-BR", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

export default function LanguageSwitcher({ scrolled = true, className = "" }) {
  const { lang, setLang, t } = useTranslation();
  const inactiveColor = scrolled ? "text-[#3C2F2F]" : "text-[#F4EFEA]";
  const dividerColor = scrolled ? "text-[#D6CDBF]" : "text-[#F4EFEA]/40";

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
              active ? "text-[#BC5A3A] font-semibold" : `${inactiveColor} hover:text-[#BC5A3A]`
            }`}
          >
            {o.label}
          </button>,
        ];
      })}
    </nav>
  );
}