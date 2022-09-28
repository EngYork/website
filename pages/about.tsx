import { NextPage } from "next";
import Head from "next/head";
import { AboutUs } from "../components/AboutUs";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShockSoc York - About</title>
        <meta name="description" content="ShockSoc website - About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutUs />
    </>
  );
};

export default About;
