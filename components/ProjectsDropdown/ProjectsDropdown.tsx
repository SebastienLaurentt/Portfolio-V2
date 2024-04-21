import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const ProjectsDropdown = () => {
  return (
    <DropdownMenu>
            <DropdownMenuTrigger className="text-sm text-primary-foreground md:text-md">
              Projets
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href="/stash"
                  className="text-sm text-primary-foreground md:text-md"
                >
                  Stash
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/sandamal"
                  className="text-sm text-primary-foreground md:text-md"
                >
                  Sandamal
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/galopins"
                  className="text-sm text-primary-foreground md:text-md"
                >
                  Galopins
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/codit"
                  className="text-sm text-primary-foreground md:text-md"
                >
                  Codit
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
  )
}

export default ProjectsDropdown