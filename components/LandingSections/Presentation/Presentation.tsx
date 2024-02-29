import Section from '@/components/Section/Section'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import React from 'react'

const Presentation = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
    <SectionHeader
      title="De la recherche au"
      titleHighlight="développement"
    />
    <div className="text-md md:text-xl lg:text-3xl xl:text-4xl leading-8 md:leading-[48px] lg:leading-[64px] xl:leading-[72px] text-secondary-foreground">
      Après un doctorat en{" "}
      <span className="text-tertiary-foreground"> Sciences Cognitives</span>{" "}
      je me suis tourné vers le développement web. Ce choix s&apos;explique
      par la volonté d&apos;utiliser ma compréhension du
      <span className="text-tertiary-foreground"> cerveau humain</span> dans
      un secteur qui m&apos;intéresse particulièrement, celui du{" "}
      <span className="text-tertiary-foreground"> numérique</span>. Ainsi,
      de manière autodidacte mais aussi par le biais d&apos;une formation
      intensive j&apos;explore ce nouvel environnement. J&apos;adore
      découvrir et apprendre à réaliser de{" "}
      <span className="text-tertiary-foreground">
        nouvelles fonctionnalités
      </span>{" "}
      pouvant améliorer l&apos;expérience des utilisateurs.
    </div>
  </Section>
  )
}

export default Presentation