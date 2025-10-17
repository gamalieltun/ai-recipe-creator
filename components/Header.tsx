import React from 'react';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <header className="w-full bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex-1"></div>
                    <div className="text-center flex-1">
                        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                            {t.header.title}
                        </h1>
                        <p className="text-gray-600 mt-1">{t.header.subtitle}</p>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                                    language === 'en'
                                        ? 'bg-white text-indigo-600 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('my')}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                                    language === 'my'
                                        ? 'bg-white text-indigo-600 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                မြန်မာ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;