import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, MapPin, Users, ShieldAlert, Sprout } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const ICONS = [MapPin, Users, ShieldAlert, Sprout];

export default function Pillars() {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);
  const items = t("pillars.items");

  return (
    <section id="pilares" className="relative py-24 lg:py-40 bg-[#EFE8E0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("pillars.kicker")}
          </span>
          <h2 className="font-display text-3xl lg:text-5xl xl:text-6xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
            {t("pillars.title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {items.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <motion.button
                key={p.title}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-left bg-[#F4EFEA] border border-[#D6CDBF]/60 rounded-lg p-7 flex flex-col h-full transition-shadow hover:shadow-xl hover:shadow-[#C87A53]/10"
              >
                <span className="font-display text-2xl text-[#C87A53]/70 font-light">0{i + 1}</span>
                <div className="my-5 w-12 h-12 rounded-full bg-[#EFE8E0] flex items-center justify-center border border-[#D6CDBF]/60 group-hover:bg-[#C87A53] transition-colors duration-300">
                  <Icon size={22} className="text-[#3C2F2F] group-hover:text-[#F4EFEA] transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg lg:text-xl font-medium text-[#3C2F2F] leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-[#3C2F2F]/65 text-[14px] leading-relaxed mb-5">{p.tagline}</p>
                <span className="mt-auto flex items-center gap-1.5 text-[#C87A53] text-xs font-medium tracking-wide">
                  <Plus size={14} /> {t("pillars.viewDeliverables")}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-[#3C2F2F]/40 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F4EFEA] rounded-xl max-w-2xl w-full p-8 lg:p-12 relative border border-[#D6CDBF]"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 text-[#3C2F2F]/50 hover:text-[#C87A53] transition-colors"
                aria-label={t("pillars.closeLabel")}
              >
                <X size={22} />
              </button>
              <span className="font-display text-3xl text-[#C87A53] font-light">0{items.indexOf(active) + 1}</span>
              <h3 className="font-display text-2xl lg:text-3xl font-medium text-[#3C2F2F] mt-3 mb-2">
                {active.title}
              </h3>
              <p className="text-[#C87A53] text-sm font-medium mb-6">{active.tagline}</p>
              <p className="text-[#3C2F2F]/80 leading-relaxed mb-6">{active.text}</p>
              <div className="border-t border-[#D6CDBF] pt-5">
                <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#3C2F2F]/50 block mb-2">
                  {t("pillars.deliveriesLabel")}
                </span>
                <p className="text-[#3C2F2F]/80 leading-relaxed">{active.deliveries}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}