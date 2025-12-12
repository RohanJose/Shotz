import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Ingredients from './Ingredients';

// Reusable Star SVG Component with the curved "sparkle" shape
const StarSVG = ({ color, className }: { color: string; className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ fill: color }}>
    <path d="M50 0 C50 27.6 72.4 50 100 50 C72.4 50 50 72.4 50 100 C50 72.4 27.6 50 0 50 C27.6 50 50 27.6 50 0Z" />
  </svg>
);

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // --- PHYSICS BASED SMOOTHING ---
  // This converts the raw scroll pixel value into a spring value.
  // It eliminates jitter and adds a "weighty" feel to the parallax.
  const smoothY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- PARALLAX TRANSFORMS ---
  
  // Text moves down at 40% speed of scroll
  const yText = useTransform(smoothY, [0, 500], [0, 200]);
  
  // Mascot rotates and moves down slightly slower than text to separate layers
  const rotateMascot = useTransform(smoothY, [0, 500], [0, 15]);
  const yMascot = useTransform(smoothY, [0, 500], [0, 80]);

  // Background blobs move upward to create deep background effect
  const yBlob1 = useTransform(smoothY, [0, 500], [0, -100]);
  const yBlob2 = useTransform(smoothY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-48 md:pt-40 overflow-hidden bg-shotz-lime transform-gpu">
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise z-0 mix-blend-multiply"></div>

      {/* Decorative Blobs - Now with Parallax for smoothness */}
      <motion.div 
        style={{ y: yBlob1 }}
        className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-shotz-yellow rounded-full blur-[100px] opacity-60 pointer-events-none will-change-transform"
      ></motion.div>
      <motion.div 
        style={{ y: yBlob2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-shotz-green rounded-full blur-[100px] opacity-60 pointer-events-none will-change-transform"
      ></motion.div>

      {/* --- SMOOTH ANIMATED STARS --- */}

      {/* 1. Big Star (Top Left) */}
      <motion.div 
        className="absolute top-24 left-[5%] md:left-[12%] w-16 h-16 md:w-28 md:h-28 z-10 opacity-100 drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] will-change-transform"
        animate={{ 
          rotate: 360,
          scale: [1, 1.15, 1] 
        }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <StarSVG color="#FFFFFF" /> 
      </motion.div>

      {/* 2. Star (Right Side) */}
      <motion.div 
        className="absolute top-[35%] right-[5%] md:right-[15%] w-20 h-20 md:w-36 md:h-36 z-10 opacity-90 drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] will-change-transform"
        animate={{ 
          y: [-15, 15, -15],
          rotate: [-5, 5, -5]
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <StarSVG color="#FFFFFF" />
      </motion.div>

      {/* 3. Tiny Sparkle (Near Center) */}
      <motion.div 
        className="absolute top-[28%] left-[25%] md:left-[30%] w-8 h-8 md:w-12 md:h-12 z-20 will-change-transform"
        animate={{ 
          scale: [0.8, 1.2, 0.8], 
          opacity: [0.6, 1, 0.6] 
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <StarSVG color="#FFFFFF" />
      </motion.div>

      {/* ---------------------------------- */}

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center w-full">
        
        {/* Main Hype Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} 
          style={{ y: yText }}
          className="relative z-10 text-center leading-[0.8] mix-blend-normal will-change-transform flex flex-col items-center w-full mx-auto"
        >
          {/* Logo Placeholder */}
          <div className="mb-4 md:mb-8 w-[60vw] md:w-[30vw] max-w-[400px] relative z-20 mx-auto">
             <img 
               src="/Logo.svg" 
               alt="SHOTZ Logo" 
               fetchPriority="high"
               className="w-full h-full object-contain drop-shadow-[6px_6px_0_rgba(0,0,0,1)] mx-auto"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement!.innerHTML = '<h2 class="font-display text-[10vw] text-black text-center w-full">SHOTZ</h2>';
               }}
             />
          </div>

          {/* Semantic SEO: Single H1 with spans for visual breaking */}
          <h1 className="relative z-20 w-full text-center mx-auto leading-none">
            <span className="block font-display text-[24vw] md:text-[16vw] text-white drop-shadow-[8px_8px_0_rgba(0,0,0,1)] text-stroke-3">
              DRINK
            </span>
            <span className="block font-display text-[19vw] md:text-[16vw] text-shotz-yellow drop-shadow-[8px_8px_0_rgba(0,0,0,1)] text-stroke-3 -mt-2 md:-mt-10 relative">
              DIFFERENT
            </span>
          </h1>
        </motion.div>

        {/* The Trademark Mascot (Hero Subject) - Left and Small */}
        <motion.div 
          style={{ rotate: rotateMascot, y: yMascot }}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-30 
           w-[120px] md:w-[320px] pointer-events-none will-change-transform"
        >
          <img 
            src="/mascot1.svg"
            alt="Shotz Mascot Trademark"
            loading="eager"
            className="w-full h-full object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,1)]"
          />

        </motion.div>

        {/* NEW Mascot - Right & Slightly Higher */}
        <motion.div 
          style={{ rotate: rotateMascot, y: yMascot }}
          className="absolute top-[40%] right-2 -translate-y-1/2 z-30 
                     w-[120px] md:w-[320px] pointer-events-none will-change-transform"
        >
          <img 
            src="/mascot2.svg"
            alt="Shotz Mascot Trademark"
            loading="eager"
            className="w-full h-full object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,1)] -scale-x-100"
          />
        </motion.div>

      </div>

      {/* --- MARQUEE MOVED TO BOTTOM --- */}
      <div className="absolute bottom-10 left-0 w-full z-10 transform-gpu">
         <Ingredients />
      </div>

    </section>
  );
};

export default Hero;