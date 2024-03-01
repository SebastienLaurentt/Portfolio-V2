import Section from '@/components/Section/Section'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Image from 'next/image'
import React from 'react'

import Next from "../../../public/images/Next.svg";
import Node from "../../../public/images/NodeJs.svg";
import ReactSvg from "../../../public/images/React.svg";
import Tailwind from "../../../public/images/Tailwind.svg";
import Wordpress from "../../../public/images/Wordpress.svg";
import NodeJsIcons from '@/components/SvgIcons/NodeJsIcon/NodeJsIcon';

const Skills = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
    <SectionHeader title="Des compétences" titleHighlight="transverses" />
    <div className="flex flex-col md:flex-row md:justify-center gap-y-2 md:gap-x-2 ">
      <div className="flex justify-center gap-x-2">
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
      </div>
      <div className='w-12 h-12'>
          <NodeJsIcons fillColor="#f78" width={32} height={32}/>
        </div>
    </div>
  </Section>
  )
}

export default Skills

{/* <div className="flex justify-center gap-x-2">
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
</div> */}