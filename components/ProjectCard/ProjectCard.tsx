'use client'

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import ProjectCardLinks from "../ProjectCardLinks/ProjectCardLinks";
import ProjectChip from "../ProjectChip/ProjectChip";

interface ProjectCardProps {
  classname?: string;
  src: StaticImageData;
  alt: string;
  rowReverse: boolean;
  marginBottom: boolean;
  projectTitle: string;
  projectDescription?: string;
  chipName: string;
  chipName2?: string;
  chipClassname: string;
  chipClassname2?: string;
  siteHref?: string;
  githubHref?: string;
}

const ProjectCard = ({
  classname,
  src,
  alt,
  rowReverse,
  marginBottom,
  projectTitle,
  projectDescription,
  chipName,
  chipName2,
  chipClassname,
  chipClassname2,
  siteHref,
  githubHref,
}: ProjectCardProps) => {
  const isRowReverse = rowReverse ? "md:flex-row-reverse" : "";
  const isMarginBottom = marginBottom ? "mb-32 md:mb-48 lg:mb-64 xl:mb-80" : "";
  const projectCardRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const cardRect = projectCardRef.current?.getBoundingClientRect();
      if (!cardRect) return;

      const cardTop = cardRect.top;
      const cardBottom = cardRect.bottom;

      // Calculer la distance entre le bas de la fenêtre et le haut de la div
      const distanceFromBottom = windowHeight - cardTop;

      // Calculer l'opacité en fonction de la distance du bas de la fenêtre
      const maxOpacityDistance = windowHeight / 2;
      const newOpacity = Math.min(1, distanceFromBottom / maxOpacityDistance);
      setOpacity(newOpacity);
    };

    // Exécuter la logique de calcul de l'opacité au chargement de la page
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={projectCardRef}
      className={`${isMarginBottom} ${classname}`}
      style={{ opacity: opacity }}
    >
      <div className={`md:flex ${isRowReverse} md:items-center md:gap-x-12 lg:gap-x-16 xl:gap-x-28 w-full`}>
        <div className="text-center md:text-left w-[320px] md:w-[480px] mx-auto">
          <h3 className="mb-2 md:mb-4">{projectTitle}</h3>
          <p className="md:mx-0 mb-2 md:mb-4">{projectDescription}</p>
          <ProjectCardLinks siteHref={siteHref || ""} githubHref={githubHref || ""} classname="hidden md:flex" />
        </div>
        <div className="mt-[20px] md:mt-0 relative">
          <Image src={src} alt={alt} className="rounded-lg" />
          <ProjectChip chipName={chipName} classname={chipClassname}/>
          <ProjectChip chipName={chipName2 || ""} classname={chipClassname2 || ""}/>
        </div>
        <ProjectCardLinks siteHref={siteHref || ""} githubHref={githubHref || ""} classname="md:hidden mt-4 justify-center" />
      </div>
    </div>
  );
};

export default ProjectCard;



