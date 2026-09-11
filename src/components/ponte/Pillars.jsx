import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function Pillars() {
  const { t } = useTranslation();
  const items = t("pillars.items");
  const [open, setOpen] = useState(null);

  return (
    <section id="pilares" className="py-24 lg:py-32 bg-[#EFE8E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <motion.span {...fade(0)} className="text-[#BC5A3A] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("pillars.kicker")}
          </motion.span>
          <motion.h2 {...fade(0.05)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.08] tracking-tight text-balance">
            {t("pillars.title")}
          </motion.h2>
          <motion.p {...fade(0.1)} className="mt-5 text-[#3C2F2F]/70 text-base lg:text-[17px] leading-relaxed">
            {t("pillars.intro")}
          </motion.p>
        </div>

        <div className="border-y border-[#3C2F2F]/12">
          {items.map((item, i) => (
            <motion.div key={i} {...fade(i * 0.05)} className="grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-b border-[#3C2F2F]/12 group">
              <div className="lg:col-span-2 font-display text-2xl text-[#BC5A3A] leading-none">{item.num}</div>
              <div className="lg:col-span-7">
                <h3 className="font-display text-xl lg:text-2xl text-[#3C2F2F] leading-tight">{item.title}</h3>
                <p className="text-[#BC5A3A] text-sm font-medium tracking-wide mt-1.5">{item.tagline}</p>
                <p className="mt-3 text-[#3C2F2F]/70 text-[15px] leading-relaxed max-w-2xl">{item.text}</p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end items-start">
                <button
                  onClick={() => setOpen(item)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3C2F2F] hover:text-[#BC5A3A] transition-colors group-hover:text-[#BC5A3A]"
                >
                  <Plus size={15} />
                  {t("pillars.viewDeliverables")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#3C2F2F]/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F4EFEA] rounded-2xl max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 text-[#3C2F2F]/50 hover:text-[#BC5A3A]">
                <X size={20} />
              </button>
              <span className="font-display text-2xl text-[#BC5A3A]">{open.num}</span>
              <h3 className="font-display text-2xl text-[#3C2F2F] mt-2 leading-tight">{open.title}</h3>
              <p className="text-[#BC5A3A] text-sm font-medium tracking-wide mt-1">{open.tagline}</p>
              <div className="mt-5 border-t border-[#3C2F2F]/12 pt-4">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#3C2F2F]/50 mb-2">
                  {t("pillars.deliveriesLabel")}
                </p>
                <p className="text-[#3C2F2F]/75 text-[15px] leading-relaxed">{open.deliveries}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}