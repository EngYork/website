import Link from "next/link";
import React from "react";
import { HeaderButton } from "./HeaderButton";
import { Logo } from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="hidden w-full p-2 bg-slate-400 dark:bg-slate-900 shadow-2xl shadow-gray-400 dark:shadow-gray-900 md:flex flex-row justify-between items-center relative">
      <Link href="/">
        <a className="p-2 flex flex-row items-center hover:bg-slate-300 dark:hover:bg-slate-800 rounded transition-colors ease-in-out duration-300">
          <Logo className="fill-black dark:fill-white" size={55} />
          <p className="font-bold mx-10 text-black dark:text-white text-4xl">
            ShockSoc
          </p>
        </a>
      </Link>
      <div className="p-3">
        <HeaderButton location="/" text="Home" />
        <HeaderButton location="about" />
        <HeaderButton location="events" />
      </div>
    </header>
  );
};

export { Header };
