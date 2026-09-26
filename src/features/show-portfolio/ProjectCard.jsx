'use client';

import { useTranslations } from 'next-intl';
import { CldImage } from 'next-cloudinary';
import { Parallax } from '@/core/ui/Parallax';

export const ProjectCard = ({ project, isActive }) => {
  const t = useTranslations('showPortfolio');

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-xl border bg-gradient-to-br from-patagonia-darkest/20 to-patagonia-petrol/20 p-6 shadow-2xl transition-all duration-700 lg:h-[450px] lg:w-[380px] lg:min-w-[380px] lg:snap-center ${
        isActive
          ? 'border-patagonia-teal/70 shadow-patagonia-teal/10'
          : 'border-slate-700/50 lg:opacity-75 lg:hover:opacity-100'
      }`}
    >
      <div className="relative flex h-full flex-col justify-between">
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md">
          <Parallax speed={0.12} className="h-full w-full">
            <CldImage
              src={project.imgUrl}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              crop="fill"
              gravity="auto"
              quality="auto"
              format="auto"
              priority={isActive}
            />
          </Parallax>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>

        <div className="mb-3 flex flex-wrap gap-1">
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="rounded border border-patagonia-teal/60 bg-patagonia-turquoise/10 px-2 py-1 text-xs font-medium text-patagonia-teal"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-2 flex-1 text-sm text-gray-300">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="block w-full rounded-lg bg-gradient-to-r from-patagonia-teal to-patagonia-petrol px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-patagonia-teal/40"
        >
          {t('cta')}
        </a>
      </div>
    </div>
  );
};
