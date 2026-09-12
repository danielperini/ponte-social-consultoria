import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const HERO_IMG =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/5410ea027_WhatsAppImage2026-09-11at092845.jpeg";

function scrollTo(target) {
  const el = document.getElementById(target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#3C2F2F]">
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={mounted ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img src={HERO_IMG} alt={t("hero.imgAlt")} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C2F2F]/75 via-[#3C2F2F]/55 to-[#3C2F2F]/88" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-28">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-3 text-[#A67C00] text-xs font-medium tracking-[0.2em] uppercase mb-6"
          >
            <span className="h-px w-8 bg-[#A67C00]" />
            {t("hero.tag1")} · {t("hero.tag2")} · {t("hero.tag3")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4EFEA] leading-[1.05] tracking-tight text-balance"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-6 text-[#F4EFEA]/80 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            {t("hero.description")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.9 }}
            className="mt-4 font-display italic text-[#A67C00]/90 text-lg font-light leading-snug max-w-2xl"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("construcoes")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#A67C00] px-7 py-3 text-sm font-medium tracking-[0.12em] uppercase text-[#F4EFEA] transition-all hover:bg-[#8A6300]"
            >
              {t("hero.cta")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo("a-ponte")}
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F4EFEA]/60 hover:text-[#A67C00] transition-colors"
      >
        <span className="text-[10px] font-medium tracking-[0.22em] uppercase">{t("hero.scroll")}</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}