import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4 py-5 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight drop-shadow-sm">
            {t('header.title')}
          </h1>
          <p className="text-gray-600 mt-1 text-base sm:text-lg">
            {t('header.subtitle')}
          </p>
        </div>
      </header>

      {/* Language Switcher Section */}
      <div className="w-full bg-gray-50 border-t border-gray-200 py-3 shadow-sm">
        <div className="container mx-auto flex justify-center">
          <div className="inline-flex gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
