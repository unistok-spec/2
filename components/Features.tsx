import React from 'react';
import { Zap, Brain, Shield, Clock, Award, Users, MessageCircle } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: "Реальные диалоги",
    description: "Больше никаких 'London is the capital'. Обсуждай Netflix, мемы, работу или отношения.",
    icon: <MessageCircle className="w-5 h-5 text-teal-400" />
  },
  {
    id: 2,
    title: "Мгновенные исправления",
    description: "LingoBro деликатно поправит твою грамматику и произношение прямо во время разговора.",
    icon: <Zap className="w-5 h-5 text-yellow-400" />
  },
  {
    id: 3,
    title: "Адаптивный AI",
    description: "Алгоритм подстраивается под твой уровень. От новичка до C2 за пару месяцев.",
    icon: <Brain className="w-5 h-5 text-purple-400" />
  },
  {
    id: 4,
    title: "Без стресса",
    description: "AI не осудит за ошибки. Говори свободно, убирай языковой барьер.",
    icon: <Shield className="w-5 h-5 text-green-400" />
  },
  {
    id: 5,
    title: "Доступен 24/7",
    description: "3 часа ночи? LingoBro всегда на связи и готов поболтать.",
    icon: <Clock className="w-5 h-5 text-blue-400" />
  },
  {
    id: 6,
    title: "Ролевые игры",
    description: "Симуляция интервью, заказа кофе или свидания. Практика для реальной жизни.",
    icon: <Users className="w-5 h-5 text-pink-400" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Почему <span className="text-teal-400">LingoBro</span> круче?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Экономит твои деньги, время и нервы. Полный набор инструментов для флюентности в одном приложении.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="bg-slate-800/40 border border-slate-700 p-5 rounded-xl hover:bg-slate-800/80 card-hover group">
              <div className="bg-slate-900/50 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};