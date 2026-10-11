/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main site (homepage, legal pages): ink on white
        'primary': {
          DEFAULT: '#1D1E22', // headings and text
          light: '#5C6068',   // secondary text
          dark: '#0F1012',    // strongest text, hover on ink fills
        },
        'secondary': {
          DEFAULT: '#FFFFFF', // page
          light: '#F4F5F7',   // washes and hover fills
          dark: '#E3E5E9',    // borders
        },
        // The one accent, taken from the mascot's cutlet. A fill, never a text colour.
        'katsu': {
          DEFAULT: '#F5A623',
          dark: '#E0920F',
        },
        'cream': '#FCF1DE', // the logo's own background, kept for the mascot's tile
        'live': '#12D45F',  // status dot for a shipped product
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
          'navy': '#000922', // app icon background
        },
        // BentoBook, from its quasar.variables.scss
        'bentobook': {
          'indigo': '#4f46e5',      // room behind the dashboard
          'indigo-dark': '#3730a3', // frame edge
          'night': '#28243d',       // the app's dark background
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
        'myseedstory': {
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
        // CertMatrix Carbon Light, copied from certvault apps/site/src/styles/site.css
        'certmatrix': {
          'wall': '#efece5',     // page background
          'paper': '#e7e3da',    // frames and bands
          'ink': '#15140f',      // text
          'mut': '#55534a',      // secondary text
          'rule': '#cbc5b6',     // borders
          'acc': '#8136e3',      // the one accent
          'acc-dark': '#6a25c9', // accent hover
        },
        'legal': {
          'text': '#474B53',
          'heading': '#1D1E22',
          'muted': '#6B7280',
          'border': '#E3E5E9',
          'warning': '#be123c',
          'warning-light': '#fecdd3',
          'warning-dark': '#881337',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        'display': ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'brand': ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}