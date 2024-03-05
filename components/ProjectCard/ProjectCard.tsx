import Image, { StaticImageData } from "next/image";
import ProjectCardLinks from "../ProjectCardLinks/ProjectCardLinks";

interface ProjectCardProps {
  classname?: string;
  src: StaticImageData;
  alt: string;
  rowReverse: boolean;
  marginBottom: boolean;
  projectTitle: string;
  projectDescription?: string;
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
  siteHref,
  githubHref,
}: ProjectCardProps) => {
  const isRowReverse = rowReverse ? "md:flex-row-reverse" : "";
  const isMarginBottom = marginBottom ? "mb-32 md:mb-48 lg:mb-64 xl:mb-80" : "";

  return (
    <div className={`${isMarginBottom} ${classname}`}>
      <div
        className={`md:flex ${isRowReverse} md:items-center md:gap-x-12 lg:gap-x-16 xl:gap-x-28 w-full`}
      >
        <div className="text-center md:text-left  max-w-[320px] md:max-w-[300px] mx-auto">
          <h3 className="mb-2 md:mb-4 ">{projectTitle}</h3>
          <p className=" md:mx-0 mb-2 md:mb-4">{projectDescription}</p>
          <ProjectCardLinks siteHref={siteHref || ""} githubHref={githubHref || ""} classname="hidden md:block" />
        </div>
        <div className="mt-[20px] md:mt-0 ">
          <Image src={src} alt={alt} className="rounded-lg" />
        </div>
        <ProjectCardLinks siteHref={siteHref || ""} githubHref={githubHref || ""} classname="md:hidden mt-4 text-center" />
      </div>
    </div>
  );
};

export default ProjectCard;
