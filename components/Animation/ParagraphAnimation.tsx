"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParagraphAnimation({ content }: { content: any }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.p
      ref={container}
      className="flex flex-wrap text-tertiary-foreground text-md md:text-xl lg:text-3xl xl:text-4xl leading-8 md:leading-[48px] lg:leading-[64px] xl:leading-[72px]"
      style={{ opacity }}
    >
      {content}
    </motion.p>
  );
}
