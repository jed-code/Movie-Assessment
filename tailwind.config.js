/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#151218',
        secondary: '#6B6B6B',
        danger: '#E80000',
        warning: '#D7D404',
        success: '#01A30F',
        bgLight: '#46404C',
        main: '#4750FC',
        darkColor: '#1D1920',
      },
    },
  },
  plugins: [],
};
