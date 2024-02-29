import DownloadButton from "@/components/Button/DownloadButton/DownloadButton";
import Section from "@/components/Section/Section";
import Image from "next/image";
import HeroImg from "../../../public/images/HeroImg.svg"
const CV = `/pdf/CV.pdf`;

const Hero = () => {
  return (
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
  );
};

export default Hero;
