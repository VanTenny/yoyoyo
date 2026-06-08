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
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in delay-300' : ''}`}>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm Tenzing, a final-year Engineering Physics student at IIT Bombay, originally from
                Kalimpong in the eastern Himalayas. My work tends to sit at the intersection of
                physics and computation — whether that's modelling polymer chains, simulating wind
                turbine drive trains, or training RL agents.
              </p>

              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I spent Autumn 2025 as an exchange student at the University of Agder in Norway,
                which was equal parts great research experience and a genuine culture shock. Outside
                academics, I play basketball, speak six languages, and pick up random side projects
                that usually teach me more than I expected.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  'Python', 'C++', 'MATLAB / Simulink', 'Machine Learning',
                  'LaTeX', 'Scikit-learn', 'PyTorch', 'Nonlinear Dynamics', 'Figma', 'Knime'
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-cyan-400'
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 text-blue-700'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-fade-in delay-500' : ''}`}>
              <div className={`rounded-2xl p-8 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100'
              }`}>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Quick Facts
                </h3>
                <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>🎓 B.Tech Engineering Physics · IIT Bombay ('26)</li>
                  <li>🔬 Condensed Matter · Nonlinear Dynamics · Astrophysics</li>
                  <li>🏅 Top 1.1% JEE Main · Top 2.6% JEE Advanced</li>
                  <li>🌏 Six languages: English, Hindi, Nepali, Tibetan, Japanese, German</li>
                  <li>✈️ Exchange Student · University of Agder, Norway ('25)</li>
                  <li>🏀 Basketball · 3rd place, IIT Bombay General Championships ('25)</li>
                  <li>📍 Based in Mumbai, India</li>
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
