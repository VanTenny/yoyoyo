import React from 'react';
import { GraduationCap } from 'lucide-react';

interface CourseworkSectionProps {
  darkMode: boolean;
}

const categories = [
  {
    title: 'Mathematics',
    courses: [
      'Calculus',
      'Linear Algebra',
      'Differential Equations',
      'Real Analysis',
      'Complex Analysis',
    ],
  },
  {
    title: 'Systems & Control',
    courses: ['Non-linear Dynamics', 'Digital Photogrammetry and Cartography'],
  },
  {
    title: 'Physics',
    courses: [
      'Classical Mechanics',
      'Quantum Mechanics',
      'Statistical Physics',
      'Numerical Methods in Physics',
      'Mathematical Physics',
      'Waves and Oscillations',
      'Quantum Information and Computing',
      'Semiconductors Physics',
      'Condensed Matter Physics',
      'Electromagnetic Theory',
      'Light Matter Interaction',
      'Molecular Spectroscopy',
      'Optical Physics',
      'Continuum Mechanics',
    ],
  },
  {
    title: 'Electrical',
    courses: [
      'Analog Electronics',
      'Digital Electronics',
      'Microprocessors',
      'Nano Devices and Applications',
    ],
  },
  {
    title: 'CS and ML',
    courses: [
      'Computer Programming and Utilisation',
      'Programming for Data Science',
      'Makers Space',
      'Introduction to Machine Learning',
    ],
  },
];

const CourseworkSection: React.FC<CourseworkSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="coursework"
      className={`py-24 px-4 border-t transition-colors duration-700 ${
        darkMode ? 'bg-black border-neutral-900 text-white' : 'bg-white border-neutral-100 text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap
            className={`w-8 h-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
          />
          <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-b ${
                darkMode ? 'from-white to-neutral-500' : 'from-black to-neutral-500'
              }`}
            >
              Selected Coursework
            </span>
          </h2>
        </div>
        <p
          className={`text-center text-sm font-light tracking-wide mb-14 ${
            darkMode ? 'text-neutral-500' : 'text-neutral-500'
          }`}
        >
          Key courses undertaken at IIT Bombay
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-xl border backdrop-blur-md transition-all duration-500 hover:scale-[1.01] overflow-hidden ${
                darkMode
                  ? 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                  : 'bg-black/[0.02] border-black/10 hover:border-black/30 hover:bg-black/[0.04]'
              }`}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] ${
                  darkMode
                    ? 'bg-gradient-to-b from-white/70 via-white/20 to-transparent'
                    : 'bg-gradient-to-b from-black/70 via-black/20 to-transparent'
                }`}
              />
              <h3
                className={`text-xs font-mono uppercase tracking-[0.2em] mb-5 ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.courses.map((course, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm font-light tracking-wide ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    <span
                      className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${
                        darkMode ? 'bg-neutral-500' : 'bg-neutral-400'
                      }`}
                    />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseworkSection;
