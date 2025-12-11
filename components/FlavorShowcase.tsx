import React from 'react';
import { PRODUCTS } from '../constants';

const FlavorShowcase: React.FC = () => {
  return (
    <section id="flavors" className="py-24 bg-[#FAFAFA] relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Decorations (unchanged) */}
      <div className="absolute top-10 -left-12 md:left-10 w-40 md:w-64 pointer-events-none z-20 opacity-90">
        <img src="/mascot1.svg" className="w-full object-contain rotate-12 drop-shadow-[5px_5px_0_rgba(0,0,0,1)]" />
      </div>

      <div className="absolute bottom-0 -right-12 md:right-10 w-48 md:w-72 pointer-events-none z-20 opacity-90">
        <img src="/mascot2.svg" className="w-full object-contain -rotate-6 drop-shadow-[5px_5px_0_rgba(0,0,0,1)]" />
      </div>

      <div className="absolute top-32 right-4 md:right-32 w-24 md:w-40 pointer-events-none z-20 opacity-80 hidden md:block">
        <img src="/bottle2.svg" className="w-full object-contain rotate-[15deg] drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">

        <div className="mb-20 text-center">
          <h2 className="font-display text-6xl md:text-8xl text-black drop-shadow-sm">
            THE FLAVORS
          </h2>
          <p className="font-body font-bold text-xl mt-4 text-gray-600">
            Collect them all. Or just pick your favorite. We don't judge.
          </p>
        </div>

        {/* 2-Image Grid with Hover Effect */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto px-4">

          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col items-center">

              {/* PRODUCT IMAGE WITH HOVER EFFECT */}
              <img 
                src={product.image}
                alt={product.name}
                className="
                  w-full h-auto object-contain mb-6
                  transition-transform duration-300 ease-out
                  hover:scale-105 hover:-translate-y-2
                  drop-shadow-xl hover:drop-shadow-2xl
                "
              />

              {/* PRODUCT NAME */}
              <h3 className="font-display text-4xl text-black text-center leading-none">
                {product.name}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FlavorShowcase;
