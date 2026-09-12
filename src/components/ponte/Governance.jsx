import React from "react";
import { motion } from "framer-motion";
import { Lock, Scale, ShieldCheck, FileCheck2 } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const ICONS = [Lock, Scale, ShieldCheck, FileCheck2];

export default function Governance() {
  const { t } = useTranslation();
  const items = t("governance.items");

  return (
    <section className="py-20 lg:py-24 bg-[#3C2F2F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <span className="text-[#A67C00] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("governance.kicker")}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#F4EFEA] leading-[1.15] tracking-tight text-balance">
            {t("governance.title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {items.map(({ title, text }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.1 }}
                className="bg-[#F4EFEA]/5 border border-[#F4EFEA]/10 rounded-xl p-6 lg:p-7"
              >
                <Icon size={24} className="text-[#A67C00] mb-4" />
                <h3 className="font-display text-lg font-medium text-[#F4EFEA] mb-2">{title}</h3>
                <p className="text-[#F4EFEA]/65 text-[14px] leading-relaxed">{text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}