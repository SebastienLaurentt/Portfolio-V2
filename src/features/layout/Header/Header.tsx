import { BrainCircuit } from "lucide-react";
import { ThemeToggle } from "../../../theme/ThemeToggle";

export function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 2xl:max-w-[1400px] xl:mx-auto py-6 lg:py-6">
        <BrainCircuit />
        <ThemeToggle />
      </div>
    </header>
  );
}
