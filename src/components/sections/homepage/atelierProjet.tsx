import { StrapiAtelierProjet } from "@/lib/types";
import React from "react";

function AtelierProjet(sectionData: { data: StrapiAtelierProjet }) {
  return (
    <section
      className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] bg-[#CDDBDE] text-[#253031] text-left md:text-center"
      id="discover"
    >
      <h2 className="font-bold text-3xl lg:text-5xl marcellus-regular">
        {sectionData.data.title || "null"}
      </h2>
      <p className="mt-4 font-serif-p">
        {sectionData.data.paragraph || "null"}
      </p>
    </section>
  );
}

export default AtelierProjet;
