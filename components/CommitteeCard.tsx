import Image from "next/image";
import React from "react";

type CommitteeCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const CommitteeCard: React.FC<CommitteeCardProps> = ({
  name,
  role,
  bio,
  image,
}) => {
  return (
    <a id={name} className="group" href={`#${name}`}>
      <div className="rounded-lg p-2 bg-gradient-to-br from-[#65b32e] to-[#0095d6] h-[500px]">
        <div className="w-full h-full relative">
          <div className="w-full h-full relative">
            <Image
              src={image}
              alt={`Picture of ${name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-gradient-to-br from-[#65b32e]/50 to-[#0095d6]/50 absolute bottom-0 left-0 right-0 p-2 overflow-scroll text-white">
            <p className="text-3xl sm:text-4xl">{name}</p>
            <p className="text-xl sm:text-2xl italic">{role}</p>
            <p className="mt-4 text-[0px] group-focus:text-lg sm:group-focus:text-xl transition-[font] duration-200 ease-in-out">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CommitteeCard;
