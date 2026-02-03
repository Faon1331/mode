import React from 'react';
import { ArrowRight, Truck, Shield, Clock, Star, ShoppingBag } from 'lucide-react';
import { Page, Product, Service, Testimonial } from '../types';
import { SERVICES, TESTIMONIALS, PRODUCTS } from '../constants';

interface HomeProps {
  navigateTo: (page: Page) => void;
  onCategorySelect: (category: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo, onCategorySelect }) => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  const getIcon = (name: Service['iconName']) => {
    switch (name) {
      case 'truck': return <Truck className="w-8 h-8 text-indigo-600" />;
      case 'shield': return <Shield className="w-8 h-8 text-indigo-600" />;
      case 'clock': return <Clock className="w-8 h-8 text-indigo-600" />;
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Стиль, который говорит за вас
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light">
              Новая коллекция {new Date().getFullYear()} уже в продаже. Найдите свой идеальный образ сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigateTo('products')}
                className="px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors rounded-none flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Смотреть коллекцию
              </button>
              <button 
                onClick={() => navigateTo('about')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors rounded-none"
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col items-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 p-4 bg-indigo-50 rounded-full">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Популярные товары</h2>
              <p className="text-gray-500">Выбор наших покупателей в этом сезоне</p>
            </div>
            <button 
              onClick={() => navigateTo('products')}
              className="hidden md:flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              Смотреть все <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isFeatured && (
                    <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      Топ
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">{product.price.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <button 
              onClick={() => navigateTo('products')}
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all w-full"
            >
              Смотреть все товары
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer lg:col-span-2" onClick={() => onCategorySelect('Женское')}>
               <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Women" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-3xl font-bold tracking-wider">Женское</span>
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer" onClick={() => onCategorySelect('Мужское')}>
               <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" alt="Men" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-3xl font-bold tracking-wider">Мужское</span>
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer" onClick={() => onCategorySelect('Аксессуары')}>
               <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&q=80" alt="Accessories" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-3xl font-bold tracking-wider">Аксессуары</span>
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer lg:col-span-2" onClick={() => onCategorySelect('Обувь')}>
               <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Shoes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-3xl font-bold tracking-wider">Обувь</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Что говорят наши клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700 backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-lg italic mb-6 text-gray-200">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-indigo-400" />
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-indigo-300 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};