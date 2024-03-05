import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Section from '@/components/Section/Section'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import React from 'react'

import Codit from "../../../public/images/Codit.png";
import Galopins from "../../../public/images/GalopinsV2.png";
import Portfolio from "../../../public/images/PortfolioV2.png";
import Stash from "../../../public/images/Stash.png";

const Projets = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
    <SectionHeader title="Mes dernières réalisations" />
    <div className="flex flex-col ">
      <div className="">
        <ProjectCard
          src={Stash}
          alt="Impression d'écran de la page d'accueil du Projet Stash"
          rowReverse={true}
          marginBottom={true}
          projectTitle="Stash"
          projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci consequatur debitis delectus distinctio ipsum quas quod suscipit voluptate provident?"

        />
        <ProjectCard
          src={Codit}
          alt="Impression d'écran de la page d'accueil du Projet Codit"
          rowReverse={false}
          marginBottom={true}
          projectTitle="Codit"
          projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci consequatur debitis delectus distinctio ipsum quas quod suscipit voluptate provident?"
          classname="xl:mt-64"
          siteHref='https://codit-codit.vercel.app/'
          githubHref='https://github.com/O-clock-Titanium/projet-codit-front'
        />
      </div>
      <div className="">
        <ProjectCard
          src={Portfolio}
          alt="Impression d'écran de la page d'accueil de mon Portfolio"
          rowReverse={true}
          marginBottom={true}
          projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci consequatur debitis delectus distinctio ipsum quas quod suscipit voluptate provident?"
          projectTitle="Portfolio"
          siteHref="https://portfolio-v2-zeta-coral.vercel.app/"
          githubHref='https://github.com/SebastienLaurentt/Portfolio-V2'
        />
        <ProjectCard
          src={Galopins}
          alt="Impression d'écran de la page d'accueil du Projet Galopins"
          rowReverse={false}
          marginBottom={false}
          projectTitle="Galopins"
          projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci consequatur debitis delectus distinctio ipsum quas quod suscipit voluptate provident?"
          classname="xl:mt-64"
          siteHref='https://galopins-next-v2.vercel.app/'
          githubHref='https://github.com/SebastienLaurentt/Galopins-Next-V2'
        />
      </div>
    </div>
  </Section>
  )
}

export default Projets

