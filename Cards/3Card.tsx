import React from 'react';
import ProjectCard from '@/components/common/projectCard';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "My Child Therapy",
      description: "A therapy platform for children with special needs. Designed with calming colors and intuitive interfaces.",
      imageUrl: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1743771243/mct_j8pfez.webp",
      category: "Childcare"
    },
    {
      id: 2,
      title: "WS Clinic",
      description: "Medical clinic management system with appointment scheduling and patient records management.",
      imageUrl: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647821/WSClinic1_z3gxtl.png",
      category: "Healthcare"
    },
    {
        id: 3,
        title: "Cli Start",
        description: "Medical clinic management system with appointment scheduling and patient records management.",
        imageUrl: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1742891155/CliStartLogo-mk_mizwwj.png",
        category: "Healthcare"
      },
    // Add more projects as needed
  ];

  return (
    <section className='text-black max-w-6xl mx-auto px-4 py-12'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800">Sample Works</h2>
        <p className="text-gray-800 text-lg max-w-xl mx-auto lg:col-span-2">
          From sleek landing pages to full-fledged business platforms, we provide end-to-end design solutions.
        </p>
      </div>   

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;