import React, { useState } from 'react';
import { Search, Grid, List, SlidersHorizontal, ShoppingCart } from 'lucide-react';
import { Product, ViewMode } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';

interface ProductsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen animate-fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наш Каталог</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Откройте для себя нашу последнюю коллекцию. От классики до современных трендов — у нас есть всё для вашего идеального образа.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 sticky top-24 z-30">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            
            {/* Categories */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 w-full lg:w-auto pb-2 lg:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-black text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and View Toggle */}
            <div className="flex gap-4 w-full lg:w-auto">
              <div className="relative flex-grow lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-400 transition-colors"
                />
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <SlidersHorizontal className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-xl">Товары не найдены.</p>
            <p>Попробуйте изменить параметры поиска.</p>
          </div>
        ) : (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8' 
              : 'flex flex-col gap-6'
          }`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row items-center md:items-stretch h-auto md:h-64' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-full md:w-64 h-64 md:h-full shrink-0' : 'aspect-[4/5]'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isFeatured && (
                    <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 uppercase tracking-wide">
                      Хит
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className={`p-6 flex flex-col ${viewMode === 'list' ? 'flex-grow justify-center' : ''}`}>
                  <div className="mb-auto">
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className={`text-gray-600 text-sm mb-4 ${viewMode === 'grid' ? 'line-clamp-2' : ''}`}>
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">{product.price.toLocaleString()} ₽</span>
                    <button className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors transform active:scale-95">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};