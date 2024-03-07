"use client";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import NextJsIcon from "@/components/SvgIcons/NextJsIcon/NextJsIcon";
import NodeJsIcon from "@/components/SvgIcons/NodeJsIcon/NodeJsIcon";
import ReactIcon from "@/components/SvgIcons/ReactIcon/ReactIcon";
import TailwindIcon from "@/components/SvgIcons/Tailwind/Tailwind";
import TypeScriptIcon from "@/components/SvgIcons/TypeScriptIcon/TypeScriptIcon";
import WordPressIcon from "@/components/SvgIcons/Wordpress/Wordpress";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const fillColor = "hsl(var(--primary-foreground))";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Mes compétences techniques" />
      <div
        ref={sectionRef}
        className="flex flex-col  gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-x-4"
      >
        <div className="flex justify-center">
          <div
            className={`skillsIcon ${
              isVisible
                ? "opacity-100 transition-opacity duration-200 "
                : "opacity-0 transition-opacity"
            }`}
          >
            <NextJsIcon fillColor={fillColor} />
          </div>
        </div>
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <div
            className={`skillsIcon ${
              isVisible
                ? "opacity-100 transition-opacity duration-500 "
                : "opacity-0 transition-opacity"
            }`}
          >
            <TypeScriptIcon fillColor={fillColor} />
          </div>
          <div
            className={`skillsIcon ${
              isVisible
                ? "opacity-100 transition-opacity duration-1000 "
                : "opacity-0 transition-opacity"
            }`}
          >
            <TailwindIcon fillColor={fillColor} />
          </div>
          <div
            className={`skillsIcon ${
              isVisible
                ? "opacity-100 transition-opacity duration-500 "
                : "opacity-0 transition-opacity"
            }`}
          >
            <ReactIcon fillColor={fillColor} />
          </div>
        </div>
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <div
            className={`skillsIcon ${
              isVisible
                ? "opacity-100 transition-opacity duration-1000 "
                : "opacity-0 transition-opacity"
            }`}
          >
            <WordPressIcon fillColor={fillColor} />
          </div>
          <div
            className={`skillsIcon ${
              isVisible
                ? "opacity-100 transition-opacity duration-1000 "
                : "opacity-0 transition-opacity"
            }`}
          >
            <NodeJsIcon fillColor={fillColor} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
