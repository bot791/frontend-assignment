/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        "ubuntu":["'Ubuntu'", "sans-serif"],
        "russo":["'Russo One'", "sans-serif"]
      }
    },
  },
  plugins: [],
}

