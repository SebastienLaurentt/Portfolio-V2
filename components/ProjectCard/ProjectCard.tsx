import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  src: StaticImageData;
  alt: string;
  projectTitle: string;
  projectDescription?: string;
}

const ProjectCard = ({
  src,
  alt,
  projectTitle,
  projectDescription,
}: ProjectCardProps) => {
  return (
    <div className="mb-16">
      <div>
        <div className="flex items-center gap-x-4 mb-2">
          <div>
            <h3 className="mb-1">{projectTitle}</h3>
          </div>
        </div>
        <div className="">
        <Image src={src} alt={alt} />
        </div>

        <p className="text-sm md:text-sm">{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
