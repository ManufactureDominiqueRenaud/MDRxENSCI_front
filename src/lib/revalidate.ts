import { revalidateTag } from "next/cache";
import { fetchStrapiData } from "./strapi-api";

export async function getAllProjectsIds() {
  return await fetchStrapiData(`api/projets?fields=id`, ["projects-ids"]);
}

export async function revalidateAllTags() {
  revalidateTag("header");
  revalidateTag("header-fr");
  revalidateTag("header-en");
  revalidateTag("footer");
  revalidateTag("footer-fr");
  revalidateTag("footer-en");
  revalidateTag("homepage");
  revalidateTag("homepage-fr");
  revalidateTag("homepage-en");
  revalidateTag("projects-ids");

  const ProjectsIds = await getAllProjectsIds();
  ProjectsIds.forEach((projectId: number) => {
    revalidateTag(`project-fr-${projectId}`);
    revalidateTag(`project-en-${projectId}`);
  });
}
