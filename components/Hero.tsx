import React from "react";
import { Carousel } from "./Carousel";
import { Logo } from "./Logo";

const images = ["/assets/0.jpg", "/assets/1.jpg", "/assets/2.jpg"];

const Hero: React.FC = () => {
  return (
    <div className="grid xl:grid-cols-2 w-full bg-slate-100 dark:bg-gray-700 py-4">
      <div className="flex flex-col p-4 items-center">
        <Logo className="fill-black dark:fill-white" size={300} />
        <div className="w-full py-6 px-8">
          <h1 className="text-center sm:text-left text-black dark:text-white text-5xl sm:text-7xl font-bold">
            ShockSoc
          </h1>
          <p className="text-center sm:text-left text-gray-700 dark:text-slate-400">
            The University of York Engineering Society
          </p>
        </div>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export { Hero };
