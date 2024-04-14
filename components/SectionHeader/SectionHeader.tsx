'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const h2Element = h2Ref.current;

    if (h2Element) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h2Element,
          start: "top 80%", 
        },
      });

      tl.fromTo(
        h2Element,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
    }
  }, []);

  return (
    <div className="mb-20 flex justify-center text-center md:mb-28 lg:mb-36 xl:mb-44">
      <h2 ref={h2Ref}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
