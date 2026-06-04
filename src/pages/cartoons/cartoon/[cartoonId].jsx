import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./CartoonDetails.module.css";
function CartoonDetails({ movie }) {
  return (
    <>
      <Head>
        <title>{movie.title || movie.name} | MovieFlix107</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
        className={styles.backdrop}
      >
        <div className={styles.content}>
          <Image
            className={styles.moviePage}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster: ${movie.title || movie.name}`}
            width={280}
            height={420}
          />
          <div className={styles.info}>
            <h2>{movie.title || movie.name}</h2>
            <p>{movie.first_air_date?.slice(0, 4)}</p>

            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${params.cartoonId}?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();

  const movie = data;

  if (!response.ok) return { notFound: true };

  return { props: { movie } };
}

export default CartoonDetails;
