import React, { useState } from "react";
import { Carousel } from "./Carousel";
import { Logo } from "./Logo";
import Modal from "react-modal";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

const images = ["/assets/0.jpg", "/assets/1.jpg", "/assets/2.jpg"];

Modal.setAppElement("#__next");

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="grid xl:grid-cols-[30%_70%] w-full bg-slate-100 dark:bg-gray-700 py-4">
      <div className="flex flex-col p-4">
        <Logo
          className="fill-black dark:fill-white self-center xl:self-start"
          size={300}
        />
        <div className="w-full py-6 px-8 flex flex-col">
          <h1 className="text-center xl:text-left text-gray-900 dark:text-slate-100 text-5xl sm:text-7xl font-bold">
            ShockSoc
          </h1>
          <p className="text-center xl:text-left text-gray-700 dark:text-slate-400">
            The University of York Engineering Society
          </p>
          <button
            onClick={openModal}
            className="transition-colors ease-in-out duration-500 self-center xl:self-start my-4 p-4 text-slate-100 dark:text-gray-700 rounded bg-gray-700 dark:bg-slate-100 border-2 border-transparent hover:bg-transparent hover:text-gray-700 hover:border-gray-700 dark:hover:text-slate-100 dark:hover:border-slate-100"
          >
            Become a member
          </button>
        </div>
      </div>
      <Carousel images={images} />
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-slate-400/80 dark:bg-slate-900/80"
        className="absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 dark:bg-slate-600 rounded text-gray-900 dark:text-slate-100"
      >
        <div className="flex flex-row p-2">
          <h3 className="text-2xl sm:text-3xl italic mt-2">
            Are you an Engineering student?
          </h3>
          <button onClick={closeModal}>
            <IconContext.Provider
              value={{
                size: "25",
                className: "self-end absolute top-2 right-2",
              }}
            >
              <MdClose />
            </IconContext.Provider>
          </button>
        </div>
        <div className="flex flex-row w-full justify-end pt-12">
          <a
            href="https://forms.gle/xRJpyYDij7gUSxzf8"
            className="py-2 px-4 mx-6 rounded bg-green-500 text-gray-900 dark:text-slate-100 border-2 border-transparent hover:bg-transparent hover:border-green-500 hover:text-green-500 transition-colors ease-in-out duration-200"
          >
            Yes
          </a>
          <a
            href="https://yusu.org/shop?activity_id=28"
            className="py-2 px-4 rounded bg-red-500 text-gray-900 dark:text-slate-100 border-2 border-transparent hover:bg-transparent hover:border-red-500 hover:text-red-500 transition-colors ease-in-out duration-200"
          >
            No
          </a>
        </div>
      </Modal>
    </div>
  );
};

export { Hero };
