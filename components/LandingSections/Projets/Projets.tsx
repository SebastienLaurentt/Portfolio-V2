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
    <SectionHeader title="Mes dernières" titleHighlight="réalisations" />
    <div className="flex flex-col ">
      <div className="xl:flex xl:gap-x-8">
        <ProjectCard
          src={Stash}
          alt="Impression d'écran de la page d'accueil du Projet Stash"
          projectTitle="Stash"
          projectDescription="Agence de web design"
        />
        <ProjectCard
          src={Codit}
          alt="Impression d'écran de la page d'accueil du Projet Codit"
          projectTitle="Codit"
          projectDescription="Réseau social pour développeurs"
          classname="xl:mt-64"
        />
      </div>
      <div className="xl:flex xl:gap-x-8">
        <ProjectCard
          src={Portfolio}
          alt="Impression d'écran de la page d'accueil de mon Portfolio"
          projectDescription="Mon portfolio personnel"
          projectTitle="Portfolio"
        />
        <ProjectCard
          src={Galopins}
          alt="Impression d'écran de la page d'accueil du Projet Galopins"
          projectTitle="Galopins"
          projectDescription="Club de randonnée"
          classname="xl:mt-64"
        />
      </div>
    </div>
  </Section>
  )
}

export default Projets