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

          />
          <ProjectCard
            src={Galopins}
            alt="Impression d'écran de la page d'accueil du Projet Galopins"
            rowReverse={false}
            marginBottom={true}
            projectTitle="Galopins"
            projectDescription="Club de randonnée. Présentation du club, de ses activités et des photos des randonnées réalisées."
            siteHref="https://galopins-next-v2.vercel.app/"
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
            siteHref="https://portfolio-v2-zeta-coral.vercel.app/"
            githubHref="https://github.com/SebastienLaurentt/Portfolio-V2"
          />
          <ProjectCard
            src={Codit}
            alt="Impression d'écran de la page d'accueil du Projet Codit"
            rowReverse={false}
            marginBottom={false}
            projectTitle="Codit"
            projectDescription="Réseau social pour développeurs. Permettant de partager les illustrations de ses projets tout en rendant disponibles les codes sources."
            siteHref="https://codit-codit.vercel.app/"
            githubHref="https://github.com/O-clock-Titanium/projet-codit-front"
          />
        </div>
      </div>
    </Section>
  );
};

export default Projets;
