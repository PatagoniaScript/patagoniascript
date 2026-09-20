'use client';

import { useTranslations } from 'next-intl';
import { CldImage } from 'next-cloudinary';

export const ProjectCard = ({
  project,
  isActive,
  onClick,
  cardStyle,
  isDragging = false,
}) => {
  const t = useTranslations('showPortfolio');

  return (
    <div
      className="absolute bottom-8 left-1/2 cursor-pointer h-[430px] sm:h-[450px]"
      style={{
        ...cardStyle,
        width: 'min(380px, calc(100vw - 2rem))',
        marginLeft: 'max(-190px, calc((2rem - 100vw) / 2))',
        marginTop: '-275px',
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: isDragging ? 'none' : 'auto',
      }}
      onClick={onClick}
    >
      <div
        className="
        relative h-full bg-gradient-to-br from-patagonia-darkest/20 to-patagonia-petrol/20 backdrop-blur-xl
        border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden p-6
        hover:border-patagonia-teal/70 transition-all duration-700 flex flex-col justify-between
      "
      >
        <div className="w-full h-40 relative rounded-md overflow-hidden mb-4">
          <CldImage
            src={project.imgUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 90vw, 380px"
            className="object-cover"
            crop="fill"
            gravity="auto"
            quality="auto"
            format="auto"
            priority={isActive}
          />
        </div>

        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-patagonia-muted bg-clip-text text-transparent mb-2">
          {project.title}
        </h3>
        {/* <p className="text-sm text-patagonia-muted mb-2">
          Temporary Description
        </p> */}

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium bg-patagonia-turquoise/10 text-patagonia-teal rounded border border-patagonia-teal/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-300 flex-1 mb-2">
          {project.description}
        </p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <button className="w-full py-2.5 px-4 bg-gradient-to-r from-patagonia-teal to-patagonia-petrol text-white font-semibold rounded-lg text-sm shadow-lg hover:shadow-patagonia-teal/40 transition-all duration-300 hover:scale-105">
            {t('cta')}
          </button>
        </a>
      </div>
    </div>
  );
};
