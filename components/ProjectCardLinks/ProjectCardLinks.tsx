import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface ProjectCardLinksProps {
  classname?: string;
  siteHref?: string;
  githubHref?: string;
}

const ProjectCardLinks = ({
  classname,
  siteHref,
  githubHref,
}: ProjectCardLinksProps) => {
  return (
    <div
      className={`${classname} flex flex-row gap-x-4 text-primary-foreground`}
    >
      {/* Website Link  */}
      {siteHref && (
        <Button variant="links" size="links">
          <Link href={siteHref} target="_blank" className="flex gap-x-1">
            <Globe size={16} />
            <span>Site Web</span>
          </Link>
        </Button>
      )}

      {/* GitHub profil Link  */}
      {githubHref && (
        <Button variant="links" size="links">
          <Link href={githubHref} target="_blank" className=" flex gap-x-1">
            <Github size={16} />
            <span>GitHub</span>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ProjectCardLinks;
