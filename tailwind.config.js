/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#282828",
        white: "#FFFFFF",
        main: "#FF6B00",
        lightGray: "#F6F6F6",
        gray: "#808080",
      },
      fontFamily: {
        nHasGrotexk: ["NHaasGroteskTXPro", "sans-serif"],
        swearDisplay: ["SwearDisplay", "serif"],
      },
      padding: {
        mobile: "20px",
        tablet: "50px",
        desktop: "100px",
      },
      fontSize: {
        titleDesktop: "48px",
        titleTablet: "38px",
        titleMobile: "28px",
        subtitleDesktop: "30px",
        subtitleTablet: "24px",
        text: "16px",
        sm: "14px",
        xsm: "12px",
      },
      spacing: {
        20: "20px",
        30: "30px",
        100: "100px",
      },
    },
  },
  plugins: [],
};
