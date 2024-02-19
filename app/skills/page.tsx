import PageTitle from "@/components/PageTitle/PageTitle";
import Section from "@/components/Section/Section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes skills",
  description:
    "Pour en savoir plus sur mes compétences",
};

function Skills() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <PageTitle
        title="Mes skills"
        titleDescription=""
      />
      <Section marginBottom={true} marginTop={false} classname="">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus
          perspiciatis dolorem porro expedita dolores. Natus molestias enim
          eligendi voluptatibus.
        </div>
      </Section>
    </main>
  );
}

export default Skills;
