import React from "react";

type EventCardProps = {
  name: string;
  description: string;
  when: string;
  where: string;
  image?: string;
};

const EventCard: React.FC<EventCardProps> = ({
  name,
  description,
  when,
  where,
  image,
}) => {
  return (
    <div className="w-2/3 rounded shadow-lg border-2 border-slate-900 bg-slate-300 dark:bg-slate-600 flex flex-col">
      <div className="w-full bg-gradient-to-r from-[#65b32e] to-[#0095d6]">
        <p className="text-center p-4 text-slate-100">
          {when} @ {where}
        </p>
      </div>
      <h2 className="self-center text-2xl sm:text-3xl italic my-4">{name}</h2>
      <div className="p-4 text-lg">
        <p>{description}</p>
      </div>
    </div>
  );
};

export { EventCard };
