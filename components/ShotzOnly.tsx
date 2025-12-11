import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

const ShotzOnly: React.FC = () => {
  return (
    <section className="bg-black py-16 border-y-4 border-white overflow-hidden relative group cursor-crosshair">
      
      {/* Static Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
        
        <div className="relative inline-block">
          {/* Glitch Layers */}
          <h2 className="font-display text-[15vw] leading-[0.8] text-white select-none relative z-10 group-hover:animate-pulse">
            #SHOTZONLY
          </h2>
          <h2 className="font-display text-[15vw] leading-[0.8] text-shotz-lime absolute top-0 left-0 -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity z-0 select-none">
            #SHOTZONLY
          </h2>
          <h2 className="font-display text-[15vw] leading-[0.8] text-shotz-purple absolute top-0 left-0 translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity z-0 select-none">
            #SHOTZONLY
          </h2>
          
          {/* Decorative Icons */}
          <div className="absolute -top-4 -right-4 md:right-10 md:-top-10 bg-shotz-lime text-black p-3 rounded-xl border-4 border-black rotate-12 shadow-[4px_4px_0_white]">
            <Camera size={32} />
          </div>
          <div className="absolute -bottom-4 -left-4 md:left-10 md:-bottom-6 bg-shotz-purple text-white p-3 rounded-full border-4 border-black -rotate-12 shadow-[4px_4px_0_white]">
            <Sparkles size={32} />
          </div>
        </div>

        <p className="font-bold text-white/60 text-xl md:text-2xl mt-8 max-w-2xl">
          Tag us to get featured. Don't be boring.
        </p>

      </div>
    </section>
  );
};

export default ShotzOnly;