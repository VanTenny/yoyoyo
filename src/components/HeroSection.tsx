import React from 'react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/hero-smoke.jpg')` }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/60' : 'bg-black/40'}`}></div>
      </div>

      {/* Animated wave gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Profile + Animated Waves */}
        <div className="mb-8 animate-fade-in relative w-72 h-72 mx-auto flex items-center justify-center">
          {/* Glow halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-gray-400/10 to-transparent blur-2xl animate-pulse" />

          {/* Animated SVG waves */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="waveGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.25)" />
                <stop offset="100%" stopColor="rgba(180,180,180,0.0)" />
              </radialGradient>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(120,120,120,0.2)" />
              </linearGradient>
            </defs>

            {/* Soft rotating wave ring 1 */}
            <g className="origin-center [transform-box:fill-box] animate-[spin_18s_linear_infinite]">
              <path
                d="M150,30
                   C210,40 260,90 270,150
                   C260,210 210,260 150,270
                   C90,260 40,210 30,150
                   C40,90 90,40 150,30 Z"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="1.2"
                opacity="0.8"
              />
            </g>

            {/* Counter-rotating wave ring 2 */}
            <g className="origin-center [transform-box:fill-box] animate-[spin_28s_linear_infinite_reverse]">
              <path
                d="M150,50
                   C200,55 245,100 250,150
                   C245,200 200,245 150,250
                   C100,245 55,200 50,150
                   C55,100 100,55 150,50 Z"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="0.8"
              />
            </g>

            {/* Pulsing radial fill */}
            <circle cx="150" cy="150" r="120" fill="url(#waveGrad)" className="animate-pulse" />

            {/* Flowing sine waves */}
            <path
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1"
              d="M0,150 Q75,110 150,150 T300,150"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M0,150 Q75,110 150,150 T300,150;
                  M0,150 Q75,190 150,150 T300,150;
                  M0,150 Q75,110 150,150 T300,150"
              />
            </path>
            <path
              fill="none"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
              d="M0,160 Q75,200 150,160 T300,160"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
                  M0,160 Q75,200 150,160 T300,160;
                  M0,160 Q75,120 150,160 T300,160;
                  M0,160 Q75,200 150,160 T300,160"
              />
            </path>
          </svg>

          {/* Profile image on top */}
          <img
            src="/lovable-uploads/profile-bro.jpg"
            alt="Tenzing Jampa"
            className="relative z-10 w-48 h-48 rounded-full border-4 border-white/30 shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-105 transition-transform duration-500 object-cover"
            style={{ objectPosition: '68% 48%' }}
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in delay-300 text-white font-serif tracking-wider">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-extrabold italic">
            Tenzing Jampa
          </span>
        </h1>

        <div className="mb-8 animate-fade-in delay-400">
          <p className="text-lg md:text-xl mb-2 text-gray-200">
            Final Year Undergraduate at <span className="font-semibold text-white">IIT Bombay</span>
          </p>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Majoring in <span className="font-semibold text-gray-300">Engineering Physics</span>
          </p>
        </div>

        <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-500 text-gray-200">
          Researcher, Learner and a Fitness Enthusiast
        </p>

        <div className="animate-fade-in delay-700">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-gray-100 to-gray-400 text-black hover:from-white hover:to-gray-300"
          >
            Explore My Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
