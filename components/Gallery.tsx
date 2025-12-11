import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-black text-white relative overflow-hidden group">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-shotz-purple blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-shotz-lime blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* MERGED HEADER SECTION: #SHOTZONLY + VIBE CHECK */}
        <div className="flex flex-col items-center justify-center text-center mb-20 relative z-10">
          
          {/* Glitch Title Container */}
          <div className="relative inline-block mb-8">
            {/* Main Layer */}
            <h2 className="font-display text-[15vw] md:text-[10rem] leading-[0.8] text-white select-none relative z-10 group-hover:animate-pulse">
              #SHOTZONLY
            </h2>
            {/* Glitch Shadow Layer 1 (Lime) */}
            <h2 className="font-display text-[15vw] md:text-[10rem] leading-[0.8] text-shotz-lime absolute top-0 left-0 -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity z-0 select-none">
              #SHOTZONLY
            </h2>
            {/* Glitch Shadow Layer 2 (Purple) */}
            <h2 className="font-display text-[15vw] md:text-[10rem] leading-[0.8] text-shotz-purple absolute top-0 left-0 translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity z-0 select-none">
              #SHOTZONLY
            </h2>
            
            {/* Decorative Camera Icon */}
            <div className="absolute -top-6 -right-6 md:-right-12 md:-top-8 bg-shotz-lime text-black p-3 rounded-xl border-4 border-black rotate-12 shadow-[4px_4px_0_white]">
               <Camera size={32} />
            </div>
          </div>

          <p className="font-bold text-white/60 text-xl md:text-2xl mb-8 max-w-2xl">
            Tag us to get featured. The Vibe Check passes only if you're holding a SHOTZ.
          </p>

          {/* Instagram CTA */}
          <a href="https://instagram.com/drinkshotz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-shotz-lime hover:scale-105 transition-all border-2 border-transparent hover:border-black shadow-[4px_4px_0_rgba(255,255,255,0.5)] hover:shadow-[4px_4px_0_#000]">
            <Instagram size={24} />
            <span className="font-display text-xl">@drinkshotz</span>
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* Item 1 - Large Main Image */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 bg-shotz-blue rounded-3xl border-4 border-black relative overflow-hidden group cursor-pointer"
          >
             {/* <--- CHANGE IMAGE SOURCE HERE: Large Main "Skate" Image ---> */}
             <img 
               src="public/pic1.jpg" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" 
               alt="Vibe" 
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
               <div className="bg-shotz-lime text-black inline-block px-4 py-1 font-bold text-sm rotate-[-2deg] self-start mb-2 border-2 border-black">#SHOTZONLY</div>
             
             </div>
          </motion.div>

          {/* Item 2 - Text/Icon Block (Alien) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="bg-shotz-yellow rounded-3xl border-4 border-black p-6 flex flex-col justify-between group overflow-hidden"
          >
            
               <img src="public/mascot3.svg"></img>
             

          </motion.div>

          {/* Item 3 - Vertical Tall Image */}
<motion.div 
  whileHover={{ scale: 0.98 }}
  className="md:row-span-2 rounded-3xl border-4 border-black relative overflow-hidden"
>
  {/* FULL IMAGE, NO COLOR, NO PATTERNS */}
  <img 
    src="/pic4.jpg"      /* <-- Make sure file is inside public folder */
    className="w-full h-full object-cover"
    alt="Drink"
    loading="lazy"
  />
</motion.div>

           {/* Item 4 - Icon Block (Fire) */}
           <motion.div 
            whileHover={{ scale: 0.98 }}
            className="bg-shotz-black rounded-3xl   flex flex-col justify-between group overflow-hidden"
          >
            
            <img src="public/pic2.jpg"></img>
             
             <p className="font-display text-4xl text-black leading-none mt-4"></p>
          </motion.div>

           {/* Item 5 - Just the Image */}
{/* Item 5 - Full Width Image */}
<motion.div 
  whileHover={{ scale: 0.98 }}
  className="col-span-full rounded-3xl overflow-hidden"
>
  <img 
    src="/drinktales.jpg"
    alt="Fan Post"
    loading="lazy"
    className="w-full h-full object-cover"
  />
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;