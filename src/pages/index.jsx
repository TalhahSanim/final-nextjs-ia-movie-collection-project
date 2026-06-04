import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import ButtonLink from "@/components/common/ButtonLink";
import Image from "next/image";
import MediaList from "@/components/features/medialist/MediaList";
import styles from "./index.module.css";

function HomePage({ popularMedia }) {
  return (
    <Fragment>
      <Head>
        <title>Movie Flix 107 | Home</title>
        <meta
          name="description"
          content="Discover trending movies, classics, and hidden gems — browse by genre, year, and popularity."
        />
      </Head>

      <div className={styles.heroWrapper}>
        <Image
          src="/backgrounds/movieflix107-hero.webp"
          alt="MovieFlix 107 hero banner"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      <section className="contentSection pageIntro">
        <nav className="categoryNav">
          <ButtonLink path="/movies/Movies">Movies</ButtonLink>
          <ButtonLink path="/tvshows/TVShows">TV Shows</ButtonLink>
          <ButtonLink path="/animes/Anime">Anime</ButtonLink>
          <ButtonLink path="/cartoons/Cartoons">Cartoons</ButtonLink>
        </nav>
      </section>

      {/* Responsive grid of movie cards from db.js */}
      <section className="contentSection">
        <h3 className="sectionTitle">Featured Collection</h3>
        {popularMedia.length > 0 && (
          <MediaList movies={popularMedia} type="hybrid" />
        )}
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Failed to fetch posts - Error ${response.status}: ${data.message}`,
    );
  }

  const movie = data.results.filter((movie) => movie.poster_path !== null);

  return {
    props: {
      popularMedia: movie,
    },
    revalidate: 60,
  };
}

export default HomePage;
