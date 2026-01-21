import React from 'react';
import { Check, ArrowRight, Building, Mail, MapPin, Briefcase, Heart } from 'lucide-react';

interface PageContentProps {
  page: string;
  onNavigate: (page: string) => void;
}

export const PageContent: React.FC<PageContentProps> = ({ page, onNavigate }) => {
  const renderContent = () => {
    switch (page) {
      case 'pricing':
        return <PricingPage />;
      case 'business':
        return <BusinessPage />;
      case 'blog':
        return <BlogPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage />;
      case 'privacy':
      case 'terms':
        return <LegalPage title={page === 'privacy' ? 'Политика конфиденциальности' : 'Условия использования'} />;
      default:
        return <div className="text-center py-20">Страница в разработке <br/><button onClick={() => onNavigate('home')} className="mt-4 text-teal-400 underline">Вернуться на главную</button></div>;
    }
  };

  return <div className="animate-fade-in">{renderContent()}</div>;
};

const PricingPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Простые и прозрачные <span className="text-teal-400">тарифы</span></h2>
      <p className="text-slate-400">Выбери план, который подходит твоему темпу обучения.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Free Plan */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">Старт</h3>
        <div className="text-3xl font-bold text-white mb-6">0₽ <span className="text-sm font-normal text-slate-500">/ мес</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-sm">
          <li className="flex items-center gap-2 text-slate-300"><Check size={16} className="text-teal-500" /> 15 мин разговора в день</li>
          <li className="flex items-center gap-2 text-slate-300"><Check size={16} className="text-teal-500" /> Базовая грамматика</li>
          <li className="flex items-center gap-2 text-slate-300"><Check size={16} className="text-teal-500" /> 3 языка на выбор</li>
        </ul>
        <button className="w-full py-3 rounded-xl border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-colors text-sm">Начать бесплатно</button>
      </div>

      {/* Pro Plan */}
      <div className="bg-slate-900 border border-teal-500/50 rounded-2xl p-6 flex flex-col relative transform md:scale-105 shadow-2xl shadow-teal-900/20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Популярный</div>
        <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
        <div className="text-3xl font-bold text-white mb-6">499₽ <span className="text-sm font-normal text-slate-500">/ мес</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-sm">
          <li className="flex items-center gap-2 text-white"><Check size={16} className="text-teal-400" /> Безлимитные разговоры</li>
          <li className="flex items-center gap-2 text-white"><Check size={16} className="text-teal-400" /> Продвинутый AI-тьютор</li>
          <li className="flex items-center gap-2 text-white"><Check size={16} className="text-teal-400" /> Все языки (12+)</li>
          <li className="flex items-center gap-2 text-white"><Check size={16} className="text-teal-400" /> Режим ролевых игр</li>
          <li className="flex items-center gap-2 text-white"><Check size={16} className="text-teal-400" /> Детальная аналитика ошибок</li>
        </ul>
        <button className="w-full py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/25 text-sm">Попробовать Pro</button>
      </div>

      {/* Lifetime Plan */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">Навсегда</h3>
        <div className="text-3xl font-bold text-white mb-6">9990₽ <span className="text-sm font-normal text-slate-500">/ единоразово</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-sm">
          <li className="flex items-center gap-2 text-slate-300"><Check size={16} className="text-teal-500" /> Всё, что в Pro</li>
          <li className="flex items-center gap-2 text-slate-300"><Check size={16} className="text-teal-500" /> Пожизненный доступ</li>
          <li className="flex items-center gap-2 text-slate-300"><Check size={16} className="text-teal-500" /> Приоритетная поддержка</li>
          <li className="flex items-center gap-2 text-slate-300"><Check size={16} className="text-teal-500" /> Ранний доступ к новым фичам</li>
        </ul>
        <button className="w-full py-3 rounded-xl border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-colors text-sm">Купить навсегда</button>
      </div>
    </div>
  </div>
);

const BusinessPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-6">LingoBro для <span className="text-teal-400">Бизнеса</span></h2>
        <p className="text-lg text-slate-300 mb-8">
          Помогите вашей команде преодолеть языковой барьер. Корпоративное обучение английскому языку с помощью AI — это эффективно и в 10 раз дешевле курсов.
        </p>
        <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3"><Building className="text-teal-400"/> <span>Централизованный биллинг</span></li>
            <li className="flex items-center gap-3"><Check className="text-teal-400"/> <span>Отчеты об успеваемости сотрудников</span></li>
            <li className="flex items-center gap-3"><Check className="text-teal-400"/> <span>Специализированная лексика (IT, Sales, Med)</span></li>
        </ul>
        <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors">
          Оставить заявку
        </button>
      </div>
      <div className="md:w-1/2 bg-slate-800 rounded-3xl p-8 h-80 flex items-center justify-center border border-slate-700">
         <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">ROI +300%</h3>
            <p className="text-slate-400">Эффективность обучения выше традиционных методов</p>
         </div>
      </div>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h2 className="text-4xl font-bold mb-10 text-center">Блог <span className="text-teal-400">LingoBro</span></h2>
    <div className="grid gap-6">
       {[1, 2, 3].map(i => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-colors cursor-pointer group">
             <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-teal-400 mb-2">
                    <span>Советы</span> • <span>12 Окт, 2023</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Как выучить английский по мемам: Полный гайд</h3>
                <p className="text-slate-400 mb-4 text-sm">
                    Традиционные учебники скучны. Мы собрали 50 лучших мемов, которые помогут вам понять Present Perfect раз и навсегда.
                </p>
                <div className="flex items-center text-white font-medium text-sm">
                    Читать далее <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
          </div>
       ))}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь с нами</h2>
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <form className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none" placeholder="you@example.com" />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Сообщение</label>
                <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Как мы можем помочь?"></textarea>
            </div>
            <button className="w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Отправить
            </button>
        </form>
        <div className="mt-8 border-t border-slate-800 pt-8 flex justify-around text-slate-400">
            <div className="flex items-center gap-2"><Mail size={18} /> support@lingobro.ai</div>
            <div className="flex items-center gap-2"><MapPin size={18} /> Moscow, Russia</div>
        </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
    <h2 className="text-4xl font-bold mb-6">Наша Миссия</h2>
    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
        Мы верим, что изучение языка должно быть таким же естественным, как разговор с другом. LingoBro создан, чтобы разрушить языковые барьеры и соединить людей по всему миру с помощью технологий.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4].map(i => (
            <div key={i} className="bg-slate-800 rounded-xl p-4 aspect-square flex items-center justify-center">
                <img src={`https://picsum.photos/200/200?random=${i+20}`} className="rounded-full w-24 h-24 mb-2 object-cover" alt="Team" />
            </div>
        ))}
    </div>
  </div>
);

const CareersPage = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Работа в <span className="text-teal-400">LingoBro</span></h2>
            <p className="text-slate-400">Присоединяйся к команде, которая меняет образование.</p>
        </div>
        <div className="space-y-4">
            {['Senior Frontend Developer', 'AI Research Engineer', 'Product Designer'].map((job, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-between hover:border-teal-500/50 transition-colors group cursor-pointer">
                    <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-teal-400 transition-colors">{job}</h3>
                        <div className="flex gap-4 text-sm text-slate-400 mt-1">
                            <span className="flex items-center gap-1"><MapPin size={14}/> Remote</span>
                            <span className="flex items-center gap-1"><Briefcase size={14}/> Full-time</span>
                        </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-slate-800 text-white text-sm font-medium group-hover:bg-teal-500 transition-colors">Apply</button>
                </div>
            ))}
        </div>
    </div>
);

const LegalPage = ({ title }: { title: string }) => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-400 text-sm mb-8">Последнее обновление: 24 Октября 2023</p>
            <h3 className="text-xl font-bold mb-4">1. Введение</h3>
            <p className="mb-6 text-slate-300">Добро пожаловать в LingoBro. Используя наше приложение, вы соглашаетесь с данными условиями. Мы стремимся обеспечить безопасность и комфорт для всех пользователей.</p>
            <h3 className="text-xl font-bold mb-4">2. Использование данных</h3>
            <p className="mb-6 text-slate-300">Мы используем ваши данные только для улучшения качества обучения. Ваши диалоги с AI обрабатываются анонимно и не передаются третьим лицам без вашего согласия.</p>
            <h3 className="text-xl font-bold mb-4">3. Подписки</h3>
            <p className="mb-6 text-slate-300">Отмена подписки возможна в любой момент через настройки вашего аккаунта Apple ID или Google Play. Возврат средств осуществляется в соответствии с правилами платформ.</p>
            <div className="h-32"></div>
        </div>
    </div>
);