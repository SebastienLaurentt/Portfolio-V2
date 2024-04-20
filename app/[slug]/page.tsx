"use client";

import ProjectCardLinks from "@/components/ProjectCardLinks/ProjectCardLinks";
import projectsData from "@/data/projectsData";
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

  return (
    <div className=" flex w-full flex-col px-6 py-20 md:px-10 lg:pt-36 xl:h-screen  xl:flex-row xl:items-center xl:px-16 ">
      {/* Textual Infos */}
      <div className="flex flex-col justify-around py-8 xl:h-full xl:w-1/3 xl:justify-around 2xl:px-4">
        {/* First Div : Name and Date  */}
        <div>
          <h2 className="text-left text-4xl md:text-6xl lg:text-8xl xl:flex-col xl:text-8xl xl:leading-[68px] 2xl:text-11xl 2xl:leading-[88px]">
            {project.name}
          </h2>
        </div>

        {/* Second Div : Description, Tech Stack and Links */}
        <div className="flex flex-col gap-y-2 2xl:gap-y-4">
          {/* Description */}
          <div>
            <p className="w-[280px] text-lg leading-6 md:w-[480px] md:text-xl md:leading-7 lg:w-[540px] lg:leading-8 xl:w-[300px] xl:text-lg xl:leading-5 2xl:w-[400px]  2xl:text-xl 2xl:leading-6">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <ul className="flex flex-row gap-x-4 2xl:text-md">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.siteHref || project.githubHref ? (
            <div>
              <ProjectCardLinks
                siteHref={project.siteHref}
                githubHref={project.githubHref}
              />
            </div>
          ) : null}
        </div>

        {/* Third Block : Textuals Images Related Infos */}
        <div className="hidden flex-row items-end justify-between text-primary-foreground xl:flex">
          <div className="text-xl md:text-2xl lg:text-4xl  2xl:text-7xl">
            <span>{currentIndex + 1}</span>
            <p className="text-xl md:text-2xl lg:text-4xl 2xl:text-7xl">
              {project.images[currentIndex].description}
            </p>
          </div>
          <span>
            <MoveDown className="size-16 dark:text-white md:size-20 lg:size-24 xl:size-28 2xl:size-32 " />
          </span>
        </div>
      </div>

      {/* Images */}
      <div className="hidden xl:block xl:w-2/3 2xl:pr-4">
        <Image
          src={project.images[currentIndex].src}
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="xl:hidden">
        <ul className="flex flex-col gap-y-8">
          {project.images.map((image, index) => (
            <li key={index}>
              <span className="text-md">{image.description}</span>
              <Image src={image.src} alt="" className="rounded-lg" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}