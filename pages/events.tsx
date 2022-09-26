import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Events, Header } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShockSoc York - Events</title>
        <meta name="description" content="ShockSoc website - Events page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Events />
    </>
  );
};

export default Home;
