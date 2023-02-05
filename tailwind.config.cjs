/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ropa: ["Ropa Sans", "sans-serif"],
        libre: ["Libre Caslon Text", "serif"],
      },
    },
  },
  plugins: [],
};
