import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Александр П.",
    role: "IT Специалист",
    content: "Я стеснялся говорить на митингах с американскими заказчиками. Месяц с LingoBro, и теперь я спокойно аргументирую свои решения. Топ!",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Мария С.",
    role: "Студентка",
    content: "Готовлюсь к IELTS. Функция разбора ошибок просто спасение. Объясняет лучше, чем мой препод в универе.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Дмитрий К.",
    role: "Путешественник",
    content: "Использую режим ролевых игр перед поездками. Отработал заселение в отель и аренду авто. В Испании чувствовал себя уверенно.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-8 bg-slate-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Что говорят наши <span className="gradient-text">пользователи</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-900 border border-slate-800 p-5 rounded-xl relative">
              <div className="flex gap-1 mb-3 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-slate-300 mb-4 italic text-sm leading-snug">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full border-2 border-slate-700" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};