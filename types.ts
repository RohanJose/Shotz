export interface Product {
  id: string;
  name: string;
  tagline: string;
  color: string;
  textColor: string;
  image: string;
  description: string[];
  sugar: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}