import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { X } from 'lucide-react';

interface AtelierProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Atelier: React.FC<AtelierProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 p-8 md:p-16 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-10">
          <div>
            <h2 className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">{t('atelier.title')}</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-2 whitespace-pre-line">
              <Trans i18nKey="atelier.subtitle" />
            </h3>
          </div>

          <div className="space-y-8 text-neutral-400 font-light leading-loose word-keep-all max-w-2xl mx-auto text-sm md:text-base">
            <p>
              <Trans i18nKey="atelier.desc1" components={{ 1: <strong className="text-white font-serif text-lg" /> }} />
            </p>

            <div className="w-10 h-[1px] bg-neutral-800 mx-auto"></div>

            <p>
              <Trans i18nKey="atelier.desc2" components={{ 1: <span className="text-gold-200" /> }} />
            </p>

            <p>
              <Trans i18nKey="atelier.desc3" components={{ 1: <span className="text-white" />, 2: <span className="text-white" /> }} />
            </p>

            <p>
              <Trans i18nKey="atelier.desc4" components={{ 1: <span className="text-gold-200" /> }} />
            </p>

            <div className="w-10 h-[1px] bg-neutral-800 mx-auto"></div>

            <p>
              <Trans i18nKey="atelier.desc5" />
            </p>
          </div>

          <div className="pt-8">
            <span className="font-serif italic text-gold-500 text-xl">{t('atelier.footer_sign')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};