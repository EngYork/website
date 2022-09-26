import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full p-4 flex flex-row justify-between items-center bg-slate-400 dark:bg-slate-900 text-gray-900 dark:text-slate-100">
        <span className="italic">ShockSoc</span>
        <div>
          <a href="https://github.com/ShockSoc/website">
            <button className="rounded p-2 bg-white text-black items-center">
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
      </div>
    </footer>
  );
};

export { Footer };
