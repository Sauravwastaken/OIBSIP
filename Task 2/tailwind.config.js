/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },

      colors: {
        theme_grey: "#4E4B66",
        theme_black: "#14142b",
        theme_primary: "#2D9596",
        theme_light_blue: "#EFF0F6",
        // Dark Mode
        // theme_black_dark: "#EFF0F6",
        // theme_white_dark: "#161616",
        // theme_grey_dark: "#a0a0a0",
        // theme_light_blue_dark: "#000",

        theme_black_dark: "#F6F6F6",
        theme_white_dark: "#212121",
        theme_grey_dark: "#a0a0a0",
        theme_light_blue_dark: "#000",
      },
    },
    screens: {
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
  },
  plugins: [],
};
