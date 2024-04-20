import SandamalLarge from "../public/images/SandamalLarge.png";
import SandamalLarge2 from "../public/images/SandamalLarge2.png";
import SandamalLarge3 from "../public/images/SandamalLarge3.png";

const projectsData = {
  stash: {
    name: "Stash",
    description: "Agence de design web. Presentation de l'agence, de ses services et de ses realisations.",
    date: "2024",
    tech: ["WordPress", "Figma", "Elementor"],
    images: [
      { src: SandamalLarge, description: "Description de l'image 1" },
      { src: SandamalLarge, description: "Description de l'image 2" },
      { src: SandamalLarge, description: "Description de l'image 3" }
    ],
  },
  sandamal: {
    name: "Sandamal",
    description: "Site d'art professionel. Presentation de l'artiste, de ses oeuvres et de ses expositions.",
    date: "2024",
    tech: ["Next.Js", "TypeScript ", "Sanity"],
    images: [
      { src: SandamalLarge, description: "HOME PAGE" },
      { src: SandamalLarge2, description: "PAGE D'UN PROJET" },
      { src: SandamalLarge3, description: "ABOUT PAGE" }
    ],
  },
  galopins: {
    name: "Galopins",
    description: "Club de randonnee. Presentation du club, de ses activites et des photos realisees.",
    date: "2023",
    tech: ["Next.Js", "TypeScript ", "Node.Js"],
    images: [
      { src: SandamalLarge, description: "Description de l'image 1" },
      { src: SandamalLarge, description: "Description de l'image 2" },
      { src: SandamalLarge, description: "Description de l'image 3" }
    ],
  },
  codit: {
    name: "Codit",
    description: "Reseau social pour developpeurs. Partager les illustrations de ses projets avec le code source.",
    date: "2023",
    tech: ["React ", "Symfony", "Redux"],
    images: [
      { src: SandamalLarge, description: "Description de l'image 1" },
      { src: SandamalLarge, description: "Description de l'image 2" },
      { src: SandamalLarge, description: "Description de l'image 3" }
    ],
  },
};

export default projectsData;
