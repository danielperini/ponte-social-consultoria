import React from "react";
import { motion } from "framer-motion";
import { Building2, Landmark, UsersRound } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const ICONS = [Building2, Landmark, UsersRound];

export default function Segments() {
  const { t } = useTranslation();
  const items = t("segments.items");

  return (
    <section className="py-20 lg:py-24 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("segments.kicker")}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#3C2F2F] leading-[1.15] tracking-tight text-balance">
            {t("segments.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map(({ title, text }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-[#EFE8E0] border border-[#D6CDBF]/60 rounded-xl p-7 lg:p-8"
              >
                <Icon size={26} className="text-[#C87A53] mb-5" />
                <h3 className="font-display text-xl font-medium text-[#3C2F2F] mb-3">{title}</h3>
                <p className="text-[#3C2F2F]/70 text-[15px] leading-relaxed">{text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}