import React from 'react';
import { MapPin, Search } from 'lucide-react';

const StoreLocator: React.FC = () => {
  return (
    <section id="locator" className="py-24 bg-shotz-yellow border-t-4 border-black relative">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Graphic Map */}
        <div className="order-2 md:order-1 relative">
           <div className="absolute top-4 left-4 w-full h-full bg-black rounded-3xl"></div>
           <div className="relative bg-white rounded-3xl border-4 border-black overflow-hidden h-[500px] flex flex-col">
              
              {/* Map UI */}
              <div className="flex-1 bg-[#f0f0f0] relative p-8">
                 {/* Grid Pattern */}
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid.png')]"></div>
                 
                 {/* Stylized River */}
                 <div className="absolute top-20 -left-10 w-[120%] h-32 bg-blue-300 border-y-4 border-blue-400 -rotate-6 transform skew-x-12"></div>

                 {/* Custom Pins */}
                 <div className="absolute top-[40%] left-[30%] group cursor-pointer">
                    <div className="relative z-10">
                      <div className="bg-shotz-lime border-4 border-black p-2 rounded-full hover:scale-125 transition-transform">
                        <MapPin size={32} className="text-black" />
                      </div>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                       WHOLE FOODS
                    </div>
                 </div>

                 <div className="absolute top-[60%] left-[70%] group cursor-pointer">
                    <div className="bg-shotz-amber border-4 border-black p-2 rounded-full hover:scale-125 transition-transform">
                      <MapPin size={32} className="text-black" />
                    </div>
                 </div>

                 {/* Floating Card */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white border-4 border-black p-4 rounded-xl shadow-brutal">
                    <div className="flex justify-between items-center">
                       <div>
                         <p className="font-bold text-xs text-gray-500 uppercase">Nearest Spot</p>
                         <p className="font-display text-2xl">DOWNTOWN MARKET</p>
                       </div>
                       <div className="bg-green-100 text-green-800 px-2 py-1 rounded font-bold text-xs">
                         0.8 MILES
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side: Search */}
        <div className="order-1 md:order-2">
          <div className="inline-block bg-black text-white px-4 py-2 font-display text-xl -rotate-2 mb-4">
             DONT BE THIRSTY
          </div>
          <h2 className="font-display text-7xl md:text-8xl text-black mb-6 leading-[0.9]">
            WHERE TO<br/><span className="text-shotz-amber">COP?</span>
          </h2>
          <p className="font-body text-xl font-bold mb-10 border-l-4 border-black pl-4">
            Find SHOTZ at a store near you, or just order online because it's 2024 and going outside is optional.
          </p>
          
          <div className="bg-white p-2 rounded-2xl border-4 border-black shadow-brutal max-w-md">
             <form className="flex">
                <input 
                  type="text" 
                  placeholder="Enter Zip Code..." 
                  className="flex-1 px-4 py-3 bg-transparent font-bold outline-none placeholder:text-gray-400 text-lg"
                />
                <button className="bg-shotz-lime text-black px-6 py-3 rounded-xl border-2 border-black font-display text-xl hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                  GO <Search size={20} />
                </button>
             </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StoreLocator;