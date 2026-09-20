'use client';

import { useState, useEffect, useMemo } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ProjectCard } from './ProjectCard';

export const PortfolioCarrousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsDragging(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    else if (isRightSwipe) goToPrevious();

    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      else if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    if (position === 0)
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 20,
        opacity: 1,
      };
    if (position === -1)
      return {
        transform: 'translateX(-60%) scale(0.8) rotateY(25deg)',
        zIndex: 10,
        opacity: 0.7,
      };
    if (position === 1)
      return {
        transform: 'translateX(60%) scale(0.8) rotateY(-25deg)',
        zIndex: 10,
        opacity: 0.7,
      };
    return { transform: 'translateX(0%) scale(0.6)', zIndex: 1, opacity: 0 };
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl pb-4 mx-auto relative z-10">
        <div
          className="relative w-full max-w-6xl mx-auto select-none flex justify-center content-center"
          style={{ perspective: '1200px', height: '500px' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={goToPrevious}
            className="absolute left-28 top-1/2 transform -translate-y-1/2 z-30 text-patagonia-muted hover:text-patagonia-teal p-2 rounded-full shadow-lg hidden xl:flex transition-all duration-300 hover:scale-110 hover:-translate-x-4"
          >
            <IoIosArrowBack size={32} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-28 top-1/2 transform -translate-y-1/2 z-30 text-patagonia-muted hover:text-patagonia-teal p-2 rounded-full shadow-lg hidden xl:flex transition-all duration-300 hover:scale-110 hover:translate-x-4"
          >
            <IoIosArrowForward size={32} />
          </button>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={index === activeIndex}
              isDragging={isDragging}
              onClick={() => !isDragging && setActiveIndex(index)}
              cardStyle={getCardStyle(index)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-patagonia-teal scale-125'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
