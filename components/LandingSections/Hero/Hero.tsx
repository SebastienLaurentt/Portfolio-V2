"use client";

import Section from "@/components/Section/Section";
import { gsap } from "gsap";
import { MoveDown } from "lucide-react";
import {} from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import HeroImg from "../../../public/images/HeroImg.svg";

const Hero = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Hero Title Animation
    gsap.fromTo(
      "#hero-text",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // Hero Name Animation
    gsap.fromTo(
      "#hero-name",
      { x: screenWidth < 1280 ? -30 : 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1}
    );

    // Hero Description Animation
    gsap.fromTo(
      "#hero-description",
      { x: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.6 }
    );

    // Img Hero Animation
    gsap.fromTo(
      "#hero-image",
      { x: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.6}
    );

    // Arrow Hero Animation
    gsap.fromTo(
      "#hero-arrow",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.8 }
    );
  }, []);

  return (
    <Section
      marginBottom={true}
      marginTop={false}
      classname="min-h-screen  flex flex-col xl:flex-row xl:justify-around uppercase"
    >
      {/* Text Hero */}
      <div className="mt-24 w-full lg:mt-40 xl:mb-16 xl:mt-28 xl:flex xl:w-1/2 xl:flex-col xl:justify-end">
        <div>
          <h1 id="hero-text" className="mb-2">
            Web <br /> Developer{" "}
          </h1>
        </div>
        <span
          id="hero-description"
          className=" block w-[280px] text-lg leading-6 md:w-[320px] md:text-xl md:leading-7 lg:w-[460px] lg:text-3xl lg:leading-9 xl:hidden"
        >
          Des interfaces esthetiques sans impacter l&apos;experience utilisateur{" "}
        </span>
        <div id="hero-image" className="mt-12 xl:mt-4 2xl:mt-12">
          <Image
            src={HeroImg}
            alt="Logo Galopins"
            className="pr-2 md:w-[520px] lg:w-[700px] xl:w-4/5 xl:pr-0"
          />
        </div>
      </div>

      <div className=" mt-12 flex items-center justify-between  xl:mb-16 xl:mt-0 xl:w-1/2 xl:flex-col xl:items-end xl:justify-end xl:text-right">
        <span
          id="hero-description"
          className="hidden xl:mb-4 xl:block xl:max-w-[400px] xl:text-2xl xl:leading-8"
        >
          Des interfaces esthetiques sans impacter l&apos;experience utilisateur{" "}
        </span>
        <span
          id="hero-name"
          className="  text-6xl font-extrabold leading-[56px] text-primary-foreground md:text-8xl md:leading-[64px] lg:text-10xl lg:leading-[80px]  xl:text-12xl xl:leading-[100px]"
        >
          Sebastien <br /> Laurent{" "}
        </span>
        <span id="hero-arrow">
          <MoveDown className="size-24 dark:text-white md:size-28 lg:size-32 xl:hidden" />
        </span>
      </div>

      {/* SVG Hero */}
    </Section>
  );
};

export default Hero;
