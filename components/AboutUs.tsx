import React from "react";
import CommitteeCard from "./CommitteeCard";

const committee = [
  {
    name: "Giuseppe",
    role: "Secretary",
    bio: "Hi everyone, I'm Giuseppe and I'm ShockSoc Secretary. I'm a third year Electronic and Computer engineering student. Other than electronics, my interests are software engineering, motorsports and keeping active. Can't wait to see you all in the labs",
    image: "/assets/giuseppe.jpg",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-slate-100 dark:bg-gray-700 group">
        <div className="flex flex-col items-center justify-center w-full h-[300px] text-black dark:text-white">
          <h1 className="text-5xl sm:text-7xl font-bold my-4">About Us</h1>
        </div>
      </div>
      <div className="bg-slate-200 dark:bg-gray-800 text-gray-900 dark:text-slate-100 py-12 px-10 sm:px-20 md:px-30 lg:px-40 flex flex-col">
        <p className="self-center italic text-4xl sm:text-5xl">Who are we?</p>
        <p className="text-xl sm:text-2xl my-4">
          We are the{" "}
          <span className="bg-clip-text bg-gradient-to-r from-[#65b32e] to-[#0095d6] text-transparent font-bold">
            Engineering
          </span>{" "}
          society at the{" "}
          <span className="bg-clip-text bg-gradient-to-r from-[#fbb800] to-[#0095d6] text-transparent font-bold">
            University of York
          </span>
          . We run a variety of regular events, including:
        </p>
        <ul className="text-lg sm:text-xl self-center list-inside list-[square]">
          <li className="text-[#65b32e]">
            <span className="text-gray-900 dark:text-slate-100">
              Weekly lab sessions
            </span>
          </li>
          <li className="text-[#fbb800]">
            <span className="text-gray-900 dark:text-slate-100">
              Social events
            </span>
          </li>
          <li className="text-[#0095d6]">
            <span className="text-gray-900 dark:text-slate-100">
              Projects {"&"} challenges
            </span>
          </li>
        </ul>
        <p className="self-center italic text-4xl sm:text-5xl mt-12">
          Our Committee
        </p>
        <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3">
          {committee.map((member) => (
            <CommitteeCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { AboutUs };
