import Section from "@/components/Section/Section";
import { MoveDown } from "lucide-react";
import {} from "next/font/google";
import Image from "next/image";
import HeroImg from "../../../public/images/HeroImg.svg";
const CV = `/pdf/CV.pdf`;

const Hero = () => {
  return (
    <Section
      marginBottom={true}
      marginTop={false}
      classname="min-h-screen  flex flex-col xl:flex-row xl:justify-around uppercase"
    >
      {/* Text Hero */}
      <div className="mt-28 w-full lg:mt-40 xl:mb-16 xl:mt-28 xl:flex xl:w-1/2 xl:flex-col xl:justify-end">
        <div>
          <h1 className="mb-2">
            Web <br /> Developer{" "}
          </h1>
        </div>
        <span className=" block w-[280px] text-lg leading-6 md:w-[320px] md:text-xl md:leading-7 lg:w-[460px] lg:text-3xl lg:leading-9 xl:hidden">
          Des interfaces esthetiques sans impacter l&apos;experience utilisateur{" "}
        </span>
        <div className="mt-12 xl:mt-4 2xl:mt-12">
          <Image
            src={HeroImg}
            alt="Logo Galopins"
            className="pr-2 md:w-[520px] lg:w-[700px] xl:w-4/5 xl:pr-0"
          />
        </div>
      </div>

      <div className=" mt-12 flex items-center justify-between  xl:mb-16 xl:mt-0 xl:w-1/2 xl:flex-col xl:items-end xl:justify-end xl:text-right">
        <span className="hidden xl:mb-4 xl:block xl:max-w-[400px] xl:text-2xl xl:leading-8">
          Des interfaces esthetiques sans impacter l&apos;experience utilisateur{" "}
        </span>
        <span className="  text-6xl font-extrabold leading-[56px] text-primary-foreground md:text-8xl md:leading-[64px] lg:text-10xl lg:leading-[80px]  xl:text-12xl xl:leading-[100px]">
          Sebastien <br /> Laurent{" "}
        </span>
        <span>
          <MoveDown
            className=" size-20 md:size-24 lg:size-28 xl:hidden"
            color="white"
          />
        </span>
      </div>

      {/* SVG Hero */}
    </Section>
  );
};

export default Hero;
