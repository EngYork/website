import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer, Header, Hero, Info } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShockSoc York - Home</title>
        <meta name="description" content="ShockSoc website - Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Info />
    </>
  );
};

export default Home;
