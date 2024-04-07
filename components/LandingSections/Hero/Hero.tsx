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
      classname="min-h-screen p-0 flex flex-row justify-around uppercase"
    >
      {/* Text Hero */}
      <div className="mb-16 mt-24 flex w-1/2 flex-col justify-end">
        <div>
          <h1 className="">
            Web <br /> Developer{" "}
          </h1>
        </div>
        <div className="mt-12">
          <Image src={HeroImg} alt="Logo Galopins" className=" w-4/5" />
        </div>
      </div>

      <div className="mb-16 flex w-1/2 flex-col justify-end text-right">
        <span className="mb-4 text-2xl leading-8">
          Des interfaces esthétiques sans impacter l expérience utilisateur{" "}
        </span>
        <span className="m-0 p-0 font-extrabold text-primary-foreground xl:text-11xl xl:leading-[96px]">
          Sebastien <br /> Laurent{" "}
        </span>
      </div>

      {/* SVG Hero */}
    </Section>
  );
};

export default Hero;
