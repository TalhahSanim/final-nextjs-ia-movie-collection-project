import { useState, useEffect } from "react";

export function useWatchList() {
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist") || "[]");
    setWatchList(saved);
  }, []);

  function addMedia(movie) {
    const updated = [...watchlist, movie];
    setWatchList(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  }

  function removeMedia(title) {
    const updated = watchlist.filter((movie) => movie.title !== title);
    setWatchList(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  }

  function isSaved(title) {
    return watchlist.some((movie) => movie.title === title);
  }

  return { watchlist, addMedia, removeMedia, isSaved };
}
