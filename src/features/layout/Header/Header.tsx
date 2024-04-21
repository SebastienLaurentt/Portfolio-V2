"use client";
import { gsap } from "gsap";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../../../theme/ThemeToggle";
import ProjectsDropdown from "@/components/ProjectsDropdown/ProjectsDropdown";

const Bebas = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

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
    gsap.fromTo(
      "#header",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.8 }
    );
  }, []); // Déclencher l'effet une seule fois au montage du composant

  return (
    <header
      id="header"
      className={`fixed left-0 top-0 z-20 w-full bg-background transition-transform duration-700 2xl:bg-transparent ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 lg:py-6 xl:mx-auto xl:px-16">
        <span className={`${Bebas.className} text-md text-tertiary-foreground`}>
          SÉBASTIEN.LAURENT
        </span>
        <div className="flex flex-row items-center gap-x-4">
          {/* Accueil not visible in "/"" path */}
          {pathname !== "/" && (
            <Link
              href="/"
              className="text-sm text-tertiary-foreground md:text-md"
            >
              Accueil
            </Link>
          )}
          <ProjectsDropdown />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
