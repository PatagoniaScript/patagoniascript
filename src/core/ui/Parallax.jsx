'use client';

import { useEffect, useRef } from 'react';

export const Parallax = ({ children, speed = 0.15, className = '' }) => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return undefined;

    let rafId;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress =
        (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const offset = progress * speed * viewportHeight * -1;

      inner.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef} className="will-change-transform h-full w-full">
        {children}
      </div>
    </div>
  );
};
