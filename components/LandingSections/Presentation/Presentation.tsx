import ParagraphAnimaton from "@/components/Animation/ParagraphAnimation";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Presentation = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader
        title="De la recherche au développement"
      />
      <div className=" md:px-2 text-center"><ParagraphAnimaton /></div>
      
    </Section>
  );
};

export default Presentation;
