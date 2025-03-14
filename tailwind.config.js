/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "selector", // Use class-based dark mode
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], 
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Adjust speed (5s for slow spin)
      },
    },
  },
  plugins: [],
};
