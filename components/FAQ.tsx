import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Какие языки доступны?",
    answer: "На данный момент мы поддерживаем Английский, Испанский, Французский, Немецкий и Китайский. Мы постоянно добавляем новые языки!"
  },
  {
    id: 2,
    question: "Это бесплатно?",
    answer: "У LingoBro есть бесплатная версия с ограничением по времени разговора в день. Premium подписка снимает все лимиты и дает доступ к продвинутым режимам."
  },
  {
    id: 3,
    question: "Подходит ли для новичков?",
    answer: "Абсолютно! LingoBro адаптируется под твой уровень. Если ты совсем новичок, он будет использовать простые слова и говорить медленно."
  },
  {
    id: 4,
    question: "Это реальный человек?",
    answer: "Нет, это продвинутый искусственный интеллект. Но он настолько хорош, что вы можете забыть об этом во время разговора."
  }
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-8 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Частые вопросы</h2>
        <div className="space-y-3">
          {faqData.map((item) => (
            <div key={item.id} className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              >
                <span className="font-semibold text-sm md:text-base text-slate-200">{item.question}</span>
                {openId === item.id ? <ChevronUp size={18} className="text-teal-400" /> : <ChevronDown size={18} className="text-slate-500" />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 pt-0 text-sm text-slate-400 border-t border-slate-800/50 mt-1">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};