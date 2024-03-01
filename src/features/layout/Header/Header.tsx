import { BrainCircuit } from "lucide-react";
import { ThemeToggle } from "../../../theme/ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between px-6 md:px-10 xl:px-16 2xl:max-w-[1400px] xl:mx-auto py-6 lg:py-6">
        <Button variant="ghost"> <BrainCircuit /></Button>
        <Button variant="ghost"> <ThemeToggle /> </Button>
        
        
      </div>
    </header>
  );
}
