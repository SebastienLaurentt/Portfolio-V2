"use client";

import Link from "next/link";
import navData from "../../../../data/navData";
import { ThemeToggle } from "../../../theme/ThemeToggle";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="">
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-6 lg:py-6">
        <span className="">Sébastien Laurent </span>
        <nav className="">
          <ul className="flex gap-x-4 border py-3 px-1 rounded-full">
            {navData.map((link) => (
              <li key={link.name} className="">
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? " py-2 px-4 rounded-full bg-slate-900" : "py-2 px-4"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
