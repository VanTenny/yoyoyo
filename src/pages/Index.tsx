import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import GalleryModal from '../components/GalleryModal';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

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

  const galleryImages = [
    { src: "/lovable-uploads/29ee7e40-1d52-4035-9d41-fe577728512b.png", title: "Basketball Championship", description: "Secured 2nd place in Hostel 5 General Championships at IIT Bombay" },
    { src: "/lovable-uploads/fc7c8e77-4241-4360-9e2a-fc2909edc5a9.png", title: "Marathon Achievement", description: "Participating in my first 5K Run organized by Avhaan IITB" },
    { src: "/lovable-uploads/76f776b4-d5ff-4f0f-98f8-e4b2a52d1892.png", title: "Hiking", description: "At the summit of Rajgad fort, Maharashtra with my friends" },
    { src: "/lovable-uploads/094dd071-8534-4c4c-b731-9b1417dd0418.png", title: "Botanical Garden", description: "Just me chilling" },
    { src: "/lovable-uploads/dbaaa8ba-7a6f-4196-aa66-c8be8f2077db.png", title: "Mount Fuji", description: "Climbed Mount Fuji on a crazy hike which took around 7 hours" },
    { src: "/lovable-uploads/13548499-53f1-42f5-b9c4-21774e0afef6.png", title: "Osaka Palace", description: "Travelling and being crazy about Japan define me" },
    { src: "/lovable-uploads/0772ca7f-9177-4e03-ae83-76db7bf4215f.png", title: "Cultural Exchange Dinner", description: "Enjoying time with friends from various countries" }
  ];

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
      Download my complete CV to learn more about my academic and research journey.
      </p>
      <a
        href="https://github.com/VanTenny/CV/blob/main/CV_Tenzing.pdf"
        download="Tenzing_Jampa_Bhutia_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
          darkMode
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
            : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
        }`}
        >
        Download CV
      </a>
    </div>
    </section>


      <ProjectsSection darkMode={darkMode} />
      
      {/* Achievements Section */}
      <section id="achievements" className={`py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-serif">
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Top 1.10% in JEE Main", 
                description: "Secured a position in the top 1.10% among 0.9 million+ candidates in the JEE Main examination.",
                year: "2022"
              },
              { 
                title: "Top 2.57% in JEE Advanced", 
                description: "Achieved a top 2.57% rank among 0.15 million+ candidates in the JEE Advanced examination.",
                year: "2022"
              },
              { 
                title: "Institute Exhibition Selection", 
                description: "Selected as one of the best teams out of 120+ for institute-wide exhibition for the Line Following Bot project at IIT Bombay.",
                year: "2023"
              },
              { 
                title: "Perfect Score in Product Design", 
                description: "Received a perfect score (10/10) from PhD-level evaluators for all product design projects in the DE344 course.",
                year: "2024"
              },
              { 
                title: "A+ in Japanese Communication", 
                description: "Awarded an A+ in a 100-hour Japanese Communication course offered by IIT Bombay's Office of International Relations.",
                year: "2024"
              },
              { 
                title: "Basketball Championship Podium", 
                description: "Completed a yearlong basketball training at IIT Bombay and secured 3rd place in the Hostel 5 General Championships.",
                year: "2023"
              }
            ].map((achievement, index) => (
              <div key={index} className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg border ${
                darkMode ? 'bg-gray-900 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-blue-500 font-sans">{achievement.title}</h3>
                  <span className={`text-sm px-2 py-1 rounded ${
                    darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {achievement.year}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {achievement.description}
                </p>
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
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-xl group relative cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4 ${
                  darkMode ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-black/70 to-transparent'
                }`}>
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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

      {/* Gallery Modal */}
      {selectedImage && (
        <GalleryModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageTitle={selectedImage.title}
          imageDescription={selectedImage.description}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default Index;
