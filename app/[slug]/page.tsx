"use client";

import ProjectCardLinks from "@/components/ProjectCardLinks/ProjectCardLinks";
import projectsData from "@/data/projectsData";
import { gsap } from "gsap";
import { MoveDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type ProjectData = {
  name: string;
  description: string;
  date: string;
  tech: string[];
  siteHref?: string;
  githubHref?: string;
  images: {
    src: StaticImageData;
    description: string;
  }[];
};

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projectsData[
    slug as keyof typeof projectsData
  ] as ProjectData;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scroll down
        setCurrentIndex((prevIndex: any) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        // Scroll up
        setCurrentIndex((prevIndex: any) =>
          prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex, project.images.length]);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Project Title Animation
    gsap.fromTo(
      "#project-title",
      { x: screenWidth < 1280 ? 0 : -30, y: screenWidth < 1280 ? -30 : 0, opacity: 0 },
      { x: 0, opacity: 1, y:0, duration: 1 }
    );

    // Project Description Animation
    gsap.fromTo(
      "#project-description",
      { x: screenWidth < 1280 ? 0 : -30, y: screenWidth < 1280 ? -30 : 0, opacity: 0 },
      { x: 0, opacity: 1, y:0, duration: 1 }
    );

    // Project Tech Stack Animation
    gsap.fromTo(
      "#project-tech",
      { x: screenWidth < 1280 ? 0 : -30, y: screenWidth < 1280 ? -30 : 0, opacity: 0 },
      { x: 0, opacity: 1, y:0, duration: 1 }
    );

    // Project Links Animation
    gsap.fromTo(
      "#project-links",
      { x: screenWidth < 1280 ? 0 : -30, y: screenWidth < 1280 ? -30 : 0, opacity: 0 },
      { x: 0, opacity: 1, y:0, duration: 1 }
    );

    // Project Images Text Animation
    gsap.fromTo(
      "#project-images-text",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // Project Mobile Images Animation
    gsap.fromTo(
      "#project-imageMobile",
      { x: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.6 }
    );

    // Project Desktop Images Animation
    gsap.fromTo(
      "#project-imageDesk",
      { x: 0, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.6 }
    );
  }, []);

  return (
    <div className=" flex w-full flex-col px-6 py-20  md:px-10 lg:pt-36 xl:h-screen  xl:flex-row xl:items-center xl:px-16 ">
      {/* Textual Infos */}
      <div className="flex flex-col justify-around pb-20 pt-28 lg:pb-24 lg:pt-32 xl:h-full xl:w-2/5  xl:justify-between xl:py-20 xl:pr-4 2xl:w-1/3 2xl:px-4 ">
        {/* First Div : Name and Date  */}
        <div>
          <h2
            id="project-title"
            className="mb-4 flex justify-between text-left text-6xl md:mb-6 md:text-7xl lg:text-9xl xl:mb-0 xl:flex-row xl:text-8xl xl:leading-[68px] 2xl:flex-col 2xl:text-10xl 2xl:leading-[80px]"
          >
            <span>{project.name}</span>
            <span>{project.date}</span>
          </h2>
        </div>

        {/* Second Div : Description, Tech Stack and Links */}
        <div className="flex flex-col gap-y-2 md:gap-y-3 xl:gap-y-2">
          {/* Description */}
          <div id="project-description">
            <p className="w-[320px] text-xl leading-7 md:w-[480px] md:text-2xl md:leading-8 lg:w-[540px] lg:text-3xl lg:leading-9 xl:w-[300px] xl:text-lg xl:leading-6 2xl:w-[400px]  2xl:text-xl 2xl:leading-7">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div id="project-tech">
            <ul className="flex flex-row gap-x-4 text-md text-primary-foreground md:text-lg lg:text-xl xl:text-md">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.siteHref || project.githubHref ? (
            <div id="project-links">
              <ProjectCardLinks
                siteHref={project.siteHref}
                githubHref={project.githubHref}
              />
            </div>
          ) : null}
        </div>

        {/* Third Block : Textuals Images Related Infos */}
        <div
          id="project-images-text"
          className="hidden flex-row items-end justify-between text-primary-foreground xl:flex"
        >
          <div className="text-xl md:text-2xl lg:text-4xl  2xl:text-7xl">
            <span>{currentIndex + 1}</span>
            <p className="text-xl md:text-2xl lg:text-4xl 2xl:text-7xl">
              {project.images[currentIndex].description}
            </p>
          </div>
          <span>
            <MoveDown className="size-16 dark:text-white md:size-20 lg:size-24  2xl:size-28 " />
          </span>
        </div>
      </div>

      {/* Images */}
      <div
        id="project-imageDesk"
        className="hidden xl:block xl:w-3/5 2xl:w-2/3 2xl:pr-4"
      >
        <Image
          src={project.images[currentIndex].src}
          alt=""
          className="rounded-lg"
        />
      </div>
      <div id="project-imageMobile" className="xl:hidden">
        <ul className="flex flex-col gap-y-8">
          {project.images.map((image, index) => (
            <li key={index}>
              <span className="text-lg text-primary-foreground md:text-xl lg:text-2xl">
                {image.description}
              </span>
              <Image src={image.src} alt="" className="mt-1 rounded-lg" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
