import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error("Failed to fetch movie videos");
  // const res = await fetch(`${API_URL}/${id}/videos`);
  // return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  return <h6>{JSON.stringify(await getVideos(id))}</h6>;
}
