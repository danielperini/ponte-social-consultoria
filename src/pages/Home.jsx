import React from "react";
import Navbar from "@/components/ponte/Navbar";
import Hero from "@/components/ponte/Hero";
import APonte from "@/components/ponte/APonte";
import Pillars from "@/components/ponte/Pillars";
import HowWeWork from "@/components/ponte/HowWeWork";
import HowWeCross from "@/components/ponte/HowWeCross";
import Solutions from "@/components/ponte/Solutions";
import ReputationBlock from "@/components/ponte/ReputationBlock";
import Team from "@/components/ponte/Team";
import Governance from "@/components/ponte/Governance";
import Partners from "@/components/ponte/Partners";
import Constructions from "@/components/ponte/Constructions";
import Footer from "@/components/ponte/Footer";
import Seo from "@/components/ponte/Seo";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-background">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navbar />
      <main>
        {/* Topo — Atrair */}
        <Hero />
        {/* Meio — Interessar */}
        <APonte />
        {/* Consideração — Avaliar */}
        <Pillars />
        <HowWeWork />
        <HowWeCross />
        <Solutions />
        <ReputationBlock />
        {/* Fundo — Comprar */}
        <Constructions />
        {/* Pós-venda — Fidelizar */}
        <Team />
        <Governance />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}