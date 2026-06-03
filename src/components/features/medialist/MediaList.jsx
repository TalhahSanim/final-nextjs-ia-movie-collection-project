import MediaItem from "../mediaitem/MediaItem";

import React from "react";
import styles from "./MediaList.module.css";
function MediaList(props) {
  const { movies, type } = props;
  return (
    <div className={styles.mediaList}>
      {movies.map((movie, index) => (
        <MediaItem
          key={index}
          movieid={movie.id}
          title={movie.title || movie.name}
          poster_path={movie.poster_path}
          overview={movie.overview}
          media_type={movie.media_type}
          release_date={movie.release_date}
          type={type}
        />
      ))}
    </div>
  );
}

export default MediaList;
