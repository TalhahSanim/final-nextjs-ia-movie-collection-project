import Image from "next/image";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import ButtonLink from "@/components/common/ButtonLink";
import styles from "./MediaItem.module.css";
import Link from "next/link";
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

  return (
    <div className={styles.mediaItems}>
      <Image
        className={styles.mediaPoster}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`Poster: ${title}`}
        width={250}
        height={300}
      />
      <h2 className={styles.mediaTitle}>{title}</h2>
      <p className={styles.mediaOverview}>{overview}</p>
      <p className={styles.mediaType}>{media_type}</p>
      <p className={styles.mediaRelease}>{release_date || first_air_date}</p>
      <Link href={path} className={styles.mediaButtonLink}>
        <Button className={styles.mediaButton}>Details</Button>
      </Link>

      <Link href="https://www.imdb.com/" className={styles.mediaButtonLink}>
        <Button className={styles.mediaButton}>IMdb</Button>
      </Link>
    </div>
  );
}

export default MediaItem;
