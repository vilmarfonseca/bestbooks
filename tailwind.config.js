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
        DEFAULT: "25px",
        lg: "100px",
      },
    },
    extend: {
      boxShadow: {
        card: "-2px 2px 10px 0px rgba(0, 0, 0, 0.50)"
      },
      colors: {
        primary: "#FAF3E4",
        secondary: "#4A6A71",
        cta: "#A75B35",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        serif: ["Forum", ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
