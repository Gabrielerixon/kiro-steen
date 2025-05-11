import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f8f6',
          100: '#ccf0ed',
          200: '#99e1db',
          300: '#66d2c9',
          400: '#33c3b7',
          500: '#00b4a5',
          600: '#009084',
          700: '#006c63',
          800: '#004842',
          900: '#002421',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            a: {
              color: '#0D9488', // teal-600
              '&:hover': {
                color: '#0F766E', // teal-700
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;