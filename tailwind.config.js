/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          dark: '#2C1810',
          mid: '#4A2C17',
          light: '#8B5E3C',
        },
        orange: {
          primary: '#D4681E',
          light: '#E8863A',
        },
        beige: {
          DEFAULT: '#F5E6D0',
          light: '#FBF5EC',
        },
        stone: {
          warm: '#9B9589',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      scale: {
        '108': '1.08',
      },
    },
  },
  plugins: [],
};
