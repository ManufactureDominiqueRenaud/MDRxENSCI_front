export async function fetchStrapiData(endpoint: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
