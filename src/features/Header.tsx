import React from "react";
import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {
  return (
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 bg-background">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h1 className="text-2xl font-bold mr-auto">Githread</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};


