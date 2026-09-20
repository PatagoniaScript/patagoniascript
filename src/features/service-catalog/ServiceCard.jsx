'use client';

const isQuotePrice = (price) => price === 'COTIZAR' || price === 'GET A QUOTE';

export const ServiceCard = ({
  pkg,
  isActive,
  style,
  onClick,
  onCtaClick,
  arsLabel,
  viewPlanLabel,
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 cursor-pointer"
      style={{
        ...style,
        width: '380px',
        height: '570px',
        marginLeft: '-190px',
        marginTop: '-285px',
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
      onClick={onClick}
    >
      {pkg.badge && isActive && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
          <span className="bg-gradient-to-r from-patagonia-cyan to-patagonia-turquoise text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {pkg.badge}
          </span>
        </div>
      )}

      <div
        className={`
          relative h-full bg-gradient-to-br from-patagonia-petrol/40 to-patagonia-darkest/90 backdrop-blur-xl
          border ${pkg.popular && isActive ? 'border-patagonia-turquoise/60' : 'border-patagonia-muted/20'}
          rounded-xl shadow-2xl transition-all duration-700 flex flex-col overflow-hidden p-8
          ${isActive ? 'hover:shadow-patagonia-turquoise/30 hover:border-patagonia-turquoise/70' : 'hover:border-patagonia-muted/30'}
        `}
      >
        <div className="text-center mb-4">
          <h3
            className={`${isActive ? 'text-patagonia-subtitle' : 'text-base'} font-bold text-patagonia-light mb-2`}
          >
            {pkg.name}
          </h3>

          {isActive && (
            <p
              className="text-patagonia-muted leading-snug"
              style={{ fontSize: '0.8rem' }}
            >
              {pkg.subtitle} · {pkg.pitch}
            </p>
          )}

          <div className="mt-3 mb-1">
            <span
              className={`${isActive ? 'text-patagonia-title' : 'text-xl'} font-bold bg-gradient-to-r text-patagonia-turquoise bg-clip-text`}
            >
              {pkg.price}
            </span>
            {!isQuotePrice(pkg.price) && (
              <span className="text-patagonia-teal text-sm ml-1">
                {arsLabel}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 mb-6 overflow-y-auto min-h-0 pr-1">
          <ul className="space-y-2">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <div
                  className={`${isActive ? 'w-2.5 h-2.5' : 'w-2 h-2'} rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center flex-shrink-0 mt-1`}
                >
                  <svg
                    className="w-1.5 h-1.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span
                  className="text-secondary-white leading-snug"
                  style={{ fontSize: isActive ? '0.85rem' : '0.7rem' }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();

            if (isActive) {
              const apiEndpoint = `/api/contact-redirect?plan=${encodeURIComponent(pkg.name)}`;
              window.open(apiEndpoint, '_blank');
            } else {
              onCtaClick();
            }
          }}
          className={`
            w-full rounded-lg font-semibold text-white
            bg-gradient-to-r ${pkg.color}
            shadow-lg transition-all duration-300
            ${isActive ? 'py-3 px-4 text-base hover:scale-105 hover:shadow-xl' : 'py-2 px-3 text-xs opacity-75'}
            transform flex items-center justify-center gap-2
          `}
        >
          {isActive && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403" />
            </svg>
          )}
          {isActive ? pkg.cta : viewPlanLabel}
        </button>
      </div>
    </div>
  );
};
