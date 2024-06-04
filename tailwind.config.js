/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        w: "#ffffff",
      },
      fontFamily: {
        // sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
