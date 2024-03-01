import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  classname?: string;
  src: StaticImageData;
  alt: string;
  rowReverse: boolean;
  projectTitle: string;
  projectDescription?: string;
}

const ProjectCard = ({
  classname,
  src,
  alt,
  rowReverse,
  projectTitle,
  projectDescription,
}: ProjectCardProps) => {

  const isRowReverse = rowReverse ? "md:flex-row-reverse" : "";

  return (
    <div className={`mb-24 md:mb-36 lg:mb-48 ${classname}`}>
      <div className={`md:flex ${isRowReverse} md:items-center md:gap-x-12 w-full`}>
        <div className="text-center  md:w-4/5 xl:w-3/5 ">
          <h3 className="mb-1 md:mb-3">{projectTitle}</h3>
          <p className="text-sm md:text-sm max-w-[320px]  mx-auto ">{projectDescription}</p>
        </div>
        <div className="mt-4 ">
          <Image src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
