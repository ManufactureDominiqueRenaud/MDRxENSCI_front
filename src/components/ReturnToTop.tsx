"use client";

import { LucideArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

function ReturnToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-4 z-50 transition-all duration-300",
        isScrolled ? "opacity-100 right-4" : "opacity-0 right-[-100px]"
      )}>
      <LucideArrowUp />
    </Button>
  );
}

export default ReturnToTop;
