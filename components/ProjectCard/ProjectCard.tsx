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
      <div>
        <div className="mb-2">
          <Image src={src} alt={alt} />
        </div>
        <div className="text-center">
          <h3 className="mb-1">{projectTitle}</h3>
          <p className="text-sm md:text-sm">{projectDescription}</p>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
