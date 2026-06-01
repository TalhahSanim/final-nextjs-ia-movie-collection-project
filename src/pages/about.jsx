import Head from "next/head";

const AboutPage = () => {
  return (
    <section className="contentSection pageIntro">
      <Head>
        <title>MovieFlix107 | About Us</title>
        <meta
          name="description"
          content="Learn about MovieFlix107 — a simple way to explore trending releases, classics, and hidden gems."
        />
      </Head>
      <h1 className="pageHeading">About Us</h1>
      <p className="pageLead">
        MovieFlix107 is built for movie lovers who want a simple way to explore
        trending releases, iconic classics, and hidden gems. Our goal is to help
        you discover what to watch next by organizing titles into easy-to browse
        collections across genres, years, and formats.
      </p>
    </section>
  );
};

export default AboutPage;
