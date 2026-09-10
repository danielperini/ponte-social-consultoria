import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const MENU = [
  { label: "nav.about", target: "a-ponte" },
  { label: "nav.solutions", target: "pilares" },
  { label: "nav.howWeWork", target: "como-atravessamos" },
  { label: "nav.team", target: "quem-constroi" },
  { label: "nav.cases", target: "construcoes" },
  { label: "nav.insights", target: "artigos" },
];

function scrollTo(target) {
  const el = document.getElementById(target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (target) => {
    setOpen(false);
    scrollTo(target);
  };

  const dividerClass = scrolled ? "bg-[#D6CDBF]" : "bg-[#F4EFEA]/40";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F4EFEA]/90 backdrop-blur-md border-b border-[#D6CDBF]/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="shrink-0">
            <path d="M6 24 Q17 4 28 24" stroke="#C87A53" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="17" cy="9.5" r="2.8" fill="#3C2F2F" />
            <line x1="6" y1="24" x2="28" y2="24" stroke="#3C2F2F" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span
            className={`font-display text-xl font-medium tracking-tight transition-colors duration-500 ${
              scrolled ? "text-[#3C2F2F]" : "text-[#F4EFEA]"
            }`}
          >
            {t("nav.brand")}
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {MENU.map((item) => (
            <button
              key={item.target}
              onClick={() => handleClick(item.target)}
              className={`group relative text-sm font-medium tracking-[0.12em] transition-all duration-300 ease-out cursor-pointer ${
                scrolled
                  ? "text-[#3C2F2F] hover:text-[#C87A53]"
                  : "text-[#F4EFEA] hover:text-[#C87A53]"
              }`}
            >
              {t(item.label)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C87A53] transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
          <span className={`hidden lg:block w-px h-4 ${dividerClass}`} />
          <LanguageSwitcher scrolled={scrolled} />
        </nav>

        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            onClick={() => setOpen(!open)}
            className={`p-1 ${scrolled ? "text-[#3C2F2F]" : "text-[#F4EFEA]"}`}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F4EFEA] border-t border-[#D6CDBF]/60 mt-3">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {MENU.map((item) => (
              <button
                key={item.target}
                onClick={() => handleClick(item.target)}
                className="group relative text-left text-sm font-medium tracking-[0.12em] text-[#3C2F2F]/80 hover:text-[#C87A53] transition-all duration-300 ease-out py-1"
              >
                {t(item.label)}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C87A53] transition-all duration-300 ease-out group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}