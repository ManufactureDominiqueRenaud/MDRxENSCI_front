import { revalidateTag } from "next/cache";
import { fetchStrapiData } from "./strapi-api";

export async function getAllProjectSlugs() {
  const data = await fetchStrapiData(`api/projets?fields=slug`, ["projects-slugs"]);
  const projectSlugs = [] as string[];
  data.data.forEach((item: any) => {
    projectSlugs.push(item.attributes.slug);
    console.log(item.attributes.slug);
  });
  return projectSlugs;
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
  revalidateTag("projects-slugs");
  revalidateTag("projects-fr")
  revalidateTag("projects-en")

  const projectSlugs = await getAllProjectSlugs();
  projectSlugs.forEach((slug: string) => {
    revalidateTag(`project-fr-${slug}`);
    revalidateTag(`project-en-${slug}`);
  });
}
