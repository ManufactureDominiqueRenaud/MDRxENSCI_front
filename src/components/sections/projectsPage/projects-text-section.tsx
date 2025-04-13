import { cn } from "@/lib/utils";
import Image from "next/image";

export type StrapiProjectTextSection = {
  __component: "projects-components.text-section";
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  isGrayBackground: boolean;
};

function ProjectsTextSection({
  sectionData,
}: {
  sectionData: StrapiProjectTextSection;
}) {
  return (
    <section
      className={cn(
        "py-[40px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] lg:flex items-center gap-12",
        sectionData.isGrayBackground
          ? "bg-[#253031] text-[#CDDBDE]"
          : "bg-[#CDDBDE] text-[#253031]"
      )}
    >
      <div className="mt-8 text-center mx-auto">
        <h2 className="font-bold text-3xl lg:text-5xl text-balance marcellus-regular">
          {sectionData.title}
        </h2>
        {sectionData.paragraph1 ? (
          <p className="mt-8">{sectionData.paragraph1}</p>
        ) : null}
        {sectionData.paragraph2 ? (
          <p className="mt-4">{sectionData.paragraph2}</p>
        ) : null}
        {sectionData.paragraph3 ? (
          <p className="mt-4">{sectionData.paragraph3}</p>
        ) : null}
      </div>
    </section>
  );
}

export default ProjectsTextSection;
