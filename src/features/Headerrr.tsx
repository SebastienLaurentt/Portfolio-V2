import React from "react";
import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-6 lg:py-6">
        <span className="">Sébastien Laurent </span>
        <nav>
          <ul className="flex gap-x-1 border p-1 rounded-full">
            <li className="border p-2 rounded-full">Histoire</li>
            <li className="border p-2 rounded-full">Projets</li>
            <li className="border p-2 rounded-full">Skills</li>
            <li className="border p-2 rounded-full">Contact</li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};


