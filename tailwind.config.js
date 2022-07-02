const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css,scss}",
    "./components/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "200px",
        md: "700px",
        lg: "976px",
        xl: "1440px",
      },

      fontFamily: {
        spec: ["Spectral", ...defaultTheme.fontFamily.sans],
        spec: ["Spectral"],
        gros: ["Space Grotesk"],
      },
      colors: {
        pup: "#B963D8",
      },
    },
  },
  plugins: [],
};