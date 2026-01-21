import React from 'react';
import { Globe, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <Globe className="h-5 w-5 text-teal-500" />
              <span className="ml-2 text-lg font-bold text-white">LingoBro</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Твой надежный партнер в изучении языков. Сделано с любовью к полиглотам.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Продукт</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('features')} className="hover:text-teal-400 transition-colors text-left">Возможности</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-teal-400 transition-colors text-left">Цены</button></li>
              <li><button onClick={() => onNavigate('business')} className="hover:text-teal-400 transition-colors text-left">Для бизнеса</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-teal-400 transition-colors text-left">Блог</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Компания</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-teal-400 transition-colors text-left">О нас</button></li>
              <li><button onClick={() => onNavigate('careers')} className="hover:text-teal-400 transition-colors text-left">Вакансии</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-teal-400 transition-colors text-left">Контакты</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-teal-400 transition-colors text-left">Политика</button></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white text-sm mb-3">Следи за нами</h4>
             <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all text-slate-400">
                    <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all text-slate-400">
                    <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all text-slate-400">
                    <Linkedin size={16} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-slate-600">© 2024 LingoBro Inc. Все права защищены.</p>
            <div className="flex gap-4 mt-3 md:mt-0 text-slate-600">
                <button onClick={() => onNavigate('terms')} className="hover:text-slate-400">Terms</button>
                <button onClick={() => onNavigate('privacy')} className="hover:text-slate-400">Privacy</button>
            </div>
        </div>
      </div>
    </footer>
  );
};