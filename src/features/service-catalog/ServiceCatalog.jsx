'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ServiceCarousel } from './ServiceCarousel';

export const ServiceCatalog = () => {
  const locale = useLocale();
  const t = useTranslations('serviceCatalog');
  const plans = t.raw('plans');

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 px-5 sm:px-8"
      id="services"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-patagonia-teal" />
            <span className="text-patagonia-turquoise font-medium tracking-wider uppercase text-xs sm:text-sm">
              {t('Insights.label')}
            </span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-patagonia-teal" />
          </div>

          <h2 className="text-patagonia-title font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-patagonia-muted to-patagonia-teal bg-clip-text text-transparent">
              {t('Insights.titleLine1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-patagonia-teal to-patagonia-petrol bg-clip-text text-transparent">
              {t('Insights.titleLine2')}
            </span>
          </h2>

          <p className="text-patagonia-description text-gray-300 max-w-3xl mx-auto">
            {t('Insights.intro')}
            <span className="text-patagonia-teal font-semibold">
              {' '}
              {t('Insights.introBold')}
            </span>
          </p>
        </div>

        <ServiceCarousel
          plans={plans}
          prevCardLabel={t('Insights.prevCard')}
          nextCardLabel={t('Insights.nextCard')}
          arsLabel={t('Insights.ars')}
          viewPlanLabel={t('Insights.viewPlan')}
          swipeHintLabel={t('Insights.swipeHint')}
          keyboardHintLabel={t('Insights.keyboardHint')}
          goToPlanLabel={(n) => t('Insights.goToPlan', { n })}
        />
      </div>
    </section>
  );
};
