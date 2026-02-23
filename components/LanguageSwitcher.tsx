import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2 text-xs font-medium">
            <button
                onClick={() => changeLanguage('ko')}
                className={`transition-colors ${i18n.language === 'ko' ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
            >
                KR
            </button>
            <span className="text-white/30">|</span>
            <button
                onClick={() => changeLanguage('en')}
                className={`transition-colors ${i18n.language === 'en' ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
            >
                EN
            </button>
        </div>
    );
};
