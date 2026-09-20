'use client';
import { useTranslations } from 'next-intl';
import { PortfolioCarrousel } from './PortfolioCarrousel';

export const Portfolio = () => {
  const t = useTranslations('showPortfolio');
  const projects = t.raw('projects');

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" id="portfolio">
      <div className="text-center mb-8 sm:mb-6 px-5 sm:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-patagonia-teal" />
          <span className="text-patagonia-turquoise font-medium tracking-wider uppercase text-xs sm:text-sm">
            {t('label')}
          </span>
          <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-patagonia-teal" />
        </div>

        <h2 className="text-patagonia-title font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-patagonia-muted to-patagonia-teal bg-clip-text text-transparent">
            {t('titleLine1')}
          </span>
        </h2>

        <p className="text-patagonia-description text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t.rich('titleLine2', {
            highlight: (chunks) => (
              <span className="text-patagonia-teal font-semibold">
                {chunks}
              </span>
            ),
          })}
        </p>
      </div>

      <PortfolioCarrousel projects={projects} />
    </section>
  );
};
