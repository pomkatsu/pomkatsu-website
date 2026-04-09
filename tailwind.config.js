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
        'et': {
          'purple': '#a855f7',
          'purple-light': '#c084fc',
          'purple-dark': '#9333ea',
          'bg': '#ffffff',
          'bg-alt': '#fafafa',
          'bg-muted': '#f4f4f5',
          'text': '#18181b',
          'text-light': '#52525b',
          'border': '#e4e4e7',
        },
        'astral': {
          'deep': '#330963',
          'cosmic': '#9B59B6',
          'bg': '#3A007C',
          'header': '#542987',
          'card': '#572F7F',
          'topic': '#552589',
          'light': '#8144C5',
          'gold': '#EFDB5E',
          'destructive': '#E84393',
        },
        'seedbook': {
          'forest': '#1B4332',       // forest-700 — primary text/structure
          'forest-dark': '#0F2A1F',  // darker band for CTA footer
          'forest-light': '#2D6A4F', // forest-600
          'clay': '#A05C42',         // clay-600 — CTA accent
          'clay-light': '#C17A5C',   // clay-500 hover
          'sage': '#52796F',         // sage-600 — secondary
          'parch': '#FAFAF5',        // parch-50 — page bg
          'parch-warm': '#F5F1E8',   // section alt bg
          'parch-border': '#E8EDE8', // parch-200 — hairline
          'parch-text': '#1A1A16',   // parch-900 — deep text
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
        'display': ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'mono': ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}