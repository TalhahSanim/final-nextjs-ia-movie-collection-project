import React from "react";
import MediaList from "@/components/features/medialist/MediaList";
import Head from "next/head";
const Anime = ({ movies }) => {
  return (
    <>
      <Head>
        <title>MovieFlix107 | Anime</title>
        <meta
          name="description"
          description="Our selection includes all the latest trending movies and tvshows"
        />
      </Head>
      {/* <HeroSection
        title="Movie"
        description="View the latest hits via flix107"
        bgImage="/backgrounds/cover.jpg"
      /> */}
      <section className="contentSection">
        <h1 className="sectionTitle">Trending Anime</h1>
        <MediaList movies={movies} />
      </section>
      <div className="categoryNav">
        {/* <ButtonLink path="/news/page2/aus2">Next Page</ButtonLink> */}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    console.error("TMDB_API_KEY is not set.. Cannot get media data");
    return { props: { movies: [] }, revalidate: 60 };
  }
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?with_genres=16&with_origin_country=JP&sort_by=popularity.desc&api_key=${process.env.TMDB_API_KEY}`,
    );
    const data = await response.json();

    if (!response.ok || !Array.isArray(data?.results)) {
      console.error(
        `Failed to fetch results - Error ${response.status}:`,
        data?.status_message ?? data,
      );
      return {
        props: { movies: [] },
      };
    }

    return {
      props: { movies: data.results ?? [] },
    };
  } catch (error) {
    console.error("Error fetching movie media data:", error);
    return {
      props: { movies: [] },
    };
  }
};
export default Anime;
