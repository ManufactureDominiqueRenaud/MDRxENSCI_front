import { revalidateTag } from "next/cache";

export async function revalidateAllTags() {
  revalidateTag("header");
}
