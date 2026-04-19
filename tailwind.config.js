/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',   // Near-black
        surface: '#111114',      // Dark surface
        'surface-2': '#18181C',  // Card surface
        'surface-3': '#1E1E24',  // Elevated surface
        primary: {
          DEFAULT: '#6366F1',    // Indigo-500
          hover: '#4F46E5',      // Indigo-600
          light: '#1E1B4B',      // Indigo-950
          glow: 'rgba(99,102,241,0.25)',
        },
        secondary: '#A78BFA',    // Violet-400
        accent: '#38BDF8',       // Sky-400
        text: {
          primary: '#F4F4F5',    // Zinc-100
          secondary: '#A1A1AA',  // Zinc-400
          light: '#71717A',      // Zinc-500
          muted: '#52525B',      // Zinc-600
        },
        border: '#27272A',       // Zinc-800
        'border-light': '#3F3F46', // Zinc-700
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'blob': 'blob 9s infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1.2s step-end infinite',
        'gradient-x': 'gradientX 4s ease infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #09090B 0%, #0f0f18 100%)',
        'gradient-primary': 'linear-gradient(135deg, #6366F1, #A78BFA)',
        'gradient-accent': 'linear-gradient(135deg, #38BDF8, #6366F1)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
        'grid-pattern': 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(99,102,241,0.25)',
        'glow-lg': '0 0 60px rgba(99,102,241,0.2)',
        'glow-sm': '0 0 15px rgba(99,102,241,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
        'inset-border': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
};
