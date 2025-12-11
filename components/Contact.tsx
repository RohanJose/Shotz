import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-shotz-yellow border-t-4 border-black relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] border-[20px] border-black rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
        <div className="inline-block bg-black text-white px-6 py-2 font-display text-xl -rotate-2 mb-8 border-2 border-transparent hover:border-white transition-colors">
           don't be shy
        </div>
        
        <h2 className="font-display text-7xl md:text-9xl text-black mb-12 leading-[0.9]">
          hit us up
        </h2>

        <div className="flex gap-8 justify-center items-center max-w-4xl mx-auto mb-16">
          
          {/* Instagram Button - Logo Only */}
          <a href="https://www.instagram.com/drinkshotz" className="group relative" target="_blank" rel="noreferrer">
            <div className="absolute inset-0 bg-black rounded-full translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            <div className="relative bg-[#E1306C] border-4 border-black rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center hover:-translate-y-1 transition-transform">
               <Instagram size={64} className="text-white md:w-24 md:h-24" />
            </div>
          </a>

          {/* WhatsApp Button - Logo Only */}
          <a href="https://wa.me/917012158426" className="group relative" target="_blank" rel="noreferrer">
             <div className="absolute inset-0 bg-black rounded-full translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
             <div className="relative bg-[#25D366] border-4 border-black rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center hover:-translate-y-1 transition-transform">
               <MessageCircle size={64} className="fill-current text-white md:w-24 md:h-24" />
            </div>
          </a>

        </div>

        {/* Creative Email Section - Lowercase Vibe - OPTIMIZED FOR MOBILE */}
        <div className="mb-16 relative inline-block group cursor-pointer hover:rotate-1 transition-transform duration-300 max-w-full">
           <a href="mailto:drinkshotztea@gmail.com" className="block relative w-full">
              {/* Heavy Shadow Layer */}
              <div className="absolute inset-0 bg-black rounded-xl translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              {/* Main Content Box */}
              <div className="relative bg-white border-4 border-black px-4 py-6 md:px-16 md:py-8 rounded-xl flex flex-col items-center justify-center transition-all group-hover:-translate-y-1 group-hover:bg-shotz-lime w-full">
                 <span className="font-body font-bold text-xs md:text-sm tracking-[0.2em] text-gray-500 mb-2 group-hover:text-black">
                   or just mail us @
                 </span>
                 {/* Responsive font sizing and breaking to prevent overflow */}
                 <span className="font-body font-black text-xl sm:text-3xl md:text-6xl text-black leading-none border-b-4 border-transparent group-hover:border-black transition-all tracking-tighter break-all">
                   drinkshotztea@gmail.com
                 </span>
              </div>
           </a>
        </div>

        <p className="font-bold text-xl mt-8 max-w-2xl mx-auto">
          want shotz in your store? need a restock? hit us up — let's make it happen.
        </p>
      </div>
    </section>
  );
};

export default Contact;