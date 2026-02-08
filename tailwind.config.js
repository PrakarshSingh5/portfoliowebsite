/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Off-white/Cream
        surface: '#FFFFFF', // Pure white
        primary: {
          DEFAULT: '#EA580C', // Orange-600
          hover: '#C2410C', // Orange-700
          light: '#FFEDD5', // Orange-100
        },
        secondary: '#F59E0B', // Amber
        text: {
          primary: '#1C1917', // Warm Stone-900
          secondary: '#44403C', // Warm Stone-700
          light: '#78716C', // Warm Stone-500
        },
        accent: '#FDE68A', // Amber-200
        border: '#E7E5E4', // Warm Stone-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(to right, #FFF7ED, #FEF3C7)',
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(234, 88, 12, 0.1)',
        'warm-hover': '0 10px 25px -5px rgba(234, 88, 12, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
      }
    },
  },
  plugins: [],
};
