
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <HeroSection darkMode={darkMode} />
      
      <AboutSection darkMode={darkMode} />
      
      {/* CV Section */}
      <section id="cv" className={`py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Curriculum Vitae
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Download my complete CV to learn more about my professional journey
          </p>
          <button className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
          }`}>
            Download CV
          </button>
        </div>
      </section>

      <ProjectsSection darkMode={darkMode} />
      
      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              { title: "Senior Full Stack Developer", company: "Tech Innovations Ltd.", period: "2021 - Present" },
              { title: "Frontend Developer", company: "Digital Solutions Inc.", period: "2019 - 2021" },
              { title: "Junior Developer", company: "StartUp Ventures", period: "2018 - 2019" }
            ].map((job, index) => (
              <div key={index} className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className={`${darkMode ? 'text-cyan-400' : 'text-blue-600'} font-medium mb-2`}>{job.company}</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{job.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className={`py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "🏆 Best Developer Award 2023",
              "🎯 10+ Successful Projects Delivered",
              "🌟 Open Source Contributor",
              "📚 Tech Speaker at 5+ Conferences",
              "💡 Innovation Award Winner",
              "🚀 Led Team of 8 Developers"
            ].map((achievement, index) => (
              <div key={index} className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}>
                <p className="text-lg font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop"
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl group">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection darkMode={darkMode} />
      
      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-300'}`}>
        <p>&copy; 2024 Tenzing Jampa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
