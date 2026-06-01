import Image from "next/image";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import ButtonLink from "@/components/common/ButtonLink";

function MediaItem({ id, title, poster_path, overview }) {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width={250}
        height={300}
      />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
}

export default MediaItem;
