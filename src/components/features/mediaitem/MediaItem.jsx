import Image from "next/image";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import ButtonLink from "@/components/common/ButtonLink";
import styles from "./MediaItem.module.css";
import Link from "next/link";
function MediaItem({ movieid, title, poster_path, overview }) {
  return (
    <div className={styles.mediaItems}>
      <Image
        className={styles.mediaPoster}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`Poster: ${title}`}
        width={250}
        height={300}
        loading="eager"
      />
      <h2 className={styles.mediaTitle}>{title}</h2>
      <p className={styles.mediaOverview}>{overview}</p>
      <Link
        href={`/movies/movie/${movieid}`}
        className={styles.mediaButtonLink}
        target="_blank"
      >
        <Button className={styles.mediaButton}>Details</Button>
      </Link>
    </div>
  );
}

export default MediaItem;
