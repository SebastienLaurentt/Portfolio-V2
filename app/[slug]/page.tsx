'use client'

import projectsData from "@/data/projectsData";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projectsData[slug as keyof typeof projectsData] as {
    name: string;
    description: string;
    date: string;
    tech: string[];
    images: StaticImageData[];
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scroll down
        setCurrentIndex((prevIndex:any) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        // Scroll up
        setCurrentIndex((prevIndex:any) =>
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
    <div className=" flex h-screen flex-col px-6 py-20 md:px-10 lg:pt-36  xl:flex-row xl:items-center xl:px-16 ">
      <div className="flex h-full flex-col justify-around xl:w-[700px]">
        <div className="">
          <h2 className="mb-4 text-left">{project.name}</h2>
          <p className="xl:mb-4 xl:w-[450px] xl:text-xl">
            {project.description}
          </p>
          <span>{project.date}</span>
          <ul className="flex flex-row gap-x-6">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="">

        </div>
      </div>
      <div className="">
        <ul className=" gap-x-10 xl:flex xl:flex-row">
          <li >
            <Image
              src={project.images[currentIndex].src}
              alt=""
              width={1100}
              height={700}
              className="rounded-lg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
