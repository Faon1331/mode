import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { Page } from '../types';

interface LayoutProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentPage, setCurrentPage, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Главная', value: 'home' },
    { label: 'Каталог', value: 'products' },
    { label: 'О нас', value: 'about' },
    { label: 'Контакты', value: 'contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
              M
            </div>
            MODA
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => setCurrentPage(link.value)}
                className={`text-sm font-medium transition-colors hover:text-black uppercase tracking-wide ${
                  currentPage === link.value ? 'text-black border-b-2 border-black' : 'text-gray-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
              <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
              <span className="absolute top-1 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  setCurrentPage(link.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 font-medium ${
                  currentPage === link.value ? 'text-black' : 'text-gray-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">MODA</h3>
              <p className="text-gray-400 leading-relaxed">
                Мы создаем одежду, которая подчеркивает вашу индивидуальность. Стиль, качество и комфорт в каждой детали.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Навигация</h4>
              <ul className="space-y-4 text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition-colors">Каталог</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Помощь</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Доставка и оплата</li>
                <li className="hover:text-white cursor-pointer transition-colors">Возврат товара</li>
                <li className="hover:text-white cursor-pointer transition-colors">Таблица размеров</li>
                <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <p className="text-gray-400 mb-4">г. Москва, ул. Тверская, 12</p>
              <p className="text-gray-400 mb-4">+7 (999) 123-45-67</p>
              <p className="text-gray-400 mb-6">info@modastore.ru</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MODA Store. Все права защищены.
            <div className="mt-2">
              Сайт используется как демонстрационный шаблон для портфолио QYVARO.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};