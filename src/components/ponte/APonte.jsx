import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageProvider";
import ConnectingArc from "./ConnectingArc";

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay },
});

export default function APonte() {
  const { t } = useTranslation();
  const axes = t("aponte.axes");
  const why = t("aponte.why");

  return (
    <section id="a-ponte" className="relative py-24 lg:py-32 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.span {...fade(0)} className="text-[#477A63] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
              {t("aponte.kicker")}
            </motion.span>
            <motion.h2 {...fade(0.05)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#073050] leading-[1.08] tracking-tight text-balance">
              {t("aponte.title")}
            </motion.h2>
            <motion.p {...fade(0.1)} className="mt-6 text-[#073050]/75 text-base lg:text-[17px] leading-relaxed">
              {t("aponte.p1")}
            </motion.p>
            <motion.p {...fade(0.15)} className="mt-4 text-[#073050]/75 text-base lg:text-[17px] leading-relaxed">
              {t("aponte.p2")}
            </motion.p>
            <motion.p {...fade(0.2)} className="mt-4 text-[#073050]/75 text-base lg:text-[17px] leading-relaxed">
              {t("aponte.p3")}
            </motion.p>

            <motion.div {...fade(0.25)} className="mt-8 border-l-2 border-[#477A63]/40 pl-5">
              <h3 className="font-display text-xl text-[#073050] mb-3">{t("aponte.whyTitle")}</h3>
              <ul className="space-y-2.5">
                {why.map((w, i) => (
                  <li key={i} className="text-[#073050]/75 text-[15px] leading-relaxed flex gap-3">
                    <span className="text-[#477A63] mt-1 shrink-0">·</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.p {...fade(0.3)} className="mt-7 font-display italic text-[#073050]/85 text-lg font-light leading-snug max-w-2xl">
              {t("aponte.closing")}
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <motion.div {...fade(0.15)} className="mb-10 flex justify-center">
              <ConnectingArc />
            </motion.div>
            <div className="space-y-6">
              {axes.map((a, i) => (
                <motion.div key={i} {...fade(0.2 + i * 0.08)} className="flex items-start gap-5 border-t border-[#073050]/12 pt-5">
                  <span className="font-display text-3xl text-[#477A63] leading-none">{a.num}</span>
                  <div>
                    <h3 className="font-display text-lg text-[#073050] leading-tight">{a.title}</h3>
                    <p className="text-[#073050]/65 text-sm mt-1 leading-relaxed">{a.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}