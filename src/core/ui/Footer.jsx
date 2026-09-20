'use client';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer initial="hidden" className="p-5 sm:p-8 relative">
      <div className="mx-auto flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="mb-[25px] h-[2px] bg-white opacity-10" />

          <div className="pt-2 flex flex-col sm:flex-row items-center text-center content-center justify-between gap-5 sm:gap-4">
            <div className="flex items-center text-center content-center justify-between flex-wrap gap-3 sm:gap-4">
              <img
                src="/logo.png"
                alt="hero_logo"
                className="w-[50px] h-[50px] object-contain"
              ></img>

              <h4 className="font-extrabold text-xl sm:text-[24px] text-white">
                PatagoniaScript
              </h4>
            </div>

            <p className="font-normal text-xs sm:text-[14px] text-white opacity-50">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
