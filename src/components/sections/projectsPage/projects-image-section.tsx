import { StrapiComponentImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type StrapiProjectImageSection = {
  __component: "projects-components.image-section";
  isGrayBackground: boolean;
  image: StrapiComponentImage;
};

function ProjectsImageSection({
  sectionData,
}: {
  sectionData: StrapiProjectImageSection;
}) {
  return (
    <section
      className={cn(
        "py-[40px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] lg:flex items-stretch gap-4",
        sectionData.isGrayBackground
          ? "bg-[#253031] text-[#CDDBDE]"
          : "bg-[#CDDBDE] text-[#253031]"
      )}
    >
      <div className="overflow-hidden rounded-3xl w-full">
        <Image
          src={sectionData.image.url || ""}
          alt={sectionData.image.alternativeText || ""}
          width={sectionData.image.width || 1920}
          height={sectionData.image.height || 1080}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default ProjectsImageSection;
