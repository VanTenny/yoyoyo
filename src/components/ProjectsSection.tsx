
import React from 'react';
import { Github, Camera } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      icon: <Github size={40} />,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      title: "AI Image Generator",
      description: "Machine learning powered image generation application",
      icon: <Camera size={40} />,
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      icon: <Github size={40} />,
      technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    }`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-cyan-400' 
                            : 'bg-gray-100 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`w-full py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                  }`}>
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
