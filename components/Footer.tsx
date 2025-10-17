import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="w-full py-6 mt-12">
            <div className="container mx-auto px-4 text-center text-gray-500">
                <p>{t('footer.poweredBy')}</p>
            </div>
        </footer>
    );
};

export default Footer;