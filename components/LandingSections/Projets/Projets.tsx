import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

import Codit from "../../../public/images/Codit.webp";
import Effroi from "../../../public/images/Effroi.webp";
import Galopins from "../../../public/images/Galopins.webp";
import Monipost from "../../../public/images/Monipost.webp";
import Stash from "../../../public/images/Stash.webp";
import Picasso from "../../../public/images/Picasso.webp";

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
          projectDescription="Escape Game. Presentation, reservation et paiement."
          projectStack="Next.Js • Prisma • Stripe"
          siteHref="https://escape-game-pi.vercel.app/"
          githubHref="https://github.com/SebastienLaurentt/Escape-Game"
          slug="effroi"
        />
        <ProjectCard
          src={Stash}
          alt="Impression d'écran de la page d'accueil du Projet Stash"
          rowReverse={false}
          marginBottom={true}
          projectTitle="Stash"
          projectDescription="Agence de design web. Presentation de l'agence, de ses services et de ses realisations."
          projectStack="WordPress • Figma • Elementor"
          slug="stash"
        />
        <ProjectCard
          src={Monipost}
          alt="Impression d'écran de la page d'accueil du Projet MoniPost"
          rowReverse={true}
          marginBottom={true}
          projectTitle="MoniPost"
          projectDescription="Landing page pour Start-Up."
          projectStack="Next.Js • TypeScript • GSAP"
          siteHref="https://moni-post-rmpu.vercel.app/"
          githubHref="https://github.com/SebastienLaurentt/MoniPost"
          slug="monipost"
        />
        <ProjectCard
          src={Galopins}
          alt="Impression d'écran de la page d'accueil du Projet Galopins"
          rowReverse={false}
          marginBottom={true}
          projectTitle="Galopins"
          projectDescription="Club de randonnee. Presentation du club, de ses activites et des photos realisees."
          projectStack="Next.Js • TypeScript • Node.Js"
          siteHref="https://lesgalopinsdemontelimar.com/"
          githubHref="https://github.com/SebastienLaurentt/Galopins-Next-V2"
          slug="galopins"
        />
        <ProjectCard
          src={Picasso}
          alt="Impression d'écran de la page d'accueil du Projet PicassoAI"
          rowReverse={true}
          marginBottom={true}
          projectTitle="PicassoAI"
          projectDescription="Site de géneration d'images à partir de texte. Utilisation de l'API OpenAI."
          projectStack="React • TypeScript • Node.Js"
          siteHref="https://ai-image-front-three.vercel.app/"
          githubHref="https://github.com/SebastienLaurentt/AI_Image_Generator"
          slug="picasso"
        />
        {/* <ProjectCard
            src={Sandamal}
            alt="Impression d'écran de la page d'accueil du Projet Sandamal"
            rowReverse={true}
            marginBottom={true}
            projectTitle="Sandamal"
            projectDescription="Site d'art professionel. Presentation de l'artiste, de ses oeuvres et de ses expositions."
            projectStack="Next.Js • TypeScript • Sanity"
            siteHref="https://sandamal-lilac.vercel.app/"
            githubHref="https://github.com/SebastienLaurentt/Sandamal"
            slug="sandamal"
          />
          <ProjectCard
            src={Fintech}
            alt="Impression d'ecran de la page d'accueil du Projet Fintech"
            rowReverse={false}
            marginBottom={true}
            projectTitle="Fintech"
            projectDescription="Concept d'application mobile de gestion de crypto-monnaies."
            projectStack=" Expo • React Native • Clerk"
            imgClassname="w-4/5 xl:w-3/5 mx-auto"
            githubHref="https://github.com/SebastienLaurentt/Fintech-ReactN"
          /> */}
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
