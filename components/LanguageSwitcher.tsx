import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const buttonStyle = (lang: 'en' | 'my') => 
        `px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            language === lang 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`;

    return (
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center space-x-2">
            <button onClick={() => setLanguage('en')} className={buttonStyle('en')}>
                English
            </button>
            <button onClick={() => setLanguage('my')} className={buttonStyle('my')}>
                မြန်မာ
            </button>
        </div>
    );
};

export default LanguageSwitcher;