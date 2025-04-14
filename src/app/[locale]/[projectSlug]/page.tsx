import ProjectsImageAndTextSection, {
  StrapiProjectImageAndTextSection,
} from "@/components/sections/projectsPage/projects-image-and-text-section";
import ProjectsImageSection, {
  StrapiProjectImageSection,
} from "@/components/sections/projectsPage/projects-image-section";
import ProjectsTextSection, {
  StrapiProjectTextSection,
} from "@/components/sections/projectsPage/projects-text-section";
import ProjectsTwoImagesSection, {
  StrapiProjectTwoImagesSection,
} from "@/components/sections/projectsPage/projects-two-images-section";
import ProjectsVideoSection, {
  StrapiProjectVideoSection,
} from "@/components/sections/projectsPage/projects-video-section";
import { Button } from "@/components/ui/button";
import { getAllProjectSlugs } from "@/lib/revalidate";
import { fetchStrapiData } from "@/lib/strapi-api";
import { StrapiComponentImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import { LucideArrowLeft, LucidePlus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

//PAGE METADTA
export const metadata: Metadata = {
  title:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
  description:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
};

//STRAPI DATA TYPES
type StrapiProjectContent = (
  | StrapiProjectImageAndTextSection
  | StrapiProjectTwoImagesSection
  | StrapiProjectTextSection
  | StrapiProjectImageSection
  | StrapiProjectVideoSection
)[];

export type StrapiProjectPageData = {
  data: {
    id: number;
    attributes: {
      projectTitle: string;
      projectDesc: string;
      voteForProjectCTA: string;
      returnToProjectsCTA: string;
      seeProjectCTA: string;
      content: StrapiProjectContent;
      studentList: {
        id: number;
        name: string;
      }[];
      thumbnail: {
        data: {
          attributes: StrapiComponentImage;
        };
      };
    };
  }[];
};
export type StrapiProjectsListData = {
  id: number;
  attributes: {
    slug: string;
    projectTitle: string;
    projectDesc: string;
    voteForProjectCTA: string;
    returnToProjectsCTA: string;
    seeProjectCTA: string;
    content: StrapiProjectContent;
    studentList: {
      id: number;
      name: string;
    }[];
    thumbnail: {
      data: {
        attributes: StrapiComponentImage;
      };
    };
  };
}[];

//PAGE
export default async function Page({ params }: any) {
  const { projectSlug, locale } = params;
  const projectSlugs = await getAllProjectSlugs();
  if (!projectSlugs.includes(projectSlug)) {
    return redirect("/");
  }

  let projectData: StrapiProjectPageData;
  if (locale === "fr") {
    projectData = (await fetchStrapiData(
      `api/projets?locale=${locale}&filters[slug][$eq]=${projectSlug}&populate[content][populate][image]=*&populate[content][populate][image1]=*&populate[content][populate][image2]=*&populate[content][populate][video]=*&populate[studentList]=*`,
      [`projects-data`]
    )) as StrapiProjectPageData;
  } else {
    projectData = (await fetchStrapiData(
      `api/projets?locale=${locale}&filters[slug][$eq]=${projectSlug}&populate[content][populate][image]=*&populate[content][populate][image1]=*&populate[content][populate][image2]=*&populate[content][populate][video]=*&populate[studentList]=*`,
      [`projects-data`]
    )) as StrapiProjectPageData;
  }

  return (
    <main>
      <section className="min-h-16 flex items-center lg:p-6 justify-center lg:justify-end pt-16 lg:mr-32 lg:ml-32 px-[20px] md:px-[70px] lg:px-[0px] relative lg:z-50">
        <Button variant={"link"} asChild>
          <Link href={`/${locale}/#projects`}>
            <LucideArrowLeft className="h-3 w-3" />
            {projectData.data[0].attributes.returnToProjectsCTA}
          </Link>
        </Button>
        {/* <Button variant={"default"} asChild>
          <Link href={`/${locale}/#projects`}>
            {projectData.data[0].attributes.voteForProjectCTA}
            <LucidePlus className="h-3 w-3" />
          </Link>
        </Button> */}
      </section>
      <section
        className={cn(
          "py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] gap-12 flex flex-col items-center"
        )}
      >
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {projectData.data[0].attributes.studentList.map((student, index) => {
            return (
              <p
                key={index}
                className="border border-[#253031] rounded-full py-0.5 px-3 text-xs lg:text-base"
              >
                {student.name}
              </p>
            );
          })}
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-balance w-full md:w-2/3 marcellus-regular">
          {projectData.data[0].attributes.projectTitle}
        </h1>
        <p className="lg:-2/3 text-center text-balance">
          {projectData.data[0].attributes.projectDesc}
        </p>
      </section>

      {projectData.data[0].attributes.content &&
        projectData.data[0].attributes.content.map((item, index) => {
          switch (item.__component) {
            case "projects-components.image-and-text-section":
              return <ProjectsImageAndTextSection sectionData={item} />;
            case "projects-components.two-images-section":
              return <ProjectsTwoImagesSection sectionData={item} />;
            case "projects-components.text-section":
              return <ProjectsTextSection sectionData={item} />;
            case "projects-components.image-section":
              return <ProjectsImageSection sectionData={item} />;
            case "projects-components.video-section":
              return <ProjectsVideoSection sectionData={item} />;
            default:
              return null;
          }
        })}

      <section
        className={cn(
          "py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] gap-12 flex flex-col items-center"
        )}
      >
        {/* <Button variant={"default"} size={"lg"} asChild>
          <Link href={`/${locale}/#projects`}>
            {projectData.data[0].attributes.voteForProjectCTA}
            <LucidePlus className="h-3 w-3" />
          </Link>
        </Button> */}
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-balance w-full md:w-2/3 marcellus-regular">
          {projectData.data[0].attributes.projectTitle}
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {projectData.data[0].attributes.studentList.map((student, index) => {
            return (
              <p
                key={index}
                className="border border-[#253031] rounded-full py-0.5 px-3 text-xs lg:text-base"
              >
                {student.name}
              </p>
            );
          })}
        </div>
        <Button variant={"link"} asChild>
          <Link href={`/${locale}/#projects`}>
            <LucideArrowLeft className="h-3 w-3" />
            {projectData.data[0].attributes.returnToProjectsCTA}
          </Link>
        </Button>
      </section>
    </main>
  );
}
