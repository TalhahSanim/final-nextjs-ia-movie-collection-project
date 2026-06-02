import MediaItem from "../mediaitem/MediaItem";

import React from "react";
import styles from "./MediaList.module.css";
function MediaList(props) {
  const { movies } = props;
  return (
    <div className={styles.mediaList}>
      {movies.map((movie, index) => (
        <MediaItem
          key={index}
          id={movie.id}
          title={movie.title || movie.name}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
      ))}
    </div>
  );
}

export default MediaList;
