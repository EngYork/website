import Link from "next/link";
import React from "react";

type HeaderButtonProps = {
  location: string;
  text?: string;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({ location, text }) => {
  return (
    <Link href={`/${location}`}>
      <a className="p-4 mx-2 outline-none hover:bg-slate-300 dark:hover:bg-slate-800 rounded uppercase dark:text-white transition-colors ease-in-out duration-300">
        {text ? text : location}
      </a>
    </Link>
  );
};

export { HeaderButton };
