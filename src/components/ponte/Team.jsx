import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageProvider";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ConsultantCard from "./ConsultantCard";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function Team() {
  const { t } = useTranslation();
  // Randomize the order on every load so the carousel starts on a different consultant.
  const consultants = useMemo(() => shuffle(t("team.consultants")), [t]);
  const [api, setApi] = useState(null);

  // Auto-rotate every 10 seconds.
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 10000);
    return () => clearInterval(id);
  }, [api]);
  const labels = {
    educationTitle: t("team.educationTitle"),
    certsTitle: t("team.certsTitle"),
    complementaryTitle: t("team.complementaryTitle"),
    seeFull: t("team.seeFull"),
    hideFull: t("team.hideFull"),
    ongoing: t("team.ongoingLabel"),
    linkedinCta: t("team.linkedinCta"),
    profileNote: t("team.profileNote"),
  };

  return (
    <section id="quem-constroi" className="py-24 lg:py-32 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.span {...fade(0)} className="text-[#A67C00] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
              {t("team.kicker")}
            </motion.span>
            <motion.h2 {...fade(0.05)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#073050] leading-[1.08] tracking-tight text-balance">
              {t("team.title")}
            </motion.h2>
            <motion.p {...fade(0.1)} className="mt-6 text-[#073050]/75 text-base lg:text-[17px] leading-relaxed">
              {t("team.p1")}
            </motion.p>

            <motion.div {...fade(0.15)} className="mt-8 border-l-2 border-[#A67C00]/40 pl-5">
              <h3 className="font-display text-xl text-[#073050] mb-2">{t("team.experienceTitle")}</h3>
              <p className="text-[#073050]/70 text-[15px] leading-relaxed">{t("team.experienceText")}</p>
            </motion.div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <motion.div {...fade(0.2)} className="border-t border-[#073050]/12 pt-4">
                <h4 className="font-display text-lg text-[#073050]">{t("team.nucleusTitle")}</h4>
                <p className="mt-1.5 text-[#073050]/65 text-sm leading-relaxed">{t("team.nucleusText")}</p>
              </motion.div>
              <motion.div {...fade(0.25)} className="border-t border-[#073050]/12 pt-4">
                <h4 className="font-display text-lg text-[#073050]">{t("team.networkTitle")}</h4>
                <p className="mt-1.5 text-[#073050]/65 text-sm leading-relaxed">{t("team.networkText")}</p>
              </motion.div>
            </div>

            <motion.p {...fade(0.3)} className="mt-8 font-display italic text-[#A67C00] text-xl font-light">
              {t("team.closing")}
            </motion.p>
          </div>

          <motion.div {...fade(0.15)} className="lg:col-span-5">
            <Carousel opts={{ loop: true, align: "start" }} setApi={setApi}>
              <CarouselContent>
                {consultants.map((c, i) => (
                  <CarouselItem key={i}>
                    <ConsultantCard p={c} labels={labels} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-3 mt-5">
                <CarouselPrevious className="static left-auto top-auto translate-y-0 h-9 w-9" />
                <CarouselNext className="static left-auto top-auto translate-y-0 h-9 w-9" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}