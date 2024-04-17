"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParagraphAnimation() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.p
      ref={container}
      className="mx-auto flex max-w-[320px] flex-wrap text-lg leading-9 text-tertiary-foreground md:max-w-[580px] md:text-2xl md:leading-[48px] lg:max-w-[800px] lg:text-4xl lg:leading-[68px] xl:max-w-[1200px] xl:text-5xl xl:leading-[72px]"
      style={{ opacity }}
    >
Originaire du domaine des neurosciences, mon but est aujourd&apos;hui  d&apos;utiliser les connaissances acquises sur le fonctionnement cerebral pour créer des applications web offrant une experience utilisateur fluide et intuitive.
    </motion.p>
  );
}
