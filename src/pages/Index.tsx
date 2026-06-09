import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import GalleryModal from '../components/GalleryModal';
import epImg from '../assets/EP_26.jpeg.asset.json';
import milanImg from '../assets/Milan.jpeg.asset.json';
import norwayImg from '../assets/Norway.jpeg.asset.json';
import osloImg from '../assets/oslo.jpeg.asset.json';
import parisImg from '../assets/paris.jpeg.asset.json';
import priekestolenImg from '../assets/priekestolen.jpeg.asset.json';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const galleryImages = [
    { src: "/lovable-uploads/29ee7e40-1d52-4035-9d41-fe577728512b.png", title: "Basketball Championship", description: "Secured 3rd place in Hostel 5 General Championships at IIT Bombay" },
    { src: "/lovable-uploads/fc7c8e77-4241-4360-9e2a-fc2909edc5a9.png", title: "Marathon Achievement", description: "Participating in my first 5K Run organized by Avhaan IITB" },
    { src: "/lovable-uploads/76f776b4-d5ff-4f0f-98f8-e4b2a52d1892.png", title: "Hiking", description: "At the summit of Rajgad fort, Maharashtra with my friends" },
    { src: epImg.url, title: "EP_26", description: "" },
    { src: milanImg.url, title: "Milan", description: "" },
    { src: norwayImg.url, title: "Norway", description: "" },
    { src: osloImg.url, title: "Oslo", description: "" },
    { src: parisImg.url, title: "Paris", description: "" },
    { src: priekestolenImg.url, title: "Priekestolen", description: "" },
    { src: "/lovable-uploads/dbaaa8ba-7a6f-4196-aa66-c8be8f2077db.png", title: "Mount Fuji", description: "Climbed Mount Fuji on a crazy hike which took around 7 hours" },
    { src: "/lovable-uploads/13548499-53f1-42f5-b9c4-21774e0afef6.png", title: "Osaka Palace", description: "Travelling and being crazy about Japan define me" },
    { src: "/lovable-uploads/0772ca7f-9177-4e03-ae83-76db7bf4215f.png", title: "Cultural Exchange Dinner", description: "Enjoying time with friends from various countries" }
  ];

  return (
    <div className={`transition-colors duration-700 min-h-screen ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <HeroSection darkMode={darkMode} />
      
      <AboutSection darkMode={darkMode} />
      
      {/* Sleek B&W CV Section */}
      <section 
        id="cv" 
        className={`py-24 px-4 border-t transition-colors duration-700 ${
          darkMode ? 'bg-black border-neutral-900 text-white' : 'bg-white border-neutral-100 text-black'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-tight">
            <span className={`bg-clip-text text-transparent bg-gradient-to-b ${
              darkMode ? 'from-white to-neutral-500' : 'from-black to-neutral-500'
            }`}>
              Curriculum Vitae
            </span>
          </h2>
          <p className={`text-lg mb-10 font-light max-w-md mx-auto tracking-wide ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Download my complete academic portfolio detailing research milestones and computing experience.
          </p>
          <a
            href="https://github.com/VanTenny/CV/blob/main/CV_Tenzing.pdf"
            download="Tenzing_Jampa_Bhutia_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-4 rounded-full font-mono text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 ${
              darkMode
                ? 'bg-white text-black hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                : 'bg-black text-white hover:bg-neutral-800 hover:shadow-[0_0_30px_rgba(0,0,0,0.15)]'
            }`}
          >
            Download CV
          </a>
        </div>
      </section>

      <ProjectsSection darkMode={darkMode} />
      
      {/* High-Contrast Achievements Section */}
      <section 
        id="achievements" 
        className={`py-24 px-4 border-t transition-colors duration-700 ${
          darkMode ? 'bg-black border-neutral-900 text-white' : 'bg-white border-neutral-100 text-black'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif tracking-tight">
            <span className={`bg-clip-text text-transparent bg-gradient-to-b ${
              darkMode ? 'from-white via-neutral-200 to-neutral-500' : 'from-black via-neutral-700 to-neutral-400'
            }`}>
              Achievements & Recognition
            </span>
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
                year: "2025"
              },
              { 
                title: "A+ in Japanese Communication", 
                description: "Awarded an A+ in a 100-hour Japanese Communication course offered by IIT Bombay's Office of International Relations.",
                year: "2024"
              },
              { 
                title: "Basketball Championship Podium", 
                description: "Completed a yearlong basketball training at IIT Bombay and secured 3rd place in the Hostel 5 General Championships.",
                year: "2025"
              }
            ].map((achievement, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl transition-all duration-500 hover:scale-[1.02] border backdrop-blur-md ${
                  darkMode 
                    ? 'bg-white/[0.01] border-white/10 hover:border-white/30 hover:bg-white/[0.03]' 
                    : 'bg-black/[0.01] border-black/10 hover:border-black/30 hover:bg-black/[0.03]'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-lg font-serif font-bold tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
                    {achievement.title}
                  </h3>
                  <span className={`text-xs font-mono px-2 py-1 rounded border tracking-wider ${
                    darkMode ? 'bg-white/5 border-white/10 text-neutral-300' : 'bg-black/5 border-black/10 text-neutral-600'
                  }`}>
                    {achievement.year}
                  </span>
                </div>
                <p className={`text-sm font-light leading-relaxed tracking-wide ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Image Gallery Section */}
      <section 
        id="gallery" 
        className={`py-24 px-4 border-t transition-colors duration-700 ${
          darkMode ? 'bg-black border-neutral-900 text-white' : 'bg-white border-neutral-100 text-black'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif tracking-tight">
            <span className={`bg-clip-text text-transparent bg-gradient-to-b ${
              darkMode ? 'from-white to-neutral-500' : 'from-black to-neutral-500'
            }`}>
              Gallery
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`aspect-square overflow-hidden rounded-lg group relative cursor-pointer border ${
                  darkMode ? 'border-white/5' : 'border-black/5'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Modern Dark Minimalist Gradient Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-5 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <h4 className="font-serif font-bold text-sm mb-1 tracking-tight">{image.title}</h4>
                    <p className="text-xs font-light font-sans opacity-80 tracking-wide">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection darkMode={darkMode} />
      
      {selectedImage && (
        <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} darkMode={darkMode} />
      )}
    </div>
  );
};

export default Index;
