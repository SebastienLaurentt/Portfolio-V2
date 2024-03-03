import ParagraphAnimaton from "@/components/Animation/ParagraphAnimation";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Presentation = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader
        title="De la recherche au"
        titleHighlight="développement"
      />

      <ParagraphAnimaton content="Je suis un développeur web qui vise à intégrer les connaissances sur le cerveau que j'ai apprise durant mes expériences dans la recherche. Mon objectif est de trouver l'équilibre entre une interface attractive et une expérience utilisateur fluide." />
    </Section>
  );
};

export default Presentation;
