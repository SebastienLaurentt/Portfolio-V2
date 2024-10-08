import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

import Codit from "../../../public/images/Codit.webp";
import Effroi from "../../../public/images/Effroi.webp";
import Galopins from "../../../public/images/Galopins.webp";
import Monipost from "../../../public/images/Monipost.webp";
import Stash from "../../../public/images/Stash.webp";
import TSV from "../../../public/images/TSV.webp";
const Projets = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Realisations" />
      <div className="flex flex-col ">
        <ProjectCard
          src={Effroi}
          alt="Impression d'ecran de la page d'accueil du Projet La Villa de l'Effroi"
          rowReverse={true}
          marginBottom={true}
          projectTitle="Villa Effroi"
          projectDescription="Escape Game. Presentation, reservation, paiement et gestion back-office."
          projectStack="Next.Js • Prisma • Stripe"
          siteHref="https://escape-game-pi.vercel.app/"
          githubHref="https://github.com/SebastienLaurentt/Escape-Game"
          slug="effroi"
        />
        <ProjectCard
          src={TSV}
          alt="Impression d'écran de la page d'accueil du Projet Trouver sa voiture"
          rowReverse={false}
          marginBottom={true}
          projectTitle="TSV"
          projectDescription="Agence de courtier automobile. Presentation de l'agence, de ses services et gestion back-office."
          projectStack="Next.Js • Prisma • Zod"
          githubHref="https://github.com/SebastienLaurentt/trouver_sa_voiture"
          slug="tsv"
        />
        <ProjectCard
          src={Stash}
          alt="Impression d'écran de la page d'accueil du Projet Stash"
          rowReverse={true}
          marginBottom={true}
          projectTitle="Stash"
          projectDescription="Agence de design web. Presentation de l'agence, de ses services et de ses realisations."
          projectStack="WordPress • Figma • Elementor"
          slug="stash"
        />
        <ProjectCard
          src={Monipost}
          alt="Impression d'écran de la page d'accueil du Projet MoniPost"
          rowReverse={false}
          marginBottom={true}
          projectTitle="MoniPost"
          projectDescription="Landing page pour Start-Up."
          projectStack="Next.Js • TypeScript • GSAP"
          siteHref="https://monipost.com/"
          githubHref="https://github.com/SebastienLaurentt/MoniPost"
          slug="monipost"
        />
        <ProjectCard
          src={Galopins}
          alt="Impression d'écran de la page d'accueil du Projet Galopins"
          rowReverse={true}
          marginBottom={true}
          projectTitle="Galopins"
          projectDescription="Club de randonnee. Presentation du club, de ses activites et des photos realisees."
          projectStack="Next.Js • TypeScript • Node.Js"
          siteHref="https://lesgalopinsdemontelimar.com/"
          githubHref="https://github.com/SebastienLaurentt/Galopins-Next-V2"
          slug="galopins"
        />
        <ProjectCard
          src={Codit}
          alt="Impression d'écran de la page d'accueil du Projet Codit"
          rowReverse={false}
          marginBottom={true}
          projectTitle="Codit"
          projectDescription="Reseau social pour developpeurs. Partager les illustrations de ses projets avec le code source."
          projectStack="React • Symfony • Redux "
          siteHref="https://codit-codit.vercel.app/"
          githubHref="https://github.com/O-clock-Titanium/projet-codit-front"
          slug="codit"
        />
      </div>
    </Section>
  );
};

export default Projets;
