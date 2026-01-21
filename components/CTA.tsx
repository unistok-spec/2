import React from 'react';
import { Apple, Smartphone, Monitor } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 transform rotate-1 rounded-3xl opacity-70 blur-lg"></div>
        <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-10 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Готов заговорить свободно?
                </h2>
                <p className="text-base text-slate-300 mb-6 max-w-lg mx-auto">
                    Скачивай LingoBro сегодня. Никакой кредитки при регистрации.
                </p>
                
                {/* Mobile/Tablet: Show App Stores */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:hidden">
                    <button className="bg-white text-slate-900 hover:bg-slate-100 px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors w-full sm:w-auto">
                        <Apple size={22} />
                        <div className="text-left">
                            <div className="text-[10px] font-medium text-slate-500">Download on the</div>
                            <div className="text-base leading-none">App Store</div>
                        </div>
                    </button>
                    <button className="bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors w-full sm:w-auto">
                        <Smartphone size={22} />
                        <div className="text-left">
                            <div className="text-[10px] font-medium text-slate-400">Get it on</div>
                            <div className="text-base leading-none">Google Play</div>
                        </div>
                    </button>
                </div>

                {/* Desktop: Show Windows Download */}
                <div className="hidden md:flex flex-col sm:flex-row justify-center gap-4">
                   <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-teal-500/20 transform hover:scale-105">
                        <Monitor size={24} />
                        <div className="text-left">
                            <div className="text-xs font-medium text-teal-100">Скачать бесплатно</div>
                            <div className="text-lg leading-none">для Windows</div>
                        </div>
                    </button>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};