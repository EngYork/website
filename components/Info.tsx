import React from "react";
import { MdEmail } from "react-icons/md";
import { InfoCard } from "./InfoCard";

const cards = [
  {
    name: "Yusu",
    cardColours: "border-cyan-500 bg-cyan-500 shadow-cyan-500",
    image: "/assets/yusu.png",
    badgeColours: "border-cyan-500",
    textColour: "text-cyan-500",
    hoverTextColour: "hover:text-cyan-500",
    link: "https://yusu.org/activities/view/shocksoc",
    buttonMessage: "Visit our YUSU page",
  },
  {
    name: "Discord",
    cardColours: "border-[#5865F2] bg-[#5865F2] shadow-[#5865F2]", // Discord purple
    image: "/assets/discord.png",
    badgeColours: "border-[#5865F2]",
    textColour: "text-[#5865F2]",
    hoverTextColour: "hover:text-[#5865F2]",
    link: "https://discord.gg/UYZNqjxAvR",
    buttonMessage: "Join our Discord server",
  },
  {
    name: "Twitter",
    cardColours: "border-[#1DA1F2] bg-[#1DA1F2] shadow-[#1DA1F2]", // Twitter blue
    image: "/assets/twitter.png",
    badgeColours: "border-[#1DA1F2]",
    textColour: "text-[#1DA1F2]",
    hoverTextColour: "hover:text-[#1DA1F2]",
    link: "https://twitter.com/uoy_shocksoc",
    buttonMessage: "See our Twitter profile",
  },
  {
    name: "Instagram",
    cardColours: "border-[#F56040] bg-[#F56040] shadow-[#F56040]", // Instagram orange red
    image: "/assets/instagram.png",
    badgeColours: "border-[#F56040]",
    textColour: "text-[#F56040]",
    hoverTextColour: "hover:text-[#F56040]",
    link: "https://www.instagram.com/uoy_shocksoc/",
    buttonMessage: "Follow us on Instagram",
  },
  {
    name: "Github",
    cardColours: "border-black bg-black shadow-black",
    image: "/assets/github.png",
    badgeColours: "border-black",
    link: "https://github.com/ShockSoc",
    buttonMessage: "See our GitHub Org",
  },
  {
    name: "E-Mail",
    cardColours: "border-amber-500 bg-amber-500 shadow-amber-500",
    image: <MdEmail />,
    badgeColours: "border-amber-500",
    textColour: "text-amber-500",
    hoverTextColour: "hover:text-amber-500",
    link: "mailto:shocksoc@yusu.org",
    buttonMessage: "Send us an e-mail",
    iconFill: "fill-amber-500",
  },
];

const Info = () => {
  return (
    <div className="w-full bg-slate-200 dark:bg-gray-800 text-gray-900 dark:text-slate-100 flex flex-col p-4">
      <h2 className="self-center text-3xl sm:text-6xl">Where to find us</h2>
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <InfoCard
            key={card.name}
            name={card.name}
            cardColours={card.cardColours}
            badgeColours={card.badgeColours}
            image={card.image}
            textColour={card.textColour}
            hoverTextColour={card.hoverTextColour}
            link={card.link}
            buttonMessage={card.buttonMessage}
            iconFill={card.iconFill}
          />
        ))}
      </div>
    </div>
  );
};

export { Info };
