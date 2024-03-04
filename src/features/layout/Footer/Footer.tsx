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
        <ul className="flex justify-center mt-2 gap-x-2">
          <Link href="https://twitter.com/Seb_webdev" target="_blank">
            <li className="socialIcon">
              <XIcon fillColor={fillColor} />
            </li>
          </Link>
          <Link
            href="https://www.linkedin.com/in/s%C3%A9bastien-laurent-3a007328a/"
            target="_blank"
          >
            <li className="socialIcon">
              <LinkedInIcon fillColor={fillColor} />
            </li>
          </Link>
          <Link href="https://github.com/SebastienLaurentt" target="_blank">
            <li className="socialIcon">
              <GitHubIcon fillColor={fillColor} />
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};
