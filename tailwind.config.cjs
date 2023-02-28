/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#854d0e",
      secondary: "#D86D67",
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      green: colors.green,
      lime: colors.lime,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      stone: colors.stone,
      neutral: colors.neutral,
      zinc: colors.zinc,
      slate: colors.slate,
    },
  },
  plugins: [],
};
