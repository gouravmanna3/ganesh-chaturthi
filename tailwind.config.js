/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriWeather: ["Merriweather", "serif"],
      },
      colors: {
        customYellow: "#f4b32b",
        customPurple: "#44233b",
      },
    },
  },
  plugins: [],
};
