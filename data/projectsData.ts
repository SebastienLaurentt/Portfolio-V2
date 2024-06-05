import SandamalLarge1 from "../public/images/SandamalLarge1.webp";
import SandamalLarge2 from "../public/images/SandamalLarge2.webp";
import SandamalLarge3 from "../public/images/SandamalLarge3.webp";
import GalopinsLarge1 from "../public/images/GalopinsLarge1.webp";
import GalopinsLarge2 from "../public/images/GalopinsLarge2.webp";
import GalopinsLarge3 from "../public/images/GalopinsLarge3.webp";
import StashLarge1 from "../public/images/StashLarge1.webp";
import StashLarge2 from "../public/images/StashLarge2.webp";
import StashLarge3 from "../public/images/StashLarge3.webp";
import CoditLarge1 from "../public/images/CoditLarge1.webp";
import CoditLarge2 from "../public/images/CoditLarge2.webp";
import CoditLarge3 from "../public/images/CoditLarge3.webp";
import CoditLarge4 from "../public/images/CoditLarge4.webp";
import EffroiLarge1 from "../public/images/EffroiLarge1.webp";
import EffroiLarge2 from "../public/images/EffroiLarge2.webp";
import EffroiLarge3 from "../public/images/EffroiLarge3.webp";
import EffroiLarge4 from "../public/images/EffroiLarge4.webp";
import EffroiLarge5 from "../public/images/EffroiLarge5.webp";
import EffroiLarge6 from "../public/images/EffroiLarge6.webp";
import EffroiLarge7 from "../public/images/EffroiLarge7.webp";

const projectsData = {
  stash: {
    name: "Stash",
    description: "Agence de design web. Presentation de l'agence, de ses services et de ses realisations.",
    date: "[2024]",
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
    date: "[2024]",
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
    date: "[2023]",
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
    date: "[2023]",
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
  effroi: {
    name: "Villa Effroi",
    description: "Escape Game. Presentation, reservation et paiement.",
    date: "[2024]",
    tech: ["Next.Js ", "Prisma", "Stripe", "Tanstack", "Kinde"],
    siteHref: "https://escape-game-pi.vercel.app/",
    githubHref: "https://github.com/SebastienLaurentt/Escape-Game",
    images: [
      { src: EffroiLarge1, description: "Reservation1 : Choix experience" },
      { src: EffroiLarge2, description: "Reservation2 : Booking" },
      { src: EffroiLarge3, description: "Reservation3 : Preview" },
      { src: EffroiLarge4, description: "Reservation4 : Paiement Stripe" },
      { src: EffroiLarge5, description: "Reservation5 : Remerciement" },
      { src: EffroiLarge6, description: "Admin1 : Gestion Experience" },
      { src: EffroiLarge7, description: "Admin2 : Gestion Ouverture" }
    ],
  },
};

export default projectsData;
