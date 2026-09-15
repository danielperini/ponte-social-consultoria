import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { navigateToSection } from "@/lib/navScroll";

const MENU = [
  { label: "nav.about", target: "a-ponte" },
  { label: "nav.solutions", target: "pilares" },
  { label: "nav.howWeWork", target: "como-atravessamos" },
  { label: "nav.team", target: "quem-constroi" },
  { label: "nav.cases", target: "construcoes" },
  { label: "nav.insights", target: "artigos" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleClick = (target) => {
    setOpen(false);
    navigateToSection(target);
  };

  const dividerClass = scrolled ? "bg-[#A4B29B]" : "bg-[#FFFFFF]/40";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 select-none [-webkit-user-select:none] safe-top ${
        scrolled
          ? "bg-[#073050]/95 backdrop-blur-md border-b border-[#5B8AA8]/30"
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between ${scrolled ? "py-2" : "py-4"}`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center group min-h-[44px]"
          aria-label={t("nav.brand")}
        >
          <Logo theme={scrolled ? "brand" : "light"} />
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {MENU.map((item) => (
            <button
              key={item.target}
              onClick={() => handleClick(item.target)}
              className={`group relative text-sm font-semibold tracking-[0.12em] transition-all duration-300 ease-out cursor-pointer min-h-[44px] flex items-center ${
                scrolled ? "text-[#FFFFFF] hover:text-[#E2EBF2]" : "text-[#FFFFFF] hover:text-[#A4B29B]"
              }`}
            >
              {t(item.label)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#477A63] transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
          <span className={`hidden lg:block w-px h-4 ${dividerClass}`} />
          <LanguageSwitcher scrolled={scrolled} />
          <span className={`hidden lg:block w-px h-4 ${dividerClass}`} />
          <ThemeToggle scrolled={scrolled} />
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher scrolled={scrolled} />
          <ThemeToggle scrolled={scrolled} />
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#FFFFFF]`}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#073050] safe-top overflow-y-auto">
          <nav className="flex flex-col px-6 pt-36 pb-12 gap-1">
            {MENU.map((item) => (
              <button
                key={item.target}
                onClick={() => handleClick(item.target)}
                className="group relative text-left text-sm font-semibold tracking-[0.12em] text-[#E2EBF2] hover:text-[#A4B29B] transition-all duration-300 ease-out py-3 min-h-[44px] border-b border-[#5B8AA8]/15"
              >
                {t(item.label)}
                <span className="absolute -bottom-px left-0 h-px w-0 bg-[#A8B7A0] transition-all duration-300 ease-out group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}