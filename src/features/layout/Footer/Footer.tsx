'use client'

import GitHubIcon from "@/components/SvgIcons/GitHubIcon/GitHubIcon";
import LinkedInIcon from "@/components/SvgIcons/LinkedInIcon/LinkedInIcon";
import XIcon from "@/components/SvgIcons/XIcon/XIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const fillColor = "hsl(var(--primary-foreground))";
  const pathname = usePathname();

  const footerPosition = pathname !== "/" ? "hidden" : "";

  return (
    <footer className={`${footerPosition}`}>
      <div className="mx-auto w-[210px] items-center border-t p-6 text-center text-xs md:w-[400px] md:px-10 md:text-sm lg:w-[600px] xl:px-16">
        <span className="">&#169;2024 - Sebastien Laurent</span>

        {/* Social Icons list */}
        {/* X Profile */}
        <ul className="mt-2 flex justify-center gap-x-2">
          <li>
            <Link
              href="https://twitter.com/Seb_webdev"
              target="_blank"
              className="socialIcon"
              aria-label="Accéder à mon profil Twitter / X"
            >
              <XIcon fillColor={fillColor} />
            </Link>
          </li>

          {/* LinkedIn Profile */}
          <li>
            <Link
              href="https://www.linkedin.com/in/s%C3%A9bastien-laurent-3a007328a/"
              target="_blank"
              className="socialIcon"
              aria-label="Accéder à mon profil LinkedIn"
            >
              <LinkedInIcon fillColor={fillColor} />
            </Link>
          </li>

          {/* GitHub Profile */}
          <li>
            <Link
              href="https://github.com/SebastienLaurentt"
              target="_blank"
              className="socialIcon"
              aria-label="Accéder à mon profil GitHub"
            >
              <GitHubIcon fillColor={fillColor} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
