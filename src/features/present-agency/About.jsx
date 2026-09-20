'use client';
import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('presentAgency.About');
  const stats = t.raw('stats');

  return (
    <section id="about" className="relative">
      <div className="mx-auto flex flex-col justify-center items-center relative z-10 min-h-[100svh] py-16 sm:py-20 px-5 sm:px-8">
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center">
          {/* Indicator */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
            <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-patagonia-teal" />
            <span className="text-patagonia-teal font-medium tracking-wider uppercase text-xs sm:text-sm">
              {t('indicator')}
            </span>
            <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-patagonia-teal" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-patagonia-muted to-patagonia-teal bg-clip-text text-transparent">
              {t('titleLine1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-patagonia-teal to-patagonia-petrol bg-clip-text text-transparent">
              {t('titleLine2')}
            </span>
          </h2>

          {/* Description */}
          <div className="space-y-6 max-w-4xl mb-12">
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
              {t('descriptionIntro')}{' '}
              <span className="text-patagonia-teal font-semibold">
                {t('descriptionBrand')}
              </span>{' '}
              {t('descriptionMiddle')}{' '}
              <span className="text-patagonia-teal font-semibold">
                {t('descriptionHighlight')}
              </span>{' '}
              {t('descriptionEnd')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-patagonia-darkest/50 to-patagonia-petrol/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 sm:p-5 text-center hover:border-patagonia-teal transition-all duration-300"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-patagonia-teal to-patagonia-turquoise bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-xs leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
