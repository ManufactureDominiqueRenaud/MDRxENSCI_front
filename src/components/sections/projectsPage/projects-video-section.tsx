import { StrapiComponentImage, StrapiComponentVideo } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type StrapiProjectVideoSection = {
  __component: "projects-components.video-section";
  isGrayBackground: boolean;
  video: {
    data: {
      attributes: StrapiComponentVideo;
    };
  };
};

function ProjectsVideoSection({
  sectionData,
}: {
  sectionData: StrapiProjectVideoSection;
}) {
  return (
    <section
      className={cn(
        "py-[40px] lg:py-[192px] px-[10px] md:px-[70px] lg:px-[120px] lg:flex items-stretch gap-4",
        sectionData.isGrayBackground
          ? "bg-[#253031] text-[#CDDBDE]"
          : "bg-[#CDDBDE] text-[#253031]"
      )}
    >
      <div className="overflow-hidden rounded-3xl w-full">
        <video
          width="320"
          height="240"
          controls
          className="w-full h-full object-cover"
        >
          <source
            src={sectionData.video.data.attributes.url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default ProjectsVideoSection;
