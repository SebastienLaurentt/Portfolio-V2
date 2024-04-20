import SandamalLarge1 from "../public/images/SandamalLarge1.png";
import SandamalLarge2 from "../public/images/SandamalLarge2.png";
import SandamalLarge3 from "../public/images/SandamalLarge3.png";
import GalopinsLarge1 from "../public/images/GalopinsLarge1.png";
import GalopinsLarge2 from "../public/images/GalopinsLarge2.png";
import GalopinsLarge3 from "../public/images/GalopinsLarge3.png";
import StashLarge1 from "../public/images/StashLarge1.png";
import StashLarge2 from "../public/images/StashLarge2.png";
import StashLarge3 from "../public/images/StashLarge3.png";
import CoditLarge1 from "../public/images/CoditLarge1.png";
import CoditLarge2 from "../public/images/CoditLarge2.png";
import CoditLarge3 from "../public/images/CoditLarge3.png";
import CoditLarge4 from "../public/images/CoditLarge4.png";

const projectsData = {
  stash: {
    name: "Stash",
    description: "Agence de design web. Presentation de l'agence, de ses services et de ses realisations.",
    date: "2024",
    tech: ["WordPress", "Figma", "Elementor"],
    images: [
      { src: StashLarge1, description: "Landing Page" },
      { src: StashLarge2, description: "Page Realisation" },
      { src: StashLarge3, description: "Contact" }
    ],
  },
  sandamal: {
    name: "Sandamal",
    description: "Site d'art professionel. Presentation de l'artiste, de ses oeuvres et de ses expositions.",
    date: "2024",
    tech: ["Next.Js", "TypeScript ", "Sanity", "Tailwind"],
    siteHref: "https://sandamal-lilac.vercel.app/",
    githubHref: "https://github.com/SebastienLaurentt/Sandamal",
    images: [
      { src: SandamalLarge1, description: "Landing page" },
      { src: SandamalLarge2, description: "page projet" },
      { src: SandamalLarge3, description: "Page info" }
    ],
  },
  galopins: {
    name: "Galopins",
    description: "Club de randonnee. Presentation du club, de ses activites et des photos realisees.",
    date: "2023",
    tech: ["Next.Js", "TypeScript ", "Node.Js", "Tailwind"],
    siteHref: "https://lesgalopinsdemontelimar.com/",
    githubHref: "https://github.com/SebastienLaurentt/Galopins-Next-V2",
    images: [
      { src: GalopinsLarge1, description: "Page Parcours" },
      { src: GalopinsLarge2, description: "Page Club" },
      { src: GalopinsLarge3, description: "Contact" }
    ],
  },
  codit: {
    name: "Codit",
    description: "Reseau social pour developpeurs. Partager les illustrations de ses projets avec le code source.",
    date: "2023",
    tech: ["React ", "Symfony", "Redux", "Tailwind"],
    siteHref: "https://codit-codit.vercel.app/",
    githubHref: "https://github.com/O-clock-Titanium/projet-codit-front",
    images: [
      { src: CoditLarge1, description: "Landing Page" },
      { src: CoditLarge2, description: "Page snippets" },
      { src: CoditLarge3, description: "Inscription" },
      { src: CoditLarge4, description: "Dashboard" }
    ],
  },
};

export default projectsData;
