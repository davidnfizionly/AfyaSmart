/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode with class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        teal: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#2CB9B0', // Primary teal
          600: '#1a8e87',
          700: '#13635e',
          800: '#0d3e3b',
          900: '#061e1d',
        },
        'lavender-gray': {
          DEFAULT: '#D6D7E0',
        },
        salmon: {
          DEFAULT: '#FF7B72',
        },
        gray: {
          750: '#2D3748', // Custom gray between 700 and 800 for dark mode
        },
      },
    },
  },
  plugins: [],
};