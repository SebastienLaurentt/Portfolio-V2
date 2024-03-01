'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";
import { ThemeToggle } from "../../../theme/ThemeToggle";

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos, visible]);

  return (
    <header className={`fixed top-0 left-0 w-full z-10  transition-transform duration-700 ${visible ? '' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 xl:mx-auto py-6 lg:py-6">
        <Button variant="icons" size="icons">
          <BrainCircuit />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
