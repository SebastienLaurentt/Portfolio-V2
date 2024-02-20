import DownloadButton from "@/components/Button/DownloadButton/DownloadButton";
import Section from "@/components/Section/Section";
import Image from "next/image";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import HeroImg from "../public/images/HeroImg.svg";
const CV = `/pdf/CV.pdf`;

export default function Home() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      {/* Hero */}
      <Section
        marginBottom={true}
        marginTop={true}
        classname=" flex flex-col items-center  "
      >
        <div className="lg:mr-40">
          <h1>
            Sébastien Laurent <br />{" "}
            <span className="text-tertiary-foreground">Développeur Web</span>{" "}
          </h1>
          <DownloadButton
            href={CV}
            fileName="Sebastien_Laurent_CV.pdf"
            linkName="Télécharger mon CV"
            classname="mt-4 flex justify-center lg:justify-start"
          />
        </div>
        <div className="mt-12 md:mt-20 lg:mt-0 lg:ml-40 ">
          <Image src={HeroImg} alt="Logo Galopins" className="w-4/5 md:w-3/5 lg:w-4/5 mx-auto" />
        </div>
      </Section>

      {/* Presentation */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader
          title="De la recherche au"
          titleHighlight="développement"
        />
        <div className="text-md lg:text-2xl xl:text-4xl leading-8 lg:leading-[44px] xl:leading-[60px] text-secondary-foreground/80">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="text-secondary-foreground">adipisicing</span> elit.
          Sequi corrupti{" "}
          <span className="text-secondary-foreground">praesentium</span> dolore
          assumenda, provident nam, reprehenderit quibusdam a{" "}
          <span className="text-secondary-foreground">repudiandae</span> autem
          voluptatum porro cumque nihil possimus ullam soluta? Esse vitae
          distinctio rerum repellendus. Expedita
          <span className="text-secondary-foreground"> consequatur</span> unde
          amet nesciunt placeat omnis atque nisi, id totam veniam porro{" "}
          <span className="text-secondary-foreground">cupiditate</span> eum, cum
          quis culpa?
        </div>
      </Section>

      {/* Skills */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader title="Des projets" titleHighlight="variés" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          corrupti praesentium dolore assumenda, provident nam, reprehenderit
          quibusdam a repudiandae autem voluptatum porro cumque nihil possimus
          ullam soluta? Esse vitae distinctio rerum repellendus. Expedita
          consequatur unde amet nesciunt placeat omnis atque nisi, id totam
          veniam porro cupiditate eum, cum quis culpa?
        </div>
      </Section>

      {/* Contact */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader title="Des compétences" titleHighlight="transverses" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          corrupti praesentium dolore assumenda, provident nam, reprehenderit
          quibusdam a repudiandae autem voluptatum porro cumque nihil possimus
          ullam soluta? Esse vitae distinctio rerum repellendus. Expedita
          consequatur unde amet nesciunt placeat omnis atque nisi, id totam
          veniam porro cupiditate eum, cum quis culpa?
        </div>
      </Section>
    </main>
  );
}
