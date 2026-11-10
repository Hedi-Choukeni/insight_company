/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#031812',
          'dark-surface': '#042018',
          secondary: '#052A20',
          forest: '#022C22',
          'forest-deep': '#011F18',
          emerald: '#064E3B',
          'emerald-light': '#0a6b52',
          neon: '#00E676',
          bright: '#39FF88',
          'neon-glow': 'rgba(0, 230, 118, 0.35)',
          muted: '#A7B8AF',
          'muted-light': '#D1D5DB',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Italiana', 'Cinzel', 'serif']
      },
      boxShadow: {
        'neon': '0 0 25px rgba(0, 230, 118, 0.45)',
        'neon-lg': '0 0 50px rgba(0, 230, 118, 0.3), 0 0 100px rgba(6, 78, 59, 0.5)',
        'emerald': '0 10px 40px -10px rgba(6, 78, 59, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(-2deg)' },
        }
      }
    },
  },
  plugins: [],
}

