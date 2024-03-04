import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  classname?: string;
  src: StaticImageData;
  alt: string;
  rowReverse: boolean;
  marginBottom: boolean;
  projectTitle: string;
  projectDescription?: string;
}

const ProjectCard = ({
  classname,
  src,
  alt,
  rowReverse,
  marginBottom,
  projectTitle,
  projectDescription,
}: ProjectCardProps) => {

  const isRowReverse = rowReverse ? "md:flex-row-reverse" : "";
  const isMarginBottom = marginBottom ? "mb-28 md:mb-36 lg:mb-48" : "";
  
  return (
    <div className={`${isMarginBottom} ${classname}`}>
      <div className={`md:flex ${isRowReverse} md:items-center md:gap-x-12 xl:gap-x-20 w-full`}>
        <div className="text-center md:text-left  md:w-4/5 xl:w-3/5 ">
          <h3 className="mb-4 ">{projectTitle}</h3>
          <p className="max-w-[320px] lg:max-w-[300px] mx-auto md:mx-0">{projectDescription}</p>
        </div>
        <div className="mt-[40px] md:mt-0 ">
          <Image src={src} alt={alt} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
