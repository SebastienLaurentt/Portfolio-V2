import ContactForm from "@/components/ContactForm/ContactForm";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Contact = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Des questions ? Contactez-moi !" />
      <ContactForm />
    </Section>
  );
};

export default Contact;

