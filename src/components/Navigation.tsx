import React from 'react';
import { Moon, Github, Linkedin, Mail, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['about', 'cv', 'projects', 'achievements', 'gallery', 'contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      darkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Tenzing Jampa
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((section) => (
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

          {/* Social Links, Dark Mode Toggle, and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex space-x-2">
              <a
                href="mailto:22B1808@iitb.ac.in"
                className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/VanTenny"
                className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/TenzinZen27"
                className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-gray-100 text-blue-600'
              }`}
              aria-label="Toggle dark mode"
            >
              <Moon size={20} />
            </button>

            {/* Mobile Sidebar Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-gray-100 text-blue-600'
                  }`}
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-gray-900'}
              >
                <SheetHeader>
                  <SheetTitle className={darkMode ? 'text-white' : 'text-gray-900'}>
                    Navigation
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col space-y-4 mt-8">
                      {navItems.map((section) => (
                        <button
                          key={section}
                          onClick={() => scrollToSection(section)}
                          className={`px-4 py-3 rounded-md text-left font-medium transition-all duration-300 ${
                            darkMode 
                              ? 'hover:bg-gray-700 hover:text-cyan-400' 
                              : 'hover:bg-gray-100 hover:text-blue-600'
                          }`}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                      ))}
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
