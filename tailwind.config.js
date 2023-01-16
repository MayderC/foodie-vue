/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        naranjita: "#ff735c",
        naranja: "#f4634b",
        azulito: "#1a2e35",
      },
    },
  },
  plugins: [],
};
