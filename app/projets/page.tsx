import PageTitle from "@/components/PageTitle/PageTitle";
import Section from "@/components/Section/Section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes projets",
  description:
    "Pour en savoir plus sur les projets que j'ai réalisé",
};

function Projets() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      <PageTitle
        title="Mes projets"
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

export default Projets;
