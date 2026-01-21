import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Download, Monitor } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate('home');
    // Allow time for state update and render before scrolling
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const goHome = () => {
    setIsOpen(false);
    onNavigate('home');
    window.scrollTo(0, 0);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={goHome}>
            <div className="bg-gradient-to-tr from-teal-400 to-purple-500 p-2 rounded-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold tracking-tight text-white">
              Lingo<span className="text-teal-400">Bro</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleLinkClick('features')} className="text-slate-300 hover:text-white transition-colors">Возможности</button>
            <button onClick={() => handleLinkClick('how-it-works')} className="text-slate-300 hover:text-white transition-colors">Как это работает</button>
            <button onClick={() => handleLinkClick('reviews')} className="text-slate-300 hover:text-white transition-colors">Отзывы</button>
            
            {/* Desktop Button - Windows */}
            <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-semibold hover:bg-teal-50 transition-colors flex items-center gap-2">
              <Monitor size={18} />
              Windows
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 flex flex-col space-y-4 shadow-xl">
          <button onClick={() => handleLinkClick('features')} className="text-left text-slate-300 py-2">Возможности</button>
          <button onClick={() => handleLinkClick('how-it-works')} className="text-left text-slate-300 py-2">Как это работает</button>
          <button onClick={() => handleLinkClick('reviews')} className="text-left text-slate-300 py-2">Отзывы</button>
          <button className="bg-teal-500 text-white w-full py-3 rounded-xl font-semibold flex justify-center items-center gap-2">
            <Download size={20} />
            Скачать App
          </button>
        </div>
      )}
    </nav>
  );
};