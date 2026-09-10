import React from "react";
import Navbar from "@/components/ponte/Navbar";
import Hero from "@/components/ponte/Hero";
import APonte from "@/components/ponte/APonte";
import Stats from "@/components/ponte/Stats";
import Sectors from "@/components/ponte/Sectors";
import Pillars from "@/components/ponte/Pillars";
import HowWeWork from "@/components/ponte/HowWeWork";
import HowWeCross from "@/components/ponte/HowWeCross";
import Solutions from "@/components/ponte/Solutions";
import Team from "@/components/ponte/Team";
import Constructions from "@/components/ponte/Constructions";
import Articles from "@/components/ponte/Articles";
import Footer from "@/components/ponte/Footer";

export default function Home() {
  return (
    <div className="bg-[#F4EFEA]">
      <Navbar />
      <main>
        <Hero />
        <APonte />
        <Stats />
        <Sectors />
        <Pillars />
        <HowWeWork />
        <HowWeCross />
        <Solutions />
        <Constructions />
        <Articles />
        <Team />
      </main>
      <Footer />
    </div>
  );
}