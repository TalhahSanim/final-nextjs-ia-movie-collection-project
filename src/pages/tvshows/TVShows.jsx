import HeroSection from "@/components/layout/HeroSection";
import Head from "next/head";
import ButtonLink from "@/components/common/ButtonLink";
import MediaList from "@/components/features/medialist/MediaList";
import { Fragment } from "react";
import Image from "next/image";

function TVShows({ movies, type }) {
  return (
    <>
      <Head>
        <title>MovieFlix107 | TV Shows</title>
        <meta
          name="description"
          description="Our selection includes all the latest trending movies and tvshows"
        />
      </Head>
      <HeroSection
        title="Movie"
        description="View the latest hits via flix107"
        bgImage="/backgrounds/tvshowheroimg.jpg"
      />
      <section className="contentSection">
        <h1 className="sectionTitle">Trending TV Shows</h1>
        <MediaList movies={movies} type="tv" />
      </section>
      <div className="categoryNav">
        {/* <ButtonLink path="/news/page2/aus2">Next Page</ButtonLink> */}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  // const apiKey = process.env.TMDB_API_KEY;

  // if (!apiKey) {
  //   console.error("TMDB_API_KEY is not set.. Cannot get media data");
  //   return { props: { movies: [] }, revalidate: 60 };
  // }
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_API_KEY}`,
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

export default TVShows;
