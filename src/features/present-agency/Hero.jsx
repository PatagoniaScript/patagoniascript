'use client';
import { useTranslations } from 'next-intl';
import { SocialLinks } from '@/core/ui/SocialLinks';

export const Hero = () => {
  const t = useTranslations('presentAgency.Hero');
  const heroNavItems = t.raw('menu');

  return (
    <section
      className="relative isolate w-full h-screen overflow-hidden"
      id="hero"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover object-bottom"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 bg-black/30" />

      <div className="h-full relative z-20 flex flex-wrap content-center justify-center">
        <nav className="w-full py-12 px-20 flex justify-between rounded-lg absolute top-0">
          <ul className="flex gap-8 space-x-4">
            {heroNavItems.map((item) => (
              <li key={item.label} className="group">
                <a
                  href={item.link}
                  className="text-white hover:text-patagonia-teal font-semibold transition-all duration-300"
                >
                  {item.label}
                </a>

                <span className="block w-0 h-0.5 mt-2 bg-patagonia-teal group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          <SocialLinks className="absolute right-20 top-12" />
        </nav>

        <div className="text-center">
          <h1 className="block text-white text-6xl font-sans">
            <span className="mr-[2.5px] text-8xl text-patagonia-teal font-light">
              {'{'}
            </span>
            <span className="text-7xl font-bold">
              Patagonia<span className="text-patagonia-teal">Script</span>
            </span>
            <span className="ml-[2.5px] text-8xl text-patagonia-teal font-light">
              {'}'}
            </span>
          </h1>
          <p className="block text-white text-2xl mt-8 italic">
            {t('description')}
          </p>

          <button className="py-3 px-5 mt-0 text-md bg-gradient-to-r from-patagonia-cyan via-patagonia-turquoise to-patagonia-teal text-white font-bold rounded-3xl hover:scale-105 transition-all duration-300 translate-y-20">
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  );
};
