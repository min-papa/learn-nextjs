import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfos({ id }: { id: string }) {
  return <h6>{JSON.stringify(await getMovie(id))}</h6>;
}
