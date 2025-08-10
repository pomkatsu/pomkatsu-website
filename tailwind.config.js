/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#46301C',
          light: '#5A3E26',
          dark: '#2E1F12',
        },
        'secondary': {
          DEFAULT: '#FCF1DC',
          light: '#FFF8ED',
          dark: '#F5E5C8',
        },
        'pomkatsu': {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        'legal': {
          'text': '#5A3E26',
          'heading': '#46301C',
          'muted': '#6B7280',
          'border': '#F5E5C8',
          'warning': '#be123c',
          'warning-light': '#fecdd3',
          'warning-dark': '#881337',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}