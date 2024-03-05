import { Link } from "lucide-react";

interface ProjectCardLinksProps {
  classname?: string;
  siteHref: string;
  githubHref: string;
}

const ProjectCardLinks = ({classname, siteHref, githubHref}: ProjectCardLinksProps) => {
  return (
    <div className={`${classname} flex flex-row gap-x-4 text-tertiary-foreground`}>
      <Link href={siteHref}> Voir le site </Link>
      <Link href={githubHref}> Voir le code </Link>
    </div>
  );
};

export default ProjectCardLinks;
