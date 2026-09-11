import React from "react";
import { motion } from "framer-motion";
import { Network, Layers, BadgeCheck, Linkedin } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

function renderRich(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-[#3C2F2F] font-medium">
        {p}
      </span>
    ) : (
      p
    )
  );
}

export default function Team() {
  const { t } = useTranslation();
  const members = t("team.members");

  return (
    <section id="quem-constroi" className="relative py-24 lg:py-40 bg-[#F4EFEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("team.kicker")}
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
            {t("team.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-6 space-y-5 text-[#3C2F2F]/80">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("team.p1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("team.p2")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("team.p3")}
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#3C2F2F] rounded-xl p-7 lg:p-8"
            >
              <Network size={28} className="text-[#C87A53] mb-4" />
              <h3 className="font-display text-xl font-medium text-[#F4EFEA] mb-3">
                {t("team.nucleusTitle")}
              </h3>
              <p className="text-[#F4EFEA]/70 text-[15px] leading-relaxed">
                {t("team.nucleusText")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#EFE8E0] border border-[#D6CDBF] rounded-xl p-7 lg:p-8"
            >
              <BadgeCheck size={28} className="text-[#C87A53] mb-4" />
              <h3 className="font-display text-xl font-medium text-[#3C2F2F] mb-3">
                {t("team.certifiedTitle")}
              </h3>
              <p className="text-[#3C2F2F]/75 text-[15px] leading-relaxed">
                {renderRich(t("team.certifiedText"))}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#EFE8E0] border border-[#D6CDBF] rounded-xl p-7 lg:p-8"
            >
              <Layers size={28} className="text-[#C87A53] mb-4" />
              <h3 className="font-display text-xl font-medium text-[#3C2F2F] mb-3">
                {t("team.networkTitle")}
              </h3>
              <p className="text-[#3C2F2F]/75 text-[15px] leading-relaxed">
                {t("team.networkText")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-lg italic text-[#C87A53] font-light"
            >
              {t("team.closing")}
            </motion.p>
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl lg:text-3xl font-light text-[#3C2F2F] mb-3 text-balance"
          >
            {t("team.teamTitle")}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#3C2F2F]/70 max-w-2xl text-[15px] leading-relaxed mb-10"
          >
            {t("team.teamIntro")}
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {members.map((person, i) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                className="group flex flex-col bg-[#EFE8E0] border border-[#D6CDBF]/60 rounded-2xl p-7 lg:p-8 hover:border-[#C87A53] hover:-translate-y-1 hover:shadow-[0_14px_34px_-14px_rgba(60,47,47,0.28)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#3C2F2F] ring-2 ring-[#C87A53]/30 flex items-center justify-center text-[#F4EFEA] font-display text-2xl font-medium mb-6 group-hover:ring-[#C87A53] transition-colors">
                  {person.name.charAt(0)}
                </div>
                <h4 className="font-display text-base font-medium text-[#3C2F2F] leading-snug whitespace-nowrap truncate">
                  {person.name}
                </h4>
                <div className="w-8 h-px bg-[#C87A53]/40 my-3" />
                <p className="text-[#C87A53] text-[13px] font-medium leading-snug mb-4">
                  {person.role}
                </p>
                <p className="text-[#3C2F2F]/70 text-sm leading-relaxed flex-grow">
                  {person.bio}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[#3C2F2F] text-sm font-medium hover:text-[#C87A53] transition-colors"
                >
                  <Linkedin size={16} className="text-[#C87A53]" />
                  {t("team.linkedinCta")}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}