import ParagraphAnimaton from "@/components/Animation/ParagraphAnimation";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Presentation = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="De la recherche au développement" />
      <div className=" text-center md:px-2">
        <ParagraphAnimaton />
      </div>
    </Section>
  );
};

export default Presentation;
