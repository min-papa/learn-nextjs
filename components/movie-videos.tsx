import { API_URL } from "../constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const vidoes = await getVideos(id);
  return (
    <div className={styles.container}>
      {vidoes.map((v) => (
        <iframe
          key={v.id}
          src={`https://youtube.com/embed/${v.key}`}
          title={v.name}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      ))}
    </div>
  );
}
