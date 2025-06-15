import { StrapiComponentImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type StrapiProjectImageAndTextSection = {
  __component: "projects-components.image-and-text-section";
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  isImageOnLeft: boolean;
  isGrayBackground: boolean;
  image: StrapiComponentImage;
};

function ProjectsImageAndTextSection({
  sectionData,
}: {
  sectionData: StrapiProjectImageAndTextSection;
}) {
  return (
    <section
      className={cn(
        "py-[40px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] lg:flex items-center gap-12",
        sectionData.isGrayBackground
          ? "bg-[#253031] text-[#CDDBDE]"
          : "bg-[#CDDBDE] text-[#253031]",
        sectionData.isImageOnLeft ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div className="lg:w-1/2 overflow-hidden rounded-3xl">
        <Image
          src={sectionData.image.url || ""}
          alt={sectionData.image.alternativeText || ""}
          width={sectionData.image.width || 1920}
          height={sectionData.image.height || 1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-8 lg:w-1/2">
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

export default ProjectsImageAndTextSection;
