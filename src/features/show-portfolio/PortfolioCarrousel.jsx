'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ProjectCard } from './ProjectCard';

export const PortfolioCarrousel = ({ projects }) => {
  const t = useTranslations('showPortfolio');
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollPhase, setScrollPhase] = useState('before');
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateViewportMode = () => setIsDesktop(mediaQuery.matches);
    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const measureTrack = () => {
      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setScrollDistance(distance);
    };

    const resizeObserver = new ResizeObserver(measureTrack);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    measureTrack();

    return () => resizeObserver.disconnect();
  }, [projects.length]);

  useEffect(() => {
    if (!isDesktop || !scrollDistance) return undefined;

    let frameId;
    const updateScrollProgress = () => {
      frameId = undefined;
      const section = sectionRef.current;
      if (!section) return;

      const progress = Math.min(
        1,
        Math.max(0, -section.getBoundingClientRect().top / scrollDistance),
      );
      const sectionTop = section.getBoundingClientRect().top;
      const nextPhase =
        sectionTop > 0
          ? 'before'
          : -sectionTop < scrollDistance
            ? 'active'
            : 'after';
      setScrollProgress((currentProgress) =>
        Math.abs(currentProgress - progress) > 0.001
          ? progress
          : currentProgress,
      );
      setScrollPhase(nextPhase);
      setActiveIndex(
        Math.min(
          projects.length - 1,
          Math.round(progress * (projects.length - 1)),
        ),
      );
    };
    const handleScroll = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, [isDesktop, projects.length, scrollDistance]);

  return (
    <section
      ref={sectionRef}
      className="relative lg:h-[calc(100vh+var(--portfolio-scroll-distance))]"
      style={{ '--portfolio-scroll-distance': `${scrollDistance}px` }}
    >
      <div
        className="relative z-10 mx-auto max-w-[1600px] pb-4 lg:flex lg:h-screen lg:flex-col lg:justify-center"
        style={
          isDesktop
            ? {
                position: scrollPhase === 'active' ? 'fixed' : 'absolute',
                top: scrollPhase === 'after' ? `${scrollDistance}px` : '0px',
                left: 0,
                right: 0,
                height: '100vh',
              }
            : undefined
        }
      >
        <div className="mb-5 flex items-center justify-between px-5 sm:px-8 lg:px-16">
          <p className="text-xs uppercase tracking-[0.25em] text-patagonia-muted">
            01 / {String(projects.length).padStart(2, '0')}
          </p>
          <div className="hidden items-center gap-3 text-xs text-patagonia-muted sm:flex">
            <span>{t('scrollHint')}</span>
            <span className="h-px w-12 bg-patagonia-teal/60" />
          </div>
        </div>

        <div ref={viewportRef} className="relative overflow-hidden">
          <div
            ref={trackRef}
            tabIndex={0}
            aria-label="Portfolio projects"
            className="portfolio-track grid grid-cols-1 gap-5 px-5 pb-5 outline-none sm:gap-6 sm:px-8 lg:flex lg:w-max lg:gap-6 lg:px-16"
            style={{
              transform: isDesktop
                ? `translate3d(-${scrollDistance * scrollProgress}px, 0, 0)`
                : undefined,
              willChange: isDesktop ? 'transform' : undefined,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-2 hidden justify-center gap-2 lg:flex"
          aria-hidden="true"
        >
          {projects.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-patagonia-teal'
                  : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
