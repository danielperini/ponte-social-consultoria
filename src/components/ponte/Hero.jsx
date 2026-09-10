import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.25], [0, 140]);
  const imgScale = useTransform(scrollYProgress, [0, 0.25], [1.05, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#3C2F2F]">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544025079-1f35eea2418c?fm=jpg&q=80&w=2000&auto=format&fit=crop"
          alt={t("hero.imgAlt")}
          fittingType="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C2F2F]/50 via-[#3C2F2F]/30 to-[#3C2F2F]/70" />
        <div className="absolute inset-0 bg-[#3C2F2F]/20" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[#F4EFEA] text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-light leading-[1.05] tracking-tight max-w-5xl text-balance"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-[#F4EFEA]/85 text-lg lg:text-xl font-light max-w-2xl mt-8 leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap items-center gap-x-10 gap-y-3 mt-12 text-[#F4EFEA]/70 text-sm font-light"
        >
          <span>{t("hero.tag1")}</span>
          <span className="w-8 h-px bg-[#C87A53]" />
          <span>{t("hero.tag2")}</span>
          <span className="w-8 h-px bg-[#C87A53]" />
          <span>{t("hero.tag3")}</span>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#F4EFEA]/60"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">{t("hero.scroll")}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <svg
        className="absolute bottom-0 left-0 right-0 z-10 w-full h-16 lg:h-24"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 80 L0 20 C 480 60, 960 0, 1440 40 L1440 80 Z" fill="#F4EFEA" />
      </svg>
    </section>
  );
}