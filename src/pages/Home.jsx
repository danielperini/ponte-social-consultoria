import React from "react";
import Navbar from "@/components/ponte/Navbar";
import Hero from "@/components/ponte/Hero";
import APonte from "@/components/ponte/APonte";
import Stats from "@/components/ponte/Stats";
import Sectors from "@/components/ponte/Sectors";
import Segments from "@/components/ponte/Segments";
import Pillars from "@/components/ponte/Pillars";
import HowWeWork from "@/components/ponte/HowWeWork";
import HowWeCross from "@/components/ponte/HowWeCross";
import Solutions from "@/components/ponte/Solutions";
import Team from "@/components/ponte/Team";
import Trajectories from "@/components/ponte/Trajectories";
import Governance from "@/components/ponte/Governance";
import Constructions from "@/components/ponte/Constructions";
import Articles from "@/components/ponte/Articles";
import Footer from "@/components/ponte/Footer";
import Seo from "@/components/ponte/Seo";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F4EFEA]">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navbar />
      <main>
        <Hero />
        <APonte />
        <Sectors />
        <Segments />
        <Pillars />
        <HowWeWork />
        <HowWeCross />
        <Solutions />
        <Articles />
        <Team />
        <Trajectories />
        <Governance />
        <Stats />
        <Constructions />
      </main>
      <Footer />
    </div>
  );
}