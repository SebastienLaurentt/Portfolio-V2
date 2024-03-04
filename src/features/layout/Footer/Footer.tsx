import GitHubIcon from "@/components/SvgIcons/GitHubIcon/GitHubIcon";
import LinkedInIcon from "@/components/SvgIcons/LinkedInIcon/LinkedInIcon";
import XIcon from "@/components/SvgIcons/XIcon/XIcon";


export const Footer = () => {

  const fillColor = "hsl(var(--primary-foreground))";

  return (
    <footer className="">
      <div className="text-center text-xs md:text-sm items-center px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-8">
        <span className="">&#169;2024 - Sébastien Laurent</span>
        <ul className="flex justify-center mt-2 gap-x-2">
          <li className="border rounded-full w-12 h-12 flex flex-col justify-center  items-center">
            <XIcon fillColor={fillColor} />
          </li>
          <li className="border rounded-full w-12 h-12  flex flex-col justify-center  items-center">
            <LinkedInIcon fillColor={fillColor}/>
          </li>
          <li className="border rounded-full w-12 h-12  flex flex-col justify-center  items-center">
            <GitHubIcon fillColor={fillColor} />
          </li>
        </ul>
      </div>
    </footer>
  );
};
