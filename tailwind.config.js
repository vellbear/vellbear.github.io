/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}./index.html"],
  theme: {
    extend: {
      fontFamily: {
        elise: ["Elsie Swash Caps", "cursive"],
        antonio: ["Antonio", "sans-serif"],
        "six-caps": ["Six Caps", "sans-serif"],
      },
      letterSpacing: {
        custom: ".01em",
      },
    },
  },
  plugins: [],
};
