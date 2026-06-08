import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-4 transition-colors duration-700 selection:bg-neutral-500/30 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif tracking-tight">
            <span className={`bg-clip-text text-transparent bg-gradient-to-b ${
              darkMode 
                ? 'from-white via-neutral-200 to-neutral-500' 
                : 'from-black via-neutral-700 to-neutral-400'
            }`}>
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Narrative Text */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in delay-300' : ''}`}>
              <p className={`text-lg md:text-xl font-light leading-relaxed tracking-wide ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                I'm Tenzing, a final-year <span className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Engineering Physics</span> student at IIT Bombay, originally from
                Kalimpong in the eastern Himalayas. My work tends to sit at the intersection of
                physics and computation whether that's modelling polymer chains, simulating wind
                turbine drive trains, or training RL agents.
              </p>

              <p className={`text-lg md:text-xl font-light leading-relaxed tracking-wide ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                I spent Autumn 2025 as an exchange student at the <span className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>University of Agder in Norway</span>,
                which was equal parts great research experience and a genuine culture shock. Outside
                academics, I play basketball, speak six languages, and pick up random side projects
                that usually teach me more than I expected.
              </p>

              {/* Minimalist Skill Pills */}
              <div className="flex flex-wrap gap-2.5 mt-10">
                {[
                  'Python', 'C++', 'MATLAB / Simulink', 'Machine Learning',
                  'LaTeX', 'Scikit-learn', 'PyTorch', 'Nonlinear Dynamics', 'Figma', 'Knime'
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-mono tracking-tight transition-all duration-300 hover:scale-[1.03] backdrop-blur-sm ${
                      darkMode
                        ? 'bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10'
                        : 'bg-black/[0.03] border border-black/10 text-neutral-600 hover:text-black hover:border-black/30 hover:bg-black/5'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Facts Panel */}
            <div className={`relative ${isVisible ? 'animate-fade-in delay-500' : ''}`}>
              {/* Decorative Accent Blur Behind Card */}
              <div className={`absolute -inset-4 blur-2xl opacity-50 rounded-3xl ${
                darkMode ? 'bg-white/5' : 'bg-black/5'
              }`} />
              
              <div className={`relative rounded-2xl p-8 md:p-10 backdrop-blur-md transition-colors duration-500 ${
                darkMode
                  ? 'bg-white/[0.02] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
                  : 'bg-black/[0.02] border border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
              }`}>
                <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight">
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                    darkMode 
                      ? 'from-white to-neutral-500' 
                      : 'from-black to-neutral-500'
                  }`}>
                    Quick Facts
                  </span>
                </h3>
                
                <ul className={`space-y-4 text-base md:text-lg font-light tracking-wide ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  <li className="flex items-start gap-3">
                    <span className="grayscale opacity-80">🎓</span> 
                    <span>B.Tech Engineering Physics · IIT Bombay ('26)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grayscale opacity-80">🔬</span> 
                    <span>Condensed Matter · Nonlinear Dynamics · Astrophysics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grayscale opacity-80">🏅</span> 
                    <span>Top 1.1% JEE Main · Top 2.6% JEE Advanced</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grayscale opacity-80">🌏</span> 
                    <span>Six languages: English, Hindi, Nepali, Tibetan, Japanese, German</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grayscale opacity-80">✈️</span> 
                    <span>Exchange Student · University of Agder, Norway ('25)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grayscale opacity-80">🏀</span> 
                    <span>Basketball · 3rd place, IIT Bombay General Championships ('25)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grayscale opacity-80">📍</span> 
                    <span>Based in Mumbai, India</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
