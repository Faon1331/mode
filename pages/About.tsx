import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      {/* Header */}
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наша История</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Мы не просто продаем одежду. Мы создаем настроение, уверенность и стиль, доступный каждому. MODA — это путь к вашему идеальному образу.
          </p>
        </div>
      </div>

      {/* Main Content + Image */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Team working" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Кто мы такие?</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Компания <strong>MODA</strong> была основана в 2015 году группой энтузиастов, которые верили, что мода должна быть не только красивой, но и комфортной. Мы начинали как небольшой шоурум в центре города, а сегодня мы — один из ведущих онлайн-ритейлеров с тысячами счастливых клиентов.
              </p>
              <p>
                Мы тщательно отбираем ткани, контролируем каждый шов и сотрудничаем только с этичными производителями. Для нас важно не количество, а качество каждой вещи, которая попадает в ваш гардероб.
              </p>
              <p>
                Наша цель — сделать премиальный шопинг доступным и удобным. Мы постоянно внедряем новые технологии, чтобы процесс выбора одежды был легким и приятным.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6 text-indigo-600">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Миссия</h3>
              <p className="text-gray-600">
                Вдохновлять людей на самовыражение через стиль, предоставляя качественную одежду без компромиссов.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6 text-red-500">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ценности</h3>
              <p className="text-gray-600">
                Честность перед клиентами, любовь к своему делу и забота об окружающей среде — фундамент нашего бренда.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6 text-blue-500">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Устойчивость</h3>
              <p className="text-gray-600">
                Мы стремимся минимизировать углеродный след и используем перерабатываемую упаковку для наших товаров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
