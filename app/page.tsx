import Section from "@/components/Section/Section";
import Image from "next/image";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

import Codit from "../public/images/Codit.png";
import Galopins from "../public/images/GalopinsV2.png";
import Portfolio from "../public/images/PortfolioV2.png";
import Stash from "../public/images/Stash.png";

import Next from "../public/images/Next.svg";
import Node from "../public/images/NodeJs.svg";
import ReactSvg from "../public/images/React.svg";
import Tailwind from "../public/images/Tailwind.svg";
import Wordpress from "../public/images/Wordpress.svg";
import Hero from "@/components/LandingSections/Hero/Hero";


export default function Home() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      {/* Hero */}
      <Hero />
      {/* Presentation */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader
          title="De la recherche au"
          titleHighlight="développement"
        />
        <div className="text-md md:text-xl lg:text-3xl xl:text-4xl leading-8 md:leading-[48px] lg:leading-[64px] xl:leading-[72px] text-secondary-foreground">
          Après un doctorat en{" "}
          <span className="text-tertiary-foreground"> Sciences Cognitives</span>{" "}
          je me suis tourné vers le développement web. Ce choix s&apos;explique
          par la volonté d&apos;utiliser ma compréhension du
          <span className="text-tertiary-foreground"> cerveau humain</span> dans
          un secteur qui m&apos;intéresse particulièrement, celui du{" "}
          <span className="text-tertiary-foreground"> numérique</span>. Ainsi,
          de manière autodidacte mais aussi par le biais d&apos;une formation
          intensive j&apos;explore ce nouvel environnement. J&apos;adore
          découvrir et apprendre à réaliser de{" "}
          <span className="text-tertiary-foreground">
            nouvelles fonctionnalités
          </span>{" "}
          pouvant améliorer l&apos;expérience des utilisateurs.
        </div>
      </Section>

      {/* Projets */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader title="Mes dernières" titleHighlight="réalisations" />
        <div className="flex flex-col ">
          <div className="xl:flex xl:gap-x-8">
            <ProjectCard
              src={Stash}
              alt="Impression d'écran de la page d'accueil du Projet Stash"
              projectTitle="Stash"
              projectDescription="Agence de web design"
            />
            <ProjectCard
              src={Codit}
              alt="Impression d'écran de la page d'accueil du Projet Codit"
              projectTitle="Codit"
              projectDescription="Réseau social pour développeurs"
              classname="xl:mt-64"
            />
          </div>
          <div className="xl:flex xl:gap-x-8">
            <ProjectCard
              src={Portfolio}
              alt="Impression d'écran de la page d'accueil de mon Portfolio"
              projectDescription="Mon portfolio personnel"
              projectTitle="Portfolio"
            />
            <ProjectCard
              src={Galopins}
              alt="Impression d'écran de la page d'accueil du Projet Galopins"
              projectTitle="Galopins"
              projectDescription="Club de randonnée"
              classname="xl:mt-64"
            />
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader title="Des compétences" titleHighlight="transverses" />
        <div className="flex flex-col md:flex-row md:justify-center gap-y-2 md:gap-x-2 ">
          <div className="flex justify-center gap-x-2">
            <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
              <Image src={Next} alt="Logo Next" height={62} width={62} />
            </div>
            <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
              <Image src={Tailwind} alt="Logo Next" height={62} width={62} />
            </div>
            <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
              <Image src={ReactSvg} alt="Logo Next" height={62} width={62} />
            </div>
          </div>
          <div className="flex justify-center gap-x-2">
            <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
              <Image src={Wordpress} alt="Logo Next" height={62} width={62} />
            </div>
            <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
              <Image src={Node} alt="Logo Next" height={62} width={62} />
            </div>
          </div>
        </div>
      </Section>

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
