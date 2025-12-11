import React from 'react';
import { Twitter, Instagram, Youtube, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onShopClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShopClick }) => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Footer Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] fill-shotz-yellow transform rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-md">
            <h2 className="font-display text-8xl text-transparent text-stroke-white mb-6">SHOTZ</h2>
            <p className="font-body text-xl font-bold text-gray-400">
              DRINK DIFFERENTLY . <br/>
              <span className="text-shotz-lime">Real Brewed Iced Tea.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
             {[
               { icon: Instagram, label: "Insta" }, 
               { icon: Twitter, label: "Twitter" }, 
               { icon: Youtube, label: "YT" }
              ].map((social, i) => (
               <a key={i} href="#" className="flex items-center gap-2 bg-gray-900 px-6 py-3 rounded-xl font-display text-xl hover:bg-shotz-lime hover:text-black hover:rotate-3 transition-all">
                 <social.icon size={20} /> {social.label}
               </a>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
          <div>
            <h4 className="font-bold text-shotz-lime mb-4 uppercase tracking-widest">Shop</h4>
            <ul className="space-y-2 text-gray-400 font-medium cursor-pointer">
            <li>
  <a 
    href="#flavors" 
    className="hover:text-white text-left block"
  >
    All Flavors
  </a>
</li>
              <li><button onClick={onShopClick} className="hover:text-white text-left">Merch</button></li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-shotz-lime mb-4 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
           
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
             <h4 className="font-bold text-shotz-lime mb-4 uppercase tracking-widest">Stay in the loop</h4>
             <form className="flex gap-2">
               <input type="email" placeholder="YOUR EMAIL" className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-shotz-lime text-white font-bold" />
               <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-shotz-lime transition-colors">SUBMIT</button>
             </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-900 flex justify-between items-center text-gray-500 text-sm font-bold">
          <p>&copy; 2025 SHOTZ TEA. ALL RIGHTS RESERVED.</p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-gray-800 p-3 rounded-full hover:bg-shotz-lime hover:text-black transition-colors">
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;