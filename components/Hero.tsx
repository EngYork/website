import React from "react";
import { Carousel } from "./Carousel";
import { Logo } from "./Logo";

const images = ["/assets/0.jpg", "/assets/1.jpg", "/assets/2.jpg"];

const Hero: React.FC = () => {
  return (
    <div className="grid xl:grid-cols-[30%_70%] w-full bg-slate-100 dark:bg-gray-700 py-4">
      <div className="flex flex-col p-4">
        <Logo
          className="fill-black dark:fill-white self-center xl:self-start"
          size={300}
        />
        <div className="w-full py-6 px-8 flex flex-col">
          <h1 className="text-center xl:text-left text-black dark:text-white text-5xl sm:text-7xl font-bold">
            ShockSoc
          </h1>
          <p className="text-center xl:text-left text-gray-700 dark:text-slate-400">
            The University of York Engineering Society
          </p>
          <a
            href="https://forms.gle/xRJpyYDij7gUSxzf8" // https://yusu.org/shop?activity_id=28
            className="transition-colors ease-in-out duration-500 self-center xl:self-start my-4 p-4 text-slate-100 dark:text-gray-700 rounded bg-gray-700 dark:bg-slate-100 border-2 border-transparent hover:bg-transparent hover:text-gray-700 hover:border-gray-700 dark:hover:text-slate-100 dark:hover:border-slate-100"
          >
            Become a member
          </a>
        </div>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export { Hero };
