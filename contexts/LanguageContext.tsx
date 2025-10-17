import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'my';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [translations, setTranslations] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        const fetchTranslations = async () => {
            try {
                // Import the JSON files dynamically
                const data = language === 'en' 
                    ? await import('../locales/en.json')
                    : await import('../locales/my.json');
                setTranslations(data.default || data);
            } catch (error) {
                console.error('Failed to fetch translations:', error);
                // Fallback to English if the selected language fails
                if (language !== 'en') {
                    const fallbackData = await import('../locales/en.json');
                    setTranslations(fallbackData.default || fallbackData);
                }
            }
        };

        fetchTranslations();
    }, [language]);

    const t = (key: string): string => {
        if (!translations) {
            return key;
        }
        const keys = key.split('.');
        let result: any = translations;
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                return key; // Return key if translation not found
            }
        }
        return result;
    };

    // Don't render the app until the initial translations have loaded
    if (!translations) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};