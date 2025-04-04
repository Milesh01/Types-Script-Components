import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setPosition({ x, y });
  };

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 border p-4 border-green-800 rounded-3xl relative overflow-hidden hover:shadow-lg transition-all"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setPosition({ x: 0, y: 0 });
      }}
    >
      <div>
        <span className='px-3 py-1 bg-green-800 rounded-full text-white text-sm inline-block mb-3'>
          {project.id} • {project.category}
        </span>
        <h3 className="text-xl lg:text-3xl md:text-2xl font-medium text-gray-800 mt-2">{project.title}</h3>
      </div>
      
      <div className="relative lg:h-36 w-full lg:w-64">
        <div 
          className="transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `translate(${isHovering ? position.x : 0}px, ${isHovering ? position.y : 0}px)`,
          }}
        >
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            width={1000} 
            height={1000} 
            className="rounded-lg w-full lg:h-36 object-contain"
          />
        </div>
      </div>
      
      <div className="text-gray-600">
        <a href="#" className="flex items-center font-semibold gap-1 hover:text-lime-400 transition-all group">
          View Case Study 
          <RiArrowRightUpLine className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <p className='text-base mt-3 leading-relaxed truncate-20words'>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;