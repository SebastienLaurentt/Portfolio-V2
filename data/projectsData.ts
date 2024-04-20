import SandamalLarge from "../public/images/SandamalLarge.png";
import SandamalLarge2 from "../public/images/SandamalLarge2.png";
import SandamalLarge3 from "../public/images/SandamalLarge3.png";

const projectsData = {
  stash: {
    name: "Stash",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab odio id doloremque sunt optio, ex officia perspiciatis voluptate corrupti necessitatibus.",
    date: "2022-03-15",
    tech: ["React", "Next.js", "Tailwind CSS"],
    images: [
      { src: SandamalLarge, description: "Description de l'image 1" },
      { src: SandamalLarge2, description: "Description de l'image 2" },
      { src: SandamalLarge3, description: "Description de l'image 3" }
    ],
  },
  sandamal: {
    name: "Sandamal",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab odio id doloremque sunt optio, ex officia perspiciatis voluptate corrupti necessitatibus.",
    date: "2022-05-20",
    tech: ["Vue.js", "Express", "MongoDB"],
    images: [
      { src: SandamalLarge, description: "Description de l'image 1" },
      { src: SandamalLarge, description: "Description de l'image 2" },
      { src: SandamalLarge, description: "Description de l'image 3" }
    ],
  },
  galopins: {
    name: "Galopins",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab odio id doloremque sunt optio, ex officia perspiciatis voluptate corrupti necessitatibus.",
    date: "2022-08-10",
    tech: ["Angular", "Node.js", "PostgreSQL"],
    images: [
      { src: SandamalLarge, description: "Description de l'image 1" },
      { src: SandamalLarge, description: "Description de l'image 2" },
      { src: SandamalLarge, description: "Description de l'image 3" }
    ],
  },
};

export default projectsData;
