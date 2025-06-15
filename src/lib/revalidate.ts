import { revalidateTag } from "next/cache";
import { fetchStrapiData } from "./strapi-api";

export async function getAllProjectSlugs() {
  const data = await fetchStrapiData(`api/projets?fields=slug`, [
    "projects-slugs",
  ]);
  const projectSlugs = [] as string[];
  data.data.forEach((item: any) => {
    projectSlugs.push(item.slug);
  });
  return projectSlugs;
}

export async function revalidateAllTags() {
  // Revalidation des tags globaux
  const globalTags = [
    "header",
    "header-fr",
    "header-en",
    "footer",
    "footer-fr",
    "footer-en",
    "homepage",
    "homepage-fr",
    "homepage-en",
    "projects-slugs",
    "projects-fr",
    "projects-en",
    "projects-data",
  ];

  globalTags.forEach((tag) => revalidateTag(tag));

  // // Revalidation des slugs des projets
  // const projectSlugs = await getAllProjectSlugs();
  // projectSlugs.forEach((slug: string) => {
  //   revalidateTag(`projects/${slug}-fr`);
  //   revalidateTag(`projects/${slug}-en`);

  //   console.log(`Revalidating tag: projects/${slug}-fr`);
  //   console.log(`Revalidating tag: projects/${slug}-en`);
  // });
}
