const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: [
      "./public/**/*.html",
      "./src/**/*.vue",
      "./src/utils/projects.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      white: colors.white,
      purple: colors.purple,
      green: colors.green,
      yellow: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
