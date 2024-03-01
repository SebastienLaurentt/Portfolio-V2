import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  classname?: string;
  src: StaticImageData;
  alt: string;
  projectTitle: string;
  projectDescription?: string;
}

const ProjectCard = ({
  classname,
  src,
  alt,
  projectTitle,
  projectDescription,
}: ProjectCardProps) => {
  return (
    <div className={`mb-16 ${classname}`}>
      <div className="md:flex md:flex-row-reverse md:items-center md:gap-x-12">
        <div className="text-center">
          <h3 className="mb-1">{projectTitle}</h3>
          <p className="text-sm md:text-sm">{projectDescription}</p>
        </div>
        <div className="mt-4">
          <Image src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
