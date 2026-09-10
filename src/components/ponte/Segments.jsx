import React from "react";
import { motion } from "framer-motion";
import { Building2, Landmark, UsersRound } from "lucide-react";

const SEGMENTS = [
  {
    Icon: Building2,
    title: "Empresas",
    text: "Mineração, siderurgia, telecomunicações, bioflorestas e energia que precisam compreender territórios e stakeholders antes de decidir.",
  },
  {
    Icon: Landmark,
    title: "Governo e poder público",
    text: "Órgãos e prefeituras que precisam de leitura social do território para políticas, programas e intervenções mais eficazes.",
  },
  {
    Icon: UsersRound,
    title: "Organizações e institutos",
    text: "Institutos, fundações e ONGs que precisam estruturar, avaliar e fortalecer projetos sociais e socioambientais.",
  },
];

export default function Segments() {
  return (
    <section className="py-20 lg:py-24 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            Quem atendemos
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#3C2F2F] leading-[1.15] tracking-tight text-balance">
            A mesma leitura social do território, a serviço de decisões diferentes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SEGMENTS.map(({ Icon, title, text }, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}