import React from 'react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Embedded High-Definition Smooth Animations */}
      <style>{`
        @keyframes cinematicPan {
          0% { transform: scale(1.05) translate(0px, 0px); }
          50% { transform: scale(1.15) translate(-10px, 15px); }
          100% { transform: scale(1.05) translate(10px, -5px); }
        }
        @keyframes hdWaveSlow {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes hdWaveFast {
          0% { transform: rotate(180deg) scale(1.05); }
          50% { transform: rotate(0deg) scale(0.92); }
          100% { transform: rotate(-180deg) scale(1.05); }
        }
        .animate-cinematic {
          animation: cinematicPan 30s ease-in-out infinite alternate;
        }
        .animate-hd-wave-1 {
          animation: hdWaveSlow 20s linear infinite;
        }
        .animate-hd-wave-2 {
          animation: hdWaveFast 14s linear infinite;
        }
      `}</style>

      {/* Moving Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-cinematic grayscale opacity-80"
          style={{ backgroundImage: `url('/lovable-uploads/hero-smoke.jpg')` }}
        />
        {/* Deep Monochrome Gradient Overlays */}
        <div className={`absolute inset-0 transition-colors duration-700 ${darkMode ? 'bg-black/80' : 'bg-black/60'}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neutral-500/[0.05] rounded-full blur-[150px] animate-pulse [animation-delay:2000ms]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Profile + High Definition Liquid Waves */}
        <div className="mb-10 relative w-80 h-80 mx-auto flex items-center justify-center">
          
          {/* Wave Layer 1 (Outer Fluid Ring) */}
          <div className="absolute inset-0 rounded-[45%_55%_70%_30%_/_45%_55%_45%_55%] border border-white/20 bg-white/[0.01] animate-hd-wave-1 blur-[0.5px]" />
          
          {/* Wave Layer 2 (Mid Fluid Ring Counter-Rotating) */}
          <div className="absolute inset-3 rounded-[60%_40%_60%_40%_/_60%_40%_60%_40%] border border-neutral-500/30 bg-transparent animate-hd-wave-2 blur-[1px]" />
          
          {/* Wave Layer 3 (Tight Inner Ripple) */}
          <div className="absolute inset-6 rounded-[50%_50%_30%_70%_/_50%_60%_40%_50%] border-2 border-white/10 animate-hd-wave-1 [animation-duration:10s]" />

          {/* Smooth Core Center Glow */}
          <div className="absolute inset-14 rounded-full bg-white/[0.04] blur-2xl animate-pulse" />

          {/* Profile Image Container (Photo color left completely original/untouched) */}
          <div className="relative z-10 w-48 h-48 rounded-full p-[3px] bg-gradient-to-b from-white via-neutral-600 to-neutral-900 shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.35)] transition-all duration-500 hover:scale-[1.03]">
            <img
              src="/lovable-uploads/profile-bro.jpg"
              alt="Tenzing Jampa"
              className="w-full h-full rounded-full object-cover"
              style={{ objectPosition: '68% 48%' }}
            />
          </div>
        </div>

        {/* Typography - Pure Black & White Aesthetic */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-serif">
          <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent font-extrabold antialiased">
            Tenzing Jampa
          </span>
        </h1>

        <div className="mb-8 space-y-2">
          <p className="text-xl md:text-2xl font-light text-neutral-300 tracking-wide">
            Final Year Undergraduate at <span className="font-semibold text-white border-b border-white/20 pb-1">IIT Bombay</span>
          </p>
          <p className="text-lg md:text-xl text-neutral-400 font-mono tracking-wider">
            Majoring in Engineering Physics
          </p>
        </div>

        <p className="text-lg md:text-xl mb-10 text-neutral-400 max-w-md mx-auto font-light leading-relaxed">
          Researcher, Learner and a Fitness Enthusiast
        </p>

        <div>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-full font-medium tracking-wide overflow-hidden bg-white text-black transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">Explore My Journey</span>
            <div className="absolute inset-0 bg-neutral-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
