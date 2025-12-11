import React from "react";
import { Droplet, Ban, Zap } from "lucide-react";

const BENEFITS = [
  { icon: <Droplet className="fill-current" />, text: "5g SUGAR" },
  { icon: <Ban />, text: "NO ARTIFICIAL COLOR" },
  { icon: <Zap className="fill-current" />, text: "VITAMIN C" },
];

const Ingredients: React.FC = () => {
  // Duplicate to fill the full marquee width
  const benefitsList = Array(12).fill(BENEFITS).flat();

  const MarqueeContent = ({
    textColor,
    iconColor,
    dotColor,
  }: {
    textColor: string;
    iconColor: string;
    dotColor: string;
  }) => (
    <div className="flex gap-24 pr-24 animate-marquee-snail whitespace-nowrap min-w-max transform-gpu">
      {benefitsList.map((benefit, i) => (
        <div key={i} className={`flex items-center gap-4 ${textColor}`}>
          <span className={iconColor}>{benefit.icon}</span>
          <span className="font-display text-2xl md:text-3xl tracking-wide">
            {benefit.text}
          </span>
          <span className={`${dotColor} text-xl`}>•</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden rotate-[-1deg] pointer-events-none">
      {/* BLACK MARQUEE STRIP */}
      <div className="bg-black py-3 w-full overflow-hidden flex relative">
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
