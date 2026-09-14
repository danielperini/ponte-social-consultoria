import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

const MENU = [
  { label: "nav.about", target: "a-ponte" },
  { label: "nav.solutions", target: "pilares" },
  { label: "nav.howWeWork", target: "como-atravessamos" },
  { label: "nav.team", target: "quem-constroi" },
  { label: "nav.cases", target: "construcoes" },
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

  const dividerClass = scrolled ? "bg-[#A4B29B]" : "bg-[#FFFFFF]/40";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-[#2A5A7A] via-[#477A63] to-[#BC5A3A]/80 backdrop-blur-md border-b border-[#5B8AA8]/40 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center group" aria-label={t("nav.brand")}>
          <Logo theme={scrolled ? "brand" : "light"} />
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {MENU.map((item) => (
            <button
              key={item.target}
              onClick={() => handleClick(item.target)}
              className={`group relative text-sm font-semibold tracking-[0.12em] transition-all duration-300 ease-out cursor-pointer ${
                scrolled ? "text-[#FFFFFF] hover:text-[#E2EBF2]" : "text-[#FFFFFF] hover:text-[#A4B29B]"
              }`}
            >
              {t(item.label)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#477A63] transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
          <span className={`hidden lg:block w-px h-4 ${dividerClass}`} />
          <LanguageSwitcher scrolled={scrolled} />
        </nav>

        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            onClick={() => setOpen(!open)}
            className={`p-1 text-[#FFFFFF]`}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-gradient-to-r from-[#2A5A7A] via-[#477A63] to-[#BC5A3A]/80 border-t border-[#5B8AA8]/40 mt-3">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {MENU.map((item) => (
              <button
                key={item.target}
                onClick={() => handleClick(item.target)}
                className="group relative text-left text-sm font-semibold tracking-[0.12em] text-[#073050]/80 hover:text-[#1B562A] transition-all duration-300 ease-out py-1"
              >
                {t(item.label)}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#477A63] transition-all duration-300 ease-out group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}