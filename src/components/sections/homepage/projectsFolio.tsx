import { StrapiProjectsListData } from "@/app/[locale]/[projectId]/page";
import { Button } from "@/components/ui/button";
import { StrapiProjetsFolioSection } from "@/lib/types";
import { LucideArrowRight, LucidePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProjectsFolio({
  sectionData,
  projects,
  locale,
}: {
  sectionData: StrapiProjetsFolioSection;
  projects: StrapiProjectsListData;
  locale: string;
}) {
  return (
    <section
      className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px]"
      id="projects"
    >
      <div className="mt-8">
        <h2 className="font-bold text-3xl lg:text-5xl text-balance marcellus-regular">
          {sectionData.title}
        </h2>
        <p className="mt-4">{sectionData.paragraph}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-8">
        {Array.isArray(projects) ? (
          projects.map((project, index) => (
            <div key={index} className="relative">
              <Link href={`${locale}/${project.id}`}>
                <div className="overflow-hidden rounded-3xl mt-8 lg:mt-0 group/project relative">
                  <Image
                    width={
                      project.attributes.thumbnail.data.attributes.width || 1920
                    }
                    height={
                      project.attributes.thumbnail.data.attributes.height ||
                      1080
                    }
                    src={project.attributes.thumbnail.data.attributes.url}
                    alt={
                      project.attributes.thumbnail.data.attributes
                        .alternativeText || ""
                    }
                    className="w-full h-[300px] object-cover group-hover/project:scale-105 group-hover/project:blur-sm transition-all duration-500"
                  />
                  <Button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0 group-hover/project:opacity-100 transition-all duration-500 group/projectbutton">
                    Voir le projet
                    <LucideArrowRight className="size-2 group-hover/projectbutton:ml-2 transition-all" />
                  </Button>
                </div>
              </Link>
              <Link href={`${locale}/${project.id}`}>
                <p className="mt-4 font-bold hover:underline hover:opacity-90 hover:cursor-pointer inline-block">
                  {project.attributes.projectTitle}
                </p>
              </Link>
              <div className="flex gap-2 justify-between mt-2">
                <div className="flex gap-2">
                  {project.attributes.studentList.map((student) => {
                    return (
                      <p
                        key={student.id.toString() + student.name}
                        className="border py-0.5 px-2 border-black/50 opacity-50 text-xs rounded-full inline cursor-pointer hover:opacity-100 hover:border-black transition"
                      >
                        {student.name}
                      </p>
                    );
                  })}
                </div>
                {/* <Button className="text-xs rounded-full" size={"sm"}>
                  <LucidePlus className="size-2" />
                  Voter pour ce projet
                </Button> */}
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </section>
  );
}

export default ProjectsFolio;
