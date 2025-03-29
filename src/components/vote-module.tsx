"use client";

import { useParams } from "next/navigation";
import React from "react";
import DraggableZoneComponent from "./draggable-zone-vote";

function VoteModule() {
  const { locale } = useParams();

  return (
    <div className="fixed top-20 right-6 z-[60] bg-[#CDDBDE] text-[#253031] border border-[#253031]/20 rounded-md w-[300px]">
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-lg font-bold">
          {locale === "fr" ? "Votre sélection" : "Your selection"}
        </h2>
      </div>
      <div className="w-2/3 h-px mx-auto bg-[#253031]/20 rounded-full mb-4" />
      <div className="flex flex-col items-center justify-center px-4 pb-4">
        <DraggableZoneComponent locale={locale} />
      </div>
    </div>
  );
}

export default VoteModule;
