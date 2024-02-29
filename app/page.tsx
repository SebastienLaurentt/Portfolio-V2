import Contact from "@/components/LandingSections/Contact/Contact";
import Hero from "@/components/LandingSections/Hero/Hero";
import Presentation from "@/components/LandingSections/Presentation/Presentation";
import Projets from "@/components/LandingSections/Projets/Projets";
import Skills from "@/components/LandingSections/Skills/Skills";

export default function Home() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <Hero />
      <Presentation />
      <Projets />
      <Skills />
      <Contact />
    </main>
  );
}
