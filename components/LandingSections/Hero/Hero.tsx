import Section from "@/components/Section/Section";
import {} from "next/font/google";
import Image from "next/image";
import HeroImg from "../../../public/images/HeroImg.svg";
const CV = `/pdf/CV.pdf`;

const Hero = () => {
  return (
    <Section
      marginBottom={false}
      marginTop={false}
      classname="min-h-screen my-16"
    >
      {/* Text Hero */}
      <div className="">
        <h1>WEB DEVELOPPEUR </h1>
        <span className="">
          Bienvenue sur mon portfolio !
        </span>
      </div>

      {/* SVG Hero */}
      {/* <div className="">
        <Image
          src={HeroImg}
          alt="Logo Galopins"
          className="mt-16 md:mx-auto md:mt-20 md:w-3/4 lg:mt-20 lg:w-2/3 xl:mr-0 xl:mt-0 xl:w-3/4 "
        />
      </div> */}
    </Section>
  );
};

export default Hero;
