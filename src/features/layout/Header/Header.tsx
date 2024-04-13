"use client";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../../../theme/ThemeToggle";
import { gsap } from 'gsap';

const Bebas = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    //  Define when Header is visible
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

  useEffect(() => {
    // Animation pour la fleche
    gsap.fromTo('#header', { opacity: 0 }, { opacity: 1, duration: 1, delay:1.5 });

    
    
  }, []); // Déclencher l'effet une seule fois au montage du composant


  return (
    <header id="header"
      className={`fixed top-0 left-0 w-full z-20 bg-background 2xl:bg-transparent transition-transform duration-700 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 xl:mx-auto py-4 lg:py-6">
        <span className={`${Bebas.className} text-md text-tertiary-foreground`}>
          SÉBASTIEN.LAURENT
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
