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
      className="mx-auto flex max-w-[330px] flex-wrap text-lg leading-9 text-tertiary-foreground md:max-w-[600px] md:text-2xl md:leading-[48px] lg:max-w-[800px] lg:text-4xl lg:leading-[68px] xl:max-w-[1200px] xl:text-5xl xl:leading-[72px]"
      style={{ opacity }}
    >
      En tant que developpeur web, je m&apos;efforce d&apos;integrer les
      connaissances acquises sur le fonctionnement du cerveau au cours de mes
      experiences en recherche. Mon objectif est de concilier une esthetique
      attrayante avec une experience utilisateur fluide.
    </motion.p>
  );
}
