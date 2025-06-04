
import React from 'react';
import { Moon, Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      darkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Tenzing Jampa
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['about', 'cv', 'projects', 'experience', 'achievements', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'hover:bg-gray-700 hover:text-cyan-400' 
                      : 'hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="mailto:your.email@example.com" className="p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <Mail size={20} />
              </a>
              <a href="tel:+1234567890" className="p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <Phone size={20} />
              </a>
              <a href="https://github.com" className="p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <Instagram size={20} />
              </a>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-gray-100 text-blue-600'
              }`}
            >
              <Moon size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
