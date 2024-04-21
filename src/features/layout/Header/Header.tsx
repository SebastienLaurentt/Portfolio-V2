"use client";
import ProjectsDropdown from "@/components/ProjectsDropdown/ProjectsDropdown";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../../../theme/ThemeToggle";

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
    gsap.fromTo(
      "#header",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.8 }
    );
  }, []);

  return (
    <header
      id="header"
      className={`fixed left-0 top-0 z-20 w-full bg-background transition-transform duration-700 2xl:bg-transparent ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 lg:py-6 xl:mx-auto xl:px-16">
        <span className="text-md text-tertiary-foreground">
          SÉBASTIEN.LAURENT
        </span>
        <div className="flex flex-row items-center">
          <div className="mr-6 flex flex-row gap-x-2 md:mr-9 md:gap-x-3">
            {/* Accueil not visible in "/"" path */}
            {pathname !== "/" && (
              <Link
                href="/"
                className="text-md text-tertiary-foreground md:text-md"
              >
                Accueil
              </Link>
            )}
            <ProjectsDropdown />
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
