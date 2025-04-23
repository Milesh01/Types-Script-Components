import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
interface RecentPostCardProps {
  title: string;
  date: string;
  image: string;
  link: string;
}

const RecentPostCard: React.FC<RecentPostCardProps> = ({ title, date, image, link }) => {
  return (
    <Link href={link} className="flex gap-4 items-start hover:bg-gray-100 p-3 rounded-lg transition-all group">
    <div className="w-20 h-20 overflow-hidden rounded-md">
  <Image
    src={image}
    alt={title}
    height={1000}
    width={1000}
    className="w-full h-full object-cover shadow-sm transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 flex items-center gap-1 mb-1">
          <IoTimeOutline className="w-4 h-4" />
          {date}
        </p>
        <h4 className="text-md mt-2 font-medium text-gray-800 group-hover:text-green-800 leading-snug line-clamp-2">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default RecentPostCard;
