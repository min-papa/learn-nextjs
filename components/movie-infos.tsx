import { API_URL } from "../constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfos({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3> ⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
