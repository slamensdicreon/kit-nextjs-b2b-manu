import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8ECF3',
          100: '#C5CDDE',
          200: '#9EACC7',
          300: '#778BB0',
          400: '#59729F',
          500: '#3B598F',
          600: '#354F82',
          700: '#2D4270',
          800: '#26365E',
          900: '#1B2A4A',
          950: '#0F1A2E',
        },
        secondary: {
          50: '#E9F1F5',
          100: '#C9DCE7',
          200: '#A5C5D7',
          300: '#81AEC7',
          400: '#659DBB',
          500: '#4A7C9B',
          600: '#43718D',
          700: '#3A6279',
          800: '#325466',
          900: '#253E4C',
        },
        accent: {
          50: '#FFF3ED',
          100: '#FFE1D0',
          200: '#FFBFA0',
          300: '#FF9D70',
          400: '#FF8450',
          500: '#FF6B35',
          600: '#F05A20',
          700: '#CC4A18',
          800: '#A63B14',
          900: '#7A2D10',
        },
        surface: {
          50: '#FAFBFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
        elevated: '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)',
        overlay: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
