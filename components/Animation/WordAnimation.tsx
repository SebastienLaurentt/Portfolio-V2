"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p ref={container} className="paragraph">
      {words.map((word: string, i: number) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

import { ReactNode } from "react";

const Word = ({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="wordShadow">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
