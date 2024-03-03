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

      <ParagraphAnimaton content="En tant que développeur web, je m'efforce d'intégrer les connaissances acquises sur le fonctionnement du cerveau au cours de mes expériences en recherche. Mon objectif est de concilier une esthétique attrayante avec une expérience utilisateur fluide." />
    </Section>
  );
};

export default Presentation;
