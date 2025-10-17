import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight drop-shadow-sm">
          {t('header.title')}
        </h1>
        <p className="text-gray-600 mt-1 text-base sm:text-lg">
          {t('header.subtitle')}
        </p>
      </div>

      {/* Language switcher neatly below title */}
      <div className="border-t border-gray-100 py-3 bg-gray-50">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
