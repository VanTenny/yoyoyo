import React from 'react';
import { Github, CircuitBoard, Cpu, Bot, Telescope, Plane } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Mechanical Impacting System Simulation",
      description:
        "Simulated and analyzed the electrical equivalent of a mechanical impacting system, identifying conditions for chaotic behavior and resolving analytical flaws using Python and differential calculus.",
      icon: <CircuitBoard size={40} />,
      technologies: ["Python", "Differential Equations", "Data Analysis"],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      link: "https://github.com/VanTenny/Mechanical-Impacting-Simulation-System/blob/main/Mechanical%20Impacting%20Systems-compressed.pdf"
    },
    {
      title: "LIGO on a Breadboard",
      description:
        "Engineered a closed-loop feedback system using Op-amps and phototransistors; designed a proportional controller for robust performance across varying light frequencies.",
      icon: <Cpu size={40} />,
      technologies: ["Analog Electronics", "Op-amps", "Control Systems"],
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=250&fit=crop"
      // No link
    },
    {
      title: "Smart Appliance Infrared Controller",
      description:
        "Developed an Arduino-based IR controller with Bluetooth integration, enabling remote operation and storage for multiple devices.",
      icon: <Github size={40} />,
      technologies: ["Arduino", "Bluetooth", "Embedded Systems"],
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=250&fit=crop",
      link: "https://thiv.notion.site/Final-Report-for-PH-222-Spring-2024-Project-61365b03fb5d447a86708852a27adea0"
    },
    {
      title: "Line Following Bot",
      description:
        "Built a Bluetooth-controlled line-following robot with IR sensors and rocker-bogie suspension, inspired by Wall-E, and selected for institute-wide exhibition.",
      icon: <Bot size={40} />,
      technologies: ["Robotics", "Bluetooth", "Embedded Systems", "IR Sensors"],
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop"
      // No link
    },
    {
      title: "RC Trainer Plane",
      description:
        "Designed and constructed a remote-controlled trainer plane, carefully dimensioning control surfaces and integrating electronics. Completed training in flight dynamics and control systems.",
      icon: <Plane size={40} />,
      technologies: ["Aerodynamics", "Embedded Systems", "Flight Dynamics", "RC Design"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop"
      // No link
    },
    {
      title: "Cosmology and Dark Matter Report",
      description:
        "Authored a comprehensive report on cosmology and dark matter, exploring Big Bang theory, cosmic microwave background, general relativity, and dark matter candidates.",
      icon: <Telescope size={40} />,
      technologies: ["Astrophysics", "LaTeX", "Scientific Writing"],
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=250&fit=crop",
      link: "https://github.com/VanTenny/cosmology-and-dark-matter-report/blob/main/SOS_Tenzing.pdf"
    },
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
                  
                  {/* Only render the View Project button if a link exists */}
                  {'link' in project && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-2 rounded-lg font-medium text-center transition-all duration-300 transform hover:scale-105 ${
                        darkMode 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                          : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      }`}
                    >
                      View Project
                    </a>
                  )}
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
