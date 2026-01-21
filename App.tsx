import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { PageContent } from '@/components/Pages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-teal-500 selection:text-white">
      <Navbar onNavigate={navigateTo} />
      
      {currentPage === 'home' ? (
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
      ) : (
        <main className="pt-24 min-h-screen">
          <PageContent page={currentPage} onNavigate={navigateTo} />
        </main>
      )}

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;