import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Ingredients from './Ingredients';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // Slowed down parallax movement (was 150, now 80 for smoother feel)
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  const rotateMascot = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-48 md:pt-40 overflow-hidden bg-shotz-lime transform-gpu">
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise z-0 mix-blend-multiply"></div>

      {/* Decorative Blobs - Optimized (Removed will-change from static elements) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-shotz-yellow rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-shotz-green rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center w-full">
        
        {/* Main Hype Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // "Custom cubic-bezier for buttery smooth entrance"
          style={{ y: yText }}
          className="relative z-10 text-center leading-[0.8] mix-blend-normal will-change-transform flex flex-col items-center w-full mx-auto"
        >
          {/* Logo Placeholder */}
          <div className="mb-4 md:mb-8 w-[60vw] md:w-[30vw] max-w-[400px] relative z-20 mx-auto">
             <img 
               src="/Logo.svg" 
               alt="SHOTZ Logo" 
               // LCP Optimization: Load this immediately
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
          style={{ rotate: rotateMascot }}
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
  style={{ rotate: rotateMascot }}
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
      {/* Positioned at the very bottom of the section, z-10 behind text to avoid disturbing it */}
      <div className="absolute bottom-10 left-0 w-full z-10 transform-gpu">
         <Ingredients />
      </div>

    </section>
  );
};

export default Hero;