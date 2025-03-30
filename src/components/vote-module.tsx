"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import DraggableZoneComponent from "./draggable-zone-vote";
import { cn } from "@/lib/utils";
import {
  LucideChevronsLeft,
  LucideChevronsRight,
  LucidePiggyBank,
  LucidePin,
} from "lucide-react";
import { useIsPinnedVoteModule } from "@/store/use-pinned-vote-module";
import { useSelectedProjectsToVote } from "@/store/use-selected-projects-to-vote";
import { useAtom } from "jotai";

function VoteModule() {
  const { locale } = useParams();
  const [isPinned, setIsPinned] = useIsPinnedVoteModule();
  const [items, setItems] = useAtom(useSelectedProjectsToVote);

  if (items.length === 0) {
    return null; // Don't render the component if there are no selected projects
  }

  return (
    <>
      <div
        className={cn(
          isPinned ? "fixed top-20 right-6" : "fixed top-20 -right-[100%]",
          "z-[60] bg-white text-[#253031] border border-[#253031]/20 rounded-md w-[400px] transition-all duration-500 ease-in-out"
        )}
      >
        <div className="flex items-center justify-center p-4">
          <h2 className="text-lg font-bold">
            {locale === "fr" ? "Votre sélection" : "Your selection"}
          </h2>
          <LucideChevronsRight
            className="cursor-pointer size-6 absolute right-4"
            onClick={() => setIsPinned(!isPinned)}
          />
        </div>
        <div className="w-2/3 h-px mx-auto bg-[#253031]/20 rounded-full mb-4" />
        <div className="flex flex-col items-center justify-center px-4 pb-4">
          <DraggableZoneComponent locale={locale} />
        </div>
      </div>
      <div
        className={cn(
          isPinned ? "fixed top-20 -right-[100%]" : "fixed top-20 right-0",
          "flex flex-col gap-4 p-2 hover:pr-6 z-[60] bg-[#ffffff] text-[#253031] border border-[#253031]/20 rounded-l-md transition-all duration-500 ease-in-out cursor-pointer"
        )}
        onClick={() => setIsPinned(!isPinned)}
      >
        <LucideChevronsLeft className="cursor-pointer size-4" />
        <p className="[writing-mode:vertical-lr]">
          {locale === "fr"
            ? "Votre sélection de projets"
            : "Your project selection"}
        </p>
        <LucideChevronsLeft className="cursor-pointer size-4" />
      </div>
    </>
  );
}

export default VoteModule;
