import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { EventCard } from "../components/EventCard";
import Modal from "react-modal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const events = [
  {
    name: "Weekly Labs",
    where: "P/T/401",
    when: "Every Wednesday 14:00-17:00",
    description:
      "ShockSoc's regular Lab sessions. Bring your own stuff to work on, pick up one of our projects, or start work on something new. Our lab sessions are open to everyone.",
  },
];

interface IFormData {
  when: string;
  where: string;
  name: string;
  description: string;
}

const Home: NextPage = () => {
  const { status } = useSession();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data, event) => {
    const nv = event?.nativeEvent as SubmitEvent;
    const submitter = nv.submitter as HTMLButtonElement;

    if (submitter.name === "deploy") {
      console.log(data);
    } else {
      reset();
      closeModal();
    }
  };
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
      <div className="flex flex-col items-center w-full justify-center bg-slate-200 dark:bg-gray-800 text-gray-900 dark:text-slate-100 p-4">
        {events.map((event) => (
          <EventCard
            key={event.name}
            name={event.name}
            where={event.where}
            when={event.when}
            description={event.description}
            admin={status === "authenticated"}
          />
        ))}
        {status === "authenticated" && (
          <button
            className="p-4 border-2 m-4 rounded border-[#65b32e] bg-[#65b32e] hover:bg-transparent hover:text-[#65b32e] text-slate-100 transition-colors ease-in-out duration-300"
            onClick={() => setShowModal(true)}
          >
            Create new event
          </button>
        )}
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-slate-400/80 dark:bg-slate-900/80"
        className="absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 dark:bg-gray-800 rounded"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col rounded shadow-lg border-2 border-slate-900 bg-slate-300 dark:bg-slate-600 text-slate-100"
        >
          <div className="w-full bg-gradient-to-r from-[#65b32e] to-[#0095d6]">
            <p className="text-center p-4 text-slate-100">
              <span>
                <textarea
                  placeholder="When"
                  {...register("when")}
                  className="bg-transparent outline-none w-1/3 text-center placeholder:text-slate-100"
                  rows={1}
                />
              </span>
              @
              <span>
                <textarea
                  placeholder="Where"
                  {...register("where")}
                  className="bg-transparent outline-none w-1/3 text-center placeholder:text-slate-100"
                  rows={1}
                />
              </span>
            </p>
          </div>
          <h2 className="self-center text-2xl sm:text-3xl italic my-4">
            <textarea
              placeholder="Name"
              {...register("name")}
              className="bg-transparent outline-none italic text-center placeholder:text-gray-900 dark:placeholder:text-slate-100"
              rows={1}
            />
          </h2>
          <div className="p-4 text-lg">
            <textarea
              placeholder="Description"
              {...register("description")}
              className="w-full bg-transparent outline-none placeholder:text-gray-900 dark:placeholder:text-slate-100"
            />
          </div>
          <div className="flex flex-row self-end m-4">
            <button
              className="p-4 border-2 ml-4 rounded border-[#65b32e] bg-[#65b32e] hover:bg-transparent hover:text-[#65b32e] text-slate-100 transition-colors ease-in-out duration-300"
              name="deploy"
            >
              Apply and Deploy
            </button>
            <button
              className="p-4 border-2 ml-4 rounded border-red-500 bg-red-500 hover:bg-transparent hover:text-red-500 text-slate-100 transition-colors ease-in-out duration-300"
              name="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Home;
