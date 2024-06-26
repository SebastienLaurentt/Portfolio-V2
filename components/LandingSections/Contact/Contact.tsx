import ContactForm from "@/components/ContactForm/ContactForm";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Contact = () => {
  return (
    <Section marginBottom={false} marginTop={true}>
      <SectionHeader title="Contact" />
      <div className="md:px-8 lg:px-20 xl:px-60">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
