"use client";

import { StrapiProjectsListData } from "@/app/[locale]/[projectSlug]/page";
import { Button } from "@/components/ui/button";
import VoteForProjectButton from "@/components/vote-for-project-button";
import { StrapiProjetsFolioSection } from "@/lib/types";
import { LucideArrowRight, LucideHeart, LucidePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function ProjectsFolio({
  sectionData,
  // voteCounts,
  projects,
  locale,
}: {
  sectionData: StrapiProjetsFolioSection;
  // voteCounts: {
  //   projectSlug: string;
  //   voteCount: number;
  // }[];
  projects: StrapiProjectsListData;
  locale: string;
}) {
  const [projectList, setProjectList] = useState<StrapiProjectsListData>([]);

  useEffect(() => {
    const projectsToMap: StrapiProjectsListData = [...projects].sort(
      () => Math.random() - 0.5
    );
    setProjectList(projectsToMap);
  }, [projects]);

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
        {sectionData.paragraph2 && (
          <p className="mt-4">{sectionData.paragraph2}</p>
        )}
        {sectionData.paragraph3 && (
          <p className="mt-4">{sectionData.paragraph3}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-8">
        {Array.isArray(projects) ? (
          projectList.map((project, index) => (
            <div key={index} className="relative">
              <div>
                <div className="overflow-hidden rounded-3xl mt-8 lg:mt-0 group/project relative">
                  <Image
                    width={project.thumbnail.width || 1920}
                    height={project.thumbnail.height || 1080}
                    src={project.thumbnail.url}
                    alt={project.thumbnail.alternativeText || ""}
                    className="w-full h-[300px] object-cover group-hover/project:scale-105 group-hover/project:blur-sm transition-all duration-100"
                  />
                  <div className="flex flex-col items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0 group-hover/project:opacity-100 transition-all duration-100">
                    <Button
                      className="transition-all duration-100 group/projectbutton"
                      asChild
                    >
                      <Link href={`${locale}/${project.slug}`}>
                        {locale === "fr" ? (
                          <span className="text-sm font-bold">
                            Découvrir le projet
                          </span>
                        ) : (
                          <span className="text-sm font-bold">
                            Discover the project
                          </span>
                        )}
                        <LucideArrowRight className="size-2 group-hover/projectbutton:ml-2 transition-all" />
                      </Link>
                    </Button>
                    {/* <VoteForProjectButton
                      label={project.attributes.voteForProjectCTA}
                      projectSlug={project.attributes.slug}
                      projectName={project.attributes.projectTitle}
                      projectThumbnail={
                        project.attributes.thumbnail?.data.attributes.url || ""
                      }
                      locale={locale}
                      size={"default"}
                      onClick={(event) => event.stopPropagation()}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link href={`${locale}/${project.slug}`}>
                  <p className="mt-4 font-bold hover:underline hover:opacity-90 hover:cursor-pointer inline-block">
                    {project.projectTitle}
                  </p>
                </Link>
                {/* <div className="flex gap-1 items-center mt-2">
                  <LucideHeart className="inline size-4" />
                  <span className="text-sm font-bold">
                    {voteCounts.find(
                      (vote: { projectSlug: string; voteCount: number }) =>
                        vote.projectSlug === project.attributes.slug
                    )?.voteCount || 0}
                  </span>
                </div> */}
              </div>
              <div className="flex gap-2 justify-between mt-2">
                <div className="flex gap-2">
                  {project.studentList.map((student) => {
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
