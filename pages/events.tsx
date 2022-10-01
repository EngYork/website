import type { NextPage } from "next";
import Head from "next/head";
import { EventCard } from "../components/EventCard";

const events = [
  {
    name: "Weekly Labs",
    where: "P/T/401",
    when: "Every Wednesday 14:00-17:00",
    description:
      "ShockSoc's regular Lab sessions. Bring your own stuff to work on, pick up one of our projects, or start work on something new. Our lab sessions are open to everyone.",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShockSoc York - Events</title>
        <meta name="description" content="ShockSoc website - Events page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-slate-100 dark:bg-gray-700 group">
        <div className="flex flex-col items-center justify-center w-full h-[150px] sm:h-[300px] text-gray-900 dark:text-slate-100">
          <h1 className="text-5xl sm:text-7xl font-bold my-4">Events</h1>
        </div>
      </div>
      <div className="flex flex-col items-center w-full min-h-[500px] justify-center bg-slate-200 dark:bg-gray-800 text-gray-900 dark:text-slate-100 p-4">
        {events.map((event) => (
          <EventCard
            key={event.name}
            name={event.name}
            where={event.where}
            when={event.when}
            description={event.description}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
