import { useWatchList } from "@/hooks/usewatchList";
import MediaList from "@/components/features/medialist/MediaList";

import React from "react";

function WatchList() {
  const { watchlist } = useWatchList();
  return (
    <div>
      <h1>Watch Collection</h1>
      {watchlist.length === 0 ? (
        <p>No Media saved. Review Selection</p>
      ) : (
        <MediaList movies={watchlist} />
      )}
    </div>
  );
}

export default WatchList;
