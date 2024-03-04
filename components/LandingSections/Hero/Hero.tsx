import DownloadButton from "@/components/Button/DownloadButton/DownloadButton";
import Section from "@/components/Section/Section";
import Image from "next/image";
import HeroImg from "../../../public/images/HeroImg.svg";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {  } from 'next/font/google'
const CV = `/pdf/CV.pdf`;




const Hero = () => {
  return (
    <Section
      marginBottom={false}
      marginTop={false}
      classname=" flex flex-col xl:flex-row justify-center items-center min-h-screen xl:mx-16 2xl:mx-auto"
    >
      <div className="">
        <h1 >
          Sébastien Laurent <br /> Développeur Web
        </h1>
        <DownloadButton
          href={CV}
          fileName="Sebastien_Laurent_CV.pdf"
          linkName="Télécharger CV"
          classname="mt-4 flex justify-center lg:justify-start"
        />
      </div>
      <div className="">
        <Image
          src={HeroImg}
          alt="Logo Galopins"
          className="mt-16 md:mt-20 lg:mt-4 md:w-3/4 lg:w-2/3 xl:w-3/4 md:mx-auto xl:mr-0 "
        />
      </div>
      <BackgroundBeams />
    </Section>
  );
};

export default Hero;
