import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, Hero, Info } from "../components";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>ShockSoc York - Home</title>
        <meta name="description" content="ShockSoc website - Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Hero />
        <Info />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
