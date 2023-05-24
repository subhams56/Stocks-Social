/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: "#0F0F0F",},
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'nunito': ['Nunito', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif'],
        },
    },
  },
  plugins: [],
}