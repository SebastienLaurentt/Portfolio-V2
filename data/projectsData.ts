
import GalopinsLarge1 from "../public/images/GalopinsLarge1.webp";
import GalopinsLarge2 from "../public/images/GalopinsLarge2.webp";
import GalopinsLarge3 from "../public/images/GalopinsLarge3.webp";
import GalopinsLarge4 from "../public/images/GalopinsLarge4.webp";
import GalopinsLarge5 from "../public/images/GalopinsLarge5.webp";
import StashLarge1 from "../public/images/StashLarge1.webp";
import StashLarge2 from "../public/images/StashLarge2.webp";
import StashLarge3 from "../public/images/StashLarge3.webp";
import CoditLarge1 from "../public/images/CoditLarge1.webp";
import CoditLarge2 from "../public/images/CoditLarge2.webp";
import CoditLarge3 from "../public/images/CoditLarge3.webp";
import CoditLarge4 from "../public/images/CoditLarge4.webp";
import TSVLarge1 from "../public/images/TSVLarge1.webp";
import TSVLarge2 from "../public/images/TSVLarge2.webp";
import TSVLarge3 from "../public/images/TSVLarge3.webp";
import TSVLarge4 from "../public/images/TSVLarge4.webp";
import TSVLarge5 from "../public/images/TSVLarge5.webp";
import TSVLarge6 from "../public/images/TSVLarge6.webp";
import EffroiLarge1 from "../public/images/EffroiLarge1.webp";
import EffroiLarge2 from "../public/images/EffroiLarge2.webp";
import EffroiLarge3 from "../public/images/EffroiLarge3.webp";
import EffroiLarge4 from "../public/images/EffroiLarge4.webp";
import EffroiLarge5 from "../public/images/EffroiLarge5.webp";
import EffroiLarge6 from "../public/images/EffroiLarge6.webp";
import EffroiLarge7 from "../public/images/EffroiLarge7.webp";
import EffroiLarge8 from "../public/images/EffroiLarge8.webp";
import EffroiLarge9 from "../public/images/EffroiLarge9.webp";
import EffroiLarge10 from "../public/images/EffroiLarge10.webp";
import MonipostLarge1 from "../public/images/MonipostLarge1.webp";
import MonipostLarge2 from "../public/images/MonipostLarge2.webp";
import MonipostLarge3 from "../public/images/MonipostLarge3.webp";

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
  monipost: {
    name: "MoniPost",
    description: "Landing page pour Start-Up.",
    date: "[2024]",
    tech: ["Next.Js", "TypeScript ", "GSAP", "Tailwind"],
    siteHref: "https://monipost.com/",
    githubHref: "https://github.com/SebastienLaurentt/MoniPost",
    images: [
      { src: MonipostLarge1, description: "Section Background" },
      { src: MonipostLarge2, description: "Section Tarifs" },
      { src: MonipostLarge3, description: "Section FAQ" }
    ],
  },
  tsv: {
    name: "TSV",
    description: "Agence de courtier automobile. Presentation de l'agence, de ses services et gestion back-office.",
    date: "[2024]",
    tech: ["Next.Js", "TypeScript ", "GSAP", "Prisma", "Zod"],
    githubHref: "https://github.com/SebastienLaurentt/trouver_sa_voiture",
    images: [
      { src: TSVLarge1, description: "Carousel Vehicules" },
      { src: TSVLarge2, description: "Section Services" },
      { src: TSVLarge3, description: "Section Témoignagnes" },
      { src: TSVLarge4, description: "Footer" },
      { src: TSVLarge5, description: "Page Achat : Methode" },
      { src: TSVLarge6, description: "Page Achat : Tarifs" },
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
      { src: GalopinsLarge2, description: "Page Programmes" },
      { src: GalopinsLarge3, description: "Page Club" },
      { src: GalopinsLarge4, description: "Page Connexion" },
      { src: GalopinsLarge5, description: "Page Contact" }
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
      { src: EffroiLarge1, description: "Page Accueil" },
      { src: EffroiLarge2, description: "Reservation1 : Choix experience" },
      { src: EffroiLarge3, description: "Reservation2 : Booking" },
      { src: EffroiLarge4, description: "Reservation3 : Preview" },
      { src: EffroiLarge5, description: "Reservation4 : Paiement Stripe" },
      { src: EffroiLarge6, description: "Reservation5 : Remerciement" },
      { src: EffroiLarge7, description: "Admin1 : Gestion Experiences" },
      { src: EffroiLarge8, description: "Admin2 : Gestion Ouvertures" },
      { src: EffroiLarge9, description: "Admin3 : Gestion Reservations" },
      { src: EffroiLarge10, description: "Admin4 : Gestion Tarifs" },
    ],
  },
};

export default projectsData;
