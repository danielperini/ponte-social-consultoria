import React from "react";
import { motion } from "framer-motion";
import { Users, AlertTriangle, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const ACTOR_POS = [
  { x: 80, y: 22, s: 24 },
  { x: 28, y: 18, s: 18 },
  { x: 70, y: 60, s: 15 },
  { x: 24, y: 74, s: 17 },
  { x: 56, y: 44, s: 13 },
];

function ScreenFrame({ title, icon: Icon, children }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#C2D2C0]/70 bg-[#F4EFEA] shadow-lg shadow-[#1F4A2E]/10 flex flex-col h-full">
      <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-[#C2D2C0]/60 bg-[#EAF0E5]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#A67C00]/40" />
          <span className="w-2 h-2 rounded-full bg-[#A67C00]/40" />
          <span className="w-2 h-2 rounded-full bg-[#A67C00]/40" />
        </div>
        <Icon size={13} className="text-[#A67C00] ml-1.5" />
        <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#1F4A2E]/70">
          {title}
        </span>
      </div>
      <div className="p-4 flex-1">{children}</div>
    </div>
  );
}

function StakeholderMapScreen() {
  const { t } = useTranslation();
  const labels = t("societarScreens.actorLabels");
  return (
    <ScreenFrame title={t("societarScreens.titles.map")} icon={Users}>
      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div style={{ backgroundColor: "rgba(31,74,46,0.04)" }} />
          <div style={{ backgroundColor: "rgba(166,124,0,0.12)" }} />
          <div style={{ backgroundColor: "rgba(31,74,46,0.04)" }} />
          <div style={{ backgroundColor: "rgba(166,124,0,0.12)" }} />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1F4A2E]/15" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1F4A2E]/15" />
        {labels.map((label, i) => (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${ACTOR_POS[i].x}%`, top: `${ACTOR_POS[i].y}%` }}
          >
            <div
              className="rounded-full bg-[#1F4A2E]/90 border-2 border-[#A67C00] flex items-center justify-center"
              style={{ width: ACTOR_POS[i].s, height: ACTOR_POS[i].s }}
            >
              <span className="w-1 h-1 rounded-full bg-[#A67C00]" />
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 text-[8px] whitespace-nowrap text-[#1F4A2E]/65 font-medium">
              {label}
            </span>
          </div>
        ))}
        <span className="absolute top-1.5 left-2 text-[8px] uppercase tracking-wider text-[#1F4A2E]/40 font-medium">
          {t("societarScreens.influence")} ↑
        </span>
        <span className="absolute bottom-1.5 right-2 text-[8px] uppercase tracking-wider text-[#1F4A2E]/40 font-medium">
          {t("societarScreens.interest")} →
        </span>
      </div>
    </ScreenFrame>
  );
}

function RiskPanelScreen() {
  const { t } = useTranslation();
  const alerts = t("societarScreens.alertItems");
  const levelColors = ["bg-[#A67C00]", "bg-[#1F4A2E]/60", "bg-[#1F4A2E]/30"];
  const metrics = [
    { l: t("societarScreens.riskTotal"), v: t("societarScreens.riskLevel"), accent: true },
    { l: t("societarScreens.alerts"), v: "07" },
    { l: t("societarScreens.actors"), v: "124" },
  ];
  return (
    <ScreenFrame title={t("societarScreens.titles.risk")} icon={AlertTriangle}>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {metrics.map((m) => (
          <div key={m.l} className="rounded-lg bg-[#1F4A2E]/5 border border-[#C2D2C0]/60 p-2">
            <span className="text-[8px] uppercase tracking-wider text-[#1F4A2E]/45 block">{m.l}</span>
            <p className={`font-display text-base font-medium ${m.accent ? "text-[#A67C00]" : "text-[#1F4A2E]"}`}>
              {m.v}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-8 mb-3">
        {[40, 52, 46, 60, 50, 72, 58, 66].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-[#A67C00]/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="space-y-1.5">
        {alerts.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-md bg-[#EAF0E5] border border-[#C2D2C0]/50 px-2.5 py-1.5"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${levelColors[i]}`} />
            <span className="text-[10px] text-[#1F4A2E]/75 flex-1 truncate">{a.t}</span>
            <span className="text-[8px] uppercase tracking-wider text-[#1F4A2E]/40">{a.lv}</span>
          </div>
        ))}
      </div>
    </ScreenFrame>
  );
}

function TerritoryScreen() {
  const { t } = useTranslation();
  const layers = t("societarScreens.layers");
  const pins = [
    { x: 30, y: 35 },
    { x: 62, y: 28 },
    { x: 48, y: 68 },
  ];
  return (
    <ScreenFrame title={t("societarScreens.titles.territory")} icon={MapPin}>
      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#EAF0E5] border border-[#C2D2C0]/60">
        <svg viewBox="0 0 100 75" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M5 25 Q20 10 40 18 Q60 25 75 12 Q90 6 96 22 L96 60 Q80 70 60 62 Q40 55 25 68 Q10 72 5 55 Z"
            fill="#A67C00"
            fillOpacity="0.12"
            stroke="#A67C00"
            strokeOpacity="0.3"
            strokeWidth="0.5"
          />
          <path
            d="M20 40 Q35 30 50 38 Q62 45 58 58 Q48 66 32 60 Q22 55 20 40 Z"
            fill="#1F4A2E"
            fillOpacity="0.07"
            stroke="#1F4A2E"
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
          <path
            d="M60 20 Q72 16 80 28 Q86 38 78 46 Q68 50 62 40 Q58 30 60 20 Z"
            fill="#1F4A2E"
            fillOpacity="0.07"
            stroke="#1F4A2E"
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
        </svg>
        {pins.map((p, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <MapPin size={16} className="text-[#A67C00] fill-[#F4EFEA]" strokeWidth={2} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {layers.map((l, i) => (
          <span
            key={l}
            className={`text-[9px] px-2 py-0.5 rounded-full border ${
              i < 2
                ? "bg-[#A67C00]/15 border-[#A67C00]/40 text-[#1F4A2E]"
                : "bg-transparent border-[#C2D2C0] text-[#1F4A2E]/50"
            }`}
          >
            {l}
          </span>
        ))}
      </div>
    </ScreenFrame>
  );
}

export default function SocietarScreens() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <StakeholderMapScreen />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <RiskPanelScreen />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TerritoryScreen />
      </motion.div>
    </div>
  );
}