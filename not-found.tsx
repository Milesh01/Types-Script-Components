"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";

const NotFoundPage = () => {
  const pathname = usePathname();

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-5"
      style={{
        backgroundImage: `url('https://framerusercontent.com/images/uzpCtuYDgW95T4BOxvHZMRJKE.png?scale-down-to=2048')`
      }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center flex-col flex justify-center items-center md:h-[600px]">
          <h1 className="font-bold md:text-7xl text-4xl">
            Whooops!
          </h1>
          <p className="mt-5">
            You may have typed the wrong URL <b className="text-red-800">&quot;{pathname}&quot;</b> or this page has been removed.
          </p>
          <Link
            href="/" 
            className="grow_skew_backward text-white bg-[#02312fc6] rounded-full py-4 px-6 md:ml-10 mt-6 flex justify-center items-center dm-sans"
          >
            Go To Home Page &nbsp; <MdArrowOutward size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
