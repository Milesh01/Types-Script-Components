import { FaArrowRight } from "react-icons/fa";
import { LiaSlideshare } from "react-icons/lia";
import { RiShape2Line } from "react-icons/ri";
import { HiMiniHashtag } from "react-icons/hi2";

const cards = [
  {
    title: "Adaptive Leadership Framework",
    description: "Learn to navigate and lead through complex and rapidly changing environments.",
    icon: <RiShape2Line />,
    bg: "bg-black text-white",
  },
  {
    title: "Transformational Leadership Techniques",
    description: "Discover powerful strategies to inspire and drive positive organizational change.",
    icon: <HiMiniHashtag />,
    bg: "bg-green-900 text-white",
  },
  {
    title: "Influential Communication Mastery",
    description: "Develop advanced communication skills to effectively engage and influence stakeholders.",
    icon: <LiaSlideshare />,
    bg: "bg-gray-900 text-white",
  },
];

export default function LeadershipCards() {
  return (
    <div className="md:grid grid-cols-3 lg:gap-10 gap-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative group p-8 mt-4 rounded-xl flex flex-col justify-between ${card.bg} shadow-lg hover:scale-105 transition-all duration-300 ease-in-out h-[300]`}
        >
          <div>
            <h3 className="text-xl lg:text-3xl">{card.title}</h3>
            <p className="text-sm lg:text-lg mt-5 text-gray-300">{card.description}</p>
           
          </div>
          <div className="absolute bottom-0 ps-8 left-0  transform transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-x-[-150px]">
          <span className="text-8xl text-gray-300 opacity-20">{card.icon}</span>
          </div>
          <div className={`absolute -bottom-2 -right-3 w-20 h-20 flex items-center justify-center rounded-full  ${card.bg} text-white border-[10px] group-hover:border-[5px] border-white transform transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-[220px] group-hover:-translate-x-5`}>
            <FaArrowRight className="text-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
}