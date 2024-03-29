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
      className="flex flex-wrap text-md leading-8 text-tertiary-foreground md:text-xl md:leading-[48px] lg:text-3xl lg:leading-[64px] xl:text-4xl xl:leading-[72px]"
      style={{ opacity }}
    >
      En tant que développeur web, je m&apos;efforce d&apos;intégrer les
      connaissances acquises sur le fonctionnement du cerveau au cours de mes
      expériences en recherche. Mon objectif est de concilier une esthétique
      attrayante avec une expérience utilisateur fluide.
    </motion.p>
  );
}
