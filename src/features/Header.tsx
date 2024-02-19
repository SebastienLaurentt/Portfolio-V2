import React from "react";
import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-4 lg:py-6">
        <span className="">Sébastien Laurent </span>
        <ThemeToggle />
      </div>
    </header>
  );
};


