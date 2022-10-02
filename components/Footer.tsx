import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="shrink-0">
      <div className="w-full p-4 grid grid-cols-3 bg-slate-400 dark:bg-slate-900 text-gray-900 dark:text-slate-100 relative bottom-0 left-0 right-0">
        <div /> {/* Empty div for items alignment */}
        <span className="italic text-center self-center grid grid-cols-[5%_95%] items-center mx-2">
          <IconContext.Provider
            value={{ className: "fill-gray-900 dark:fill-slate-100" }}
          >
            <MdCopyright />
          </IconContext.Provider>{" "}
          ShockSoc, The University Of York&apos;s Engineering Society
        </span>
        <a
          href="https://github.com/ShockSoc/website"
          className="flex justify-end ml-2"
        >
          <button className="rounded p-2 bg-white text-black">
            <span className="mr-2">See on GitHub</span>
            <span>
              <Image
                src="/assets/github.png"
                width={20}
                height={20}
                alt="GitHub logo"
              />
            </span>
          </button>
        </a>
      </div>
    </footer>
  );
};

export { Footer };
