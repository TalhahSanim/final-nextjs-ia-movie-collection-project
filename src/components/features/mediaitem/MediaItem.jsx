import Image from "next/image";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import styles from "./MediaItem.module.css";
import Link from "next/link";

import { useWatchList } from "@/hooks/usewatchList";
function MediaItem({
  movieid,
  title,
  poster_path,
  overview,
  media_type,
  release_date,
  type,
}) {
  const path =
    type === "tv"
      ? `/tvshows/tvshow/${movieid}`
      : type === "anime"
        ? `/animes/anime/${movieid}`
        : type === "cartoon"
          ? `/cartoons/cartoon/${movieid}`
          : type === "hybrid" && media_type === "tv"
            ? `/tvshows/tvshow/${movieid}`
            : `/movies/movie/${movieid}`;

  const { addMedia, removeMedia, isSaved } = useWatchList();
  const saved = isSaved(title);

  function handleWatchList() {
    if (saved) {
      removeMedia(title);
    } else {
      addMedia({
        title: title,
        poster_path: poster_path,
        overview: overview,
        media_type: media_type,
        release_date: release_date,
      });
    }
  }

  return (
    <div className={styles.mediaItems}>
      <Image
        className={styles.mediaPoster}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`Poster: ${title}`}
        width={250}
        height={300}
        fetchPriority="high"
      />
      <h2 className={styles.mediaTitle}>{title}</h2>
      <p className={styles.mediaOverview}>{overview}</p>
      <p className={styles.mediaType}>{media_type}</p>
      <p className={styles.mediaRelease}>{release_date || first_air_date}</p>
      <div className={styles.buttonGroup}>
        <Link href={path} className={styles.mediaButtonLink}>
          <Button className={styles.mediaButton}>Details</Button>
        </Link>
        <a
          href="https://www.imdb.com/"
          target="_blank"
          className={styles.imdbLink}
        >
          IMDb
        </a>
        <Button className={styles.mediaButton} onClick={handleWatchList}>
          {saved ? "removed from Watchlist " : "Save to Watchlist"}
        </Button>
      </div>
    </div>
  );
}

export default MediaItem;
