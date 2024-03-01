'use client'

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import NextJsIcon from "@/components/SvgIcons/NextJsIcon/NextJsIcon";

import NodeJsIcon from "@/components/SvgIcons/NodeJsIcon/NodeJsIcon";
import ReactIcon from "@/components/SvgIcons/ReactIcon/ReactIcon";
import TailwindIcon from "@/components/SvgIcons/Tailwind/Tailwind";
import WordPressIcon from "@/components/SvgIcons/Wordpress/Wordpress";
import { useState } from "react";

const Skills = () => {
  const fillColor = "hsl(var(--primary-foreground))";
  const [size, setSize] = useState(() => getSize());

  // Fonction pour obtenir la taille en fonction de la largeur de la fenêtre
  function getSize() {
    const width = window.innerWidth;
    if (width < 768) {
      return 28; // Taille plus petite pour les appareils mobiles
    } else if (width >= 768 && width < 1024) {
      return 40; // Taille moyenne pour les tablettes
    } else if (width >= 1024 && width < 1280) {
      return 52; // Taille plus grande pour les écrans plus larges
    } else if (width >= 1280 && width < 1400) {
      return 48; // Taille encore plus grande pour les écrans plus larges
    } else {
      return 56; // Taille la plus grande pour les écrans très larges
    }
  }

  // Mettre à jour la taille de l'icône lors du redimensionnement de la fenêtre
  window.addEventListener('resize', () => {
    setSize(getSize());
  });

  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Des compétences" titleHighlight="transverses" />
      <div className="flex flex-col xl:flex-row xl:justify-center gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-x-4">
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  justify-center flex items-center">
            <NextJsIcon fillColor={fillColor} width={size} height={size} />
          </div>
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center  items-center">
            <TailwindIcon fillColor={fillColor} width={size} height={size} />
          </div>
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center items-center">
            <ReactIcon fillColor={fillColor} width={size} height={size} />
          </div>
        </div>
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center flex items-center">
            <WordPressIcon fillColor={fillColor} width={size} height={size} />
          </div>
          <div className="border rounded-xl w-24 md:w-36 lg:w-48 h-16 md:h-24 lg:h-32  flex justify-center flex items-center">
            <NodeJsIcon fillColor={fillColor} width={size} height={size} />
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
