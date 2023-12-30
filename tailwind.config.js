/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // primary
      "bright-red": "hsl(12, 88%, 59%)",
      "dark-blue": "hsl(228, 39%, 23%)",
      brightRedLight: "hsl(12, 88% 69%)",

      // neutral
      "dark-grayish-blue": "hsl(227, 12%, 61%)",
      "very-dark-blue": "hsl(233, 12%, 13%)",
      "very-pale-red": "hsl(13, 100%, 96%)",
      veryLightGray: "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      vietnam: ["Be Vietnam Pro", "sans-serif"],
    },
    backgroundImage: {
      banner: "url('./src/assets/images/bg-simplify-section-desktop.svg')",
    },
    extend: {},
  },
  plugins: [],
};
