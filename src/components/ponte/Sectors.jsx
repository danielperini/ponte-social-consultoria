import React from "react";
import { motion } from "framer-motion";
import { Radio, Factory, Mountain, TreePine } from "lucide-react";

const SECTORS = [
  { Icon: Radio, label: "Telecomunicações" },
  { Icon: Factory, label: "Siderurgia" },
  { Icon: Mountain, label: "Mineração" },
  { Icon: TreePine, label: "Bioflorestas" },
];

export default function Sectors() {
  return (
    <section className="py-14 lg:py-16 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-8 text-center">
          Setores atendidos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-16 gap-y-6">
          {SECTORS.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 text-[#3C2F2F]"
            >
              <Icon size={22} className="text-[#C87A53]" />
              <span className="font-display text-lg lg:text-xl font-medium tracking-tight">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}