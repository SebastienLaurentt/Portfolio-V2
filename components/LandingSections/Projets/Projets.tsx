import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

import Codit from "../../../public/images/Codit.png";
import Fintech from "../../../public/images/Fintech.png";
import Galopins from "../../../public/images/Galopins.png";
import Stash from "../../../public/images/Stash.png";
import TechHaven from "../../../public/images/TechHaven.png";
import Sandamal from "../../../public/images/Sandamal.png";

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
            projectStack="WordPress • Figma • Elementor  "
          />
          <ProjectCard
            src={Sandamal}
            alt="Impression d'écran de la page d'accueil du Projet Sandamal"
            rowReverse={false}
            marginBottom={true}
            projectTitle="Sandamal"
            projectDescription="Site d'art professionel. Présentation de l'artiste, de ses oeuvres et de ses expositions."
            projectStack="Next.Js • TypeScript • Sanity"
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
            src={Fintech}
            alt="Impression d'écran de la page d'accueil du Projet Fintech"
            rowReverse={true}
            marginBottom={true}
            projectTitle="Fintech"
            projectDescription="Concept d'application mobile de gestion de crypto-monnaies."
            projectStack="React Native • Expo • Clerk"
            imgClassname="w-4/5 xl:w-3/5 mx-auto"
            githubHref="https://github.com/SebastienLaurentt/Fintech-ReactN"
          />
          <ProjectCard
            src={TechHaven}
            alt="Impression d'écran de la page d'accueil du Projet TechHaven"
            rowReverse={false}
            marginBottom={true}
            projectTitle="Tech Haven"
            projectDescription="Concept E-Commerce de vente de produits high-tech."
            projectStack="Next.Js • PayloadCMS • Stripe"
            githubHref="https://github.com/SebastienLaurentt/Tech-Haven"
          />

          <ProjectCard
            src={Codit}
            alt="Impression d'écran de la page d'accueil du Projet Codit"
            rowReverse={true}
            marginBottom={false}
            projectTitle="Codit"
            projectDescription="Réseau social pour développeurs. Permet de partager les illustrations de ses projets tout en rendant disponible les codes sources."
            projectStack="React • Symfony • Redux "
            siteHref="https://codit-codit.vercel.app/"
            githubHref="https://github.com/O-clock-Titanium/projet-codit-front"
          />
        </div>
      </div>
    </Section>
  );
};

export default Projets;
