import Head from "next/head";

const ContactPage = () => {
  return (
    <section className="contentSection pageIntro">
      <Head>
        <title>MovieFlix107 | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with the MovieFlix107 team — feedback, requests, and suggestions welcome."
        />
      </Head>
      <h1 className="pageHeading">Contact Us</h1>
      <p className="pageLead">
        Have feedback, feature requests, or a movie collection you want us to
        add? Reach out and tell us what you are looking for. We are always
        improving MovieFlix107 to make browsing and discovering great films
        faster and more enjoyable. Thanks for being part of our movie-loving
        community!
      </p>
    </section>
  );
};

export default ContactPage;
