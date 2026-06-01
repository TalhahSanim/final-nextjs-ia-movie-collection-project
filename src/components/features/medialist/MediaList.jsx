import MediaItem from "../mediaitem/MediaItem";

import React from "react";

function MediaList(props) {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie, index) => (
        <MediaItem
          key={index}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
      ))}
    </div>
  );
}

export default MediaList;
