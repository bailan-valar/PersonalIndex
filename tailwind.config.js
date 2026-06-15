/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,ts}',
    './content/**/*.{md,markdown}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Indigo - creativity
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899', // Pink - accent
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Semantic tokens reference the CSS variables defined in main.css
        // (:root for light, .dark for dark). This makes class-based dark mode
        // actually flip these tokens; light-mode values are identical to the
        // previous static hex values.
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          light: 'rgb(var(--color-surface) / <alpha-value>)',
          dark: '#0f172a',
        },
        background: {
          DEFAULT: 'rgb(var(--color-background) / <alpha-value>)',
          light: 'rgb(var(--color-background) / <alpha-value>)',
          dark: '#020617',
        },
        text: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        },
        ring: {
          primary: '#6366f1',
          background: 'rgb(var(--color-background) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'container': '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
