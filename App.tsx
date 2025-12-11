import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FlavorShowcase from './components/FlavorShowcase';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'comingSoon'>('home');

  if (currentPage === 'comingSoon') {
    return <ComingSoon onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="antialiased text-shotz-black selection:bg-shotz-lime selection:text-black">
      <Navbar />
      <main>
        {/* Ingredients Marquee is now inside Hero for precise positioning */}
        <Hero />
        <About />
        <FlavorShowcase />
        <Gallery />
        <Contact />
      </main>
      <Footer onShopClick={() => setCurrentPage('comingSoon')} />
    </div>
  );
}

export default App;