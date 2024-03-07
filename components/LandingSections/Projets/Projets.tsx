import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

import Codit from "../../../public/images/Codit.png";
import Galopins from "../../../public/images/Galopins.png";
import Portfolio from "../../../public/images/Portfolio.png";
import Stash from "../../../public/images/Stash.png";

const Projets = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Mes dernières réalisations" />
      <div className="flex flex-col ">
        <div className="">
          <ProjectCard
            src={Stash}
            alt="Impression d'écran de la page d'accueil du Projet Stash"
            rowReverse={true}
            marginBottom={true}
            projectTitle="Stash"
            projectDescription="Agence de design web. Présentation de l'agence, de ses services et de ses réalisations."
            projectStack="WordPress • Elementor • Figma"

          />
          <ProjectCard
            src={Galopins}
            alt="Impression d'écran de la page d'accueil du Projet Galopins"
            rowReverse={false}
            marginBottom={true}
            projectTitle="Galopins"
            projectDescription="Club de randonnée. Présentation du club, de ses activités et des photos réalisées."
            projectStack="Next.Js • TypeScript • Node.Js"
            siteHref="https://lesgalopinsdemontelimar.com/"
            githubHref="https://github.com/SebastienLaurentt/Galopins-Next-V2"
          />
        </div>
        <div className="">
          <ProjectCard
            src={Portfolio}
            alt="Impression d'écran de la page d'accueil de mon Portfolio"
            rowReverse={true}
            marginBottom={true}
            projectDescription="Mon portfolio personnel."
            projectTitle="Portfolio"
            border={true}
            projectStack="Next.Js • TypeScript • TailwindCSS"
            siteHref="https://sebastienlaurent.fr/"
            githubHref="https://github.com/SebastienLaurentt/Portfolio-V2"
          />
          <ProjectCard
            src={Codit}
            alt="Impression d'écran de la page d'accueil du Projet Codit"
            rowReverse={false}
            marginBottom={false}
            projectTitle="Codit"
            projectDescription="Réseau social pour développeurs. Permet de partager les illustrations de ses projets tout en rendant disponibles les codes sources."
            projectStack="React • TypeScript • Symfony"
            siteHref="https://codit-codit.vercel.app/"
            githubHref="https://github.com/O-clock-Titanium/projet-codit-front"
          />
        </div>
      </div>
    </Section>
  );
};

export default Projets;
