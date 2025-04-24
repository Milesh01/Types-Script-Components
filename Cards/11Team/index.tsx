import { FC } from "react";
import TeamCard from "@/components/common/cards/teamCard";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "Amit Kumar",
    role: "CEO Interse",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744630717/testimonials2_gxef8f.avif",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Rajeev Kumar",
    role: "Designer",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744630718/testimonials_yuipli.avif",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Rekha",
    role: "Designer",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744630717/testimonials5_kp4zyt.avif",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const Team: FC = () => {
  return (
    <section className=" bg-white text-black">
        <div className="container mx-auto px-4 lg:px-16 md:py-28 py-5 text-center">
        <p className="text-sm tracking-widest text-primary-accent uppercase ">Our Team</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet With <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] pl-1"> Professional </span> Team</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
      A passionate group of experts dedicated to delivering innovative, high-quality solutions. Together, we turn your ideas into reality with precision and care.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
            />
          ))}
      </div>
      </div>
    </section>
  );
};

export default Team;