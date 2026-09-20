'use client';

import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ServiceCard } from './ServiceCard';

const MIN_SWIPE_DISTANCE = 50;

export const ServiceCarousel = ({
  plans,
  onSelectPlan,
  prevCardLabel,
  nextCardLabel,
  arsLabel,
  viewPlanLabel,
  goToPlanLabel,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % plans.length);
  const goToPrevious = () =>
    setActiveIndex((prev) => (prev - 1 + plans.length) % plans.length);

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
    if (distance > MIN_SWIPE_DISTANCE) goToNext();
    else if (distance < -MIN_SWIPE_DISTANCE) goToPrevious();
    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      else if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [plans.length]);

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, plans.length - 1));
  }, [plans.length]);

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    if (position === 0)
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 20,
        opacity: 1,
        pointerEvents: isDragging ? 'none' : 'auto',
      };
    if (position === -1)
      return {
        transform: 'translateX(-60%) scale(0.8) rotateY(25deg)',
        zIndex: 10,
        opacity: 0.7,
        pointerEvents: isDragging ? 'none' : 'auto',
      };
    if (position === 1)
      return {
        transform: 'translateX(60%) scale(0.8) rotateY(-25deg)',
        zIndex: 10,
        opacity: 0.7,
        pointerEvents: isDragging ? 'none' : 'auto',
      };
    return {
      transform: 'translateX(0%) scale(0.6)',
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
    };
  };

  const handleWhatsAppRedirect = (pkg) => {
    const apiEndpoint = `/api/contact-redirect?plan=${encodeURIComponent(pkg.name)}&price=${encodeURIComponent(pkg.price)}`;

    window.open(apiEndpoint, '_blank');
  };

  return (
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
          aria-label={prevCardLabel}
          className="absolute left-28 top-1/2 transform -translate-y-1/2 z-30 text-patagonia-muted hover:text-patagonia-teal p-2 rounded-full shadow-lg hidden xl:flex transition-all duration-300 hover:scale-110 hover:-translate-x-4"
        >
          <IoIosArrowBack size={32} />
        </button>

        <button
          onClick={goToNext}
          aria-label={nextCardLabel}
          className="absolute right-28 top-1/2 transform -translate-y-1/2 z-30 text-patagonia-muted hover:text-patagonia-teal p-2 rounded-full shadow-lg hidden xl:flex transition-all duration-300 hover:scale-110 hover:translate-x-4"
        >
          <IoIosArrowForward size={32} />
        </button>

        {plans.map((pkg, index) => (
          <ServiceCard
            key={index}
            pkg={pkg}
            isActive={index === activeIndex}
            style={getCardStyle(index)}
            onClick={() =>
              !isDragging && index !== activeIndex && setActiveIndex(index)
            }
            onCtaClick={() =>
              index === activeIndex
                ? handleWhatsAppRedirect(pkg)
                : setActiveIndex(index)
            }
            arsLabel={arsLabel}
            viewPlanLabel={viewPlanLabel}
          />
        ))}
      </div>
    </div>
  );
};
