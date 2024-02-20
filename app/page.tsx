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
        <div className="lg:mr-60">
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
        <div className="flex justify-center lg:justify-end mt-12 md:mt-20 lg:mt-0 lg:mr-20  ">
          <Image
            src={HeroImg}
            alt="Logo Galopins"
            className="w-4/5 md:w-3/5 lg:w-2/3  "
          />
        </div>
      </Section>

      {/* Presentation */}
      <Section marginBottom={true} marginTop={true}>
        <SectionHeader
          title="De la recherche au"
          titleHighlight="développement"
        />
        <div className="text-md md:text-xl lg:text-3xl xl:text-4xl leading-8 md:leading-[48px] lg:leading-[64px] xl:leading-[72px] text-secondary-foreground">
          Après un doctorat en <span className="text-tertiary-foreground"> Sciences Cognitives</span> je me suis tourné vers le développement
          web. Ce choix s&apos;explique par la volonté d&apos;utiliser ma compréhension du
          <span className="text-tertiary-foreground"> cerveau humain</span> dans un secteur qui m&apos;intéresse particulièrement, celui
          du <span className="text-tertiary-foreground"> numérique</span>. Ainsi, de manière autodidacte mais
          aussi par le biais d&apos;une formation intensive j&apos;explore ce nouvel
          environnement. J&apos;adore découvrir et apprendre à réaliser de <span className="text-tertiary-foreground">nouvelles
          fonctionnalités</span> pouvant améliorer l&apos;expérience des utilisateurs. 
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
