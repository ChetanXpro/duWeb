/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        trans:'rgb(0,0,0,0.9)'
      },
      backgroundImage:{
        'hero-image':'url("./assets/earth.jpg")'
      },
    },
  },
  plugins: [],
}