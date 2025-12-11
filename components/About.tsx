import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="About" className="py-24 bg-shotz-yellow text-black relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-10 right-[-100px] w-96 h-96 bg-white rounded-full blur-[150px] opacity-40"></div>
      <div className="absolute bottom-10 left-[-100px] w-96 h-96 bg-shotz-lime rounded-full blur-[150px] opacity-40"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Animated Bottle & Mascot */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-64 h-[400px] md:w-80 md:h-[500px] z-10 will-change-transform"
          >
             {/* Glowing aura behind bottle */}
             <div className="absolute inset-0 bg-white blur-[60px] opacity-60 rounded-full scale-75"></div>
             
             {/* Bottle Image (Placeholder) */}
             <div className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
               <img 
                 src="public/botlle1.svg"
                 alt="Shotz Bottle"
                 loading="lazy"
                 className="w-full h-full object-contain"
               />
             </div>
          </motion.div>

           {/* Mascot Peeking out */}
           <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ type: "spring", stiffness: 200, damping: 20 }}
             className="absolute -bottom-10 -right-10 w-48 md:w-64 z-20"
           >
              <img 
                src="public/mascot3.svg" 
                alt="Mascot"
                loading="lazy"
                className="w-full transform -rotate-12 drop-shadow-[4px_4px_0_#000]"
              />
           </motion.div>
        </div>

        {/* Right Side: Copy */}
        <div className="w-full md:w-1/2 text-center md:text-left">
           <div className="inline-block bg-black text-white font-bold px-4 py-1 rounded-full mb-6 rotate-2 border-2 border-black shadow-[4px_4px_0_#fff]">
              CHILL FUEL 
           </div>
           
           {/* Brush Font Headline */}
           <h2 className="font-brush text-5xl md:text-7xl mb-12 text-black leading-tight drop-shadow-sm rotate-[-1deg]">
             REAL BREWED<br/>
             <span className="text-white text-stroke-3">ICED TEA</span>
           </h2>
           
           {/* Circular Feature Bubbles */}
           <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-12">
              {[
                { text: "No Artificial Colours", color: "bg-white" },
                { text: "No Artificial Sweeteners", color: "bg-shotz-lime" }, // Changed to Lime for contrast on Yellow
                { text: "Real Tea Leaves", color: "bg-shotz-purple" }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  key={i} 
                  className={`${item.color} w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-black flex items-center justify-center p-2 text-center shadow-[4px_4px_0_#000] cursor-default group`}
                >
                  <span className={`font-display text-xl leading-none text-black drop-shadow-sm uppercase ${item.color === 'bg-shotz-purple' ? 'text-white text-stroke-black' : ''}`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
           </div>

           {/* Professional Quote Layout */}
           <div className="relative pl-8 md:pl-0 mt-8 group cursor-default">
             {/* Large Quote Mark */}
             <span className="absolute -top-8 -left-4 md:-left-8 font-display text-[8rem] text-black opacity-10 group-hover:opacity-100 transition-opacity leading-none">
               "
             </span>
             
             <p className="font-body text-2xl md:text-3xl text-black font-medium italic leading-relaxed relative z-10">
               Just the kick you need to keep it moving.
             </p>
             
             {/* Optional decorative line */}
             <div className="w-24 h-1 bg-black mt-6 mx-auto md:mx-0 rounded-full"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;