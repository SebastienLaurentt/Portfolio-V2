"use client";

import Link from "next/link";
import navData from "../../../../data/navData";
import { ThemeToggle } from "../../../theme/ThemeToggle";
import { usePathname } from "next/navigation";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="">
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-6 lg:py-6">
        <span className="">Sébastien Laurent </span>
        <nav className="hidden lg:block">
          <ul className="flex gap-x-4 border py-3 px-1 rounded-full">
            {navData.map((link) => (
              <li key={link.name} className="">
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? " py-2 px-4 rounded-full bg-secondary/90" : "py-2 px-4 text-primary/70"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex">
        <ThemeToggle />
        <div className="h-8 md:h-10 lg:hidden">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        </div>
        


      </div>
    </header>
  );
}
