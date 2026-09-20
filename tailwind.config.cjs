module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        patagonia: {
          darkest: '#030303',
          dark: '#000013',
          petrol: '#0E3F4C',
          cyan: '#1389A4',
          turquoise: '#1FBCBD',
          teal: '#31B9A7',
          muted: '#B0B6C2',
          light: '#F2F2F2',
        },
      },
      fontSize: {
        'patagonia-title': [
          'clamp(1.75rem, 3vw + 1rem, 3rem)',
          { lineHeight: '1.2' },
        ],
        'patagonia-subtitle': [
          'clamp(1.25rem, 1.5vw + 0.75rem, 1.75rem)',
          { lineHeight: '1.4' },
        ],
        'patagonia-description': [
          'clamp(1.25rem, 0.5vw + 0.8rem, 1.125rem)',
          { lineHeight: '1.6' },
        ],
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
