import Image from "next/image";
import React from "react";

type InfoCardProps = {
  cardColours: string;
  badgeColours: string;
  name: string;
  image: string;
  textColour?: string;
  hoverTextColour?: string;
  link: string;
  buttonMessage: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  cardColours,
  name,
  image,
  badgeColours,
  textColour,
  hoverTextColour,
  link,
  buttonMessage,
}) => {
  return (
    <div
      className={`flex flex-col p-2 rounded-lg border-2 ${cardColours} bg-opacity-20 mx-auto sm:mx-8 my-4 items-center relative group`}
    >
      <div
        className={`w-30 h-30 m-4 rounded-full border-4 grid p-4 ${badgeColours} bg-slate-200 dark:bg-gray-800 group-hover:bg-slate-50 dark:group-hover:bg-gray-700`}
      >
        <Image
          src={image}
          alt={`${name} logo`}
          objectFit="scale-down"
          width={120}
          height={120}
        />
      </div>
      <h3
        className={`${
          textColour ? textColour : "text-gray-900 dark:text-slate-100"
        } text-2xl sm:text-4xl`}
      >
        {name}
      </h3>
      <a
        href={link}
        className={`p-4 mx-auto my-4 border-2 ${cardColours} rounded ${
          hoverTextColour
            ? `text-slate-200 dark:text-gray-900 ${hoverTextColour}`
            : "text-slate-200 hover:text-gray-900 dark:hover:text-slate-200"
        } hover:bg-transparent transition-colors ease-in-out duration-200`}
      >
        <button>{buttonMessage}</button>
      </a>
    </div>
  );
};

export { InfoCard };
