import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Есть вопросы о заказе, размерах или сотрудничестве? Заполните форму ниже или используйте контакты для прямой связи.
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-red-600 font-medium border-2 border-red-600 rounded-lg p-4 inline-block">
            Этот сайт — демонстрационный шаблон для портфолио QYVARO.
            <br />
            Формы не предназначены для реального использования.
            <br />
            Пожалуйста, не вводите свои данные.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Наши контакты</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-indigo-50 rounded-lg text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Офис</h3>
                  <p className="text-gray-600">г. Москва, ул. Тверская, д. 12, офис 405</p>
                  <p className="text-gray-500 text-sm mt-1">Пн-Пт: 09:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-indigo-50 rounded-lg text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                  <p className="text-gray-500 text-sm mt-1">Круглосуточная поддержка</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-indigo-50 rounded-lg text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@modastore.ru</p>
                  <p className="text-gray-600">support@modastore.ru</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-bold mb-2">Часто задаваемые вопросы</h4>
              <p className="text-gray-600 text-sm mb-4">
                Прежде чем писать нам, посмотрите раздел FAQ. Возможно, ответ на ваш вопрос уже там.
              </p>
              <button className="text-indigo-600 font-medium hover:underline">Перейти в FAQ &rarr;</button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тема</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors">
                  <option>Статус заказа</option>
                  <option>Возврат товара</option>
                  <option>Сотрудничество</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors resize-none"
                  placeholder="Опишите вашу проблему или предложение..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                Отправить сообщение
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
