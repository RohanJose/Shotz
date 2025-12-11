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
           DON'T BE SHY
        </div>
        
        <h2 className="font-display text-7xl md:text-9xl text-black mb-12 leading-[0.9]">
          HIT US UP
        </h2>

        <div className="flex gap-8 justify-center items-center max-w-4xl mx-auto">
          
          {/* Instagram Button - Logo Only */}
          <a href="https://www.instagram.com/drinkshotz

" className="group relative" target="_blank">
            <div className="absolute inset-0 bg-black rounded-full translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
            <div className="relative bg-[#E1306C] border-4 border-black rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center hover:-translate-y-1 transition-transform">
               <Instagram size={64} className="text-white md:w-24 md:h-24" />
            </div>
          </a>

          {/* WhatsApp Button - Logo Only */}
          <a href="https://wa.me/91884884459" className="group relative"   target="_blank">
             <div className="absolute inset-0 bg-black rounded-full translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
             <div className="relative bg-[#25D366] border-4 border-black rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center hover:-translate-y-1 transition-transform">
               <MessageCircle size={64} className="fill-current text-white md:w-24 md:h-24" />
            </div>
          </a>

        </div>

        <p className="font-bold text-xl mt-16 max-w-2xl mx-auto">
        Want SHOTZ in your store? Need a restock? Hit us up — let's make it happen.        </p>
      </div>
    </section>
  );
};

export default Contact;