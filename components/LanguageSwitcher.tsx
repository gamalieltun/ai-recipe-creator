import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const buttonStyle = (lang: 'en' | 'my') =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
      language === lang
        ? 'bg-indigo-600 text-white shadow-md'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`;

  return (
    <div className="flex justify-center gap-3">
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
