import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import ButtonLink from "@/components/common/ButtonLink";

function HomePage() {
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
      {/* <HeroSection
        title="Movie"
        description="Catch up on trending films and timeless classics — all in one place."
        bgImage="/backgrounds/curtain.webp"
      /> */}

      {/* Site intro + quick links to category pages */}
      <section className="contentSection pageIntro">
        <h2 className="pageHeading">MovieFlix 107</h2>
        <p className="pageLead">
          Discover trending movies, timeless classics, and hidden gems in one
          place. Browse curated collections by genre, year, and popularity to
          find your next watch in seconds.
        </p>
        <nav className="categoryNav">
          <ButtonLink path="">Movies</ButtonLink>
          <ButtonLink path="">TV Shows</ButtonLink>
          <ButtonLink path="">Anime</ButtonLink>
          <ButtonLink path="">Cartoons</ButtonLink>
        </nav>
      </section>

      {/* Responsive grid of movie cards from db.js */}
      <section className="contentSection">
        <h3 className="sectionTitle">Featured Collection</h3>
        {/* <ArticlesList Search={Search} /> */}
      </section>
    </Fragment>
  );
}
export default HomePage;
