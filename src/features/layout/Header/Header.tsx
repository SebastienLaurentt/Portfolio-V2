"use client";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../../../theme/ThemeToggle";

const Bebas = Bebas_Neue({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos, visible]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 bg-background transition-transform duration-700 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 xl:mx-auto py-4 lg:py-6">
        <span
          className={`${Bebas.className} text-md text-tertiary-foreground`}
        >
          SÉBASTIEN.LAURENT
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}



