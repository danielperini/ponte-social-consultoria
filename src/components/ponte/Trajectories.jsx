import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

const INSTITUTIONS = [
  { name: "Perini Projetos", descKey: "trajectory.periniProjetos", logo: null },
  { name: "Fiat Ultra Artes", descKey: "trajectory.fiatUltraArtes", logo: null },
  { name: "Fábrica do Futuro", descKey: "trajectory.fabricaFuturo", logo: "fabricadofuturo.org.br" },
  { name: "Viaduto das Artes", descKey: "trajectory.meioAdultoArtes", logo: "viadutodasartes.org.br" },
  { name: "Centro de Referência da Juventude", descKey: "trajectory.crj", logo: null },
  { name: "Fundação Municipal de Cultura", descKey: "trajectory.fundacaoMunicipalCultura", logo: "fmc.pbh.gov.br" },
  { name: "Secretaria de Educação de MG", descKey: "trajectory.secretariaEducacaoMG", logo: "educacao.mg.gov.br" },
  { name: "Secretaria de Direitos Humanos de MG", descKey: "trajectory.secretariaDireitosHumanos", logo: null },
  { name: "Fundação ArcelorMittal", descKey: "trajectory.fundacaoArcelor", logo: "arcelormittal.com" },
  { name: "Fundação Renova", descKey: "trajectory.fundacaoRenova", logo: "fundacaorenova.org" },
  { name: "LafargeHolcim", descKey: "trajectory.lafargeHolcim", logo: "holcim.com" },
  { name: "Vivo", descKey: "trajectory.vivo", logo: "vivo.com.br" },
  { name: "Claro Abreu Projetos", descKey: "trajectory.claroAbreu", logo: null },
  { name: "Angra Partners", descKey: "trajectory.angra", logo: "angrapartners.com" },
  { name: "Beija-Flor Tecnologias Sociais", descKey: "trajectory.beijaFlor", logo: "beijaflor.org.br" },
  { name: "Vale", descKey: "trajectory.vale", logo: "vale.com" },
  { name: "Votorantim", descKey: "trajectory.votorantim", logo: "votorantim.com.br" },
  { name: "Grupo EBX", descKey: "trajectory.ebx", logo: null },
  { name: "ETCO", descKey: "trajectory.etco", logo: "etco.org.br" },
  { name: "H&P", descKey: "trajectory.hp", logo: "hep.solutions" },
  { name: "UFMG", descKey: "trajectory.ufmg", logo: "ufmg.br" },
  { name: "C Caps", descKey: "trajectory.ccaps", logo: null },
  { name: "CeCaps", descKey: "trajectory.cecaps", logo: "cecaps.org" },
  { name: "Anglo American", descKey: "trajectory.anglo", logo: "angloamerican.com" },
  { name: "PNUD", descKey: "trajectory.pnud", logo: "undp.org" },
  { name: "Prefeitura de BH", descKey: "trajectory.prefeituraBH", logo: "pbh.gov.br" },
  { name: "IPOG", descKey: "trajectory.ipog", logo: "ipog.edu.br" },
];

const logoUrlFor = (domain) => `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

export default function Trajectories() {
  const { t } = useTranslation();
  const cloudRef = useRef(null);
  const Rref = useRef(240);
  const [failed, setFailed] = useState(() => new Set());

  useEffect(() => {
    const container = cloudRef.current;
    if (!container) return;
    const nodes = Array.from(container.querySelectorAll("[data-logo]"));
    const N = nodes.length;

    // Fibonacci sphere distribution (even spread over the sphere)
    const pos = nodes.map((_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
      };
    });

    const updateR = () => {
      Rref.current = Math.min(260, Math.max(140, container.clientWidth * 0.38));
    };
    updateR();
    window.addEventListener("resize", updateR);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let angle = reduceMotion ? 0.6 : 0;
    let raf;

    const render = () => {
      const R = Rref.current;
      const yaw = angle;
      const pitch = 0.22 + Math.sin(angle * 0.32) * 0.12;
      const cy = Math.cos(yaw), sy = Math.sin(yaw);
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      nodes.forEach((node, i) => {
        const p = pos[i];
        // rotate around Y (yaw)
        const x1 = p.x * cy + p.z * sy;
        const z1 = -p.x * sy + p.z * cy;
        const y1 = p.y;
        // rotate around X (gentle pitch wobble)
        const y2 = y1 * cp - z1 * sp;
        const z2 = y1 * sp + z1 * cp;
        const px = x1 * R;
        const py = y2 * R;
        const pz = z2; // unit depth -1..1
        const depth = (pz + 1) / 2; // 0 (far) .. 1 (near)
        const scale = 0.5 + 0.5 * depth;
        const opacity = 0.14 + 0.86 * depth;
        node.style.transform = `translate(-50%, -50%) translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        node.style.opacity = opacity.toFixed(3);
        node.style.zIndex = String(Math.round(depth * 1000));
      });
    };

    const tick = () => {
      angle += 0.0014;
      render();
      raf = requestAnimationFrame(tick);
    };

    if (reduceMotion) {
      render();
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateR);
    };
  }, []);

  return (
    <section id="trajetorias" className="relative py-24 lg:py-32 bg-[#EFE8E0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-10">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("trajectory.kicker")}
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
            {t("trajectory.title")}
          </h2>
          <p className="mt-5 text-[#3C2F2F]/70 text-[15px] leading-relaxed">
            {t("trajectory.intro")}
          </p>
        </div>

        <div
          ref={cloudRef}
          className="relative w-full h-[360px] sm:h-[440px] lg:h-[600px]"
          aria-label={t("trajectory.title")}
        >
          {INSTITUTIONS.map((inst) => {
            const url = inst.logo ? logoUrlFor(inst.logo) : null;
            const showLogo = url && !failed.has(inst.name);
            const tile =
              "h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-xl sm:rounded-2xl bg-white border border-[#D6CDBF]/60 flex items-center justify-center shadow-[0_4px_18px_-6px_rgba(60,47,47,0.28)]";
            return (
              <div
                key={inst.name}
                data-logo
                className="absolute left-1/2 top-1/2 will-change-transform"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <div className={showLogo ? `${tile} p-1.5 sm:p-2.5` : `${tile} px-1 sm:px-1.5`}>
                  {showLogo ? (
                    <img
                      src={url}
                      alt={inst.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                      onError={() =>
                        setFailed((prev) => {
                          const next = new Set(prev);
                          next.add(inst.name);
                          return next;
                        })
                      }
                    />
                  ) : (
                    <span className="font-display text-[8px] sm:text-[10px] lg:text-[11px] font-medium text-[#3C2F2F] leading-[1.05] text-center tracking-tight">
                      {inst.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}