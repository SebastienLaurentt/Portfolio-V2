import Hero from "@/components/LandingSections/Hero/Hero";
import Presentation from "@/components/LandingSections/Presentation/Presentation";

import Contact from "@/components/LandingSections/Contact/Contact";
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
      <Contact />
    </main>
  );
}
