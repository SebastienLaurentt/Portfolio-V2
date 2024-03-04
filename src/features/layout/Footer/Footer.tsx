import GitHubIcon from "@/components/SvgIcons/GitHubIcon/GitHubIcon";
import XIcon from "@/components/SvgIcons/XIcon/XIcon";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="">
      <div className="text-center text-xs md:text-sm items-center px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-8">
        <span className="">&#169;2024 - Sébastien Laurent</span>
        <ul className="flex justify-center mt-8 gap-x-2">
          <li className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32 flex flex-col justify-center  items-center">
            <XIcon />
          </li>
          <li className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32 flex flex-col justify-center  items-center">
            <LinkedInLogoIcon />
          </li>
          <li className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32 flex flex-col justify-center  items-center">
            <GitHubIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
};
