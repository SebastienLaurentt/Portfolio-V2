import DownloadButton from "@/components/Button/DownloadButton/DownloadButton";
import Section from "@/components/Section/Section";
import Image from "next/image";

import HeroImg from "../public/images/HeroImg.svg";
const CV = `/pdf/CV.pdf`;

export default function Home() {
  return (
    <main className="mb-20 md:mb-24 lg:mb-32">
      {/* Hero */}
      <Section marginBottom={true} marginTop={true} classname=" flex flex-col lg:flex-row items-center">
        <div className="lg:w-3/5">
          <h1>
            Sébastien Laurent <br /> <span className="text-tertiary-foreground">Développeur Web
              </span>{" "}
          </h1>
          <DownloadButton
            href={CV}
            fileName="Sebastien_Laurent_CV.pdf"
            linkName="Télécharger mon CV"
            classname="mt-4 flex justify-center lg:justify-start"
          />
        </div>
        <div className="lg:w-2/5 mt-8 lg:mt-0">
          <Image
            src={HeroImg}
            alt="Logo Galopins"
            className=""
          />
        </div>
      </Section>

      {/* Presentation */}
      <Section marginBottom={true} marginTop={true}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          corrupti praesentium dolore assumenda, provident nam, reprehenderit
          quibusdam a repudiandae autem voluptatum porro cumque nihil possimus
          ullam soluta? Esse vitae distinctio rerum repellendus. Expedita
          consequatur unde amet nesciunt placeat omnis atque nisi, id totam
          veniam porro cupiditate eum, cum quis culpa?
        </div>
      </Section>

      {/* Skills */}
      <Section marginBottom={true} marginTop={true}>
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
