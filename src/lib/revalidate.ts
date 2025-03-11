import { revalidateTag } from "next/cache";

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
}
