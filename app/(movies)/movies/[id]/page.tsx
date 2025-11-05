import { Suspense } from "react";
import MovieInfos, { getMovie } from "../../../../components/movie-infos";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  id: string;
}

export async function generateMetadata({ params }: { params: IParams }) {
  const movie = await getMovie(params.id);
  return {
    title: `${movie.title}`,
  };
}

export default async function MoviesDetailPage({ params, searchParams }) {
  const { id } = params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie infos...</h1>}>
        <MovieInfos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
