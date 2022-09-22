import Link from "next/link";
import React from "react";
import { HeaderButton } from "./HeaderButton";
import { Logo } from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="w-full p-2 bg-slate-400 dark:bg-slate-900 flex flex-row justify-between shadow-xl items-center">
      <div className="hidden sm:visible">
        <Link href="/">
          <a className="p-2 flex flex-row items-center hover:bg-slate-300 dark:hover:bg-slate-800 rounded">
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
      </div>
    </header>
  );
};

export { Header };
