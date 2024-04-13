"use client";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import SkillsIcon from "@/components/SkillsIcon/SkillsIcon";
import NextJsIcon from "@/components/SvgIcons/NextJsIcon/NextJsIcon";
import NodeJsIcon from "@/components/SvgIcons/NodeJsIcon/NodeJsIcon";
import ReactIcon from "@/components/SvgIcons/ReactIcon/ReactIcon";
import TailwindIcon from "@/components/SvgIcons/Tailwind/Tailwind";
import TypeScriptIcon from "@/components/SvgIcons/TypeScriptIcon/TypeScriptIcon";
import WordPressIcon from "@/components/SvgIcons/Wordpress/Wordpress";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  // Color for the svg icons
  const fillColor = "hsl(var(--primary-foreground))";

  // Intersection Observer state
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
      <SectionHeader title="Competences" />
      <div
        ref={sectionRef}
        className="flex flex-col  gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-x-4"
      >
        {/* Skills SVG Lists */}
        {/* First Row - 1 Icon */}
        <div className="flex justify-center">
          <SkillsIcon
            isVisible={isVisible}
            fillColor={fillColor}
            hoverFillColor="#68a063"
            Icon={NodeJsIcon}
            visibleClassname="duration-200"
            skillName="Node Js"
          />
        </div>

        {/* Second Row - 3 Icons */}
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <SkillsIcon
            isVisible={isVisible}
            fillColor={fillColor}
            hoverFillColor="#06b6d4"
            Icon={TailwindIcon}
            visibleClassname="duration-500"
            skillName="Tailwind"
          />
          <SkillsIcon
            isVisible={isVisible}
            fillColor={fillColor}
            hoverFillColor="#358ef1"
            Icon={TypeScriptIcon}
            visibleClassname="duration-1000"
            skillName="TypeScript"
          />
          <SkillsIcon
            isVisible={isVisible}
            fillColor={fillColor}
            hoverFillColor="#06b6d4"
            Icon={ReactIcon}
            visibleClassname="duration-500"
            skillName="React"
          />
        </div>

        {/* Third Row - 2 Icons */}
        <div className="flex justify-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <SkillsIcon
            isVisible={isVisible}
            fillColor={fillColor}
            hoverFillColor="#6B7280"
            Icon={WordPressIcon}
            visibleClassname="duration-1000"
            skillName="WordPress"
          />
          <SkillsIcon
            isVisible={isVisible}
            fillColor={fillColor}
            hoverFillColor="#6B7280"
            Icon={NextJsIcon}
            visibleClassname="duration-1000"
            skillName="Next Js"
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
