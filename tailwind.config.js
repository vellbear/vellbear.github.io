/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
