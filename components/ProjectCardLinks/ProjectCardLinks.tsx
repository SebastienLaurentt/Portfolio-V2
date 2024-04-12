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
      className={`${classname} flex flex-row gap-x-2 text-primary-foreground`}
    >
      {/* Website Link  */}
      {siteHref && (
        <Button variant="links" size="links">
          <Link
            href={siteHref}
            target="_blank"
            className="flex flex-row items-center gap-x-1"
          >
            <Globe  className="w-4 lg:w-5" />
            <span className="mt-[3px]">Site Web</span>
          </Link>
        </Button>
      )}

      {/* GitHub profil Link  */}
      {githubHref && (
        <Button variant="links" size="links">
          <Link href={githubHref} target="_blank" className=" flex flex-row items-center gap-x-1">
            <Github className="w-4 lg:w-5" />
            <span className="mt-[3px] ">GitHub</span>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ProjectCardLinks;
