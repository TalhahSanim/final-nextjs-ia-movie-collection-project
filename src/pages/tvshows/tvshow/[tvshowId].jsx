import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./TVShowDetails.module.css";
function TVShowDetails({ movie, type }) {
  return (
    <>
      <Head>
        <title>{movie.title || movie.name} | MovieFlix107</title>
      </Head>
      <Image
        className={styles.moviePage}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster: ${movie.title || movie.name}`}
        width={500}
        height={700}
      />
      <h2>{movie.title || movie.name}</h2>
      <p>{movie.overview}</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${params.tvshowId}?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();

  const movie = data;

  if (!response.ok) return { notFound: true };

  return { props: { movie } };
}

export default TVShowDetails;
