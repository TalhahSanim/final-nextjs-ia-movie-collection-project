import HeroSection from "@/components/layout/HeroSection";
import Head from "next/head";
import MediaList from "@/components/features/medialist/MediaList";
import styles from "./Movies.module.css";
function Movies({ movies, type }) {
  return (
    <>
      <Head>
        <title>MovieFlix107 | Movies</title>
        <meta
          name="description"
          description="Our selection includes all the latest trending movies and tvshows"
        />
      </Head>
      <HeroSection
        title="Movie"
        description="View the latest hits via flix107"
        bgImage="/backgrounds/cover.jpg"
      />
      <section className="contentSection">
        <h1 className="sectionTitle">Trending Movies</h1>
        <MediaList movies={movies} type="movie" />
      </section>
      <div className="categoryNav">
        {/* <ButtonLink path="/news/page2/aus2">Next Page</ButtonLink> */}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    console.error("TMDB_API_KEY is not set.. Cannot get media data");
    return { props: { movies: [] }, revalidate: 60 };
  }
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`,
    );

    const data = await response.json();
    console.log(data);
    if (!response.ok || !Array.isArray(data?.results)) {
      console.error(
        `Failed to fetch results - Error ${response.status}:`,
        data?.status_message ?? data,
      );
      return {
        props: { movies: [] },
        revalidate: 60,
      };
    }

    return {
      props: { movies: data.results ?? [] },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching movie media data:", error);
    return {
      props: { movies: [] },
      revalidate: 60,
    };
  }
};

export default Movies;
