import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    const { t } = useLanguage();
    return (
        <header className="w-full bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 text-center relative">
                <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                    {t('header.title')}
                </h1>
                <p className="text-gray-600 mt-1">{t('header.subtitle')}</p>
                <LanguageSwitcher />
            </div>
        </header>
    );
};

export default Header;