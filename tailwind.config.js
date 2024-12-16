/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#4D2F8C",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimpupple: "#4D2F8C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        moveLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        moveRight: "moveRight 10s linear infinite",
        moveLeft: "moveLeft 10s linear infinite",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#030014",
//         secondary: "#4D2F8C",
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         dimBlue: "rgba(9, 151, 124, 0.1)",
//         dimpupple: "#4D2F8C",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//     },
//     screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",
//     },
//   },
//   plugins: [],
// };
