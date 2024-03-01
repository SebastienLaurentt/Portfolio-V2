import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import NextJsIcon from "@/components/SvgIcons/NextJsIcon/NextJsIcon";

import NodeJsIcon from "@/components/SvgIcons/NodeJsIcon/NodeJsIcon";
import ReactIcon from "@/components/SvgIcons/ReactIcon/ReactIcon";
import TailwindIcon from "@/components/SvgIcons/Tailwind/Tailwind";
import WordPressIcon from "@/components/SvgIcons/Wordpress/Wordpress";

const Skills = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Des compétences" titleHighlight="transverses" />
      <div className="flex flex-col md:flex-row md:justify-center gap-y-2 md:gap-x-2 ">
        <div className="flex justify-center gap-x-2">
          <div className="border rounded-xl w-24 h-16  justify-center flex items-center">
            <NextJsIcon fillColor="#f78" width={32} height={32} />
          </div>
          <div className="border rounded-xl w-24 h-16 flex justify-center  items-center">
            <TailwindIcon fillColor="#f78" width={32} height={32} />
          </div>
          <div className="border rounded-xl w-24 h-16 flex justify-center items-center">
            <ReactIcon fillColor="#f78" width={32} height={32} />
          </div>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="border rounded-xl w-24 h-16 flex justify-center flex items-center">
            <WordPressIcon fillColor="#f78" width={32} height={32} />
          </div>
          <div className="border rounded-xl w-24 h-16 flex justify-center flex items-center">
            <NodeJsIcon fillColor="#f78" width={32} height={32} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;

{
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
}
