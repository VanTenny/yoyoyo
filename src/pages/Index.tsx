
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-mono">
            Curriculum Vitae
          </h2>
          <p className={`text-lg mb-8 font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-sans">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              { title: "Senior Full Stack Developer", company: "Tech Innovations Ltd.", period: "2021 - Present" },
              { title: "Frontend Developer", company: "Digital Solutions Inc.", period: "2019 - 2021" },
              { title: "Junior Developer", company: "StartUp Ventures", period: "2018 - 2019" }
            ].map((job, index) => (
              <div key={index} className={`p-6 rounded-2xl font-light ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className="text-xl font-semibold mb-2 font-serif">{job.title}</h3>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-sans">
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Best Developer Award 2023", 
                description: "Recognized for exceptional performance and innovative solutions in software development.",
                icon: "🏆"
              },
              { 
                title: "10+ Successful Projects Delivered", 
                description: "Successfully completed and delivered numerous high-impact projects on time and within budget.",
                icon: "📊"
              },
              { 
                title: "Open Source Contributor", 
                description: "Active contributor to various open-source projects with significant community impact.",
                icon: "💻"
              },
              { 
                title: "Tech Speaker at 5+ Conferences", 
                description: "Invited speaker at multiple technology conferences sharing expertise and insights.",
                icon: "🎤"
              },
              { 
                title: "Innovation Award Winner", 
                description: "Awarded for developing innovative solutions that improved operational efficiency by 40%.",
                icon: "💡"
              },
              { 
                title: "Led Team of 8 Developers", 
                description: "Successfully managed and mentored a diverse team of developers on multiple projects.",
                icon: "👥"
              }
            ].map((achievement, index) => (
              <div key={index} className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 border ${
                darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              } shadow-lg hover:shadow-xl`}>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-serif text-blue-500">{achievement.title}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed font-light`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-mono">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop", title: "AI Development", description: "Working on machine learning algorithms and neural networks" },
              { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop", title: "Code Matrix", description: "Deep diving into complex programming challenges" },
              { src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=300&fit=crop", title: "Web Development", description: "Creating responsive and interactive web applications" },
              { src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop", title: "Tech Conference", description: "Speaking at technology conferences and meetups" },
              { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop", title: "Laptop Coding", description: "Late night coding sessions and project development" },
              { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", title: "Data Science", description: "Analyzing data patterns and creating visualizations" },
              { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop", title: "Software Architecture", description: "Designing scalable software systems and architecture" },
              { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop", title: "Professional Photo", description: "Professional headshot for conferences and presentations" }
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl group relative">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 ${
                  darkMode ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-black/70 to-transparent'
                }`}>
                  <div className="text-white">
                    <h4 className="font-bold text-sm mb-1 font-serif">{image.title}</h4>
                    <p className="text-xs font-light opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection darkMode={darkMode} />
      
      {/* Footer */}
      <footer className={`py-8 text-center font-light ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-300'}`}>
        <p>&copy; 2024 Tenzing Jampa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
