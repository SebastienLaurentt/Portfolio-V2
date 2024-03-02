
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import NextJsIcon from "@/components/SvgIcons/NextJsIcon/NextJsIcon";

import NodeJsIcon from "@/components/SvgIcons/NodeJsIcon/NodeJsIcon";
import ReactIcon from "@/components/SvgIcons/ReactIcon/ReactIcon";
import TailwindIcon from "@/components/SvgIcons/Tailwind/Tailwind";
import WordPressIcon from "@/components/SvgIcons/Wordpress/Wordpress";

const Skills = () => {
  const fillColor = "hsl(var(--primary-foreground))";

  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Des compétences" titleHighlight="transverses" />
      <div className="flex flex-col xl:flex-row xl:justify-center gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-x-4">
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32 flex flex-col justify-center  items-center">
            <NextJsIcon fillColor={fillColor} />
          </div>
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center  items-center">
            <TailwindIcon fillColor={fillColor} />
          </div>
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center items-center">
            <ReactIcon fillColor={fillColor} />
          </div>
        </div>
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center flex items-center">
            <WordPressIcon fillColor={fillColor} />
          </div>
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center flex items-center">
            <NodeJsIcon fillColor={fillColor} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;

/* <div className="flex justify-center gap-x-2">
<div className="border rounded-xl w-24 h-16  justify-center flex items-center">
  <Image src={Next} alt="Logo Next"  width={32} />
</div>
<div className="border rounded-xl w-24 h-16 flex justify-center  items-center">
  <Image src={Tailwind} alt="Logo Next" width={32} />
</div>
<div className="border rounded-xl w-24 h-16 flex justify-center items-center">
  <Image src={ReactSvg} alt="Logo Next" width={32} />
</div>
</div>
<div className="flex justify-center gap-x-2">
<div className="border rounded-xl w-24 h-16 flex justify-center flex items-center">
  <Image src={Wordpress} alt="Logo Next" width={32} />
</div>
<div className="border rounded-xl w-24 h-16 flex justify-center flex items-center">
  <Image src={Node} alt="Logo Next" width={32} />
</div>
</div> */
