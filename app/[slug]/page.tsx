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
    <div className=" flex h-screen w-full flex-col px-6 py-20 md:px-10 lg:pt-36  xl:flex-row xl:items-center xl:px-16 ">
      
      {/* Textual Infos */}
      <div className="flex h-full flex-col justify-around py-8 xl:w-1/3 xl:justify-around 2xl:px-4">
        <div className="">
          {/* Name and Date */}
          <h2 className="mb-2 flex justify-between text-left text-4xl md:text-6xl lg:text-8xl xl:flex-col xl:text-8xl xl:leading-[68px] 2xl:mb-4 2xl:text-11xl 2xl:leading-[88px]">
            <span>{project.name}</span>
            <span>{project.date}</span>
          </h2>

          {/* Description */}
          <p className=" mb-2 w-[280px] text-lg leading-6 md:w-[480px] md:text-xl md:leading-7 lg:w-[540px] lg:text-2xl lg:leading-8 xl:w-[350px] xl:leading-6 2xl:mb-4 2xl:w-[450px] 2xl:text-xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div>
            <span className="border-b-2">Tech Stack</span>
            <ul className="flex flex-row gap-x-6">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.siteHref || project.githubHref ? (
            <div>
              <span className="border-b-2">Liens</span>
              <ProjectCardLinks
                siteHref={project.siteHref}
                githubHref={project.githubHref}
              />
            </div>
          ) : null}
        </div>

        {/* Textuals Images Related Infos */}
        <div className="flex flex-row items-end justify-between text-primary-foreground">
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
      <div className="xl:w-2/3 2xl:pr-4">
        <Image
          src={project.images[currentIndex].src}
          alt=""
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
