import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left relative">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            {t('header.title')}
          </h1>
          <p className="text-gray-600 mt-1">{t('header.subtitle')}</p>
        </div>

        {/* Move Language Switcher to top-right or below text on mobile */}
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
