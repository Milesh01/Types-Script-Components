import Image from "next/image";
import { FC } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

const TeamCard: FC<TeamCardProps> = ({ name, role, image, social }) => {
  return (
    <div className="relative overflow-hidden transition-shadow duration-300 group">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={name}
          className="w-full h-96 object-cover"
        />

        <div className="p-4 bg-white w-52 absolute bottom-0 z-10">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 translate-y-96 group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>

        <div className="absolute inset-0 flex items-start justify-start pb-8 opacity-0 group-hover:opacity-100 translate-y-72 group-hover:translate-y-60 z-10 transition-all duration-500 ease-in-out">
          <div className="flex p-3 rounded-full space-x-4">
            <a
              href={social?.facebook || "#"}
              className="bg-primary-accent rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-umber transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href={social?.twitter || "#"}
              className="bg-primary-accent rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-umber transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href={social?.instagram || "#"}
              className="bg-primary-accent rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-umber transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
