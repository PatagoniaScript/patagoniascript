'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { SocialLinks } from '@/core/ui/SocialLinks';

export const Hero = () => {
  const t = useTranslations('presentAgency.Hero');
  const heroNavItems = t.raw('menu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
<section
       className="relative isolate w-full min-h-[680px] h-[100svh] overflow-hidden bg-[#0A1220]"
      id="hero"
    >
      {/* DESKTOP */}
      <video autoPlay loop muted playsInline preload="auto" className="hidden md:block absolute inset-0 z-0 w-full h-full object-cover">
        <source src="/herodesktop.mp4" type="video/mp4" />
      </video>

      {/* MOBILE */}
      <video autoPlay loop muted playsInline preload="auto" className="block md:hidden absolute inset-0 z-0 w-full h-full object-cover">
        <source src="/heromobile.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/30 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      <div className="h-full relative z-20 flex flex-wrap content-center justify-center px-5 sm:px-8 lg:px-12">
        <nav className="w-full lg:p-16 py-6 sm:py-8 lg:py-12 flex items-center justify-between gap-4 absolute top-0">
          <ul className={`absolute left-0 right-0 top-full mx-5 flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-patagonia-dark/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 ease-out lg:static lg:mx-0 lg:flex lg:max-w-[70%] lg:flex-row lg:gap-x-4 lg:gap-y-2 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none ${isMenuOpen? 'visible max-h-96 translate-y-2 opacity-100 lg:translate-y-0' : 'invisible max-h-0 -translate-y-2 opacity-0 lg:visible lg:max-h-none lg:translate-y-0 lg:opacity-100'}`}>
            {heroNavItems.map((item) => (
              <li key={item.label} className="group">
                <a href={item.link} onClick={closeMenu} className="block text-white hover:text-patagonia-teal font-semibold transition-all duration-300">
                  {item.label}
                </a>
                <span className="block w-0 h-0.5 mt-2 bg-patagonia-teal group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
          <div className="flex m-1 px-6 w-full justify-between items-center gap-4 lg:w-auto lg:justify-end">
            <SocialLinks className="shrink-0 gap-4 sm:gap-6 lg:gap-8" />
            <button type="button" aria-label={isMenuOpen? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((o) =>!o)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md lg:hidden">
              <FaBars className={`absolute text-lg transition-all duration-300 ${isMenuOpen? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
              <FaXmark className={`absolute text-xl transition-all duration-300 ${isMenuOpen? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
            </button>
          </div>
        </nav>

        <div className="text-center">
          <h1 className="block text-white font-sans leading-none">
            <span className="mr-[2.5px] text-5xl sm:text-7xl lg:text-8xl text-patagonia-teal font-light">{'{'}</span>
            <span className="text-4xl sm:text-6xl lg:text-7xl font-bold">Patagonia<span className="text-patagonia-teal">Script</span></span>
            <span className="ml-[2.5px] text-5xl sm:text-7xl lg:text-8xl text-patagonia-teal font-light">{'}'}</span>
          </h1>
          <p className="block text-white text-base sm:text-xl lg:text-2xl mt-6 sm:mt-8 italic max-w-2xl mx-auto">
            {t('description')}
          </p>
          {/* BOTON UNICO - ARREGLADO */}
          <button
            className="py-3 px-5 mt-10 sm:mt-12 text-sm sm:text-md bg-gradient-to-r from-patagonia-cyan via-patagonia-turquoise to-patagonia-teal text-white font-bold rounded-3xl hover:scale-105 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              window.open('/api/contact-redirect', '_blank');
            }}
          >
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  );
};