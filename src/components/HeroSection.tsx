
import React from 'react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/6d01476a-c61c-431a-93b3-eed392e50c3f.png')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/50' : 'bg-black/30'}`}></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
            alt="Tenzing Jampa"
            className="w-48 h-48 rounded-full mx-auto border-4 border-gradient-to-r from-blue-400 to-purple-600 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in delay-300 text-white font-serif tracking-wider">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-extrabold italic">
            Tenzing Jampa
          </span>
        </h1>
        
        <div className="mb-8 animate-fade-in delay-400">
          <p className="text-lg md:text-xl mb-2 text-gray-200">
            Fourth Year Undergraduate at <span className="font-semibold text-blue-400">IIT Bombay</span>
          </p>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Majoring in <span className="font-semibold text-purple-400">Engineering Physics</span>
          </p>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-500 text-gray-200">
          Full Stack Developer & Creative Innovator
        </p>
        
        <div className="animate-fade-in delay-700">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            Explore My Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
