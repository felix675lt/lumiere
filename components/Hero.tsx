import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenCarCare: () => void;
  onOpenCustomParts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onOpenCarCare, onOpenCustomParts }) => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian">
      {/* Abstract Background Element - Simulating light reflecting on curves */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-gradient-to-br from-neutral-800 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-neutral-800 via-neutral-900 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 max-w-2xl">
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-gold-400">
            {t('hero.subtitle')}
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl word-keep-all whitespace-pre-line">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 pt-12 justify-center items-center">
            <button
              onClick={onOpenEstimator}
              className="text-white text-sm tracking-[0.2em] uppercase pb-2 border-b border-white/30 hover:border-white transition-colors whitespace-nowrap"
            >
              {t('hero.cta_estimator')}
            </button>
            <button
              onClick={onOpenCarCare}
              className="text-white text-sm tracking-[0.2em] uppercase pb-2 border-b border-white/30 hover:border-white transition-colors whitespace-nowrap"
            >
              {t('hero.cta_carcare')}
            </button>
            <button
              onClick={onOpenCustomParts}
              className="text-white text-sm tracking-[0.2em] uppercase pb-2 border-b border-white/30 hover:border-white transition-colors whitespace-nowrap"
            >
              {t('hero.cta_custom_parts')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};