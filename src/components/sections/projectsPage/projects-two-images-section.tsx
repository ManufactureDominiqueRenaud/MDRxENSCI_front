import { StrapiComponentImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type StrapiProjectTwoImagesSection = {
  __component: "projects-components.two-images-section";
  isGrayBackground: boolean;
  image1: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
  image2: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
};

function ProjectsTwoImagesSection({
  sectionData,
}: {
  sectionData: StrapiProjectTwoImagesSection;
}) {
  return (
    <section
      className={cn(
        "py-[40px] lg:py-[192px] px-[10px] md:px-[70px] lg:px-[120px] flex flex-col lg:flex-row items-stretch gap-0 lg:gap-4",
        sectionData.isGrayBackground
          ? "bg-[#253031] text-[#CDDBDE]"
          : "bg-[#CDDBDE] text-[#253031]"
      )}
    >
      <div className="lg:w-1/2 overflow-hidden rounded-3xl rounded-b-none lg:rounded-b-3xl lg:rounded-r-none">
        <Image
          src={sectionData.image1.data.attributes.url || ""}
          alt={sectionData.image1.data.attributes.alternativeText || ""}
          width={sectionData.image1.data.attributes.width || 1920}
          height={sectionData.image1.data.attributes.height || 1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-1/2 overflow-hidden rounded-3xl rounded-t-none lg:rounded-t-3xl lg:rounded-tl-none lg:rounded-bl-none">
        <Image
          src={sectionData.image2.data.attributes.url || ""}
          alt={sectionData.image2.data.attributes.alternativeText || ""}
          width={sectionData.image2.data.attributes.width || 1920}
          height={sectionData.image2.data.attributes.height || 1080}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default ProjectsTwoImagesSection;
