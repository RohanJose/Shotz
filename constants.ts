import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Flavors', href: '#flavors' },
  { label: 'Why Shotz?', href: '#About' },
  { label: 'The Vibe', href: '#gallery' },
  { label: 'Find Us', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'lemon',
    name: 'Lemon Iced Tea',
    tagline: 'Classic Zest',
    color: 'bg-shotz-yellow',
    textColor: 'text-shotz-black',
    image: 'public/bottle.svg',
    description: ['Zesty Lemon Kick', 'Real Black Tea', 'Sweet & Sour Balance'],
    sugar: 5
  },
  {
    id: 'peach',
    name: 'Peach Iced Tea',
    tagline: 'Sweet Vibes',
    color: 'bg-orange-300',
    textColor: 'text-shotz-black',
    image: 'public/peach_bottle.png',
    description: ['Juicy Peach', 'Smooth Finish', 'Summer in a Bottle'],
    sugar: 5
  }
];

export const HERO_COPY = {
  headline: "THE FUTURE IS SHOTZ",
  subhead: "Chill Fuel 🤙🏼 Real Brewed. 5g Sugar. No Cap.",
  cta: "GRAB YOUR SHOTZ"
};