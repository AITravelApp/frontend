/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#afc125',
      hoverprime: '#e5cd4e',
      secondary: '#f8de55',
      hoversecon: '#A3B422',
      accent: '#12355b',

      dark: '#1d1d1d',
      'dark-page': '#121212',

      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    },
    keyframes: {
      zoomIn: {
        '0%': {transform: 'scale(1)', filter: 'blur(0)'},
        '100%': {transform: 'scale(1.2)', filter: 'blur(5px)'},
      },
    },
    animation: {
      zoomIn: 'zoomIn 1.5s ease-in-out forwards'
    },
  },
  plugins: [],
}
