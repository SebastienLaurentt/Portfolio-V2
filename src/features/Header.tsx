import React from "react";
import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between">
        <h1 className="">Sébastien Laurent </h1>
        <ThemeToggle />
      </div>
    </header>
  );
};


