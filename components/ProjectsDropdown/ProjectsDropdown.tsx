import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const projects = [
  { slug: "stash", name: "Stash" },
  { slug: "sandamal", name: "Sandamal" },
  { slug: "galopins", name: "Galopins" },
  { slug: "codit", name: "Codit" },
];

const ProjectsDropdown = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="text-md text-tertiary-foreground md:text-md">
        Projets
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {projects.map((project) => (
          project.slug !== pathname.slice(1) && (
          <DropdownMenuItem key={project.slug} asChild>
            <Link href={`/${project.slug}`} className="text-sm text-tertiary-foreground md:text-md">
              {project.name}
            </Link>
          </DropdownMenuItem>
          )
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectsDropdown;
