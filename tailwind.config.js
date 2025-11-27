/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9fafb', // Gray 50 - Warm, soft white
        surface: '#ffffff', // Pure white
        primary: '#475569', // Slate 600 - Muted, elegant blue-grey
        secondary: '#94a3b8', // Slate 400 - Soft secondary
        accent: '#cbd5e1', // Slate 300 - Very subtle accent
        text: {
          primary: '#334155', // Slate 700 - Softer than black
          secondary: '#64748b', // Slate 500 - Muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        shimmer: 'shimmer 2s infinite linear',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.01)',
      }
    },
  },
  plugins: [],
};
