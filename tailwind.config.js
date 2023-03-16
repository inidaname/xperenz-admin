/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dashboardBg: "#f0ecf0",
        xbtnColor: "#950067",
        altColor: "#ca80b3",
      }
    },
    screens: {

      'xs': '390px',
      '3xl': '1440px',
      '4xl': '1600px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
