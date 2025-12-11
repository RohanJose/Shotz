import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Floating Pill Nav */}
      <nav className="fixed top-6 left-0 w-full z-50 px-4 pointer-events-none">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white/90 backdrop-blur-md border-4 border-black shadow-brutal rounded-full px-6 py-3 flex justify-between items-center pointer-events-auto">
            
            {/* Logo - Replace src with your actual logo file path */}
            <a href="#" className="relative group block">
              <img 
                src="/Logo.svg" 
                alt="SHOTZ" 
                className="h-10 w-auto object-contain transition-transform group-hover:rotate-[-2deg]   height: 2.8rem;"
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="font-body font-bold text-sm uppercase px-4 py-2 rounded-full hover:bg-shotz-yellow hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              {/* Mobile Toggle */}
              <button 
                className="md:hidden text-black bg-shotz-lime p-2 rounded-full border-2 border-black hover:bg-shotz-yellow"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-shotz-lime flex flex-col pointer-events-auto"
          >
             {/* Header */}
             <div className="flex justify-between items-center p-6 border-b-4 border-black bg-white">
                <span className="font-display text-4xl">MENU</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-black text-white p-2 rounded-full hover:rotate-90 transition-transform"
                >
                  <X size={32} />
                </button>
             </div>
            
            {/* Links */}
            <div className="flex-1 flex flex-col p-6 space-y-4 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/diag-stripes-light.png')]">
              {NAV_ITEMS.map((item, i) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-6xl text-transparent text-stroke-3 hover:text-black hover:text-stroke-0 transition-all cursor-pointer"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;