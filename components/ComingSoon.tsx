import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';

interface ComingSoonProps {
  onBack: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-shotz-yellow flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-noise z-0 mix-blend-multiply"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vh] h-[60vh] bg-shotz-lime rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60vh] h-[60vh] bg-shotz-purple rounded-full blur-[100px] opacity-60"></div>

      <div className="relative z-10 max-w-4xl border-4 border-black bg-white p-8 md:p-16 rounded-[3rem] shadow-brutal-xl">
        <div className="inline-block bg-black text-white px-6 py-2 font-display text-2xl -rotate-2 mb-8">
          HOLD UP
        </div>
        
        <h1 className="font-display text-8xl md:text-[10rem] leading-[0.8] mb-8 text-black drop-shadow-[4px_4px_0_rgba(182,255,77,1)]">
          COMING<br/>SOON
        </h1>
        
        <div className="flex justify-center mb-8">
          <Clock size={64} className="text-black animate-spin-slow" />
        </div>

        <p className="font-body text-xl md:text-3xl font-bold text-gray-800 mb-12 max-w-xl mx-auto">
          We're still brewing this part of the site. Good things take time (and fresh ingredients).
        </p>

        <button 
          onClick={onBack}
          className="group flex items-center gap-4 bg-shotz-lime border-4 border-black px-8 py-4 rounded-full font-display text-2xl hover:shadow-brutal hover:-translate-y-1 transition-all mx-auto"
        >
          <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
          BACK TO VIBES
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;