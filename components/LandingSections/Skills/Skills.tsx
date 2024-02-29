import Section from '@/components/Section/Section'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Image from 'next/image'
import React from 'react'

import Next from "../../../public/images/Next.svg";
import Node from "../../../public/images/NodeJs.svg";
import ReactSvg from "../../../public/images/React.svg";
import Tailwind from "../../../public/images/Tailwind.svg";
import Wordpress from "../../../public/images/Wordpress.svg";

const Skills = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
    <SectionHeader title="Des compétences" titleHighlight="transverses" />
    <div className="flex flex-col md:flex-row md:justify-center gap-y-2 md:gap-x-2 ">
      <div className="flex justify-center gap-x-2">
        <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
          <Image src={Next} alt="Logo Next" height={62} width={62} />
        </div>
        <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
          <Image src={Tailwind} alt="Logo Next" height={62} width={62} />
        </div>
        <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
          <Image src={ReactSvg} alt="Logo Next" height={62} width={62} />
        </div>
      </div>
      <div className="flex justify-center gap-x-2">
        <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
          <Image src={Wordpress} alt="Logo Next" height={62} width={62} />
        </div>
        <div className="border rounded-xl w-24 h-24 py-4 px-8 flex items-center">
          <Image src={Node} alt="Logo Next" height={62} width={62} />
        </div>
      </div>
    </div>
  </Section>
  )
}

export default Skills