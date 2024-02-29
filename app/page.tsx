import Section from "@/components/Section/Section";

import SectionHeader from "@/components/SectionHeader/SectionHeader";

import Hero from "@/components/LandingSections/Hero/Hero";
import Presentation from "@/components/LandingSections/Presentation/Presentation";

import Projets from "@/components/LandingSections/Projets/Projets";
import Skills from "@/components/LandingSections/Skills/Skills";

export default function Home() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      {/* Hero */}
      <Hero />
      {/* Presentation */}
      <Presentation />

      {/* Projets */}
      <Projets />
      {/* Skills */}
      <Skills />
      {/* Contact */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader
          title="Des questions ?"
          titleHighlight="Contactez-moi !"
        />
      </Section>
    </main>
  );
}
