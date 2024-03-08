import GitHubIcon from "@/components/SvgIcons/GitHubIcon/GitHubIcon";
import LinkedInIcon from "@/components/SvgIcons/LinkedInIcon/LinkedInIcon";
import XIcon from "@/components/SvgIcons/XIcon/XIcon";
import Link from "next/link";

export const Footer = () => {
  const fillColor = "hsl(var(--primary-foreground))";

  return (
    <footer className="">
      <div className="text-center text-xs md:text-sm items-center px-6 md:px-10 xl:px-16 w-[210px] md:w-[400px] lg:w-[600px] mx-auto py-6  border-t">
        <span className="">&#169;2024 - Sébastien Laurent</span>

        {/* Social Icons list */}
        {/* X Profile */}
        <ul className="flex justify-center mt-2 gap-x-2">
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
