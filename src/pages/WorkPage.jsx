import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import NavigationButtons from '../components/layout/NavigationButtons';
import mentor from '../assets/mentor.PNG';
import chickCentric from '../assets/chickCentric.jpg';
import AmisCouture from '../assets/AmisCouture.jpg';

const WorkPage = () => {
  const projects = [
    {
      title: "4Life Mentorship Platform",
      image: mentor,
      category: "Web Development",
      description: "An ALX team project facilitating meaningful mentor-mentee connections in professional fields. Built with React frontend and REST API integration, featuring user authentication, profile matching, scheduling system, and a dynamic dashboard for tracking mentorship progress. Led frontend development implementing responsive design and modern UI components.",
      github: "https://github.com/AmyZi/School_Portal",
      showGithub: true
    },
    {
      title: "Chick Centric",
      image: chickCentric,
      category: "E-commerce",
      description: "An online marketplace showcasing authentic Nigerian traditional wear, featuring a curated collection of ankara, aso-oke, and lace designs. Complete with size customization, fabric selection, and nationwide delivery tracking.",
      live: "https://chickcentric.ng",
      showGithub: false
    },
    {
      title: "Amis Bridal Couture ",
      image: AmisCouture,
      category: "E-commerce",
      description: "A bespoke clothing platform offering personalized fashion design services. Features include real-time measurement input, fabric customization, virtual style consultations, and a seamless order tracking system for your custom-made pieces.",
      live: "https://amiscouture.com",
      showGithub: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-[1px] bg-primary-200"></div>
            <h1 className="text-5xl font-bold text-primary-800">My Work</h1>
            <div className="w-20 h-[1px] bg-primary-200"></div>
          </div>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            A showcase of my full-stack development projects, 
            from educational platforms to e-commerce solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-80 mb-2">{project.category}</p>
                  <p className="text-sm opacity-80 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    {project.showGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-sm"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <NavigationButtons 
            prev="/about" 
            next="/" 
            isLastSlide={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
