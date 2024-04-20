/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    fontFamily: {
      ariana: ["ariana", "sans-serif"],
    },
    extend: {
      borderWidth: {
        1.4: "1.4px",
      },
      colors: {
        theme_gray: "#6b7280",
        theme_light_gray: "#f7f5f6",
        theme_green: "#d1ee7f",
        theme_light_green: "#d9e9aa",
        theme_dark_green: "#707d3f",
        theme_black: "#181d19",
        theme_white: "white",
        // Dark Mode
        theme_white_dark: "#040D12",
        theme_black_dark: "#E5E5CB",
        theme_light_gray_dark: "#1b1b1b",
        theme_gray_dark: "#93B1A6",
        theme_light_green_dark: "#707d3f",
      },
    },
    screens: {
      xl: { max: "1200px" },
      // 1025px — 1280px: Desktops

      lg: { max: "1023px" },
      // 769px — 1024px: Small screens, laptops

      md: { max: "767px" },
      // 481px — 768px: iPads, Tablets

      sm: { max: "480px" },
      // 320px — 480px: Mobile devices

      xs: { max: "350px" },
      // 350px: Small Devices
    },
  },
  plugins: [],
};
