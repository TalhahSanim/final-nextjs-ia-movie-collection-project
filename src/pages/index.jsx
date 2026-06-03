import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import ButtonLink from "@/components/common/ButtonLink";
import MediaList from "@/components/features/medialist/MediaList";
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

      {/* Full-width banner with background image */}
      <HeroSection
        title="Movie"
        description="Catch up on trending films and timeless classics — all in one place."
        bgImage="/backgrounds/curtain.webp"
      />

      {/* Site intro + quick links to category pages */}
      <section className="contentSection pageIntro">
        <h2 className="pageHeading">MovieFlix 107</h2>
        <p className="pageLead">
          Discover trending movies, timeless classics, and hidden gems in one
          place. Browse curated collections by genre, year, and popularity to
          find your next watch in seconds.
        </p>
        <nav className="categoryNav">
          <ButtonLink path="/movies/Movies">Movies</ButtonLink>
          <ButtonLink path="/tvshows/TVShows">TV Shows</ButtonLink>
          <ButtonLink path="/anime/Anime">Anime</ButtonLink>
          <ButtonLink path="/cartoons/Cartoons">Cartoons</ButtonLink>
        </nav>
        <h1>Work in Progress 🔨🧱🚜</h1>
      </section>

      {/* Responsive grid of movie cards from db.js */}
      <section className="contentSection">
        <h3 className="sectionTitle">Featured Collection</h3>
        {popularMedia.length > 0 && <MediaList movies={popularMedia} />}
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_API_KEY}`,
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
