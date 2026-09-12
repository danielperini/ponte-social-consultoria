import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { useTranslation } from "@/i18n/LanguageProvider";

const PARTNERS = [
  {
    name: "Instituto Frazoli",
    sub: "para um mundo mais justo",
    url: "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/cb2d4f9ed_WhatsAppImage2026-09-11at130739.jpeg",
    bg: "#FFFFFF",
  },
  {
    name: "ima",
    sub: "Instituto e Câmara de Mediação Aplicada",
    url: "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/46c736304_WhatsAppImage2026-09-11at130726.jpeg",
    bg: "#0B0B0B",
  },
  {
    name: "Perini",
    sub: "Projetos Culturais e Sociais",
    url: "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/198664dd6_perini_transparente2.png",
    bg: "#0B0B0B",
  },
];

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="rede-parceira" className="py-24 lg:py-32 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <motion.span {...fade(0)} className="text-[#A67C00] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("partners.kicker")}
          </motion.span>
          <motion.h2 {...fade(0.05)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F4A2E] leading-[1.08] tracking-tight text-balance">
            {t("partners.title")}
          </motion.h2>
          <motion.p {...fade(0.1)} className="mt-5 text-[#1F4A2E]/70 text-base lg:text-[17px] leading-relaxed">
            {t("partners.intro")}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PARTNERS.map((p, i) => (
            <motion.div key={p.name} {...fade(i * 0.08)} className="flex flex-col">
              <div
                className="rounded-2xl border border-[#C2D2C0]/70 overflow-hidden shadow-[0_10px_30px_-18px_rgba(31,74,46,0.35)]"
                style={{ background: p.bg }}
              >
                <div className="aspect-[3/2] flex items-center justify-center p-7 lg:p-8">
                  <Image src={p.url} alt={p.name} fittingType="fit" className="w-full h-full" />
                </div>
              </div>
              <div className="mt-5 px-1">
                <h3 className="font-display text-lg text-[#1F4A2E] leading-tight">{p.name}</h3>
                <p className="text-[#1F4A2E]/60 text-sm mt-1 leading-relaxed">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}