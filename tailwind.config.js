/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    container: {
      padding: {
        DEFAULT: "5px",
        lg: "25px",
      },
    },
    extend: {
      colors: {
        primary: "#FAF3E4",
        secondary: "#4A6A71",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        serif: ["Forum", ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
