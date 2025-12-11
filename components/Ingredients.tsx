import React from 'react';
import { Droplet, Ban, Zap } from 'lucide-react';

const BENEFITS = [
  { icon: <Droplet className="fill-current" />, text: "5g SUGAR" },
  { icon: <Ban />, text: "NO ARTIFICIAL COLOR" },
  { icon: <Zap className="fill-current" />, text: "VITAMIN C" },
];

const Ingredients: React.FC = () => {
  // Generate list (duplicated enough times to cover screen)
  const benefitsList = Array(12).fill(BENEFITS).flat();

  // Helper for the content to ensure identical rendering
  const MarqueeContent = ({ textColor, iconColor, dotColor }: { textColor: string, iconColor: string, dotColor: string }) => (
    <div className="flex gap-24 pr-24 animate-marquee-snail whitespace-nowrap min-w-full shrink-0 transform-gpu">
      {benefitsList.map((benefit, i) => (
        <div key={i} className={`flex items-center gap-4 ${textColor} shrink-0`}>
          <span className={`${iconColor} shrink-0`}>{benefit.icon}</span>
          <span className="font-display text-2xl md:text-3xl tracking-wide shrink-0 whitespace-nowrap">{benefit.text}</span>
          <span className={`${dotColor} text-xl shrink-0`}>•</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-[105%] -ml-[2.5%] -rotate-1 scale-105 flex flex-col pointer-events-none relative z-20 transform-gpu">
      
      {/* STRIP 1: BLACK BACKGROUND (TEXT) - Single Strip Only */}
      <div className="bg-black py-3 w-full overflow-hidden flex border-none shadow-brutal transform-gpu backface-hidden">
        <MarqueeContent 
          textColor="text-white" 
          iconColor="text-shotz-lime" 
          dotColor="text-shotz-yellow" 
        />
        <MarqueeContent 
          textColor="text-white" 
          iconColor="text-shotz-lime" 
          dotColor="text-shotz-yellow" 
        />
      </div>

    </div>
  );
};

export default Ingredients;