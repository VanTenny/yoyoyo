import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const projects = [
  {
    title: "Wind Turbine Drive Train Simulation",
    tag: "Research · University of Agder, Norway",
    description:
      "Built a high-fidelity MATLAB/Simulink model of a 2MW wind turbine drive train, implementing a five-interval control strategy to regulate rotor speed across wind conditions from 0 to 25 m/s. Modelled generator torque and hydraulic pitch servo dynamics, and verified robustness through transient ramp and step-jump simulations.",
    technologies: ["MATLAB", "Simulink", "Simscape", "Control Systems"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/4C_offshore_wind_farm.jpg/1280px-4C_offshore_wind_farm.jpg",
    link: null,
  },
  {
    title: "Statistical Mechanics of Polymer Chains",
    tag: "B.Tech Project · IIT Bombay",
    description:
      "Derived scaling laws for freely jointed, freely rotating, and worm-like chain architectures. Applied Flory mean-field theory and the thermal blob model to map the transition from ideal Gaussian to swollen coil states, then wrote computational simulations confirming the R ~ N³/⁵ exponent for self-avoiding walks.",
    technologies: ["Statistical Physics", "Python", "Monte Carlo", "Scaling Theory"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ideal_chain_random_walk.svg/800px-Ideal_chain_random_walk.svg.png",
    link: null,
  },
  {
    title: "Mechanical Impacting System — Electrical Analogue",
    tag: "Non-linear Dynamics · IIT Bombay",
    description:
      "Reproduced and extended a published paper on the electrical equivalent of a 1-DOF mechanical impacting system. Identified the correct conditions for the period-1 → chaos → period-2 bifurcation sequence, and resolved a flaw in the original analysis using Python-generated phase plots and differential calculus.",
    technologies: ["Python", "LTspice", "Nonlinear Dynamics", "Bifurcation Analysis"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lorenz_attractor_yb.svg/1200px-Lorenz_attractor_yb.svg.png",
    link: "https://github.com/VanTenny/Mechanical-Impacting-Simulation-System/blob/main/Mechanical%20Impacting%20Systems-compressed.pdf",
  },
  {
    title: "RL Agent for Highway Self-Driving",
    tag: "Machine Learning · IIT Bombay Summer of Coding",
    description:
      "Implemented and compared Q-Learning, PPO, DDPG, and SAC algorithms on a simulated highway environment. The project was an 8-week structured programme — good for getting hands-on with RL from scratch rather than just reading about it.",
    technologies: ["Python", "PyTorch", "PPO", "DDPG", "SAC", "OpenAI Gym"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Self_driving_car.jpg/1280px-Self_driving_car.jpg",
    link: null,
  },
  {
    title: "Cosmology and Dark Matter — Research Report",
    tag: "Self Project · IIT Bombay Summer of Science",
    description:
      "An 8-week deep-dive into foundational and frontier cosmology: Big Bang theory, CMB as observational evidence, general relativity in cosmological models, and the landscape of dark matter candidates — WIMPs, axions, and sterile neutrinos. Written in LaTeX with figures and derivations throughout.",
    technologies: ["Astrophysics", "General Relativity", "LaTeX", "Scientific Writing"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Planck_CMB.jpg/1280px-Planck_CMB.jpg",
    link: "https://github.com/VanTenny/cosmology-and-dark-matter-report/blob/main/SOS_Tenzing.pdf",
  },
];

const smallerProjects = [
  {
    title: "Universal IR Remote Controller",
    tag: "Electronics · IIT Bombay",
    description:
      "Built a microcontroller-based universal IR remote that decodes and replays signals from common consumer electronics. A first-year electronics project — modest in scope, but a good intro to embedded signal handling.",
    technologies: ["Arduino", "C", "IR Protocols", "Embedded"],
    image: "/lovable-uploads/ir-controller-thumb.jpg",
    link: null,
  },
  {
    title: "Line Following Bot",
    tag: "Robotics · IIT Bombay",
    description:
      "Designed and built a two-wheeled line follower with IR reflectance sensors and a PID-tuned motor control loop. Selected as one of the best out of 120+ teams for the institute-wide exhibition.",
    technologies: ["Arduino", "PID Control", "IR Sensors", "Circuit Design"],
    image: "/lovable-uploads/line-bot-thumb.jpg",
    link: null,
  },
];

const tagColors: Record<string, { dot: string; text: string; bg: string; darkBg: string }> = {
  "Research · University of Agder, Norway": {
    dot: "#34d399", text: "#34d399", bg: "rgba(52,211,153,0.08)", darkBg: "rgba(52,211,153,0.08)"
  },
  "B.Tech Project · IIT Bombay": {
    dot: "#60a5fa", text: "#60a5fa", bg: "rgba(96,165,250,0.08)", darkBg: "rgba(96,165,250,0.08)"
  },
  "Non-linear Dynamics · IIT Bombay": {
    dot: "#f472b6", text: "#f472b6", bg: "rgba(244,114,182,0.08)", darkBg: "rgba(244,114,182,0.08)"
  },
  "Machine Learning · IIT Bombay Summer of Coding": {
    dot: "#fb923c", text: "#fb923c", bg: "rgba(251,146,60,0.08)", darkBg: "rgba(251,146,60,0.08)"
  },
  "Self Project · IIT Bombay Summer of Science": {
    dot: "#a78bfa", text: "#a78bfa", bg: "rgba(167,139,250,0.08)", darkBg: "rgba(167,139,250,0.08)"
  },
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className={`text-base max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              A selection of work across physics, simulation, and machine learning — roughly in order of how proud I am of them.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, index) => {
              const colors = tagColors[project.tag];
              const isHovered = hovered === index;

              return (
                <div
                  key={project.title}
                  className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  } ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                  style={{
                    animationDelay: `${index * 120}ms`,
                    boxShadow: isHovered
                      ? darkMode
                        ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(96,165,250,0.2)'
                        : '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(96,165,250,0.3)'
                      : darkMode
                        ? '0 2px 16px rgba(0,0,0,0.3)'
                        : '0 2px 16px rgba(0,0,0,0.06)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay always present, stronger on hover */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
                        opacity: isHovered ? 1 : 0.7,
                      }}
                    />
                    {/* Tag pill on image */}
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                      style={{
                        background: 'rgba(0,0,0,0.45)',
                        color: colors.text,
                        border: `1px solid ${colors.dot}33`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: colors.dot }}
                      />
                      {project.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3
                      className={`text-lg font-bold mb-3 leading-snug ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed flex-1 mb-5 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                            darkMode
                              ? 'bg-gray-800 text-gray-300 border border-gray-700'
                              : 'bg-gray-100 text-gray-600 border border-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA — only if link exists */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        View Project
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
