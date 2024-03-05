import Link from "next/link";

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
      {siteHref && (

          <Link href={siteHref} target="_blank">
            Voir le site
          </Link>

      )}
      {githubHref && (

          <Link href={githubHref} target="_blank">
            Voir le code
          </Link>

      )}
    </div>
  );
};

export default ProjectCardLinks;
