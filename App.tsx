import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('products');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={setCurrentPage} onCategorySelect={handleCategorySelect} />;
      case 'products':
        return <Products selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigateTo={setCurrentPage} onCategorySelect={handleCategorySelect} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;